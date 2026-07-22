



































            




          
                




        





      








          


            


            
            


          
                

            
          





"use client";
import { useState, useEffect, useRef } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

const platformLogos = [
  { name: "Google Search", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Glassdoor", img: "https://www.google.com/s2/favicons?domain=glassdoor.com&sz=128" },
  { name: "Trustpilot", img: "https://www.google.com/s2/favicons?domain=trustpilot.com&sz=128" },
  { name: "Facebook", img: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
  { name: "Tripadvisor", img: "https://www.google.com/s2/favicons?domain=tripadvisor.com&sz=128" },
  { name: "Indeed", img: "https://www.google.com/s2/favicons?domain=indeed.com&sz=128" },
  { name: "Yelp", img: "https://www.google.com/s2/favicons?domain=yelp.com&sz=128" },
  { name: "BBB", img: "https://www.google.com/s2/favicons?domain=bbb.org&sz=128" },
  { name: "G2 Crowd", img: "https://www.google.com/s2/favicons?domain=g2.com&sz=128" },
  { name: "Clutch", img: "https://www.google.com/s2/favicons?domain=clutch.co&sz=128" },
  { name: "RateMDs", img: "https://www.google.com/s2/favicons?domain=ratemds.com&sz=128" },
  { name: "Ripoff Report", img: "https://www.google.com/s2/favicons?domain=ripoffreport.com&sz=128" }
];

const services = [
  { icon: "👁️", title: "Track & Analyze", desc: "We keep a constant watch on your brand's digital footprint. Our team scans review platforms and digital channels to highlight positive sentiments and quickly identify negative feedback that could harm your business image." },
  { icon: "🗑️", title: "Mitigation & Removal", desc: "Negative feedback is inevitable for any growing business. We specialize in identifying defamatory, fake, or policy-violating reviews and escalating them to the respective platforms for swift removal." },
  { icon: "💬", title: "Engagement Strategy", desc: "We help you communicate effectively with your audience. By crafting personalized and empathetic responses to customer feedback, we demonstrate your commitment to client satisfaction and brand excellence." },
  { icon: "⭐", title: "Reputation Enhancement", desc: "Our strategies encourage your most satisfied customers to share their success stories online. We help you systematically build a repository of authentic, positive reviews that boost your brand authority." },
  { icon: "📣", title: "Proactive Outreach", desc: "We design tailored communication campaigns to engage with your clients. Our streamlined approach makes it effortless for them to leave glowing feedback, amplifying your positive digital presence." },
  { icon: "📊", title: "Performance Insights", desc: "Gain clarity with our comprehensive monthly analytics. We provide deep dives into customer sentiment, platform performance, and actionable recommendations to constantly elevate your brand." },
];

const faqs = [
  { q: "Can you guarantee the removal of bad Google reviews?", a: "While no one can guarantee removal, we successfully eliminate reviews that breach Google's guidelines. We compile evidence and submit formal requests. For immovable reviews, we apply robust suppression techniques." },
  { q: "How do you track feedback across so many sites?", a: "We utilize proprietary monitoring technology that aggregates your reviews from Google, Facebook, Trustpilot, and dozens of other platforms into one unified, easy-to-manage dashboard." },
  { q: "Are you able to take down fake Glassdoor comments?", a: "Yes. We regularly engage with platforms like Glassdoor to report and dispute defamatory or fake reviews, handling all necessary compliance and communication for you." },
  { q: "When will I see an improvement in my ratings?", a: "Most of our clients notice a positive shift in their ratings within the first 45 days. A complete reputation overhaul generally takes 3 to 6 months, depending on your starting point." },
  { q: "Do you offer review response writing services?", a: "Yes. Our reputation experts draft highly professional and brand-aligned responses to all incoming reviews, ensuring your customer service shines through." },
];

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

function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
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

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

function RatingDistributionWidget() {
  return (
    <div className="glass-panel-light rounded-2xl p-8 text-left font-sans select-none h-full flex flex-col justify-center relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(37,99,235,0.08)]">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <h4 className="font-heading font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5 border-b border-zinc-200/60 pb-3 relative z-10">
        Live Rating Distribution
      </h4>
      <div className="flex items-center gap-8 mb-8 relative z-10">
        <div className="text-center shrink-0">
          <p className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-600 leading-none">4.8</p>
          <div className="text-brand-gold text-sm mt-2 flex justify-center tracking-widest drop-shadow-sm">★★★★★</div>
          <p className="text-[0.65rem] text-zinc-500 uppercase tracking-wider font-bold mt-2">1,248 Reviews</p>
        </div>
        <div className="flex-1 space-y-3">
          {[
            { stars: 5, pct: 85, color: "bg-gradient-to-r from-emerald-400 to-emerald-500" },
            { stars: 4, pct: 10, color: "bg-gradient-to-r from-emerald-300 to-emerald-400" },
            { stars: 3, pct: 2, color: "bg-gradient-to-r from-amber-300 to-amber-400" },
            { stars: 2, pct: 1, color: "bg-gradient-to-r from-orange-300 to-orange-400" },
            { stars: 1, pct: 2, color: "bg-gradient-to-r from-red-300 to-red-400" }
          ].map(r => (
            <div key={r.stars} className="flex items-center gap-3 text-[0.7rem] text-zinc-600">
              <span className="w-3 text-right font-bold">{r.stars}</span>
              <div className="h-2.5 flex-1 bg-zinc-200/50 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="w-8 text-right font-bold">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/80 border border-zinc-200/50 rounded-xl p-4 text-center mt-auto shadow-sm relative z-10">
        <p className="text-[0.75rem] text-zinc-600 font-semibold">
          🚀 Verified sentiment index: <span className="text-emerald-600 font-black ml-1">EXCELLENT</span>
        </p>
      </div>
    </div>
  );
}

function ReviewResponseWidget() {
  return (
    <div className="premium-info-card border border-zinc-200 rounded-2xl bg-white overflow-hidden text-left font-sans select-none shadow-[0_20px_40px_-15px_rgba(9,15,28,0.05)]">
      <div className="bg-zinc-50/80 border-b border-zinc-200 px-5 py-4 flex justify-between items-center">
        <span className="text-[0.7rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
        {/* Hardcoded static badge */}
        <span className="bg-amber-50 border-amber-200 text-amber-700 text-[0.65rem] font-bold px-2.5 py-1 rounded border uppercase tracking-wider">
          Needs Response
        </span>
      </div>
      <div className="p-6 space-y-5">
        <div className="border border-zinc-100 bg-white shadow-sm rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="font-bold text-sm text-zinc-800">Rajesh K. (CEO)</span>
              <p className="text-[0.65rem] text-zinc-400 mt-1 uppercase tracking-wider">Google Maps · 2 hours ago</p>
            </div>
            <span className="text-brand-gold text-sm tracking-widest flex">★★★★★</span>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed italic">
            &ldquo;Exceptional service. Digital Identity Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
          </p>
        </div>

        <div className="space-y-2.5">
          <label className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-wider">Draft Professional Response</label>
          {/* Static text div instead of textarea */}
          <div className="form-input text-sm w-full p-4 min-h-[95px] bg-zinc-50/50 text-zinc-800 border border-zinc-200 rounded-md">
            Hello Rajesh, we truly appreciate your feedback! Ensuring your company's growth is our top priority. - ORB Team
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          {/* Static button with pointer-events-none so it doesn't even look clickable */}
          <button className="btn-blue text-[0.75rem] py-2.5 px-6 shadow-lg shadow-brand-blue/20 cursor-default pointer-events-none">
            Publish Response
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ReviewManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50" />
        <div className="hero-ambient hero-ambient-gold opacity-60 right-0 top-20" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-gold/10 border-brand-gold/30 text-brand-gold">
              ⭐ Top Review Management Company · India
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
              Professional <span className="text-gradient-gold">Review Management</span> Strategiess
            </h1>
            
            <p className="text-white/70 text-base md:text-lg mb-4 leading-relaxed max-w-xl">
              Our specialized reputation services empower Indian businesses to monitor, influence, and improve customer feedback across all major digital platforms.
            </p>
            <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-xl">
              Take charge of your brand narrative. With our strategic approach to online reviews, you can rapidly address customer concerns, shield your business from malicious fake reviews, and project an image of absolute reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
              {[
                "24/7 scanning of brand mentions and customer feedback",
                "Expert handling of both positive and negative customer interactions",
                "Swift identification and reporting of defamatory content",
                "Strategic brand enhancement for long-term customer trust",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-[0.65rem] shrink-0 mt-0.5 font-bold border border-brand-blue/30">✓</span>
                  <span className="font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Get A Free Consultation</Link>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/20 rounded-3xl blur-xl opacity-50"></div>
             <div className="glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-7 md:p-10 relative z-10 shadow-2xl">
                <div className="form-card-orbit opacity-50" />
                <p className="section-label mb-2 text-brand-gold">Start Today</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-6">Protect Your Reviews Now</h3>
                <ContactForm dark />
             </div>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS - Image Marquee Strip */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">As Featured In Leading Publications</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {[...mediaLogos, ...mediaLogos].map((m, i) => (
              <img 
                key={i} 
                src={m.img} 
                alt={m.name} 
                className="h-7 md:h-9 w-auto object-contain trust-logo-strip hover:scale-105 transition-transform duration-300 rounded-sm"
                title={m.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BUILD TRUST SECTION */}
      <section className="py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 premium-copy-panel">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-white border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <p className="section-label text-[0.65rem] text-zinc-600 m-0">Google Reviews</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Establish Authority with Proactive <span className="heading-script text-brand-gold">Review Management</span> Strategies
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4 text-[0.95rem]">
              Digital Identity Builder helps you solidify your market position. A well-managed Google review profile ensures your business makes a stellar first impression, capturing customer trust before they even visit your website.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
              We specialize in amplifying your positive customer experiences while tactfully managing any negative commentary, ensuring your brand is always seen in the best possible light.
            </p>
            
            <div className="premium-info-card bg-white rounded-xl p-6 border border-zinc-200 border-l-4 border-l-brand-blue mb-8 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-2 text-sm uppercase tracking-wider">Gain a Competitive Edge with Authentic Feedback</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Our review management solutions are designed to foster long-term brand equity, translating directly into higher engagement and conversions. We employ transparent and proven methodologies to elevate your reputation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Boosted brand credibility and consumer confidence", "Enhanced search visibility driven by positive ratings", "Streamlined customer communication and issue resolution", "Complete mastery over your brand's digital narrative"].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-blue font-bold text-[0.65rem]">✓</span>
                  </div>
                  <span className="text-sm text-zinc-700 font-medium leading-tight">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
            <RatingDistributionWidget />
          </div>
        </div>
      </section>

      {/* PLATFORMS - Upgraded to Premium Masonry Tile Grid */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="platform-grid-glow opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="section-label mb-3 text-brand-gold">Omni-Channel Coverage</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-12">
            Manage Reviews on <span className="text-gradient-gold">Google, Glassdoor, Trustpilot</span> &amp; Others
          </h2>
          
          <div className="premium-platform-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm relative z-20">
            {platformLogos.map((p) => (
              <div 
                key={p.name} 
                className="platform-tile flex flex-col items-center justify-center p-8 border-r border-b border-white/5 last:border-r-0 relative group min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="platform-icon flex flex-col items-center gap-4 relative z-10">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-10 h-10 object-contain rounded-md bg-white p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-500 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" 
                  />
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-brand-gold transition-colors duration-300 text-center">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPUTATION REPAIR */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mr-auto order-2 lg:order-1">
            <ReviewResponseWidget />
          </div>
          <div className="lg:col-span-6 premium-copy-panel order-1 lg:order-2">
            <p className="section-label mb-2 text-brand-blue">Reputation Repair</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Restore, Enhance, &amp; Safeguard Your <span className="heading-script text-brand-blue">Digital Identity</span>
            </h2>
            
            <blockquote className="border-l-4 border-brand-blue pl-5 py-2 mb-8 bg-zinc-50 rounded-r-xl pr-4">
              <p className="text-brand-blue font-bold text-sm tracking-wide italic leading-relaxed">
                &ldquo;Transforming a customer's negative experience into a positive outcome is the ultimate testament to brand integrity.&rdquo;
              </p>
            </blockquote>
            
            <h3 className="font-bold text-zinc-900 mb-3 text-sm">Effective strategies for mitigating the impact of negative feedback</h3>
            <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8">
              Your digital footprint matters. To effectively neutralize negative publicity, your brand must maintain a robust and proactive presence across all relevant consumer platforms.
            </p>

            <div className="space-y-5">
              <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-blue transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">💬</span>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Engage Authentically</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Address all feedback directly and professionally. Potential clients observe how you handle criticism, and a thoughtful response proves your unwavering dedication to customer care.</p>
              </div>
              <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-gold transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">⭐</span>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Amplify the Positive</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">The best defense against a bad review is an overwhelming number of good ones. We execute targeted outreach campaigns to gather authentic praise from your loyal customer base.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="relative py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="section-label mb-2">Our Solutions</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Digital Identity Builder Offers Advanced <br className="hidden lg:block"/>
              <span className="heading-script text-brand-blue">Review Management Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div 
                key={s.title} 
                className="card-premium-hover bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col h-full relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] via-transparent to-transparent group-hover:from-zinc-500/[0.05] transition-all duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:shadow-md group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-600 transition-colors duration-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REVIEWS MATTER - Featuring Animated Counters */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-b border-zinc-900">
        <div className="ambient-glow-blue top-0 right-0 opacity-30"></div>
        <div className="ambient-glow-gold bottom-0 left-0 opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Why It Matters</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight">
              Why Customer Reviews Dictate Your <span className="heading-script text-brand-gold">Business Success</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-[0.95rem]">
              Digital Identity Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews of businesses.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              We neutralize harmful content and promote authentic, positive narratives that strengthen your online footprint. Our strategies are designed to improve your search visibility, fortify your brand reputation, and drive sustainable business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: 93, suffix: "%", decimals: 0, l: "of consumers check reviews before buying" },
                { n: 4.2, suffix: "★", decimals: 1, l: "Average rating needed to earn customer trust" },
                { n: 89, suffix: "%", decimals: 0, l: "of consumers read business responses" },
                { n: 10, suffix: "x", decimals: 0, l: "more trust with 50+ positive reviews" },
              ].map(s => (
                <div key={s.l} className="border-l-2 border-brand-gold pl-4 py-1 group hover:border-brand-blue transition-colors">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                    <AnimatedCounter end={s.n} suffix={s.suffix} decimals={s.decimals} duration={2500} />
                  </p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="form-card-orbit opacity-60" />
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 relative z-10">ORM Trust Metric</h4>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Positive Index", val: "94%" },
                  { label: "Suppressed Defamatory Pages", val: "100%" },
                  { label: "Average Platform Score", val: "4.7 / 5.0" }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
                    <span className="text-zinc-400 text-sm font-medium">{m.label}</span>
                    <span className="text-brand-gold font-heading font-bold text-lg leading-none bg-brand-gold/10 px-3 py-1.5 rounded-lg border border-brand-gold/20">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-[length:24px_24px] opacity-30 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-heading text-xl md:text-2xl font-black text-zinc-950 uppercase tracking-wide text-left">
            Don't let a single negative result<br className="hidden md:block"/> ruin your business.
          </h2>
          <Link href="#contact" className="btn-blue !bg-zinc-950 !border-zinc-950 hover:!bg-zinc-800 hover:!border-zinc-800 shrink-0 shadow-xl shadow-zinc-900/20 text-sm py-4">
            Schedule a Strategy Blueprint Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">Common Questions About <span className="heading-script text-brand-blue">Review Management</span></h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"/>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Contact Us</p>
            <h2 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Take Control of Your <br className="hidden lg:block"/><span className="heading-script text-brand-gold">Reviews Today</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
            </p>
            
            <div className="space-y-5 border-t border-zinc-800/80 pt-8">
              {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
                <div key={i} className="flex items-center gap-4 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold text-xs shadow-inner flex-shrink-0">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl opacity-40"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-6">Get Free Review Audit</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={[
        { question: "How can I increase my 5-star ratings?", answer: "We deploy strategic feedback request campaigns, utilizing email and SMS, to naturally encourage your happy clients to share their positive experiences." },
        { question: "Is it possible to automate the review collection process?", answer: "Absolutely. Our solutions can seamlessly connect with your existing customer management systems to send out review requests at the perfect moment." },
        { question: "What is the best approach for handling negative comments?", answer: "Speed and professionalism are crucial. We assist in drafting empathetic, constructive responses and can oversee the entire engagement process on your behalf." }
      ]} />
      <Footer />
    </div>
  );
}