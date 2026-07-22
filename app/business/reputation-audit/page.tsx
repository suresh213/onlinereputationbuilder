"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const auditItems = [
  { icon: "🔍", category: "GOOGLE SEARCH", title: "Search Results Check", desc: "We look at the first 5 pages of Google for your name, to see what good or bad links your customers are seeing." },
  { icon: "⭐", category: "REVIEWS", title: "Review Platform Check", desc: "We check your ratings on Google, Trustpilot, Facebook, and other sites to see what people are saying about you." },
  { icon: "📱", category: "SOCIAL MEDIA", title: "Social Media Check", desc: "We look at Facebook, Twitter, and LinkedIn to find any bad comments or fake accounts using your brand name." },
  { icon: "📰", category: "NEWS", title: "News and Articles", desc: "We search news websites to see if any positive or negative articles have been published about your business." },
  { icon: "📊", category: "COMPETITORS", title: "Compare With Competitors", desc: "We see how your online image compares to your top competitors so you know exactly where you need to improve." },
  { icon: "🗺️", category: "PLAN", title: "Step-by-Step Plan", desc: "We give you a simple roadmap showing exactly what we need to fix first to make your online image perfect." },
];

const steps = [
  { n: "01", title: "Fill the Form", desc: "Just give us your brand name and some basic details. It is completely free." },
  { n: "02", title: "We Do the Check", desc: "Our team checks over 100 places online, including Google, news sites, and social media." },
  { n: "03", title: "Get Your Report", desc: "In 48 hours, we will send you a simple report showing exactly what is good and bad about your online image." },
  { n: "04", title: "Talk to Us", desc: "Our expert will call you to explain the report and suggest how to fix the problems we found." },
];

const faqs = [
  { q: "What do I get in the free check?", a: "You get a report showing your Google search results, social media mentions, review ratings, and a clear list of what needs to be fixed." },
  { q: "How much time does the check take?", a: "We usually finish the complete check and send you the report in 24 to 48 hours." },
  { q: "Do I have to pay anything for this?", a: "No, this check is 100% free. We give you this report so you can see how we work before deciding to hire us." },
  { q: "What happens after I get the report?", a: "Our team member will explain the problems found in the report and tell you the exact steps needed to fix them." },
  { q: "Who can use this free check?", a: "We do this for big companies, small shops, startups, and even for single individuals who want to protect their name." },
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
              📊 Free ORM Audit Report - No Obligation
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Check Your Complete <span className="text-gradient-gold">Online Image</span>
            </h1>
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              We don't just do a simple search. Our team deeply checks Google results, social media, news, and reviews to find any hidden bad links that are making you lose customers and trust.
            </p>
            
            <div className="glass-panel border-l-4 border-l-brand-gold rounded-r-xl p-6 mb-8 mt-4 shadow-xl">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-4">✦ What our audit identifies:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Hidden bad links on Google", "Reasons why customers don't trust you", "Bad reviews hurting your sales", "How you compare to competitors", "Clear plan to fix your image"].map(i => (
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
              Complete Check of Your <span className="heading-script text-brand-blue">Online Image</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[0.95rem] mt-4 leading-relaxed">
              We look very deeply into every part of the internet. We find bad links and fake complaints that you might not even know about.
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
              How Our <span className="heading-script text-brand-blue">Free Check</span> Works
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              Our process is very simple and fast. From the first check to the final plan, we make sure you easily understand what needs to be fixed.
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
              What You Get in <span className="heading-script text-brand-gold">Your Report</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-[0.95rem] leading-relaxed">
              A very simple and clear report that shows exactly where your online image is weak and how to fix it.
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
              { icon: "🏢", title: "Businesses", desc: "Companies losing customers because of bad reviews and fake news" },
              { icon: "👤", title: "Individuals", desc: "Important people facing fake claims or privacy issues online" },
              { icon: "🚀", title: "Startups", desc: "New companies that want a clean and positive image on Google" },
              { icon: "⚠️", title: "Crisis Situations", desc: "Businesses that are in trouble and need fast help to hide bad news" },
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
          <p className="section-label text-brand-gold mb-4">Free - No Obligation</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[3.2rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
            See Exactly What People Find When They <span className="heading-script text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Google You</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base lg:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
            Get your 100% free online check in 48 hours. We keep everything private. See your real online image today.
          </p>
          <Link href="#get-audit" className="btn-gold text-base px-10 py-4 shadow-[0_10px_30px_rgba(194,148,10,0.3)] hover:shadow-[0_15px_40px_rgba(194,148,10,0.4)]">
            Get My Free Audit Now
          </Link>
        </div>
      </section>

      <FAQSection items={[
        { question: "How deep do you search?", answer: "We check up to 10 pages deep on Google and search many small websites, forums, and social media platforms to find bad links." },
        { question: "Will my competitors know I am checking this?", answer: "No. Our checking process is 100% private and secret. No one will know you requested this report." },
        { question: "How do you calculate my Reputation Score?", answer: "We look at how many good and bad links you have, your review ratings, and what people are saying on social media to give you a simple score out of 100." }
      ]} />
      <Footer />
    </div>
  );
}