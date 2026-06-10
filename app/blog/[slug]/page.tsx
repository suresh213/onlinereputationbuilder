import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { blogPosts, BlogPost } from "../data";

interface Props {
  params: {
    slug: string;
  };
}

// Statically generate parameters for pre-rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for page SEO
export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Online Reputation Builder",
    };
  }

  // Keywords mapping for dynamic articles
  const keywordsMap: Record<string, string[]> = {
    "suppress-negative-search-results": [
      "suppress negative google search results",
      "how to hide search results",
      "bury negative links google",
      "suppress bad reviews",
      "online reputation suppression"
    ],
    "remove-defamatory-online-reviews": [
      "remove defamatory reviews",
      "delete negative google reviews",
      "how to flag fake reviews",
      "remove glassdoor reviews",
      "manage fake yelp reviews"
    ],
    "personal-branding-search-proof-image": [
      "personal branding guide",
      "search proof personal brand",
      "thought leadership branding",
      "executive reputation building",
      "defend personal brand online"
    ],
    "remove-fake-news-articles-google-search": [
      "remove fake news articles",
      "remove defamatory articles google",
      "delete fake news from google",
      "suppress negative press coverage",
      "DMCA takedown fake news"
    ],
    "remove-negative-glassdoor-reviews-employers": [
      "remove glassdoor reviews",
      "glassdoor review removal for employers",
      "delete negative glassdoor reviews",
      "dispute fake glassdoor reviews",
      "suppress glassdoor ratings"
    ],
    "google-play-app-store-review-management": [
      "google play review management",
      "app store review removal",
      "remove fake app reviews",
      "app rating suppression",
      "manage app store reviews"
    ],
    "real-estate-developer-reputation-management": [
      "real estate ORM",
      "developer reputation management",
      "builder review management",
      "property review suppression",
      "real estate negative reviews"
    ],
    "healthcare-doctor-reputation-management": [
      "doctor reputation management",
      "healthcare ORM",
      "manage doctor reviews",
      "practo review management",
      "patient feedback management"
    ],
    "law-firm-reputation-management": [
      "law firm reputation management",
      "attorney review management",
      "lawyer review suppression",
      "legal professional ORM",
      "manage client reviews law firm"
    ],
    "financial-services-orm-fintech": [
      "financial services ORM",
      "fintech reputation management",
      "investment firm reviews",
      "suppress fraud accusations",
      "financial advisor reputation"
    ],
    "top-10-orm-companies-india-2026": [
      "best ORM companies India",
      "top online reputation management agencies",
      "ORM company comparison",
      "best reputation management services",
      "ORM agency reviews"
    ],
    "orm-tools-vs-professional-services-comparison": [
      "ORM tools vs agencies",
      "brand monitoring tools",
      "reputation management software",
      "professional ORM services",
      "Brand24 vs ORM agency"
    ],
    "personal-branding-corporate-executives": [
      "executive personal branding",
      "CEO reputation management",
      "corporate executive branding",
      "thought leadership for executives",
      "personal brand for leaders"
    ],
    "celebrity-influencer-reputation-management": [
      "celebrity reputation management",
      "influencer ORM",
      "manage viral crises",
      "celebrity scandal management",
      "influencer brand protection"
    ],
    "corporate-pr-crisis-control-guide": [
      "corporate crisis management",
      "PR crisis response",
      "brand damage control",
      "crisis communication strategy",
      "corporate reputation recovery"
    ]
  };

  return {
    title: `${post.title} | Online Reputation Builder Blog`,
    description: post.excerpt,
    keywords: keywordsMap[post.slug] || ["online reputation management blog", "ORM strategy guides"],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

// Maps each blog slug to a relevant service page for internal linking
const serviceLinks: Record<string, { url: string; title: string; cta: string }> = {
  "remove-fake-news-articles-google-search": {
    url: "/review-management/fake-news-removal",
    title: "Fake News & Defamatory Article Removal Service",
    cta: "Get Professional Removal Help",
  },
  "remove-negative-glassdoor-reviews-employers": {
    url: "/review-management/remove-glassdoor-review",
    title: "Glassdoor Review Removal & Repair Service",
    cta: "Restore Your Glassdoor Rating",
  },
  "google-play-app-store-review-management": {
    url: "/review-management/fake-review-removal",
    title: "Fake Review Removal Service",
    cta: "Remove Fake App Reviews Now",
  },
  "real-estate-developer-reputation-management": {
    url: "/business/remove-negative-results",
    title: "Remove Negative Search Results",
    cta: "Protect Your Developer Reputation",
  },
  "healthcare-doctor-reputation-management": {
    url: "/individual/personal-branding-services",
    title: "Personal Branding Services for Doctors & Professionals",
    cta: "Build Your Medical Authority Online",
  },
  "law-firm-reputation-management": {
    url: "/business/remove-negative-results",
    title: "Remove Negative Search Results for Law Firms",
    cta: "Protect Your Legal Practice Reputation",
  },
  "financial-services-orm-fintech": {
    url: "/business/review-management",
    title: "Business Review Management Service",
    cta: "Manage Your Financial Firm's Reviews",
  },
  "top-10-orm-companies-india-2026": {
    url: "/business",
    title: "Business ORM Services by Online Reputation Builder",
    cta: "Get a Free ORM Consultation",
  },
  "orm-tools-vs-professional-services-comparison": {
    url: "/business",
    title: "Professional ORM Services — Full-Service Reputation Management",
    cta: "See What a Full-Service ORM Agency Can Do",
  },
  "personal-branding-corporate-executives": {
    url: "/individual/personal-branding-services",
    title: "Executive Personal Branding Services",
    cta: "Build Your Executive Personal Brand",
  },
  "celebrity-influencer-reputation-management": {
    url: "/individual/personal-branding-services",
    title: "Celebrity & Influencer Reputation Management",
    cta: "Protect Your Public Image Now",
  },
  "corporate-pr-crisis-control-guide": {
    url: "/business/crisis-management",
    title: "Corporate Reputation Crisis Management Service",
    cta: "Get Emergency Crisis Management Help",
  },
  "suppress-negative-search-results": {
    url: "/business/remove-negative-results",
    title: "Remove & Suppress Negative Search Results",
    cta: "Start Suppressing Negative Results Today",
  },
  "remove-defamatory-online-reviews": {
    url: "/review-management/fake-review-removal",
    title: "Fake & Defamatory Review Removal Service",
    cta: "Remove Defamatory Reviews Professionally",
  },
  "personal-branding-search-proof-image": {
    url: "/individual/personal-branding-services",
    title: "Personal Branding & Digital Authority Services",
    cta: "Build Your Search-Proof Personal Brand",
  },
};

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category first, then others — excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post!.category ? -1 : 1))
    .slice(0, 2);

  const serviceLink = serviceLinks[post.slug];

  // Generate BlogPosting JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Online Reputation Builder",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.onlinereputationbuilder.in/logo-orm.png",
      },
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.onlinereputationbuilder.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Topbar />
      <Navbar />

      {/* Article Header */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-zinc-500 truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>

          <span className="inline-block bg-brand-blue text-white text-[0.62rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md mb-4">
            {post.category}
          </span>
          
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-zinc-900 leading-[1.12] mb-6 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-zinc-500 border-t border-zinc-200/60 pt-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-black text-[0.65rem] tracking-wider border border-brand-blue/10">
                {post.author.split(" ").map(n => n[0]).join("")}
              </div>
              <span>By {post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-20 px-4 bg-white relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rounded-3xl overflow-hidden shadow-md bg-zinc-100 aspect-[21/9]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
            {/* Left Column: Article Body */}
            <article className="prose prose-zinc max-w-none">
              {post.content.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="text-zinc-600 leading-relaxed mb-6 text-base sm:text-lg">
                        {block.text}
                      </p>
                    );
                  case "heading":
                    const HTag = block.level === 3 ? "h3" : "h2";
                    return (
                      <HTag 
                        key={idx} 
                        className={`font-heading font-bold text-zinc-900 mt-10 mb-4 leading-tight ${
                          block.level === 3 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {block.text}
                      </HTag>
                    );
                  case "list":
                    return (
                      <ul key={idx} className="list-none pl-0 space-y-4 my-6">
                        {block.items?.map((item, itemIdx) => {
                          const [boldText, normalText] = item.split(": ");
                          return (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-600">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue text-xs flex-shrink-0 mt-0.5 font-bold">✓</span>
                              <div>
                                {normalText ? (
                                  <>
                                    <strong className="text-zinc-900 font-semibold">{boldText}:</strong> {normalText}
                                  </>
                                ) : (
                                  item
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  case "quote":
                    return (
                      <blockquote key={idx} className="border-l-4 border-brand-gold pl-6 italic my-8 text-lg md:text-xl text-zinc-700 font-medium bg-zinc-50/50 py-4 pr-4 rounded-r-xl">
                        &ldquo;{block.text}&rdquo;
                      </blockquote>
                    );
                  case "callout":
                    return (
                      <div key={idx} className="bg-brand-blue/[0.03] border-l-4 border-brand-blue rounded-r-2xl p-6 my-8 text-sm sm:text-base text-zinc-700 leading-relaxed">
                        <strong className="text-brand-blue font-bold block mb-1">Important Highlight</strong>
                        {block.text}
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </article>

            {/* Internal Service CTA — contextual link to relevant service page */}
            {serviceLink && (
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-blue/[0.06] to-brand-gold/[0.04] border border-brand-blue/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[0.65rem] font-bold text-brand-blue uppercase tracking-widest mb-1">Professional Service</p>
                  <h4 className="font-heading font-bold text-zinc-900 text-base leading-snug mb-1">{serviceLink.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Our specialists handle this for you — faster results, legal protection, guaranteed approach.
                  </p>
                </div>
                <Link
                  href={serviceLink.url}
                  className="btn-blue shrink-0 text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm whitespace-nowrap"
                >
                  {serviceLink.cta} →
                </Link>
              </div>
            )}

            {/* Right Column: Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28">
              {/* Author widget */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6">
                <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-zinc-200">
                  About The Author
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs tracking-wider border border-brand-blue/10">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-900 text-sm leading-none mb-1">{post.author}</h5>
                    <p className="text-zinc-400 text-[0.68rem] font-bold uppercase tracking-wider">ORM Specialist</p>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Dedicated editor and counselor at Online Reputation Builder, specializing in search engine repair, Google suppression strategy, and brand trust building.
                </p>
              </div>

              {/* Related posts widget */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6">
                <h4 className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider mb-4 pb-2 border-b border-zinc-200">
                  Related Guides
                </h4>
                <div className="space-y-5">
                  {relatedPosts.map((rp) => (
                    <div key={rp.slug} className="group/item">
                      <span className="text-[0.62rem] font-bold text-brand-gold uppercase tracking-wider block mb-1">{rp.category}</span>
                      <Link href={`/blog/${rp.slug}`} className="font-heading font-bold text-sm text-zinc-900 group-hover/item:text-brand-blue transition-colors leading-snug block">
                        {rp.title}
                      </Link>
                      <span className="text-[0.65rem] text-zinc-400 block mt-1.5">{rp.readTime}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Widget */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />
                <h4 className="font-heading font-bold text-brand-gold text-sm uppercase tracking-wider mb-3">
                  Need Immediate Help?
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  Is negative content damaging your online search profile? Let our specialists run a confidential scan on your brand name today.
                </p>
                <Link href="#contact" className="btn-gold w-full text-center py-2.5 text-xs font-bold block shadow-md">
                  Request Free Scan
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="contact" className="py-20 lg:py-24 px-4 bg-zinc-900 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Take Control Today</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Erase negative search links permanently
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[0.95rem] max-w-lg">
              Submit your profile description. Our specialists will review the search engine positions of your keywords, identify targets, and present a custom suppression roadmap within 24 hours.
            </p>
          </div>
          <div className="relative font-body">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-2">Free Consultation</p>
              <p className="text-zinc-500 text-sm mb-6">Your privacy is 100% protected under NDA.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
