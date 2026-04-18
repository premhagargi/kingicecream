import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://www.kingicecream.com";

export const metadata: Metadata = {
  title: "The King Journal — Stories from Belagavi's Dairy",
  description:
    "News, stories and behind-the-scenes from King Ice Cream — awards, farmer stories, brand history, events across Karnataka, Goa, Maharashtra and Kerala.",
  openGraph: {
    title: "The King Journal — Stories from Belagavi's Dairy",
    description:
      "News, stories and behind-the-scenes from King Ice Cream — awards, farmer stories, brand history and events.",
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: "/images/logos/king logo.png",
        width: 1200,
        height: 630,
        alt: "The King Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The King Journal — Stories from Belagavi's Dairy",
    description:
      "News, stories and behind-the-scenes from King Ice Cream.",
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sorted;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The King Journal",
    url: `${BASE_URL}/blog`,
    description:
      "News, stories and behind-the-scenes from King Ice Cream — a brand of Vijaykant Dairy & Food Products Ltd., Belagavi.",
    publisher: {
      "@type": "Organization",
      name: "King Ice Cream",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/king logo.png`,
      },
    },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-[linear-gradient(160deg,#1B4D89_0%,#26609E_50%,#D4A017_100%)] text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold font-semibold">
              The King Journal
            </span>
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl leading-[0.95] max-w-4xl">
            Stories from
            <br />
            <span className="font-serif italic font-normal text-gold">
              Belagavi&apos;s dairy.
            </span>
          </h1>
          <p className="font-serif text-base sm:text-lg text-background/80 mt-6 max-w-2xl leading-relaxed">
            News, history and behind-the-scenes from King Ice Cream — the brand,
            the plant, the farmers and the events that keep us busy.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Latest
            </span>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src={featured.coverImage}
                alt={featured.coverAlt}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-[0.3em] bg-background text-foreground px-3 py-1.5">
                {featured.category}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <time dateTime={featured.date}>
                  {new Date(featured.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl leading-[1.05] text-foreground mb-4 group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              {featured.subtitle && (
                <p className="font-serif italic text-base sm:text-lg text-muted-foreground mb-5 leading-relaxed">
                  {featured.subtitle}
                </p>
              )}
              <p className="font-serif text-sm sm:text-base text-foreground leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-foreground group-hover:text-gold transition-colors">
                Read the story
                <span className="h-[1px] w-8 bg-current" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="pb-16 sm:pb-24 bg-[#f5f0e8]/40 border-t border-l border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-r border-b border-border bg-background hover:bg-[#f5f0e8]/60 transition-colors duration-300 p-5 sm:p-6 md:p-8 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-5 border border-border">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex items-center gap-3 mb-3 font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-gold font-semibold">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>

              <h3 className="font-sans font-bold text-base sm:text-lg md:text-xl text-foreground mb-3 leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h3>

              <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/60">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {post.readTime}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground group-hover:text-gold transition-colors inline-flex items-center gap-2">
                  Read
                  <span className="h-[1px] w-5 bg-current" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
