import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '../data';
import Link from 'next/link';

// You can copy standard components from your UI library here, or just use semantic HTML tailored for the industry
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
  const industry = industries.find(i => i.slug === params.industry_slug);
  
  if (!industry) {
    return {};
  }

  return {
    title: \`\${industry.title} | Online Reputation Management\`,
    description: industry.heroSubtitle,
    alternates: {
      canonical: \`https://onlinereputationbuilders.in/industry/\${industry.slug}\`
    }
  };
}

export default function IndustryPage({ params }: { params: { industry_slug: string } }) {
  const industry = industries.find(i => i.slug === params.industry_slug);

  if (!industry) {
    notFound();
  }

  // Schema generation
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.title,
    "description": industry.heroSubtitle,
    "provider": {
      "@type": "Organization",
      "name": "Online Reputation Builder",
      "url": "https://onlinereputationbuilders.in"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {industry.heroTitle}
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            {industry.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" className="btn-gold px-8 py-3.5 text-sm font-bold w-full sm:w-auto shadow-lg shadow-brand-gold/20">
              Request Confidential Audit
            </Link>
            <a href="tel:+918882788412" className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-zinc-800 text-white font-bold text-sm hover:bg-zinc-900 transition-colors w-full sm:w-auto">
              Call +91 88827 88412
            </a>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3">The Problem</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">
            {industry.painPointTitle}
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {industry.painPointDesc}
          </p>
        </div>
      </section>

      {/* Services Grid (Standard ORM Services re-contextualized) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-brand-blue/30 hover:shadow-xl transition-all">
            <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3">Link Suppression</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We push negative news articles, defamatory blogs, and unwanted search results off the first page of Google, replacing them with highly positive, controllable PR assets.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-brand-gold/30 hover:shadow-xl transition-all">
            <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3">Review Management</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Dispute and remove fake 1-star reviews from major platforms while actively capturing authentic 5-star testimonials from your real clients.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-brand-blue/30 hover:shadow-xl transition-all">
            <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3">Brand Protection</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Ongoing 24/7 monitoring of your search engine footprint, ensuring any new negative mentions are immediately flagged and neutralized before they go viral.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-500">Common questions about our specialized services.</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6">
            <FAQ items={industry.faqs} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 px-4 bg-zinc-950 text-white border-t-4 border-brand-gold">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Take control of your search narrative.</h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Fill out the form to request a confidential audit. We'll identify exactly what is hurting your brand and provide a step-by-step roadmap to fix it.
            </p>
            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <span className="flex items-center gap-2">✓ 100% Confidential</span>
              <span className="flex items-center gap-2">✓ NDA Protected</span>
              <span className="flex items-center gap-2">✓ 24hr Turnaround</span>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
