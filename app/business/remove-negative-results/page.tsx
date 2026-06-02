// // "use client";
// // import { useState } from "react";
// // import Topbar from "@/components/Topbar";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import ContactForm from "@/components/ContactForm";
// // import FAQ from "@/components/FAQ";
// // import Link from "next/link";

// // const faqs = [
// //   { q: "Can negative content be permanently removed from Google?", a: "Yes, in many cases negative content can be permanently removed from Google through official removal requests, legal takedowns, or direct outreach to webmasters. Our team evaluates each case and uses the most effective strategy for permanent removal." },
// //   { q: "How long does it take to remove negative Google search results?", a: "The timeline varies depending on the type of content and platform. Some removals happen within days, while others may take 4-8 weeks. SEO suppression strategies typically show results in 60-90 days." },
// //   { q: "What types of negative content can be removed?", a: "We can assist with removing news articles, blog posts, forum threads, defamatory reviews, legal information, images, videos, and other harmful online content through various legal and technical methods." },
// //   { q: "Do you handle both business and personal reputation issues?", a: "Absolutely. We provide tailored solutions for both businesses and individuals - whether you're a corporation dealing with a PR crisis or an individual facing false allegations online." },
// // ];

// // const contentTypes = [
// //   { icon: "📰", label: "News Articles" },
// //   { icon: "⚖️", label: "Legal Info" },
// //   { icon: "📝", label: "Blog Posts" },
// //   { icon: "🎬", label: "Videos & Images" },
// //   { icon: "⭐", label: "Negative Reviews" },
// //   { icon: "💬", label: "Forum Threads" },
// //   { icon: "📱", label: "Social Media Posts" },
// //   { icon: "📋", label: "Complaint Sites" },
// // ];

// // const steps = [
// //   { n: "01", title: "Free Reputation Analysis", desc: "We conduct a thorough audit of your online presence to identify all negative content affecting your brand or personal reputation." },
// //   { n: "02", title: "Strategy Development", desc: "Our experts develop a customized multi-pronged removal and suppression strategy tailored to your specific situation." },
// //   { n: "03", title: "Removal & Suppression", desc: "We execute the plan using legal, technical, and SEO-based methods to remove or suppress harmful content from search results." },
// //   { n: "04", title: "Positive Content Creation", desc: "We build and promote positive, authoritative content to push negative results further down the search pages." },
// //   { n: "05", title: "Ongoing Monitoring", desc: "We continuously monitor your online presence and alert you to any new issues before they escalate." },
// // ];

// // const mediaNames = [
// //   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
// //   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// // ];

// // // Interactive SERP Suppression Simulation Widget
// // function SERPSuppressionWidget() {
// //   const [suppressed, setSuppressed] = useState(false);
// //   const [animating, setAnimating] = useState(false);

// //   const handleSimulate = () => {
// //     setAnimating(true);
// //     setTimeout(() => {
// //       setSuppressed(true);
// //       setAnimating(false);
// //     }, 1500);
// //   };

// //   const handleReset = () => {
// //     setSuppressed(false);
// //     setAnimating(false);
// //   };

// //   return (
// //     <div className="border border-zinc-200 rounded bg-white overflow-hidden text-left font-sans select-none">
// //       <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
// //         <div className="flex gap-1.5">
// //           <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
// //           <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
// //           <span className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
// //         </div>
// //         <div className="bg-white border border-zinc-200 rounded text-[0.72rem] text-zinc-500 px-3 py-1 flex-1 flex items-center gap-1.5">
// //           <svg className="w-3 h-3 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
// //           google.com/search?q=mybrand+reviews
// //         </div>
// //       </div>

// //       <div className="p-5 space-y-4">
// //         <div className="space-y-4 relative min-h-[290px] overflow-hidden">
// //           {/* Result 1: Negative Result */}
// //           <div
// //             className={`transition-all duration-[1200ms] border p-3 rounded ${
// //               suppressed
// //                 ? "opacity-30 scale-95 border-zinc-200 bg-zinc-50/50 translate-y-[215px]"
// //                 : "border-red-200 bg-red-50/30 translate-y-0"
// //             } absolute inset-x-0 top-0 h-[84px]`}
// //           >
// //             <div className="flex items-center justify-between mb-1">
// //               <span className="text-[0.62rem] font-bold text-red-600 border border-red-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Negative Article</span>
// //               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #10" : "Rank #1"}</span>
// //             </div>
// //             <h5 className="font-bold text-xs text-zinc-800 leading-tight">ALERT: Client Complaints and Scam Claims Against MyBrand</h5>
// //             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Reports of poor customer service and scams circulating online forums...</p>
// //           </div>

// //           {/* Result 2: Positive Result 1 */}
// //           <div
// //             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
// //               suppressed ? "translate-y-0" : "translate-y-[98px]"
// //             } h-[84px]`}
// //           >
// //             <div className="flex items-center justify-between mb-1">
// //               <span className="text-[0.62rem] font-bold text-emerald-600 border border-emerald-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Official Site</span>
// //               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #1" : "Rank #2"}</span>
// //             </div>
// //             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">MyBrand | Premium Corporate Quality Solutions</h5>
// //             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Welcome to the official homepage of MyBrand. Explore our verified credentials...</p>
// //           </div>

// //           {/* Result 3: Positive Result 2 */}
// //           <div
// //             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
// //               suppressed ? "translate-y-[98px]" : "translate-y-[196px]"
// //             } h-[84px]`}
// //           >
// //             <div className="flex items-center justify-between mb-1">
// //               <span className="text-[0.62rem] font-bold text-brand-blue border border-brand-blue/20 px-1.5 py-0.5 rounded uppercase tracking-wider">Press Release</span>
// //               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #2" : "Rank #3"}</span>
// //             </div>
// //             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">MyBrand Named Top 10 Best Growing Agencies of 2026</h5>
// //             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Industry review lists MyBrand among the fastest-growing and highest-rated...</p>
// //           </div>

// //           {/* Result 4: Positive Result 3 */}
// //           <div
// //             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded bg-white absolute inset-x-0 ${
// //               suppressed ? "translate-y-[196px] opacity-100" : "translate-y-[294px] opacity-0"
// //             } h-[84px]`}
// //           >
// //             <div className="flex items-center justify-between mb-1">
// //               <span className="text-[0.62rem] font-bold text-amber-600 border border-amber-200 px-1.5 py-0.5 rounded uppercase tracking-wider">Trustpilot Reviews</span>
// //               <span className="text-[0.68rem] text-zinc-400 font-semibold">Rank #3</span>
// //             </div>
// //             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline">Verified Customer Reviews for MyBrand (4.8 / 5.0)</h5>
// //             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Over 1,200 verified users rank MyBrand with outstanding scores for support...</p>
// //           </div>
// //         </div>

// //         <div className="border-t border-zinc-100 pt-4 flex gap-3 items-center justify-between">
// //           <p className="text-[0.68rem] text-zinc-500">
// //             {animating ? "Running search suppression..." : suppressed ? "Negative content pushed below Page 1." : "Click button to simulate suppression."}
// //           </p>
// //           {!suppressed ? (
// //             <button
// //               onClick={handleSimulate}
// //               disabled={animating}
// //               className={`btn-blue py-2 px-5 text-[0.7rem] leading-none ${animating ? "opacity-50 cursor-not-allowed" : ""}`}
// //             >
// //               {animating ? "Suppressing..." : "Suppress Search Results"}
// //             </button>
// //           ) : (
// //             <button onClick={handleReset} className="btn-outline border-zinc-300 text-zinc-600 hover:bg-zinc-50 py-2 px-5 text-[0.7rem] leading-none">
// //               Reset Simulator
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function RemoveNegativeResultsPage() {
// //   return (
// //     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
// //       <Topbar />
// //       <Navbar />

// //       {/* PAGE HERO */}
// //       <section className="page-hero relative overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
// //           <div>
// //             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
// //               🛡️ Negative Content Removal Experts
// //             </div>
// //             <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
// //               Remove Negative Content From Google Search
// //             </h1>
// //             <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
// //               Defend your brand. We permanently remove or aggressively suppress negative listings, unverified complaints, and search results fast.
// //             </p>
// //             <h2 className="text-white text-base font-bold mb-3">Has Negative Content Damaged Your Reputation?</h2>
// //             <p className="text-zinc-400 text-xs mb-5 leading-relaxed">
// //               Over 87% of potential clients search online before buying. A single negative search listing can cause substantial financial damage to businesses and executives.
// //             </p>
// //             <ul className="space-y-2 mb-8">
// //               {[
// //                 "Flag and remove defamatory reviews violating guidelines",
// //                 "Deploy search suppression strategies to bury negative coverage",
// //                 "Proactive reputation threat monitoring",
// //               ].map((item) => (
// //                 <li key={item} className="check-item text-xs text-zinc-300">
// //                   <span className="text-brand-gold text-base font-bold flex-shrink-0">✓</span>
// //                   <span>{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //             <div className="flex flex-wrap gap-3">
// //               <Link href="#contact" className="btn-gold">Get Consultation</Link>
// //             </div>
// //           </div>

// //           <div className="bg-slate-900 border border-zinc-800 rounded p-7">
// //             <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Free Consultation</p>
// //             <h3 className="font-heading text-lg font-bold text-white mb-4">Tell Us About Your Situation</h3>
// //             <ContactForm dark />
// //           </div>
// //         </div>
// //       </section>

// //       {/* MEDIA LOGOS */}
// //       <div className="bg-zinc-50 py-6 border-b border-zinc-200">
// //         <div className="max-w-7xl mx-auto px-4 overflow-hidden">
// //           <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
// //             {mediaNames.map((m, i) => (
// //               <span key={i} className="logo-badge-pill">
// //                 {m}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* WHY IT MATTERS */}
// //       <section className="py-24 px-4 bg-white border-b border-zinc-200">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
// //           <div className="pr-0 lg:pr-12">
// //             <p className="section-label mb-2">Why It Matters</p>
// //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-5">
// //               Secure Clean &amp; Authoritative Search Result Listings
// //             </h2>
// //             <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
// //               Negative articles on Google can impact organic traffic, conversions, and talent recruitment. Potential customers rely heavily on first-page reviews to evaluate business trust.
// //             </p>
// //             <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
// //               If negative listings dominate your brand name search query, we can help. Our team deploys direct webmaster takedowns, policy violation flagging, and content suppression methodologies to neutralize harmful items.
// //             </p>
// //             <Link href="#contact" className="btn-blue">Start Suppression</Link>
// //           </div>
// //           <div className="w-full max-w-md mx-auto pl-0 lg:pl-12">
// //             <SERPSuppressionWidget />
// //           </div>
// //         </div>
// //       </section>

// //       {/* WHAT WE REMOVE */}
// //       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-12">
// //             <p className="section-label mb-2">Our Expertise</p>
// //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Types of Negative Content We Suppress</h2>
// //           </div>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {contentTypes.map((c) => (
// //               <div key={c.label} className="border border-zinc-200 rounded flex flex-col items-center gap-3 py-6 px-4 bg-white hover:border-brand-blue transition-colors">
// //                 <span className="text-3xl select-none">{c.icon}</span>
// //                 <span className="font-bold text-xs text-zinc-800 text-center uppercase tracking-wider">{c.label}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* HOW IT WORKS */}
// //       <section className="py-24 px-4 bg-white border-b border-zinc-200">
// //         <div className="max-w-5xl mx-auto">
// //           <div className="text-center mb-12">
// //             <p className="section-label mb-2">Our Process</p>
// //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">How Our Removal Process Works</h2>
// //           </div>
// //           <div className="space-y-4">
// //             {steps.map((s) => (
// //               <div key={s.n} className="bg-[#fafafa] border border-zinc-200 rounded p-6 flex gap-4 items-start">
// //                 <div className="step-number font-heading flex-shrink-0">{s.n}</div>
// //                 <div>
// //                   <h3 className="font-bold text-zinc-900 mb-2 text-sm">{s.title}</h3>
// //                   <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* STATS */}
// //       <section className="py-14 px-4 bg-brand-blue border-b border-brand-mid">
// //         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
// //           {[
// //             { n: "98%", l: "Suppression Success" },
// //             { n: "1200+", l: "Clients Protected" },
// //             { n: "50+", l: "Aggregator Cover" },
// //             { n: "48 hrs", l: "First Blueprint" },
// //           ].map((s) => (
// //             <div key={s.l} className="text-center">
// //               <p className="font-heading text-3xl font-extrabold text-white mb-1">{s.n}</p>
// //               <p className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">{s.l}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="py-16 px-4 bg-[#fafafa] border-b border-zinc-200">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="text-center mb-10">
// //             <p className="section-label mb-2">FAQs</p>
// //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
// //           </div>
// //           <FAQ items={faqs} />
// //         </div>
// //       </section>

// //       {/* CONTACT SECTION */}
// //       <section id="contact" className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
// //         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <div>
// //             <p className="section-label text-brand-gold mb-2">Protect Your Future</p>
// //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">
// //               Don&apos;t Let Negative Content Control Your Brand
// //             </h2>
// //             <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
// //               Every day a negative listing ranks on page one of Google represents another lost client. Contact Online Reputation Builder for a completely confidential strategy blueprint.
// //             </p>
// //             <div className="space-y-3 border-t border-zinc-800 pt-6">
// //               {["Fast-track suppression for active crises", "Confidential review auditing", "Proven blueprint with 1200+ clients"].map(i => (
// //                 <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300 leading-normal">
// //                   <span className="text-brand-gold">✓</span>
// //                   <span>{i}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="bg-zinc-950 border border-zinc-800 rounded p-7">
// //             <p className="text-white font-bold text-sm mb-4">Request Search Removal Consultation</p>
// //             <ContactForm dark />
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const faqs = [
//   { q: "Can negative content be permanently removed from Google?", a: "Yes, in many cases negative content can be permanently removed from Google through official removal requests, legal takedowns, or direct outreach to webmasters. Our team evaluates each case and uses the most effective strategy for permanent removal." },
//   { q: "How long does it take to remove negative Google search results?", a: "The timeline varies depending on the type of content and platform. Some removals happen within days, while others may take 4-8 weeks. SEO suppression strategies typically show results in 60-90 days." },
//   { q: "What types of negative content can be removed?", a: "We can assist with removing news articles, blog posts, forum threads, defamatory reviews, legal information, images, videos, and other harmful online content through various legal and technical methods." },
//   { q: "Do you handle both business and personal reputation issues?", a: "Absolutely. We provide tailored solutions for both businesses and individuals - whether you're a corporation dealing with a PR crisis or an individual facing false allegations online." },
// ];

// const contentTypes = [
//   { icon: "📰", label: "News Articles" },
//   { icon: "⚖️", label: "Legal Info" },
//   { icon: "📝", label: "Blog Posts" },
//   { icon: "🎬", label: "Videos & Images" },
//   { icon: "⭐", label: "Negative Reviews" },
//   { icon: "💬", label: "Forum Threads" },
//   { icon: "📱", label: "Social Media Posts" },
//   { icon: "📋", label: "Complaint Sites" },
// ];

// const steps = [
//   { n: "01", title: "Free Reputation Analysis", desc: "We conduct a thorough audit of your online presence to identify all negative content affecting your brand or personal reputation." },
//   { n: "02", title: "Strategy Development", desc: "Our experts develop a customized multi-pronged removal and suppression strategy tailored to your specific situation." },
//   { n: "03", title: "Removal & Suppression", desc: "We execute the plan using legal, technical, and SEO-based methods to remove or suppress harmful content from search results." },
//   { n: "04", title: "Positive Content Creation", desc: "We build and promote positive, authoritative content to push negative results further down the search pages." },
//   { n: "05", title: "Ongoing Monitoring", desc: "We continuously monitor your online presence and alert you to any new issues before they escalate." },
// ];

// const mediaNames = [
//   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
//   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// ];

// // Interactive SERP Suppression Simulation Widget
// function SERPSuppressionWidget() {
//   const [suppressed, setSuppressed] = useState(false);
//   const [animating, setAnimating] = useState(false);

//   const handleSimulate = () => {
//     setAnimating(true);
//     setTimeout(() => {
//       setSuppressed(true);
//       setAnimating(false);
//     }, 1500);
//   };

//   const handleReset = () => {
//     setSuppressed(false);
//     setAnimating(false);
//   };

//   return (
//     <div className="border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-xl bg-white overflow-hidden text-left font-sans select-none premium-image-frame transform-none hover:transform-none">
//       <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-3">
//         <div className="flex gap-1.5">
//           <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
//           <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
//           <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
//         </div>
//         <div className="bg-white border border-zinc-200 shadow-sm rounded text-[0.72rem] text-zinc-500 px-3 py-1 flex-1 flex items-center gap-1.5">
//           <svg className="w-3 h-3 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
//           google.com/search?q=mybrand+reviews
//         </div>
//       </div>

//       <div className="p-5 space-y-4">
//         <div className="space-y-4 relative min-h-[290px] overflow-hidden">
//           {/* Result 1: Negative Result */}
//           <div
//             className={`transition-all duration-[1200ms] border p-3 rounded-lg ${
//               suppressed
//                 ? "opacity-30 scale-95 border-zinc-200 bg-zinc-50/50 translate-y-[215px]"
//                 : "border-red-200 bg-red-50/30 translate-y-0 shadow-sm"
//             } absolute inset-x-0 top-0 h-[84px]`}
//           >
//             <div className="flex items-center justify-between mb-1">
//               <span className="text-[0.62rem] font-bold text-red-600 border border-red-200 px-1.5 py-0.5 rounded uppercase tracking-wider bg-white">Negative Article</span>
//               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #10" : "Rank #1"}</span>
//             </div>
//             <h5 className="font-bold text-xs text-zinc-800 leading-tight">ALERT: Client Complaints and Scam Claims Against MyBrand</h5>
//             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Reports of poor customer service and scams circulating online forums...</p>
//           </div>

//           {/* Result 2: Positive Result 1 */}
//           <div
//             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded-lg bg-white shadow-sm absolute inset-x-0 ${
//               suppressed ? "translate-y-0" : "translate-y-[98px]"
//             } h-[84px]`}
//           >
//             <div className="flex items-center justify-between mb-1">
//               <span className="text-[0.62rem] font-bold text-emerald-600 border border-emerald-200 px-1.5 py-0.5 rounded uppercase tracking-wider bg-emerald-50/50">Official Site</span>
//               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #1" : "Rank #2"}</span>
//             </div>
//             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">MyBrand | Premium Corporate Quality Solutions</h5>
//             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Welcome to the official homepage of MyBrand. Explore our verified credentials...</p>
//           </div>

//           {/* Result 3: Positive Result 2 */}
//           <div
//             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded-lg bg-white shadow-sm absolute inset-x-0 ${
//               suppressed ? "translate-y-[98px]" : "translate-y-[196px]"
//             } h-[84px]`}
//           >
//             <div className="flex items-center justify-between mb-1">
//               <span className="text-[0.62rem] font-bold text-brand-blue border border-brand-blue/20 px-1.5 py-0.5 rounded uppercase tracking-wider bg-blue-50/50">Press Release</span>
//               <span className="text-[0.68rem] text-zinc-400 font-semibold">{suppressed ? "Rank #2" : "Rank #3"}</span>
//             </div>
//             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">MyBrand Named Top 10 Best Growing Agencies of 2026</h5>
//             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Industry review lists MyBrand among the fastest-growing and highest-rated...</p>
//           </div>

//           {/* Result 4: Positive Result 3 */}
//           <div
//             className={`transition-all duration-[1200ms] border border-zinc-200 p-3 rounded-lg bg-white shadow-sm absolute inset-x-0 ${
//               suppressed ? "translate-y-[196px] opacity-100" : "translate-y-[294px] opacity-0"
//             } h-[84px]`}
//           >
//             <div className="flex items-center justify-between mb-1">
//               <span className="text-[0.62rem] font-bold text-brand-gold border border-brand-gold/30 px-1.5 py-0.5 rounded uppercase tracking-wider bg-brand-gold/5">Verified Reviews</span>
//               <span className="text-[0.68rem] text-zinc-400 font-semibold">Rank #3</span>
//             </div>
//             <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">Verified Customer Reviews for MyBrand (4.8 / 5.0)</h5>
//             <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Over 1,200 verified users rank MyBrand with outstanding scores for support...</p>
//           </div>
//         </div>

//         <div className="border-t border-zinc-100 pt-5 flex gap-3 items-center justify-between">
//           <p className="text-[0.68rem] text-zinc-500 font-medium">
//             {animating ? "Running search suppression protocol..." : suppressed ? "Negative content pushed below Page 1." : "Click button to simulate suppression."}
//           </p>
//           {!suppressed ? (
//             <button
//               onClick={handleSimulate}
//               disabled={animating}
//               className={`btn-blue py-2 px-6 text-[0.7rem] leading-none shadow-lg shadow-brand-blue/20 ${animating ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {animating ? "Suppressing..." : "Suppress Results"}
//             </button>
//           ) : (
//             <button onClick={handleReset} className="btn-outline border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 py-2 px-6 text-[0.7rem] leading-none">
//               Reset Simulator
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function RemoveNegativeResultsPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* PAGE HERO */}
//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark">
//         <div className="hero-ambient hero-ambient-blue" />
//         <div className="hero-ambient hero-ambient-gold" />
        
//         {/* Subtle geometric overlays for premium depth */}
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"/>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"/>

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
//           <div className="hero-copy">
//             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
//               🛡️ Negative Content Removal Experts
//             </div>
//             <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
//               Remove Negative Content From <span className="heading-script text-brand-gold">Google Search</span>
//             </h1>
//             <p className="text-zinc-300 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
//               Defend your brand. We permanently remove or aggressively suppress negative listings, unverified complaints, and defamatory search results fast.
//             </p>
            
//             <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm">
//               <h2 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">Has Negative Content Damaged Your Reputation?</h2>
//               <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
//                 Over 87% of potential clients search online before buying. A single negative search listing can cause substantial financial damage to businesses and executives.
//               </p>
//               <ul className="space-y-2.5">
//                 {[
//                   "Flag and remove defamatory reviews violating guidelines",
//                   "Deploy search suppression strategies to bury negative coverage",
//                   "Proactive reputation threat monitoring",
//                 ].map((item) => (
//                   <li key={item} className="check-item text-sm text-zinc-300">
//                     <span className="check-icon text-brand-gold text-base border-none bg-brand-gold/20">✓</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="flex flex-wrap gap-3">
//               <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Get Confidential Consultation</Link>
//             </div>
//           </div>

//           {/* Form Card */}
//           <div className="premium-form-card bg-white border border-zinc-200 rounded-2xl p-7 md:p-9 z-20">
//             <div className="form-card-orbit" />
//             <p className="section-label mb-2">Free Consultation</p>
//             <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-6">Tell Us About Your Situation</h3>
//             <ContactForm />
//           </div>
//         </div>
//       </section>

//       {/* MEDIA LOGOS */}
//       <div className="logo-marquee-shell bg-zinc-50 py-8 border-b border-zinc-200 overflow-hidden">
//         <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Platforms & Publishers We Navigate</p>
//         <div className="overflow-hidden">
//           <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
//             {[...mediaNames, ...mediaNames].map((m, i) => (
//               <span key={i} className="logo-badge-pill text-zinc-500 font-semibold shadow-sm">
//                 {m}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* WHY IT MATTERS */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
//           <div className="premium-copy-panel pr-0 lg:pr-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
//               <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
//               <p className="section-label text-xs m-0">Why It Matters</p>
//             </div>
//             <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-6 leading-tight">
//               Secure Clean &amp; Authoritative <span className="heading-script text-brand-blue">Search Listings</span>
//             </h2>
//             <p className="text-zinc-500 leading-relaxed mb-5 text-sm lg:text-base">
//               Negative articles on Google can severely impact organic traffic, conversions, and talent recruitment. Potential customers rely heavily on first-page reviews to evaluate business trust and credibility.
//             </p>
//             <p className="text-zinc-500 leading-relaxed mb-8 text-sm lg:text-base">
//               If negative listings dominate your brand name search query, we can help. Our team deploys direct webmaster takedowns, policy violation flagging, and intelligent content suppression methodologies to neutralize harmful items permanently.
//             </p>
//             <Link href="#contact" className="btn-blue shadow-lg shadow-brand-blue/20">Start Suppression Protocol</Link>
//           </div>
          
//           <div className="w-full relative mx-auto lg:pl-10">
//             {/* Soft decorative glow behind the widget */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 rounded-full blur-[80px] -z-10"></div>
//             <SERPSuppressionWidget />
//           </div>
//         </div>
//       </section>

//       {/* WHAT WE REMOVE */}
//       <section className="py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="section-label mb-2 text-brand-gold">Our Expertise</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
//               Types of <span className="heading-script text-brand-blue">Negative Content</span> We Suppress
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
//             {contentTypes.map((c, i) => (
//               <div 
//                 key={c.label} 
//                 className="group premium-service-card bg-white rounded-xl flex flex-col items-center justify-center gap-4 py-8 px-5 border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
//                 style={{ transitionDelay: `${i * 20}ms` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
                
//                 <div className="w-14 h-14 service-icon-shell flex items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm text-2xl select-none group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg group-hover:shadow-brand-blue/25 transition-all duration-500 group-hover:scale-110">
//                   {c.icon}
//                 </div>
//                 <span className="font-bold text-xs text-zinc-800 text-center uppercase tracking-wider group-hover:text-brand-blue transition-colors relative z-10">{c.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <p className="section-label mb-2">Our Process</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
//               How Our <span className="heading-script text-brand-gold">Removal Process</span> Works
//             </h2>
//           </div>
          
//           <div className="space-y-6">
//             {steps.map((s, idx) => (
//               <div key={s.n} className="premium-info-card bg-zinc-50 border border-zinc-200 border-l-4 border-l-brand-blue rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 items-start hover:border-l-brand-gold transition-colors duration-300">
//                 <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center flex-shrink-0 relative overflow-hidden group">
//                    <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-gold/10 transition-colors"></div>
//                    <span className="font-heading font-black text-2xl text-brand-blue group-hover:text-brand-gold transition-colors relative z-10">{s.n}</span>
//                 </div>
//                 <div className="flex-1 mt-1">
//                   <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3">{s.title}</h3>
//                   <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">{s.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="py-16 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
//         <div className="platform-grid-glow opacity-60" />
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
//           {[
//             { n: "98%", l: "Suppression Success" },
//             { n: "1200+", l: "Clients Protected" },
//             { n: "50+", l: "Aggregator Cover" },
//             { n: "48 hrs", l: "First Blueprint" },
//           ].map((s) => (
//             <div key={s.l} className="text-center group">
//               <p className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">{s.n}</p>
//               <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{s.l}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="section-label mb-2">Clarity & Confidence</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-zinc-900">
//               Frequently Asked <span className="heading-script text-brand-blue">Questions</span>
//             </h2>
//           </div>
//           <div className="bg-white rounded-2xl shadow-sm border border-zinc-200/80 p-2 lg:p-4">
//             <FAQ items={faqs} />
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="py-20 lg:py-28 px-4 bg-zinc-900 relative overflow-hidden premium-section-dark">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"/>
//         <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"/>

//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
//           <div className="premium-copy-panel-dark">
//             <p className="section-label text-brand-gold mb-3">Protect Your Future</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight">
//               Don&apos;t Let Negative Content <span className="heading-script text-brand-gold">Control Your Brand</span>
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-8 text-sm lg:text-base">
//               Every day a negative listing ranks on page one of Google represents another lost client. Contact Online Reputation Builder for a completely confidential strategy blueprint.
//             </p>
//             <div className="space-y-4 border-t border-zinc-800 pt-8 mb-8">
//               {["Fast-track suppression for active crises", "Confidential review auditing", "Proven blueprint with 1200+ clients"].map(i => (
//                 <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
//                   <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs">✓</span>
//                   <span>{i}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="premium-form-card dark bg-zinc-950 border border-zinc-800 rounded-2xl p-7 md:p-9 shadow-2xl">
//             <p className="text-white font-heading font-bold text-xl mb-6">Request Search Removal Consultation</p>
//             <ContactForm dark />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const faqs = [
  { q: "Can negative content be permanently removed from Google?", a: "Yes, in many cases negative content can be permanently removed from Google through official removal requests, legal takedowns, or direct outreach to webmasters. Our team evaluates each case and uses the most effective strategy for permanent removal." },
  { q: "How long does it take to remove negative Google search results?", a: "The timeline varies depending on the type of content and platform. Some removals happen within days, while others may take 4-8 weeks. SEO suppression strategies typically show results in 60-90 days." },
  { q: "What types of negative content can be removed?", a: "We can assist with removing news articles, blog posts, forum threads, defamatory reviews, legal information, images, videos, and other harmful online content through various legal and technical methods." },
  { q: "Do you handle both business and personal reputation issues?", a: "Absolutely. We provide tailored solutions for both businesses and individuals - whether you're a corporation dealing with a PR crisis or an individual facing false allegations online." },
];

const contentTypes = [
  { icon: "📰", label: "News Articles" },
  { icon: "⚖️", label: "Legal Info" },
  { icon: "📝", label: "Blog Posts" },
  { icon: "🎬", label: "Videos & Images" },
  { icon: "⭐", label: "Negative Reviews" },
  { icon: "💬", label: "Forum Threads" },
  { icon: "📱", label: "Social Media Posts" },
  { icon: "📋", label: "Complaint Sites" },
];

const steps = [
  { n: "01", title: "Free Reputation Analysis", desc: "We conduct a thorough audit of your online presence to identify all negative content affecting your brand or personal reputation." },
  { n: "02", title: "Strategy Development", desc: "Our experts develop a customized multi-pronged removal and suppression strategy tailored to your specific situation." },
  { n: "03", title: "Removal & Suppression", desc: "We execute the plan using legal, technical, and SEO-based methods to remove or suppress harmful content from search results." },
  { n: "04", title: "Positive Content Creation", desc: "We build and promote positive, authoritative content to push negative results further down the search pages." },
  { n: "05", title: "Ongoing Monitoring", desc: "We continuously monitor your online presence and alert you to any new issues before they escalate." },
];

// Utilizing reliable Favicon API for media logos
const mediaLogos = [
  { name: "CNW", img: "https://www.google.com/s2/favicons?domain=newswire.ca&sz=128" },
  { name: "ANI", img: "https://www.google.com/s2/favicons?domain=aninews.in&sz=128" },
  { name: "ET BrandEquity", img: "https://www.google.com/s2/favicons?domain=brandequity.economictimes.indiatimes.com&sz=128" },
  { name: "Times Now", img: "https://www.google.com/s2/favicons?domain=timesnownews.com&sz=128" },
  { name: "Forbes", img: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" },
  { name: "DNA India", img: "https://www.google.com/s2/favicons?domain=dnaindia.com&sz=128" },
  { name: "CNBC", img: "https://www.google.com/s2/favicons?domain=cnbc.com&sz=128" },
  { name: "Hindustan Times", img: "https://www.google.com/s2/favicons?domain=hindustantimes.com&sz=128" },
  { name: "Business Standard", img: "https://www.google.com/s2/favicons?domain=business-standard.com&sz=128" },
  { name: "India Today", img: "https://www.google.com/s2/favicons?domain=indiatoday.in&sz=128" },
  { name: "Midday", img: "https://www.google.com/s2/favicons?domain=mid-day.com&sz=128" },
  { name: "Yahoo Finance", img: "https://www.google.com/s2/favicons?domain=finance.yahoo.com&sz=128" }
];

// Native React Counter Animation Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuart easing function for a smooth slow-down at the end
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Interactive SERP Suppression Simulation Widget - Premium Styled
function SERPSuppressionWidget() {
  const [suppressed, setSuppressed] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleSimulate = () => {
    setAnimating(true);
    setTimeout(() => {
      setSuppressed(true);
      setAnimating(false);
    }, 1500);
  };

  const handleReset = () => {
    setSuppressed(false);
    setAnimating(false);
  };

  return (
    <div className="border border-zinc-200/80 shadow-[0_20px_50px_-12px_rgba(9,15,28,0.15)] rounded-2xl bg-white overflow-hidden text-left font-sans select-none relative z-10 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.15)] group">
      {/* Fake Browser Chrome */}
      <div className="bg-[#f8fafc] border-b border-zinc-200 px-4 py-3.5 flex items-center gap-4">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="bg-white border border-zinc-200 shadow-sm rounded-md text-[0.72rem] text-zinc-500 px-3 py-1.5 flex-1 flex items-center gap-2 group-hover:border-brand-blue/30 transition-colors">
          <svg className="w-3.5 h-3.5 text-brand-blue/70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span className="opacity-70 font-medium tracking-wide">google.com/search?q=mybrand+reviews</span>
        </div>
      </div>

      <div className="p-6 space-y-4 bg-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="space-y-4 relative min-h-[290px] overflow-hidden">
          {/* Result 1: Negative Result */}
          <div
            className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) border p-4 rounded-xl ${
              suppressed
                ? "opacity-30 scale-[0.97] border-zinc-200 bg-zinc-50/50 translate-y-[215px]"
                : "border-red-200 bg-red-50/30 translate-y-0 shadow-sm"
            } absolute inset-x-0 top-0 h-[84px]`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[0.62rem] font-bold text-red-600 border border-red-200 px-2 py-0.5 rounded-sm uppercase tracking-wider bg-white shadow-sm">Negative Article</span>
              <span className="text-[0.68rem] text-zinc-400 font-bold tracking-widest">{suppressed ? "RANK #10" : "RANK #1"}</span>
            </div>
            <h5 className="font-bold text-xs text-zinc-900 leading-tight">ALERT: Client Complaints and Scam Claims Against MyBrand</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Reports of poor customer service and scams circulating online forums...</p>
          </div>

          {/* Result 2: Positive Result 1 */}
          <div
            className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) border border-zinc-200 p-4 rounded-xl bg-white shadow-sm absolute inset-x-0 ${
              suppressed ? "translate-y-0" : "translate-y-[98px]"
            } h-[84px] hover:border-brand-blue/40`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[0.62rem] font-bold text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-sm uppercase tracking-wider bg-emerald-50/50">Official Site</span>
              <span className="text-[0.68rem] text-zinc-400 font-bold tracking-widest">{suppressed ? "RANK #1" : "RANK #2"}</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">MyBrand | Premium Corporate Quality Solutions</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Welcome to the official homepage of MyBrand. Explore our verified credentials...</p>
          </div>

          {/* Result 3: Positive Result 2 */}
          <div
            className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) border border-zinc-200 p-4 rounded-xl bg-white shadow-sm absolute inset-x-0 ${
              suppressed ? "translate-y-[98px]" : "translate-y-[196px]"
            } h-[84px] hover:border-brand-blue/40`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[0.62rem] font-bold text-brand-blue border border-brand-blue/20 px-2 py-0.5 rounded-sm uppercase tracking-wider bg-blue-50/50">Press Release</span>
              <span className="text-[0.68rem] text-zinc-400 font-bold tracking-widest">{suppressed ? "RANK #2" : "RANK #3"}</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">MyBrand Named Top 10 Best Growing Agencies of 2026</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Industry review lists MyBrand among the fastest-growing and highest-rated...</p>
          </div>

          {/* Result 4: Positive Result 3 */}
          <div
            className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) border border-zinc-200 p-4 rounded-xl bg-white shadow-sm absolute inset-x-0 ${
              suppressed ? "translate-y-[196px] opacity-100" : "translate-y-[294px] opacity-0"
            } h-[84px] hover:border-brand-blue/40`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[0.62rem] font-bold text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded-sm uppercase tracking-wider bg-brand-gold/5">Trustpilot Reviews</span>
              <span className="text-[0.68rem] text-zinc-400 font-bold tracking-widest">RANK #3</span>
            </div>
            <h5 className="font-bold text-xs text-brand-blue leading-tight hover:underline cursor-pointer">Verified Customer Reviews for MyBrand (4.8 / 5.0)</h5>
            <p className="text-[0.68rem] text-zinc-500 mt-1 leading-snug">Over 1,200 verified users rank MyBrand with outstanding scores for support...</p>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-5 mt-2 flex gap-4 items-center justify-between">
          <p className="text-[0.7rem] text-zinc-500 font-medium">
            {animating ? "Running search suppression protocol..." : suppressed ? "Negative content pushed below Page 1." : "Click button to simulate suppression."}
          </p>
          {!suppressed ? (
            <button
              onClick={handleSimulate}
              disabled={animating}
              className={`btn-blue py-2.5 px-6 text-[0.75rem] leading-none shadow-[0_10px_20px_rgba(37,99,235,0.2)] ${animating ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {animating ? "Suppressing..." : "Suppress Search Results"}
            </button>
          ) : (
            <button onClick={handleReset} className="btn-outline border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 py-2.5 px-6 text-[0.75rem] leading-none transition-all">
              Reset Simulator
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RemoveNegativeResultsPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* PAGE HERO - Premium Dark Concept */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50" />
        <div className="hero-ambient hero-ambient-gold opacity-40 right-0 top-20" />
        
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-blue/10 border-brand-blue/30 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
              🛡️ Negative Content Removal Experts
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Remove Negative Content From <span className="text-gradient-gold">Google Search</span>
            </h1>
            
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              Defend your brand. We permanently remove or aggressively suppress negative listings, unverified complaints, and search results fast.
            </p>

            {/* Premium Info Panel */}
            <div className="glass-panel border-l-4 border-l-brand-blue bg-brand-blue/5 rounded-r-xl p-6 mb-8 mt-4 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none group-hover:from-brand-blue/10 transition-colors" />
              <div className="relative z-10">
                <h2 className="text-white font-heading text-lg font-bold mb-2">Has Negative Content Damaged Your Reputation?</h2>
                <p className="text-zinc-300 text-sm leading-relaxed mb-0">
                  Over 87% of potential clients search online before buying. A single negative search listing can cause substantial financial damage to businesses and executives.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Flag and remove defamatory reviews violating guidelines",
                "Deploy search suppression strategies to bury negative coverage",
                "Proactive reputation threat monitoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-gold shadow-[0_0_20px_rgba(194,148,10,0.3)]">Get Consultation</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-2xl blur-xl opacity-40"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-7 lg:p-9 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="relative z-10">
                <p className="section-label mb-2 text-brand-gold">Free Consultation</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-6">Tell Us About Your Situation</h3>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS - Image Marquee Strip */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Platforms & Publishers We Navigate</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {[...mediaLogos, ...mediaLogos].map((m, i) => (
              <img 
                key={i} 
                src={m.img} 
                alt={m.name} 
                className="h-8 md:h-10 w-auto object-contain trust-logo-strip hover:scale-105 transition-transform duration-300 rounded-sm"
                title={m.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center relative z-10">
          
          <div className="premium-copy-panel pr-0 lg:pr-8">
            <p className="section-label mb-2 text-brand-gold">Why It Matters</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Secure Clean &amp; Authoritative <br className="hidden lg:block"/><span className="heading-script text-brand-blue">Search Result Listings</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-5 text-[0.95rem]">
              Negative articles on Google can impact organic traffic, conversions, and talent recruitment. Potential customers rely heavily on first-page reviews to evaluate business trust.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              If negative listings dominate your brand name search query, we can help. Our team deploys direct webmaster takedowns, policy violation flagging, and content suppression methodologies to neutralize harmful items.
            </p>
            <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)]">Start Suppression</Link>
          </div>
          
          <div className="w-full max-w-lg mx-auto relative lg:pl-10">
            {/* Soft decorative glow behind the widget */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
            <SERPSuppressionWidget />
          </div>

        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Expertise</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Types of Negative Content <span className="heading-script text-brand-blue">We Suppress</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {contentTypes.map((c, i) => (
              <div 
                key={c.label} 
                className="group premium-service-card bg-zinc-50 rounded-2xl flex flex-col items-center justify-center gap-4 py-8 px-5 border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="w-16 h-16 service-icon-shell flex items-center justify-center rounded-2xl bg-white border border-zinc-100 shadow-sm text-3xl select-none group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg group-hover:shadow-brand-blue/25 transition-all duration-500 group-hover:scale-110 relative z-10">
                  {c.icon}
                </div>
                <span className="font-bold text-xs text-zinc-800 text-center uppercase tracking-wider group-hover:text-brand-blue transition-colors relative z-10">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Connecting Line Layout */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <p className="section-label mb-2 text-brand-gold">Our Process</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              How Our Removal <span className="heading-script text-brand-blue">Process Works</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              We execute a rapid, coordinated response protocol designed to contain the immediate threat while simultaneously building a firewall around your long-term reputation.
            </p>
            <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-brand-blue to-transparent rounded-full" />
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute left-[19px] top-6 bottom-12 w-[2px] bg-zinc-200 hidden sm:block z-0" />
            
            <div className="space-y-6 relative z-10">
              {steps.map((s, idx) => (
                <div key={s.n} className="group process-step flex gap-5 items-start bg-white p-6 rounded-xl border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] hover:border-brand-blue/20 transition-all duration-400 transform hover:-translate-x-1">
                  <div className={`step-number flex-shrink-0 relative z-10 transition-all duration-300 ${idx === 0 ? 'bg-brand-gold shadow-lg shadow-brand-gold/30' : 'bg-brand-blue group-hover:bg-brand-mid shadow-lg shadow-brand-blue/20'}`}>
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2 group-hover:text-brand-blue transition-colors">{s.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS - Premium Dark Grid with Animated Counters */}
      <section className="py-20 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="ambient-glow-gold bottom-0 right-1/4 opacity-20" />
        <div className="platform-grid-glow opacity-60" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { n: 98, suffix: "%", l: "Suppression Success" },
            { n: 1200, suffix: "+", l: "Clients Protected" },
            { n: 50, suffix: "+", l: "Aggregator Cover" },
            { n: 48, suffix: " hrs", l: "First Blueprint" },
          ].map((s) => (
            <div key={s.l} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
              <p className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300 drop-shadow-md">
                <AnimatedCounter end={s.n} suffix={s.suffix} duration={2500} />
              </p>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">
              Frequently Asked <span className="heading-script text-brand-blue">Questions</span>
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT SECTION - Premium Grand Finish */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"/>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Protect Your Future</p>
            <h2 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Don&apos;t Let Negative Content <br className="hidden lg:block"/><span className="heading-script text-brand-blue">Control Your Brand</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              Every day a negative listing ranks on page one of Google represents another lost client. Contact Online Reputation Builder for a completely confidential strategy blueprint.
            </p>
            
            <div className="space-y-5 border-t border-zinc-800/80 pt-8">
              {["Fast-track suppression for active crises", "Confidential review auditing", "Proven blueprint with 1200+ clients"].map(i => (
                <div key={i} className="flex items-center gap-4 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold text-xs shadow-inner flex-shrink-0">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl opacity-40"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-6">Request Search Removal Consultation</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}