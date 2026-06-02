"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const heroBullets = [
  "Delete harmful images from Google quickly & legally",
  "Remove private, intimate, or defamatory photos",
  "Suppress unwanted images from all major search engines",
  "Expert-led image deindexing and takedown services",
];

const stats = [
  { number: "9+", label: "Years of reputation expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "1000+", label: "Images Removed" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Personal Reputation Harm",
    desc: "Unwanted or manipulated images appearing on Google can irreparably damage personal and professional reputations. A single harmful photo can define how others perceive you for years.",
    icon: "😰",
  },
  {
    title: "Professional Consequences",
    desc: "Employers, clients, and partners routinely search for images online. Harmful images linked to your name can cost you jobs, partnerships, and hard-earned opportunities.",
    icon: "💼",
  },
  {
    title: "Emotional & Mental Distress",
    desc: "Non-consensual image sharing and defamatory photos cause serious psychological harm. Prompt removal is essential to protect your mental wellbeing and sense of security.",
    icon: "💔",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Image Discovery & Audit",
    desc: "We conduct a comprehensive scan to locate all instances of harmful images across Google, Bing, and other platforms - including cached versions and indexed copies.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    ),
  },
  {
    step: "02",
    title: "Source Identification",
    desc: "We trace every image back to its original hosting source and identify the fastest, most effective removal route - whether direct takedown, DMCA, or legal notice.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
    ),
  },
  {
    step: "03",
    title: "Legal Takedown & Deindex",
    desc: "We submit removal requests to the host and deindex requests to Google using DMCA, privacy law, and right-to-be-forgotten frameworks to eliminate the image entirely.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
    ),
  },
  {
    step: "04",
    title: "Monitoring & Suppression",
    desc: "After removal, we monitor for reappearance and use content suppression strategies to ensure positive imagery dominates search results for your name.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    ),
  },
];

const typesOfImages = [
  {
    title: "Non-Consensual Intimate Images",
    desc: "Private or intimate photos shared without your consent are removed using legal frameworks specifically designed for this serious privacy violation.",
  },
  {
    title: "Defamatory & Manipulated Photos",
    desc: "Doctored, misleading, or defamatory images used to damage your reputation are addressed through DMCA and defamation law to achieve swift removal.",
  },
  {
    title: "Outdated & Embarrassing Images",
    desc: "Old photos you no longer want associated with your name can be deindexed from Google using right-to-be-forgotten requests and suppression tactics.",
  },
  {
    title: "Leaked & Unauthorized Images",
    desc: "Photos published without your authorization - from hacked accounts, data breaches, or unauthorized sharing - are handled with urgency and legal precision.",
  },
];

const whyUs = [
  {
    title: "Fast & Effective Results",
    desc: "Most image removal requests are resolved within days, not weeks. We prioritize urgent cases with dedicated rapid-response support.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    ),
  },
  {
    title: "100% Legal Methods",
    desc: "We only use legitimate DMCA, privacy law, and platform policy routes. No hacking, no grey-hat tactics - results you can trust.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Strict Confidentiality",
    desc: "Your case details and identity are never disclosed. We handle every image removal with the utmost privacy and discretion.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
  {
    title: "Google & All Search Engines",
    desc: "We handle deindexing across Google, Bing, Yahoo, and other platforms simultaneously to ensure the image is gone from all search results.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "How quickly can an image be removed from Google?",
    a: "Most deindexing requests are processed by Google within 3–7 business days. Source-level removal depends on the hosting site, but we expedite every request. Urgent cases can often be resolved within 24–48 hours.",
  },
  {
    q: "Can images be removed even if I don't own the copyright?",
    a: "Yes. Many removals are based on privacy law, right-to-be-forgotten regulations, or platform policies - not solely copyright. Our legal team identifies the strongest avenue for each case.",
  },
  {
    q: "What if the image is on multiple websites?",
    a: "We address every instance simultaneously - tracking all copies across hosting sites and submitting coordinated removal and deindex requests to eliminate the image comprehensively.",
  },
  {
    q: "Is the removal permanent?",
    a: "In most cases, yes. We also provide post-removal monitoring for a defined period to catch any reappearances and address them immediately.",
  },
  {
    q: "Will you keep my case confidential?",
    a: "Absolutely. Privacy is foundational to our service. No client details, case files, or images are ever shared outside our secure team.",
  },
];

const testimonials = [
  {
    name: "Kavya Reddy",
    text: "Private photos of mine were shared without consent and appeared on Google. The team had them deindexed and removed within a week. Truly professional and compassionate service.",
  },
  {
    name: "Manish Gupta",
    text: "An old unflattering image kept coming up in searches for my name. After working with this team, it's completely gone. Fast, discreet, and effective.",
  },
  {
    name: "Sneha Joshi",
    text: "They handled a very sensitive image removal case with complete professionalism. I felt supported throughout and the results were exactly what I needed.",
  },
];

const publishers = [
  "INDIAN EXPRESS", "BusinessLine", "Bloomberg", "MONEY", "FINANCIAL", "Games", "Military.com", "MarketWatch", "CNN", "Outlook", "People", "CRAIN'S", "siliconindia", "St.Louis"
];

/* ─── Animation Components ───────────────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ImageRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                Image Removal Service
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Delete Harmful Images from Google <span className="text-gradient-gold">Quickly &amp; Legally</span>
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                We quickly identify harmful images threatening your reputation and ensure their swift, legal removal from Google and all major platforms. Protect your privacy and take control of your digital identity today.
              </p>
              <ul className="space-y-3 mb-10">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Remove My Image Now</Link>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">Call Us Now</a>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200}>
            <div className="sticky top-24">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10" />
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 relative z-10 bg-zinc-900/90 backdrop-blur-sm p-8">
                <div className="text-center mb-8">
                  <p className="section-label text-brand-gold mb-2 justify-center">Take Back Control of Your Image</p>
                  <h3 className="font-heading text-2xl font-bold text-white leading-tight">Fast, confidential, and permanent image removal</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="font-heading text-2xl font-black text-brand-gold mb-1">{s.number}</p>
                      <p className="text-zinc-400 text-[0.7rem] uppercase tracking-wider font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Link href="#contact" className="btn-gold w-full text-center block shadow-lg shadow-brand-gold/20 py-4">Request Image Removal</Link>
                  <a href="tel:+918882788412" className="btn-outline w-full text-center block border-zinc-700 text-zinc-300 hover:text-white hover:border-white py-4">Call: +9188827 88412</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── IMPACT SECTION ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                The Real Impact of <span className="heading-script text-brand-blue">Harmful Images Online</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                A single harmful image appearing in search results can cause lasting damage to your personal and professional life. Acting quickly is critical - every day the image remains online, the damage compounds.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5 inline-block">Get a Free Assessment</Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-1 gap-5">
              {impacts.map((item) => (
                <div key={item.title} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-brand-blue/10 transition-all duration-300 shadow-sm">{item.icon}</div>
                  <div className="pt-1">
                    <h4 className="font-bold text-zinc-900 text-sm mb-1.5 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                    <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Process</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                How We <span className="heading-script text-brand-blue">Remove Your Images</span> from Google
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">{s.icon}</div>
                    <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors">{s.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPES ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Capability</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Types of Images <span className="heading-script text-brand-gold">We Can Remove</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                From non-consensual intimate images to defamatory photos, our team handles every category of harmful image with precision, urgency, and legal expertise.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">Remove Your Image Today</Link>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
            {typesOfImages.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-2 group-hover:text-brand-gold transition-colors">{t.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">Why Us</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                Why We Are <span className="text-gradient-gold">Trusted Image Removal Experts</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-inner">{w.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{w.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Thousands of <span className="heading-script text-brand-blue">Clients Worldwide</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:border-brand-blue/40 transition-all duration-400">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.name.substring(0,2)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">Verified Client</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <RevealOnScroll>
              <div className="sticky top-24 lg:col-span-2">
                <p className="section-label mb-2">Common Questions</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">Image Removal <span className="heading-script text-brand-blue">FAQs</span></h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">Have a specific image situation? Get a free, confidential assessment from our experts with no obligation.</p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
                <FAQ items={faqs} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Fast</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Harmful Images <span className="heading-script text-brand-blue">Define You Online</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">Schedule a free consultation. Our image removal experts will assess your situation and provide a clear action plan - with no obligation.</p>
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">{item.icon}</div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a> : <p className="text-white font-heading font-bold text-lg">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}