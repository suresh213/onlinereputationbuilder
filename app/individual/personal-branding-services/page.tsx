"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const brandingBenefits = [
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: "Look Professional on Google",
    desc: "When someone types your name on Google, we make sure they see a highly professional and positive image of you.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Win People's Trust",
    desc: "People prefer to do business with those they trust. A strong online image makes it easy for others to trust your skills and character.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
      </svg>
    ),
    title: "Get More Job Offers",
    desc: "Companies are always searching for talented people. With our help, you will get more business deals and job offers easily.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: "Become Highly Respected",
    desc: "We will publish articles and blogs that show your deep knowledge, making you a highly respected expert in your field.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "We Understand Your Goals",
    desc: "First, we talk with you to know what you want to achieve. Whether you are a doctor, lawyer, or business owner, we make a clear plan for your success.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "We Create Your Profiles",
    desc: "We create very beautiful and professional websites, Facebook pages, and LinkedIn accounts so that you look your absolute best online.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "We Rank You on Google",
    desc: "We use our technical skills to ensure that your new, positive profiles show up on the very first page when people search your name.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "We Publish Good News",
    desc: "Every month, we will write articles and post photos about your good work so that your image keeps improving continuously.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
];

const pillars = [
  { title: "Gains Trust", desc: "People are more comfortable working with those who have a clear personal brand. It shows genuine intentions, helping in gaining trust with clients and collaborators.", icon: "🤝" },
  { title: "Get Connected", desc: "Personal branding helps in building connections in different fields and areas of expertise. Staying connected is key to remaining consistent and building reputation.", icon: "🔗" },
  { title: "Builds Reliability", desc: "Personal branding services help establish your name in your field as an expert. You become more visible and accessible to your target audience.", icon: "🏆" },
  { title: "Attain Confidence", desc: "You gain confidence while developing your brand. When people know you have something valuable to provide, your self-esteem and authority both boost.", icon: "💡" },
];

const brandingTips = [
  "Define your mission, values, and target audience clearly",
  "Maintain consistent visuals, tone, and communication style",
  "Share authentic experiences and real success stories",
  "Stay active on professional and social platforms",
  "Engage with followers through meaningful, relatable content",
  "Continuously build credibility with insights, testimonials, and achievements",
];

const brandingSteps = [
  "Set your goals",
  "Maintain your brand",
  "Formulate your value proposition",
  "Research your market",
  "Identify your audience",
  "Create your visual identity",
  "Develop your brand strategy",
  "Prepare your content plan",
  "Rollout your activities",
];

const faqs = [
  { q: "Why should I care about my personal image online?", a: "Because everyone searches Google before doing business or hiring someone. If your image is clean and professional, you will get more respect and earn more money." },
  { q: "How long does it take to build a good image?", a: "It depends on what is already on Google, but usually, you will start seeing great improvements within 2 to 3 months of our work." },
  { q: "Can you help doctors and lawyers?", a: "Yes, we specialize in helping professionals like doctors, lawyers, and CEOs build a highly respected online image to attract the best clients." },
  { q: "Do I have to write the articles myself?", a: "No, our team of expert writers will handle everything. We will write all the positive stories for you." },
];

const testimonials = [
  { name: "Suresh P.", role: "CEO", text: "I wanted to look more professional online. This team created amazing profiles for me. Now, when clients search my name, they are very impressed.", initials: "SP" },
  { name: "Anjali", role: "Financial Advisor", text: "Before working with them, nothing showed up when you searched my name. Now, my name is everywhere on page one with great articles. It helped my career a lot.", initials: "A" },
  { name: "Rajat", role: "Real Estate Builder", text: "They completely changed how people see me on the internet. Their work is fast and they keep all promises.", initials: "R" },
];

// Custom Scroll Reveal Hook for "Experienced Developer" feel
function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function PersonalBrandingServicesPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── PAGE HERO - Elegant Authority Layout ─────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-gold opacity-50 top-[-10%] right-[-10%]" />
        <div className="hero-ambient hero-ambient-blue opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Personal Branding · India
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Powerful Personal Branding Services - Build{" "}
              <span className="text-gradient-gold">Trust</span>,{" "}
              <span className="text-gradient-gold">Authority</span>{" "}
              &amp; Influence
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              How you look on Google changes how people treat you. We will build a very strong and respectful image for you online so you get the success you deserve.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {brandingBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span>{b.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
              <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">Call: +9188827 88412</a>
            </div>
          </div>

          {/* Right: Glassmorphic Form Panel */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">Build Your Personal Brand Today</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY YOU NEED IT - Split Visual Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Why Personal Branding</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Why Do You Need <span className="heading-script text-brand-blue">Personal Branding Services?</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Today, everyone checks Google before they meet you. If they see a clean and professional image, they will respect you instantly and want to work with you.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  With a solid personal brand, you&apos;ll gain an advantage over your competitors and establish your business for long-term growth. Our personal branding agency in India helps turn your story into a powerful and memorable brand presence.
                </p>

                {/* Premium Tip List */}
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-8 shadow-sm">
                  <p className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-4">Important Tips for Personal Branding</p>
                  <div className="grid grid-cols-1 gap-3">
                    {brandingTips.map((tip) => (
                      <div key={tip} className="flex items-start gap-3 text-sm text-zinc-700">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 4l2 2 3-3"/>
                          </svg>
                        </div>
                        <span className="font-medium">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Start Building Your Image</Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
<div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
  <img
    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    alt="Personal Branding Strategy"
    className="w-full h-[600px] object-cover object-top hover:scale-105 transition-transform duration-700"
  />
</div>
                
                <div className="absolute -bottom-6 -left-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center flex-shrink-0 text-xl shadow-inner">
                    ⭐
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Authority Score</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Industry Leader Status</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 4 PILLARS - Dark Mode Elegance ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">Why It Works</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight">
                We Promise to Build a Brand That Makes You <span className="text-gradient-gold">Seen as an Expert</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] mt-5 leading-relaxed">
                Our team works hard to make sure everyone sees you as a highly skilled and trustworthy person.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 flex flex-col text-center items-center h-full hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-400 card-premium-hover">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-4">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (6 steps) - Staggered Grid ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <RevealOnScroll>
              <div>
                <p className="section-label mb-2">Our Process</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                  How Our <span className="heading-script text-brand-blue">Personal Branding</span> Service Works
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 whitespace-nowrap flex-shrink-0 py-3.5 px-8">Get Started</Link>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {howItWorks.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-500 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:shadow-lg transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-brand-gold/40 transition-colors font-mono tracking-widest text-3xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-gold transition-colors relative z-10 leading-snug">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO TRANSFORM YOURSELF - Glassmorphic Pill Grid ────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-[#090f1c] relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label text-brand-gold mb-3">Brand Transformation</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-white mb-6 leading-tight">
                How to Transform Yourself into a <span className="heading-script text-brand-gold">Powerful Brand</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10">
                It takes careful planning to build a highly respected name. We follow simple and effective steps to make sure you always look your best online.
              </p>

              {/* Unique Glassmorphic Chips for the 9 steps */}
              <div className="flex flex-wrap gap-3">
                {brandingSteps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3 py-2 px-4 rounded-xl glass-panel border-zinc-800/80 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300 group cursor-default">
                    <span className="w-6 h-6 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0 text-[0.65rem] font-black text-brand-gold shadow-inner group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/20 rounded-3xl blur-2xl opacity-40 pointer-events-none"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
                  alt="Personal Brand Transformation"
                  className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS - Clean Light Mode ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">What Our <span className="heading-script text-brand-blue">Clients Say</span></h2>
              <p className="text-zinc-500 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">We pay attention to details and quality, good communication and strong customer relationships.</p>
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
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ - Asymmetrical Layout ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Knowledge Base</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  Personal Branding <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Want to know how we can make you look great online? Contact us today.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
                <FAQ items={faqs} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA - Premium Grand Finish ──────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Start Today</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let a Single Negative Google Result <span className="heading-script text-brand-gold">Ruin Your Business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Call us today. We will tell you exactly how to make your name famous and respected on Google, completely free of charge.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white font-heading font-bold text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-gold/50 via-brand-blue/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "Why should I care about my personal image online?", answer: "Because everyone searches Google before doing business or hiring someone. If your image is clean and professional, you will get more respect and earn more money." },
        { question: "How long does it take to build a good image?", answer: "It depends on what is already on Google, but usually, you will start seeing great improvements within 2 to 3 months of our work." },
        { question: "Can you help doctors and lawyers?", answer: "Yes, we specialize in helping professionals like doctors, lawyers, and CEOs build a highly respected online image to attract the best clients." }
      ]} />
      <Footer />
    </div>
  );
}