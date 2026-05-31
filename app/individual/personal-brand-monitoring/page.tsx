// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const monitoringBenefits = [
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
//       </svg>
//     ),
//     title: "Protect Your Personal Brand",
//     desc: "You need to protect your personal brand, and the best way to do that is by monitoring it consistently across all digital channels and platforms.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//       </svg>
//     ),
//     title: "Track Brand Mentions",
//     desc: "Personal brand monitoring is the process of tracking different channels to identify where your brand is mentioned — including news, social media, forums, and review sites.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
//       </svg>
//     ),
//     title: "Handle Issues Before They Escalate",
//     desc: "It is very essential to any business, as it helps maintain the overall reputation and handle issues before they get out of control — a proactive approach beats a reactive one.",
//   },
//   {
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
//       </svg>
//     ),
//     title: "Understand Audience Sentiment",
//     desc: "Brand monitoring helps you understand what the audience thinks of your brand and how to keep track. It provides better understanding of the overall sentiment people have toward you.",
//   },
// ];

// const monitoringMethods = [
//   {
//     title: "Make Your Brand Name Distinct",
//     desc: "Before naming your brand, research thoroughly to ensure you are using a different name that isn't used by another brand or celebrity. Distinctiveness is the foundation of effective monitoring.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Manage Your Brand on Search Engines",
//     desc: "Manage how your name appears on search engine rankings. Your profile needs to be clearly visible with your name and tagline at the top — we handle the technical and strategic aspects of this.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Manage Your Brand on Social Media",
//     desc: "Always keep your profiles updated and renewed on Facebook, Google+, Twitter, LinkedIn, and beyond. Social currency is real — and we help you maintain it consistently.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Upload Videos on YouTube",
//     desc: "Make short, valuable videos about your work for YouTube. Video content ranks exceptionally well and creates a lasting impression — we help you produce and optimise this content.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Be Vigilant — Stay Alert",
//     desc: "Always be alert, keep your eyes open, and see what is happening around you. If something is related to you or your brand, familiarise yourself with it and keep updating your knowledge.",
//     icon: (
//       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//       </svg>
//     ),
//   },
// ];

// const monitoringChannels = [
//   { label: "Social Media", icon: "📱", desc: "Facebook, Instagram, LinkedIn, X/Twitter" },
//   { label: "Search Engines", icon: "🔍", desc: "Google, Bing, Yahoo SERPs" },
//   { label: "Review Platforms", icon: "⭐", desc: "Google, Glassdoor, Trustpilot" },
//   { label: "News & Media", icon: "📰", desc: "News portals, blogs, press releases" },
//   { label: "Forums & Communities", icon: "💬", desc: "Reddit, Quora, niche forums" },
//   { label: "Video Platforms", icon: "🎥", desc: "YouTube, Vimeo, Reels" },
// ];

// const faqs = [
//   { q: "Why is personal brand monitoring important?", a: "Personal brand monitoring is important because what people find about you online can greatly impact your personal and professional life. It can influence hiring decisions, business opportunities, and even personal relationships. By monitoring your online presence, you can take control and ensure the information being shared is positive and accurate." },
//   { q: "What should I monitor as part of my personal brand?", a: "Key elements to monitor include your social media profiles, online reviews and ratings, personal website or blog, and any mentions of your name or personal brand in the news or on forums. We track all of these on your behalf with real-time alerts." },
//   { q: "How do I monitor my personal brand online?", a: "You can use tools such as Google Alerts, social media monitoring tools, and reputation management services. You can also regularly search for your name on various search engines. Our agency provides a comprehensive, automated monitoring service so you never miss a mention." },
//   { q: "What can I do if I find negative information about myself online?", a: "First, assess whether the information is accurate. If so, address the issue and promote positive content. If not, take steps to have it removed or corrected. Our team handles all of this — from outreach to suppression to legal escalation where necessary." },
//   { q: "How often should I monitor my personal brand online?", a: "We recommend monitoring your personal brand at least once a month. However, for public figures and high-profile individuals, continuous real-time monitoring is essential. Our agency provides ongoing 24/7 brand monitoring so you're always informed immediately." },
// ];

// const testimonials = [
//   { name: "Scott", role: "Business Owner", text: "I'm really happy with the results I've seen. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward.", initials: "SC" },
//   { name: "Harold", role: "CEO", text: "Working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation.", initials: "HA" },
//   { name: "Garima", role: "Public Figure", text: "They were professional, responsive, and delivered results. The difference in my online reputation is making a huge impact on my business. Highly recommend their monitoring services.", initials: "GA" },
//   { name: "Kapil", role: "Healthcare Professional", text: "They helped me take control of my online presence. They removed negative content and helped me create a positive image on the web. I highly recommend them.", initials: "KA" },
//   { name: "Jashmin", role: "Entrepreneur", text: "Outstanding service. The team understood my needs perfectly and delivered a monitoring system that keeps me informed and my reputation protected at all times.", initials: "JA" },
//   { name: "Abhay", role: "Marketing Director", text: "I am so much happier with the results. They helped me clean up my online presence and improve my search results, which has been invaluable for my business growth.", initials: "AB" },
// ];

// export default function PersonalBrandMonitoringPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* ── PAGE HERO ─────────────────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden">
//         <div className="hero-orb w-[500px] h-[500px] bg-brand-blue/10 top-[-100px] left-[-80px] absolute" />
//         <div className="hero-orb w-[360px] h-[360px] bg-brand-gold/8 bottom-[-80px] right-[-60px] absolute" style={{ animationDelay: "1.5s" }} />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-22 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em]">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-light opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-light" />
//               </span>
//               Brand Monitoring · 24/7 Protection
//             </div>

//             <h1 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-5 tracking-tight">
//               Your Personal Brand Is a{" "}
//               <span className="text-brand-gold-light">Priceless Asset</span>{" "}
//               — Protect It
//             </h1>

//             <p className="text-white/65 text-base mb-7 leading-relaxed">
//               Maintain your priceless asset with the best Personal Brand Monitoring agency. Personal brand monitoring helps you stay on top of your reputation and handle issues before they get out of control.
//             </p>

//             <ul className="space-y-2 mb-8">
//               {monitoringBenefits.map((b) => (
//                 <li key={b.title} className="check-item text-[0.82rem] text-white/75">
//                   <span className="check-icon">
//                     <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 12 12">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5"/>
//                     </svg>
//                   </span>
//                   {b.title}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-3">
//               <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
//               <a href="tel:+919971687251" className="btn-outline">Call: +91 99716 87251</a>
//             </div>

//             {/* Live monitoring indicator */}
//             <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-4">
//               <div className="flex items-center gap-2">
//                 <div className="relative">
//                   <div className="w-3 h-3 rounded-full bg-green-400" />
//                   <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75" />
//                 </div>
//                 <span className="text-white/60 text-xs font-medium">Live Monitoring Active</span>
//               </div>
//               <span className="text-white/20">•</span>
//               <span className="text-white/40 text-xs">50+ platforms tracked simultaneously</span>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="relative">
//             <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl pointer-events-none" />
//             <div className="relative bg-white rounded-xl p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-white/10">
//               <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-blue via-brand-gold to-transparent rounded-full -translate-y-px" />
//               <div className="flex items-center justify-between mb-5">
//                 <div>
//                   <p className="section-label text-brand-blue mb-1">Free Consultation</p>
//                   <h2 className="font-heading text-lg font-bold text-brand-dark leading-tight">Start Monitoring Your Brand Today</h2>
//                 </div>
//                 <div className="w-10 h-10 rounded-lg bg-brand-blue/8 border border-brand-blue/15 flex items-center justify-center flex-shrink-0">
//                   <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//                   </svg>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY IT MATTERS ───────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <p className="section-label mb-3">Why Monitor</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//                 Personal Brand Monitoring Helps You Understand What Audiences Think
//               </h2>
//               <p className="text-zinc-500 leading-relaxed mb-5 text-sm">
//                 It is very important to know about both positive mentions and negative comments about you or your company. This knowledge allows you to know when damage control is needed and proactively shapes the overall perception of your brand.
//               </p>
//               <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
//                 Your personal brand can be damaged at any time — by a competitor, customer, ex-employee, or anyone. Whether it is a removal or a response, it is important to act quickly. Therefore, you need to monitor your personal brand and know how it stands up to the competition.
//               </p>

//               {/* Risk callout */}
//               <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="font-bold text-red-700 text-sm mb-1">Ignoring your brand reputation can cost you</p>
//                     <p className="text-red-600 text-xs leading-relaxed">If your personal brand is present online, you need to worry about its reputation. Ignoring it might directly affect your revenue for a long time.</p>
//                   </div>
//                 </div>
//               </div>

//               <Link href="#contact" className="btn-gold">Start Brand Monitoring</Link>
//             </div>

//             <div className="relative">
//               <div className="img-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
//                   alt="Personal Brand Monitoring Dashboard"
//                 />
//               </div>
//               <div className="floating-badge absolute -bottom-4 -left-4 z-10 flex items-center gap-2.5">
//                 <div className="relative">
//                   <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
//                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//                     </svg>
//                   </div>
//                   <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-white animate-pulse" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-zinc-900">Brand Health</p>
//                   <p className="text-[0.65rem] text-zinc-500">Actively Monitored</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── 4 KEY BENEFITS ───────────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="section-label mb-3 justify-center">Key Benefits</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 leading-tight">
//               Your Personal Brand is Not About a Name or Logo — It&apos;s More Than That
//             </h2>
//             <p className="text-zinc-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
//               We help with brand monitoring by making it easier to identify how people feel about your brand, informing your marketing decisions and helping you respond quickly.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {monitoringBenefits.map((b) => (
//               <div key={b.title} className="service-card group flex flex-col">
//                 <div className="service-icon-wrap mb-5">{b.icon}</div>
//                 <h3 className="font-heading font-bold text-base text-zinc-900 mb-2.5 group-hover:text-brand-blue transition-colors">{b.title}</h3>
//                 <p className="text-sm text-zinc-500 leading-relaxed">{b.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── MONITORING CHANNELS ──────────────────────────────── */}
//       <section className="py-20 px-4 bg-[#070d1a] border-b border-zinc-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-70 pointer-events-none" />
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <p className="section-label text-brand-gold mb-3 justify-center">What We Monitor</p>
//             <h2 className="font-heading text-3xl font-bold text-white mb-4">Channels We Track For You</h2>
//             <p className="text-zinc-400 text-sm max-w-xl mx-auto">We monitor your personal brand across every major digital touchpoint, 24/7.</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {monitoringChannels.map((c) => (
//               <div key={c.label} className="platform-card p-5 flex items-start gap-4">
//                 <span className="text-2xl flex-shrink-0">{c.icon}</span>
//                 <div>
//                   <p className="text-white font-bold text-sm mb-1">{c.label}</p>
//                   <p className="text-zinc-500 text-xs leading-relaxed">{c.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Link href="#contact" className="btn-gold">Schedule a Free Consultation</Link>
//           </div>
//         </div>
//       </section>

//       {/* ── HOW TO MONITOR ───────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           <div>
//             <p className="section-label mb-3">Our Methods</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//               How to Monitor Your Personal Brand
//             </h2>
//             <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
//               The more you monitor, the more you&apos;ll know about your brand and how it stands up to the competition. When you spot negative comments, we offer assistance, responses, and control the message being put out.
//             </p>

//             <div className="space-y-3">
//               {monitoringMethods.map((m, i) => (
//                 <div
//                   key={m.title}
//                   className="group flex items-start gap-4 p-4 rounded-xl border border-zinc-200 hover:border-brand-blue/20 hover:bg-blue-50/30 transition-all"
//                 >
//                   <div className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all">
//                     {m.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-brand-blue transition-colors">{m.title}</h4>
//                     <p className="text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="img-frame">
//               <img
//                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
//                 alt="Brand Monitoring Strategy"
//               />
//             </div>
//             <div className="floating-badge absolute -top-4 -right-4 z-10" style={{ animationDelay: "1s" }}>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                 <p className="text-xs font-bold text-zinc-900">Real-time Alerts Active</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ─────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-[#070d1a] relative overflow-hidden border-b border-zinc-900">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <p className="section-label text-brand-gold mb-3 justify-center">Client Testimonials</p>
//             <h2 className="font-heading text-3xl font-bold text-white">What Our Clients Say</h2>
//             <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">We pay attention to details and quality, good communication and strong customer relationship.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {testimonials.map((t) => (
//               <div key={t.name} className="testimonial-dark">
//                 <div className="flex text-brand-gold text-sm mb-4 gap-0.5">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
//                 <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
//                 <div className="flex items-center gap-3 border-t border-white/6 pt-4">
//                   <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-xs font-bold">{t.initials}</span>
//                   </div>
//                   <div>
//                     <p className="text-white font-bold text-sm">{t.name}</p>
//                     <p className="text-zinc-500 text-xs">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ──────────────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white border-l border-zinc-100 pointer-events-none hidden lg:block" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
//             <div className="lg:col-span-2">
//               <p className="section-label mb-3">Common Questions</p>
//               <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight">
//                 Brand Monitoring <span className="text-brand-blue">FAQs</span>
//               </h2>
//               <p className="text-zinc-400 text-sm leading-relaxed mb-7">
//                 Have a specific situation? Contact our brand monitoring experts for a free assessment of your current online presence.
//               </p>
//               <a href="tel:+919971687251" className="btn-gold inline-flex items-center gap-2">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//                 Call Us Now
//               </a>
//             </div>
//             <div className="lg:col-span-3">
//               <FAQ items={faqs} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT CTA ──────────────────────────────────────── */}
//       <section id="contact" className="py-20 px-4 bg-zinc-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
//         <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <p className="section-label text-brand-gold mb-3">Act Before It&apos;s Too Late</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
//               Don&apos;t Let a Single Negative Google Result Ruin Your Business
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-8 text-sm max-w-lg">
//               Schedule a free consultation and let our experts assess your current brand health — identifying risks, monitoring gaps, and opportunities to strengthen your reputation immediately.
//             </p>

//             <div className="space-y-0 mb-8">
//               {[
//                 { label: "Hotline", value: "+91 99716-87251", href: "tel:+919971687251" },
//                 { label: "Email", value: "info@onlinereputationbuilder.in", href: "mailto:info@onlinereputationbuilder.in" },
//                 { label: "Location", value: "Dwarka, New Delhi, 110059", href: null },
//               ].map((item) => (
//                 <div key={item.label} className="contact-info-item">
//                   <div>
//                     <p className="text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
//                     {item.href ? (
//                       <a href={item.href} className="text-white font-semibold text-sm hover:text-brand-gold-light transition-colors">{item.value}</a>
//                     ) : (
//                       <p className="text-white text-sm">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a href="tel:+919971687251" className="btn-gold inline-flex items-center gap-2">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//               Call Now
//             </a>
//           </div>

//           <div className="relative">
//             <div className="absolute -inset-3 bg-brand-blue/8 rounded-2xl blur-xl pointer-events-none" />
//             <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-7 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
//               <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
//               <p className="text-white font-bold text-base mb-1">Send Us a Message</p>
//               <p className="text-zinc-500 text-xs mb-5">We respond within 24 hours on business days.</p>
//               <ContactForm dark />
//             </div>
//           </div>
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

const monitoringBenefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Protect Your Personal Brand",
    desc: "You need to protect your personal brand, and the best way to do that is by monitoring it consistently across all digital channels and platforms.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: "Track Brand Mentions",
    desc: "Personal brand monitoring is the process of tracking different channels to identify where your brand is mentioned — including news, social media, forums, and review sites.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Handle Issues Before They Escalate",
    desc: "It is very essential to any business, as it helps maintain the overall reputation and handle issues before they get out of control — a proactive approach beats a reactive one.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Understand Audience Sentiment",
    desc: "Brand monitoring helps you understand what the audience thinks of your brand and how to keep track. It provides better understanding of the overall sentiment people have toward you.",
  },
];

const monitoringMethods = [
  {
    title: "Make Your Brand Name Distinct",
    desc: "Before naming your brand, research thoroughly to ensure you are using a different name that isn't used by another brand or celebrity. Distinctiveness is the foundation of effective monitoring.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
      </svg>
    ),
  },
  {
    title: "Manage Your Brand on Search Engines",
    desc: "Manage how your name appears on search engine rankings. Your profile needs to be clearly visible with your name and tagline at the top — we handle the technical and strategic aspects of this.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
  },
  {
    title: "Manage Your Brand on Social Media",
    desc: "Always keep your profiles updated and renewed on Facebook, Google+, Twitter, LinkedIn, and beyond. Social currency is real — and we help you maintain it consistently.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    title: "Upload Videos on YouTube",
    desc: "Make short, valuable videos about your work for YouTube. Video content ranks exceptionally well and creates a lasting impression — we help you produce and optimise this content.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: "Be Vigilant — Stay Alert",
    desc: "Always be alert, keep your eyes open, and see what is happening around you. If something is related to you or your brand, familiarise yourself with it and keep updating your knowledge.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
  },
];

const monitoringChannels = [
  { label: "Social Media", icon: "📱", desc: "Facebook, Instagram, LinkedIn, X/Twitter" },
  { label: "Search Engines", icon: "🔍", desc: "Google, Bing, Yahoo SERPs" },
  { label: "Review Platforms", icon: "⭐", desc: "Google, Glassdoor, Trustpilot" },
  { label: "News & Media", icon: "📰", desc: "News portals, blogs, press releases" },
  { label: "Forums & Communities", icon: "💬", desc: "Reddit, Quora, niche forums" },
  { label: "Video Platforms", icon: "🎥", desc: "YouTube, Vimeo, Reels" },
];

const faqs = [
  { q: "Why is personal brand monitoring important?", a: "Personal brand monitoring is important because what people find about you online can greatly impact your personal and professional life. It can influence hiring decisions, business opportunities, and even personal relationships. By monitoring your online presence, you can take control and ensure the information being shared is positive and accurate." },
  { q: "What should I monitor as part of my personal brand?", a: "Key elements to monitor include your social media profiles, online reviews and ratings, personal website or blog, and any mentions of your name or personal brand in the news or on forums. We track all of these on your behalf with real-time alerts." },
  { q: "How do I monitor my personal brand online?", a: "You can use tools such as Google Alerts, social media monitoring tools, and reputation management services. You can also regularly search for your name on various search engines. Our agency provides a comprehensive, automated monitoring service so you never miss a mention." },
  { q: "What can I do if I find negative information about myself online?", a: "First, assess whether the information is accurate. If so, address the issue and promote positive content. If not, take steps to have it removed or corrected. Our team handles all of this — from outreach to suppression to legal escalation where necessary." },
  { q: "How often should I monitor my personal brand online?", a: "We recommend monitoring your personal brand at least once a month. However, for public figures and high-profile individuals, continuous real-time monitoring is essential. Our agency provides ongoing 24/7 brand monitoring so you're always informed immediately." },
];

const testimonials = [
  { name: "Scott", role: "Business Owner", text: "I'm really happy with the results I've seen. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward.", initials: "SC" },
  { name: "Harold", role: "CEO", text: "Working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation.", initials: "HA" },
  { name: "Garima", role: "Public Figure", text: "They were professional, responsive, and delivered results. The difference in my online reputation is making a huge impact on my business. Highly recommend their monitoring services.", initials: "GA" },
  { name: "Kapil", role: "Healthcare Professional", text: "They helped me take control of my online presence. They removed negative content and helped me create a positive image on the web. I highly recommend them.", initials: "KA" },
  { name: "Jashmin", role: "Entrepreneur", text: "Outstanding service. The team understood my needs perfectly and delivered a monitoring system that keeps me informed and my reputation protected at all times.", initials: "JA" },
  { name: "Abhay", role: "Marketing Director", text: "I am so much happier with the results. They helped me clean up my online presence and improve my search results, which has been invaluable for my business growth.", initials: "AB" },
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

export default function PersonalBrandMonitoringPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── PAGE HERO - SaaS Dashboard Inspired ─────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] left-[-10%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] right-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              Brand Monitoring · 24/7 Protection
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Your Personal Brand Is a{" "}
              <span className="text-gradient-gold">Priceless Asset</span>{" "}
              — Protect It
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Maintain your priceless asset with the best Personal Brand Monitoring agency. Personal brand monitoring helps you stay on top of your reputation and handle issues before they get out of control.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {monitoringBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span>{b.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
              <a href="tel:+919971687251" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">Call: +91 99716 87251</a>
            </div>

            {/* Live monitoring indicator - Elevated UI */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-5">
              <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
                <span className="text-green-400 text-[0.65rem] font-bold uppercase tracking-widest">Live Monitoring Active</span>
              </div>
              <span className="text-zinc-500 text-xs font-medium">50+ platforms tracked simultaneously</span>
            </div>
          </div>

          {/* Right: Glassmorphic Form Panel */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">Start Monitoring Your Brand Today</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS - Asymmetrical Split Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Why Monitor</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Personal Brand Monitoring Helps You Understand <span className="heading-script text-brand-blue">What Audiences Think</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  It is very important to know about both positive mentions and negative comments about you or your company. This knowledge allows you to know when damage control is needed and proactively shapes the overall perception of your brand.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  Your personal brand can be damaged at any time — by a competitor, customer, ex-employee, or anyone. Whether it is a removal or a response, it is important to act quickly. Therefore, you need to monitor your personal brand and know how it stands up to the competition.
                </p>

                {/* Risk callout - SaaS style alert */}
                <div className="bg-red-50/80 border border-red-100 rounded-2xl p-6 mb-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-sm mb-1.5">Ignoring your brand reputation can cost you</p>
                      <p className="text-red-700/80 text-sm leading-relaxed">If your personal brand is present online, you need to worry about its reputation. Ignoring it might directly affect your revenue for a long time.</p>
                    </div>
                  </div>
                </div>

                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Start Brand Monitoring</Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Personal Brand Monitoring Dashboard"
                    className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Brand Health</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Actively Monitored</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 4 KEY BENEFITS - Staggered Bento Grid ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Key Benefits</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Your Personal Brand is Not About a Name or Logo — <span className="heading-script text-brand-blue">It&apos;s More Than That</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                We help with brand monitoring by making it easier to identify how people feel about your brand, informing your marketing decisions and helping you respond quickly.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringBenefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={i * 150}>
                <div className="group premium-info-card bg-white border border-zinc-200 rounded-3xl p-8 transition-all duration-400 relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)] h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-blue-50 group-hover:text-brand-blue group-hover:border-blue-100 transition-all duration-300 group-hover:scale-110 shadow-sm mb-6">
                    {b.icon}
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 text-lg mb-3 group-hover:text-brand-blue transition-colors">{b.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{b.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONITORING CHANNELS - Premium Dark Presentation ──────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">What We Monitor</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5">
                Channels We Track <span className="text-gradient-gold">For You</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] max-w-xl mx-auto">We monitor your personal brand across every major digital touchpoint, 24/7.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringChannels.map((c, i) => (
              <RevealOnScroll key={c.label} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex items-start gap-5 hover:bg-white/5 hover:border-brand-blue/40 transition-all duration-300 card-premium-hover">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl shadow-inner shrink-0 group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-base mb-1.5">{c.label}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={400}>
            <div className="mt-16 text-center">
              <Link href="#contact" className="btn-gold shadow-[0_10px_30px_rgba(194,148,10,0.25)] px-10 py-4">Schedule a Free Consultation</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── HOW TO MONITOR - Numbered Connected Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          <div className="premium-copy-panel pr-0 lg:pr-8">
            <RevealOnScroll>
              <p className="section-label mb-2 text-brand-gold">Our Methods</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                How to Monitor Your <span className="heading-script text-brand-blue">Personal Brand</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
                The more you monitor, the more you&apos;ll know about your brand and how it stands up to the competition. When you spot negative comments, we offer assistance, responses, and control the message being put out.
              </p>
            </RevealOnScroll>

            <div className="space-y-5 relative">
              {/* Connecting vertical line */}
              <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>

              {monitoringMethods.map((m, i) => (
                <RevealOnScroll key={m.title} delay={i * 100}>
                  <div className="group flex flex-col sm:flex-row items-start gap-5 p-5 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm">
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-1.5 group-hover:text-brand-blue transition-colors">{m.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <RevealOnScroll delay={200}>
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Brand Monitoring Strategy"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75" />
                  </div>
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Real-time Alerts</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

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
                  Brand Monitoring <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific situation? Contact our brand monitoring experts for a free assessment of your current online presence.
                </p>
                <a href="tel:+919971687251" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
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
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-blue">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Act Before It&apos;s Too Late</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let a Single Negative Google Result <span className="heading-script text-brand-blue">Ruin Your Business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation and let our experts assess your current brand health — identifying risks, monitoring gaps, and opportunities to strengthen your reputation immediately.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+91 99716-87251", href: "tel:+919971687251", icon: "📞" },
                  { label: "Secure Email", value: "info@onlinereputationbuilder.in", href: "mailto:info@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Dwarka, New Delhi, 110059", href: null, icon: "🏢" },
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