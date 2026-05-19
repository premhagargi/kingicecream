# Layered Sticky Reveal — Horizontal Line Wipe

A scroll-driven section transition where slides are stacked in place inside a
sticky viewport and an invisible horizontal line sweeps up across the screen
to expose the next slide already sitting underneath. Nothing translates — the
hero image stays spatially anchored; only the `clip-path` of the current slide
animates.

Reference implementations live in this repo:

- [`src/components/StackedScrollSections.tsx`](../src/components/StackedScrollSections.tsx) — the generic stack used by `HomeStack`.
- [`src/components/products/ProductsStack.tsx`](../src/components/products/ProductsStack.tsx) — the same effect customized for the products page (centered transparent PNGs on `bg-white`, plus a heading + scroll cue overlay).

---

## The mental model

Picture the viewport as a stack of full-screen panels, all pinned to the same
position. The top panel is fully opaque. As you scroll, a horizontal divider
line begins at the bottom of the viewport and rises toward the top:

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │   slide 0    │         │              │
│   slide 0    │         │              │         │              │
│              │  →      │──────────────│   →     │   slide 1    │
│              │         │   slide 1    │         │              │
│              │         │              │         │              │
└──────────────┘         └──────────────┘         └──────────────┘
   start                 mid-transition              end
```

- **Above the line:** the current slide (still spatially locked — its image,
  heading, and decorations have not moved a pixel).
- **Below the line:** the next slide, which has been mounted underneath from
  the start, fully positioned, waiting to be uncovered.
- **The line itself:** the edge of the current slide's clip-path inset.

When the line reaches the top, the current slide is fully clipped and the next
slide is the new "top of the stack". The mechanism repeats for each subsequent
pair.

---

## Why not the alternatives

| Approach | What it looks like | Why it's not this effect |
| --- | --- | --- |
| `translateY: 0 → -100%` on whole sections | The card slides off the top, image and content riding up together | Image is *attached* to the moving card — feels like a swiper, not anchored |
| `opacity: 1 → 0` crossfade | Images dissolve into each other | Soft and dreamy, but lacks the cinematic "uncovering" edge |
| `clip-path` on image only, `translateY` on overlay | Image wipes, heading slides off | Heading drifts onto the wrong image mid-transition |
| **`clip-path` on the whole section** ← this doc | A clean horizontal sweep, everything anchored, headings stay glued to their image | ✓ |

---

## Architecture

```
<div ref={containerRef} style={{ height: `${N * 100}vh` }}>  ← scroll runway
  <div class="sticky top-0 h-screen overflow-hidden">        ← sticky stage
    <Section index={0} ... />   z = N        (top of stack)
    <Section index={1} ... />   z = N-1
    <Section index={2} ... />   z = N-2
    ...
    <Section index={N-1} ... /> z = 1        (bottom of stack)
  </div>
</div>
```

- **Outer div** is `N × 100vh` tall — this is the scroll runway. With `N`
  slides, the user scrolls `N` viewports worth.
- **Sticky stage** pins to `top: 0` and is exactly one viewport tall.
- **Each section** is `absolute inset-0` inside the stage, so they all occupy
  the same screen real estate, stacked by `z-index`. Lower index = higher z
  (sits on top).

`useScroll({ target: containerRef, offset: ["start start", "end end"] })`
gives a single `scrollYProgress` motion value that runs `0 → 1` across the
entire runway. That progress is the single source of truth — every per-slide
animation is derived from it.

---

## The math

With `N` slides there are `T = N - 1` transitions. Transition `k` moves slide
`k` out and slide `k + 1` in. It occupies the scroll range
`[k / T, (k + 1) / T]`.

For slide `i`, two ranges matter:

```ts
const transitions = Math.max(1, total - 1);

// Window during which THIS slide is being wiped away.
const wipeStart = index / transitions;
const wipeEnd   = (index + 1) / transitions;

// Window during which the PREVIOUS wipe is exposing this slide.
// Used by overlays/headings that should "rise in" as the slide arrives.
const revealStart = Math.max(0, (index - 1) / transitions);
const revealEnd   = index / transitions;
```

The last slide never wipes (there's nothing after it to expose).

---

## The clip-path

```ts
const clipPath = useTransform(
  scrollYProgress,
  [wipeStart, wipeEnd],
  isLast
    ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    : ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
);
```

CSS `inset()` syntax: `inset(top right bottom left)`. Each value is the
distance the clip edge sits *in from* that side.

- `inset(0% 0% 0% 0%)` — every edge at its native position → nothing clipped.
- `inset(0% 0% 50% 0%)` — bottom edge pulled 50% inward (sitting at the
  vertical middle) → bottom half hidden, top half visible.
- `inset(0% 0% 100% 0%)` — bottom edge pulled all the way to the top →
  nothing visible.

So as `scrollYProgress` advances through `[wipeStart, wipeEnd]`, the bottom
inset grows `0% → 100%`. The bottom edge of the visible region rises,
revealing the slide underneath.

> **Direction note.** This wipe sweeps **bottom → top**. If you want
> top → bottom instead, swap to `["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"]`.
> For left → right use the 4th value; right → left the 2nd.

`will-change-[clip-path]` on the section keeps the browser on the GPU path.

---

## Stacking order

```ts
style={{ clipPath, zIndex: total - index }}
```

Lower indices get higher z. Slide 0 sits on top of slide 1, slide 1 sits on
top of slide 2, etc. As slide `k` wipes away, slide `k + 1` is revealed
underneath, then becomes the new visual front. Slide `k + 2` is still
underneath slide `k + 1`, waiting its turn. Because slides are stacked from
the start, the next scene is always pre-positioned — no layout shift, no
late mount, no loading flash.

---

## Reveal progress for overlay content

The current-slide wipe animates the slide leaving. The *incoming* slide may
also want a subtle animation as it arrives (heading rises in, copy fades up,
etc.). That uses `revealStart → revealEnd`:

```ts
const localProgress = useTransform(
  scrollYProgress,
  [revealStart, revealEnd],
  index === 0 ? [1, 1] : [0, 1],
);
```

`localProgress` runs `0 → 1` during the *previous* slide's wipe — which is
exactly when this slide is being uncovered. Slide 0 has nothing wiping in
front of it, so it stays at `1` (always revealed). Feed `localProgress` into
overlay animations:

```ts
function useRise(progress, range = [0.35, 1]) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y       = useTransform(progress, range, [40, 0]);
  return { opacity, y };
}

const headingStyle = useRise(localProgress, [0.3, 0.85]);
```

Apply `headingStyle` to the heading's `motion.h2` and it'll glide up + fade
in during the second half of the reveal window. This is purely additive — the
horizontal wipe still does the heavy lifting; the rise just polishes the
arrival.

---

## Minimal copy-paste template

```tsx
"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Slide = {
  image: string;
  alt: string;
  content?: ReactNode;
};

export function LayeredStack({ slides }: { slides: Slide[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const total = slides.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, i) => (
          <SectionSlide
            key={i}
            slide={slide}
            index={i}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

function SectionSlide({
  slide, index, total, scrollYProgress,
}: {
  slide: Slide;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const transitions = Math.max(1, total - 1);
  const isLast = index === total - 1;

  const wipeStart = index / transitions;
  const wipeEnd   = (index + 1) / transitions;

  const clipPath = useTransform(
    scrollYProgress,
    [wipeStart, wipeEnd],
    isLast
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
  );

  return (
    <motion.section
      style={{ clipPath, zIndex: total - index }}
      className="absolute inset-0 overflow-hidden will-change-[clip-path]"
    >
      {/* background image / artwork — stays spatially anchored */}
      <img src={slide.image} alt={slide.alt} className="absolute inset-0 h-full w-full object-cover" />
      {/* overlay content */}
      {slide.content && <div className="relative z-10 h-full w-full">{slide.content}</div>}
    </motion.section>
  );
}
```

---

## Variants

### Different wipe directions

Replace the clip-path endpoints:

| Direction | From | To |
| --- | --- | --- |
| Bottom → top (default) | `inset(0% 0% 0% 0%)` | `inset(0% 0% 100% 0%)` |
| Top → bottom | `inset(0% 0% 0% 0%)` | `inset(100% 0% 0% 0%)` |
| Left → right | `inset(0% 0% 0% 0%)` | `inset(0% 0% 0% 100%)` |
| Right → left | `inset(0% 0% 0% 0%)` | `inset(0% 100% 0% 0%)` |
| Diagonal / corner | use `clip-path: polygon(...)` instead of `inset(...)` |

### Easing the wipe

`useTransform` interpolates linearly by default. To curve the wipe, route
`scrollYProgress` through `useTransform` with an `ease` option or pre-compute
an eased progress:

```ts
import { cubicBezier } from "framer-motion";
const easedProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
  ease: cubicBezier(0.65, 0, 0.35, 1),
});
```

Then derive `clipPath` from `easedProgress` instead.

### Per-section content render-prop

If overlay content needs to react to its own reveal progress (e.g. typewriter
text driven by scroll), pass a render function instead of a `ReactNode`:

```ts
type Slide = {
  image: string;
  alt: string;
  content?: ReactNode | ((props: { progress: MotionValue<number> }) => ReactNode);
};

const rendered = typeof slide.content === "function"
  ? slide.content({ progress: localProgress })
  : slide.content;
```

This is the pattern `StackedScrollSections.tsx` already uses — see
`HomeSlides.tsx` for examples (`HeroOverlay`, `StoryOverlay`, etc.).

### Centered artwork over a flat background (ProductsStack style)

If the slide isn't a full-bleed photo but a transparent PNG over a solid
backdrop, drop the `object-cover` image and use a centered container instead:

```tsx
<motion.section
  style={{ clipPath, zIndex: total - index }}
  className="absolute inset-0 overflow-hidden will-change-[clip-path] bg-white"
>
  <div className="absolute inset-x-0 top-[10%] z-10 flex justify-center">
    <motion.h2 style={headingStyle}>{slide.name}</motion.h2>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative h-[78vh] w-[65vw]">
      <Image src={slide.image} alt={slide.alt} fill className="object-contain" />
    </div>
  </div>
</motion.section>
```

The clip-path still wipes the whole section as one unit, so the heading
never decouples from its artwork.

---

## Gotchas

- **`overflow-hidden` on the sticky stage is mandatory.** Without it, the
  clipped portion of a slide can bleed into surrounding layout in some
  browsers.
- **Image priority.** Mark the first slide's image as `priority` so the LCP
  isn't a faded-in hero. Subsequent slides can lazy-load.
- **Don't forget the runway height.** If the outer wrapper isn't
  `N × 100vh`, the sticky stage detaches early and the effect collapses to
  a flash. Always compute height from the slide count.
- **Avoid nesting another `sticky` inside the stage.** Sticky positioning
  doesn't stack well; keep the stage as the only sticky element on the page
  segment.
- **`clip-path` interpolation requires matching shape and unit count.** Both
  endpoints must be `inset(a% b% c% d%)` with the same four percentages —
  Framer Motion can't tween between `inset()` and `polygon()`, or between
  `inset(50%)` shorthand and `inset(0% 0% 50% 0%)`.
- **z-index ordering.** Lower index → higher z. If you ever invert this, the
  wipe will appear to reveal slides in reverse order.
- **Reduced motion.** Users with `prefers-reduced-motion: reduce` may prefer
  to skip the wipe. Gate the `useTransform` with a media-query hook if you
  need strict accessibility.
