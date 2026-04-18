import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  blogPosts,
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  type ContentBlock,
} from "@/lib/blog-posts";

const BASE_URL = "https://www.kingicecream.com";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "King Ice Cream",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="font-serif text-base sm:text-lg text-foreground leading-[1.85] mb-6"
        >
          {block.text}
        </p>
      );
    case "heading":
      if (block.level === 2) {
        return (
          <h2
            key={index}
            className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-foreground leading-[1.1] mt-12 sm:mt-16 mb-5"
          >
            {block.text}
          </h2>
        );
      }
      return (
        <h3
          key={index}
          className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-foreground leading-snug mt-8 mb-4"
        >
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 sm:my-10 pl-6 sm:pl-8 border-l-2 border-gold"
        >
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <footer className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    case "list":
      if (block.style === "number") {
        return (
          <ol
            key={index}
            className="list-decimal pl-6 mb-6 space-y-2 font-serif text-base sm:text-lg text-foreground"
          >
            {block.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 font-serif text-base sm:text-lg text-foreground leading-relaxed"
            >
              <span className="text-gold mt-1.5 shrink-0">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside
          key={index}
          className="my-8 sm:my-10 p-5 sm:p-6 border-l-4 border-gold bg-[#f5f0e8]/60"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-2">
            {block.label}
          </p>
          <p className="font-serif text-base sm:text-lg text-foreground leading-relaxed">
            {block.text}
          </p>
        </aside>
      );
    case "image":
      return (
        <figure key={index} className="my-8 sm:my-10">
          <div className="relative aspect-[16/9] overflow-hidden border border-border">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 font-sans text-xs text-muted-foreground italic text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "embed":
      return (
        <div
          key={index}
          className="my-8 sm:my-10 p-5 sm:p-6 border border-border bg-[#f5f0e8]/60"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-3">
            Watch
          </p>
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm sm:text-base font-bold text-foreground hover:text-gold transition-colors"
          >
            {block.label}
            <span className="h-[1px] w-8 bg-current" />
          </a>
        </div>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "King Ice Cream",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/king logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-10 sm:pb-14 px-6 sm:px-10 md:px-16 lg:px-24 bg-[linear-gradient(160deg,#1B4D89_0%,#26609E_50%,#D4A017_100%)] text-background">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-8 hover:text-background transition-colors"
          >
            <span className="h-[1px] w-6 bg-current" />
            The King Journal
          </Link>

          <div className="flex items-center gap-3 mb-5 font-sans text-[10px] uppercase tracking-[0.3em] text-background/80">
            <span className="text-gold font-semibold">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-background/50" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-background/50" />
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] text-background mb-5">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-background/85 leading-relaxed">
              {post.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      <section className="px-0 sm:px-6 md:px-10 lg:px-16 pt-0 sm:-mt-8 md:-mt-12 relative z-10">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] max-w-5xl mx-auto overflow-hidden border border-border bg-background">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>

      {/* Body */}
      <article className="py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16">
        <div className="max-w-2xl mx-auto">
          {post.content.map((block, i) => renderBlock(block, i))}

          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground mr-2 self-center">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.sources && post.sources.length > 0 && (
            <div className="mt-10 p-5 sm:p-6 border border-border bg-[#f5f0e8]/40">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
                Sources
              </p>
              <ul className="space-y-2.5">
                {post.sources.map((s) => (
                  <li
                    key={s.url}
                    className="font-serif text-sm text-muted-foreground leading-relaxed"
                  >
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gold transition-colors underline-offset-4 hover:underline"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="pb-16 sm:pb-24 bg-[#f5f0e8]/40">
          <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-12 sm:pt-16 mb-8 sm:mb-10">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Keep Reading
              </span>
            </div>
            <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-foreground">
              More from
              <span className="font-serif italic font-normal"> the journal.</span>
            </h2>
          </div>

          <div className="border-t border-l border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group border-r border-b border-border bg-background hover:bg-[#f5f0e8]/60 transition-colors duration-300 p-5 sm:p-6 md:p-8"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-border">
                  <Image
                    src={r.coverImage}
                    alt={r.coverAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-semibold block mb-3">
                  {r.category}
                </span>
                <h3 className="font-sans font-bold text-base sm:text-lg text-foreground leading-snug group-hover:text-gold transition-colors">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
