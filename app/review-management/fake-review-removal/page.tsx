// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const stats = [
//   { number: "98%", label: "Fake Reviews Identified" },
//   { number: "24/7", label: "Threat Monitoring" },
//   { number: "10k+", label: "Spam Posts Removed" },
//   { number: "12+", label: "Years Experience" },
// ];

// const services = [
//   {
//     title: "Bot Attack Mitigation",
//     desc: "We identify and neutralize coordinated bot attacks designed to artificially tank your ratings across multiple platforms simultaneously.",
//     icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
//   },
//   {
//     title: "Competitor Sabotage Defense",
//     desc: "Competitors often use fake accounts to leave damaging reviews. We trace patterns, build documentation, and force removals through platform legal channels.",
//     icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
//   },
//   {
//     title: "TOS Violation Escalation",
//     desc: "We expertly navigate complex Terms of Service guidelines to prove a review is fake, escalating directly to platform compliance and safety teams.",
//     icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
//   },
// ];

// const faqs = [
//   { q: "How do you prove a review is fake?", a: "We analyze IP patterns, account creation dates, velocity of negative reviews, lack of transactional history, and linguistic footprints to build an undeniable case for platform moderators." },
//   { q: "Can competitors be held liable for fake reviews?", a: "Yes. If we can trace the malicious activity back to a competitor, we work with legal partners to issue cease and desist orders and pursue damages for defamation." },
//   { q: "What if the platform refuses to remove the fake review?", a: "If standard reporting fails, we escalate to legal counsel for formal takedown notices, while simultaneously deploying suppression strategies to push the fake review out of visibility." },
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

// function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } }, { threshold: 0.1 });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);
//   useEffect(() => {
//     if (!inView) return;
//     let startTime: number | null = null;
//     const animate = (currentTime: number) => {
//       if (!startTime) startTime = currentTime;
//       const progress = Math.min((currentTime - startTime) / duration, 1);
//       setCount((1 - Math.pow(1 - progress, 4)) * end);
//       if (progress < 1) requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, [inView, end, duration]);
//   return <span ref={ref}>{prefix}{Math.floor(count)}{suffix}</span>;
// }

// export default function FakeReviewRemovalPage() {
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
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-red-500/30 bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
//                 <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" /></span>
//                 Targeted Fake Review Removal
//               </div>
//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Erase Malicious <span className="text-gradient-gold">Fake Reviews</span> Destroying Your Brand
//               </h1>
//               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//                 Competitors, disgruntled ex-employees, and internet trolls use fake reviews to sabotage your hard-earned reputation. We specialize in legally and technically forcing the removal of fraudulent ratings to restore your true brand score.
//               </p>
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Stop the Sabotage</Link>
//                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" alt="Cyber Security and Fake Review Analysis" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>
//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">Confidential Assessment</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">Remove Fraudulent Data</h2>
//                   </div>
//                 </div>
//                 <ContactForm dark />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
//             {stats.map((s, i) => {
//               const num = parseInt(s.number.replace(/\D/g, ''));
//               const suffix = s.number.replace(/\d/g, '');
//               return (
//                 <RevealOnScroll key={s.label} delay={i * 100}>
//                   <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
//                     <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
//                       <AnimatedCounter end={num} suffix={suffix} duration={2500} />
//                     </p>
//                     <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
//                   </div>
//                 </RevealOnScroll>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//                 How We Defeat <span className="heading-script text-red-600">Fake Review Attacks</span>
//               </h2>
//             </div>
//           </RevealOnScroll>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {services.map((s, i) => (
//               <RevealOnScroll key={s.title} delay={i * 100}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-red-500/30">
//                   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//                   <div className="flex items-start justify-between mb-8 relative z-10">
//                     <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
//                       {s.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-red-600 transition-colors">{s.title}</h3>
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
//               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
//                 Fake Review <span className="text-gradient-gold">FAQs</span>
//               </h2>
//               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Understand how we analyze and permanently delete fraudulent attacks against your business profile.</p>
//               <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">Talk to a Removal Expert</a>
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

/* ─── EXPANDED DATA ARRAYS ───────────────────────────────────────────────── */

const stats = [
  { end: 15, suffix: "k+", label: "Fake Reviews Deleted" },
  { end: 98, suffix: "%", label: "Platform Success Rate" },
  { end: 24, suffix: "/7", label: "Threat Monitoring" },
  { end: 12, suffix: "+", label: "Years of ORM Authority" },
];

const impacts = [
  {
    title: "Algorithm Penalties & SEO Drops",
    desc: "Fake review campaigns don't just hurt your star rating; search engines like Google use sentiment analysis. A sudden influx of 1-star reviews signals poor quality to algorithms, dropping your organic search rankings and decreasing your overall digital visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
    ),
  },
  {
    title: "Direct Revenue Hemorrhage",
    desc: "Studies show that a single unaddressed negative review can cost a business up to 22% of potential customers. When fake reviews dominate your profile, consumer trust evaporates, leading to high bounce rates and abandoned shopping carts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Competitor Sabotage Vulnerability",
    desc: "Unethical competitors frequently use bot networks or click-farms to artificially tank your reputation while boosting their own. Without a defense mechanism, your brand becomes an easy target for coordinated corporate sabotage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
  },
  {
    title: "Loss of Brand Equity & Trust",
    desc: "Years of marketing and brand-building can be undone in days by a targeted fake review attack. Rebuilding consumer confidence takes exponentially more time and resources than removing the fraudulent content at its source.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
];

const services = [
  {
    title: "Bot Attack Mitigation",
    desc: "We identify and neutralize coordinated bot attacks designed to artificially tank your ratings across multiple platforms simultaneously. We analyze IP patterns to force mass removals.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Competitor Sabotage Defense",
    desc: "Competitors often use fake accounts to leave damaging reviews. We trace digital footprints, build comprehensive documentation, and force removals through platform legal channels.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  },
  {
    title: "TOS Violation Escalation",
    desc: "We expertly navigate complex Terms of Service guidelines to prove a review is fake, escalating directly to platform compliance and safety teams rather than relying on automated flags.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  },
  {
    title: "Ex-Employee Retaliation",
    desc: "Disgruntled former employees frequently leave fake customer reviews. We cross-reference HR data with public review timestamps to prove conflict of interest and execute takedowns.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "Extortion & Blackmail Removal",
    desc: "Scammers sometimes leave 1-star reviews demanding payment for removal. We interface with platform legal teams to report extortion, resulting in immediate account bans and review purges.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  },
  {
    title: "Search De-Indexing",
    desc: "Once a fake review is deleted from the source platform, we expedite Google cache clearing requests to ensure the defamatory snippet is permanently wiped from search engine results.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  },
];

const removalProcess = [
  {
    step: "01",
    title: "Forensic Profile Auditing",
    desc: "We deploy advanced digital forensics to analyze review patterns, IP anomalies, account creation dates, and linguistic similarities to legally prove a review is part of a coordinated fake attack.",
  },
  {
    step: "02",
    title: "TOS Compliance Mapping",
    desc: "Every platform (Google, Trustpilot, Yelp) has strict Terms of Service. We map the fraudulent content directly to specific TOS violations-such as spam or conflict of interest-to force action.",
  },
  {
    step: "03",
    title: "Legal Escalation & Removal",
    desc: "When standard reporting algorithms fail, our compliance team escalates the issue directly to platform Trust & Safety boards, utilizing cease-and-desist frameworks to compel permanent removal.",
  },
  {
    step: "04",
    title: "Search Engine De-Indexing",
    desc: "Removing the review from the host site is only step one. We immediately submit cache-clearing and de-indexing requests to Google so the fake reviews no longer appear in your search results.",
  },
];

const platformsCovered = [
  "Google Business Profile",
  "Trustpilot",
  "Yelp",
  "Glassdoor",
  "Facebook Reviews",
  "TripAdvisor",
  "Amazon & Shopify",
  "Better Business Bureau",
];

const testimonials = [
  {
    name: "Michael T.",
    role: "E-Commerce Director",
    text: "We were hit by a coordinated bot attack that dropped our Google rating from 4.8 to 3.2 in a weekend. The team here mapped the attack and had 140+ fake reviews deleted in under two weeks. Absolutely saved our quarter.",
    initials: "MT",
  },
  {
    name: "Sarah L.",
    role: "Clinic Founder",
    text: "A disgruntled ex-employee created dozens of fake accounts to leave horrible reviews. We tried reporting them ourselves for months with no luck. ORM Pro took over and had them legally removed.",
    initials: "SL",
  },
  {
    name: "David K.",
    role: "Restaurant Owner",
    text: "Competitors were leaving fake food poisoning reviews on our Yelp and TripAdvisor. The forensics team proved they were fake and forced the platforms to take them down. Truly worth every penny.",
    initials: "DK",
  },
];

const faqs = [
  { q: "How can you prove to a platform that a review is fake?", a: "Platforms look for specific signals. We utilize digital forensics to identify velocity spikes (too many reviews at once), location mismatches, generic repetitive text, lack of transaction history, and violations of conflict-of-interest policies. We package this data into an undeniable compliance report." },
  { q: "Can we find out who is posting the fake reviews?", a: "In many cases involving aggressive competitor sabotage or ex-employee harassment, we can use legal subpoenas (John Doe lawsuits) to force platforms or ISPs to hand over the IP addresses and identifying information of the attackers." },
  { q: "What happens if a platform absolutely refuses to remove a fake review?", a: "If a platform's moderation team makes an error, we escalate the claim to their legal department. If the content is protected by safe harbor laws and cannot be removed, we pivot to advanced SEO suppression-flooding the profile with verified, authentic 5-star reviews to bury the fake content so deeply it is never seen." },
  { q: "Do you protect against automated bot attacks?", a: "Yes. Bot attacks usually follow predictable patterns. We monitor your profiles 24/7, flag the influx of automated spam immediately, and work with platform engineers to roll back the entire batch of bot-generated reviews in one sweep." },
  { q: "Will removing fake reviews improve my local SEO?", a: "Drastically. Google prioritizes businesses with high aggregate star ratings and authentic review velocity in the Local Map Pack. Removing a cluster of 1-star fake reviews immediately restores your aggregate score and triggers a rebound in your local search rankings." },
  { q: "Is it possible to remove reviews from years ago?", a: "Yes. Fake reviews do not have an expiration date on platform policy violations. If we can prove a review from 3 years ago violates the Terms of Service (e.g., it was left by a competitor), we can still successfully petition for its removal." },
];

/* ─── ANIMATION COMPONENTS ───────────────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
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

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────────── */

export default function FakeReviewRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-red-500/30 bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                Targeted Fake Review Removal
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Erase Malicious <span className="text-gradient-gold">Fake Reviews</span> Destroying Your Brand
              </h1>
              
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Competitors, disgruntled ex-employees, and internet trolls use fake reviews to sabotage your hard-earned reputation. We specialize in legally and technically forcing the removal of fraudulent ratings across Google, Trustpilot, Glassdoor, and Yelp to restore your true brand score.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {[
                  "Identify and neutralize coordinated bot attacks instantly",
                  "Enforce platform TOS to guarantee fraudulent review deletion",
                  "Pursue legal escalation against competitor sabotage",
                  "De-index removed reviews from Google Search algorithms",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-500 text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Stop the Sabotage Today
                </Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white transition-colors">
                  Call: +9188827 88412
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Contact Form Over Image */}
          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cyber Security and Fake Review Analysis" 
                  className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>
              
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-red-500 mb-1">Confidential Assessment</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">Remove Fraudulent Data</h2>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ────────────────────────────── */}
      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                    <AnimatedCounter end={s.end} suffix={s.suffix} duration={2500} />
                  </p>
                  <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM (IMPACTS) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-red-500">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  The Devastating Impact of <span className="heading-script text-red-600">Fake Online Reviews</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
                  Fake reviews are rarely isolated incidents; they are coordinated attacks. Whether orchestrated by a disgruntled former employee, an unethical competitor, or extortionists, the damage to your bottom line is immediate and severe if left unchecked.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {impacts.map((item) => (
                    <div key={item.title} className="group flex flex-col items-start gap-3 p-5 rounded-2xl bg-white border border-red-100 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl flex-shrink-0 filter grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                        <h4 className="font-bold text-zinc-900 text-sm leading-snug">{item.title}</h4>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Audit Your Profile Free
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" 
                    alt="Cyber Security Reputation Threat" 
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Threat Neutralized</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Brand Protected</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── PLATFORMS COVERED ────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <RevealOnScroll>
            <p className="text-[0.65rem] font-bold tracking-widest uppercase text-zinc-500 mb-8">Platforms We Clean & Protect</p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {platformsCovered.map((platform, i) => (
                <span key={i} className="px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-semibold hover:text-white hover:border-zinc-600 transition-colors">
                  {platform}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES (THE SOLUTION) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Do</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Enterprise Solutions to <span className="heading-script text-red-600">Eradicate Fake Reviews</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
                We do not rely on basic "flagging". We utilize enterprise-grade legal, compliance, and technical methodologies to ensure permanent erasure of fraudulent content across all platforms.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-red-500/30">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-red-600 transition-colors">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY (STEP BY STEP) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
          
          {/* Left: Process Timeline */}
          <div className="space-y-6 relative">
            <RevealOnScroll>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-10 leading-tight">
                Our Proven <span className="heading-script text-brand-blue">Removal Methodology</span>
              </h2>
            </RevealOnScroll>
            <div className="absolute left-[1.35rem] top-24 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
            
            {removalProcess.map((p, i) => (
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

          {/* Right: Why Act Now Box */}
          <RevealOnScroll delay={300}>
            <div className="sticky top-32">
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] pointer-events-none" />
                
                <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-6 relative z-10">Why Time is Critical</h3>
                <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 relative z-10">
                  Fake reviews are indexed by search engines within hours. The longer they sit on your profile, the harder they are to de-index and the more potential customers you lose. 
                </p>
                <div className="space-y-4 mb-10 relative z-10">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <span className="text-red-500">⚠</span> Immediate Conversion Drop
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <span className="text-red-500">⚠</span> Long-Term SEO Damage
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <span className="text-red-500">⚠</span> Competitor Advantage
                  </div>
                </div>
                <div className="relative z-10">
                  <Link href="#contact" className="btn-gold w-full block text-center py-3.5 shadow-lg shadow-brand-gold/20">
                    Get an Emergency Audit
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Success</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">Protected from <span className="heading-script text-red-500">Sabotage</span></h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-red-500/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-[0.9rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="text-red-500 text-xs font-bold tracking-wider">{t.initials}</span>
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

      {/* ── FAQ SECTION ────────────────────────────── */}
      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          <RevealOnScroll>
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <p className="text-[0.65rem] font-bold tracking-wider uppercase text-red-500 m-0">Knowledge Base</p>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Fake Review <br className="hidden lg:block"/><span className="text-gradient-gold">FAQs</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">
                Understand the exact legal and technical protocols we use to permanently delete fraudulent attacks against your business profile.
              </p>
              
              <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30 shadow-inner">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Under Attack Right Now?</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Our crisis team is available 24/7.</p>
                  </div>
                </div>
                <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">Talk to a Removal Expert</a>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-gold/30 via-red-500/10 to-transparent rounded-3xl opacity-50 blur-sm pointer-events-none"></div>
              <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
                <FAQ items={faqs} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-red-500">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Immediately</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Fake Reviews <span className="heading-script text-red-500">Define Your Brand</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation. Every hour that fake reviews remain online, they decimate consumer trust and steal revenue. Our experts will assess your situation and act fast.
              </p>
              <div className="space-y-6 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">{item.icon}</div>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-red-500/50 via-brand-gold/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
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