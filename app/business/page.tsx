// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import Link from "next/link";

// /* ─── Original Data Extracted from PDF ─────────────────────────────────────── */

// const negativeExamples = [
//   "Your brand with negative review",
//   "Your brand has the worst customer service.",
//   "Your brand is not worth your money.",
// ];

// const allServices = [
//   {
//     category: "Business",
//     title: "Remove Negative Google Results",
//     desc: "Bury harmful search results and protect your online reputation with strategic content management.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
//     ),
//   },
//   {
//     category: "Business",
//     title: "Online Reputation",
//     desc: "Strengthen your digital presence and build trust with expert reputation management solutions.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
//     ),
//   },
//   {
//     category: "Business",
//     title: "Crisis Management",
//     desc: "Navigate online crises effectively and restore your brand's credibility with proactive strategies.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
//     ),
//   },
//   {
//     category: "Business",
//     title: "Review Management",
//     desc: "Monitor, respond to, and enhance customer reviews to build a positive brand image.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
//     ),
//   },
//   {
//     category: "Business",
//     title: "Remove Negative Content",
//     desc: "Eliminate harmful content from search results and safeguard your online reputation with expert strategies.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
//     ),
//   },
//   {
//     category: "Individual",
//     title: "Personal Branding Services",
//     desc: "Enhance your digital identity and build a strong personal brand with tailored branding solutions.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
//     ),
//   },
//   {
//     category: "Individual",
//     title: "Remove Unwanted Images",
//     desc: "Erase embarrassing or damaging images from the internet and take control of your online presence.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//     ),
//   },
//   {
//     category: "Individual",
//     title: "Personal Brand Monitoring",
//     desc: "Track and manage your personal brand across platforms to ensure a positive and credible reputation.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
//     ),
//   },
//   {
//     category: "Individual",
//     title: "Change Google Autocomplete",
//     desc: "Influence search suggestions and reshape public perception with strategic autocomplete optimization.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
//     ),
//   },
//   {
//     category: "Individual",
//     title: "Remove Private Info",
//     desc: "Protect your privacy by removing sensitive personal data from search engines and online platforms.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
//     ),
//   },
// ];

// const testimonials = [
//   {
//     name: "Garima",
//     role: "Verified Client",
//     text: "I had a bad experience with an online reputation management company in the past, but working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation and it's making a huge impact on my business.",
//     initials: "G",
//   },
// ];

// /* ─── Animation Hook ───────────────────────────────────────── */

// function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div 
//       ref={ref} 
//       className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// /* ─── Page ──────────────────────────────────────────────────────── */

// export default function BusinessAndIndividualSolutionsPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* ── HERO - High-End Dark Layout ─────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
//         <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
//         <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
//           <div className="hero-copy mt-4">
//             <RevealOnScroll>
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
//                 </span>
//                 Explore Business Solutions From Google Search Results
//               </div>

//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Has your business reputation been damaged by <span className="text-gradient-gold">negative content?</span>
//               </h1>

//               <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
//                 If searching your brand name on Google shows first-page results with titles like:
//               </p>

//               <ul className="space-y-3 mb-8 max-w-xl">
//                 {negativeExamples.map((item) => (
//                   <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
//                     <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-500 text-xs flex-shrink-0 mt-0.5 shadow-inner">
//                       <svg width="12" height="12" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
//                     </span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <p className="text-white/70 text-sm mb-10 leading-relaxed max-w-2xl border-l-2 border-brand-gold pl-4">
//                 If your negative content is ranking high on google search results so don't panic. There are numerous tactics and strategies that can be implemented to remove or suppress negative content from Google search results.
//               </p>

//               <div className="flex flex-wrap gap-4 mb-8">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
//                   Get A Free Consultation
//                 </Link>
//                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
//                   Call: +91 88827 88412
//                 </a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           {/* Right: Glassmorphic Contact Form Over Image */}
//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               {/* Online Image Integrated */}
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img 
//                   src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" 
//                   alt="Business and Online Reputation Solutions" 
//                   className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>

//               {/* Form floating over the image */}
//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">Free Consultation</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">
//                       Restore Your Brand
//                     </h2>
//                   </div>
//                   <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
//                     <svg width="24" height="24" className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
//                   </div>
//                 </div>
//                 <ContactForm dark />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       {/* ── ALL SERVICES GRID ────────────────────────────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-3xl mx-auto mb-16">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
//                 <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Explore Services of 2025</p>
//               </div>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//                 Best Business &amp; Individual <span className="heading-script text-brand-blue">Solutions</span>
//               </h2>
//               <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
//                 We researched and analyzed the best online reputation management services for individuals and small businesses. Read our reviews to discover which company has the right features for you.
//               </p>
//             </div>
//           </RevealOnScroll>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {allServices.map((s, i) => (
//               <RevealOnScroll key={s.title} delay={i * 50}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
//                   <div className={`absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${s.category === 'Business' ? 'bg-gradient-to-r from-brand-blue to-blue-400' : 'bg-gradient-to-r from-brand-gold to-yellow-400'}`} />
                  
//                   <div className="flex items-start justify-between mb-8 relative z-10">
//                     <div className={`w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-lg ${s.category === 'Business' ? 'bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue' : 'bg-amber-50 border-amber-100 text-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold'}`}>
//                       {s.icon}
//                     </div>
//                     <span className={`text-[0.6rem] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest transition-colors ${s.category === 'Business' ? 'bg-blue-50 text-brand-blue group-hover:bg-brand-blue/10' : 'bg-amber-50 text-brand-gold group-hover:bg-brand-gold/10'}`}>
//                       {s.category}
//                     </span>
//                   </div>
//                   <h3 className={`font-heading font-bold text-xl text-zinc-900 mb-3 transition-colors relative z-10 ${s.category === 'Business' ? 'group-hover:text-brand-blue' : 'group-hover:text-brand-gold'}`}>{s.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10 mb-6">{s.desc}</p>
                  
//                   <div className="mt-auto pt-4 border-t border-zinc-100">
//                     <Link href="#contact" className={`text-sm font-bold flex items-center gap-1.5 transition-colors ${s.category === 'Business' ? 'text-brand-blue hover:text-brand-dark' : 'text-brand-gold hover:text-yellow-600'}`}>
//                       Get Started 
//                       <svg width="16" height="16" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
//                     </Link>
//                   </div>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS - Dark Glass Layout ─────────────────────────────────────── */}
//       <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
//         <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
//         <div className="max-w-4xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center mb-12">
//               <p className="section-label mb-2 justify-center text-brand-gold">What Our Clients Say</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">Trust Built on <span className="heading-script text-brand-gold">Real Results</span></h2>
//               <p className="text-zinc-400 text-[0.95rem] mt-4 leading-relaxed">We pay attention to details and quality, good communication and strong customer relationship. Here is what they say about us.</p>
//             </div>
//           </RevealOnScroll>
          
//           <div className="grid grid-cols-1 gap-6">
//             {testimonials.map((t) => (
//               <RevealOnScroll key={t.name}>
//                 <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 md:p-12 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col items-center text-center">
//                   <div className="flex text-brand-gold text-lg mb-6 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
//                   <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10 italic font-serif">&ldquo;{t.text}&rdquo;</p>
//                   <div className="flex items-center gap-4 pt-6 mt-auto">
//                     <div className="w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 shadow-inner">
//                       <span className="text-brand-blue text-sm font-bold tracking-wider">{t.initials}</span>
//                     </div>
//                     <div className="text-left">
//                       <p className="text-white font-bold text-base leading-none mb-1">{t.name}</p>
//                       <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT CTA - Premium Grand Finish ───────────────────────────────────────────── */}
//       <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
//         <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           <RevealOnScroll>
//             <div className="premium-copy-panel-dark">
//               <p className="section-label text-brand-gold mb-3">Act Now</p>
//               <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
//                 Don't let a single negative Google result <span className="heading-script text-blue-400">ruin your business</span>
//               </h2>
//               <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
//                 Schedule a Free Consultation. Our experts will assess your situation and present a clear action plan - with no obligation.
//               </p>
              
//               <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
//                 {[
//                   { label: "Hotline", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
//                   { label: "Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
//                   { label: "Location", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-center gap-5">
//                     <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
//                       {item.href ? (
//                         <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
//                       ) : (
//                         <p className="text-white font-heading font-bold text-lg">{item.value}</p>
//                       )}
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
//                 <p className="text-white font-heading font-bold text-xl mb-2">Business Solution</p>
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
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

/* ─── Original Data Extracted from PDF ─────────────────────────────────────── */

const negativeExamples = [
  "Your brand with negative review",
  "Your brand has the worst customer service.",
  "Your brand is not worth your money.",
];

const allServices = [
  {
    category: "Business",
    title: "Remove Negative Google Results",
    desc: "Bury harmful search results and protect your online reputation with strategic content management.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
    ),
  },
  {
    category: "Business",
    title: "Online Reputation",
    desc: "Strengthen your digital presence and build trust with expert reputation management solutions.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    category: "Business",
    title: "Crisis Management",
    desc: "Navigate online crises effectively and restore your brand's credibility with proactive strategies.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
  },
  {
    category: "Business",
    title: "Review Management",
    desc: "Monitor, respond to, and enhance customer reviews to build a positive brand image.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
  },
  {
    category: "Business",
    title: "Remove Negative Content",
    desc: "Eliminate harmful content from search results and safeguard your online reputation with expert strategies.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
    ),
  },
  {
    category: "Individual",
    title: "Personal Branding Services",
    desc: "Enhance your digital identity and build a strong personal brand with tailored branding solutions.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
  },
  {
    category: "Individual",
    title: "Remove Unwanted Images",
    desc: "Erase embarrassing or damaging images from the internet and take control of your online presence.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
  },
  {
    category: "Individual",
    title: "Personal Brand Monitoring",
    desc: "Track and manage your personal brand across platforms to ensure a positive and credible reputation.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
  },
  {
    category: "Individual",
    title: "Change Google Autocomplete",
    desc: "Influence search suggestions and reshape public perception with strategic autocomplete optimization.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
  },
  {
    category: "Individual",
    title: "Remove Private Info",
    desc: "Protect your privacy by removing sensitive personal data from search engines and online platforms.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
  },
];

const testimonials = [
  {
    name: "Garima",
    role: "Verified Client",
    text: "I had a bad experience with an online reputation management company in the past, but working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation and it's making a huge impact on my business.",
    initials: "G",
  },
];

/* ─── Animation Hook ───────────────────────────────────────── */

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

export default function BusinessAndIndividualSolutionsPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - High-End Dark Layout ─────────────────────────────── */}
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
                Explore Business Solutions From Google Search Results
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Has your business reputation been damaged by <span className="text-gradient-gold">negative content?</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
                If searching your brand name on Google shows first-page results with titles like:
              </p>

              <ul className="space-y-3 mb-8 max-w-xl">
                {negativeExamples.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-500 text-xs flex-shrink-0 mt-0.5 shadow-inner">
                      <svg width="12" height="12" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/70 text-sm mb-10 leading-relaxed max-w-2xl border-l-2 border-brand-gold pl-4">
                If your negative content is ranking high on google search results so don't panic. There are numerous tactics and strategies that can be implemented to remove or suppress negative content from Google search results.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Get A Free Consultation
                </Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  Call: +91 88827 88412
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Contact Form (No Image) */}
          <div className="relative lg:mt-6">
            <RevealOnScroll delay={200}>
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      Restore Your Brand
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES GRID ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Explore Services of 2025</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Best Business &amp; Individual <span className="heading-script text-brand-blue">Solutions</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed">
                We researched and analyzed the best online reputation management services for individuals and small businesses. Read our reviews to discover which company has the right features for you.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 50}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
                  <div className={`absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${s.category === 'Business' ? 'bg-gradient-to-r from-brand-blue to-blue-400' : 'bg-gradient-to-r from-brand-gold to-yellow-400'}`} />
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-lg ${s.category === 'Business' ? 'bg-blue-50 border-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue' : 'bg-amber-50 border-amber-100 text-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold'}`}>
                      {s.icon}
                    </div>
                    <span className={`text-[0.6rem] font-bold px-2.5 py-1 rounded-md uppercase tracking-widest transition-colors ${s.category === 'Business' ? 'bg-blue-50 text-brand-blue group-hover:bg-brand-blue/10' : 'bg-amber-50 text-brand-gold group-hover:bg-brand-gold/10'}`}>
                      {s.category}
                    </span>
                  </div>
                  <h3 className={`font-heading font-bold text-xl text-zinc-900 mb-3 transition-colors relative z-10 ${s.category === 'Business' ? 'group-hover:text-brand-blue' : 'group-hover:text-brand-gold'}`}>{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10 mb-6">{s.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-zinc-100">
                    <Link href="#contact" className={`text-sm font-bold flex items-center gap-1.5 transition-colors ${s.category === 'Business' ? 'text-brand-blue hover:text-brand-dark' : 'text-brand-gold hover:text-yellow-600'}`}>
                      Get Started 
                      <svg width="16" height="16" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS - Dark Glass Layout ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="section-label mb-2 justify-center text-brand-gold">What Our Clients Say</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">Trust Built on <span className="heading-script text-brand-gold">Real Results</span></h2>
              <p className="text-zinc-400 text-[0.95rem] mt-4 leading-relaxed">We pay attention to details and quality, good communication and strong customer relationship. Here is what they say about us.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((t) => (
              <RevealOnScroll key={t.name}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 md:p-12 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col items-center text-center">
                  <div className="flex text-brand-gold text-lg mb-6 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-10 italic font-serif">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-6 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <span className="text-brand-blue text-sm font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-base leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
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
              <p className="section-label text-brand-gold mb-3">Act Now</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don't let a single negative Google result <span className="heading-script text-blue-400">ruin your business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a Free Consultation. Our experts will assess your situation and present a clear action plan - with no obligation.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Hotline", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Location", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Business Solution</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <FAQSection items={[
        { question: "How to protect my business reputation online?", answer: "We offer comprehensive reputation monitoring, review management, and negative content suppression to safeguard your business's image." },
        { question: "Can I fix my damaged personal reputation?", answer: "Yes, our individual reputation solutions can help repair and build a positive online presence through strategic content creation and suppression of negative results." },
        { question: "What is the best way to handle negative reviews for my business?", answer: "The most effective approach involves a combination of removing defamatory reviews, suppressing negative search results, and aggressively generating positive verified reviews." }
      ]} />
      <Footer />
    </div>
  );
}