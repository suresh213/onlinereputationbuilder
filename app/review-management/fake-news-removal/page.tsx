// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const stats = [
//   { number: "12+", label: "Years Experience" },
//   { number: "98%", label: "Clients Satisfied" },
//   { number: "5000+", label: "Pieces Deleted" },
//   { number: "1200+", label: "Projects Worldwide" },
// ];

// const impacts = [
//   { label: "Potential clients may avoid working with you", icon: "👥" },
//   { label: "It can affect your brand's ranking in search results", icon: "📉" },
//   { label: "Your existing customers may lose confidence", icon: "💔" },
//   { label: "Competitors may take advantage of your weakened reputation", icon: "⚔️" },
// ];

// const importanceReasons = [
//   {
//     step: "01",
//     title: "Protect Your Reputation",
//     desc: "Fake news content can significantly damage personal and business credibility, impacting both short-term and long-term trust. If left unchecked, it can erode relationships with clients, partners, and the public, making it harder to rebuild your reputation.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Prevent Financial Losses",
//     desc: "Misleading information can cause businesses to lose clients and revenue, making it critical to take action quickly. The financial fallout from damaged trust can be far-reaching, affecting sales, partnerships, and even employee morale.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "Avoid Legal Consequences",
//     desc: "Some fake news can result in lawsuits or legal issues if left unaddressed, making removal a proactive solution. Legal claims can further harm your reputation and incur significant costs, making prompt action vital to avoid litigation.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
//       </svg>
//     ),
//   },
//   {
//     step: "04",
//     title: "Control Your Narrative",
//     desc: "By permanently removing harmful content, you regain control over how your brand is perceived online. Ensuring that accurate and positive information is visible allows you to present the true story and protect your image.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
//       </svg>
//     ),
//   },
// ];

// const expertProcess = [
//   { title: "Analyse the Source", desc: "We identify the origin of the fake news content, mapping its spread across platforms and assessing its potential reach and impact on your brand." },
//   { title: "Platform Communication", desc: "Our team communicates directly with platforms to request deletion, providing proper documentation and evidence to support each removal case." },
//   { title: "Advanced Suppression", desc: "We use advanced SEO and content strategies for suppressing unwanted or negative content that cannot be directly removed." },
//   { title: "Legal Assistance", desc: "Our legal partners help address any legal requirements, including DMCA notices, defamation claims, and court-ordered removal requests." },
//   { title: "Ongoing Monitoring", desc: "We provide continuous monitoring to ensure the content doesn't resurface and alert you immediately if any related content appears." },
// ];

// const faqs = [
//   { q: "What counts as 'fake news' for removal purposes?", a: "Fake news includes fabricated stories, doctored images, manipulated statistics, out-of-context information, and deliberately misleading articles published about your brand or name. We assess each case individually and build removal documentation based on the specific type of misinformation." },
//   { q: "How quickly does fake news spread online?", a: "Research shows that fake news spreads six times faster than true information on digital platforms. A false story about your brand can reach tens of thousands of people within hours. That's why rapid identification and removal is critical - every hour of delay amplifies the damage." },
//   { q: "Can you remove fake news from major news websites?", a: "We contact news publication editors directly with documented evidence of inaccuracies, request corrections or retractions, and file formal complaints with editorial boards. We also work with legal partners to pursue defamation claims where applicable, and simultaneously deploy suppression strategies." },
//   { q: "What if the platform refuses to remove the fake news?", a: "We escalate through legal channels and pursue suppression strategies in parallel - creating authoritative positive content that dominates search results for your brand name, effectively burying the false story. We continue monitoring to ensure it doesn't re-emerge." },
//   { q: "Does removing fake news improve my Google search results?", a: "Yes - removal or effective suppression of fake news directly improves your search results. As harmful pages are taken down or pushed beyond page one, your positive content fills the top positions. We track before/after search rankings as part of our reporting." },
// ];

// const testimonials = [
//   { name: "Rajesh K.", role: "Business Owner", text: "Fabricated stories were being shared about my company. The team had them removed and ensured they didn't resurface. Exceptional professionalism throughout.", initials: "RK" },
//   { name: "Priya S.", role: "Public Figure", text: "Fake news can destroy careers. These experts moved quickly, had the content removed from multiple platforms, and my reputation is fully restored.", initials: "PS" },
//   { name: "Amit T.", role: "CEO", text: "I was sceptical, but the results speak for themselves. The false articles are gone and my brand's search results are completely clean now.", initials: "AT" },
// ];

// export default function FakeNewsRemovalPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* ── HERO ─────────────────────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden">
//         <div className="hero-orb w-[500px] h-[500px] bg-brand-blue/10 top-[-120px] right-[-80px] absolute" />
//         <div className="hero-orb w-[320px] h-[320px] bg-brand-gold/8 bottom-[-60px] left-[-60px] absolute" style={{ animationDelay: "2s" }} />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60" />
//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-22 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em]">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-light opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-light" />
//               </span>
//               Fake News Removal · 12+ Years Experience
//             </div>
//             <h1 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-5 tracking-tight">
//               Remove{" "}
//               <span className="text-brand-gold-light">Fake News</span>{" "}
//               from the Searches - Protect Your Brand Today
//             </h1>
//             <p className="text-white/65 text-base mb-7 leading-relaxed">
//               With 12+ years of experience, we are a trustworthy name in fake news removal services. Our fake news removal services ensure that misleading content doesn&apos;t tarnish your online image. Protect your brand with efficient and reliable solutions.
//             </p>
//             <ul className="space-y-2 mb-8">
//               {["Immediate steps to address damaging news content", "Proven strategies for permanently removing harmful content", "Ensuring your digital presence remains trustworthy", "Skilled professionals dedicated to suppressing unwanted or negative content"].map((item) => (
//                 <li key={item} className="check-item text-[0.82rem] text-white/75">
//                   <span className="check-icon"><svg width="10" height="10" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 12 12"><path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5"/></svg></span>
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-3">
//               <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
//               <a href="tel:+918882788412" className="btn-outline">Call: +9188827 88412</a>
//             </div>
//             <div className="mt-8 pt-6 border-t border-white/8 flex items-center gap-3">
//               <div className="w-9 h-9 rounded-lg bg-red-500/20 border border-red-400/30 flex items-center justify-center flex-shrink-0">
//                 <svg width="16" height="16" className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
//               </div>
//               <p className="text-white/50 text-xs">Fake news spreads <span className="text-white/80 font-semibold">6× faster</span> than true information - every hour of delay amplifies the damage to your brand</p>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl pointer-events-none" />
//             <div className="relative bg-white rounded-xl p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-white/10">
//               <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-blue via-brand-gold to-transparent rounded-full -translate-y-px" />
//               <div className="flex items-center justify-between mb-5">
//                 <div>
//                   <p className="section-label text-brand-blue mb-1">Free Consultation</p>
//                   <h2 className="font-heading text-lg font-bold text-brand-dark leading-tight">We&apos;re Here to Help</h2>
//                 </div>
//                 <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
//                   <svg width="20" height="20" className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── STATS ────────────────────────────────────────────── */}
//       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
//             {stats.map((s) => (
//               <div key={s.label} className="stats-premium-item flex flex-col items-center gap-2 py-10 px-6">
//                 <p className="font-heading text-3xl font-extrabold text-white tracking-tight">{s.number}</p>
//                 <p className="text-zinc-400 text-[0.62rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── HOW FAKE NEWS AFFECTS YOU ─────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <p className="section-label mb-3">The Problem</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//                 What Problems You Face in News Removal
//               </h2>
//               <p className="text-zinc-500 leading-relaxed mb-5 text-sm">
//                 Fake news can spread rapidly, causing irreversible damage to personal or business reputations. Many platforms make it challenging to delete news content due to complex policies. Without professional help, it&apos;s difficult to navigate the legal and technical processes required to permanently remove such content.
//               </p>
//               <p className="text-zinc-500 leading-relaxed mb-7 text-sm">
//                 Fake news content can harm your credibility, leading to distrust among your audience and stakeholders. This negative impact can spread across platforms, causing long-term damage to your online presence.
//               </p>
//               {/* Impact grid */}
//               <div className="grid grid-cols-2 gap-3 mb-8">
//                 {impacts.map((item) => (
//                   <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 hover:border-red-200 transition-all">
//                     <span className="text-lg flex-shrink-0">{item.icon}</span>
//                     <p className="text-xs text-red-700 font-medium leading-snug">{item.label}</p>
//                   </div>
//                 ))}
//               </div>
//               <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
//             </div>
//             <div className="relative">
//               <div className="img-frame">
//                 <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" alt="How Fake News Affects Your Online Reputation" />
//               </div>
//               <div className="floating-badge absolute -bottom-4 -right-4 z-10 flex items-center gap-2.5">
//                 <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
//                   <svg width="16" height="16" className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
//                 </div>
//                 <div><p className="text-xs font-bold text-zinc-900">Content Removed</p><p className="text-[0.65rem] text-zinc-500">Reputation restored</p></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── IMPORTANCE OF REMOVAL ────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="section-label mb-3 justify-center">Why Remove</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 leading-tight">Importance of Removing Fake News From the Internet</h2>
//             <p className="text-zinc-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">Removing fake news is essential to safeguard your reputation and prevent future damage. Taking immediate action helps minimise the negative impact and allows you to maintain control over your online presence.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {importanceReasons.map((r) => (
//               <div key={r.step} className="group border border-zinc-200 rounded-xl p-6 bg-white hover:border-brand-blue/20 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="w-11 h-11 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-blue-50 group-hover:text-brand-blue group-hover:border-blue-100 transition-all">{r.icon}</div>
//                   <span className="text-[0.6rem] font-black text-zinc-200 font-mono">{r.step}</span>
//                 </div>
//                 <h3 className="font-bold text-zinc-900 text-sm mb-2 group-hover:text-brand-blue transition-colors">{r.title}</h3>
//                 <p className="text-xs text-zinc-500 leading-relaxed">{r.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── HOW EXPERTS HELP ─────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           <div className="relative">
//             <div className="img-frame">
//               <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Experts Help Remove Fake News" />
//             </div>
//           </div>
//           <div>
//             <p className="section-label mb-3">Our Approach</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">How Our Experts Help in Removing Fake News</h2>
//             <p className="text-zinc-500 leading-relaxed mb-7 text-sm">Our specialists take a comprehensive approach to help you remove fake news quickly and effectively. With our expertise, you can focus on your business while we handle the complicated processes.</p>
//             <div className="space-y-3">
//               {expertProcess.map((p, i) => (
//                 <div key={p.title} className="group flex items-start gap-4 p-4 rounded-xl border border-zinc-200 hover:border-brand-blue/20 hover:bg-blue-50/20 transition-all">
//                   <div className="step-number flex-shrink-0 text-xs">{String(i + 1).padStart(2, "0")}</div>
//                   <div>
//                     <h4 className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-brand-blue transition-colors">{p.title}</h4>
//                     <p className="text-xs text-zinc-500 leading-relaxed">{p.desc}</p>
//                   </div>
//                 </div>
//               ))}
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
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {testimonials.map((t) => (
//               <div key={t.name} className="testimonial-dark">
//                 <div className="flex text-brand-gold text-sm mb-4 gap-0.5">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
//                 <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
//                 <div className="flex items-center gap-3 border-t border-white/6 pt-4">
//                   <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0"><span className="text-white text-xs font-bold">{t.initials}</span></div>
//                   <div><p className="text-white font-bold text-sm">{t.name}</p><p className="text-zinc-500 text-xs">{t.role}</p></div>
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
//               <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight">Fake News Removal <span className="text-brand-blue">FAQs</span></h2>
//               <p className="text-zinc-400 text-sm leading-relaxed mb-7">Have a specific case? Our experts offer a free assessment of your fake news situation and present a clear removal plan.</p>
//               <a href="tel:+918882788412" className="btn-gold inline-flex items-center gap-2">
//                 <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//                 Call Us Now
//               </a>
//             </div>
//             <div className="lg:col-span-3"><FAQ items={faqs} /></div>
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT ───────────────────────────────────────────── */}
//       <section id="contact" className="py-20 px-4 bg-zinc-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
//         <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <p className="section-label text-brand-gold mb-3">Act Immediately</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">Don&apos;t Let Fake News Define Your Brand</h2>
//             <p className="text-zinc-400 leading-relaxed mb-8 text-sm max-w-lg">Schedule a free consultation. Every hour that fake news remains online, it continues to spread and damage your reputation. Our experts will assess your situation and act fast.</p>
//             <div className="space-y-0 mb-8">
//               {[{ label: "Hotline", value: "+9188827 88412", href: "tel:+918882788412" }, { label: "Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in" }, { label: "Location", value: "Shantipally, Behala, Kolkata - 700060", href: null }].map((item) => (
//                 <div key={item.label} className="contact-info-item">
//                   <div>
//                     <p className="text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
//                     {item.href ? <a href={item.href} className="text-white font-semibold text-sm hover:text-brand-gold-light transition-colors">{item.value}</a> : <p className="text-white text-sm">{item.value}</p>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a href="tel:+918882788412" className="btn-gold inline-flex items-center gap-2">
//               <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
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
// }/

"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Original Data Preserved Verbatim ─────────────────────────────────────── */

const stats = [
  { number: "12+", label: "Years Experience" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "5000+", label: "Pieces Deleted" },
  { number: "1200+", label: "Projects Worldwide" },
];

const impacts = [
  { label: "Potential clients may avoid working with you", icon: "👥" },
  { label: "It can affect your brand's ranking in search results", icon: "📉" },
  { label: "Your existing customers may lose confidence", icon: "💔" },
  { label: "Competitors may take advantage of your weakened reputation", icon: "⚔️" },
];

const importanceReasons = [
  {
    step: "01",
    title: "Protect Your Reputation",
    desc: "Fake news content can significantly damage personal and business credibility, impacting both short-term and long-term trust. If left unchecked, it can erode relationships with clients, partners, and the public, making it harder to rebuild your reputation.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Prevent Financial Losses",
    desc: "Misleading information can cause businesses to lose clients and revenue, making it critical to take action quickly. The financial fallout from damaged trust can be far-reaching, affecting sales, partnerships, and even employee morale.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Avoid Legal Consequences",
    desc: "Some fake news can result in lawsuits or legal issues if left unaddressed, making removal a proactive solution. Legal claims can further harm your reputation and incur significant costs, making prompt action vital to avoid litigation.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Control Your Narrative",
    desc: "By permanently removing harmful content, you regain control over how your brand is perceived online. Ensuring that accurate and positive information is visible allows you to present the true story and protect your image.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
];

const expertProcess = [
  { title: "Analyse the Source", desc: "We identify the origin of the fake news content, mapping its spread across platforms and assessing its potential reach and impact on your brand." },
  { title: "Platform Communication", desc: "Our team communicates directly with platforms to request deletion, providing proper documentation and evidence to support each removal case." },
  { title: "Advanced Suppression", desc: "We use advanced SEO and content strategies for suppressing unwanted or negative content that cannot be directly removed." },
  { title: "Legal Assistance", desc: "Our legal partners help address any legal requirements, including DMCA notices, defamation claims, and court-ordered removal requests." },
  { title: "Ongoing Monitoring", desc: "We provide continuous monitoring to ensure the content doesn't resurface and alert you immediately if any related content appears." },
];

const faqs = [
  { q: "What counts as 'fake news' for removal purposes?", a: "Fake news includes fabricated stories, doctored images, manipulated statistics, out-of-context information, and deliberately misleading articles published about your brand or name. We assess each case individually and build removal documentation based on the specific type of misinformation." },
  { q: "How quickly does fake news spread online?", a: "Research shows that fake news spreads six times faster than true information on digital platforms. A false story about your brand can reach tens of thousands of people within hours. That's why rapid identification and removal is critical - every hour of delay amplifies the damage." },
  { q: "Can you remove fake news from major news websites?", a: "We contact news publication editors directly with documented evidence of inaccuracies, request corrections or retractions, and file formal complaints with editorial boards. We also work with legal partners to pursue defamation claims where applicable, and simultaneously deploy suppression strategies." },
  { q: "What if the platform refuses to remove the fake news?", a: "We escalate through legal channels and pursue suppression strategies in parallel - creating authoritative positive content that dominates search results for your brand name, effectively burying the false story. We continue monitoring to ensure it doesn't re-emerge." },
  { q: "Does removing fake news improve my Google search results?", a: "Yes - removal or effective suppression of fake news directly improves your search results. As harmful pages are taken down or pushed beyond page one, your positive content fills the top positions. We track before/after search rankings as part of our reporting." },
];

const testimonials = [
  { name: "Rajesh K.", role: "Business Owner", text: "Fabricated stories were being shared about my company. The team had them removed and ensured they didn't resurface. Exceptional professionalism throughout.", initials: "RK" },
  { name: "Priya S.", role: "Public Figure", text: "Fake news can destroy careers. These experts moved quickly, had the content removed from multiple platforms, and my reputation is fully restored.", initials: "PS" },
  { name: "Amit T.", role: "CEO", text: "I was sceptical, but the results speak for themselves. The false articles are gone and my brand's search results are completely clean now.", initials: "AT" },
];

/* ─── Animation Components ───────────────────────────────────────── */

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

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
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
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function FakeNewsRemovalPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - High-End Security Layout with Integrated Image ────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                Fake News Removal · 12+ Years Experience
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Remove <span className="text-gradient-gold">Fake News</span> from the Searches - Protect Your Brand Today
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                With 12+ years of experience, we are a trustworthy name in fake news removal services. Our fake news removal services ensure that misleading content doesn&apos;t tarnish your online image. Protect your brand with efficient and reliable solutions.
              </p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {[
                  "Immediate steps to address damaging news content",
                  "Proven strategies for permanently removing harmful content",
                  "Ensuring your digital presence remains trustworthy",
                  "Skilled professionals dedicated to suppressing unwanted or negative content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Get A Free Consultation
                </Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  Call: +9188827 88412
                </a>
              </div>

              {/* Alert Ribbon */}
              <div className="glass-panel border-l-4 border-l-red-500 bg-white/5 rounded-r-xl p-4 md:p-5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-400/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    Fake news spreads <span className="text-white font-bold">6× faster</span> than true information - every hour of delay amplifies the damage to your brand.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Contact Form Over Image */}
          <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
            <RevealOnScroll delay={200} className="h-full">
              {/* Online Image as requested */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Security and Information Protection" 
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
              </div>

              {/* Form floating over the image */}
              <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      We&apos;re Here to Help
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="24" height="24" className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION - Animated Counters ────────────────────────────────────────────── */}
      <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
            {stats.map((s, i) => {
              // Extract numeric value and suffix for the animation component
              const num = parseInt(s.number.replace(/\D/g, ''));
              const suffix = s.number.replace(/\d/g, '');
              return (
                <RevealOnScroll key={s.label} delay={i * 100}>
                  <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
                    <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                      <AnimatedCounter end={num} suffix={suffix} duration={2500} />
                    </p>
                    <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">
                      {s.label}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM (Impacts) ─────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">The Problem</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  What Problems You Face in <span className="heading-script text-brand-blue">News Removal</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Fake news can spread rapidly, causing irreversible damage to personal or business reputations. Many platforms make it challenging to delete news content due to complex policies. Without professional help, it&apos;s difficult to navigate the legal and technical processes required to permanently remove such content.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  Fake news content can harm your credibility, leading to distrust among your audience and stakeholders. This negative impact can spread across platforms, causing long-term damage to your online presence.
                </p>
                
                {/* Impact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {impacts.map((item) => (
                    <div key={item.label} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-red-100 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300">
                      <span className="text-2xl flex-shrink-0 filter grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                      <p className="text-sm text-zinc-800 font-medium leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
                
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Get A Free Consultation
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" 
                    alt="How Fake News Affects Your Online Reputation" 
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100/80 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Content Removed</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Reputation restored</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── IMPORTANCE OF REMOVAL (Premium Grid) ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Why Remove</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Importance of Removing <span className="heading-script text-brand-blue">Fake News</span> From the Internet
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                Removing fake news is essential to safeguard your reputation and prevent future damage. Taking immediate action helps minimise the negative impact and allows you to maintain control over your online presence.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {importanceReasons.map((r, i) => (
              <RevealOnScroll key={r.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {r.icon}
                    </div>
                    <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-widest text-3xl">
                      {r.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{r.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{r.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW EXPERTS HELP - Vertical Connecting Process ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <RevealOnScroll>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                  alt="Experts Help Remove Fake News" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Approach</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                How Our Experts Help in <span className="heading-script text-brand-blue">Removing Fake News</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10 text-[0.95rem]">
                Our specialists take a comprehensive approach to help you remove fake news quickly and effectively. With our expertise, you can focus on your business while we handle the complicated processes.
              </p>
            </RevealOnScroll>

            {/* Vertical Process Timeline */}
            <div className="space-y-6 relative mb-8">
              <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
              {expertProcess.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 100}>
                  <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-1 flex-1">
                      <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-1.5 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS - Dark Glass Layout ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="ambient-glow-blue top-0 left-1/4 opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-[0.9rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
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
          <p className="section-label mb-2">Common Questions</p>
          
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            Fake News Removal{" "}
            <span className="heading-script text-brand-blue">
              FAQs
            </span>
          </h2>

          <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
            Have a specific case? Our experts offer a free assessment of your
            fake news situation and present a clear removal plan.
          </p>

          <a
            href="tel:+918882788412"
            className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5"
          >
            <svg width="16" height="16"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
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
              <p className="section-label text-brand-gold mb-3">Act Immediately</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let Fake News <span className="heading-script text-blue-400">Define Your Brand</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation. Every hour that fake news remains online, it continues to spread and damage your reputation. Our experts will assess your situation and act fast.
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