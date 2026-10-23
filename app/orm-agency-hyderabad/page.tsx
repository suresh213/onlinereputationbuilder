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
        href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20in%20Hyderabad."
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
  { name: "Google Reviews & Maps", desc: "Flag and delete fraudulent 1-star ratings across Hyderabad and Secunderabad" },
  { name: "Google Page 1 Defamatory Press", desc: "De-index sensationalized media reports, biased blogs, and outdated articles" },
  { name: "Healthcare & Doctor Portals", desc: "Remove false complaints and unverified attacks on Practo, Google Maps, and Lybrate" },
  { name: "Glassdoor & AmbitionBox", desc: "Scrub toxic former employee grievances to protect HITEC City tech recruitment" },
  { name: "Google Autocomplete", desc: "Clear negative suggestions like 'scam', 'fraud', or 'raid' from executive searches" },
  { name: "YouTube & Reddit Slander", desc: "Execute copyright and community guideline takedowns on smear video channels" }
];

export default function HyderabadORMPage() {
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
                Hyderabad Regional Office
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
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Hyderabad."
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
                <span>City of Pearls & Pharma Hub</span>
                <span>•</span>
                <span>HITEC City, Gachibowli & Banjara Hills</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                Best Online Reputation Management Agency in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                  Hyderabad
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                Protect pharmaceutical pioneers, IT enterprises, healthcare hospital networks, and executive leadership from defamatory search results, false reviews, and malicious online attacks with 100 percent confidential legal execution.
              </p>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "172+ Clients", sub: "Protected in Hyderabad" },
                  { title: "Pharma ORM", sub: "Regulatory Privacy" },
                  { title: "Hospital ORM", sub: "Doctor Review Defense" },
                  { title: "Strict NDA", sub: "100% Confidentiality" },
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
                  "De-indexing sensational news articles, smear blogs, and defamatory media from Google Search Page 1",
                  "Scrubbing false Google Maps 1-star reviews for hospitals, clinics, and medical practices",
                  "Removing toxic Glassdoor and AmbitionBox reviews to protect campus hiring in HITEC City",
                  "Clearing negative Google Autocomplete keywords ('scam', 'fraud', 'arrest', 'case')",
                  "De-indexing dismissed legal cases, police FIRs, and civil court records under privacy rules",
                  "Building authoritative digital PR on Mint, Economic Times, and Deccan Chronicle",
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
                    <Counter end={98} duration={1500} />%
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Healthcare & Tech Retention</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={2600} duration={1800} />+
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Negative Links Expunged</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    <Counter end={48} duration={1000} />h
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">Emergency Escalation Protocol</div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5">
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest block">
                    Hyderabad Regional Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Request Confidential ORM Audit
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

      {/* Hyderabad Business Ecosystem */}
      <section className="py-16 sm:py-20 border-b border-zinc-800/80 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest block mb-2">
              Industry Specializations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              Tailored ORM for Hyderabad Tech, Pharma & Healthcare Giants
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3">
              Hyderabad is a global pharmaceutical capital and premier technology powerhouse. Protecting your enterprise sentiment across global search engines is essential for export licensing, institutional funding, and clinical trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                🔬
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pharma & Biotech Manufacturers</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Genome Valley enterprises face international regulatory scrutiny. Sensationalized patent disputes or misleading import warning blogs harm global investor sentiment. We ensure clean, factual Google search results worldwide.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                🏥
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hospital Chains & Specialists (Banjara Hills)</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Hyderabad is a primary hub for domestic and international medical tourism. Unverified 1-star Google Maps reviews, false malpractice allegations, and extortion campaigns are swiftly investigated and legally disputed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-lg mb-4">
                💻
              </div>
              <h3 className="text-lg font-bold text-white mb-2">HITEC City Tech & IT Services</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Software developers and enterprise technology providers rely on immaculate Glassdoor ratings and client trust. We de-index malicious smear campaigns and suppress negative forums below Page 3.
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
              Platform Takedown & Management in Hyderabad
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Multi-platform legal and algorithmic takedown capabilities with 100 percent policy compliance.
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
              Frequently Asked Questions for Hyderabad Clients
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Clear answers on how we protect Hyderabad brands, doctors, and tech leaders.
            </p>
          </div>

          <div className="space-y-3">
            <FAQItem
              q="Can doctors and clinics in Hyderabad remove fake Practo and Google reviews?"
              a="Yes. Medical practitioners are frequently targeted by anonymous trolls or competitors. When reviews violate medical defamation laws or platform guidelines, we submit authenticated evidence to Google and Practo legal compliance teams for permanent deletion."
            />
            <FAQItem
              q="How do you handle negative articles on pharmaceutical companies in Hyderabad?"
              a="We leverage statutory de-indexing frameworks under Section 79 of the Indian IT Act and privacy rules for unverified or settled disputes. Concurrently, we publish high-authority scientific whitepapers and positive corporate disclosures across tier-1 business media to suppress negative URLs permanently."
            />
            <FAQItem
              q="Is client identity kept confidential during an ORM campaign?"
              a="Yes. We operate under strict mutual Non-Disclosure Agreements. We never publicize client names or case details, ensuring total discretion for prominent Hyderabad families, politicians, and business leaders."
            />
            <FAQItem
              q="Where is your Hyderabad regional desk located?"
              a="Our Hyderabad regional office operates out of Cyber Towers, HITEC City, Madhapur, serving clients across HITEC City, Gachibowli, Banjara Hills, and Jubilee Hills."
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
            Reclaim Your Digital Authority in Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 mb-8">
            Speak directly with our senior reputation counsel and de-indexing team. We respond within 60 minutes with full NDA protection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20an%20urgent%20reputation%20consultation%20in%20Hyderabad."
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
