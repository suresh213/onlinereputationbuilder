"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

/* ── Animated stats counter ────────────────────────── */
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

/* ── Sticky WhatsApp CTA (Mobile) ─────────────────── */
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
        href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20in%20Kolkata."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-[0_4px_25px_rgba(16,185,129,0.5)] border border-emerald-400/30 transition-all active:scale-95"
        onClick={() => {
          try {
            if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
              (window as any).gtag("event", "whatsapp_click", {
                event_category: "Lead",
                event_label: "Kolkata Sticky Mobile WhatsApp",
              });
              (window as any).gtag("event", "conversion", {
                send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
                value: 1.0,
                currency: "INR",
              });
            }
          } catch (e) {
            console.warn("Tracking error:", e);
          }
        }}
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

/* ── Interactive FAQ Item Component ────────────────── */
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

/* ── Supported Platforms ───────────────────────────── */
const platforms = [
  { name: "Google Reviews & Maps", desc: "Flag and delete fraudulent 1-star ratings for Kolkata businesses" },
  { name: "Google Search Page 1", desc: "De-index defamatory news articles and unfair consumer complaints" },
  { name: "Glassdoor & AmbitionBox", desc: "Remove fake employee complaints for Salt Lake Sector V IT firms" },
  { name: "Practo & Medical Directories", desc: "Protect doctors and private hospital ratings across Kolkata" },
  { name: "YouTube Videos", desc: "Targeted copyright strikes and defamatory video takedowns" },
  { name: "Reddit & Quora", desc: "Remove slanderous discussion threads and malicious smear posts" }
];

const faqs = [
  {
    q: "Why choose an ORM agency physically headquartered in Kolkata?",
    a: "Having our physical registered office at 32 Chowringhee Road (Om Tower, Park Street, Kolkata 700071) means you deal directly with senior decision-makers in person. We have deep familiarity with West Bengal's corporate landscape, regional media ecosystem, legal frameworks, and bilingual English and Bengali search sentiment.",
  },
  {
    q: "Can you remove fake reviews for doctors, clinics, and hospitals in Kolkata?",
    a: "Yes. Healthcare is one of our largest specialties in Kolkata. We protect individual practitioners, diagnostic chains, and private hospitals across Alipore, Park Circus, Salt Lake, and EM Bypass by disputing defamatory reviews on Google Maps and Practo that violate medical ethics or content guidelines.",
  },
  {
    q: "How do you handle negative Glassdoor reviews for IT companies in Salt Lake Sector V?",
    a: "We cross-reference internal employee separation data with review timestamps and platform policies regarding conflict of interest and non-disparagement clauses. We submit formal compliance dockets directly to platform moderation teams to achieve permanent removal.",
  },
  {
    q: "What is your turnaround time for reputation crisis management in Kolkata?",
    a: "Our emergency crisis war room responds within 15 minutes. For viral social media issues, emergency legal notifications and platform escalations are initiated within 2 to 4 hours. Standard policy removal reviews typically resolve within 7 to 14 business days.",
  },
  {
    q: "How do you displace negative news articles from Google Page 1?",
    a: "We execute an aggressive combination of legal de-indexing appeals where articles violate publisher guidelines, alongside creating high-authority corporate digital assets that systematically suppress negative links past Google Page 2 and Page 3.",
  },
  {
    q: "Is every client engagement protected by a strict bilateral NDA?",
    a: "Yes. 100% of our client engagements operate under a comprehensive Non-Disclosure Agreement before any digital audit or discussion begins. Your brand identity, case files, and company records remain completely confidential.",
  },
];

export default function KolkataReputationPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-yellow-400/30 text-zinc-100">
      <StickyWA />

      {/* ── HEADER ──────────────────── */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo-orm.webp"
                alt="Online Reputation Builder Logo"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-black text-white text-[0.85rem] sm:text-[0.95rem] block tracking-tight group-hover:text-yellow-400 transition-colors">
                Online Reputation
              </span>
              <span className="font-heading font-bold text-yellow-400 text-[0.68rem] sm:text-[0.75rem] block tracking-widest uppercase">
                Builder • Kolkata HQ
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Park Street HQ • Strict NDA
            </div>
            <a
              href="tel:+918882788412"
              className="text-xs sm:text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 shadow-sm"
              onClick={() => {
                try {
                  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                    (window as any).gtag("event", "click_call", {
                      event_category: "Lead",
                      event_label: "Kolkata Header Phone Call",
                    });
                    (window as any).gtag("event", "conversion", {
                      send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
                      value: 1.0,
                      currency: "INR",
                    });
                  }
                } catch (e) {
                  console.warn("Tracking error:", e);
                }
              }}
            >
              <span className="text-yellow-400">📞</span>
              <span>+91 88827 88412</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 right-5 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: Value Proposition */}
            <div className="lg:col-span-7 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-wider">
                  Registered Headquarters: 32 Chowringhee Rd, Kolkata
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[2.35rem] font-black text-white leading-[1.12] mb-3.5 tracking-tight">
                Best ORM Agency in Kolkata: <span className="text-gradient-gold">Remove Damaging Results</span> &amp; Control Your Digital Narrative
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base mb-5 leading-relaxed">
                Negative Google reviews, defamatory media articles, and malicious links destroy corporate valuation and patient trust. We forensically audit, de-index, and permanently suppress damaging digital content with <strong className="text-white font-semibold">100% legal confidentiality</strong> from our Park Street headquarters.
              </p>

              {/* High-Impact Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {[
                  "Remove Fake Google & Practo Reviews in Kolkata",
                  "De-Index Defamatory News & Consumer Forum Posts",
                  "Delete Hostile Glassdoor Reviews for Sector V IT Firms",
                  "Displace Damaging Google Autocomplete Suggestions",
                  "Doctor & Healthcare ORM for Kolkata Medical Centers",
                  "Suppress Malicious YouTube Videos & Slander",
                  "24/7 Digital Crisis Monitoring Across West Bengal",
                  "Bilateral NDA & 100% In-Person Legal Discretion",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200 font-medium">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Metric Stats */}
              <div className="grid grid-cols-3 gap-3 border-y border-zinc-800/80 py-3.5 mb-6 max-w-lg">
                {[
                  { end: 1200, suffix: "+", label: "Clients Protected" },
                  { end: 98, suffix: "%", label: "Success Rate" },
                  { end: 12, suffix: "+", label: "Years in ORM" },
                ].map(({ end, suffix, label }) => (
                  <div key={label}>
                    <p className="font-heading text-xl sm:text-2xl font-black text-yellow-400 leading-none mb-1">
                      <Counter end={end} duration={1800} />{suffix}
                    </p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">{label}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="hidden sm:block mt-6 pt-1">
                <div className="flex items-center gap-3 mb-3">
                  <a
                    href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20in%20Kolkata."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 border border-emerald-400/30 hover:scale-[1.02]"
                    onClick={() => {
                      try {
                        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                          (window as any).gtag("event", "whatsapp_click", {
                            event_category: "Lead",
                            event_label: "Kolkata Hero Desktop WhatsApp",
                          });
                          (window as any).gtag("event", "conversion", {
                            send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
                            value: 1.0,
                            currency: "INR",
                          });
                        }
                      } catch (e) {
                        console.warn("Tracking error:", e);
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.525 5.843L.057 23.882a.5.5 0 00.61.65l6.238-1.637A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.001-1.354l-.36-.213-3.722.977.995-3.63-.234-.374A9.866 9.866 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                    </svg>
                    <span>Chat on WhatsApp (Instant Reply)</span>
                  </a>
                  <span className="text-xs text-zinc-400">Park Street Director Response: under 15 mins</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
                  <span className="flex items-center gap-1">🔒 100% Strict NDA</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">⚡ Emergency 24/7 Response</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">🏢 Registered Kolkata Office</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div id="audit-form" className="lg:col-span-5">
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-900/95 backdrop-blur-md shadow-2xl p-4 sm:p-5 relative">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading text-lg font-bold text-white tracking-tight">
                    Request Kolkata HQ Audit
                  </h2>
                  <span className="text-[10px] font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                    Free Consultation
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  Confidential evaluation under bilateral NDA. We audit your digital search results within 2 hours.
                </p>
                <ContactForm dark />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOCAL REPUTATION CORRIDORS ────────────────── */}
      <section className="py-12 px-4 sm:px-6 bg-zinc-900/40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[0.7rem] font-bold text-yellow-400 uppercase tracking-widest mb-2">Kolkata Regional Focus</p>
          <h2 className="text-center font-heading text-xl sm:text-2xl font-bold text-white mb-8">
            Tailored Reputation Management Across Kolkata Business Hubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 transition-colors">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-bold text-white text-base mb-2">Park Street &amp; BBD Bagh Corporate Hub</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Strategic reputation counsel for corporate boards, FMCG manufacturers, tea conglomerates, and business promoters navigating corporate disputes and media scrutiny.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 transition-colors">
              <div className="text-2xl mb-3">💻</div>
              <h3 className="font-bold text-white text-base mb-2">Salt Lake Sector V &amp; Rajarhat Tech Corridor</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Employee branding protection, Glassdoor and AmbitionBox review management, and intellectual property defense for IT, SaaS, and global capability centers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 transition-colors">
              <div className="text-2xl mb-3">🩺</div>
              <h3 className="font-bold text-white text-base mb-2">Kolkata Medical &amp; Hospital Ecosystem</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Specialized reputation defense for senior doctors, clinics, and multi-specialty hospitals across Alipore, Park Circus, Salt Lake, and the EM Bypass corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS COVERED ────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white mb-3">
              Platforms We Clean, Protect, and Monitor
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              We leverage direct platform terms of service escalation and legal compliance channels for permanent removal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-yellow-400/30 transition-all">
                <p className="font-bold text-sm text-white mb-1">{p.name}</p>
                <p className="text-xs text-zinc-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ────────────────── */}
      <section className="py-14 px-4 sm:px-6 bg-zinc-900/30 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[0.7rem] font-bold text-yellow-400 uppercase tracking-widest mb-2">Frequently Asked Questions</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white">
              Kolkata Reputation Management FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTERED OFFICE CARD ────────────────── */}
      <section className="py-12 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-900/90 border border-zinc-800 p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400" />
          <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Registered Headquarters</p>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
            Visit Our Park Street, Kolkata Office
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6 leading-relaxed">
            32, Chowringee Road, 7th Floor, Om Tower, Park Street, Kolkata, West Bengal 700071
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="tel:+918882788412" className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 transition-colors">
              Call Hotline: +91 88827 88412
            </a>
            <a href="mailto:contact@onlinereputationbuilders.in" className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors">
              contact@onlinereputationbuilders.in
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
