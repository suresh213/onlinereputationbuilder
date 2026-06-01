"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const stats = [
  { number: "90%", label: "Defamatory Profiles Cleared" },
  { number: "3x", label: "Talent Acquisition Boost" },
  { number: "100%", label: "Anonymity Maintained" },
  { number: "12+", label: "Years HR Rep Experience" },
];

const services = [
  {
    title: "Employer Branding Defense",
    desc: "Disgruntled ex-employees often weaponize Glassdoor. We remove exaggerated claims, harassment, and confidential corporate leaks from your profile.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: "Community Guidelines Enforcement",
    desc: "Glassdoor has strict rules against naming non-executive staff, using profanity, or posting multiple reviews. We flag and force takedowns based on these technicalities.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Positive Culture Injection",
    desc: "We don't just delete the bad; we help you ethically generate authentic, glowing reviews from your current, satisfied workforce to bury older complaints.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

const faqs = [
  { q: "Can Glassdoor remove anonymous reviews?", a: "Yes. While users are anonymous to the public, the content they post must still adhere to community guidelines. We focus our removal strategies on the content itself, not the user's identity." },
  { q: "What if an employee names my managers?", a: "Glassdoor strictly prohibits naming individuals unless they are C-suite executives. If a mid-level manager is named, the review violates TOS and we can guarantee its removal." },
  { q: "Does removing bad reviews help recruitment?", a: "Absolutely. Top-tier candidates thoroughly research employer profiles. A toxic Glassdoor rating increases your cost-per-hire and repels quality talent. Cleaning it up is a direct ROI." },
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

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount((1 - Math.pow(1 - progress, 4)) * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{Math.floor(count)}{suffix}</span>;
}

export default function RemoveGlassdoorReviewsPage() {
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
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-[#0CAA41]/30 bg-[#0CAA41]/10 text-[#0CAA41] shadow-[0_0_15px_rgba(12,170,65,0.15)]">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0CAA41] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#0CAA41]" /></span>
                Employer Branding & HR Protection
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Remove Toxic <span className="text-gradient-gold">Glassdoor Reviews</span> Destroying Recruitment
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                A toxic Glassdoor rating deters top talent and spikes your recruitment costs. We legally challenge and eradicate defamatory, fake, and policy-violating employee reviews to restore your corporate image.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Protect Employer Brand</Link>
                <a href="tel:+919971687251" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white transition-colors">Call: +91 99716-87251</a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" alt="Corporate HR and Employer Branding" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-[#0CAA41] mb-1">Corporate Audit</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">Glassdoor Clearance</h2>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => {
              const num = parseInt(s.number.replace(/\D/g, ''));
              const suffix = s.number.replace(/\d/g, '').replace('.', '');
              return (
                <RevealOnScroll key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-[#0CAA41] transition-colors duration-300">
                      <AnimatedCounter end={num} suffix={suffix} duration={2500} />
                    </p>
                    <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Secure Your <span className="heading-script text-[#0CAA41]">Corporate Identity</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-[#0CAA41]/30">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0CAA41] to-[#128a39] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-[#0CAA41] group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-[#0CAA41] transition-colors">{s.title}</h3>
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
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Glassdoor <span className="text-gradient-gold">FAQs</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how our legal and technical ORM team navigates Glassdoor's complex reporting systems.</p>
              <a href="tel:+919971687251" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">Talk to HR Rep Experts</a>
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