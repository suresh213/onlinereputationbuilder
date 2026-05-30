// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const auditItems = [
//   { icon: "🔍", category: "SERP ANALYSIS", title: "Google Search Analysis", desc: "We analyze the first 5 pages of Google results for your brand name, identifying all negative, neutral, and positive content that potential customers see." },
//   { icon: "⭐", category: "REVIEW TRACKING", title: "Review Platform Audit", desc: "Comprehensive analysis of your reviews across Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ other platforms — rating distribution, sentiment, and response rates." },
//   { icon: "📱", category: "SOCIAL SENTIMENT", title: "Social Media Audit", desc: "Evaluation of your social media presence, mentions, comments, and brand perception across Facebook, Twitter, Instagram, LinkedIn, and YouTube." },
//   { icon: "📰", category: "MEDIA ALERT", title: "News & Media Coverage", desc: "We scan thousands of news outlets and media sites for any coverage of your brand — positive press, negative articles, or any damaging stories." },
//   { icon: "📊", category: "COMPETITOR GAP", title: "Competitor Benchmark", desc: "See how your online reputation compares to your key competitors and identify opportunities to gain a competitive edge." },
//   { icon: "🗺️", category: "ROADMAP", title: "Action Roadmap", desc: "A prioritized, step-by-step roadmap of exactly what needs to be fixed, in what order, and what success metrics to track." },
// ];

// const steps = [
//   { n: "01", title: "Submit Your Details", desc: "Fill out our quick form with your brand name and key online profiles. No commitment needed." },
//   { n: "02", title: "We Conduct the Audit", desc: "Our ORM specialists analyze 100+ data points across search engines, review sites, social media, and news platforms." },
//   { n: "03", title: "Receive Your Report", desc: "Within 48 hours, you receive a comprehensive audit report with your reputation score and detailed findings." },
//   { n: "04", title: "Strategy Session", desc: "We walk you through the report and recommend a customized action plan to fix issues and strengthen your online presence." },
// ];

// const faqs = [
//   { q: "What does a free reputation audit include?", a: "Our free audit covers analysis of your Google search results (first 5 pages), major review platforms, social media mentions, news coverage, and an overall reputation health score. You receive a detailed report highlighting issues and opportunities." },
//   { q: "How long does the audit take?", a: "Our comprehensive reputation audit is typically completed within 24-48 business hours. You'll receive a detailed report via email with all findings and recommendations." },
//   { q: "Is the audit truly free with no obligation?", a: "Yes, absolutely. Our reputation audit is completely free with no strings attached. We believe in demonstrating our value first. If you like what you see and want our help, we'll be delighted to discuss a plan." },
//   { q: "What happens after I receive my audit report?", a: "After receiving your report, one of our ORM specialists will reach out to walk you through the findings and answer any questions. If you'd like to take action, we'll recommend a tailored ORM strategy. There's no pressure to purchase." },
//   { q: "Do you audit both business and personal reputations?", a: "Yes. We conduct comprehensive audits for both businesses of all sizes (from startups to enterprises) and individuals including executives, professionals, and public figures." },
// ];

// const mediaNames = [
//   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
//   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// ];

// export default function ReputationAuditPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* PAGE HERO */}
//       <section className="page-hero relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
//               📊 Free ORM Audit Report — No Obligation
//             </div>
//             <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
//               Online Reputation Audit to Protect Your Brand Image
//             </h1>
//             <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
//               At Online Reputation Builder, we do not just conduct surface-level reputation audits. We examine search results, brand mentions, customer reviews, social media sentiment, and negative content to find gaps that influence your trust, conversions, and brand authority.
//             </p>
//             <p className="text-zinc-400 text-xs leading-relaxed mb-6">
//               We monitor the presence of your brand in Google, review websites, news outlets, and social media channels with tested reputation management audit tools and provide a comprehensive roadmap to fix what's broken.
//             </p>
//             <div className="bg-slate-900 border border-zinc-800 rounded p-5 mb-8">
//               <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-3">✦ What our audit identifies:</p>
//               <div className="grid grid-cols-1 gap-2">
//                 {["Areas of reputation weakness", "Trust signals you're missing", "Negative content impacting conversions", "Competitor reputation comparison", "Priority action roadmap"].map(i => (
//                   <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
//                     <span className="text-brand-gold">→</span>
//                     <span>{i}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <Link href="#get-audit" className="btn-gold">Get Free Audit Report</Link>
//           </div>
//           <div id="get-audit" className="bg-slate-900 border border-zinc-800 rounded p-7">
//             <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Free ORM Audit</p>
//             <h3 className="font-heading text-lg font-bold text-white mb-1">Get Your Reputation Report</h3>
//             <p className="text-zinc-400 text-xs mb-5">Comprehensive audit delivered within 48 hours</p>
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

//       {/* WHAT WE AUDIT */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-2">What We Examine</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
//               A 360° View of Your Online Reputation
//             </h2>
//             <p className="text-zinc-500 max-w-2xl mx-auto text-xs mt-3 leading-relaxed">
//               Our audit goes beyond surface-level checks. We dig deep into every corner of the web where your reputation lives.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {auditItems.map((item, idx) => (
//               <div 
//                 key={item.title} 
//                 className={`service-card group ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-[0.58rem] font-bold text-brand-blue uppercase tracking-widest bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">
//                     {item.category}
//                   </span>
//                   <span className="text-3xl select-none">{item.icon}</span>
//                 </div>
//                 <h3 className="font-bold text-zinc-900 text-sm mb-2 group-hover:text-brand-blue transition-colors leading-snug">{item.title}</h3>
//                 <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-2">Simple Process</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">How the Free Audit Works</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {steps.map((s) => (
//               <div key={s.n} className="bg-white rounded p-6 border border-zinc-200 flex gap-4 items-start">
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

//       {/* SAMPLE REPORT PREVIEW */}
//       <section className="py-24 px-4 bg-brand-blue border-b border-brand-mid">
//         <div className="max-w-5xl mx-auto text-center">
//           <p className="section-label text-brand-gold-light/80 mb-2">Sample Report</p>
//           <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">What You&apos;ll Receive in Your Audit</h2>
//           <p className="text-zinc-300 max-w-2xl mx-auto text-xs mb-10 leading-relaxed">A comprehensive, easy-to-understand report covering every aspect of your online reputation.</p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               { icon: "📈", title: "Reputation Score", desc: "An overall reputation health score from 0-100 based on 50+ signals, with breakdown by category." },
//               { icon: "🔴", title: "Risk Assessment", desc: "Prioritized list of reputation risks with severity ratings and immediate action recommendations." },
//               { icon: "📋", title: "Action Roadmap", desc: "Step-by-step improvement plan with timelines, expected outcomes, and success metrics." },
//             ].map(c => (
//               <div key={c.title} className="bg-white/5 border border-white/10 rounded p-6 text-left">
//                 <div className="text-3xl mb-3 select-none">{c.icon}</div>
//                 <h3 className="font-bold text-white mb-2 text-sm">{c.title}</h3>
//                 <p className="text-zinc-300 text-xs leading-relaxed">{c.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8">
//             <Link href="#get-audit" className="btn-gold">Get Your Free Report Now</Link>
//           </div>
//         </div>
//       </section>

//       {/* WHO NEEDS AUDIT */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             <p className="section-label mb-2">Who It&apos;s For</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Who Needs a Reputation Audit?</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: "🏢", title: "Businesses", desc: "Companies facing negative reviews, bad press, or declining customer trust" },
//               { icon: "👤", title: "Individuals", desc: "Professionals, executives, and public figures concerned about their online image" },
//               { icon: "🚀", title: "Startups", desc: "New businesses wanting to establish a strong foundation before scaling" },
//               { icon: "⚠️", title: "Crisis Situations", desc: "Organizations dealing with active PR crises needing immediate assessment" },
//             ].map((c, idx) => (
//               <div 
//                 key={c.title} 
//                 className={`service-card text-center ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
//               >
//                 <div className="text-4xl mb-3 select-none">{c.icon}</div>
//                 <h3 className="font-bold text-zinc-900 mb-2 text-sm">{c.title}</h3>
//                 <p className="text-xs text-zinc-500 leading-normal">{c.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-10">
//             <p className="section-label mb-2">FAQs</p>
//             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Questions About the Free Audit</h2>
//           </div>
//           <FAQ items={faqs} />
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-24 px-4 bg-zinc-900 text-center">
//         <div className="max-w-3xl mx-auto">
//           <p className="section-label text-brand-gold mb-2">Free — No Obligation</p>
//           <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">
//             Ready to Know What People See When They Google You?
//           </h2>
//           <p className="text-zinc-400 mb-8 text-xs leading-relaxed">
//             Get your free, comprehensive reputation audit delivered within 48 hours. No credit card. No obligation. Just clarity.
//           </p>
//           <Link href="#get-audit" className="btn-gold text-sm px-10">Get My Free Audit</Link>
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

const auditItems = [
  { icon: "🔍", category: "SERP ANALYSIS", title: "Google Search Analysis", desc: "We analyze the first 5 pages of Google results for your brand name, identifying all negative, neutral, and positive content that potential customers see." },
  { icon: "⭐", category: "REVIEW TRACKING", title: "Review Platform Audit", desc: "Comprehensive analysis of your reviews across Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ other platforms — rating distribution, sentiment, and response rates." },
  { icon: "📱", category: "SOCIAL SENTIMENT", title: "Social Media Audit", desc: "Evaluation of your social media presence, mentions, comments, and brand perception across Facebook, Twitter, Instagram, LinkedIn, and YouTube." },
  { icon: "📰", category: "MEDIA ALERT", title: "News & Media Coverage", desc: "We scan thousands of news outlets and media sites for any coverage of your brand — positive press, negative articles, or any damaging stories." },
  { icon: "📊", category: "COMPETITOR GAP", title: "Competitor Benchmark", desc: "See how your online reputation compares to your key competitors and identify opportunities to gain a competitive edge." },
  { icon: "🗺️", category: "ROADMAP", title: "Action Roadmap", desc: "A prioritized, step-by-step roadmap of exactly what needs to be fixed, in what order, and what success metrics to track." },
];

const steps = [
  { n: "01", title: "Submit Your Details", desc: "Fill out our quick form with your brand name and key online profiles. No commitment needed." },
  { n: "02", title: "We Conduct the Audit", desc: "Our ORM specialists analyze 100+ data points across search engines, review sites, social media, and news platforms." },
  { n: "03", title: "Receive Your Report", desc: "Within 48 hours, you receive a comprehensive audit report with your reputation score and detailed findings." },
  { n: "04", title: "Strategy Session", desc: "We walk you through the report and recommend a customized action plan to fix issues and strengthen your online presence." },
];

const faqs = [
  { q: "What does a free reputation audit include?", a: "Our free audit covers analysis of your Google search results (first 5 pages), major review platforms, social media mentions, news coverage, and an overall reputation health score. You receive a detailed report highlighting issues and opportunities." },
  { q: "How long does the audit take?", a: "Our comprehensive reputation audit is typically completed within 24-48 business hours. You'll receive a detailed report via email with all findings and recommendations." },
  { q: "Is the audit truly free with no obligation?", a: "Yes, absolutely. Our reputation audit is completely free with no strings attached. We believe in demonstrating our value first. If you like what you see and want our help, we'll be delighted to discuss a plan." },
  { q: "What happens after I receive my audit report?", a: "After receiving your report, one of our ORM specialists will reach out to walk you through the findings and answer any questions. If you'd like to take action, we'll recommend a tailored ORM strategy. There's no pressure to purchase." },
  { q: "Do you audit both business and personal reputations?", a: "Yes. We conduct comprehensive audits for both businesses of all sizes (from startups to enterprises) and individuals including executives, professionals, and public figures." },
];

// Utilizing reliable Favicon API to bypass AdBlockers
const mediaLogos = [
  { name: "Forbes", img: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" },
  { name: "CNBC", img: "https://www.google.com/s2/favicons?domain=cnbc.com&sz=128" },
  { name: "Yahoo Finance", img: "https://www.google.com/s2/favicons?domain=finance.yahoo.com&sz=128" },
  { name: "India Today", img: "https://www.google.com/s2/favicons?domain=indiatoday.in&sz=128" },
  { name: "The Economic Times", img: "https://www.google.com/s2/favicons?domain=economictimes.indiatimes.com&sz=128" },
  { name: "Hindustan Times", img: "https://www.google.com/s2/favicons?domain=hindustantimes.com&sz=128" },
  { name: "ANI", img: "https://www.google.com/s2/favicons?domain=aninews.in&sz=128" },
  { name: "Times Now", img: "https://www.google.com/s2/favicons?domain=timesnownews.com&sz=128" },
];

export default function ReputationAuditPage() {
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
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-gold/10 border-brand-gold/30 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              📊 Free ORM Audit Report — No Obligation
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Online Reputation Audit to Protect Your <span className="text-gradient-gold">Brand Image</span>
            </h1>
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              At Online Reputation Builder, we do not just conduct surface-level reputation audits. We examine search results, brand mentions, customer reviews, social media sentiment, and negative content to find gaps that influence your trust, conversions, and brand authority.
            </p>
            
            <div className="glass-panel border-l-4 border-l-brand-gold rounded-r-xl p-6 mb-8 mt-4 shadow-xl">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-4">✦ What our audit identifies:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Areas of reputation weakness", "Trust signals you're missing", "Negative content impacting conversions", "Competitor reputation comparison", "Priority action roadmap"].map(i => (
                  <div key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-brand-gold mt-0.5 text-base font-bold">✓</span>
                    <span>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#get-audit" className="btn-gold shadow-[0_0_20px_rgba(194,148,10,0.3)]">Get Free Audit Report</Link>
            </div>
          </div>

          <div id="get-audit" className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-2xl blur-xl opacity-50"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-7 lg:p-9 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="relative z-10">
                <p className="section-label mb-2 text-brand-gold">Free ORM Audit</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Get Your Reputation Report</h3>
                <p className="text-zinc-400 text-sm mb-6">Comprehensive audit delivered within 48 hours</p>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS - Marquee Strip */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">As Featured In Leading Publications</p>
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

      {/* WHAT WE AUDIT - Premium Grid */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Examine</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              A 360° View of Your <span className="heading-script text-brand-blue">Online Reputation</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[0.95rem] mt-4 leading-relaxed">
              Our audit goes beyond surface-level checks. We dig deep into every corner of the web where your reputation lives, ensuring no platform is overlooked.
            </p>
          </div>

          <div className="services-showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {auditItems.map((item, idx) => (
              <div 
                key={item.title} 
                className="group premium-service-card service-showcase-item relative bg-white rounded-2xl p-8 transition-all duration-500 overflow-hidden flex flex-col h-full border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 z-10 hover:z-20"
              >
                <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${idx % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                <div className="service-card-sheen" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[0.62rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${idx % 2 === 0 ? 'bg-blue-50/80 border border-blue-100 text-brand-blue' : 'bg-amber-50/80 border border-amber-100 text-brand-gold'}`}>
                      {item.category}
                    </span>
                    <span className="text-3xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3 origin-center">{item.icon}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-600 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Process Timeline Layout */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <p className="section-label mb-2 text-brand-gold">Simple Process</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              How the <span className="heading-script text-brand-blue">Free Audit</span> Works
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              We've streamlined our audit process to deliver maximum value with zero friction. From initial scan to final strategy, every step is designed to give you clarity and control over your digital footprint.
            </p>
            <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-brand-blue to-transparent rounded-full" />
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute left-[19px] top-6 bottom-12 w-[2px] bg-zinc-100 hidden sm:block z-0" />
            
            <div className="space-y-8 relative z-10">
              {steps.map((s, idx) => (
                <div key={s.n} className="group process-step flex gap-5 items-start bg-white p-6 rounded-xl border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] hover:border-brand-blue/20 transition-all duration-400 transform hover:-translate-x-1">
                  <div className={`step-number flex-shrink-0 relative z-10 transition-all duration-300 ${idx === 3 ? 'bg-brand-gold shadow-lg shadow-brand-gold/30' : 'bg-brand-blue group-hover:bg-brand-mid shadow-lg shadow-brand-blue/20'}`}>
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

      {/* SAMPLE REPORT PREVIEW - Glassmorphic Dark Layout */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="ambient-glow-blue top-0 left-1/4 opacity-40" />
        <div className="ambient-glow-gold bottom-0 right-1/4 opacity-30" />
        <div className="platform-grid-glow opacity-60" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="section-label text-brand-gold mb-2">Sample Report</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              What You'll Receive in <span className="heading-script text-brand-gold">Your Audit</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-[0.95rem] leading-relaxed">
              A comprehensive, visually-driven, and easy-to-understand report covering every aspect of your online reputation architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: "📈", title: "Reputation Score", desc: "An overall reputation health score from 0-100 based on 50+ signals, with breakdown by category." },
              { icon: "🔴", title: "Risk Assessment", desc: "Prioritized list of reputation risks with severity ratings and immediate action recommendations." },
              { icon: "📋", title: "Action Roadmap", desc: "Step-by-step improvement plan with timelines, expected outcomes, and success metrics." },
            ].map((c) => (
              <div key={c.title} className="glass-panel border border-zinc-800/80 rounded-2xl p-8 text-left hover:bg-white/5 transition-all duration-300 card-premium-hover">
                <div className="w-14 h-14 rounded-full bg-zinc-900/50 flex items-center justify-center text-3xl mb-6 shadow-inner border border-white/5 select-none">
                  {c.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{c.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="#get-audit" className="btn-gold px-8 py-3.5 shadow-[0_0_20px_rgba(194,148,10,0.25)] hover:shadow-[0_0_30px_rgba(194,148,10,0.4)]">Get Your Free Report Now</Link>
          </div>
        </div>
      </section>

      {/* WHO NEEDS AUDIT - Tile Concept */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-2">Who It's For</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Who Needs a <span className="heading-script text-brand-blue">Reputation Audit?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏢", title: "Businesses", desc: "Companies facing negative reviews, bad press, or declining customer trust" },
              { icon: "👤", title: "Individuals", desc: "Professionals, executives, and public figures concerned about their online image" },
              { icon: "🚀", title: "Startups", desc: "New businesses wanting to establish a strong foundation before scaling" },
              { icon: "⚠️", title: "Crisis Situations", desc: "Organizations dealing with active PR crises needing immediate assessment" },
            ].map((c, idx) => (
              <div 
                key={c.title} 
                className="group premium-info-card bg-white border border-zinc-200 shadow-sm rounded-2xl p-8 text-center hover:border-brand-blue transition-all duration-400"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner border ${idx % 2 === 0 ? 'bg-blue-50/50 border-blue-100/50' : 'bg-amber-50/50 border-amber-100/50'} group-hover:-translate-y-2 transition-transform duration-500`}>
                  <span className="select-none filter grayscale group-hover:grayscale-0 transition-all duration-300">{c.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-zinc-900 mb-3 text-lg">{c.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">
              Questions About the <span className="heading-script text-brand-blue">Free Audit</span>
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* FINAL CTA - Premium Grand Finish */}
      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 premium-copy-panel">
          <p className="section-label text-brand-gold mb-4">Free — No Obligation</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to Know What People See When They <span className="heading-script text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Google You?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base lg:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
            Get your free, comprehensive reputation audit delivered within 48 hours. No credit card. No obligation. Just total clarity on your digital footprint.
          </p>
          <Link href="#get-audit" className="btn-gold text-base px-10 py-4 shadow-[0_10px_30px_rgba(194,148,10,0.3)] hover:shadow-[0_15px_40px_rgba(194,148,10,0.4)]">
            Get My Free Audit Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}