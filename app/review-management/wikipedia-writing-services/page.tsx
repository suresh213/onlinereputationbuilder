// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const stats = [
//   { number: "100%", label: "Notability Assessment Accuracy" },
//   { number: "12+", label: "Years in Content PR Systems" },
//   { number: "350+", label: "Corporate Pages Approved" },
//   { number: "0", label: "Black Hat Methods Deployed" },
// ];

// const wikiHighlights = [
//   {
//     title: "Strict Notability Audit Protocols",
//     desc: "Wikipedia demands high-authority independent secondary press coverage. We execute rigorous baseline audits to map your current press visibility metrics cleanly.",
//   },
//   {
//     title: "Neutral Point of View Drafting",
//     desc: "Our experienced authors write completely un-biased, fact-grounded biographical profiles that adhere perfectly to Wikipedia's encyclopedic style logs.",
//   },
//   {
//     title: "Long-Term Monitoring Protection",
//     desc: "Community editors review page changes continuously. We track your published logs to clear out vandalism or biased updates from bad-faith actors fast.",
//   },
// ];

// const editorialWorkflow = [
//   { step: "01", title: "Notability Verification", desc: "We look at your existing tier-1 media source footprint to map verified references before initiating drafting work." },
//   { step: "02", title: "Neutral Text Composition", desc: "Our writers compile records using Wikipedia's strict citations formatting, framing text neutrally without promotional flags." },
//   { step: "03", title: "Community Submission Loop", desc: "We process article submissions through standard Articles for Creation paths, managing editorial commentary transparently." },
//   { step: "04", title: "Vandals Watch Setup", desc: "We hook up continuous profile scraping alerts to flag malicious page changes or deletion attempts by unverified wiki editors early." },
// ];

// const faqs = [
//   { q: "Can any company qualify for a Wikipedia page?", a: "No. Entities must fully meet Wikipedia's strict independent notability thresholds. If your tier-1 news coverage footprint is insufficient, we deploy targeted PR narratives first." },
//   { q: "How long does the article submission loop take?", a: "Draft creation requires 2 to 3 weeks. Platform peer review and community verification queues can range anywhere from 4 weeks to 4 months for complete approval." },
//   { q: "What happens if a page gets nominated for deletion?", a: "If an entry faces a deletion challenge, our senior editors jump into active talk page debates with policy references to defend page validity." },
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

// export default function WikipediaWritingServicesPage() {
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
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
//                 <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" /></span>
//                 Encyclopedic Authority Hub
//               </div>
//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Premium <span className="text-gradient-gold">Wikipedia Writing</span> &amp; Notability Advisory Services
//               </h1>
//               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//                 Establishing an official entry requires matching rigid notability criteria and objective content rules. Our specialist team researches, writes, and manages entries ethically to lock in your authority metrics.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Verify Your Notability Baseline</Link>
//                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-700 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1200&q=80" alt="Knowledge and Library Research Assets" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>
//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">Authority Audit</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">Request Wiki Evaluation</h2>
//                   </div>
//                 </div>
//                 <ContactForm dark />
//               </div>
//             </RevealOnScroll>
//           </div>
//         </div>
//       </section>

//       <div className="bg-[#0a1120] border-b border-zinc-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
//             {stats.map((s, i) => (
//               <RevealOnScroll key={s.label} delay={i * 100}>
//                 <div className="flex flex-col items-center justify-center gap-2 py-10 px-6 group hover:bg-white/5 transition-colors duration-300">
//                   <p className="font-heading text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">{s.number}</p>
//                   <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest text-center leading-tight">{s.label}</p>
//                 </div>
//               </RevealOnScroll>
//             ))}
//           </div>
//         </div>
//       </div>

//       <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <RevealOnScroll>
//               <div>
//                 <p className="section-label mb-2 text-brand-gold">Global Authority</p>
//                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">Why Encyclopedic Status Secures Corporate <span className="heading-script text-brand-blue">Market Trust</span></h2>
//                 <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">Wikipedia pages establish your brand credentials natively inside high-tier digital directories, heavily boosting your organic knowledge graph data scores globally.</p>
//               </div>
//             </RevealOnScroll>
//             <div className="grid grid-cols-1 gap-5">
//               {wikiHighlights.map((item) => (
//                 <div key={item.title} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
//                   <h4 className="font-bold text-zinc-900 text-sm mb-1.5">{item.title}</h4>
//                   <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <RevealOnScroll>
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">Our Compliance-Driven <span className="heading-script text-brand-blue">Editorial Workflow</span></h2>
//             </div>
//           </RevealOnScroll>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {editorialWorkflow.map((s, i) => (
//               <RevealOnScroll key={s.step} delay={i * 100}>
//                 <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30">
//                   <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors mb-4 block">{s.step}</span>
//                   <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
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
//               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">Platform Compliance <span className="text-gradient-gold">FAQs</span></h2>
//               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how we structure reliable, reference-dense pages adhering to standard platform policies safely.</p>
//               <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm">Speak With Our Specialist</a>
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
import PublisherStrip from "@/components/Publisherstrip";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const heroBullets = [
  "Create & publish Wikipedia articles for businesses, brands & executives",
  "Expert editors with deep knowledge of Wikipedia's notability guidelines",
  "Fully sourced, neutral-tone content that passes Wikipedia review",
  "Ongoing article maintenance, updates & vandalism monitoring",
];

const stats = [
  { number: "9+", label: "Years of Reputation Expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "300+", label: "Wikipedia Articles Published" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Lack of Wikipedia Presence Hurts Credibility",
    desc: "When prospects, journalists, and investors search for your brand or name, a Wikipedia page signals legitimacy at the highest level. Its absence — when competitors have one — creates an immediate credibility gap that is difficult to overcome.",
    icon: "🌐",
  },
  {
    title: "Wikipedia Controls How Google Describes You",
    desc: "Google's Knowledge Panel — the information box that appears on the right of search results — is primarily drawn from Wikipedia. Without a page, you have no control over your first impression on the world's most visited search engine.",
    icon: "🔎",
  },
  {
    title: "DIY Submissions Are Routinely Deleted",
    desc: "Wikipedia has strict notability and neutrality requirements. Articles created without expert knowledge of its guidelines are rejected or deleted within days. Professional creation is not a luxury — it is a necessity for successful publication.",
    icon: "⚠️",
  },
];

const services = [
  {
    step: "01",
    title: "Notability Assessment",
    desc: "Before writing a single word, we conduct a thorough notability assessment — reviewing your press coverage, citations, and public record to determine the strongest possible case for a Wikipedia article.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    ),
  },
  {
    step: "02",
    title: "Expert Wikipedia Authoring",
    desc: "Our experienced Wikipedia editors write your article in strict compliance with Wikipedia's neutral point of view, verifiability, and notability policies — maximising the probability of successful publication and retention.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    ),
  },
  {
    step: "03",
    title: "Citation & Source Building",
    desc: "Wikipedia requires every claim to be supported by reliable, independent sources. We research, compile, and properly format all citations — from news articles and industry publications to academic references.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
    ),
  },
  {
    step: "04",
    title: "Submission, Publishing & Monitoring",
    desc: "We manage the full Wikipedia submission and review process, responding to editor queries on your behalf. Post-publication, we monitor for vandalism, edit wars, and deletion nominations — keeping your article live and accurate.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    ),
  },
];

const articleTypes = [
  {
    title: "Business & Company Articles",
    desc: "Establish your company on Wikipedia with a professionally written article covering your history, products, leadership, and industry recognition — fully sourced and policy-compliant.",
  },
  {
    title: "Personal & Executive Profiles",
    desc: "Wikipedia profiles for CEOs, founders, authors, politicians, and public figures. We establish notability through career achievements, press coverage, and verifiable public contributions.",
  },
  {
    title: "Brand & Product Articles",
    desc: "For brands and products that have achieved sufficient public coverage, we create dedicated Wikipedia articles that strengthen brand recognition and search engine presence.",
  },
  {
    title: "Article Editing & Improvement",
    desc: "Existing Wikipedia article that is outdated, poorly sourced, or at risk of deletion? We edit, expand, and re-source your article to meet current Wikipedia standards.",
  },
];

const whyUs = [
  {
    title: "Wikipedia Policy Experts",
    desc: "Our team includes experienced Wikipedia editors with deep knowledge of notability guidelines, neutral point of view policy, and the Wikipedia review process — giving your article the highest chance of success.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Honest Eligibility Assessment",
    desc: "We will always tell you honestly whether your subject meets Wikipedia's notability criteria before taking your project. We never take work we cannot deliver — protecting both your time and your money.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
    ),
  },
  {
    title: "Full Disclosure Compliance",
    desc: "We operate in full compliance with Wikipedia's paid editing disclosure requirements. All work is conducted transparently and ethically — protecting you from future article challenges.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
  },
  {
    title: "Post-Publication Protection",
    desc: "Wikipedia articles require ongoing care. We provide long-term monitoring to protect against vandalism, biased edits, deletion nominations, and outdated content — keeping your article accurate and live.",
    icon: (
      <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "Does my business qualify for a Wikipedia article?",
    a: "Eligibility depends on Wikipedia's notability guidelines — primarily whether your business has received significant coverage in reliable, independent sources such as major news outlets, industry publications, or academic references. We conduct a free notability assessment before any project begins.",
  },
  {
    q: "How long does it take to get a Wikipedia article published?",
    a: "The typical timeline from project start to publication is 4–8 weeks. This includes research, writing, citation building, submission, and responding to any Wikipedia reviewer queries. Complex subjects or limited source availability can extend this.",
  },
  {
    q: "Can a Wikipedia article be deleted after it is published?",
    a: "Yes — Wikipedia articles can be nominated for deletion if they are later deemed non-notable or poorly sourced. Our ongoing monitoring service protects against this, and we rebuild the strongest possible sourced foundation to minimise deletion risk from the outset.",
  },
  {
    q: "Is paid Wikipedia editing allowed?",
    a: "Yes, with full disclosure. Wikipedia allows paid editing provided it is declared in accordance with the platform's terms of use. We operate in complete compliance with these requirements.",
  },
  {
    q: "Can you improve or update an existing Wikipedia article?",
    a: "Absolutely. We edit existing articles to improve sourcing, update outdated information, address deletion or neutrality notices, and expand coverage — bringing the article fully up to Wikipedia's current standards.",
  },
];

const testimonials = [
  {
    name: "Suresh Iyer",
    text: "We had tried twice to get a Wikipedia article published and been rejected both times. This team's notability assessment and citation work made all the difference — our article has been live for over a year with no issues.",
  },
  {
    name: "Kavya Reddy",
    text: "The executive profile they created for our CEO has had a measurable impact on how journalists and investors perceive him. The Google Knowledge Panel now shows our preferred information. Exceptional work.",
  },
  {
    name: "Amit Tiwari",
    text: "Professional, transparent, and genuinely expert. They told us upfront exactly what was needed and delivered precisely what was promised. Our company Wikipedia page has become one of our most valuable brand assets.",
  },
];

/* ─── Animation Components ───────────────────────────────────────────────── */

function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function WikipediaWritingServicesPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
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
                Wikipedia Writing Services
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Best Wikipedia Writing Services Company in <span className="text-gradient-gold">Kolkata, India</span>
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Establish unassailable credibility with a professionally written, policy-compliant Wikipedia article. We create, publish, and protect Wikipedia pages for businesses, brands, and executives — with a proven track record of successful publication.
              </p>
              <ul className="space-y-3 mb-10">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get My Wikipedia Article</Link>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">Call Us Now</a>
              </div>
            </RevealOnScroll>
          </div>
          {/* Stats Panel */}
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-gold/40 transition-all duration-300">
                  <span className="font-heading text-3xl font-black text-gradient-gold mb-2">{s.number}</span>
                  <span className="text-zinc-400 text-xs leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PUBLISHERS ───────────────────────────────────────────────── */}
      <PublisherStrip />

      {/* ── WHY IT MATTERS ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Wikipedia Is the World&apos;s <span className="heading-script text-brand-blue">Most Trusted Credibility Signal</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 text-[0.95rem]">
                Wikipedia is the fifth most visited website in the world and the primary source Google draws on for its Knowledge Panel. A Wikipedia presence doesn&apos;t just build credibility — it controls the narrative that appears when anyone searches for your brand, company, or name.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                Our team of expert Wikipedia editors has successfully published hundreds of articles for businesses and public figures across India and internationally — navigating Wikipedia&apos;s strict policies to deliver pages that stay live, stay accurate, and stay protected.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5 inline-block">Check My Eligibility Free</Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-1 gap-5">
              {impacts.map((item) => (
                <div key={item.title} className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-brand-blue/10 transition-all duration-300 shadow-sm">{item.icon}</div>
                  <div className="pt-1">
                    <h4 className="font-bold text-zinc-900 text-sm mb-1.5 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                    <p className="text-[0.85rem] text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">What We Do</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Our Wikipedia <span className="heading-script text-brand-blue">Writing Process</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">{s.icon}</div>
                    <span className="font-heading font-black text-4xl text-zinc-100 group-hover:text-brand-blue/10 transition-colors">{s.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10 leading-snug">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE TYPES ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Capability</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Articles We <span className="heading-script text-brand-gold">Create & Manage</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                Whether you need a new article created from scratch or an existing page improved and protected, our Wikipedia experts have the experience to deliver.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">Discuss My Article</Link>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
            {articleTypes.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </div>
                  <h4 className="font-bold text-zinc-900 text-[0.95rem] mb-2 group-hover:text-brand-gold transition-colors">{t.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{t.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">Why Us</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                Why We Are <span className="text-gradient-gold">Kolkata&apos;s Best Wikipedia Writing Company</span>
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-6 shadow-inner">{w.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{w.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{w.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Feedback</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Brands &amp; Leaders <span className="heading-script text-brand-blue">Across India</span></h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:border-brand-blue/40 transition-all duration-400">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-xs font-bold">{t.name.substring(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">Verified Client</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Common Questions</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">Wikipedia Writing <span className="heading-script text-brand-blue">FAQs</span></h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">Have questions about your Wikipedia eligibility or project? Get a free notability assessment — no obligation.</p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
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

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
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
                Establish Your Wikipedia Presence <span className="heading-script text-blue-400">and Own Your Narrative</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">Get a free notability assessment today. Our Wikipedia experts will review your eligibility and present a clear publishing plan — with no obligation.</p>
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">{item.icon}</div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a> : <p className="text-white font-heading font-bold text-lg">{item.value}</p>}
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
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Message</p>
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