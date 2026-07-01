// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const crisisTypes = [
//   { icon: "📰", category: "MEDIA RELATIONS", title: "Negative Press Coverage", desc: "Damaging news articles or media stories that threaten your brand's public image." },
//   { icon: "⭐", category: "REVIEWS & SENTIMENT", title: "Review Bombing", desc: "Sudden flood of fake or coordinated negative reviews across multiple platforms." },
//   { icon: "📱", category: "SOCIAL RISK", title: "Social Media Scandal", desc: "Viral negative content, hashtag campaigns, or social media controversies targeting your brand." },
//   { icon: "👤", category: "EXECUTIVE BRAND", title: "Executive Controversy", desc: "Personal controversies involving company leadership that affect brand perception." },
//   { icon: "⚖️", category: "LEGAL & COMPLIANCE", title: "Legal Issues", desc: "Court cases, regulatory actions, or legal disputes creating negative search results." },
//   { icon: "⚖️", category: "COMPETITION SECURITY", title: "Competitor Attacks", desc: "Malicious competitor campaigns designed to damage your reputation unfairly." },
//   { icon: "🔓", category: "DATA FALLOUT", title: "Data Breach Fallout", desc: "Managing public trust and communications after a data security incident." },
//   { icon: "😡", category: "CONSUMER RELATIONS", title: "Customer Backlash", desc: "Widespread customer complaints that escalate into public relations emergencies." },
// ];

// const processSteps = [
//   { n: "01", title: "Emergency Assessment", desc: "Within hours of your call, we assess the scope and severity of the crisis - identifying all affected platforms, the source, and immediate risks to your reputation." },
//   { n: "02", title: "Crisis Containment", desc: "We act immediately to contain the spread of damaging content, coordinate platform takedowns, and prevent further escalation." },
//   { n: "03", title: "Strategic Communications", desc: "Our team crafts precise messaging and response strategies that address the crisis head-on while protecting your brand's core reputation." },
//   { n: "04", title: "Content Suppression", desc: "We deploy aggressive SEO and content strategies to push negative results down while elevating positive, authoritative content." },
//   { n: "05", title: "Reputation Rebuilding", desc: "Long-term strategies to rebuild trust, strengthen your brand narrative, and emerge from the crisis stronger than before." },
//   { n: "06", title: "Ongoing Monitoring", desc: "Continuous 24/7 monitoring to catch any resurgence of the crisis and react immediately to new threats." },
// ];

// const faqs = [
//   { q: "How quickly can you respond to a reputation crisis?", a: "We offer 24/7 emergency response for active reputation crises. Our team can begin assessment and containment within hours of your first contact. For severe crises, we can have a full team mobilized within 24 hours." },
//   { q: "What makes a reputation crisis different from regular ORM?", a: "A reputation crisis requires immediate, coordinated action across multiple fronts simultaneously - unlike regular ORM which is proactive and gradual. Crisis management involves rapid response, media coordination, legal considerations, and aggressive content suppression all at once." },
//   { q: "Can you help if a crisis has already been going on for weeks?", a: "Absolutely. While early intervention gives the best results, we have successfully managed and resolved crises that had been ongoing for months. It's never too late to start repairing your reputation." },
//   { q: "Do you work with legal teams during a crisis?", a: "Yes. Our crisis management team works closely with your legal counsel to ensure all strategies are legally sound and complement any ongoing legal proceedings. We coordinate messaging to support your legal strategy." },
//   { q: "How do you handle social media crises specifically?", a: "We monitor all major social platforms in real-time, coordinate rapid response strategies, engage with influencers and key voices, suppress trending negative hashtags, and build counter-narratives using positive social proof." },
// ];

// const mediaNames = [
//   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
//   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// ];

// export default function CrisisManagementPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* PAGE HERO */}
//       <section className="page-hero relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
//               🚨 24/7 Crisis Response Available
//             </div>
//             <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
//               Online Crisis Management &amp; ORM Services
//             </h1>
//             <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
//               A crisis has the potential to destroy years of hard work in hours. When your reputation is under attack, every minute counts. Our crisis management experts are on call 24/7 to protect your brand.
//             </p>
//             <div className="bg-red-950/40 border border-red-500/25 rounded p-4 mb-6">
//               <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-1">⚡ Active Crisis? Call Us Now</p>
//               <p className="text-zinc-300 text-xs leading-relaxed">Our emergency response team is available around the clock for immediate assistance.</p>
//               <a href="tel:+918882788412" className="text-brand-gold font-bold text-sm hover:underline mt-1 inline-block">+9188827 88412</a>
//             </div>
//             <ul className="space-y-2 mb-8">
//               {[
//                 "24/7 emergency crisis response team",
//                 "Rapid content removal and suppression",
//                 "Multi-platform crisis containment",
//                 "Strategic communications & messaging",
//                 "Post-crisis reputation rebuilding",
//               ].map((item) => (
//                 <li key={item} className="check-item text-xs text-zinc-300">
//                   <span className="text-brand-gold font-bold flex-shrink-0">✓</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-3">
//               <Link href="#contact" className="btn-gold">Get Help</Link>
//               <a href="tel:+918882788412" className="btn-outline">Call Now</a>
//             </div>
//           </div>
//           <div className="bg-slate-900 border border-zinc-800 rounded p-7">
//             <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Emergency Consultation</p>
//             <h3 className="font-heading text-lg font-bold text-white mb-1">Tell Us About Your Situation</h3>
//             <p className="text-zinc-400 text-xs mb-5">We respond within 2 hours - guaranteed</p>
//             <ContactForm dark />
//           </div>
//         </div>
//       </section>

//       {/* MEDIA LOGOS */}
//       <div className="bg-zinc-50 py-6 border-b border-zinc-200">
//         <div className="max-w-7xl mx-auto px-4 overflow-hidden">
//           <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
//             {mediaNames.map((m, i) => (
//               <span key={i} className="logo-badge-pill">
//                 {m}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* TYPES OF CRISES */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-2">We Handle Every Type</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Types of Reputation Crises We Manage</h2>
//             <p className="text-zinc-500 max-w-2xl mx-auto text-xs mt-3 leading-relaxed">
//               No matter what kind of crisis you are facing, our team has the experience and tools to respond effectively and protect your reputation.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {crisisTypes.map((c, idx) => (
//               <div 
//                 key={c.title} 
//                 className={`service-card group ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-[0.58rem] font-bold text-brand-blue uppercase tracking-widest bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
//                     {c.category}
//                   </span>
//                   <span className="text-2xl select-none">{c.icon}</span>
//                 </div>
//                 <h3 className="font-bold text-zinc-900 text-sm mb-2 group-hover:text-brand-blue transition-colors leading-snug">{c.title}</h3>
//                 <p className="text-xs text-zinc-500 leading-relaxed">{c.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CRISIS TIMELINE */}
//       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
//           <div className="pr-0 lg:pr-8">
//             <p className="section-label mb-2">The Cost of Waiting</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-5">
//               Why Immediate Crisis Response is Critical
//             </h2>
//             <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
//               In a reputation crisis, time is the most valuable asset. Every hour that passes without a strategic response allows negative content to spread further, more people to form negative opinions, and the damage to deepen.
//             </p>
//             <div className="space-y-4 mb-6">
//               {[
//                 { time: "First 24 Hours", impact: "Crisis reaches your core audience and immediate stakeholders.", color: "border-amber-500" },
//                 { time: "48–72 Hours", impact: "Content indexes on Google. Social shares multiply. Media picks up the story.", color: "border-red-500" },
//                 { time: "1 Week+", impact: "Negative content dominates search results. Long-term brand damage begins.", color: "border-zinc-800" },
//               ].map(t => (
//                 <div key={t.time} className={`bg-white rounded p-4 border border-zinc-200 border-l-4 ${t.color}`}>
//                   <p className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">{t.time}</p>
//                   <p className="text-xs text-zinc-500 leading-relaxed">{t.impact}</p>
//                 </div>
//               ))}
//             </div>
//             <Link href="#contact" className="btn-gold">Get Help Immediately</Link>
//           </div>
          
//           <div className="text-center pl-0 lg:pl-12">
//             <div className="bg-brand-dark border border-zinc-800 rounded p-8">
//               <p className="font-heading text-5xl font-extrabold text-white mb-2">2 hrs</p>
//               <p className="text-zinc-400 text-xs mb-6 uppercase tracking-wider font-semibold">Average response time to active crises</p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { n: "500+", l: "Crises Managed" },
//                   { n: "97%", l: "Success Rate" },
//                   { n: "24/7", l: "Availability" },
//                   { n: "48 hrs", l: "First Results" },
//                 ].map(s => (
//                   <div key={s.l} className="bg-white/5 border border-white/10 rounded p-4 text-center">
//                     <p className="font-heading text-xl font-extrabold text-brand-gold">{s.n}</p>
//                     <p className="text-zinc-400 text-[0.62rem] uppercase tracking-wider mt-1">{s.l}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR PROCESS */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-2">Our Approach</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Our Crisis Management Process</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {processSteps.map((s) => (
//               <div key={s.n} className="bg-[#fafafa] border border-zinc-200 rounded p-6 flex gap-4 items-start">
//                 <div className="step-number font-heading flex-shrink-0">{s.n}</div>
//                 <div>
//                   <h3 className="font-bold text-zinc-900 mb-2 text-sm">{s.title}</h3>
//                   <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BRAND VS INDIVIDUAL */}
//       <section className="py-24 px-4 bg-[#0f172a] border-b border-zinc-950">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label text-brand-gold mb-2">Tailored Solutions</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white">Crisis Protection for Brands &amp; Individuals</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-[#0c1322] border border-zinc-800 rounded p-8">
//               <div className="text-4xl mb-4 select-none">🏢</div>
//               <h3 className="font-heading text-lg font-bold text-white mb-4">For Businesses &amp; Brands</h3>
//               <ul className="space-y-3">
//                 {["Corporate crisis communications strategy", "Stakeholder & investor messaging", "Employee and media statement drafting", "Multi-platform content suppression", "Brand recovery and narrative rebuilding", "Competitor sabotage countermeasures"].map(i => (
//                   <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
//                     <span className="text-brand-gold mt-0.5">✓</span>
//                     <span>{i}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-[#0c1322] border border-zinc-800 rounded p-8">
//               <div className="text-4xl mb-4 select-none">👤</div>
//               <h3 className="font-heading text-lg font-bold text-white mb-4">For Individuals &amp; Executives</h3>
//               <ul className="space-y-3">
//                 {["Personal reputation emergency response", "Private & discreet handling of sensitive matters", "Social media crisis management", "False allegation countering", "Personal brand narrative control", "Legal content removal coordination"].map(i => (
//                   <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
//                     <span className="text-brand-gold mt-0.5">✓</span>
//                     <span>{i}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-10">
//             <p className="section-label mb-2">FAQs</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Crisis Management Questions</h2>
//           </div>
//           <FAQ items={faqs} />
//         </div>
//       </section>

//       {/* EMERGENCY CONTACT */}
//       <section id="contact" className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//           <div>
//             <div className="bg-red-950/40 border border-red-500/25 rounded p-4 mb-6 inline-flex items-center gap-3">
//               <span className="text-red-400 text-lg select-none">🚨</span>
//               <p className="text-red-400 font-semibold text-xs uppercase tracking-wider">Emergency Response Team Available</p>
//             </div>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">
//               Is Your Reputation Under Attack Right Now?
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
//               Don&apos;t face a reputation crisis alone. Our team of ORM specialists and crisis communications professionals are ready to mobilize immediately to protect your brand.
//             </p>
//             <div className="space-y-4 border-t border-zinc-800 pt-6">
//               <a href="tel:+918882788412" className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors">
//                 <span className="w-9 h-9 bg-brand-gold rounded flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" className="w-4.5 h-4.5 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <p className="text-[0.62rem] text-zinc-500 uppercase tracking-wider mb-0.5">Emergency Hotline (24/7)</p>
//                   <p className="font-bold text-sm">+9188827 88412</p>
//                 </div>
//               </a>
//               <a href="mailto:contact@onlinereputationbuilder.in" className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors">
//                 <span className="w-9 h-9 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <p className="text-[0.62rem] text-zinc-500 uppercase tracking-wider mb-0.5">Direct Email</p>
//                   <p className="font-bold text-sm">contact@onlinereputationbuilder.in</p>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="bg-zinc-950 border border-zinc-800 rounded p-7">
//             <p className="text-white font-bold text-sm mb-4">Request Emergency Assistance</p>
//             <ContactForm dark />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const crisisTypes = [
  { icon: "📰", category: "MEDIA RELATIONS", title: "Negative Press Coverage", desc: "Damaging news articles or media stories that threaten your brand's public image." },
  { icon: "⭐", category: "REVIEWS & SENTIMENT", title: "Review Bombing", desc: "Sudden flood of fake or coordinated negative reviews across multiple platforms." },
  { icon: "📱", category: "SOCIAL RISK", title: "Social Media Scandal", desc: "Viral negative content, hashtag campaigns, or social media controversies targeting your brand." },
  { icon: "👤", category: "EXECUTIVE BRAND", title: "Executive Controversy", desc: "Personal controversies involving company leadership that affect brand perception." },
  { icon: "⚖️", category: "LEGAL & COMPLIANCE", title: "Legal Issues", desc: "Court cases, regulatory actions, or legal disputes creating negative search results." },
  { icon: "⚖️", category: "COMPETITION SECURITY", title: "Competitor Attacks", desc: "Malicious competitor campaigns designed to damage your reputation unfairly." },
  { icon: "🔓", category: "DATA FALLOUT", title: "Data Breach Fallout", desc: "Managing public trust and communications after a data security incident." },
  { icon: "😡", category: "CONSUMER RELATIONS", title: "Customer Backlash", desc: "Widespread customer complaints that escalate into public relations emergencies." },
];

const processSteps = [
  { n: "01", title: "Emergency Assessment", desc: "Within hours of your call, we assess the scope and severity of the crisis - identifying all affected platforms, the source, and immediate risks to your reputation." },
  { n: "02", title: "Crisis Containment", desc: "We act immediately to contain the spread of damaging content, coordinate platform takedowns, and prevent further escalation." },
  { n: "03", title: "Strategic Communications", desc: "Our team crafts precise messaging and response strategies that address the crisis head-on while protecting your brand's core reputation." },
  { n: "04", title: "Content Suppression", desc: "We deploy aggressive SEO and content strategies to push negative results down while elevating positive, authoritative content." },
  { n: "05", title: "Reputation Rebuilding", desc: "Long-term strategies to rebuild trust, strengthen your brand narrative, and emerge from the crisis stronger than before." },
  { n: "06", title: "Ongoing Monitoring", desc: "Continuous 24/7 monitoring to catch any resurgence of the crisis and react immediately to new threats." },
];

const faqs = [
  { q: "How quickly can you respond to a reputation crisis?", a: "We offer 24/7 emergency response for active reputation crises. Our team can begin assessment and containment within hours of your first contact. For severe crises, we can have a full team mobilized within 24 hours." },
  { q: "What makes a reputation crisis different from regular ORM?", a: "A reputation crisis requires immediate, coordinated action across multiple fronts simultaneously - unlike regular ORM which is proactive and gradual. Crisis management involves rapid response, media coordination, legal considerations, and aggressive content suppression all at once." },
  { q: "Can you help if a crisis has already been going on for weeks?", a: "Absolutely. While early intervention gives the best results, we have successfully managed and resolved crises that had been ongoing for months. It's never too late to start repairing your reputation." },
  { q: "Do you work with legal teams during a crisis?", a: "Yes. Our crisis management team works closely with your legal counsel to ensure all strategies are legally sound and complement any ongoing legal proceedings. We coordinate messaging to support your legal strategy." },
  { q: "How do you handle social media crises specifically?", a: "We monitor all major social platforms in real-time, coordinate rapid response strategies, engage with influencers and key voices, suppress trending negative hashtags, and build counter-narratives using positive social proof." },
];

// Utilizing reliable Favicon API to bypass AdBlockers, retaining all original names
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

export default function CrisisManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* PAGE HERO - Premium Dark Concept */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-gold opacity-60" />
        <div className="hero-ambient hero-ambient-blue opacity-50 right-0 top-20" />
        
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              🚨 24/7 Crisis Response Available
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Online Crisis Management &amp; <span className="text-gradient-gold">ORM Services</span>
            </h1>
            
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              A crisis has the potential to destroy years of hard work in hours. When your reputation is under attack, every minute counts. Our crisis management experts are on call 24/7 to protect your brand.
            </p>

            {/* Premium Emergency Box */}
            <div className="glass-panel border-l-4 border-l-red-500 bg-red-950/20 rounded-r-xl p-6 mb-8 mt-4 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none group-hover:from-red-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg width="16" height="16" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ⚡ Active Crisis? Call Us Now
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">Our emergency response team is available around the clock for immediate assistance.</p>
                <a href="tel:+918882788412" className="text-white font-heading font-bold text-xl hover:text-red-400 transition-colors inline-block">+9188827 88412</a>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "24/7 emergency response team",
                "Rapid content removal",
                "Multi-platform containment",
                "Strategic communications",
                "Reputation rebuilding",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-brand-gold mt-0.5 text-base font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-gold shadow-[0_0_20px_rgba(194,148,10,0.3)]">Get Help Now</Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-brand-blue/10 rounded-2xl blur-xl opacity-50"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-7 lg:p-9 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="relative z-10">
                <p className="section-label mb-2 text-red-400">Emergency Consultation</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Tell Us About Your Situation</h3>
                <p className="text-zinc-400 text-sm mb-6">We respond within 2 hours - guaranteed</p>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS - Image Marquee Strip */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Experienced In Managing Fallout Across</p>
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

      {/* TYPES OF CRISES - Premium Grid */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">We Handle Every Type</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Types of Reputation <span className="heading-script text-brand-blue">Crises We Manage</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[0.95rem] mt-4 leading-relaxed">
              No matter what kind of crisis you are facing, our team has the experience and tools to respond effectively and protect your reputation.
            </p>
          </div>
          
          <div className="services-showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crisisTypes.map((c, idx) => (
              <div 
                key={c.title} 
                className="group premium-service-card service-showcase-item relative bg-white rounded-2xl p-7 transition-all duration-500 overflow-hidden flex flex-col h-full border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 z-10 hover:z-20"
              >
                <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${idx % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                <div className="service-card-sheen" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[0.58rem] font-bold uppercase tracking-widest px-2 py-1 rounded ${idx % 2 === 0 ? 'bg-blue-50/80 border border-blue-100 text-brand-blue' : 'bg-amber-50/80 border border-amber-100 text-brand-gold'}`}>
                      {c.category}
                    </span>
                    <span className="text-3xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 origin-center select-none">{c.icon}</span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors leading-snug">{c.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-600 transition-colors">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRISIS TIMELINE - Split Layout */}
      <section className="relative py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative z-10">
          
          <div className="premium-copy-panel pr-0 lg:pr-8">
            <p className="section-label mb-2 text-brand-gold">The Cost of Waiting</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Why Immediate Crisis <br className="hidden lg:block"/><span className="heading-script text-brand-blue">Response is Critical</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              In a reputation crisis, time is the most valuable asset. Every hour that passes without a strategic response allows negative content to spread further, more people to form negative opinions, and the damage to deepen.
            </p>
            
            <div className="space-y-5 mb-8">
              {[
                { time: "First 24 Hours", impact: "Crisis reaches your core audience and immediate stakeholders.", color: "border-l-amber-500", iconText: "text-amber-500" },
                { time: "48–72 Hours", impact: "Content indexes on Google. Social shares multiply. Media picks up the story.", color: "border-l-red-500", iconText: "text-red-500" },
                { time: "1 Week+", impact: "Negative content dominates search results. Long-term brand damage begins.", color: "border-l-zinc-800", iconText: "text-zinc-800" },
              ].map((t, i) => (
                <div key={t.time} className={`premium-info-card bg-zinc-50 rounded-xl p-5 border border-zinc-200 border-l-4 ${t.color} flex items-start gap-4 hover:shadow-md transition-shadow`}>
                  <div className={`mt-1 font-bold ${t.iconText}`}>{`0${i+1}`}</div>
                  <div>
                    <p className="font-heading font-bold text-zinc-900 text-sm uppercase tracking-wider mb-1">{t.time}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{t.impact}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-gold shadow-[0_10px_30px_rgba(194,148,10,0.2)]">Get Help Immediately</Link>
          </div>
          
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl opacity-60"></div>
            <div className="premium-form-card dark bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl relative z-10">
              <div className="form-card-orbit opacity-40" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-blue/10 mb-6 border border-brand-blue/20">
                   <p className="font-heading text-5xl font-extrabold text-white">2<span className="text-2xl text-brand-gold">h</span></p>
                </div>
                <p className="text-zinc-400 text-xs mb-8 uppercase tracking-widest font-bold">Average response time to active crises</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "500+", l: "Crises Managed" },
                    { n: "97%", l: "Success Rate" },
                    { n: "24/7", l: "Availability" },
                    { n: "48 hrs", l: "First Results" },
                  ].map(s => (
                    <div key={s.l} className="glass-panel border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors cursor-default">
                      <p className="font-heading text-2xl font-bold text-brand-gold mb-1">{s.n}</p>
                      <p className="text-zinc-400 text-[0.65rem] uppercase tracking-wider font-semibold">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS - Connecting Line Layout */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <p className="section-label mb-2 text-brand-gold">Our Approach</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Our Crisis Management <span className="heading-script text-brand-blue">Process</span>
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
              {processSteps.map((s, idx) => (
                <div key={s.n} className="group process-step flex gap-5 items-start bg-white p-6 rounded-xl border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] hover:border-brand-blue/20 transition-all duration-400 transform hover:-translate-x-1">
                  <div className={`step-number flex-shrink-0 relative z-10 transition-all duration-300 ${idx === 0 ? 'bg-red-500 shadow-lg shadow-red-500/30' : 'bg-brand-blue group-hover:bg-brand-mid shadow-lg shadow-brand-blue/20'}`}>
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

      {/* BRAND VS INDIVIDUAL - Glassmorphic Dark Layout */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="ambient-glow-blue top-0 left-1/4 opacity-40" />
        <div className="ambient-glow-gold bottom-0 right-1/4 opacity-30" />
        <div className="platform-grid-glow opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="section-label text-brand-gold mb-2">Tailored Solutions</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Crisis Protection for <span className="heading-script text-brand-gold">Brands &amp; Individuals</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="premium-info-card glass-panel bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 lg:p-12 hover:border-brand-blue/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-3xl mb-8 shadow-inner select-none">🏢</div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">For Businesses &amp; Brands</h3>
              <ul className="space-y-4">
                {["Corporate crisis communications strategy", "Stakeholder & investor messaging", "Employee and media statement drafting", "Multi-platform content suppression", "Brand recovery and narrative rebuilding", "Competitor sabotage countermeasures"].map(i => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="premium-info-card glass-panel bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 lg:p-12 hover:border-brand-gold/50 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-3xl mb-8 shadow-inner select-none">👤</div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">For Individuals &amp; Executives</h3>
              <ul className="space-y-4">
                {["Personal reputation emergency response", "Private & discreet handling of sensitive matters", "Social media crisis management", "False allegation countering", "Personal brand narrative control", "Legal content removal coordination"].map(i => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">
              Crisis Management <span className="heading-script text-brand-blue">Questions</span>
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* EMERGENCY CONTACT CTA - Premium Grand Finish */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-red-500">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-900/15 rounded-full blur-[100px] pointer-events-none"/>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="premium-copy-panel-dark">
            <div className="glass-panel border border-red-500/30 bg-red-950/20 rounded-full py-2 px-4 mb-8 inline-flex items-center gap-3 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-red-400 font-bold text-[0.65rem] uppercase tracking-widest m-0">Emergency Response Team Available</p>
            </div>
            
            <h2 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Is Your Reputation Under <br className="hidden lg:block"/><span className="heading-script text-red-400">Attack Right Now?</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              Don&apos;t face a reputation crisis alone. Our team of ORM specialists and crisis communications professionals are ready to mobilize immediately to protect your brand.
            </p>
            
            <div className="space-y-6 border-t border-zinc-800/80 pt-8">
              <a href="tel:+918882788412" className="flex items-center gap-5 text-white hover:text-brand-gold transition-colors group">
                <span className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(194,148,10,0.2)]">
                  <svg width="24" height="24" className="w-6 h-6 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">Emergency Hotline (24/7)</p>
                  <p className="font-heading font-bold text-xl tracking-wide">+9188827 88412</p>
                </div>
              </a>
              
              <a href="mailto:contact@onlinereputationbuilder.in" className="flex items-center gap-5 text-white hover:text-brand-blue transition-colors group">
                <span className="w-14 h-14 glass-panel border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="24" height="24" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">Direct Email</p>
                  <p className="font-heading font-bold text-lg">contact@onlinereputationbuilder.in</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-brand-blue/10 rounded-3xl blur-2xl opacity-40"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-6">Request Emergency Assistance</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}