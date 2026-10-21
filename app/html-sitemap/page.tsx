import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "../industry/data";
import { blogPosts } from "../blog/data";

export default function HtmlSitemapPage() {
  const coreServices = [
    { title: "Online Reputation Management", href: "/reputation-management", desc: "Comprehensive brand defense and digital sentiment engineering." },
    { title: "Business ORM Solutions", href: "/business", desc: "Enterprise reputation management for brands, firms, and organizations." },
    { title: "Corporate Crisis Management", href: "/business/crisis-management", desc: "Emergency PR containment and negative news suppression." },
    { title: "Reputation Audit", href: "/business/reputation-audit", desc: "Forensic analysis of brand sentiment and search vulnerability." },
    { title: "Reputation Monitoring", href: "/business/reputation-monitoring", desc: "Real-time surveillance across Google, reviews, and social media." },
    { title: "Business Review Management", href: "/business/review-management", desc: "Strategic review generation and ratings fortification." },
    { title: "Public Relations Strategy", href: "/public-relation", desc: "Authority building and Tier-1 press placement." },
    { title: "Reputation Risk Calculator", href: "/reputation-calculator", desc: "Interactive tool to calculate brand risk and financial vulnerability." },
    { title: "ORM Cost in India (2026 Guide)", href: "/orm-cost-in-india", desc: "Complete industry pricing transparency and campaign cost models." },
  ];

  const individualServices = [
    { title: "Individual Reputation Management", href: "/individual", desc: "Personal digital privacy and executive search defense." },
    { title: "Personal Branding Services", href: "/individual/personal-branding-services", desc: "Thought leadership and verified digital presence." },
    { title: "Personal Brand Monitoring", href: "/individual/personal-brand-monitoring", desc: "24/7 personal alert sentinel for name search mentions." },
    { title: "Change Google Autocomplete", href: "/individual/change-google-autocomplete", desc: "Cleansing damaging negative search autocomplete predictions." },
    { title: "Remove Individual Negative Results", href: "/individual/remove-individual-negative-results", desc: "Legal de-indexing and reverse SEO for personal search." },
    { title: "Remove Private Information (PII)", href: "/individual/remove-private-info", desc: "Expunging leaked phone numbers, addresses, and sensitive data." },
  ];

  const reviewRemovalServices = [
    { title: "Negative Content Removal", href: "/business/remove-negative-results" },
    { title: "Fake Review Removal", href: "/review-management/fake-review-removal" },
    { title: "Negative Link Removal", href: "/review-management/negative-link-removal" },
    { title: "Negative Video Removal", href: "/review-management/video-removal" },
    { title: "News Article Removal from Internet", href: "/review-management/news-article-removal-from-the-internet" },
    { title: "Google Business Review Removal", href: "/business/remove-google-business-review" },
    { title: "MouthShut Review Removal", href: "/review-management/mouthshut-review-removal" },
    { title: "Court Record & FIR Removal", href: "/review-management/court-record-and-fir-removal" },
    { title: "Practo Doctor Review Removal", href: "/review-management/practo-review-removal" },
    { title: "Justdial Review Removal", href: "/review-management/justdial-review-management" },
    { title: "Glassdoor Review Removal", href: "/review-management/how-to-remove-glassdoor-reviews" },
    { title: "Indeed Review Removal", href: "/review-management/indeed-reputation-management" },
    { title: "AmbitionBox Review Management", href: "/review-management/ambitionbox-reputation-management" },
    { title: "Trustpilot Review Management", href: "/review-management/trustpilot-reputation-management" },
    { title: "Yelp Review Management", href: "/review-management/yelp-review-management" },
    { title: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
    { title: "Quora Content Removal", href: "/review-management/quora-content-removal" },
    { title: "YouTube Video Removal", href: "/review-management/youtube-video-removal" },
    { title: "Facebook Content Removal", href: "/review-management/facebook-content-removal" },
    { title: "Instagram Video & Post Removal", href: "/review-management/instagram-videos-and-posts-removal" },
    { title: "TikTok Content Removal", href: "/review-management/tiktok-video-and-post-removal" },
    { title: "Twitter Defamation Removal", href: "/review-management/twitter-content-removal" },
    { title: "Fake News Removal", href: "/review-management/fake-news-removal" },
    { title: "Image Removal Services", href: "/review-management/image-removal" },
    { title: "Adult & Cam Content Removal", href: "/review-management/cam-model-content-removal-service" },
    { title: "Wikipedia Page Creation & Defense", href: "/review-management/wikipedia-writing-services" },
    { title: "Product Review Management", href: "/review-management/product-review-management" },
    { title: "Review Amplification", href: "/review-management/amplify-reviews" },
    { title: "Consumer Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
  ];

  const regionalHubs = [
    { city: "Kolkata (Corporate Headquarters)", href: "/orm-agency-kolkata", address: "32 Chowringhee Rd, Park Street, Kolkata 700071" },
    { city: "Mumbai Regional Office", href: "/orm-agency-mumbai", address: "Bandra Kurla Complex (BKC), Mumbai, Maharashtra" },
    { city: "Delhi NCR Regional Hub", href: "/orm-agency-delhi", address: "Connaught Place & Aerocity, New Delhi 110001" },
    { city: "Bangalore Technology Hub", href: "/orm-agency-bangalore", address: "Indiranagar & Outer Ring Road, Bangalore 560038" },
    { city: "Gurgaon Corporate Hub", href: "/orm-agency-gurgaon", address: "Cyber City, DLF Phase 2, Gurgaon 122002" },
    { city: "Hyderabad Regional Hub", href: "/orm-agency-hyderabad", address: "HITEC City & Madhapur, Hyderabad 500081" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-brand-gold/30 selection:text-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 bg-zinc-950 overflow-hidden border-b border-zinc-800">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-medium">HTML Sitemap</span>
          </nav>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Online Reputation Builder Directory
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive index of all services, industry defense playbooks, regional corporate offices, and strategic publications.
          </p>
        </div>
      </section>

      {/* Main Directory Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">

        {/* Section 1: Core Business & Individual Solutions */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 font-heading">Core Reputation Solutions</h2>
            <p className="text-sm text-zinc-500 mt-1">Foundational enterprise and personal reputation architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((item) => (
              <div key={item.href} className="p-5 rounded-xl border border-zinc-200 hover:border-brand-blue/50 hover:shadow-sm transition-all bg-zinc-50/50">
                <Link href={item.href} className="font-semibold text-brand-blue hover:underline text-base block mb-1">
                  {item.title}
                </Link>
                <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            {individualServices.map((item) => (
              <div key={item.href} className="p-5 rounded-xl border border-zinc-200 hover:border-brand-gold/50 hover:shadow-sm transition-all bg-zinc-50/50">
                <Link href={item.href} className="font-semibold text-zinc-900 hover:text-brand-blue hover:underline text-base block mb-1">
                  {item.title}
                </Link>
                <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Regional Agency Hubs */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 font-heading">Regional Corporate Hubs</h2>
            <p className="text-sm text-zinc-500 mt-1">Local presence and physical operating centers across India.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionalHubs.map((hub) => (
              <div key={hub.href} className="p-4 rounded-xl border border-zinc-200 bg-white">
                <Link href={hub.href} className="font-semibold text-brand-blue hover:underline text-sm block mb-1">
                  {hub.city}
                </Link>
                <p className="text-xs text-zinc-500">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Specialized Content & Review Removal */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 font-heading">Review Management & Content Removal</h2>
            <p className="text-sm text-zinc-500 mt-1">Platform-specific legal removals, de-indexing, and reverse SEO suppression.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {reviewRemovalServices.map((srv) => (
              <Link
                key={srv.href}
                href={srv.href}
                className="p-3.5 rounded-lg border border-zinc-200 hover:border-zinc-400 bg-zinc-50/70 text-xs font-medium text-zinc-800 hover:text-brand-blue transition-colors flex items-center justify-between"
              >
                <span>{srv.title}</span>
                <span className="text-zinc-400 text-xs">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 4: 50 Industry Reputation Playbooks */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 font-heading">50 Industry Reputation Playbooks</h2>
              <p className="text-sm text-zinc-500 mt-1">Sector-specific regulatory and search engine defense protocols.</p>
            </div>
            <Link href="/industry" className="text-xs font-bold text-brand-blue hover:underline">
              View Industry Hub Directory →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                className="p-3 rounded-lg border border-zinc-150 bg-white hover:bg-zinc-50 hover:border-brand-gold text-xs text-zinc-700 hover:text-zinc-950 transition-all flex flex-col justify-between"
              >
                <span className="font-semibold text-zinc-900 mb-1">{ind.name}</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">{ind.category}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 5: Blog & Research Articles */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 font-heading">Knowledge Base & Research Articles</h2>
              <p className="text-sm text-zinc-500 mt-1">In-depth guides on de-indexing, legal removal frameworks, and reverse SEO.</p>
            </div>
            <Link href="/blog" className="text-xs font-bold text-brand-blue hover:underline">
              View All Blog Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-3.5 rounded-lg border border-zinc-200 bg-white hover:border-brand-blue hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <p className="text-xs font-medium text-zinc-800 hover:text-brand-blue line-clamp-2 mb-2">
                  {post.title}
                </p>
                <span className="text-[11px] text-zinc-400">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 6: Case Studies & Compliance */}
        <div>
          <div className="border-b border-zinc-200 pb-4 mb-6">
            <h2 className="text-xl font-bold text-zinc-900 font-heading">Company, Compliance & Solutions</h2>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-medium text-zinc-600">
            <Link href="/solution" className="hover:text-brand-blue underline underline-offset-4">Solutions Hub</Link>
            <Link href="/solution/case-studies-for-celebrity-reputation-management-company" className="hover:text-brand-blue underline underline-offset-4">Celebrity ORM Case Study</Link>
            <Link href="/solution/case-studies-for-education-reputation-management-company" className="hover:text-brand-blue underline underline-offset-4">Education ORM Case Study</Link>
            <Link href="/solution/healthcare-reputation-management" className="hover:text-brand-blue underline underline-offset-4">Healthcare Sector Study</Link>
            <Link href="/contact-us" className="hover:text-brand-blue underline underline-offset-4">Contact & Support</Link>
            <Link href="/privacy-policy" className="hover:text-brand-blue underline underline-offset-4">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-blue underline underline-offset-4">Terms & Conditions</Link>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
