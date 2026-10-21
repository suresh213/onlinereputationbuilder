"use client";
import { useState } from "react";

export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

export interface FAQSectionProps {
  items?: FAQItem[];
  faqs?: { q: string; a: string; question?: string; answer?: string }[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  items,
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our removal and reputation management process."
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rawList = items || faqs || [];
  if (rawList.length === 0) return null;

  const normalized = rawList.map((item) => ({
    question: item.question || item.q || "",
    answer: item.answer || item.a || "",
  }));

  // Generate FAQPage JSON-LD Schema for AI and Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalized.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-zinc-950/50 border-t border-white/5 relative z-10">
      {/* Invisible Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-heading">{title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {normalized.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-zinc-900/80 border-brand-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.05)]" : "bg-[#050A15] border-white/5 hover:border-white/10"}`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className={`text-base sm:text-lg font-bold pr-8 ${isOpen ? "text-brand-gold" : "text-white"}`}>
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-brand-gold text-[#050A15] rotate-180" : "bg-white/5 text-zinc-400"}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
