"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const stats = [
  { number: "100%", label: "Notability Assessment Accuracy" },
  { number: "12+", label: "Years in Content PR Systems" },
  { number: "350+", label: "Corporate Pages Approved" },
  { number: "0", label: "Black Hat Methods Deployed" },
];

const wikiHighlights = [
  {
    title: "Strict Notability Audit Protocols",
    desc: "Wikipedia demands high-authority independent secondary press coverage. We execute rigorous baseline audits to map your current press visibility metrics cleanly.",
  },
  {
    title: "Neutral Point of View Drafting",
    desc: "Our experienced authors write completely un-biased, fact-grounded biographical profiles that adhere perfectly to Wikipedia's encyclopedic style logs.",
  },
  {
    title: "Long-Term Monitoring Protection",
    desc: "Community editors review page changes continuously. We track your published logs to clear out vandalism or biased updates from bad-faith actors fast.",
  },
];

const editorialWorkflow = [
  { step: "01", title: "Notability Verification", desc: "We look at your existing tier-1 media source footprint to map verified references before initiating drafting work." },
  { step: "02", title: "Neutral Text Composition", desc: "Our writers compile records using Wikipedia's strict citations formatting, framing text neutrally without promotional flags." },
  { step: "03", title: "Community Submission Loop", desc: "We process article submissions through standard Articles for Creation paths, managing editorial commentary transparently." },
  { step: "04", title: "Vandals Watch Setup", desc: "We hook up continuous profile scraping alerts to flag malicious page changes or deletion attempts by unverified wiki editors early." },
];

const faqs = [
  { q: "Can any company qualify for a Wikipedia page?", a: "No. Entities must fully meet Wikipedia's strict independent notability thresholds. If your tier-1 news coverage footprint is insufficient, we deploy targeted PR narratives first." },
  { q: "How long does the article submission loop take?", a: "Draft creation requires 2 to 3 weeks. Platform peer review and community verification queues can range anywhere from 4 weeks to 4 months for complete approval." },
  { q: "What happens if a page gets nominated for deletion?", a: "If an entry faces a deletion challenge, our senior editors jump into active talk page debates with policy references to defend page validity." },
];

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function WikipediaWritingServicesPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" /></span>
                Encyclopedic Authority Hub
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Premium <span className="text-gradient-gold">Wikipedia Writing</span> &amp; Notability Advisory Services
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Establishing an official entry requires matching rigid notability criteria and objective content rules. Our specialist team researches, writes, and manages entries ethically to lock in your authority metrics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Verify Your Notability Baseline</Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-700 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1200&q=80" alt="Knowledge and Library Research Assets" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Authority Audit</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">Request Wiki Evaluation</h2>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">{s.number}</p>
                  <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <p className="section-label mb-2 text-brand-gold">Global Authority</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">Why Encyclopedic Status Secures Corporate <span className="heading-script text-brand-blue">Market Trust</span></h2>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">Wikipedia pages establish your brand credentials natively inside high-tier digital directories, heavily boosting your organic knowledge graph data scores globally.</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 gap-5">
              {wikiHighlights.map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                  <h4 className="font-bold text-zinc-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">Our Compliance-Driven <span className="heading-script text-brand-blue">Editorial Workflow</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialWorkflow.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30">
                  <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors mb-4 block">{s.step}</span>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          <RevealOnScroll>
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">Platform Compliance <span className="text-gradient-gold">FAQs</span></h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how we structure reliable, reference-dense pages adhering to standard platform policies safely.</p>
              <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm">Speak With Our Specialist</a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
              <FAQ items={faqs} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}