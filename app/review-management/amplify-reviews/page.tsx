// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const stats = [
//   { number: "88%", label: "Verified Review Acquisition Lift" },
//   { number: "96%", label: "Search Rich Snippet Integration Rate" },
//   { number: "24/7", label: "Automated Feedback Funnel Active" },
//   { number: "15k+", label: "5-Star Review Assets Generated" },
// ];

// const dynamicHighlights = [
//   {
//     title: "Post-Purchase Loop Integration",
//     desc: "We embed automated review prompts directly inside CRM transaction paths, prompting happy consumers to post genuine ratings seamlessly.",
//   },
//   {
//     title: "Negative Interception Routing",
//     desc: "Our smart forms pass dissatisfied buyers to dedicated support lines first, giving operational divisions options to resolve gaps before ratings drop public.",
//   },
//   {
//     title: "Rich Snippet SEO Schema Boost",
//     desc: "We structure customer review data using rich schema marks, pushing high rating aggregates straight onto Google Search engine snippets cleanly.",
//   },
// ];

// const optimizationSteps = [
//   { step: "01", title: "Funnel Touchpoint Map", desc: "We track consumer checkout cycles to inject review links where response velocity patterns score highest." },
//   { step: "02", title: "Smart Routing Rollout", desc: "We deploy routing paths to separate internal resolution loops for complaints from automated public posting links for happy buyers." },
//   { step: "03", title: "Market API Sync", desc: "We connect feedback flows seamlessly with standard Google Places, Trustpilot, and vendor endpoints to update star metrics safely." },
//   { step: "04", title: "Schema Index Tracking", desc: "Our team validates structural site tags to guarantee rich rating snippets process cleanly during automated web indexing runs." },
// ];

// const faqs = [
//   { q: "Is review routing compliant with marketplace terms?", a: "Yes. We encourage organic customer reviews and do not incentivize choices or manipulate text data. We optimize response velocity from your verified consumer base safely." },
//   { q: "How do rich review snippets impact traffic metrics?", a: "Displaying aggregate stars directly inside active Google Search loops lifts click-through visibility patterns significantly, decreasing user bounce numbers." },
//   { q: "Can this system route feedback into platform apps?", a: "Absolutely. Our funnels connect smoothly with Shopify apps, Custom Hubspot setups, global API hooks, and primary e-commerce portals easily." },
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

// export default function AmplifyReviewsPage() {
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
//                 Feedback Funnel Engine
//               </div>
//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 Amplify Positive <span className="text-gradient-gold">Customer Reviews</span> &amp; Dominate Search Rankings
//               </h1>
//               <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
//                 Bury old negative history organically by mobilizing your satisfied user base. Our custom routing funnels maximize positive acquisition speeds while resolving complaints internally.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Deploy Review Funnel System</Link>
//                 <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-700 text-zinc-300 hover:text-white transition-colors">Call: +9188827 88412</a>
//               </div>
//             </RevealOnScroll>
//           </div>

//           <div className="relative lg:mt-6 h-full w-full min-h-[500px]">
//             <RevealOnScroll delay={200} className="h-full">
//               <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50">
//                 <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" alt="Happy Consumer Client Interaction" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
//               </div>
//               <div className="relative glass-panel bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl m-4 mt-12 sm:m-8 lg:m-6 h-[calc(100%-3rem)]">
//                 <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <p className="section-label text-brand-gold mb-1">Growth Setup</p>
//                     <h2 className="font-heading text-xl font-bold text-white leading-tight">Request Funnel Launch</h2>
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
//                 <p className="section-label mb-2 text-brand-gold">Trust Generation</p>
//                 <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">Why Multi-Platform Social Proof Channels Shape <span className="heading-script text-brand-blue">Conversion Loops</span></h2>
//                 <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">A stagnant profile rating causes buyer hesitation patterns. We establish clean, compliance-safe automation streams that regularly surface positive user insights natively.</p>
//               </div>
//             </RevealOnScroll>
//             <div className="grid grid-cols-1 gap-5">
//               {dynamicHighlights.map((item) => (
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
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">Our Verified <span className="heading-script text-brand-blue">Acquisition Roadmap</span></h2>
//             </div>
//           </RevealOnScroll>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {optimizationSteps.map((s, i) => (
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
//               <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">Review Amplification <span className="text-gradient-gold">FAQs</span></h2>
//               <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">Learn how we process rich structural snippet loops and build clean buyer feedback velocities securely.</p>
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

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const heroBullets = [
  "Ethically generate more 5-star reviews on Google, Glassdoor & more",
  "Amplify genuine positive feedback to outweigh negative reviews",
  "Platform-compliant strategies that protect your account standing",
  "Measurably improve your star rating and online trust signals",
];

const stats = [
  { number: "9+", label: "Years of Reputation Expertise" },
  { number: "98%", label: "Clients Satisfied" },
  { number: "10,000+", label: "Positive Reviews Generated" },
  { number: "600+", label: "Projects Delivered Worldwide" },
];

const impacts = [
  {
    title: "Low Star Ratings Destroy First Impressions",
    desc: "Over 90% of consumers check online reviews before making a purchase decision. A low average rating on Google or industry platforms directly translates to lost revenue - before a prospect ever contacts you.",
    icon: "⭐",
  },
  {
    title: "Negative Reviews Dominate Your Profile",
    desc: "A handful of negative reviews can dominate your profile when positive feedback is absent. Amplifying your genuine satisfied customers' voices is the most powerful tool to restore and maintain a strong rating.",
    icon: "📢",
  },
  {
    title: "Competitors Are Outranking You on Trust",
    desc: "Review volume and recency are ranking factors on Google Maps and major platforms. Competitors with more frequent, recent positive reviews outrank you - capturing customers that should be yours.",
    icon: "🏆",
  },
];

const services = [
  {
    step: "01",
    title: "Review Generation Strategy",
    desc: "We design and implement a tailored review generation programme - identifying your happiest customers and the right moments in their journey to request authentic, platform-compliant reviews.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
    ),
  },
  {
    step: "02",
    title: "Multi-Platform Amplification",
    desc: "We amplify your positive reviews across Google, Glassdoor, Indeed, Trustpilot, Facebook, and industry-specific platforms - building a consistent 5-star presence everywhere your customers look.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
    ),
  },
  {
    step: "03",
    title: "Review Outreach Campaigns",
    desc: "We run structured, automated email and SMS outreach campaigns to your existing customer base - converting satisfied customers into published advocates at scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
  },
  {
    step: "04",
    title: "Review Monitoring & Reporting",
    desc: "We track every new review across all platforms, providing monthly reports on volume growth, star rating trajectory, and competitor benchmarking to demonstrate programme ROI.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
  },
];

const platforms = [
  {
    title: "Google Business Profile",
    desc: "The most impactful platform for local search visibility and consumer trust. We drive authentic Google reviews that improve your star rating and Maps ranking.",
  },
  {
    title: "Glassdoor & Indeed",
    desc: "Employer review platforms that directly affect recruitment. We help satisfied employees share their genuine experiences to build a compelling employer brand.",
  },
  {
    title: "Trustpilot & Facebook",
    desc: "High-authority consumer trust platforms. Positive reviews here build credibility with prospects and strengthen conversion rates across your sales funnel.",
  },
  {
    title: "Industry-Specific Platforms",
    desc: "From Practo and JustDial to real estate and hospitality portals - we generate reviews on the niche platforms that matter most in your industry.",
  },
];

const whyUs = [
  {
    title: "100% Platform Compliant",
    desc: "Every review generated follows platform guidelines strictly. We never use fake accounts, incentivised schemes, or tactics that put your business listing at risk.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Proven Volume Growth",
    desc: "Our clients see an average 3x increase in monthly review volume within the first 90 days - with measurable improvement in average star rating across all monitored platforms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
    ),
  },
  {
    title: "Multi-Platform Expertise",
    desc: "We understand the unique requirements, policies, and best practices of every major review platform - deploying the right approach for each to maximise review retention and impact.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
    ),
  },
  {
    title: "Transparent Reporting",
    desc: "Monthly reports track review volume, rating trends, platform comparisons, and competitor benchmarks. You always have full visibility into programme performance.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
  },
];

const faqs = [
  {
    q: "Are the reviews generated genuinely authentic?",
    a: "Yes, always. We contact your actual customers and employees and make it easy for them to share their genuine experience. Every review reflects a real person's real opinion - we never fabricate or purchase reviews.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see a meaningful increase in review volume within the first 30 days. Rating improvements typically become significant within 60–90 days as positive volume accumulates.",
  },
  {
    q: "Will this work for my industry?",
    a: "Yes. We have active programmes across retail, hospitality, healthcare, professional services, real estate, and technology. Our approach is customised for your specific industry platforms and customer journey.",
  },
  {
    q: "What happens to negative reviews?",
    a: "Review amplification works alongside our review removal and response management services for a complete strategy. Amplifying positive reviews also naturally dilutes the impact of any remaining negative feedback.",
  },
  {
    q: "Is there a risk to my Google or platform listings?",
    a: "No - our approach is fully compliant with platform terms of service. We never use prohibited tactics, incentivised schemes, or fake accounts that could trigger platform penalties.",
  },
];

const testimonials = [
  {
    name: "Aisha Patel",
    text: "We went from 3.2 to 4.6 stars on Google in under three months. The team built a systematic programme that turned our happy customers into vocal advocates. Revenue from new leads has increased noticeably.",
  },
  {
    name: "Manish Gupta",
    text: "The Glassdoor amplification service transformed our employer brand. We now attract significantly better candidates because our employee ratings tell the true story of our culture.",
  },
  {
    name: "Ritu Sharma",
    text: "Ethical, effective, and completely transparent. I was worried about compliance but they explained everything in detail. Our review count tripled and every single review is from a real customer.",
  },
];

const publishers = [
  { name: "Bloomberg",       logo: "https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg" },
  { name: "Forbes",          logo: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg" },
  { name: "Reuters",         logo: "https://www.vectorlogo.zone/logos/reuters/reuters-ar21.svg" },
  { name: "CNN",             logo: "https://www.vectorlogo.zone/logos/cnn/cnn-ar21.svg" },
  { name: "MarketWatch",     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MarketWatch_Logo.svg/320px-MarketWatch_Logo.svg.png" },
  { name: "Indian Express",  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Indian_Express_logo.svg/320px-The_Indian_Express_logo.svg.png" },
  { name: "Outlook",         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Outlook_India_logo.svg/320px-Outlook_India_logo.svg.png" },
  { name: "People",          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/People_Magazine_logo.svg/320px-People_Magazine_logo.svg.png" },
  { name: "Financial Times", logo: "https://www.vectorlogo.zone/logos/ft/ft-ar21.svg" },
  { name: "Silicon India",   logo: "https://www.siliconindia.com/images/si-logo.png" },
  { name: "Money",           logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Money_magazine_logo.svg/320px-Money_magazine_logo.svg.png" },
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

export default function AmplifyReviewsPage() {
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
                Amplify Reviews Services
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Best Review Amplification Company in <span className="text-gradient-gold">Delhi, India</span>
              </h1>
              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                Turn your happiest customers into your most powerful marketing asset. We ethically amplify genuine positive reviews across every platform that matters - driving measurable improvement in your star rating, trust, and revenue.
              </p>
              <ul className="space-y-3 mb-10">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Amplify My Reviews</Link>
                <a href="tel:+918882788412" className="btn-outline border-zinc-700 text-zinc-300 hover:text-white hover:border-white px-8 py-3.5">Call Us Now</a>
              </div>
            </RevealOnScroll>
          </div>
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
<section className="py-10 px-4 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <p className="text-center text-[0.65rem] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-6">As Featured In</p>
  </div>

  {/* Marquee track */}
  <div className="group relative overflow-hidden">
    {/* Left fade */}
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-50 to-transparent" />
    {/* Right fade */}
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-50 to-transparent" />

    <div
      className="flex items-center w-max"
      style={{ animation: "publisher-marquee 35s linear infinite" }}
    >
      {[...publishers, ...publishers].map((pub, i) => (
        <div
          key={`${pub.name}-${i}`}
          className="flex items-center justify-center flex-shrink-0 mx-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
          style={{ height: 40 }}
        >
          <img
            src={pub.logo}
            alt={pub.name}
            className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            loading="lazy"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              const span = document.createElement("span");
              span.className = "text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap";
              span.textContent = pub.name;
              el.parentElement?.appendChild(span);
            }}
          />
        </div>
      ))}
    </div>
  </div>

  <style>{`
    @keyframes publisher-marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .group:hover .flex.items-center.w-max {
      animation-play-state: paused;
    }
  `}</style>
</section>

      {/* ── WHY IT MATTERS ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label mb-2">Why It Matters</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Your Satisfied Customers Are <span className="heading-script text-brand-blue">Your Best Asset</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6 text-[0.95rem]">
                Most businesses have far more happy customers than unhappy ones - but unhappy customers are three times more likely to leave a review spontaneously. Our amplification service redresses this imbalance, ensuring your online reputation reflects your actual customer satisfaction.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                With a proven, platform-compliant methodology refined across hundreds of campaigns, we drive measurable increases in review volume and star rating - with complete transparency and zero risk to your listings.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5 inline-block">Get a Free Review Audit</Link>
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
                Our Review <span className="heading-script text-brand-blue">Amplification Services</span>
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

      {/* ── PLATFORMS ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          <div className="premium-copy-panel">
            <RevealOnScroll>
              <p className="section-label mb-2">Our Coverage</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Platforms We <span className="heading-script text-brand-gold">Amplify Across</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                From Google to niche industry portals, we amplify your positive reviews on the platforms that most directly influence your customers and prospects.
              </p>
              <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-10 py-3.5">Start Your Campaign</Link>
            </RevealOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10" />
            {platforms.map((t, i) => (
              <RevealOnScroll key={t.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-gold/40 hover:shadow-[0_10px_30px_-10px_rgba(194,148,10,0.15)] transition-all duration-300 relative z-10 h-full">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-gold mb-4 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
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
                Why We Are <span className="text-gradient-gold">Delhi&apos;s Best Review Amplification Company</span>
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
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">Trusted by Businesses <span className="heading-script text-brand-blue">Across India</span></h2>
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
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white border-l border-zinc-100 pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <RevealOnScroll>
              <div className="sticky top-24 lg:col-span-2">
                <p className="section-label mb-2">Common Questions</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">Review Amplification <span className="heading-script text-brand-blue">FAQs</span></h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">Ready to improve your star rating? Get a free review audit and action plan - no obligation.</p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200} className="lg:col-span-3">
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
                Don&apos;t Let a Low Rating <span className="heading-script text-brand-blue">Cost You Customers</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">Get a free review audit today. Our experts will show you exactly where your rating stands and present a clear amplification plan - with no obligation.</p>
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
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