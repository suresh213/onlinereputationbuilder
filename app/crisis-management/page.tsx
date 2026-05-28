"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const crisisTypes = [
  { icon: "📰", title: "Negative Press Coverage", desc: "Damaging news articles or media stories that threaten your brand's public image." },
  { icon: "⭐", title: "Review Bombing", desc: "Sudden flood of fake or coordinated negative reviews across multiple platforms." },
  { icon: "📱", title: "Social Media Scandal", desc: "Viral negative content, hashtag campaigns, or social media controversies targeting your brand." },
  { icon: "👤", title: "Executive Controversy", desc: "Personal controversies involving company leadership that affect brand perception." },
  { icon: "⚖️", title: "Legal & Compliance Issues", desc: "Court cases, regulatory actions, or legal disputes creating negative search results." },
  { icon: "💢", title: "Competitor Attacks", desc: "Malicious competitor campaigns designed to damage your reputation unfairly." },
  { icon: "🔓", title: "Data Breach Fallout", desc: "Managing public trust and communications after a data security incident." },
  { icon: "😡", title: "Customer Backlash", desc: "Widespread customer complaints that escalate into public relations emergencies." },
];

const processSteps = [
  { n: "01", title: "Emergency Assessment", desc: "Within hours of your call, we assess the scope and severity of the crisis — identifying all affected platforms, the source, and immediate risks to your reputation." },
  { n: "02", title: "Crisis Containment", desc: "We act immediately to contain the spread of damaging content, coordinate platform takedowns, and prevent further escalation." },
  { n: "03", title: "Strategic Communications", desc: "Our team crafts precise messaging and response strategies that address the crisis head-on while protecting your brand's core reputation." },
  { n: "04", title: "Content Suppression", desc: "We deploy aggressive SEO and content strategies to push negative results down while elevating positive, authoritative content." },
  { n: "05", title: "Reputation Rebuilding", desc: "Long-term strategies to rebuild trust, strengthen your brand narrative, and emerge from the crisis stronger than before." },
  { n: "06", title: "Ongoing Monitoring", desc: "Continuous 24/7 monitoring to catch any resurgence of the crisis and react immediately to new threats." },
];

const faqs = [
  { q: "How quickly can you respond to a reputation crisis?", a: "We offer 24/7 emergency response for active reputation crises. Our team can begin assessment and containment within hours of your first contact. For severe crises, we can have a full team mobilized within 24 hours." },
  { q: "What makes a reputation crisis different from regular ORM?", a: "A reputation crisis requires immediate, coordinated action across multiple fronts simultaneously — unlike regular ORM which is proactive and gradual. Crisis management involves rapid response, media coordination, legal considerations, and aggressive content suppression all at once." },
  { q: "Can you help if a crisis has already been going on for weeks?", a: "Absolutely. While early intervention gives the best results, we have successfully managed and resolved crises that had been ongoing for months. It's never too late to start repairing your reputation." },
  { q: "Do you work with legal teams during a crisis?", a: "Yes. Our crisis management team works closely with your legal counsel to ensure all strategies are legally sound and complement any ongoing legal proceedings. We coordinate messaging to support your legal strategy." },
  { q: "How do you handle social media crises specifically?", a: "We monitor all major social platforms in real-time, coordinate rapid response strategies, engage with influencers and key voices, suppress trending negative hashtags, and build counter-narratives using positive social proof." },
];

export default function CrisisManagementPage() {
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"/>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              🚨 24/7 Crisis Response Available
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Online Crisis Management & ORM Services | Brand & Personal Protection
            </h1>
            <p className="text-white/70 text-base mb-5 leading-relaxed">
              A crisis has the potential to destroy years of hard work in hours. When your reputation is under attack, every minute counts. Our crisis management experts are on call 24/7 to protect your brand.
            </p>
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 mb-6">
              <p className="text-red-300 font-semibold text-sm mb-1">⚡ Active Crisis? Call Us Now</p>
              <p className="text-white/60 text-xs">Our emergency response team is available around the clock for immediate assistance.</p>
              <a href="tel:+919971687251" className="text-brand-gold font-bold text-sm hover:underline">+91 99716 87251</a>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                "24/7 emergency crisis response team",
                "Rapid content removal and suppression",
                "Multi-platform crisis containment",
                "Strategic communications & messaging",
                "Post-crisis reputation rebuilding",
              ].map((item) => (
                <li key={item} className="check-item text-sm text-white/80">
                  <span className="text-brand-gold font-bold flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gold">Get Emergency Help</Link>
              <a href="tel:+919971687251" className="btn-outline">Call Now: +91 99716 87251</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-7">
            <p className="section-label mb-2">Emergency Consultation</p>
            <h3 className="font-heading text-xl font-bold text-brand-dark mb-1">Tell Us About Your Crisis</h3>
            <p className="text-gray-400 text-xs mb-5">We respond within 2 hours — guaranteed</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <img src="https://buildbrandbetter.io/wp-content/uploads/2023/01/media-logo.png" alt="Featured in media" className="max-w-3xl mx-auto w-full h-auto object-contain opacity-70"/>
        </div>
      </div>

      {/* TYPES OF CRISES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">We Handle Every Type</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Types of Reputation Crises We Manage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm mt-3">
              No matter what kind of crisis you're facing, our team has the experience and tools to respond effectively and protect your reputation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {crisisTypes.map((c) => (
              <div key={c.title} className="service-card group">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-brand-dark text-sm mb-2 group-hover:text-brand-blue transition-colors">{c.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRISIS TIMELINE */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-2">The Cost of Waiting</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">
              Why Immediate Crisis Response is Critical
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              In a reputation crisis, time is the most valuable asset. Every hour that passes without a strategic response allows negative content to spread further, more people to form negative opinions, and the damage to deepen.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { time: "First 24 Hours", impact: "Crisis reaches your core audience and immediate stakeholders.", color: "border-yellow-400" },
                { time: "48–72 Hours", impact: "Content indexes on Google. Social shares multiply. Media picks up the story.", color: "border-orange-400" },
                { time: "1 Week+", impact: "Negative content dominates search results. Long-term brand damage begins.", color: "border-red-500" },
              ].map(t => (
                <div key={t.time} className={`bg-white rounded-lg p-4 border-l-4 ${t.color} shadow-sm`}>
                  <p className="font-bold text-brand-dark text-sm mb-1">{t.time}</p>
                  <p className="text-xs text-gray-600">{t.impact}</p>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-gold">Act Now — Get Help Immediately</Link>
          </div>
          <div className="text-center">
            <div className="bg-brand-dark rounded-2xl p-8">
              <p className="font-heading text-5xl font-bold text-white mb-2">2 hrs</p>
              <p className="text-white/60 text-sm mb-6">Average response time to active crises</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "500+", l: "Crises Managed" },
                  { n: "97%", l: "Resolved Successfully" },
                  { n: "24/7", l: "Availability" },
                  { n: "48 hrs", l: "First Results" },
                ].map(s => (
                  <div key={s.l} className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="font-heading text-2xl font-bold text-brand-gold">{s.n}</p>
                    <p className="text-white/50 text-xs mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Approach</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Our Crisis Management Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {processSteps.map((s) => (
              <div key={s.n} className="bg-brand-light rounded-xl p-6 flex gap-4 items-start">
                <div className="step-number font-heading flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND VS INDIVIDUAL */}
      <section className="py-16 px-4 bg-brand-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label text-yellow-400/80 mb-2">Tailored Solutions</p>
            <h2 className="font-heading text-3xl font-bold text-white">Crisis Protection for Brands & Individuals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">For Businesses & Brands</h3>
              <ul className="space-y-3">
                {["Corporate crisis communications strategy", "Stakeholder & investor messaging", "Employee and media statement drafting", "Multi-platform content suppression", "Brand recovery and narrative rebuilding", "Competitor sabotage countermeasures"].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-brand-gold mt-0.5">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-heading text-xl font-bold text-white mb-4">For Individuals & Executives</h3>
              <ul className="space-y-3">
                {["Personal reputation emergency response", "Private & discreet handling of sensitive matters", "Social media crisis management", "False allegation countering", "Personal brand narrative control", "Legal content removal coordination"].map(i => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-brand-gold mt-0.5">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Crisis Management Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* EMERGENCY CONTACT */}
      <section id="contact" className="py-16 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-80 h-80 bg-red-500 rounded-full"/>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 mb-6 inline-flex items-center gap-3">
              <span className="text-red-400 text-xl">🚨</span>
              <p className="text-red-300 font-semibold text-sm">Emergency? We respond in 2 hours — guaranteed</p>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Is Your Reputation Under Attack Right Now?
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Don't face a reputation crisis alone. Our team of ORM specialists, SEO experts, and crisis communications professionals are ready to mobilize immediately to protect your brand.
            </p>
            <div className="space-y-4">
              <a href="tel:+919971687251" className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors">
                <span className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-white/40">Emergency Hotline (24/7)</p>
                  <p className="font-bold">+91 99716 87251</p>
                </div>
              </a>
              <a href="mailto:buildbrandbetter@gmail.com" className="flex items-center gap-3 text-white hover:text-brand-gold transition-colors">
                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="font-semibold text-sm">buildbrandbetter@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-7">
            <p className="text-white font-bold text-lg mb-5">Request Emergency Assistance</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
