"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

/* Animated stats counter */
function Counter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTs: number;
          const step = (ts: number) => {
            if (!startTs) startTs = ts;
            const p = Math.min((ts - startTs) / duration, 1);
            setCount(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

/* Sticky WhatsApp CTA (Mobile) */
function StickyWA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-3 left-0 right-0 z-50 px-3 md:hidden flex justify-center">
      <a
        href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20in%20Bangalore."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-[0_4px_25px_rgba(16,185,129,0.5)] border border-emerald-400/30 transition-all active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.525 5.843L.057 23.882a.5.5 0 00.61.65l6.238-1.637A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.001-1.354l-.36-.213-3.722.977.995-3.63-.234-.374A9.866 9.866 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
        </svg>
        <span>Confidential WhatsApp Chat</span>
      </a>
    </div>
  );
}

/* Interactive FAQ Item Component */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-800/90 rounded-xl bg-zinc-900/60 overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm hover:text-yellow-400 transition-colors"
      >
        <span>{q}</span>
        <span className={`text-yellow-400 transform transition-transform duration-200 text-lg flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

const platforms = [
  { name: "Glassdoor & AmbitionBox", desc: "Clean toxic ex-employee smear campaigns and defend tech talent recruitment" },
  { name: "Google Play & iOS App Store", desc: "Eradicate coordinated 1-star bot spam, restore developer trust & app rankings" },
  { name: "Reddit & Hacker News", desc: "Neutralize tech community slander threads, false scam claims, and viral attacks" },
  { name: "Google Search Page 1", desc: "De-index sensational media coverage, venture litigation, and outdated articles" },
  { name: "Trustpilot & ProductHunt", desc: "Dispute fraudulent competitor reviews and build verified SaaS buyer sentiment" },
  { name: "Google Autocomplete", desc: "Clear negative keywords like 'scam', 'layoffs', or 'lawsuit' from founder searches" }
];

export default function BangaloreORMPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-yellow-400/30 text-zinc-100">
      <StickyWA />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center p-1.5 shadow-md shadow-amber-500/10">
              <Image
                src="/logo-orm.webp"
                alt="Online Reputation Builder Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-white text-sm sm:text-base block tracking-tight">
                Online Reputation <span className="text-yellow-400">Builder</span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold block">
                Bangalore Tech Hub Office
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+918882788412"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-yellow-400 transition-colors"
            >
              <span>+91 88827 88412</span>
            </a>
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-950/40"
            >
              <span>WhatsApp Hotline</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-zinc-800/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span>Silicon Valley of India</span>
                <span>•</span>
                <span>Koramangala, Indiranagar & Whitefield</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                Best Online Reputation Management Agency in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-yellow-400">
                  Bangalore
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Safeguard tech founders, Series A-D startups, SaaS enterprises, and executive leadership from defamatory press, toxic Glassdoor reviews, App Store bot attacks, and AI search misrepresentation.
              </p>

              {/* Trust Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "218+ Startups", sub: "Protected in Bangalore" },
                  { title: "Strict NDA", sub: "Pre-Round Privacy" },
                  { title: "App Stores", sub: "Bot Review Removal" },
                  { title: "Fast-Track", sub: "24-48h Crisis Action" },
                ].map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <p className="text-xs sm:text-sm font-bold text-yellow-400">{b.title}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>

              {/* Service Bullets */}
              <div className="mt-10 space-y-3">
                {[
                  "Eliminating toxic Glassdoor and AmbitionBox reviews before hiring drives and fundraising rounds",
                  "Fixing Google Play and iOS App Store 1-star review bombing and malicious ratings",
                  "De-indexing sensational tech blogs, premature layoff rumors, and unverified litigation",
                  "Founder personal branding and Wikipedia profile creation with Tier-1 media citations",
                  "Controlling AI Overview and ChatGPT search answers for corporate brand entities",
                  "Reverse SEO asset networks suppressing smear links past Page 3 of Google search",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-sm text-zinc-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Counter Row */}
              <div className="mt-10 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={99} duration={1500} />%
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">SaaS & Founder Client Retention</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={4800} duration={1800} />+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">App & Web Reviews Moderated</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ₹<Counter end={120} duration={1200} />Cr+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Client Valuation Protected</div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block">
                    Bangalore Priority Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Book Confidential Startup Audit
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Receive technical forensic review analysis and Google clean-up plan under strict mutual NDA.
                  </p>
                </div>
                <ContactForm dark={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bangalore Specific Ecosystem Section */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">
              Tech Capital Focus
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Why Bangalore Tech Startups & Founders Rely on Our ORM
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3">
              In Bangalore&apos;s fast-moving venture ecosystem, talent acquisition and investor due diligence rely heavily on what Google search and employee platforms display.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg mb-4">
                💼
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pre-Fundraising Diligence Defense</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Venture capital funds and private equity firms run comprehensive digital forensic checks on founders and target entities. We scrub outdated disputes, unverified blogs, and smear attempts before your term sheet closes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                📱
              </div>
              <h3 className="text-lg font-bold text-white mb-2">App Store Rating Defense</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Coordinated 1-star review floods from competitors or disgruntled users immediately drop app conversion rates and algorithmic ranking in Google Play and Apple App Store. We remove policy-violating ratings rapidly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg mb-4">
                👥
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Employer Brand Protection</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Top engineering and product talent check Glassdoor and AmbitionBox before accepting offers. False or slanderous reviews by ex-employees increase recruitment costs by 40 percent. We dispute and remove false claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Removal Grid */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Platform Takedown & Management Capabilities in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Deep platform partnerships and certified legal pathways ensuring lawful removal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-blue-400/50 transition-colors">
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-xs font-normal text-blue-400 font-mono">Protected</span>
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Frequently Asked Questions for Bangalore Clients
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Everything you need to know about our technology-focused ORM services.
            </p>
          </div>

          <div className="space-y-3">
            <FAQItem
              q="Can you remove fake employee reviews from Glassdoor and AmbitionBox?"
              a="Yes. Both Glassdoor and AmbitionBox have strict community guidelines prohibiting defamation, disclosure of proprietary trade secrets, unverified accusations, and fake accounts. We audit the technical evidence and file formal platform dispute submissions to permanently remove non-compliant reviews."
            />
            <FAQItem
              q="How do you handle bot attacks on Google Play Store or iOS App Store ratings?"
              a="When a mobile app experiences coordinated 1-star bot spam, we extract device identifiers, timestamps, and sentiment patterns, then escalate the dispute directly to Google Play Developer Support and Apple App Review teams to mass-purge fraudulent ratings and restore original scores."
            />
            <FAQItem
              q="What strategies do you use for CEO and founder reputation in Bangalore?"
              a="We create and optimize executive search real estate across Crunchbase, LinkedIn, Forbes Technology Council, personal websites, and high-DA press articles. This establishes an unbreakable Page 1 shield that pushes negative results and irrelevant forums down to obscurity."
            />
            <FAQItem
              q="Can you prevent ChatGPT and AI Overviews from citing negative articles?"
              a="Yes. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) involve feeding authoritative, verified structured data and authoritative schema across tier-1 publishers to rewrite the knowledge graph that LLMs use when generating answers about your brand."
            />
            <FAQItem
              q="Where is your Bangalore tech hub office located?"
              a="Our Bangalore client engagement center is situated at Prestige Meridian, M.G. Road, Ashok Nagar, conveniently connected to Koramangala, Indiranagar, and Whitefield."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Protect Your Venture Capital & Brand Equity in Bangalore
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 mb-8">
            Do not let competitor smears or rogue forum threads jeopardize your growth. Contact Bangalore&apos;s leading ORM team today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
            >
              WhatsApp Immediate Consultation
            </a>
            <a
              href="tel:+918882788412"
              className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all"
            >
              Call Hotline: +91 88827 88412
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
