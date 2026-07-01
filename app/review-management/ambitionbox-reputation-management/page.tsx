// // "use client";
// // import { useState, useEffect, useRef, ReactNode } from "react";
// // import Topbar from "@/components/Topbar";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import ContactForm from "@/components/ContactForm";
// // import FAQ from "@/components/FAQ";
// // import Link from "next/link";

// // const stats = [
// //   { number: "96%", label: "Placement Score Protection Rate" },
// //   { number: "12+", label: "Years in Corporate ORM" },
// //   { number: "450+", label: "Enterprise Brands Secured" },
// //   { number: "4.5+", label: "Average Rating Restored" },
// // ];

// // const profilesMatters = [
// //   {
// //     title: "Securing Top Talent Acquisition",
// //     desc: "Job seekers heavily research AmbitionBox before accepting offers. Clean profiles ensure your HR division can hire top-tier industry candidates without friction.",
// //   },
// //   {
// //     title: "Neutralizing Malicious Reviews",
// //     desc: "Fake employee feedback or malicious posts from competitors can instantly lower your operational rating. We analyze and eliminate unverified feedback.",
// //   },
// //   {
// //     title: "Corporate Image Defense",
// //     desc: "AmbitionBox ratings frequently surface on the first page of Google search results when clients look up your brand. A pristine score preserves business value.",
// //   },
// // ];

// // const cleanProcess = [
// //   { step: "01", title: "Review Verification Audit", desc: "We track and cross-reference anonymous reviews against your actual historical HR exit logs to detect patterns of malicious or fake intent." },
// //   { step: "02", title: "Guidelines Appeal Submission", desc: "We file well-documented, professional appeals directly to AmbitionBox's moderation desk highlighting absolute violations of community terms." },
// //   { step: "03", title: "Ethical Rating Optimization", desc: "We deploy compliance-approved employee internal loops to encourage genuine, active team members to share authentic positive office highlights." },
// //   { step: "04", title: "Continuous Brand Monitoring", desc: "Our automated scrapers continuously scan for review trends to flag unexpected 1-star drops before they negatively impact your composite score." },
// // ];

// // const faqs = [
// //   { q: "Can you remove anonymous reviews on AmbitionBox?", a: "Yes. While users post anonymously, the content must comply with strict criteria regarding factual accuracy and zero defamation. If a post violates guidelines, it is eligible for permanent deletion." },
// //   { q: "How long does it take to repair an AmbitionBox score?", a: "Simple guidelines appeals take 2 to 4 weeks. Full narrative management and strategic employee optimization loops typically span 6 to 12 weeks for maximum stability." },
// //   { q: "Is your method approved by platform terms?", a: "Absolutely. We exclusively utilize legal appeals, guideline enforcement protocols, and ethical corporate engagement strategies to manage your corporate score." },
// // ];

// // function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const ref = useRef<HTMLDivElement>(null);
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
// //     if (ref.current) observer.observe(ref.current);
// //     return () => observer.disconnect();
// //   }, []);
// //   return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
// // }

// // export default function AmbitionBoxReputationPage() {
// //   return (
// //     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
// //       <Topbar />
// //       <Navbar />

// //       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
// //         <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
// //         <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
// //         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

// //         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
// //           <div className="hero-copy mt-4">
// //             <RevealOnScroll>
// //               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
// //                 <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" /></span>
// //                 AmbitionBox Brand Shield
// //               </div>
// //               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
// //                 Manage & Upgrade Your <span className="text-gradient-gold">AmbitionBox Corporate</span> Reputation
// //               </h1>
// //               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
// //                 Unfair employer reviews, toxic ratings, and targeted employee rants on AmbitionBox severely hit your recruitment pipeline. Our specialized legal-policy framework audits, challenges, and cleans up corporate profiles ethically.
// //               </p>
// //               <div className="flex flex-wrap gap-4">
// //                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Protect Your Workplace Image</Link>
// //                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-700 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
// //               </div>
// //             </RevealOnScroll>
// //           </div>

// //           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
// //             <RevealOnScroll delay={200} className="h-full">
// //               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
// //                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Corporate Workplace Environment" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
// //               </div>
// //               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
// //                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
// //                   <div>
// //                     <p className="section-label text-brand-gold mb-1">Corporate Assessment</p>
// //                     <h2 className="font-heading text-xl font-bold text-white leading-tight">Request Profile Cleanup</h2>
// //                   </div>
// //                 </div>
// //                 <ContactForm dark />
// //               </div>
// //             </RevealOnScroll>
// //           </div>
// //         </div>
// //       </section>

// //       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
// //         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
// //             {stats.map((s, i) => (
// //               <RevealOnScroll key={s.label} delay={i * 100}>
// //                 <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
// //                   <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">{s.number}</p>
// //                   <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
// //                 </div>
// //               </RevealOnScroll>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //             <RevealOnScroll>
// //               <div>
// //                 <p className="section-label mb-2 text-brand-gold">HR Protection</p>
// //                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">Why Managing Your AmbitionBox Score Is <span className="heading-script text-brand-blue">Critical</span></h2>
// //                 <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">Corporate employee reviews directly determine recruitment velocity and public investment parameters. Our workflow blocks structural damage before it shifts your talent loop metrics.</p>
// //               </div>
// //             </RevealOnScroll>
// //             <div className="grid grid-cols-1 gap-5">
// //               {profilesMatters.map((item) => (
// //                 <div key={item.title} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
// //                   <h4 className="font-bold text-zinc-900 text-sm mb-1.5">{item.title}</h4>
// //                   <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <RevealOnScroll>
// //             <div className="text-center max-w-2xl mx-auto mb-16">
// //               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">Our Framework for <span className="heading-script text-brand-blue">Reputation Restoration</span></h2>
// //             </div>
// //           </RevealOnScroll>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {cleanProcess.map((s, i) => (
// //               <RevealOnScroll key={s.step} delay={i * 100}>
// //                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30">
// //                   <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors mb-4 block">{s.step}</span>
// //                   <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
// //                   <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
// //                 </div>
// //               </RevealOnScroll>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
// //         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
// //           <RevealOnScroll>
// //             <div className="sticky top-32">
// //               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">AmbitionBox <span className="text-gradient-gold">FAQs</span></h2>
// //               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how we process structured removals and maintain compliance criteria cleanly.</p>
// //               <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm">Speak With Our Specialist</a>
// //             </div>
// //           </RevealOnScroll>
// //           <RevealOnScroll delay={200}>
// //             <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
// //               <FAQ items={faqs} />
// //             </div>
// //           </RevealOnScroll>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }

// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// /* ─── Data Extracted from Your Content ─────────────────────────────────────── */

// const stats = [
//   { end: 85, suffix: "%", label: "of candidates trust AmbitionBox reviews before applying" },
//   { end: 3, suffix: "×", label: "more likely to lose top talent with a rating below 3.5" },
//   { end: 500, suffix: "+", label: "companies protected across India" },
//   { end: 14, suffix: " Days", label: "average time to first review removal" },
// ];

// const services = [
//   {
//     title: "Review Audit & Analysis",
//     desc: "We conduct a comprehensive audit of all your existing reviews, identifying policy violations, fake submissions, and content eligible for removal.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
//   },
//   {
//     title: "Review Flagging & Removal",
//     desc: "Our experts build evidence-backed cases for each flaggable review and manage the escalation process directly with AmbitionBox moderators.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
//   },
//   {
//     title: "Employer Response Strategy",
//     desc: "We craft professional, empathetic responses to negative reviews that demonstrate accountability and protect your employer brand.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
//   },
//   {
//     title: "Positive Review Campaigns",
//     desc: "Ethical, organic campaigns that encourage your satisfied employees to share their genuine experiences, improving your overall rating.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
//   },
//   {
//     title: "Rating Score Improvement",
//     desc: "Targeted strategies designed to improve your star rating across all dimensions: salary, culture, work-life balance, and leadership.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
//   },
//   {
//     title: "Ongoing Monitoring & Alerts",
//     desc: "24/7 monitoring of your AmbitionBox profile with real-time alerts whenever new reviews are posted, ensuring rapid response.",
//     icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
//   },
// ];

// const processes = [
//   { step: "01", title: "Free Profile Audit", desc: "We analyse your current AmbitionBox rating, review history, and identify every review that potentially violates platform guidelines." },
//   { step: "02", title: "Strategy Proposal", desc: "You receive a clear action plan with projected outcomes, timelines, and a breakdown of recoverable vs. non-removable reviews." },
//   { step: "03", title: "Active Removal Campaign", desc: "Our team systematically flags and escalates each eligible review, providing detailed documentation to support each case." },
//   { step: "04", title: "Brand Rebuilding", desc: "Parallel to removals, we launch ethical positive review campaigns and craft employer response templates to rebuild trust." },
//   { step: "05", title: "Reporting & Monitoring", desc: "Monthly reports track your rating improvement, reviews removed, and new submissions - keeping you fully informed at every step." },
// ];

// const whyItMatters = [
//   "India's #1 employer review platform with 10M+ monthly visitors",
//   "Used by 90%+ of Indian job seekers to evaluate companies before applying",
//   "A rating drop from 4.0 to 3.2 can reduce quality applications by up to 40%",
//   "Companies with ratings above 4.0 fill positions 2.5× faster",
//   "Fake reviews from competitors or disgruntled ex-employees are increasingly common",
// ];

// const faqs = [
//   { q: "Can fake AmbitionBox reviews really be removed?", a: "Yes. If a review violates AmbitionBox's community guidelines - including defamatory, fake, or abusive content - it can be flagged and escalated to AmbitionBox moderators. Our team builds a documented case for each review and manages the entire process on your behalf." },
//   { q: "How long does the review removal process take?", a: "Timelines vary depending on the complexity of each case. Straightforward policy violations are typically resolved within 7–14 business days. Complex or disputed reviews may take longer, especially if escalation or legal support is required." },
//   { q: "Will removing negative reviews affect my company's overall rating?", a: "Removing fake or defamatory reviews that artificially lower your score will improve your overall rating. At the same time, we run parallel campaigns to encourage genuine positive reviews from satisfied employees, further strengthening your profile." },
//   { q: "Is it ethical to request review removal?", a: "Absolutely - when done correctly. We only target reviews that violate platform policies: fake submissions, defamatory statements, or reviews from people who never worked at your company. Genuine feedback, even if negative, is handled through response strategy and culture-improvement guidance." },
//   { q: "Do you offer ongoing monitoring after the initial cleanup?", a: "Yes. Our retainer packages include continuous monitoring of your AmbitionBox profile, immediate flagging of new policy-violating reviews, and monthly reputation health reports." },
// ];

// /* ─── Animation Components ───────────────────────────────────────── */

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

// function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
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
//   return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
// }

// /* ─── Page ──────────────────────────────────────────────────────── */

// export default function AmbitionBoxPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* ── HERO ─────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
//         <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
//         <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
//           <div className="hero-copy mt-4">
//             <RevealOnScroll>
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-orange-500/30 bg-orange-500/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
//                 </span>
//                 AmbitionBox ORM Services
//               </div>

//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Take Control of Your <span className="text-gradient-gold">AmbitionBox</span> Reputation
//               </h1>

//               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//                 Fake and defamatory employee reviews on AmbitionBox can damage your hiring pipeline overnight. Our specialist team removes policy-violating reviews, rebuilds your employer brand, and keeps your profile protected - ethically and permanently.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
//                   Start Today →
//                 </Link>
//                 <a href="#process" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
//                   See How It Works
//                 </a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           {/* Right: Glassmorphic Contact Form Over Image */}
//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img 
//                   src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80" 
//                   alt="Corporate HR and Employer Branding" 
//                   className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>

//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">Free Consultation</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">
//                       Protect Your Brand
//                     </h2>
//                   </div>
//                 </div>
//                 <ContactForm dark />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       {/* ── STATS ────────────────────────────────────────────── */}
//       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
//             {stats.map((s, i) => (
//               <RevealOnScroll key={s.label} delay={i * 100}>
//                 <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300 text-center h-full">
//                   <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-orange-500 transition-colors duration-300">
//                     <AnimatedCounter end={s.end} suffix={s.suffix} duration={2500} />
//                   </p>
//                   <p className="text-zinc-400 text-[0.75rem] font-bold uppercase tracking-widest leading-relaxed mt-2">
//                     {s.label}
//                   </p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SERVICES GRID ────────────────────────────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
//                 <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Do</p>
//               </div>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//                 Full-Spectrum AmbitionBox <span className="heading-script text-brand-blue">Reputation Management</span>
//               </h2>
//               <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
//                 From review removal to proactive employer branding - we cover every angle of your AmbitionBox presence.
//               </p>
//             </div>
//           </RevealOnScroll>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {services.map((s, i) => (
//               <RevealOnScroll key={s.title} delay={i * 50}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
//                   <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-brand-blue to-brand-gold" />
                  
//                   <div className="flex items-start justify-between mb-8 relative z-10">
//                     <div className="w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-300 bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white group-hover:shadow-lg">
//                       {s.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 transition-colors relative z-10 group-hover:text-brand-blue">{s.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PROCESS & WHY IT MATTERS ────────────────────────────────────────────── */}
//       <section id="process" className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
//                 <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Process</p>
//               </div>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//                 How We <span className="heading-script text-brand-blue">Protect</span> Your AmbitionBox Profile
//               </h2>
//               <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
//                 A structured, transparent approach - no black-hat tactics, no empty promises. Just proven methodology delivered by ORM specialists.
//               </p>
//             </div>
//           </RevealOnScroll>

//           <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
            
//             {/* Left: 5-Step Process */}
//             <div className="space-y-6 relative">
//               <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
//               {processes.map((p, i) => (
//                 <RevealOnScroll key={p.title} delay={i * 100}>
//                   <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
//                     <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-500 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-sm">
//                       {p.step}
//                     </div>
//                     <div className="pt-1 flex-1">
//                       <h4 className="font-bold text-zinc-900 text-[1.05rem] mb-1.5 group-hover:text-brand-blue transition-colors">{p.title}</h4>
//                       <p className="text-[0.93rem] text-zinc-500 leading-relaxed">{p.desc}</p>
//                     </div>
//                   </div>
//                 </RevealOnScroll>
//               ))}
//             </div>

//             {/* Right: Why it Matters Box */}
//             <RevealOnScroll delay={300}>
//               <div className="sticky top-32">
//                 <div className="bg-white border border-zinc-200 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[40px] pointer-events-none" />
                  
//                   <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-8 relative z-10">Why AmbitionBox Matters</h3>
                  
//                   <div className="space-y-5 relative z-10">
//                     {whyItMatters.map((item) => (
//                       <div key={item} className="flex items-start gap-4">
//                         <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <svg width="14" height="14" className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
//                         </div>
//                         <p className="text-[0.95rem] text-zinc-700 font-medium leading-relaxed">{item}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-10 pt-8 border-t border-zinc-100">
//                     <Link href="#contact" className="btn-gold w-full block text-center py-3.5 shadow-lg shadow-brand-gold/20">
//                       Claim Your Free Audit
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </RevealOnScroll>

//           </div>
//         </div>
//       </section>

//       {/* ── FAQ - Dark Mode ──────────────────────────────────────────────── */}
//       <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
//         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

//         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
          
//           <RevealOnScroll>
//             <div className="sticky top-32">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
//                 <p className="text-[0.65rem] font-bold tracking-wider uppercase text-brand-gold m-0">FAQ</p>
//               </div>
              
//               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
//                 Common <br className="hidden lg:block"/>
//                 <span className="text-gradient-gold">Questions</span>
//               </h2>
              
//               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">
//                 Everything you need to know about how we manage, monitor, and remove fake employer reviews.
//               </p>
//             </div>
//           </RevealOnScroll>
          
//           <RevealOnScroll delay={200}>
//             <div className="relative">
//               <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-gold/30 via-brand-blue/10 to-transparent rounded-3xl opacity-50 blur-sm pointer-events-none"></div>
//               <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
//                 <FAQ items={faqs} />
//               </div>
//             </div>
//           </RevealOnScroll>
          
//         </div>
//       </section>

//       {/* ── FOOTER CTA ───────────────────────────────────────────── */}
//       <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <RevealOnScroll>
//             <div className="premium-copy-panel-dark">
//               <p className="section-label text-brand-gold mb-3">Get Started</p>
//               <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
//                 Ready to Reclaim Your <span className="heading-script text-brand-blue">Employer Brand?</span>
//               </h2>
//               <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
//                 Get a free, no-obligation audit of your AmbitionBox profile. We'll identify every removable review and show you exactly what's possible.
//               </p>
              
//               <div className="space-y-6 border-t border-zinc-800/80 pt-8">
//                 {[
//                   { label: "Direct Hotline", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
//                   { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-center gap-5">
//                     <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
//                       <a href={item.href || "#"} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </RevealOnScroll>
          
//           <RevealOnScroll delay={200}>
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
//               <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
//                 <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
//                 <p className="text-white font-heading font-bold text-xl mb-2">Request Free Audit</p>
//                 <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
//                 <ContactForm dark />
//               </div>
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
  { end: 85, suffix: "%", label: "of candidates trust reviews before applying" },
  { end: 3, suffix: "×", label: "more likely to lose talent with a rating below 3.5" },
  { end: 500, suffix: "+", label: "companies protected across India" },
  { end: 14, suffix: " Days", label: "average time to first review removal" },
];

const impacts = [
  {
    title: "Skyrocketing Cost-Per-Hire",
    desc: "When your AmbitionBox rating drops below 3.5 stars, HR departments are forced to spend significantly more on recruitment marketing and premium job board placements just to convince candidates to apply.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
    ),
  },
  {
    title: "Loss of Top-Tier Talent",
    desc: "Over 85% of Indian job seekers heavily research AmbitionBox before accepting an offer. A profile littered with fake, toxic reviews causes premium candidates to ghost interviews and accept offers from your competitors.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Competitor Poaching Advantage",
    desc: "Unethical competitors use negative AmbitionBox trends as leverage to poach your existing high-performing employees, citing the 'toxic culture' portrayed in fake reviews.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
  },
  {
    title: "Damaged Corporate Equity",
    desc: "AmbitionBox ratings frequently surface on the first page of Google search results when clients or investors look up your brand. A pristine score preserves overall business value and B2B trust.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
];

const services = [
  {
    title: "Review Audit & Forensic Analysis",
    desc: "We conduct a comprehensive forensic audit of your existing reviews, identifying policy violations, fake submissions, IP anomalies, and content eligible for permanent removal.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  },
  {
    title: "TOS Flagging & Removal Escalation",
    desc: "Our experts build evidence-backed legal and technical cases for each flaggable review and manage the escalation process directly with AmbitionBox Trust & Safety moderators.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
  },
  {
    title: "Employer Response Strategy",
    desc: "We craft professional, empathetic, and de-escalating responses to negative reviews that demonstrate executive accountability and protect your broader employer brand.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
  {
    title: "Positive Review Campaigns",
    desc: "We deploy ethical, organic internal campaigns that seamlessly encourage your satisfied employees to share their genuine experiences, rapidly improving your overall rating.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    title: "Rating Score Optimization",
    desc: "Targeted strategies designed to improve your star rating across all AmbitionBox dimensions: salary, culture, work-life balance, career growth, and leadership.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
  {
    title: "Ongoing Monitoring & Alerts",
    desc: "24/7 automated monitoring of your AmbitionBox profile with real-time alerts whenever new reviews are posted, ensuring rapid response and containment of new threats.",
    icon: <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
];

const processes = [
  { step: "01", title: "Free Profile Audit", desc: "We analyse your current AmbitionBox rating, review history, and identify every review that potentially violates platform guidelines." },
  { step: "02", title: "Strategy Proposal", desc: "You receive a clear action plan with projected outcomes, timelines, and a breakdown of recoverable vs. non-removable reviews." },
  { step: "03", title: "Active Removal Campaign", desc: "Our team systematically flags and escalates each eligible review, providing detailed legal and technical documentation to support each case." },
  { step: "04", title: "Brand Rebuilding", desc: "Parallel to removals, we launch ethical positive review campaigns and craft employer response templates to rebuild candidate trust." },
  { step: "05", title: "Reporting & Monitoring", desc: "Monthly reports track your rating improvement, reviews removed, and new submissions - keeping you fully informed at every step." },
];

const whyItMatters = [
  "India's #1 employer review platform with 10M+ monthly visitors",
  "Used by 90%+ of Indian job seekers to evaluate companies before applying",
  "A rating drop from 4.0 to 3.2 can reduce quality applications by up to 40%",
  "Companies with ratings above 4.0 fill positions 2.5× faster",
  "Fake reviews from competitors or disgruntled ex-employees are increasingly common",
];

const testimonials = [
  {
    name: "Vikram M.",
    role: "HR Director, Tech Solutions",
    text: "A targeted attack by a disgruntled ex-employee dropped our score to 2.8 in a week. The ORM Pro team mapped the attack and had the reviews removed in 14 days. Absolutely saved our recruitment drive.",
    initials: "VM",
  },
  {
    name: "Sneha R.",
    role: "Startup Founder",
    text: "Candidates were literally ghosting our interviews because of fake AmbitionBox reviews. This team not only removed the defamatory posts but helped us build a strategy to highlight our true company culture.",
    initials: "SR",
  },
  {
    name: "Arjun P.",
    role: "Head of Talent Acquisition",
    text: "Best ORM investment we made this year. We went from a 3.2 to a 4.4 rating in three months. The cost-per-hire savings easily paid for the service ten times over.",
    initials: "AP",
  },
];

const faqs = [
  { q: "Can fake AmbitionBox reviews really be removed?", a: "Yes. If a review violates AmbitionBox's community guidelines - including defamatory, fake, or abusive content - it can be flagged and escalated to AmbitionBox moderators. Our team builds a documented case for each review and manages the entire process on your behalf." },
  { q: "How long does the review removal process take?", a: "Timelines vary depending on the complexity of each case. Straightforward policy violations are typically resolved within 7–14 business days. Complex or disputed reviews may take longer, especially if escalation or legal support is required." },
  { q: "Will removing negative reviews affect my company's overall rating?", a: "Removing fake or defamatory reviews that artificially lower your score will immediately improve your overall rating. At the same time, we run parallel campaigns to encourage genuine positive reviews from satisfied employees, exponentially accelerating your rating recovery." },
  { q: "Is it ethical to request review removal?", a: "Absolutely - when done correctly. We only target reviews that violate platform policies: fake submissions, defamatory statements, or reviews from people who never worked at your company. Genuine feedback, even if negative, is handled through response strategy and culture-improvement guidance." },
  { q: "What if an employee names a specific manager in a review?", a: "AmbitionBox has strict privacy guidelines that prohibit naming non-executive staff members. If a mid-level manager or peer is named in a review, it violates the Terms of Service and we can guarantee its removal." },
  { q: "Do you offer ongoing monitoring after the initial cleanup?", a: "Yes. Our retainer packages include continuous 24/7 monitoring of your AmbitionBox profile, immediate flagging of new policy-violating reviews, and monthly reputation health reports to ensure your brand remains protected." },
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

/* ─── PAGE COMPONENT ─────────────────────────────────────────────────────── */

export default function AmbitionBoxPage() {
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
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-orange-500/30 bg-orange-500/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                AmbitionBox ORM Services
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Take Control of Your <span className="text-gradient-gold">AmbitionBox</span> Reputation
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Fake and defamatory employee reviews on AmbitionBox can damage your hiring pipeline overnight. Our specialist team removes policy-violating reviews, rebuilds your employer brand, and keeps your profile protected - ethically and permanently.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {[
                  "Remove reviews from non-employees and competitors",
                  "Erase posts leaking confidential company data",
                  "Delete reviews attacking specific managers",
                  "Build a positive, authentic corporate culture rating",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-500 text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Start Profile Cleanup →
                </Link>
                <a href="#process" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  See How It Works
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Clean Glassmorphic Contact Form (No Image) */}
          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl mt-12 sm:mt-8 lg:mt-6">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-orange-500/50 via-brand-gold/50 to-transparent" />
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      Protect Your Brand
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 100}>
                <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300 text-center h-full">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-orange-500 transition-colors duration-300">
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

      {/* ── THE PROBLEM (IMPACTS) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-orange-500">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  The Devastating Impact of <span className="heading-script text-brand-blue">Toxic Employer Reviews</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
                  In today's competitive job market, your AmbitionBox rating is your digital handshake with prospective employees. Leaving fake, malicious reviews unaddressed actively sabotages your company's growth, increases recruitment costs, and tarnishes your corporate equity.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {impacts.map((item) => (
                    <div key={item.title} className="group flex flex-col items-start gap-3 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl flex-shrink-0 text-orange-500 transition-all">{item.icon}</span>
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                    alt="Corporate HR and Employer Branding" 
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Brand Secured</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Hiring Restored</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Do</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Full-Spectrum AmbitionBox <span className="heading-script text-brand-blue">Reputation Management</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
                From technical review removal to proactive employer branding - we cover every angle of your corporate presence.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 50}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
                  <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-brand-blue to-brand-gold" />
                  
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

      {/* ── PROCESS & WHY IT MATTERS ────────────────────────────────────────────── */}
      <section id="process" className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Process</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                How We <span className="heading-script text-brand-blue">Protect</span> Your AmbitionBox Profile
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
                A structured, transparent approach - no black-hat tactics, no empty promises. Just proven methodology delivered by ORM specialists.
              </p>
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

            {/* Right: Why it Matters Box */}
            <RevealOnScroll delay={300}>
              <div className="sticky top-32">
                <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[40px] pointer-events-none" />
                  
                  <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-8 relative z-10">Why AmbitionBox Matters</h3>
                  
                  <div className="space-y-5 relative z-10">
                    {whyItMatters.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="14" height="14" className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <p className="text-[0.95rem] text-zinc-700 font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-zinc-200">
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

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Success</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">Protected from <span className="heading-script text-orange-500">Sabotage</span></h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-orange-500/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-[0.9rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="text-orange-500 text-xs font-bold tracking-wider">{t.initials}</span>
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
                Everything you need to know about how we manage, monitor, and remove fake employer reviews.
              </p>

              <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 border border-orange-500/30 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Under Attack Right Now?</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Our ORM crisis team is available 24/7.</p>
                  </div>
                </div>
                <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">Talk to an ORM Expert</a>
              </div>
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
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-orange-500">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Get Started</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Reclaim Your <span className="heading-script text-blue-400">Employer Brand?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Get a free, no-obligation audit of your AmbitionBox profile. We'll identify every removable review and show you exactly what's possible to restore your hiring power.
              </p>
              
              <div className="space-y-6 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "buildbrandbetter@gmail.com", href: "mailto:buildbrandbetter@gmail.com", icon: "✉️" },
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