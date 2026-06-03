"use client";
import React from "react";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const solutions = [
  {
    title: "Celebrity & Public Figure ORM",
    href: "/solution/case-studies-for-celebrity-reputation-management-company",
    desc: "Protect your personal brand, suppress private image leaks, push down negative media coverage, and control search suggestions. Designed for actors, politicians, and high-net-worth executives.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    badge: "Case Study Available",
    bgColor: "bg-brand-blue/5",
    accentColor: "border-t-brand-blue"
  },
  {
    title: "Education Industry Reputation Management",
    href: "/solution/education-industry-reputation-management",
    desc: "Maintain student confidence and positive parent feedback. Suppress defamatory forum threads, optimize local search listings, and manage positive reviews to increase enrollments and protect credibility.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    badge: "Industry Solution",
    bgColor: "bg-white",
    accentColor: "border-t-brand-gold"
  },
  {
    title: "Restaurant Industry ORM & Review Repair",
    href: "/solution/restaurant-industry-reputation-management",
    desc: "Safeguard your culinary brand against fake or defamatory reviews on Google, Yelp, and TripAdvisor. Respond to diner complaints professionally and drive positive local rankings to boost reservations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    badge: "Industry Solution",
    bgColor: "bg-white",
    accentColor: "border-t-brand-blue"
  },
  {
    title: "Higher Education Reputation Repair",
    href: "/solution/case-studies-for-education-reputation-management-company",
    desc: "Read our extensive case study illustrating how we cleaned false forum threads, removed defamatory reviews, and recovered search ranking authority for a major education institution.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: "Case Study Available",
    bgColor: "bg-brand-blue/5",
    accentColor: "border-t-brand-gold"
  }
];

export default function SolutionsOverviewPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* Hero section */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50 py-16 lg:py-24">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)] mx-auto">
            ⚡ Specialized Industry Expertise
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.08] mb-6 tracking-tight max-w-4xl mx-auto">
            Online Reputation Management <span className="text-gradient-gold">Solutions</span>
          </h1>
          <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Tailored ORM blueprints designed to meet the unique challenges of specific industries, protecting your brand trust and amplifying conversions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
              Request Custom Strategy
            </Link>
            <a href="tel:+918882788412" className="btn-outline px-8 py-3.5">
              Call: +9188827 88412
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Listing Section */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {solutions.map((s, idx) => (
              <div 
                key={s.title} 
                className={`card-premium-hover group ${s.bgColor} border border-zinc-200 rounded-3xl p-8 lg:p-10 flex flex-col h-full shadow-sm relative overflow-hidden border-t-4 ${s.accentColor}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-[0.62rem] font-bold text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors relative z-10">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10 mb-8">
                  {s.desc}
                </p>
                
                <div className="pt-6 border-t border-zinc-100 mt-auto relative z-10">
                  <Link href={s.href} className="text-brand-blue font-bold text-sm hover:text-brand-dark transition-colors inline-flex items-center gap-2 group/link">
                    Explore Solution
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section id="contact" className="py-24 lg:py-28 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Custom Roadmap</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Get an expert audit for your industry
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[0.95rem] max-w-lg">
              Every sector demands a unique reputation approach. Share your digital concerns with our ORM consultants. We will formulate a tailored suppression and monitoring roadmap for your organization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {["Confidential review", "100% data security", "Tailored suppress plans", "Competitor analysis"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-2">Request an Industry Strategy</p>
              <p className="text-zinc-500 text-sm mb-6">Our specialists respond within 24 hours on business days.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
