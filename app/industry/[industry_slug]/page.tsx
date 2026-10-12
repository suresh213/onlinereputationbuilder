import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '../data';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export async function generateStaticParams() {
  return industries.map((ind) => ({
    industry_slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { industry_slug: string } }): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.industry_slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.title} | Online Reputation Builder`,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://onlinereputationbuilders.in/industry/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.title} | Online Reputation Builder`,
      description: industry.metaDescription,
      url: `https://onlinereputationbuilders.in/industry/${industry.slug}`,
      siteName: 'Online Reputation Builder',
      type: 'website',
    },
  };
}

export default function IndustryPage({ params }: { params: { industry_slug: string } }) {
  const industry = industries.find((i) => i.slug === params.industry_slug);

  if (!industry) {
    notFound();
  }

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.title,
    description: industry.metaDescription,
    serviceType: 'Online Reputation Management',
    provider: {
      '@type': 'Organization',
      name: 'Online Reputation Builder',
      url: 'https://onlinereputationbuilders.in',
      telephone: '+918882788412',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${industry.name} ORM Solutions`,
      itemListElement: industry.deliverables.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://onlinereputationbuilders.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://onlinereputationbuilders.in/industry/doctors',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: industry.name,
        item: `https://onlinereputationbuilders.in/industry/${industry.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-brand-gold/30 selection:text-zinc-950">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── BREADCRUMBS & HERO SECTION ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-4 bg-zinc-950 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb strip */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-500">Industry ORM</span>
            <span>/</span>
            <span className="text-brand-gold font-medium">{industry.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              {industry.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
              {industry.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Strict NDA Protection
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl">
            {industry.heroTitle}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-10 font-normal">
            {industry.heroSubtitle}
          </p>

          {/* Key Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl">
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">Confidentiality</p>
              <p className="text-lg font-bold text-white">100% Legal NDA</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">Takedown Rate</p>
              <p className="text-lg font-bold text-emerald-400">98% Success</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">Resolution Speed</p>
              <p className="text-lg font-bold text-brand-gold">7 to 30 Days</p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-1">Target Coverage</p>
              <p className="text-lg font-bold text-white">Page 1 to 5</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
            <a
              href="#contact"
              className="btn-gold px-8 py-4 text-sm font-bold text-center rounded-xl shadow-xl shadow-brand-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Request Confidential Audit →
            </a>
            <a
              href="https://wa.me/918882788412?text=Hello%2C%20I%20need%20confidential%20reputation%20management%20for%20my%20practice%20or%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold text-sm text-center hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Direct
            </a>
            <a
              href="tel:+918882788412"
              className="px-6 py-4 rounded-xl border border-zinc-800 text-zinc-300 font-bold text-sm text-center hover:bg-zinc-900 hover:text-white transition-all"
            >
              📞 +91 88827 88412
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: EXECUTIVE SUMMARY & AI CITATION BRIEF ── */}
      <section className="py-16 sm:py-20 px-4 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/90 shadow-sm mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                Industry Risk Assessment
              </span>
              <span className="text-xs text-zinc-400">Sector: {industry.category}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-5 leading-snug">
              The Digital Vulnerability Reality for {industry.name}
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {industry.executiveSummary}
            </p>

            {/* AI Summary Box */}
            <div className="bg-brand-blue/[0.04] border-l-4 border-brand-blue p-5 rounded-r-2xl">
              <p className="text-[0.7rem] font-bold text-brand-blue uppercase tracking-widest mb-1.5">
                Executive Takeaway for {industry.name}
              </p>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                Over 87 percent of decision makers, patients, and institutional partners research professional credentials on Google prior to booking or signing contracts. Unaddressed digital complaints or outdated litigation links create compounding commercial damage every single month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SPECIFIC REPUTATION THREAT MATRIX ── */}
      <section className="py-20 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Threat Intelligence</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Critical Reputation Threats Facing {industry.name}
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every sector experiences distinctive digital attack vectors. We have cataloged and engineered counter-strategies for the most common reputation disruptions in your field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industry.threats.map((threat, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue font-heading font-black text-sm flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <span className="text-[0.65rem] font-bold text-rose-600 bg-rose-50 border border-rose-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      High Impact Risk
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-zinc-900 mb-3 leading-snug">
                    {threat.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {threat.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Commercial Consequence</p>
                  <p className="text-xs sm:text-sm font-semibold text-rose-700 leading-normal">
                    {threat.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: 4-PHASE RESOLUTION FRAMEWORK ── */}
      <section className="py-20 lg:py-24 px-4 bg-zinc-950 text-white border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 mb-3">
              Strategic Roadmap
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Our 4-Phase Tactical Resolution Framework
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We do not rely on passive public relations. Our team deploys a proven legal and technical execution sequence designed to reclaim your Google narrative quickly and permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.methodology.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-mono">
                      {m.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 text-xs font-bold flex items-center justify-center">
                      ✓
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PLATFORMS WE CLEAN & PROTECT ── */}
      <section className="py-16 sm:py-20 px-4 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Coverage Directory</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            Key Platforms Monitored & Remediated for {industry.name}
          </h2>
          <p className="text-zinc-600 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            Our proprietary crawler network scans and escalates takedowns across all major search indexes, review portals, and high-domain-authority aggregators relevant to your niche.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {industry.protectedPlatforms.map((platform, i) => (
              <span
                key={i}
                className="px-5 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-800 font-bold text-xs sm:text-sm shadow-sm hover:border-brand-blue hover:text-brand-blue transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ANONYMIZED REAL-WORLD CASE FILE ── */}
      <section className="py-20 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-zinc-200 p-8 sm:p-12 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200">
              <div>
                <span className="text-[0.65rem] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                  Case File Archive
                </span>
                <h3 className="font-heading text-2xl font-bold text-zinc-900 mt-2">
                  Confidential Crisis Resolution: {industry.name} Sector
                </h3>
              </div>
              <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-lg">
                Protected Under Client NDA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-xs font-bold text-rose-600 uppercase tracking-wider">The Initial Crisis</p>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {industry.caseStudy.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-wider">Our Tactical Response</p>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  {industry.caseStudy.strategy}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">The Verified Outcome</p>
                <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                  {industry.caseStudy.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY GENERIC AGENCIES FAIL ── */}
      <section className="py-20 px-4 bg-zinc-900 text-white border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/15 px-3 py-1 rounded-full border border-brand-gold/30 mb-4 inline-block">
            Specialist Differentiation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Why Standard PR and Generic SEO Agencies Fail {industry.name}
          </h2>
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 text-left">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {industry.whyGenericFails}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-800">
              {industry.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <p className="text-xs sm:text-sm text-zinc-300">{del}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: KNOWLEDGE BASE / DEEP FAQS ── */}
      <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
              Frequently Asked Questions for {industry.name}
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto">
              Clear, transparent answers regarding timelines, legal protocols, NDAs, and our permanent removal guarantee.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-4 sm:p-8 border border-zinc-200">
            <FAQ items={industry.faqs} />
          </div>
        </div>
      </section>

      {/* ── SECTION 9: HIGH-URGENCY CONVERSION & AUDIT FORM ── */}
      <section id="contact" className="py-24 lg:py-28 px-4 bg-zinc-950 text-white relative overflow-hidden border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/15 px-3 py-1 rounded-full border border-brand-gold/30 mb-4 inline-block">
              Confidential Response Desk
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Erase Damaging Search Links & Reclaim Your Digital Narrative
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
              Every day an inaccurate link or unverified complaint sits on Google Page 1 is a day of forfeited client trust and lost revenue. Submit your profile details for an immediate, confidential forensic audit.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                100% Protected Under Binding Non-Disclosure Agreement
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                Comprehensive Search Footprint Audit within 24 Hours
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                Direct Access to Senior Strategy Directors
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">Direct Senior Hotline</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+918882788412" className="text-lg font-bold text-white hover:text-brand-gold transition-colors">
                  📞 +91 88827 88412
                </a>
                <span className="text-zinc-600">|</span>
                <a
                  href="https://wa.me/918882788412?text=Hello%2C%20I%20need%20a%20confidential%20reputation%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                >
                  💬 WhatsApp Us 24/7
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <h3 className="font-heading text-xl font-bold text-white mb-2">Request Confidential Audit</h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Your identity and information are strictly protected.</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
