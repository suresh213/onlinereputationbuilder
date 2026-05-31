"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Original Data Extracted from PDF ─────────────────────────────────────── */

const heroBullets = [
  "Continuous monitoring of reviews across major platforms", //[cite: 12]
  "Professional responses to positive and negative feedback", //[cite: 12]
  "Detection and reporting of fake or spam reviews", //[cite: 12]
  "Reputation improvement strategies to build long-term trust", //[cite: 12]
];

const importancePoints = [
  "Build brand and authority and capture trust", //[cite: 12]
  "Higher visibility through positive reviews", //[cite: 12]
  "Better customer engagement and issue handling", //[cite: 12]
  "Full control over your online reputation narrative", //[cite: 12]
];

const repairSteps = [
  {
    title: "Have an online presence everywhere", //[cite: 12]
    desc: "To fix the negative aspects of your reputation, you need to be present all of the top review sites. If someone leaves a not-so-good review, you are more likely to see it and deal with it quickly or properly.", //[cite: 12]
  },
  {
    title: "Respond to reviews", //[cite: 12]
    desc: "You should try to reply to positive as well as negative reviews. There are potential customers who want to see what you have to say in your replies.", //[cite: 12]
  },
  {
    title: "Get more positive reviews", //[cite: 12]
    desc: "Great reviews tend to outnumber negative reviews. Start out by implementing a plan to obtain new and great reviews from happy and satisfied customers.", //[cite: 12]
  },
];

const advancedSolutions = [
  {
    title: "Reporting", //[cite: 12]
    desc: "We look at all your reviews and develop strategies for managing reviews efficiently and effectively.", //[cite: 12]
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
  },
  {
    title: "Monitor", //[cite: 12]
    desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites.", //[cite: 12]
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
  },
  {
    title: "Reputation Management", //[cite: 12]
    desc: "With powerful reputation management. With review monitoring, we identify reviews that can strengthen or damage your online reputation.", //[cite: 12]
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
];

const faqs = [
  { q: "What is a review management service?", a: "We provide comprehensive solutions to monitor, control, and respond to your customer reviews across all leading platforms to protect your brand image." }, //[cite: 12]
  { q: "What are the benefits of reviews management services?", a: "Benefits include building brand authority, capturing trust, improving search visibility, better customer engagement, and gaining full control over your online narrative." }, //[cite: 12]
  { q: "What does Review Management Services do?", a: "We track customer reviews, scour millions of web pages, report on fake reviews, and develop strategies for managing feedback efficiently." }, //[cite: 12]
  { q: "How do I remove negative reviews from Google?", a: "We assist in the creation, handling, and trimming to fight fake reviews and downplay the bad stuff to ensure your business remains reputable." }, //[cite: 12]
  { q: "How long does it take to remove google reviews?", a: "Timelines vary depending on the platform and the nature of the review. We implement highly effective strategies to address harmful content as quickly as possible." }, //[cite: 12]
];

const testimonials = [
  {
    name: "Garima", //[cite: 12]
    text: "I had a bad experience with an online reputation management company in the past, but working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation and it's making a huge impact on my business.", //[cite: 12]
    initials: "G",
  },
  {
    name: "Kapil", //[cite: 12]
    text: "I had a bad experience with an online reputation management company in the past, but working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation and it's making a huge impact on my business.", //[cite: 12]
    initials: "K",
  },
  {
    name: "Jashmin", //[cite: 12]
    text: "I had a bad experience with an online reputation management company in the past, but working with this company was a completely different experience. They were professional, responsive, and most importantly they delivered results. I can see the difference in my online reputation and it's making a huge impact on my business.", //[cite: 12]
    initials: "J",
  },
];

// Reconstructed sliding marquee data using Favicon API
const publisherLogos = [
  { name: "TikTok", img: "https://www.google.com/s2/favicons?domain=tiktok.com&sz=128" }, //[cite: 12]
  { name: "CNN", img: "https://www.google.com/s2/favicons?domain=cnn.com&sz=128" }, //[cite: 12]
  { name: "CBC News", img: "https://www.google.com/s2/favicons?domain=cbc.ca&sz=128" }, //[cite: 12]
  { name: "Forbes", img: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" }, //[cite: 12]
  { name: "Daily Journal", img: "https://www.google.com/s2/favicons?domain=dailyjournal.com&sz=128" }, //[cite: 12]
  { name: "St. Louis", img: "https://www.google.com/s2/favicons?domain=stltoday.com&sz=128" }, //[cite: 12]
  { name: "Indian Express", img: "https://www.google.com/s2/favicons?domain=indianexpress.com&sz=128" },
  { name: "BusinessLine", img: "https://www.google.com/s2/favicons?domain=thehindubusinessline.com&sz=128" },
  { name: "Bloomberg", img: "https://www.google.com/s2/favicons?domain=bloomberg.com&sz=128" },
];

/* ─── Animation Hook ───────────────────────────────────────── */

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

/* ─── Page ──────────────────────────────────────────────────────── */

export default function ReviewManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - High-End Dark Layout ─────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
                </span>
                Review Management Solutions
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Professional Review Management Services That <span className="text-gradient-gold">Protect Your Brand</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
                Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all the leading platforms. Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews. Our strategies are effective techniques applied to build trust and enhance the reputation of your business online.
              </p>

              <p className="text-white font-bold mb-4 mt-6">What do we offer in our Online Review Management Services?</p>

              <ul className="space-y-3 mb-10 max-w-xl">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue text-xs flex-shrink-0 mt-0.5 shadow-inner">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                  Get Started
                </Link>
                <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white transition-colors">
                  Call: +91 88827 88412
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Contact Form (No Image background, cleanly floating) */}
          <div className="relative lg:mt-6">
            <RevealOnScroll delay={200}>
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-blue/50 via-brand-gold/50 to-transparent" />
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                    <h2 className="font-heading text-xl font-bold text-white leading-tight">
                      Restore Your Brand
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                </div>
                <ContactForm dark />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TOUCHPOINTS / MEDIA MARQUEE ─────────────────────────────────────── */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">As Featured In</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {/* Duplicated array for seamless CSS marquee scroll */}
            {[...publisherLogos, ...publisherLogos].map((m, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="h-6 w-auto object-contain rounded-sm filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-zinc-800 transition-colors">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BUILD TRUST SECTION (Split Layout) ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">First Impressions Matter</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Build Trust With a Powerful <span className="heading-script text-brand-blue">Google Review Management Service</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-6 text-[0.95rem]">
                  Build Brand Better can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust in all the points of contacts.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-10 text-[0.95rem]">
                  We assist you in creation, handling and trimming to fight the positive fake reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
                </p>
                
                <Link href="#contact" className="btn-blue shadow-lg shadow-brand-blue/20 px-8 py-3.5">
                  Protect Your Brand
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
                <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                    alt="Review Management Team" 
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl hidden md:flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Trust Established</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Brand Protected</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── BURY YOUR COMPETITION & LONG TERM SUCCESS ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Outpace Rivals</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight mb-5">
                Bury Your Competition With Positive Customer Feedback and Obtain More Leads, Calls, and Sales.
              </h2>
              <p className="text-brand-blue font-bold text-lg">Complete Business Review Management Service for Long-Term Success</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
            <RevealOnScroll delay={100}>
               <div className="bg-zinc-50 rounded-3xl p-8 lg:p-10 shadow-sm border border-zinc-200">
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    Our business review management service focuses on developing a long-term reputation strategy, which leads to sales and conversions. We enhance positive customer experience and fix harmful content by using methods that are ethical and effective through our sophisticated review management program.
                  </p>
                  <p className="text-zinc-600 leading-relaxed">
                    Our experts work with you to implement a highly effective strategy for obtaining positive customer reviews on Google Places, Yelp, and other relevant review sites.
                  </p>
               </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-4">Why online reputation management is important?</h3>
                {importancePoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-[0.95rem] text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW TO REPAIR ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 premium-section-dark relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                Manage, build, and preserve your <span className="text-gradient-gold">online reputation.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                If you can turn a negative review into a positive customer experience, your online reputation will increase.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mb-10">
            <h3 className="font-heading text-2xl font-bold text-white text-center mb-10">How to repair your online reputation by removing negative reviews?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {repairSteps.map((step, i) => (
                <RevealOnScroll key={step.title} delay={i * 100}>
                  <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 h-full">
                    <div className="text-brand-gold font-mono text-4xl font-black mb-4 opacity-50">0{i+1}</div>
                    <h4 className="font-heading font-bold text-xl text-white mb-3">{step.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY REVIEWS MATTER MORE THAN EVER ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <RevealOnScroll>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] -z-10"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Business Growth and Charts" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="premium-copy-panel order-1 lg:order-2 pl-0 lg:pl-8">
            <RevealOnScroll>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                Why Do Online Reviews Matter More Than Ever for <span className="heading-script text-brand-blue">Your Business Growth?</span>
              </h2>
              <div className="space-y-6">
                <p className="text-zinc-600 leading-relaxed text-[0.95rem]">
                  Build Brand Better assists in making your business recognizable in a good and reliable manner. In the modern world before deciding on a purchase, potential customers will be busy searching good online reviews of businesses. Strong digital reputation is a source of confidence, credibility and assists your brand to stand out among the competition.
                </p>
                <p className="text-zinc-600 leading-relaxed text-[0.95rem]">
                  We deal with negative content that impacts on your business and tactfully settles on positive, value-based content that will enhance your web presence.
                </p>
                <div className="bg-blue-50 border-l-4 border-brand-blue p-5 rounded-r-xl">
                  <p className="text-brand-dark font-medium text-[0.95rem]">
                    We will assist your business to rank higher in Google, build stronger brand value, attract, impress and convert more leads on the internet using proven strategies.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── ADVANCED SOLUTIONS ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
                Build Brand Better offers advanced review management solutions for <span className="heading-script text-brand-blue">your business to grow.</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {advancedSolutions.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.15)]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
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
            <div className="text-center mb-12">
              <p className="section-label mb-2 justify-center text-brand-gold">Testimonial</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
              <p className="text-zinc-400 text-[0.95rem] mt-4 leading-relaxed">We pay attention to details and quality, good communication and strong customer relationship. Here is what they say about us.</p>
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
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ - Premium Upgraded Dark Layout ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t border-zinc-900">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
            
            <RevealOnScroll>
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                  <p className="text-[0.65rem] font-bold tracking-wider uppercase text-brand-gold m-0">Knowledge Base</p>
                </div>
                
                <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Frequently Asked <br className="hidden lg:block"/>
                  <span className="text-gradient-gold">Questions</span>
                </h2>
                
                <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10 max-w-md">
                  Everything you need to know about our review management processes and how we protect your digital footprint.
                </p>
                
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hidden lg:block">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue border border-brand-blue/30 shadow-inner">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Still have questions?</p>
                      <p className="text-zinc-400 text-xs mt-0.5">Our experts are available 24/7.</p>
                    </div>
                  </div>
                  <a href="tel:+918882788412" className="btn-gold w-full text-center block py-3.5 text-sm shadow-lg shadow-brand-gold/20">
                    Get a Free Consultation
                  </a>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-gold/30 via-brand-blue/10 to-transparent rounded-3xl opacity-50 blur-sm pointer-events-none"></div>
                <div className="bg-zinc-950/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-zinc-800 p-6 md:p-10 relative z-10 faq-dark-override">
                  <FAQ items={faqs} />
                </div>
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
              <p className="section-label text-brand-gold mb-3">Act Now</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don't let a single negative Google result <span className="heading-script text-brand-blue">ruin your business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a Free Consultation. Our experts will assess your situation and present a clear action plan — with no obligation.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Hotline", value: "+91 88827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Location", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
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
                <p className="text-white font-heading font-bold text-xl mb-2">Business Solution</p>
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