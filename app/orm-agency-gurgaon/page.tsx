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
        href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20in%20Gurgaon."
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
  { name: "Real Estate & Consumer Portals", desc: "Suppress consumer grievances and false builder complaints on MouthShut and consumer forums" },
  { name: "Glassdoor & AmbitionBox", desc: "Remove unsubstantiated employee complaints harming Cyber City campus recruitment" },
  { name: "Google Page 1 News & Media", desc: "De-index sensationalized coverage, RERA litigation reports, and outdated allegations" },
  { name: "Google Autocomplete", desc: "Clear toxic search predictions such as 'scam', 'fraud', or 'delay' from brand queries" },
  { name: "High Court & NCLT Records", desc: "De-index dismissed or settled insolvency petitions and commercial court records" },
  { name: "Executive Wikipedia & Crunchbase", desc: "Build authoritative leadership profiles for CXOs, developers, and managing directors" }
];

export default function GurgaonORMPage() {
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
                Gurgaon Corporate Hub Office
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
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Gurgaon."
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(234,179,8,0.15),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span>Corporate Millennium City</span>
                <span>•</span>
                <span>DLF Cyber City & Golf Course Road</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                Best Online Reputation Management Agency in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                  Gurgaon (Gurugram)
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Protect Fortune 500 regional headquarters, luxury real estate developers, consulting firms, and CXO leadership from defamatory press, false consumer complaints, and malicious search attacks with complete confidentiality.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "194+ Corporates", sub: "Defended in Gurugram" },
                  { title: "Enterprise NDA", sub: "Strict Boardroom Privacy" },
                  { title: "Real Estate ORM", sub: "RERA Grievance Defense" },
                  { title: "Zero Retainer Risk", sub: "Milestone Deliverables" },
                ].map((b, i) => (
                  <div key={i} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <p className="text-xs sm:text-sm font-bold text-yellow-400">{b.title}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{b.sub}</p>
                  </div>
                ))}
              </div>

              {/* Service Pillars List */}
              <div className="mt-10 space-y-3">
                {[
                  "De-indexing negative press, sensational news articles, and defamatory media from Google Search Page 1",
                  "Resolving real estate consumer forum grievances on MouthShut, Indian Real Estate Board, and consumer portals",
                  "Scrubbing malicious Glassdoor and AmbitionBox employee feedback hurting corporate talent acquisition",
                  "Fixing Google Autocomplete negative suggestions (removing 'scam', 'fraud', 'delay', 'lawsuit')",
                  "De-indexing dismissed NCLT corporate insolvency disputes and quashed commercial court proceedings",
                  "Publishing positive executive thought leadership across Economic Times, Financial Express, and LiveMint",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-sm text-zinc-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stats Counter Row */}
              <div className="mt-10 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={99} duration={1500} />%
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Enterprise Client Retention</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={2900} duration={1800} />+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Defamatory Links Cleared</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ₹<Counter end={85} duration={1200} />Cr+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Tender & Real Estate Value Saved</div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest block">
                    Gurgaon Corporate Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Request Confidential Corporate Audit
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Receive detailed forensic analysis of all search vulnerabilities and takedown strategy within 60 minutes.
                  </p>
                </div>
                <ContactForm dark={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gurgaon Market Focus */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">
              Cyber City & Real Estate Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Safeguarding Gurugram Corporate HQs & Infrastructure Giants
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3">
              Home to over 250 Fortune 500 companies, Gurugram operates at the forefront of Indian enterprise. When commercial disputes or consumer complaints surface online, swift remediation is vital to preserving enterprise valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                🏢
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real Estate Developers & Builders</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Homebuyers invest their life savings based on trust. Unaddressed consumer complaints on MouthShut or sensationalized delay rumors on Page 1 severely impact unit sales and pre-launch booking velocity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                👔
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CXO & Boardroom Identity Shield</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Cyber extortion and anonymous defamation campaigns frequently target Managing Directors and C-suite executives. We fortify personal brand equity across verified media, Crunchbase, and high-authority biographical assets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                📊
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NCLT & Insolvency Record Cleansing</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Dismissed operational creditor claims or settled NCLT petitions often linger permanently on Google search snippets. We enforce Right to be Forgotten and Section 79 IT Act de-indexing to expunge historical disclosures.
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
              Platform Takedown & Management in Gurgaon
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Comprehensive legal dispute filing, webmaster outreach, and reverse SEO suppression.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-yellow-400/50 transition-colors">
                <h3 className="text-base font-bold text-white mb-1.5 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="text-xs font-normal text-yellow-400 font-mono">Protected</span>
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
              Frequently Asked Questions for Gurgaon Clients
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Expert clarity on corporate reputation recovery and legal de-indexing in Gurugram.
            </p>
          </div>

          <div className="space-y-3">
            <FAQItem
              q="Can real estate developers in Gurgaon remove negative consumer forum complaints?"
              a="Yes. Consumer complaint portals like MouthShut and consumer grievance boards frequently host unsubstantiated claims by competitors or anonymous accounts. We verify buyer identities, document guideline violations, and execute legal dispute notices to remove defamatory threads or suppress them off Page 1."
            />
            <FAQItem
              q="How do you handle negative Google Autocomplete suggestions for corporate brands?"
              a="When Google suggests damaging keywords such as 'scam', 'fraud', or 'lawsuit' next to your brand name, we execute organic positive query volume amplification and brand entity association. Within 4 to 8 weeks, Google's autocomplete algorithm clears the negative suggestion."
            />
            <FAQItem
              q="What is the timeframe for removing negative news articles from Google in Gurgaon?"
              a="For direct Google Legal de-indexing based on Section 79 IT Rules or privacy breaches, Google typically responds within 10 to 21 business days. In scenarios requiring algorithmic Reverse SEO suppression to push the article past Page 2, the campaign takes 60 to 90 days."
            />
            <FAQItem
              q="Where is your Gurgaon corporate engagement office located?"
              a="Our Gurugram desk operates at DLF Cyber City, Phase 2, conveniently serving corporate headquarters across DLF CyberHub, Golf Course Road, Udyog Vihar, and Sohna Road."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Safeguard Your Corporate Enterprise in Gurgaon
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 mb-8">
            Speak directly with our senior reputation counsel and corporate de-indexing team. All inquiries protected by mutual NDA.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Gurgaon."
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
