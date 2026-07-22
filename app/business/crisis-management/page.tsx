"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const crisisTypes = [
  { icon: "📰", category: "BAD NEWS", title: "Negative News Articles", desc: "Bad news stories that can destroy your brand name and make people not trust you." },
  { icon: "⭐", category: "FAKE REVIEWS", title: "Fake Review Attacks", desc: "When many fake bad reviews are posted suddenly to bring down your rating." },
  { icon: "📱", category: "SOCIAL ISSUES", title: "Social Media Problems", desc: "Viral bad videos, angry posts, or trending hashtags against your company." },
  { icon: "👤", category: "FOUNDER ISSUES", title: "Founder Controversies", desc: "Personal problems or bad news about the company owner or CEO." },
  { icon: "⚖️", category: "LEGAL CASES", title: "Court Cases Online", desc: "Legal problems or court orders that are showing up on Google search." },
  { icon: "⚖️", category: "COMPETITORS", title: "Competitor Attacks", desc: "When rival companies post fake news to damage your good name." },
  { icon: "🔓", category: "DATA LOSS", title: "Data Leak Problems", desc: "Helping you manage the news and customer anger after a data hack." },
  { icon: "😡", category: "ANGRY CUSTOMERS", title: "Customer Anger", desc: "Big complaints from customers that go viral and become a PR disaster." },
];

const processSteps = [
  { n: "01", title: "Fast Checking", desc: "When you call us, we check everything in a few hours to see how bad the problem is and where it is spreading." },
  { n: "02", title: "Stop the Spread", desc: "We work quickly to stop the bad news from spreading to other websites and social media pages." },
  { n: "03", title: "Right Messaging", desc: "We help you say the right things to your customers and the public to save your reputation." },
  { n: "04", title: "Hide Bad Links", desc: "We use our tools to push down all the negative Google links so no one can see them." },
  { n: "05", title: "Rebuild Trust", desc: "We create positive news to make your brand look good again and build back customer trust." },
  { n: "06", title: "24/7 Watching", desc: "We keep watching your name everyday so the problem does not come back." },
];

const faqs = [
  { q: "How fast can you help in a crisis?", a: "We work 24/7. When you call us with a big problem, our team starts working in just a few hours. For very bad cases, our full team is ready in 24 hours." },
  { q: "Why is crisis management different from normal ORM?", a: "Normal ORM takes time to slowly build a good image. Crisis management is very fast. We have to stop bad news, handle legal issues, and remove links all at the same time." },
  { q: "Can you help if the bad news is already old?", a: "Yes. It is best to call us early, but we have helped many companies fix bad news that was online for many months. It is never too late to clean your image." },
  { q: "Do you talk to our lawyers?", a: "Yes. We work with your legal team to make sure everything we do helps your court cases and follows the law." },
  { q: "How do you handle social media attacks?", a: "We watch Facebook, Twitter, and Instagram very closely. We help you reply the right way, stop bad hashtags, and put out positive posts to change the story." },
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
              Fast Online Crisis Help &amp; <span className="text-gradient-gold">ORM Services</span>
            </h1>
            
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              A bad news story or viral post can destroy your business in hours. When you are under attack online, every minute matters. Our team is ready 24/7 to help you.
            </p>

            {/* Premium Emergency Box */}
            <div className="glass-panel border-l-4 border-l-red-500 bg-red-950/20 rounded-r-xl p-6 mb-8 mt-4 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none group-hover:from-red-500/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg width="16" height="16" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ⚡ Big Problem? Call Us Now
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">Our emergency response team is available around the clock for immediate assistance.</p>
                <a href="tel:+918882788412" className="text-white font-heading font-bold text-xl hover:text-red-400 transition-colors inline-block">+9188827 88412</a>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "24/7 fast action team",
                "Fast removal of bad links",
                "Stopping bad news everywhere",
                "Smart messaging help",
                "Rebuilding your trust",
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
              Types of Big Problems <span className="heading-script text-brand-blue">We Solve</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-[0.95rem] mt-4 leading-relaxed">
              No matter what kind of bad news you are facing, our team knows exactly how to fix it and save your name.
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
              Why You Must Act <br className="hidden lg:block"/><span className="heading-script text-brand-blue">Very Fast</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              When bad news hits, time is very important. Every hour you wait, more people see the bad news and share it. This damages your business more and more.
            </p>
            
            <div className="space-y-5 mb-8">
              {[
                { time: "First 24 Hours", impact: "Bad news reaches your customers and partners.", color: "border-l-amber-500", iconText: "text-amber-500" },
                { time: "2 to 3 Days", impact: "Links show up on Google. People share it on social media. News websites write about it.", color: "border-l-red-500", iconText: "text-red-500" },
                { time: "After 1 Week", impact: "Bad links cover the first page of Google. Your business starts losing money.", color: "border-l-zinc-800", iconText: "text-zinc-800" },
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
              How We Stop <span className="heading-script text-brand-blue">The Problem</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
              We work very fast to stop the bad news from hurting you today, and we build a strong positive image to keep you safe in the future.
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
              Help For Both <span className="heading-script text-brand-gold">Companies &amp; People</span>
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

      <FAQSection items={[
        { question: "How quickly can you remove a viral bad video?", answer: "We work with website owners and use legal ways to try and take it down as fast as possible, sometimes in a few days." },
        { question: "Can you stop a trending hashtag against my company?", answer: "Yes, we use positive social media campaigns to change the story and bury the negative hashtags." },
        { question: "Will people know I hired you to fix my image?", answer: "No, our work is completely private and secret. No one will ever know." }
      ]} />
      <Footer />
    </div>
  );
}