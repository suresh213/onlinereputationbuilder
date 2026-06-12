// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// /* ─── Data ──────────────────────────────────────────────────────── */

// const heroBenefits = [
//   "Craft compelling narratives to resonate with target audiences",
//   "Forge strong connections with journalists for impactful press coverage",
//   "Swiftly mitigate and navigate challenging PR situations",
//   "Enhance and safeguard brand image through strategic communications",
//   "Foster meaningful interactions to build trust and loyalty",
// ];

// const prServices = [
//   {
//     step: "01",
//     title: "Media Relations",
//     desc: "We forge strong, ongoing relationships with journalists, editors, and media outlets across India and globally. Our team secures impactful press coverage that elevates your brand's visibility and credibility in the market.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//       </svg>
//     ),
//     accent: "blue",
//   },
//   {
//     step: "02",
//     title: "Strategic Storytelling",
//     desc: "Every brand has a story worth telling. We craft compelling narratives that resonate deeply with your target audiences - converting passive readers into loyal brand advocates across every channel.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//       </svg>
//     ),
//     accent: "gold",
//   },
//   {
//     step: "03",
//     title: "Crisis Communication",
//     desc: "When reputation crises strike, speed and strategy are everything. We swiftly mitigate and navigate challenging PR situations, protecting your brand from long-term damage with expert crisis communication plans.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//     accent: "blue",
//   },
//   {
//     step: "04",
//     title: "Brand Image Management",
//     desc: "We enhance and safeguard your brand image through strategic communications - building a consistent, positive narrative across all touchpoints to shape how the world perceives you.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     accent: "gold",
//   },
//   {
//     step: "05",
//     title: "Community Engagement",
//     desc: "We foster meaningful interactions between your brand and its audiences - building trust, loyalty, and long-term relationships that translate into sustained business growth and advocacy.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//       </svg>
//     ),
//     accent: "blue",
//   },
//   {
//     step: "06",
//     title: "Press Release Distribution",
//     desc: "We write, distribute, and pitch press releases to the right journalists and publications across 50+ Indian and international media outlets - ensuring your news reaches the audiences that matter most.",
//     icon: (
//       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//       </svg>
//     ),
//     accent: "gold",
//   },
// ];

// // 50+ media outlets - text-only since images aren't available
// const mediaOutlets = [
//   "1st India", "ABP News", "Ahmedabad Live", "Ahmedabad Mirror",
//   "Analytics Insight", "Author", "Bollywood Hungama", "Breezy",
//   "Business Today", "BW Businessworld", "Chronicle", "DriveSpark",
//   "English Jagran", "Excelsior", "FilmiBeat", "G+", "Gizbot",
//   "Goa Chronicle", "Good Returns", "Health Shorts", "IBT",
//   "India.com", "India TV", "Jagran Josh", "Khabar India",
//   "Latestly", "Live Hindustan", "Lokmat Times", "Mid-Day",
//   "Navbharat Times", "NDTV Profit", "News18", "Oneindia",
//   "Outlook India", "Punjab Kesari", "Sakshi Post", "Scroll.in",
//   "Swarajya", "The Hans India", "The Hindu BusinessLine",
//   "The Quint", "Times of India", "Tribune India", "TV9 Bharatvarsh",
//   "Zee Business", "Zee News", "Deccan Herald", "Financial Express",
//   "Business Standard", "Hindustan Times", "Economic Times",
// ];

// const whyPR = [
//   {
//     title: "Brand Visibility",
//     desc: "PR amplifies your brand's presence across the media landscape - print, digital, broadcast - ensuring you're seen by the audiences that drive decisions.",
//     icon: "📢",
//     stat: "3x",
//     statLabel: "more credible than paid ads",
//   },
//   {
//     title: "Credibility & Trust",
//     desc: "Third-party editorial coverage builds trust that advertising simply cannot buy. Media features and expert positioning make your brand the go-to authority in your industry.",
//     icon: "🏆",
//     stat: "87%",
//     statLabel: "trust editorial coverage",
//   },
//   {
//     title: "SEO & Digital Reach",
//     desc: "High-authority media mentions generate powerful backlinks and improve your Google rankings - your PR investment creates compounding digital value over time.",
//     icon: "🔍",
//     stat: "50+",
//     statLabel: "premium media placements",
//   },
//   {
//     title: "Crisis Protection",
//     desc: "A proactive PR strategy means you control the narrative before a crisis hits - not after. We prepare, monitor, and respond so your reputation stays intact.",
//     icon: "🛡️",
//     stat: "24/7",
//     statLabel: "reputation monitoring",
//   },
// ];

// const prProcess = [
//   {
//     number: "01",
//     title: "Discovery & Brand Audit",
//     desc: "We begin with a comprehensive analysis of your brand, competitive landscape, target audiences, and current media footprint - creating a clear baseline and opportunity map.",
//   },
//   {
//     number: "02",
//     title: "PR Strategy Development",
//     desc: "Our team crafts a tailored PR strategy aligned with your business goals - identifying key messages, target publications, story angles, and a 90-day execution roadmap.",
//   },
//   {
//     number: "03",
//     title: "Content Creation & Pitching",
//     desc: "We write compelling press releases, thought leadership articles, and media pitches - then proactively distribute them to our network of 50+ curated journalists and publications.",
//   },
//   {
//     number: "04",
//     title: "Media Placements & Coverage",
//     desc: "We secure confirmed editorial placements in relevant publications, coordinate interviews, and manage all journalist relationships on your behalf for seamless execution.",
//   },
//   {
//     number: "05",
//     title: "Monitoring & Amplification",
//     desc: "We monitor every mention and coverage piece in real time - then amplify earned media across your own channels to maximise the reach and longevity of every placement.",
//   },
//   {
//     number: "06",
//     title: "Reporting & Optimisation",
//     desc: "Monthly performance reports track media reach, sentiment, backlink value, and share of voice - with ongoing strategy refinements to continuously improve results.",
//   },
// ];

// const faqs = [
//   {
//     q: "What is Public Relations and why does my brand need it?",
//     a: "Public Relations is a multifaceted discipline dedicated to managing and enhancing the reputation of individuals, organisations, or brands. Your brand needs PR because it builds credibility through third-party editorial coverage, controls your narrative, reaches new audiences, and creates compounding SEO value - all of which paid advertising cannot replicate.",
//   },
//   {
//     q: "How is PR different from advertising?",
//     a: "Advertising is paid placement where you control the message entirely. PR is earned media - journalists and editors independently choose to cover your brand, which makes it far more credible and trusted by audiences. A PR mention in a top publication carries significantly more weight than a paid ad in the same outlet.",
//   },
//   {
//     q: "How long does it take to see PR results?",
//     a: "Initial media placements can appear within 4–8 weeks. A full PR campaign typically shows measurable brand visibility improvements within 3 months, with compounding effects over 6–12 months. Crisis PR responses are activated within hours. We provide monthly reports so you always know the status of every placement.",
//   },
//   {
//     q: "Which media outlets do you work with?",
//     a: "We work with 50+ Indian and international media outlets including major national publications, regional newspapers, digital news portals, industry trade publications, and broadcast media. Our network spans English, Hindi, and regional language publications across every major sector.",
//   },
//   {
//     q: "Can PR help with online reputation management?",
//     a: "Absolutely - PR and ORM work hand in hand. Positive media placements push down negative search results, establish your brand as credible, and create a strong positive content footprint that shapes how people perceive you when they search your name or brand online.",
//   },
//   {
//     q: "Do you handle crisis PR as well?",
//     a: "Yes. Crisis communication is one of our core specialisations. We develop proactive crisis PR plans, monitor for emerging issues 24/7, and provide rapid-response media communications when crises arise - protecting your reputation and minimising long-term damage.",
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
//     name: "Juli",
//     role: "Marketing Director",
//     text: "I was really impressed with the level of personalization and attention to detail. They took the time to understand my business and tailor their services to my specific needs.",
//     initials: "JU",
//   },
//   {
//     name: "Harold",
//     role: "CEO",
//     text: "Working with this company was a completely different experience. Professional, responsive, and they delivered results. The difference in my online reputation is making a huge impact.",
//     initials: "HA",
//   },
// ];

// /* ─── Page ──────────────────────────────────────────────────────── */

// export default function PublicRelationPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* ── HERO ─────────────────────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden">
//         {/* Ambient orbs */}
//         <div className="hero-orb w-[520px] h-[520px] bg-brand-blue/10 top-[-120px] right-[-100px] absolute" />
//         <div
//           className="hero-orb w-[360px] h-[360px] bg-brand-gold/8 bottom-[-80px] left-[-60px] absolute"
//           style={{ animationDelay: "2s" }}
//         />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-22 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
//           {/* Left */}
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em]">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-light opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-light" />
//               </span>
//               Public Relations · India&apos;s Trusted PR Agency
//             </div>

//             <h1 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-5 tracking-tight">
//               Your Trusted Partner in{" "}
//               <span className="text-brand-gold-light">Public Relations</span>{" "}
//               Excellence
//             </h1>

//             <p className="text-white/65 text-base mb-7 leading-relaxed">
//               Public Relations is a multifaceted discipline dedicated to managing and
//               enhancing the reputation of individuals, organisations, or brands. We ensure
//               your brand&apos;s story resonates with the right audiences, amplifying its
//               presence and impact in the market.
//             </p>

//             <ul className="space-y-2 mb-8">
//               {heroBenefits.map((item) => (
//                 <li key={item} className="check-item text-[0.82rem] text-white/75">
//                   <span className="check-icon">
//                     <svg
//                       className="w-2.5 h-2.5"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2.5}
//                       viewBox="0 0 12 12"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
//                     </svg>
//                   </span>
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-3 mb-8">
//               <Link href="#contact" className="btn-gold">
//                 Get A Free Consultation
//               </Link>
//               <a href="tel:+918882788412" className="btn-outline">
//                 Call: +9188827 88412
//               </a>
//             </div>

//             {/* Media network teaser */}
//             <div className="pt-6 border-t border-white/8">
//               <p className="text-white/40 text-[0.62rem] uppercase tracking-widest mb-3 font-bold">
//                 We secure coverage across 50+ media outlets including
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Times of India", "NDTV", "Hindustan Times", "Economic Times",
//                   "Business Standard", "ABP News", "News18", "Zee Business",
//                 ].map((name) => (
//                   <span
//                     key={name}
//                     className="inline-block px-2.5 py-1 rounded bg-white/6 border border-white/10 text-white/50 text-[0.62rem] font-semibold tracking-wide hover:bg-white/10 hover:text-white/80 transition-all"
//                   >
//                     {name}
//                   </span>
//                 ))}
//                 <span className="inline-block px-2.5 py-1 rounded bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[0.62rem] font-bold tracking-wide">
//                   +40 more
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Contact Form */}
//           <div className="relative">
//             <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl pointer-events-none" />
//             <div className="relative bg-white rounded-xl p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-white/10">
//               <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-blue via-brand-gold to-transparent rounded-full -translate-y-px" />
//               <div className="flex items-center justify-between mb-5">
//                 <div>
//                   <p className="section-label text-brand-blue mb-1">Free Consultation</p>
//                   <h2 className="font-heading text-lg font-bold text-brand-dark leading-tight">
//                     Elevate Your Brand with Expert PR
//                   </h2>
//                 </div>
//                 <div className="w-10 h-10 rounded-lg bg-brand-blue/8 border border-brand-blue/15 flex items-center justify-center flex-shrink-0">
//                   <svg
//                     className="w-5 h-5 text-brand-blue"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── BUILD A STRONG BRAND ─────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <p className="section-label mb-3">Why PR Matters</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//                 Build A Strong Brand With A PR Agency
//               </h2>
//               <p className="text-zinc-500 leading-relaxed mb-5 text-sm">
//                 Elevate your brand to new heights with your trusted PR agency partner. Our
//                 dedicated team specialises in crafting tailored strategies to enhance brand
//                 visibility, credibility, and influence.
//               </p>
//               <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
//                 With a focus on strategic storytelling and media relations, we amplify your
//                 brand&apos;s message across diverse channels, captivating audiences and
//                 driving engagement. From media campaigns to crisis management, our
//                 comprehensive services are designed to build lasting connections with your
//                 target audience.
//               </p>

//               {/* 4 impact pillars */}
//               <div className="grid grid-cols-2 gap-3 mb-8">
//                 {whyPR.map((w) => (
//                   <div
//                     key={w.title}
//                     className="group bg-zinc-50 border border-zinc-200 rounded-xl p-4 hover:border-brand-blue/20 hover:bg-blue-50/30 transition-all"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-xl">{w.icon}</span>
//                       <span className="font-heading text-xl font-black text-brand-blue leading-none">
//                         {w.stat}
//                       </span>
//                     </div>
//                     <p className="font-bold text-zinc-900 text-xs mb-1 group-hover:text-brand-blue transition-colors">
//                       {w.title}
//                     </p>
//                     <p className="text-[0.62rem] text-zinc-400 leading-snug">{w.statLabel}</p>
//                   </div>
//                 ))}
//               </div>

//               <Link href="#contact" className="btn-gold">
//                 Get Started
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="img-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
//                   alt="PR Strategy and Media Relations"
//                 />
//               </div>
//               <div className="floating-badge absolute -bottom-4 -left-4 z-10 flex items-center gap-2.5">
//                 <div className="w-9 h-9 rounded-full bg-brand-blue/10 flex items-center justify-center">
//                   <svg
//                     className="w-4 h-4 text-brand-blue"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-zinc-900">Media Reach</p>
//                   <p className="text-[0.65rem] text-zinc-500">50+ Premium Outlets</p>
//                 </div>
//               </div>
//               <div
//                 className="floating-badge absolute -top-4 -right-4 z-10"
//                 style={{ animationDelay: "1.5s" }}
//               >
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                   <p className="text-xs font-bold text-zinc-900">Coverage Active</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── PR SERVICES GRID ─────────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="section-label mb-3 justify-center">Our PR Services</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
//               Comprehensive PR Services to Strengthen Your{" "}
//               <span className="text-brand-blue">Brand&apos;s</span> Voice
//             </h2>
//             <p className="text-zinc-400 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
//               From media relations to crisis communication, every PR service we offer is
//               built around one goal: making your brand impossible to ignore.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {prServices.map((s) => (
//               <div
//                 key={s.step}
//                 className="service-card group flex flex-col h-full"
//               >
//                 <div className="flex items-start justify-between mb-5">
//                   <div className="service-icon-wrap">{s.icon}</div>
//                   <span className="text-[0.6rem] font-black text-zinc-200 group-hover:text-zinc-300 transition-colors font-mono tracking-wider">
//                     {s.step}
//                   </span>
//                 </div>
//                 <h3 className="font-heading font-bold text-base text-zinc-900 mb-2.5 group-hover:text-brand-blue transition-colors">
//                   {s.title}
//                 </h3>
//                 <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── OUR PR PROCESS ───────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             {/* Left: process steps */}
//             <div>
//               <p className="section-label mb-3">Our Process</p>
//               <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//                 How We Build Your PR Strategy
//               </h2>
//               <p className="text-zinc-500 text-sm leading-relaxed mb-8">
//                 A structured, transparent process from strategy to execution - you always
//                 know exactly what we&apos;re doing and why.
//               </p>

//               <div className="space-y-2">
//                 {prProcess.map((step, i) => (
//                   <div
//                     key={step.number}
//                     className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 transition-all"
//                   >
//                     <div className="step-number flex-shrink-0 text-sm">{step.number}</div>
//                     <div>
//                       <h4 className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-brand-blue transition-colors">
//                         {step.title}
//                       </h4>
//                       <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right: image + stats */}
//             <div className="relative">
//               <div className="img-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
//                   alt="PR Process and Strategy"
//                 />
//               </div>
//               <div className="mt-5 grid grid-cols-3 gap-3">
//                 {[
//                   { number: "50+", label: "Media Outlets" },
//                   { number: "10+", label: "Years Experience" },
//                   { number: "250+", label: "Brands Served" },
//                 ].map((s) => (
//                   <div
//                     key={s.label}
//                     className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center hover:border-brand-blue/20 hover:bg-blue-50/30 transition-all"
//                   >
//                     <p className="font-heading text-2xl font-black text-brand-blue mb-0.5">
//                       {s.number}
//                     </p>
//                     <p className="text-[0.65rem] text-zinc-400 font-semibold uppercase tracking-widest">
//                       {s.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── MEDIA NETWORK ────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-[#070d1a] border-b border-zinc-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-70 pointer-events-none" />
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <p className="section-label text-brand-gold mb-3 justify-center">
//               Our Media Network
//             </p>
//             <h2 className="font-heading text-3xl font-bold text-white mb-4">
//               We Remove Negative Content From 50+ Sites &amp; Secure Coverage Across Them
//             </h2>
//             <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
//               Our established relationships with journalists and editors at India&apos;s top
//               media outlets mean faster placements, better coverage, and maximum reach for
//               your brand&apos;s story.
//             </p>
//           </div>

//           {/* Outlet grid - premium pill style */}
//           <div className="flex flex-wrap gap-2.5 justify-center mb-12">
//             {mediaOutlets.map((name, i) => (
//               <div
//                 key={name}
//                 className={`group px-3.5 py-2 rounded-lg border text-xs font-semibold tracking-wide transition-all cursor-default ${
//                   i % 7 === 0
//                     ? "border-brand-gold/30 bg-brand-gold/8 text-brand-gold/80 hover:bg-brand-gold/15 hover:text-brand-gold"
//                     : i % 5 === 0
//                     ? "border-brand-blue/30 bg-brand-blue/8 text-brand-blue/80 hover:bg-brand-blue/15 hover:text-blue-300"
//                     : "border-zinc-700 bg-white/4 text-zinc-400 hover:bg-white/8 hover:text-zinc-200 hover:border-zinc-500"
//                 }`}
//               >
//                 {name}
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link href="#contact" className="btn-gold">
//               Secure Your Media Coverage
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY CHOOSE US - dark feature strip ───────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="section-label mb-3 justify-center">Why Choose Us</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 leading-tight">
//               The PR Agency That Builds Brands,{" "}
//               <span className="text-brand-blue">Protects Reputations</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
//             {[
//               {
//                 title: "Integrated PR + ORM Approach",
//                 desc: "Unlike standalone PR agencies, we combine Public Relations with Online Reputation Management - giving your brand a 360° positive media presence that's protected, consistent, and conversion-ready.",
//                 icon: (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "50+ Media Outlet Network",
//                 desc: "Our curated network of journalist relationships across 50+ premium Indian media outlets means your stories reach the right desks - and get published, not ignored.",
//                 icon: (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Tailored Strategies, Not Templates",
//                 desc: "Every PR strategy we build is custom-designed for your specific brand, industry, audience, and goals. We never use one-size-fits-all approaches or recycled campaign templates.",
//                 icon: (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                   </svg>
//                 ),
//               },
//               {
//                 title: "Transparent Monthly Reporting",
//                 desc: "You always know exactly what we did, where your brand was mentioned, how many people it reached, and what the tangible business impact was - no vague metrics or vanity numbers.",
//                 icon: (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 ),
//               },
//             ].map((f) => (
//               <div
//                 key={f.title}
//                 className="group border border-zinc-200 rounded-xl p-6 bg-white hover:border-brand-blue/20 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-300 relative overflow-hidden"
//               >
//                 <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-blue-50 group-hover:text-brand-blue group-hover:border-blue-100 transition-all flex-shrink-0">
//                     {f.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-zinc-900 text-sm mb-2 group-hover:text-brand-blue transition-colors">
//                       {f.title}
//                     </h4>
//                     <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ─────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-[#070d1a] relative overflow-hidden border-b border-zinc-900">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-12">
//             <p className="section-label text-brand-gold mb-3 justify-center">
//               Client Testimonials
//             </p>
//             <h2 className="font-heading text-3xl font-bold text-white">
//               What Our Clients Say
//             </h2>
//             <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
//               We pay attention to details and quality, good communication and strong customer
//               relationships.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {testimonials.map((t) => (
//               <div key={t.name} className="testimonial-dark">
//                 <div className="flex text-brand-gold text-sm mb-4 gap-0.5">
//                   {"★★★★★".split("").map((s, i) => (
//                     <span key={i}>{s}</span>
//                   ))}
//                 </div>
//                 <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
//                   &ldquo;{t.text}&rdquo;
//                 </p>
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
//                 Public Relations <span className="text-brand-blue">FAQs</span>
//               </h2>
//               <p className="text-zinc-400 text-sm leading-relaxed mb-7">
//                 Have a specific question about our PR services? Our experts offer a free,
//                 no-obligation consultation to assess your brand&apos;s media needs.
//               </p>
//               <a
//                 href="tel:+918882788412"
//                 className="btn-gold inline-flex items-center gap-2"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                 </svg>
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
//             <p className="section-label text-brand-gold mb-3">Let&apos;s Talk PR</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
//               Ready to Amplify Your Brand&apos;s Story Across India&apos;s Top Media?
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-8 text-sm max-w-lg">
//               Schedule a free PR consultation today. Our team will assess your brand&apos;s
//               media presence, identify the right publications, and present a clear PR
//               strategy - with no obligation.
//             </p>

//             {/* Contact info list */}
//             <div className="space-y-0 mb-8">
//               {[
//                 {
//                   label: "Hotline",
//                   value: "+9188827 88412",
//                   href: "tel:+918882788412",
//                 },
//                 {
//                   label: "Email",
//                   value: "contact@onlinereputationbuilder.in",
//                   href: "mailto:contact@onlinereputationbuilder.in",
//                 },
//                 {
//                   label: "Location",
//                   value: "Shantipally, Behala, Kolkata - 700060",
//                   href: null,
//                 },
//               ].map((item) => (
//                 <div key={item.label} className="contact-info-item">
//                   <div>
//                     <p className="text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-0.5">
//                       {item.label}
//                     </p>
//                     {item.href ? (
//                       <a
//                         href={item.href}
//                         className="text-white font-semibold text-sm hover:text-brand-gold-light transition-colors"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-white text-sm">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <a
//               href="tel:+918882788412"
//               className="btn-gold inline-flex items-center gap-2"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//               </svg>
//               Call Now
//             </a>
//           </div>

//           {/* Dark form panel */}
//           <div className="relative">
//             <div className="absolute -inset-3 bg-brand-blue/8 rounded-2xl blur-xl pointer-events-none" />
//             <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-7 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
//               <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
//               <p className="text-white font-bold text-base mb-1">Send Us a Message</p>
//               <p className="text-zinc-500 text-xs mb-5">
//                 We respond within 24 hours on business days.
//               </p>
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

/* ─── Data ──────────────────────────────────────────────────────── */

const heroBenefits = [
  "Craft compelling narratives to resonate with target audiences",
  "Forge strong connections with journalists for impactful press coverage",
  "Swiftly mitigate and navigate challenging PR situations",
  "Enhance and safeguard brand image through strategic communications",
  "Foster meaningful interactions to build trust and loyalty",
];

const prServices = [
  {
    step: "01",
    title: "Media Relations",
    desc: "We forge strong, ongoing relationships with journalists, editors, and media outlets across India and globally. Our team secures impactful press coverage that elevates your brand's visibility and credibility in the market.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    step: "02",
    title: "Strategic Storytelling",
    desc: "Every brand has a story worth telling. We craft compelling narratives that resonate deeply with your target audiences - converting passive readers into loyal brand advocates across every channel.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    accent: "gold",
  },
  {
    step: "03",
    title: "Crisis Communication",
    desc: "When reputation crises strike, speed and strategy are everything. We swiftly mitigate and navigate challenging PR situations, protecting your brand from long-term damage with expert crisis communication plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    step: "04",
    title: "Brand Image Management",
    desc: "We enhance and safeguard your brand image through strategic communications - building a consistent, positive narrative across all touchpoints to shape how the world perceives you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: "gold",
  },
  {
    step: "05",
    title: "Community Engagement",
    desc: "We foster meaningful interactions between your brand and its audiences - building trust, loyalty, and long-term relationships that translate into sustained business growth and advocacy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: "blue",
  },
  {
    step: "06",
    title: "Press Release Distribution",
    desc: "We write, distribute, and pitch press releases to the right journalists and publications across 50+ Indian and international media outlets - ensuring your news reaches the audiences that matter most.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    accent: "gold",
  },
];

// 50+ media outlets - text-only since images aren't available
const mediaOutlets = [
  "1st India", "ABP News", "Ahmedabad Live", "Ahmedabad Mirror",
  "Analytics Insight", "Author", "Bollywood Hungama", "Breezy",
  "Business Today", "BW Businessworld", "Chronicle", "DriveSpark",
  "English Jagran", "Excelsior", "FilmiBeat", "G+", "Gizbot",
  "Goa Chronicle", "Good Returns", "Health Shorts", "IBT",
  "India.com", "India TV", "Jagran Josh", "Khabar India",
  "Latestly", "Live Hindustan", "Lokmat Times", "Mid-Day",
  "Navbharat Times", "NDTV Profit", "News18", "Oneindia",
  "Outlook India", "Punjab Kesari", "Sakshi Post", "Scroll.in",
  "Swarajya", "The Hans India", "The Hindu BusinessLine",
  "The Quint", "Times of India", "Tribune India", "TV9 Bharatvarsh",
  "Zee Business", "Zee News", "Deccan Herald", "Financial Express",
  "Business Standard", "Hindustan Times", "Economic Times",
];

const whyPR = [
  {
    title: "Brand Visibility",
    desc: "PR amplifies your brand's presence across the media landscape - print, digital, broadcast - ensuring you're seen by the audiences that drive decisions.",
    icon: "📢",
    stat: 3,
    suffix: "x",
    statLabel: "more credible than paid ads",
  },
  {
    title: "Credibility & Trust",
    desc: "Third-party editorial coverage builds trust that advertising simply cannot buy. Media features and expert positioning make your brand the go-to authority in your industry.",
    icon: "🏆",
    stat: 87,
    suffix: "%",
    statLabel: "trust editorial coverage",
  },
  {
    title: "SEO & Digital Reach",
    desc: "High-authority media mentions generate powerful backlinks and improve your Google rankings - your PR investment creates compounding digital value over time.",
    icon: "🔍",
    stat: 50,
    suffix: "+",
    statLabel: "premium media placements",
  },
  {
    title: "Crisis Protection",
    desc: "A proactive PR strategy means you control the narrative before a crisis hits - not after. We prepare, monitor, and respond so your reputation stays intact.",
    icon: "🛡️",
    stat: 24,
    suffix: "/7",
    statLabel: "reputation monitoring",
  },
];

const prProcess = [
  {
    number: "01",
    title: "Discovery & Brand Audit",
    desc: "We begin with a comprehensive analysis of your brand, competitive landscape, target audiences, and current media footprint - creating a clear baseline and opportunity map.",
  },
  {
    number: "02",
    title: "PR Strategy Development",
    desc: "Our team crafts a tailored PR strategy aligned with your business goals - identifying key messages, target publications, story angles, and a 90-day execution roadmap.",
  },
  {
    number: "03",
    title: "Content Creation & Pitching",
    desc: "We write compelling press releases, thought leadership articles, and media pitches - then proactively distribute them to our network of 50+ curated journalists and publications.",
  },
  {
    number: "04",
    title: "Media Placements & Coverage",
    desc: "We secure confirmed editorial placements in relevant publications, coordinate interviews, and manage all journalist relationships on your behalf for seamless execution.",
  },
  {
    number: "05",
    title: "Monitoring & Amplification",
    desc: "We monitor every mention and coverage piece in real time - then amplify earned media across your own channels to maximise the reach and longevity of every placement.",
  },
  {
    number: "06",
    title: "Reporting & Optimisation",
    desc: "Monthly performance reports track media reach, sentiment, backlink value, and share of voice - with ongoing strategy refinements to continuously improve results.",
  },
];

const faqs = [
  {
    q: "What is Public Relations and why does my brand need it?",
    a: "Public Relations is a multifaceted discipline dedicated to managing and enhancing the reputation of individuals, organisations, or brands. Your brand needs PR because it builds credibility through third-party editorial coverage, controls your narrative, reaches new audiences, and creates compounding SEO value - all of which paid advertising cannot replicate.",
  },
  {
    q: "How is PR different from advertising?",
    a: "Advertising is paid placement where you control the message entirely. PR is earned media - journalists and editors independently choose to cover your brand, which makes it far more credible and trusted by audiences. A PR mention in a top publication carries significantly more weight than a paid ad in the same outlet.",
  },
  {
    q: "How long does it take to see PR results?",
    a: "Initial media placements can appear within 4–8 weeks. A full PR campaign typically shows measurable brand visibility improvements within 3 months, with compounding effects over 6–12 months. Crisis PR responses are activated within hours. We provide monthly reports so you always know the status of every placement.",
  },
  {
    q: "Which media outlets do you work with?",
    a: "We work with 50+ Indian and international media outlets including major national publications, regional newspapers, digital news portals, industry trade publications, and broadcast media. Our network spans English, Hindi, and regional language publications across every major sector.",
  },
  {
    q: "Can PR help with online reputation management?",
    a: "Absolutely - PR and ORM work hand in hand. Positive media placements push down negative search results, establish your brand as credible, and create a strong positive content footprint that shapes how people perceive you when they search your name or brand online.",
  },
  {
    q: "Do you handle crisis PR as well?",
    a: "Yes. Crisis communication is one of our core specialisations. We develop proactive crisis PR plans, monitor for emerging issues 24/7, and provide rapid-response media communications when crises arise - protecting your reputation and minimising long-term damage.",
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
    name: "Juli",
    role: "Marketing Director",
    text: "I was really impressed with the level of personalization and attention to detail. They took the time to understand my business and tailor their services to my specific needs.",
    initials: "JU",
  },
  {
    name: "Harold",
    role: "CEO",
    text: "Working with this company was a completely different experience. Professional, responsive, and they delivered results. The difference in my online reputation is making a huge impact.",
    initials: "HA",
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

// Smooth Animated Counter Component
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
      
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function PublicRelationPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - Executive Authority Layout ─────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        {/* Ambient orbs */}
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
          {/* Left */}
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Public Relations · India&apos;s Trusted PR Agency
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
              Your Trusted Partner in{" "}
              <span className="text-gradient-gold">Public Relations</span>{" "}
              Excellence
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Public Relations is a multifaceted discipline dedicated to managing and
              enhancing the reputation of individuals, organisations, or brands. We ensure
              your brand&apos;s story resonates with the right audiences, amplifying its
              presence and impact in the market.
            </p>

            <ul className="space-y-3 mb-10 max-w-xl">
              {heroBenefits.map((item) => (
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

            {/* Media network teaser - Elegant Text Pills */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest mb-4 font-bold">
                We secure coverage across 50+ media outlets including
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Times of India", "NDTV", "Hindustan Times", "Economic Times",
                  "Business Standard", "ABP News", "News18", "Zee Business",
                ].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all text-xs font-medium shadow-sm backdrop-blur-sm cursor-default"
                  >
                    {name}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-bold shadow-sm backdrop-blur-sm">
                  +40 more
                </span>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">
                    Elevate Your Brand with Expert PR
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg
                    className="w-5 h-5 text-brand-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILD A STRONG BRAND - Animated Stats ─────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Why PR Matters</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Build A Strong Brand With A <span className="heading-script text-brand-blue">PR Agency</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  Elevate your brand to new heights with your trusted PR agency partner. Our
                  dedicated team specialises in crafting tailored strategies to enhance brand
                  visibility, credibility, and influence.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  With a focus on strategic storytelling and media relations, we amplify your
                  brand&apos;s message across diverse channels, captivating audiences and
                  driving engagement. From media campaigns to crisis management, our
                  comprehensive services are designed to build lasting connections with your
                  target audience.
                </p>

                {/* 4 impact pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {whyPR.map((w) => (
                    <div
                      key={w.title}
                      className="group premium-info-card bg-white border border-zinc-200 shadow-sm rounded-2xl p-5 hover:border-brand-blue/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-3">
                        <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all">{w.icon}</span>
                        <span className="font-heading text-2xl font-black text-brand-blue leading-none">
                          <AnimatedCounter end={w.stat} suffix={w.suffix} duration={2000} />
                        </span>
                      </div>
                      <p className="font-bold text-zinc-900 text-[0.85rem] mb-1 group-hover:text-brand-blue transition-colors">
                        {w.title}
                      </p>
                      <p className="text-[0.7rem] text-zinc-500 leading-snug">{w.statLabel}</p>
                    </div>
                  ))}
                </div>

                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Get Started Today
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                    alt="PR Strategy and Media Relations"
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Media Reach</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">50+ Premium Outlets</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 z-20 glass-panel-light px-4 py-3 rounded-xl border border-white shadow-xl flex items-center gap-3">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                  </div>
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Coverage Active</p>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── PR SERVICES GRID - Elevated Staggered Design ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our PR Services</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Comprehensive PR Services to Strengthen Your{" "}
                <span className="heading-script text-brand-blue">Brand&apos;s Voice</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                From media relations to crisis communication, every PR service we offer is
                built around one goal: making your brand impossible to ignore.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {prServices.map((s, i) => (
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

      {/* ── OUR PR PROCESS - Connected Vertical Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          
          <div className="premium-copy-panel pr-0 lg:pr-8">
            <RevealOnScroll>
              <p className="section-label mb-2 text-brand-gold">Our Process</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                How We Build Your <span className="heading-script text-brand-blue">PR Strategy</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-10">
                A structured, transparent process from strategy to execution - you always
                know exactly what we&apos;re doing and why.
              </p>
            </RevealOnScroll>

            <div className="space-y-6 relative mb-10">
              {/* Connecting vertical line */}
              <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
              
              {prProcess.map((step, i) => (
                <RevealOnScroll key={step.number} delay={i * 100}>
                  <div className="group flex flex-col sm:flex-row items-start gap-5 p-5 rounded-2xl border border-zinc-100 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                    <div className="w-[2.75rem] h-[2.75rem] rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-sm">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-1.5 group-hover:text-brand-blue transition-colors">{step.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
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
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
                  alt="PR Process and Strategy"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Stat Bar */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20 glass-panel-light p-3 rounded-2xl border border-white shadow-xl hidden md:block">
                <div className="grid grid-cols-3 gap-2 divide-x divide-zinc-200/60">
                  {[
                    { number: 50, suffix: "+", label: "Media Outlets" },
                    { number: 10, suffix: "+", label: "Years Exp." },
                    { number: 250, suffix: "+", label: "Brands Served" },
                  ].map((s) => (
                    <div key={s.label} className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-blue mb-0.5">
                        <AnimatedCounter end={s.number} suffix={s.suffix} duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── MEDIA NETWORK - Dense Custom Text Cloud ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#070d1a] border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">
                Our Media Network
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                We Secure Coverage Across <span className="text-gradient-gold">50+ Premium Sites</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
                Our established relationships with journalists and editors at India&apos;s top
                media outlets mean faster placements, better coverage, and maximum reach for
                your brand&apos;s story.
              </p>
            </div>
          </RevealOnScroll>

          {/* Premium Text Cloud Grid */}
          <RevealOnScroll delay={200}>
            <div className="flex flex-wrap gap-3.5 justify-center mb-16 max-w-6xl mx-auto relative z-20">
              {mediaOutlets.map((name, i) => (
                <div
                  key={name}
                  className={`group px-4 py-2.5 rounded-xl border text-[0.7rem] font-bold tracking-widest uppercase transition-all duration-300 cursor-default backdrop-blur-md shadow-lg ${
                    i % 7 === 0
                      ? "border-brand-gold/30 bg-brand-gold/5 text-brand-gold/90 hover:bg-brand-gold/20 hover:text-brand-gold hover:-translate-y-1 hover:shadow-brand-gold/20"
                      : i % 5 === 0
                      ? "border-brand-blue/30 bg-brand-blue/5 text-blue-500 hover:bg-brand-blue/20 hover:text-blue-300 hover:-translate-y-1 hover:shadow-brand-blue/20"
                      : "border-zinc-800 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white hover:border-zinc-600 hover:-translate-y-1"
                  }`}
                >
                  {name}
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="text-center">
              <Link href="#contact" className="btn-gold shadow-[0_10px_30px_rgba(194,148,10,0.2)] px-10 py-4">
                Secure Your Media Coverage
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHY CHOOSE US - Embedded JSX Handled Elegantly ───────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Why Choose Us</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                The PR Agency That Builds Brands,{" "}
                <br className="hidden lg:block"/><span className="heading-script text-brand-blue">Protects Reputations</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Integrated PR + ORM Approach",
                desc: "Unlike standalone PR agencies, we combine Public Relations with Online Reputation Management - giving your brand a 360° positive media presence that's protected, consistent, and conversion-ready.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: "50+ Media Outlet Network",
                desc: "Our curated network of journalist relationships across 50+ premium Indian media outlets means your stories reach the right desks - and get published, not ignored.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Tailored Strategies, Not Templates",
                desc: "Every PR strategy we build is custom-designed for your specific brand, industry, audience, and goals. We never use one-size-fits-all approaches or recycled campaign templates.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
              {
                title: "Transparent Monthly Reporting",
                desc: "You always know exactly what we did, where your brand was mentioned, how many people it reached, and what the tangible business impact was - no vague metrics or vanity numbers.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
            ].map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 100}>
                <div
                  className="group premium-info-card border border-zinc-200 rounded-3xl p-8 bg-white hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-400 relative overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 flex-shrink-0 shadow-sm group-hover:shadow-lg">
                      {f.icon}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-heading font-bold text-zinc-900 text-lg mb-2.5 group-hover:text-brand-blue transition-colors">
                        {f.title}
                      </h4>
                      <p className="text-[0.9rem] text-zinc-500 leading-relaxed">{f.desc}</p>
                    </div>
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center text-brand-gold">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
              <p className="text-zinc-400 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">We pay attention to details and quality, ensuring good communication and a strong customer relationship built on absolute discretion.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover flex flex-col h-full">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
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
                  Public Relations <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific question about our PR services? Our experts offer a free,
                  no-obligation consultation to assess your brand&apos;s media needs.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
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
              <p className="section-label text-brand-gold mb-3">Let&apos;s Talk PR</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Amplify Your Brand&apos;s Story Across <span className="heading-script text-blue-400">India&apos;s Top Media?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free PR consultation today. Our team will assess your brand&apos;s
                media presence, identify the right publications, and present a clear PR
                strategy - with no obligation.
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
