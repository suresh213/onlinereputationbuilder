// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const stats = [
//   { number: "45%", label: "Conversion Lift Verified" },
//   { number: "99%", label: "Spam Review Removal Accuracy" },
//   { number: "24/7", label: "E-Commerce Stream Monitoring" },
//   { number: "5k+", label: "Product Listing Pages Cleaned" },
// ];

// const featureHighlights = [
//   {
//     title: "E-Commerce Conversion Defense",
//     desc: "Fake or low-quality product reviews damage item pages on Amazon, Shopify, and niche e-commerce networks. We clear out malicious content to secure your sales pipeline.",
//   },
//   {
//     title: "Automated Competitor Flagging",
//     desc: "We scan buyer profiles to separate legitimate user issues from coordinated 1-star competitor drops intended to diminish your organic merchant listings.",
//   },
//   {
//     title: "Aggregated Star Score Boost",
//     desc: "By removing systematically fraudulent low ratings, we help optimize aggregated structured rich snippets, displaying positive results directly inside search loops.",
//   },
// ];

// const approachProcess = [
//   { step: "01", title: "Review Origin Mapping", desc: "Our platform maps review footprints to discover automated bot nets or fake consumer feedback profiles targeting your inventory lines." },
//   { step: "02", title: "Platform TOS Appeals", desc: "We deploy compliance frameworks to build evidence packages for Amazon, Trustpilot, and custom merchant engines to process permanent removals." },
//   { step: "03", title: "Verified Buyer Amplification", desc: "We establish direct transactional loops that prompt genuine buyers to post authentic product verification marks, lifting metrics safely." },
//   { step: "04", title: "Continuous Risk Watch", desc: "We provide systemic long-term data tracking across vendor portals to neutralize coordinated low-rating drops before index patterns change." },
// ];

// const faqs = [
//   { q: "Can you delete unverified product reviews?", a: "Yes. Most consumer marketplaces state that product reviews must stem from verified cross-border purchases or real user intent. Unverified spam content is flagged under platform compliance paths for fast takedown." },
//   { q: "Does product rating cleanup impact merchant ranking?", a: "Instantly. Raising the aggregate product star rating updates structural rich snippets and schema data, boosting conversion loops and increasing visibility metrics organically." },
//   { q: "Are your methodologies platform-compliant?", a: "Entirely. We work within legal digital parameters, marketplace reporting mechanisms, and compliance avenues to remove fake ratings without risking vendor profiles." },
// ];

// function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
//   return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
// }

// export default function ProductReviewsManagementPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
//         <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
//         <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
//           <div className="hero-copy mt-4">
//             <RevealOnScroll>
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
//                 <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" /></span>
//                 Product Line Protection
//               </div>
//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Advanced <span className="text-gradient-gold">Product Review</span> Management &amp; Cleanup Solutions
//               </h1>
//               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//                 Fake product feedback can permanently damage catalog items on Amazon, Shopify, and global sales channels. We isolate bad data, clear out invalid reviews, and protect your item conversions.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Optimize Product Catalog Trust</Link>
//                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-700 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Product Catalog Operations" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>
//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">E-Commerce Audit</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">Catalog Clean Request</h2>
//                   </div>
//                 </div>
//                 <ContactForm dark />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
//             {stats.map((s, i) => (
//               <RevealOnScroll key={s.label} delay={i * 100}>
//                 <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
//                   <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">{s.number}</p>
//                   <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </div>

//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <RevealOnScroll>
//               <div>
//                 <p className="section-label mb-2 text-brand-gold">Sales Velocity</p>
//                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">Why Product Review Integrity Shapes Your <span className="heading-script text-brand-blue">Revenue Metrics</span></h2>
//                 <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">A single batch of spam downratings can instantly break buyer checkout loops. We track, clean, and restore data fidelity lines across complex market platforms efficiently.</p>
//               </div>
//             </RevealOnScroll>
//             <div className="grid grid-cols-1 gap-5">
//               {featureHighlights.map((item) => (
//                 <div key={item.title} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
//                   <h4 className="font-bold text-zinc-900 text-sm mb-1.5">{item.title}</h4>
//                   <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">Our Systematic <span className="heading-script text-brand-blue">Catalog Optimization Process</span></h2>
//             </div>
//           </RevealOnScroll>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {approachProcess.map((s, i) => (
//               <RevealOnScroll key={s.step} delay={i * 100}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30">
//                   <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors mb-4 block">{s.step}</span>
//                   <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
//         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
//           <RevealOnScroll>
//             <div className="sticky top-32">
//               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">Marketplace <span className="text-gradient-gold">FAQs</span></h2>
//               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how we process e-commerce catalog removals and keep your listings robustly optimized.</p>
//               <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm">Speak With Our Specialist</a>
//             </div>
//           </RevealOnScroll>
//           <RevealOnScroll delay={200}>
//             <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
//               <FAQ items={faqs} />
//             </div>
//           </RevealOnScroll>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Data Extracted from Your Content ─────────────────────────────────────── */

const platforms = ["Amazon", "Flipkart", "Google", "Trustpilot", "G2", "Capterra", "Facebook", "Yelp", "MouthShut", "JustDial"];

const stats = [
  { end: 92, suffix: "%", label: "of consumers read online reviews before buying" },
  { end: 4, suffix: "×", label: "revenue uplift when rating improves from 3★ to 4★" },
  { end: 68, suffix: "%", label: "of buyers trust platforms with recent, abundant reviews" },
  { end: 40, suffix: "%", label: "conversion drop caused by just one page of negative reviews" },
];

const services = [
  {
    title: "Multi-Platform Monitoring",
    desc: "We track every review posted about your products across Amazon, Flipkart, Google, Trustpilot, G2, and 50+ other platforms in real time.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Fake Review Removal",
    desc: "Policy-violating reviews - spam, bot-generated, competitor sabotage - are flagged and escalated for permanent removal.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Professional Review Response",
    desc: "Timely, brand-consistent responses to every review. Negative feedback is handled with empathy; positives are amplified.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
  {
    title: "Review Generation Campaigns",
    desc: "Automated post-purchase email and SMS flows that invite satisfied customers to leave genuine, platform-compliant reviews.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    title: "Sentiment Analysis & Reporting",
    desc: "Deep-dive monthly reports revealing review trends, keyword sentiment, rating trajectory, and competitive benchmarking.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    title: "CRM & E-commerce Integration",
    desc: "Seamless integration with Shopify, WooCommerce, Salesforce, and more - making review management part of your existing workflow.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  },
];

const processes = [
  { step: "01", title: "Platform Audit", desc: "We map your entire review presence across all relevant platforms - identifying gaps, fake reviews, unanswered feedback, and rating risks." },
  { step: "02", title: "Strategy Design", desc: "A custom roadmap is created for your industry, customer base, and platform mix - covering removal, response, and generation goals." },
  { step: "03", title: "Active Management", desc: "Ongoing flagging of policy-violating reviews, professional response drafting, and review generation campaign execution." },
  { step: "04", title: "Amplification", desc: "Positive reviews are strategically highlighted across your marketing channels to maximize social proof impact." },
  { step: "05", title: "Monthly Review & Optimise", desc: "Regular strategy reviews ensure we adapt to platform algorithm changes, seasonal trends, and your evolving product portfolio." },
];

const includedFeatures = [
  "Multi-platform review monitoring (50+ sites)",
  "Fake & spam review flagging and removal",
  "Review response within 24 hours",
  "Monthly sentiment & rating reports",
  "Post-purchase review generation campaigns",
  "Dedicated account manager",
  "Platform algorithm update monitoring",
  "Competitor review benchmarking",
];

const faqs = [
  { q: "Which platforms do you manage product reviews on?", a: "We manage reviews across all major platforms including Amazon, Flipkart, Google Shopping, Trustpilot, G2, Capterra, Facebook, and niche industry-specific review sites. If your customers leave reviews there, we'll monitor and manage it." },
  { q: "How do you generate more positive reviews ethically?", a: "We deploy structured post-purchase email and SMS campaigns that invite satisfied customers to share their experience. All campaigns are platform-compliant and never offer incentives in exchange for reviews - only a frictionless path to share genuine feedback." },
  { q: "Can you remove negative product reviews?", a: "Where a review violates a platform's terms of service (fake, spam, defamatory, or unverified), we flag and escalate for removal. For genuine negative feedback, we focus on professional public responses, resolution workflows, and increasing the volume of positive reviews to improve your overall rating." },
  { q: "What kind of reporting do I receive?", a: "You receive a monthly reputation report covering overall rating trends, review volume, sentiment breakdown, removal outcomes, and campaign performance - all presented in a clear, executive-ready format." },
  { q: "Do you work with multi-location or multi-product businesses?", a: "Yes. We have dedicated workflows for enterprise clients managing dozens of product lines or store locations. Your account manager will tailor a scalable monitoring and response strategy for your specific structure." },
];

/* ─── Animation Components ───────────────────────────────────────── */

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

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
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
  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function ProductReviewsManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
                </span>
                Product Reviews Management
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Turn Customer Reviews into Your <span className="text-gradient-gold">Strongest Asset</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Over 92% of buyers read product reviews before purchasing. We help you monitor, manage, and amplify reviews across every major platform - so your products earn the trust they deserve.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {platforms.map(p => (
                  <span key={p} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-zinc-300 backdrop-blur-sm">
                    {p}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Start Free Audit →
                </Link>
                <a href="#services" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  See Our Work
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Score Widget & Form */}
          <div className="relative lg:mt-6 h-full w-full">
            <RevealOnScroll delay={200}>
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" 
                  alt="E-commerce Trust" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>

              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6">
                <div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-6 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Reputation Score</p>
                    <div className="flex items-end gap-3 mt-2">
                      <span className="font-heading text-5xl font-black text-white leading-none">4.7</span>
                      <span className="text-2xl text-brand-gold mb-1">★★★★★</span>
                    </div>
                    <p className="text-zinc-400 text-sm mt-2">Based on 1,240 reviews across 6 platforms</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6">
                  <div>
                    <p className="font-heading font-bold text-xl text-green-400">↑ 0.4</p>
                    <p className="text-xs text-zinc-500 font-semibold mt-1">RATING INCREASE</p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-white">+128</p>
                    <p className="text-xs text-zinc-500 font-semibold mt-1">NEW REVIEWS/MO</p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-red-400">↓ 7</p>
                    <p className="text-xs text-zinc-500 font-semibold mt-1">REMOVED (FAKE)</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300 text-center h-full">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2500} />
                  </p>
                  <p className="text-zinc-400 text-[0.75rem] font-bold uppercase tracking-widest leading-relaxed mt-2">
                    {s.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section id="services" className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Services</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Everything You Need to <span className="heading-script text-brand-blue">Master</span> Product Reviews
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
                From real-time monitoring to strategic response - we manage the full lifecycle of your product's online reputation.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 50}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
                  <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-brand-blue to-blue-400" />
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-300 bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white group-hover:shadow-lg">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 transition-colors relative z-10 group-hover:text-brand-blue">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS & INCLUDED FEATURES ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">How It Works</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                A Proven 5-Step <span className="heading-script text-brand-blue">Review Management</span> System
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
            
            {/* Left: 5-Step Process */}
            <div className="space-y-6 relative">
              <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
              {processes.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 100}>
                  <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-500 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-sm">
                      {p.step}
                    </div>
                    <div className="pt-1 flex-1">
                      <h4 className="font-bold text-zinc-900 text-[1.05rem] mb-1.5 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                      <p className="text-[0.93rem] text-zinc-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Right: What's Included Box */}
            <RevealOnScroll delay={300}>
              <div className="sticky top-32">
                <div className="bg-white border border-zinc-200 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[40px] pointer-events-none" />
                  
                  <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-8 relative z-10">What's Included in Every Plan</h3>
                  
                  <div className="space-y-5 relative z-10">
                    {includedFeatures.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="14" height="14" className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <p className="text-[0.95rem] text-zinc-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-zinc-100">
                    <Link href="#contact" className="btn-gold w-full block text-center py-3.5 shadow-lg shadow-brand-gold/20">
                      Claim Your Free Audit
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── FAQ - Dark Mode ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
          <RevealOnScroll>
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="text-[0.65rem] font-bold tracking-wider uppercase text-brand-gold m-0">FAQ</p>
              </div>
              
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Common <br className="hidden lg:block"/>
                <span className="text-gradient-gold">Questions</span>
              </h2>
              
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">
                Everything you need to know about how we manage, monitor, and remove product reviews.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-gold/30 via-brand-blue/10 to-transparent rounded-3xl opacity-50 blur-sm pointer-events-none"></div>
              <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
                <FAQ items={faqs} />
              </div>
            </div>
          </RevealOnScroll>
          
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Get Started</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Turn Reviews into <span className="heading-script text-blue-400">Revenue?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Get a free 14-point review audit across your top platforms. Our experts will assess your situation and present a clear action plan - no commitment, no credit card required.
              </p>
              
              <div className="space-y-6 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      <a href={item.href || "#"} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
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
                <p className="text-white font-heading font-bold text-xl mb-2">Request Free Audit</p>
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