































"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────── */

const selfProtectionSteps = [
  {
    step: "01",
    title: "Broker Database Eradication",
    desc: "We deploy automated and manual legal requests to force compliance from hundreds of major data brokers, permanently scrubbing your profile from their systems.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Social Footprint Sanitization",
    desc: "Our privacy analysts meticulously review your social presence, identifying and locking down vulnerable endpoints that could be exploited for social engineering.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Telemetry & App Restriction",
    desc: "We analyze your mobile ecosystem to identify invasive applications. We guide you through revoking unnecessary permissions that silently harvest your behavioral data.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Continuous Breach Surveillance",
    desc: "We utilize advanced threat intelligence to monitor dark web marketplaces. If your credentials appear in a new breach, our team initiates immediate remediation protocols.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Legal Policy Enforcement",
    desc: "Our compliance team leverages data protection laws (like GDPR and CCPA) to compel resistant organizations to purge your records under threat of legal action.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
  },
];

const dataTypes = [
  {
    category: "Personal",
    items: ["Full name & address", "Date of birth", "Phone numbers", "Email addresses"],
    icon: "👤",
    color: "border-brand-blue bg-blue-50/50 hover:border-brand-blue",
    badgeColor: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  },
  {
    category: "Locational",
    items: ["Home & work address", "GPS location history", "IP address logs", "Check-in data"],
    icon: "📍",
    color: "border-brand-gold bg-amber-50/50 hover:border-brand-gold",
    badgeColor: "bg-brand-gold/10 text-brand-gold border border-brand-gold/20",
  },
  {
    category: "Financial",
    items: ["Credit card details", "Bank account info", "Loan & lender data", "Purchase history"],
    icon: "💳",
    color: "border-green-300 bg-green-50/50 hover:border-green-500",
    badgeColor: "bg-green-100 text-green-700 border border-green-200",
  },
  {
    category: "Legal & Professional",
    items: ["Court case records", "DMV & public records", "Employment history", "Professional licenses"],
    icon: "⚖️",
    color: "border-purple-200 bg-purple-50/50 hover:border-purple-400",
    badgeColor: "bg-purple-100 text-purple-700 border border-purple-200",
  },
];

const dataSources = [
  {
    label: "You",
    desc: "Voluntary disclosures through social networking, insecure application permissions, and unknowingly accepting broad privacy terms that allow unchecked data harvesting.",
    icon: "🙋",
    accent: "brand-blue",
    accentCls: "border-l-brand-blue",
  },
  {
    label: "Business",
    desc: "Commercial aggregation via aggressive marketing trackers, financial institution data sharing, and the inevitable fallout from corporate security breaches.",
    icon: "🏢",
    accent: "brand-gold",
    accentCls: "border-l-brand-gold",
  },
  {
    label: "Government",
    desc: "Legally mandated public records, court filings, and municipal databases that are scraped and weaponized by third-party data vendors.",
    icon: "🏛️",
    accent: "brand-blue",
    accentCls: "border-l-brand-blue",
  },
];

const faqs = [
  {
    q: "Why is it absolutely critical to scrub my private information?",
    a: "Exposed data is the primary vector for identity theft, financial fraud, and targeted harassment. Controlling your digital footprint minimizes your attack surface and protects your assets.",
  },
  {
    q: "How exactly do you execute data removal?",
    a: "We utilize a combination of automated legal requests, manual interventions with site administrators, and strategic algorithmic suppression to ensure your data is permanently delisted from both search engines and source databases.",
  },
  {
    q: "Is 100% removal genuinely achievable?",
    a: "While the internet's decentralized nature makes absolute removal challenging, our rigorous protocols typically achieve a 95%+ success rate, effectively eliminating your visibility to unauthorized actors.",
  },
  {
    q: "Can you force search engines to de-index my data?",
    a: "Yes. We leverage specific legal frameworks and search engine policies to compel Google, Bing, and others to delist URLs containing your sensitive personal identifiable information (PII).",
  },
  {
    q: "Can I initiate removal protocols for family members or executives?",
    a: "Yes, provided we establish proper legal authorization. We frequently execute broad security sweeps for entire corporate boards and high-net-worth families.",
  },
];

const testimonials = [
  {
    name: "Scott",
    role: "Business Owner",
    text: "The sheer volume of my personal data online was terrifying. Their team stepped in, aggressively pursued the data brokers, and completely locked down my profile.",
    initials: "SC",
  },
  {
    name: "Juli",
    role: "Professional",
    text: "Discreet, highly effective, and deeply knowledgeable about privacy laws. They successfully removed my home address from dozens of invasive tracking sites.",
    initials: "JU",
  },
  {
    name: "Harold",
    role: "CEO",
    text: "As an executive, my exposure was a severe corporate risk. They executed a flawless removal campaign that fortified both my personal and professional security.",
    initials: "HA",
  },
  {
    name: "Kapil",
    role: "Entrepreneur",
    text: "I was dealing with persistent harassment due to exposed contact info. Their rapid response and takedown procedures provided immediate relief and lasting security.",
    initials: "KA",
  },
  {
    name: "Garima",
    role: "Public Figure",
    text: "Protecting my family's privacy was paramount. They navigated the complex legal landscape perfectly, ensuring our data was scrubbed from the internet completely.",
    initials: "GA",
  },
  {
    name: "Jashmin",
    role: "Healthcare Professional",
    text: "I highly recommend their services. They identified vulnerabilities I didn't even know existed and systematically eliminated every single one of them.",
    initials: "JA",
  },
];

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

/* ─── Page ──────────────────────────────────────────────────────── */

export default function RemovePrivateInfoPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - Security Focused Dark Layout ─────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-10%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Private Info Removal · Digital Privacy Protection
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.3rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Your <span className="text-gradient-gold">Personal Data</span> Is Dangerously Exposed Online - Take Immediate Action to Secure It
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Unrestricted access to your private information creates significant security vulnerabilities. From malicious data brokers to unexpected breaches, your digital footprint is constantly being exploited. Our specialized removal services eliminate these threats.
            </p>

            <div className="glass-panel bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
              <p className="text-brand-gold text-[0.65rem] uppercase tracking-widest mb-4 font-bold pl-2">
                Core Protection Protocols:
              </p>
              <ul className="space-y-2.5 pl-2">
                {[
                  "Systematic removal from public data brokers",
                  "Comprehensive social media privacy auditing",
                  "Mobile application telemetry restrictions",
                  "Deep-web and dark-web breach monitoring",
                  "Legal privacy policy navigation and enforcement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-white/80 font-medium">
                    <svg width="16" height="16" className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                Get A Free Consultation
              </Link>
              <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">
                Call: +9188827 88412
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <svg width="20" height="20" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-0.5 max-w-md">
                <span className="text-white font-semibold">Identity theft is preventable.</span>{" "}
                Secure your digital assets before they can be weaponized.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">
                    Initiate Your Data Removal Protocol
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DATA IS ONLINE - Asymmetrical Grid ───────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <RevealOnScroll>
              <div className="premium-copy-panel">
                <p className="section-label mb-2 text-brand-gold">The Scope of Exposure</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  The Extent of Your Digital Footprint &amp; <span className="heading-script text-brand-blue">How It gets Exposed</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Modern digital life leaves an exhaustive trail. Every online transaction, social interaction, and digital subscription contributes to a massive, publicly accessible profile. Data brokers aggregate and monetize this footprint relentlessly.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
                  This unchecked accumulation of sensitive data poses severe risks to your personal and financial security. Cybercriminals exploit exposed locational, financial, and behavioral records to orchestrate targeted attacks, identity theft, and severe digital fraud.
                </p>

                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">
                  Primary Vectors of Data Exposure:
                </p>
                <div className="space-y-4">
                  {dataSources.map((s, i) => (
                    <div
                      key={s.label}
                      className={`premium-info-card flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl bg-white border border-zinc-200 ${s.accentCls} border-l-4 hover:shadow-md transition-shadow duration-300`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl bg-zinc-50 border border-zinc-100 shadow-sm`}>
                        {s.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 text-base mb-1.5">{s.label}</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Data type cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:mt-24">
              {dataTypes.map((d, i) => (
                <RevealOnScroll key={d.category} delay={i * 150}>
                  <div className={`premium-info-card rounded-2xl border p-6 transition-all duration-400 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] ${d.color} h-full`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0">
                        {d.icon}
                      </div>
                      <span className={`text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${d.badgeColor}`}>
                        {d.category}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE PROTECT YOU - Grid Layout ───────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Process</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Deploying Advanced Methodologies to <span className="heading-script text-brand-blue">Eradicate Your Data</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                We go beyond simple removal requests. We implement robust, long-term privacy frameworks to ensure your data remains secure against future exploitation.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {selfProtectionSteps.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-widest text-3xl">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY REMOVE / PARTNER SECTION ─────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <RevealOnScroll>
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="Digital Privacy and Data Protection"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 hidden md:flex">
                <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 mb-0.5">Data Protected</p>
                  <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Full security provided</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <RevealOnScroll>
              <p className="section-label mb-2">Why Remove Your Info</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                The Strategic Imperative of <span className="heading-script text-brand-gold">Digital Privacy</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 text-[0.95rem]">
                Taking back control of your digital identity is not optional in today's threat landscape. Successfully navigating the complex web of data aggregators requires specialized legal knowledge and persistent technical execution.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                Our elite removal teams handle the heavy lifting. We systematically dismantle the infrastructure exposing your personal life, providing you with verifiable security and peace of mind.
              </p>

              {/* Risk callout - SaaS Alert Style */}
              <div className="bg-red-50/80 border border-red-100 rounded-2xl p-6 mb-10 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-red-800 text-sm mb-1.5">The risks of doing nothing</p>
                    <p className="text-red-700/80 text-sm leading-relaxed">
                      Failure to secure your data directly invites sophisticated spear-phishing attacks, financial ruin through identity theft, and severe physical security vulnerabilities via exposed residential addresses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get Started</Link>
                <a href="tel:+918882788412" className="btn-blue shadow-lg shadow-brand-blue/20 px-8 py-3.5">Call: +9188827 88412</a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS - Glassmorphic Dark Layout ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
              <p className="text-zinc-400 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">We pay attention to details and quality, ensuring good communication and a strong customer relationship built on absolute discretion.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none mb-1">{t.name}</p>
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
                  Private Info Removal <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific situation? Contact our privacy experts for a free assessment of
                  your online data exposure.
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

      {/* ── CONTACT CTA - Premium Grand Finish ───────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Protect Yourself Today</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Stop Leaving Your Personal Data <span className="heading-script text-blue-400">vulnerable and exposed</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Engage our privacy specialists for a comprehensive digital risk assessment. We will map your entire exposure footprint and execute a decisive strategy to reclaim your privacy.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  {
                    label: "Direct Hotline (24/7)",
                    value: "+9188827 88412",
                    href: "tel:+918882788412",
                    icon: "📞"
                  },
                  {
                    label: "Secure Email",
                    value: "contact@onlinereputationbuilder.in",
                    href: "mailto:contact@onlinereputationbuilder.in",
                    icon: "✉️"
                  },
                  {
                    label: "Headquarters",
                    value: "Shantipally, Behala, Kolkata - 700060",
                    href: null,
                    icon: "🏢"
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors"
                        >
                          {item.value}
                        </a>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "How to get my address off people search sites quickly?", answer: "We use manual opt-outs and automated scans to remove your personal information from data brokers and people search engines quickly." },
        { question: "Can someone find my financial info online without permission?", answer: "Yes, data brokers often aggregate and sell this data. Our service identifies these exposures and requests immediate removal to protect your privacy." },
        { question: "How to delete court case records from public Google searches?", answer: "While public records exist, we employ legal takedowns and advanced SEO strategies to suppress court records from appearing in Google searches for your name." }
      ]} />
      <Footer />
    </div>
  );
}