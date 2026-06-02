// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// /* ─── Data ──────────────────────────────────────────────────────── */

// const negativeExamples = [
//   { text: "Your brand + negative review" },
//   { text: "Your brand has the worst customer service" },
//   { text: "Your brand is not worth your money" },
//   { text: "Your brand + scam complaints" },
// ];

// const strategies = [
//   {
//     step: "01",
//     title: "SEO Optimization",
//     desc: "Optimizing your website with relevant keywords and phrases improves your search rankings and visibility, which in turn positively impacts autocomplete results over time.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Content Creation",
//     desc: "Consistently creating high-quality content relevant to your business and optimized for search engines establishes your brand as credible and authoritative - which directly shapes autocomplete.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "Social Media Marketing",
//     desc: "Building a strong online presence through social media establishes your brand as credible and authoritative, which positively impacts autocomplete results across all major search engines.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "04",
//     title: "Search Engine Reputation Management (SERM)",
//     desc: "Managing your online reputation through SERM reduces the visibility of negative or misleading information in search results, which directly and measurably improves autocomplete suggestions.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "05",
//     title: "Paid Search Advertising",
//     desc: "Running targeted paid search advertising campaigns improves your visibility in search results and signals relevance to Google's algorithm, positively impacting autocomplete results.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
//       </svg>
//     ),
//   },
// ];

// const autocompleteImpact = [
//   {
//     title: "Improved Search Accuracy",
//     desc: "Autocomplete suggestions are based on real-time search data, meaning results are always up-to-date and relevant. Positive autocomplete leads to improved search accuracy and faster discovery.",
//     icon: "🎯",
//   },
//   {
//     title: "Increased Efficiency",
//     desc: "By providing quick and relevant suggestions, improved Google Autocomplete saves users time and effort. This increased efficiency leads to a better overall experience for those researching your brand.",
//     icon: "⚡",
//   },
//   {
//     title: "Influenced Search Results",
//     desc: "Autocomplete can significantly impact the search results presented to users. By shaping popular and relevant search terms, it can direct users to the most accurate and positive information about you.",
//     icon: "📊",
//   },
// ];

// const whyUsPoints = [
//   {
//     title: "Expertise and Experience",
//     desc: "Our team has a deep understanding of Google Autocomplete algorithms and a proven track record of delivering results. Highly skilled professionals with extensive experience managing autocomplete suggestions.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Transparent Communication",
//     desc: "We maintain open and transparent communication throughout the entire process, providing regular updates and reports to ensure full transparency and accountability with every client.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Customer-Focused Approach",
//     desc: "We have a strong focus on customer satisfaction and work closely with every client to understand their unique needs, developing customized solutions that meet those needs and deliver measurable results.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Cutting-Edge Technology",
//     desc: "We use the latest tools and technologies to manage and change Google Autocomplete suggestions, including advanced SEO techniques, data analysis, and machine learning algorithms.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//       </svg>
//     ),
//   },
// ];

// const faqs = [
//   {
//     q: "What is Google Autocomplete?",
//     a: "Google Autocomplete is a feature of the Google search engine that offers suggested search phrases based on the words a user has entered. These suggestions are generated in real-time and can be influenced by factors such as search history and the popularity of search terms.",
//   },
//   {
//     q: "Why would I want to change Google Autocomplete?",
//     a: "You may want to change Google Autocomplete if the suggested search terms are inaccurate or offensive, or if they negatively impact your personal or professional reputation. It is important to take notice of it as harmful suggestions can damage your company and business significantly.",
//   },
//   {
//     q: "How can I change Google Autocomplete suggestions?",
//     a: "It is not possible to directly edit or change the Google Autocomplete suggestions yourself. However, you can influence the suggestions by consistently creating positive content and by using professional ORM strategies. Our team specializes in exactly this - using proven techniques to shift autocomplete in your favour.",
//   },
//   {
//     q: "How long does it take for Google Autocomplete suggestions to change?",
//     a: "The time it takes for Google Autocomplete suggestions to change depends on several factors, such as the popularity of the search terms and the frequency of searches. It can take several weeks or even months for changes to take effect. Our team works systematically and provides regular progress reports.",
//   },
//   {
//     q: "Is there a way to report inaccurate or offensive Google Autocomplete suggestions?",
//     a: "Yes, Google provides a way to report inappropriate or inaccurate Autocomplete suggestions. You can use the 'Report inappropriate predictions' link that appears at the bottom of the search results page. Our team can assist you in filing these reports effectively and following up.",
//   },
// ];

// const testimonials = [
//   {
//     name: "Scott",
//     role: "Business Owner",
//     text: "I'm really happy with the results I've seen. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward. Highly recommend.",
//     initials: "SC",
//   },
//   {
//     name: "Harold",
//     role: "CEO",
//     text: "Working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation.",
//     initials: "HA",
//   },
//   {
//     name: "Garima",
//     role: "Marketing Director",
//     text: "Professional, responsive, and delivered results. The difference in my online reputation is making a huge impact on my business. Highly recommend their autocomplete management services.",
//     initials: "GA",
//   },
//   {
//     name: "Kapil",
//     role: "Entrepreneur",
//     text: "They helped me take control of my online presence. They removed negative content and helped me create a positive image on the web. I highly recommend them.",
//     initials: "KA",
//   },
// ];

// // Custom Scroll Reveal Hook 
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

// // Custom Interactive Autocomplete Visualizer
// function AutocompleteVisualizer() {
//   const [typed, setTyped] = useState("Your Brand ");
//   const [isClean, setIsClean] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsClean(prev => !prev);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="glass-panel-light rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl border border-white">
//       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
      
//       <div className="mb-4 flex items-center justify-between">
//         <h4 className="font-heading font-bold text-sm text-zinc-900 uppercase tracking-widest">Search Simulator</h4>
//         <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-500 ${isClean ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
//           {isClean ? 'Optimized' : 'Negative'}
//         </span>
//       </div>

//       <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-zinc-200 overflow-hidden relative z-10">
//         <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100">
//           <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
//           <span className="text-lg text-zinc-900 font-medium">
//             {typed}<span className="inline-block w-0.5 h-5 bg-brand-blue animate-pulse align-middle ml-0.5"></span>
//           </span>
//         </div>

//         <div className="py-2 transition-all duration-500">
//           {!isClean ? (
//             // Negative Autocomplete
//             <div className="animate-in fade-in slide-in-from-top-2 duration-300">
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> scam</span>
//                 <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> lawsuit</span>
//                 <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> reviews bad</span>
//                 <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> complaints</span>
//                 <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
//               </div>
//             </div>
//           ) : (
//             // Clean Autocomplete
//             <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> official site</span>
//                 <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> careers</span>
//                 <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> services</span>
//                 <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
//               </div>
//               <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
//                 <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> reviews</span>
//                 <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       <div className="mt-4 text-center">
//         <p className="text-[0.7rem] text-zinc-500 font-medium">Auto-simulating ORM suppression tactics every 4 seconds.</p>
//       </div>
//     </div>
//   );
// }

// /* ─── Page ──────────────────────────────────────────────────────── */

// export default function ChangeGoogleAutocompletePage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* ── HERO - Sophisticated Search Theme ─────────────────────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
//         <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-10%]" />
//         <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
//           <div className="hero-copy mt-4">
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
//               </span>
//               Google Autocomplete · ORM Experts India
//             </div>

//             <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.3rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//               Manage &amp; Fix{" "}
//               <span className="text-gradient-gold">Google Autocomplete</span>{" "}
//               - Remove Negative Search Suggestions
//             </h1>

//             <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//               Has your business reputation been damaged by negative content on Google
//               search results? If searching your brand name shows harmful autocomplete
//               suggestions, don&apos;t panic - we have proven strategies to fix it.
//             </p>

//             {/* Negative examples showcase - Glassmorphic Pill Design */}
//             <div className="glass-panel bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-sm relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500">
//               <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80"></div>
//               <p className="text-white/50 text-[0.65rem] uppercase tracking-widest mb-4 font-bold pl-2">
//                 Harmful autocomplete suggestions we remove:
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
//                 {negativeExamples.map((e) => (
//                   <div
//                     key={e.text}
//                     className="flex items-center gap-2.5 text-[0.85rem] text-white/80 font-medium"
//                   >
//                     <svg
//                       className="w-4 h-4 text-red-500 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                     {e.text}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 items-center">
//               <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
//                 Get A Free Consultation
//               </Link>
//               <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">
//                 Call: +9188827 88412
//               </a>
//             </div>

//             <div className="mt-10 pt-6 border-t border-white/10 flex items-start gap-4">
//               <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
//                 <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed mt-0.5 max-w-md">
//                 <span className="text-brand-gold font-semibold">Guaranteed solution</span>{" "}
//                 - the only ORM firm offering guaranteed autocomplete change through verified optimization strategies.
//               </p>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="relative lg:mt-6">
//             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
//             <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
//               <div className="form-card-orbit opacity-50" />
//               <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
//                 <div>
//                   <p className="section-label text-brand-gold mb-1">Free Consultation</p>
//                   <h2 className="font-heading text-xl font-bold text-white leading-tight">
//                     Get Your Autocomplete Fixed Today
//                   </h2>
//                 </div>
//                 <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
//                   <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </div>
//               </div>
//               <ContactForm dark />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── REVOLUTIONIZE AUTOCOMPLETE - Visualizer Integration ───────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            
//             <RevealOnScroll>
//               <div className="premium-copy-panel pr-0 lg:pr-8">
//                 <p className="section-label mb-2 text-brand-gold">The Problem</p>
//                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
//                   Revolutionizing Search - Say Goodbye to <span className="heading-script text-brand-blue">Negative Autocomplete</span>
//                 </h2>
//                 <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
//                   Google Autocomplete has been a staple feature of the search giant for years,
//                   providing quick suggestions for users as they type their queries. However,
//                   these suggestions are not always positive - and when they&apos;re harmful to
//                   your brand, they directly damage your reputation and revenue.
//                 </p>
//                 <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
//                   Say goodbye to limited, negative suggestions and hello to endless positive
//                   possibilities. With new and improved algorithms, we provide users with more
//                   accurate and diverse options - giving your brand the positive online identity
//                   it deserves.
//                 </p>

//                 <div className="bg-white border-l-4 border-l-brand-blue shadow-sm rounded-r-2xl p-6 mb-8 relative overflow-hidden group hover:border-l-brand-gold transition-colors duration-500">
//                   <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none opacity-50"></div>
//                   <div className="relative z-10">
//                     <p className="font-heading font-bold text-zinc-900 text-base mb-3 leading-snug">
//                       This is the future of search - and it starts with changing the way we think
//                       about Google Autocomplete.
//                     </p>
//                     <p className="text-zinc-500 text-sm leading-relaxed">
//                       By utilizing a revolutionary autocomplete management system, businesses can
//                       gain a significant advantage in the online marketplace. With more accurate and
//                       relevant suggestions, customers find the products and services they need more
//                       quickly - driving increased traffic, customer satisfaction, and loyalty.
//                     </p>
//                   </div>
//                 </div>

//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">
//                   Get A Free Consultation
//                 </Link>
//               </div>
//             </RevealOnScroll>

//             <RevealOnScroll delay={200}>
//               <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
//                 <AutocompleteVisualizer />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       {/* ── STRATEGIES - Premium Numbered Grid ───────────────────────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
//                 <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
//                 <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Strategies</p>
//               </div>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//                 Master the Art of Search - <span className="heading-script text-brand-blue">Transform Your Results</span>
//               </h2>
//               <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed max-w-xl mx-auto">
//                 Discover the power of influencing search results and elevate your online
//                 presence with proven autocomplete techniques used by our ORM experts.
//               </p>
//             </div>
//           </RevealOnScroll>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {strategies.map((s, i) => (
//               <RevealOnScroll key={s.step} delay={i * 100}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
//                   <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
//                   <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//                   <div className="flex items-start justify-between mb-8 relative z-10">
//                     <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
//                       {s.icon}
//                     </div>
//                     <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-widest text-3xl">
//                       {s.step}
//                     </span>
//                   </div>
//                   <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>

//           <RevealOnScroll delay={300}>
//             <div className="mt-14 text-center">
//               <p className="text-zinc-500 text-sm mb-5 font-medium">
//                 Get your Google autocomplete fixed and enjoy your online brand and reputation today.
//               </p>
//               <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-10 py-4">
//                 Schedule a Free Consultation
//               </Link>
//             </div>
//           </RevealOnScroll>
//         </div>
//       </section>

//       {/* ── IMPORTANCE OF AUTOCOMPLETE - Feature Blocks ───────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
//           <RevealOnScroll>
//             <div className="relative order-2 lg:order-1">
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
//               <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
//                 <img
//                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
//                   alt="Power of Google Autocomplete"
//                   className="w-full h-auto aspect-square object-cover"
//                 />
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-5 rounded-2xl border border-white shadow-xl max-w-[220px] hidden md:flex items-center gap-4">
//                 <div className="relative flex-shrink-0">
//                   <div className="w-3 h-3 rounded-full bg-brand-blue" />
//                   <div className="absolute inset-0 w-3 h-3 rounded-full bg-brand-blue animate-ping opacity-75" />
//                 </div>
//                 <p className="text-[0.65rem] text-zinc-800 font-bold uppercase tracking-widest leading-tight">Real-time impact on search discovery</p>
//               </div>
//             </div>
//           </RevealOnScroll>

//           <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
//             <RevealOnScroll>
//               <p className="section-label mb-2">Why It Matters</p>
//               <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
//                 Unlock the Power of Search - The Vital Importance of <span className="heading-script text-brand-gold">Google Autocomplete</span>
//               </h2>
//               <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
//                 Google Autocomplete has become an essential tool for people all over the world.
//                 This powerful feature provides quick and relevant suggestions as users type
//                 their query, making the search process faster, easier, and more accurate.
//               </p>
//             </RevealOnScroll>

//             <div className="space-y-5 mb-10 relative">
//               <div className="absolute left-[1.65rem] top-6 bottom-6 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
//               {autocompleteImpact.map((item, i) => (
//                 <RevealOnScroll key={item.title} delay={i * 150}>
//                   <div className="flex flex-col sm:flex-row items-start gap-5 p-5 rounded-2xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-brand-blue/30 transition-all duration-300 group relative z-10 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)]">
//                     <div className={`w-[3.3rem] h-[3.3rem] rounded-2xl flex items-center justify-center bg-zinc-50 border border-zinc-200 group-hover:scale-110 transition-transform shrink-0 text-2xl shadow-sm`}>
//                       {item.icon}
//                     </div>
//                     <div className="pt-1">
//                       <p className="text-base font-heading font-bold text-zinc-900 group-hover:text-brand-blue transition-colors mb-2">{item.title}</p>
//                       <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>
//                 </RevealOnScroll>
//               ))}
//             </div>

//             <RevealOnScroll delay={400}>
//               <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">
//                 Get Started Today
//               </Link>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US - Premium Dark Grid ────────────────────────────────────── */}
//       <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
//         <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
//             <RevealOnScroll>
//               <div>
//                 <p className="section-label text-brand-gold mb-3">Why Choose Us</p>
//                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-white mb-6 leading-tight">
//                   Building Better Brands with Expertise, Technology, &amp; <span className="text-gradient-gold">Transparency</span>
//                 </h2>
//                 <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10">
//                   We are the premier choice for businesses looking to take control of their
//                   online reputation and improve search engine visibility through Google
//                   Autocomplete management. Our team utilizes cutting-edge technology and proven
//                   strategies to change autocomplete suggestions in your favour.
//                 </p>

//                 <Link href="#contact" className="btn-gold shadow-[0_10px_30px_rgba(194,148,10,0.2)] inline-flex items-center gap-2 px-8 py-3.5">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                   </svg>
//                   Call: +9188827 88412
//                 </Link>
//               </div>
//             </RevealOnScroll>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               {whyUsPoints.map((p, i) => (
//                 <RevealOnScroll key={p.title} delay={i * 100}>
//                   <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-300 card-premium-hover h-full">
//                     <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-brand-gold/20 group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-all flex-shrink-0 shadow-inner">
//                       {p.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-heading font-bold text-white text-lg mb-2.5 group-hover:text-brand-gold-light transition-colors">
//                         {p.title}
//                       </h4>
//                       <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
//                     </div>
//                   </div>
//                 </RevealOnScroll>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ─────────────────────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <RevealOnScroll>
//             <div className="text-center mb-16">
//               <p className="section-label mb-2 justify-center">Client Testimonials</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
//                 What Our <span className="heading-script text-brand-blue">Clients Say</span>
//               </h2>
//               <p className="text-zinc-500 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">
//                 We pay attention to details and quality, good communication and strong customer
//                 relationships.
//               </p>
//             </div>
//           </RevealOnScroll>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {testimonials.map((t, i) => (
//               <RevealOnScroll key={t.name} delay={i * 100}>
//                 <div className="premium-info-card bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col h-full hover:border-brand-blue/30 transition-all duration-400 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.1)]">
//                   <div className="flex text-brand-gold text-[0.65rem] mb-4 gap-1 tracking-widest drop-shadow-sm">
//                     {"★★★★★".split("").map((s, i) => (
//                       <span key={i}>{s}</span>
//                     ))}
//                   </div>
//                   <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-1">
//                     &ldquo;{t.text}&rdquo;
//                   </p>
//                   <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 mt-auto">
//                     <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
//                       <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
//                     </div>
//                     <div>
//                       <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
//                       <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ──────────────────────────────────────────────── */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
//             <RevealOnScroll>
//               <div className="sticky top-24">
//                 <p className="section-label mb-2">Knowledge Base</p>
//                 <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
//                   Google Autocomplete <span className="heading-script text-brand-blue">FAQs</span>
//                 </h2>
//                 <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
//                   Have a specific situation? Our ORM experts offer a free, no-obligation
//                   consultation to assess your current autocomplete visibility.
//                 </p>
//                 <a
//                   href="tel:+918882788412"
//                   className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                   Call Us Now
//                 </a>
//               </div>
//             </RevealOnScroll>
            
//             <RevealOnScroll delay={200}>
//               <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
//                 <FAQ items={faqs} />
//               </div>
//             </RevealOnScroll>
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
//               <p className="section-label text-brand-gold mb-3">Fix It Today</p>
//               <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
//                 Don&apos;t Let a Single Negative Google Result <span className="heading-script text-brand-blue">Ruin Your Business</span>
//               </h2>
//               <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
//                 Schedule a free consultation today. Our autocomplete experts will assess your
//                 current situation, identify every harmful suggestion, and present a clear action
//                 plan - with no obligation.
//               </p>
              
//               <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
//                 {[
//                   {
//                     label: "Direct Hotline (24/7)",
//                     value: "+9188827 88412",
//                     href: "tel:+918882788412",
//                     icon: "📞"
//                   },
//                   {
//                     label: "Secure Email",
//                     value: "contact@onlinereputationbuilder.in",
//                     href: "mailto:contact@onlinereputationbuilder.in",
//                     icon: "✉️"
//                   },
//                   {
//                     label: "Headquarters",
//                     value: "Shantipally, Behala, Kolkata - 700060",
//                     href: null,
//                     icon: "🏢"
//                   },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-center gap-5">
//                     <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">
//                         {item.label}
//                       </p>
//                       {item.href ? (
//                         <a
//                           href={item.href}
//                           className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors"
//                         >
//                           {item.value}
//                         </a>
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
//                 <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
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

/* ─── Data ──────────────────────────────────────────────────────── */

const negativeExamples = [
  { text: "Your brand + negative review" },
  { text: "Your brand has the worst customer service" },
  { text: "Your brand is not worth your money" },
  { text: "Your brand + scam complaints" },
];

const strategies = [
  {
    step: "01",
    title: "SEO Optimization",
    desc: "Optimizing your website with relevant keywords and phrases improves your search rankings and visibility, which in turn positively impacts autocomplete results over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Content Creation",
    desc: "Consistently creating high-quality content relevant to your business and optimized for search engines establishes your brand as credible and authoritative - which directly shapes autocomplete.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Social Media Marketing",
    desc: "Building a strong online presence through social media establishes your brand as credible and authoritative, which positively impacts autocomplete results across all major search engines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Search Engine Reputation Management (SERM)",
    desc: "Managing your online reputation through SERM reduces the visibility of negative or misleading information in search results, which directly and measurably improves autocomplete suggestions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Paid Search Advertising",
    desc: "Running targeted paid search advertising campaigns improves your visibility in search results and signals relevance to Google's algorithm, positively impacting autocomplete results.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
      </svg>
    ),
  },
];

const autocompleteImpact = [
  {
    title: "Improved Search Accuracy",
    desc: "Autocomplete suggestions are based on real-time search data, meaning results are always up-to-date and relevant. Positive autocomplete leads to improved search accuracy and faster discovery.",
    icon: "🎯",
  },
  {
    title: "Increased Efficiency",
    desc: "By providing quick and relevant suggestions, improved Google Autocomplete saves users time and effort. This increased efficiency leads to a better overall experience for those researching your brand.",
    icon: "⚡",
  },
  {
    title: "Influenced Search Results",
    desc: "Autocomplete can significantly impact the search results presented to users. By shaping popular and relevant search terms, it can direct users to the most accurate and positive information about you.",
    icon: "📊",
  },
];

const whyUsPoints = [
  {
    title: "Expertise and Experience",
    desc: "Our team has a deep understanding of Google Autocomplete algorithms and a proven track record of delivering results. Highly skilled professionals with extensive experience managing autocomplete suggestions.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    desc: "We maintain open and transparent communication throughout the entire process, providing regular updates and reports to ensure full transparency and accountability with every client.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
  },
  {
    title: "Customer-Focused Approach",
    desc: "We have a strong focus on customer satisfaction and work closely with every client to understand their unique needs, developing customized solutions that meet those needs and deliver measurable results.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We use the latest tools and technologies to manage and change Google Autocomplete suggestions, including advanced SEO techniques, data analysis, and machine learning algorithms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What is Google Autocomplete?",
    a: "Google Autocomplete is a feature of the Google search engine that offers suggested search phrases based on the words a user has entered. These suggestions are generated in real-time and can be influenced by factors such as search history and the popularity of search terms.",
  },
  {
    q: "Why would I want to change Google Autocomplete?",
    a: "You may want to change Google Autocomplete if the suggested search terms are inaccurate or offensive, or if they negatively impact your personal or professional reputation. It is important to take notice of it as harmful suggestions can damage your company and business significantly.",
  },
  {
    q: "How can I change Google Autocomplete suggestions?",
    a: "It is not possible to directly edit or change the Google Autocomplete suggestions yourself. However, you can influence the suggestions by consistently creating positive content and by using professional ORM strategies. Our team specializes in exactly this - using proven techniques to shift autocomplete in your favour.",
  },
  {
    q: "How long does it take for Google Autocomplete suggestions to change?",
    a: "The time it takes for Google Autocomplete suggestions to change depends on several factors, such as the popularity of the search terms and the frequency of searches. It can take several weeks or even months for changes to take effect. Our team works systematically and provides regular progress reports.",
  },
  {
    q: "Is there a way to report inaccurate or offensive Google Autocomplete suggestions?",
    a: "Yes, Google provides a way to report inappropriate or inaccurate Autocomplete suggestions. You can use the 'Report inappropriate predictions' link that appears at the bottom of the search results page. Our team can assist you in filing these reports effectively and following up.",
  },
];

const testimonials = [
  {
    name: "Scott",
    role: "Business Owner",
    text: "I'm really happy with the results I've seen. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward. Highly recommend.",
    initials: "SC",
  },
  {
    name: "Harold",
    role: "CEO",
    text: "Working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation.",
    initials: "HA",
  },
  {
    name: "Garima",
    role: "Marketing Director",
    text: "Professional, responsive, and delivered results. The difference in my online reputation is making a huge impact on my business. Highly recommend their autocomplete management services.",
    initials: "GA",
  },
  {
    name: "Kapil",
    role: "Entrepreneur",
    text: "They helped me take control of my online presence. They removed negative content and helped me create a positive image on the web. I highly recommend them.",
    initials: "KA",
  },
];

// Custom Scroll Reveal Hook 
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

// Custom Interactive Autocomplete Visualizer
function AutocompleteVisualizer() {
  const [typed, setTyped] = useState("Your Brand ");
  const [isClean, setIsClean] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClean(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel-light rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl border border-white">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-heading font-bold text-sm text-zinc-900 uppercase tracking-widest">Search Simulator</h4>
        <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-500 ${isClean ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
          {isClean ? 'Optimized' : 'Negative'}
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-zinc-200 overflow-hidden relative z-10">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100">
          <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span className="text-lg text-zinc-900 font-medium">
            {typed}<span className="inline-block w-0.5 h-5 bg-brand-blue animate-pulse align-middle ml-0.5"></span>
          </span>
        </div>

        <div className="py-2 transition-all duration-500">
          {!isClean ? (
            // Negative Autocomplete
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> scam</span>
                <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> lawsuit</span>
                <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> reviews bad</span>
                <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> complaints</span>
                <span className="text-[0.6rem] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Harmful</span>
              </div>
            </div>
          ) : (
            // Clean Autocomplete
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> official site</span>
                <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> careers</span>
                <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> services</span>
                <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
              </div>
              <div className="px-5 py-2.5 hover:bg-zinc-50 flex items-center justify-between group">
                <span className="text-zinc-800 font-medium"><span className="font-bold">Your Brand</span> reviews</span>
                <span className="text-[0.6rem] text-brand-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Optimized</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-[0.7rem] text-zinc-500 font-medium">Auto-simulating ORM suppression tactics every 4 seconds.</p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function ChangeGoogleAutocompletePage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - Sophisticated Search Theme ─────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-10%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              Google Autocomplete · ORM Experts India
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.3rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Manage &amp; Fix{" "}
              <span className="text-gradient-gold">Google Autocomplete</span>{" "}
              - Remove Negative Search Suggestions
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Has your business reputation been damaged by negative content on Google
              search results? If searching your brand name shows harmful autocomplete
              suggestions, don&apos;t panic - we have proven strategies to fix it.
            </p>

            {/* Negative examples showcase - Glassmorphic Pill Design */}
            <div className="glass-panel bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 backdrop-blur-sm relative overflow-hidden group hover:border-brand-gold/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80"></div>
              <p className="text-white/50 text-[0.65rem] uppercase tracking-widest mb-4 font-bold pl-2">
                Harmful autocomplete suggestions we remove:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                {negativeExamples.map((e) => (
                  <div
                    key={e.text}
                    className="flex items-center gap-2.5 text-[0.85rem] text-white/80 font-medium"
                  >
                    <svg
                      className="w-4 h-4 text-red-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {e.text}
                  </div>
                ))}
              </div>
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
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-0.5 max-w-md">
                <span className="text-brand-gold font-semibold">Guaranteed solution</span>{" "}
                - the only ORM firm offering guaranteed autocomplete change through verified optimization strategies.
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
                    Get Your Autocomplete Fixed Today
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVOLUTIONIZE AUTOCOMPLETE - Visualizer Integration ───────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Revolutionizing Search - Say Goodbye to <span className="heading-script text-brand-blue">Negative Autocomplete</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Google Autocomplete has been a staple feature of the search giant for years,
                  providing quick suggestions for users as they type their queries. However,
                  these suggestions are not always positive - and when they&apos;re harmful to
                  your brand, they directly damage your reputation and revenue.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  Say goodbye to limited, negative suggestions and hello to endless positive
                  possibilities. With new and improved algorithms, we provide users with more
                  accurate and diverse options - giving your brand the positive online identity
                  it deserves.
                </p>

                <div className="bg-white border-l-4 border-l-brand-blue shadow-sm rounded-r-2xl p-6 mb-8 relative overflow-hidden group hover:border-l-brand-gold transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none opacity-50"></div>
                  <div className="relative z-10">
                    <p className="font-heading font-bold text-zinc-900 text-base mb-3 leading-snug">
                      This is the future of search - and it starts with changing the way we think
                      about Google Autocomplete.
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      By utilizing a revolutionary autocomplete management system, businesses can
                      gain a significant advantage in the online marketplace. With more accurate and
                      relevant suggestions, customers find the products and services they need more
                      quickly - driving increased traffic, customer satisfaction, and loyalty.
                    </p>
                  </div>
                </div>

                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">
                  Get A Free Consultation
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <AutocompleteVisualizer />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STRATEGIES - Premium Numbered Grid ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Strategies</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Master the Art of Search - <span className="heading-script text-brand-blue">Transform Your Results</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 leading-relaxed max-w-xl mx-auto">
                Discover the power of influencing search results and elevate your online
                presence with proven autocomplete techniques used by our ORM experts.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {strategies.map((s, i) => (
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

          <RevealOnScroll delay={300}>
            <div className="mt-14 text-center">
              <p className="text-zinc-500 text-sm mb-5 font-medium">
                Get your Google autocomplete fixed and enjoy your online brand and reputation today.
              </p>
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-10 py-4">
                Schedule a Free Consultation
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── IMPORTANCE OF AUTOCOMPLETE - Feature Blocks ───────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <RevealOnScroll>
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Power of Google Autocomplete"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-5 rounded-2xl border border-white shadow-xl max-w-[220px] hidden md:flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-brand-blue" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-brand-blue animate-ping opacity-75" />
                </div>
                <p className="text-[0.65rem] text-zinc-800 font-bold uppercase tracking-widest leading-tight">Real-time impact on search discovery</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <RevealOnScroll>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Unlock the Power of Search - The Vital Importance of <span className="heading-script text-brand-gold">Google Autocomplete</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
                Google Autocomplete has become an essential tool for people all over the world.
                This powerful feature provides quick and relevant suggestions as users type
                their query, making the search process faster, easier, and more accurate.
              </p>
            </RevealOnScroll>

            <div className="space-y-5 mb-10 relative">
              <div className="absolute left-[1.65rem] top-6 bottom-6 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
              {autocompleteImpact.map((item, i) => (
                <RevealOnScroll key={item.title} delay={i * 150}>
                  <div className="flex flex-col sm:flex-row items-start gap-5 p-5 rounded-2xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-brand-blue/30 transition-all duration-300 group relative z-10 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)]">
                    <div className={`w-[3.3rem] h-[3.3rem] rounded-2xl flex items-center justify-center bg-zinc-50 border border-zinc-200 group-hover:scale-110 transition-transform shrink-0 text-2xl shadow-sm`}>
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <p className="text-base font-heading font-bold text-zinc-900 group-hover:text-brand-blue transition-colors mb-2">{item.title}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={400}>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">
                Get Started Today
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US - Premium Dark Grid ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <RevealOnScroll>
              <div>
                <p className="section-label text-brand-gold mb-3">Why Choose Us</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-white mb-6 leading-tight">
                  Building Better Brands with Expertise, Technology, &amp; <span className="text-gradient-gold">Transparency</span>
                </h2>
                <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10">
                  We are the premier choice for businesses looking to take control of their
                  online reputation and improve search engine visibility through Google
                  Autocomplete management. Our team utilizes cutting-edge technology and proven
                  strategies to change autocomplete suggestions in your favour.
                </p>

                <Link href="#contact" className="btn-gold shadow-[0_10px_30px_rgba(194,148,10,0.2)] inline-flex items-center gap-2 px-8 py-3.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call: +9188827 88412
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsPoints.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 100}>
                  <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-300 card-premium-hover h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-brand-gold/20 group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-all flex-shrink-0 shadow-inner">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-lg mb-2.5 group-hover:text-brand-gold-light transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                What Our <span className="heading-script text-brand-blue">Clients Say</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">
                We pay attention to details and quality, good communication and strong customer
                relationships.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col h-full hover:border-brand-blue/30 transition-all duration-400 shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.1)]">
                  <div className="flex text-brand-gold text-[0.65rem] mb-4 gap-1 tracking-widest drop-shadow-sm">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 mt-auto">
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

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Knowledge Base</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  Google Autocomplete <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific situation? Our ORM experts offer a free, no-obligation
                  consultation to assess your current autocomplete visibility.
                </p>
                <a
                  href="tel:+918882788412"
                  className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
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
              <p className="section-label text-brand-gold mb-3">Fix It Today</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let a Single Negative Google Result <span className="heading-script text-brand-blue">Ruin Your Business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation today. Our autocomplete experts will assess your
                current situation, identify every harmful suggestion, and present a clear action
                plan - with no obligation.
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

      <Footer />
    </div>
  );
}