"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

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
        href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-sm flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-[0_4px_25px_rgba(16,185,129,0.5)] border border-emerald-400/30 transition-all active:scale-95"
        onClick={() => {
          if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "whatsapp_click", {
              event_category: "Lead",
              event_label: "Sticky Mobile WhatsApp",
            });
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
  { name: "Google Reviews & Maps", desc: "Flag and delete fraudulent 1-star ratings" },
  { name: "Google Search Page 1", desc: "De-index defamatory news and unfair links" },
  { name: "Glassdoor & Indeed", desc: "Remove fake ex-employee complaints legally" },
  { name: "YouTube Videos", desc: "Targeted copyright and policy takedowns" },
  { name: "Reddit & Quora", desc: "Remove slanderous threads and smear posts" },
  { name: "AmbitionBox & Trustpilot", desc: "Clean platform scores and verified feedback" }
];

export default function ReputationManagementPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-yellow-400/30 text-zinc-100">

      {/* ── CLEAN, BALANCED CONVERSION NAVBAR ──────────────────── */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Official Site Logo & Crisp Brand Name */}
          <a href="https://onlinereputationbuilders.in" className="flex items-center gap-2.5 sm:gap-3 group">
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
                Builder
              </span>
            </div>
          </a>

          {/* Right Header Navigation Elements */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Strict NDA Protection
            </div>
            <a
              href="tel:+918882788412"
              className="text-xs sm:text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-2 shadow-sm"
            >
              <span className="text-yellow-400">📞</span>
              <span>+91 88827 88412</span>
            </a>
          </div>

        </div>
      </header>

      {/* ── HERO SECTION: TIGHT, HIGH-IMPACT, FORM ABOVE THE FOLD ── */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16 overflow-hidden border-b border-zinc-900">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/4 right-5 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: Punchy, Focused Value Proposition (7 cols) */}
            <div className="lg:col-span-7 pt-1">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-wider">
                  India's Top Rated ORM Firm
                </span>
              </div>

              {/* Exact Google Ads Match Headline */}
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[2.35rem] font-black text-white leading-[1.12] mb-3.5 tracking-tight">
                Online Reputation Management: <span className="text-gradient-gold">Remove Damaging Results</span> &amp; Control Your Digital Narrative
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base mb-5 leading-relaxed">
                Negative Google reviews, defamatory articles, and unfair links destroy revenue. We forensically audit, de-index, and permanently suppress damaging digital content with <strong className="text-white font-semibold">100% legal confidentiality</strong>.
              </p>

              {/* High-Impact Checklist (8 Pointers) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {[
                  "Remove Fake Google & Glassdoor Reviews",
                  "De-Index Defamatory News & Legal Articles",
                  "Takedown Slanderous YouTube & Reddit Posts",
                  "Displace Negative Google Autocomplete Searches",
                  "Suppress Damaging Forum & Consumer Complaints",
                  "Push Down Unwanted Links Past Page 3",
                  "24/7 Digital Narrative Monitoring & Alerts",
                  "Bilateral NDA & 100% Legal Discretion",
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

              {/* Live Metric Stats Bar */}
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

              {/* Direct WhatsApp Callout & Trust Row */}
              <div className="hidden sm:block mt-6 pt-1">
                <div className="flex items-center gap-3 mb-3">
                  <a
                    href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 border border-emerald-400/30 hover:scale-[1.02]"
                    onClick={() => {
                      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                        (window as any).gtag("event", "whatsapp_click", {
                          event_category: "Lead",
                          event_label: "Hero Desktop WhatsApp",
                        });
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.525 5.843L.057 23.882a.5.5 0 00.61.65l6.238-1.637A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.001-1.354l-.36-.213-3.722.977.995-3.63-.234-.374A9.866 9.866 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                    </svg>
                    <span>Chat on WhatsApp (Instant Reply)</span>
                  </a>
                  <span className="text-xs text-zinc-400">Average response: under 15 mins</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
                  <span className="flex items-center gap-1">🔒 100% Strict NDA</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">⚡ Emergency 24/7 Response</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">📋 Senior Director Review</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Compact Glassmorphic Form Card (5 cols) */}
            <div id="audit-form" className="lg:col-span-5">
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-900/95 backdrop-blur-md shadow-2xl p-4 sm:p-5 relative">
                {/* Form header: Compact & Clear */}
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading text-lg font-bold text-white tracking-tight">
                    Request Confidential Audit
                  </h2>
                  <span className="text-[10px] font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                    Free Consultation
                  </span>
                </div>
                <p className="text-zinc-400 text-[11px] mb-3 leading-tight">
                  Share your case details below. We review and share a confidential removal roadmap within 60 minutes.
                </p>

                {/* Compact Embedded Contact Form */}
                <ContactForm dark />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: ARE YOU FACING THESE REPUTATION THREATS? ──── */}
      <section className="py-14 px-4 bg-zinc-900/40 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              Immediate Risk Assessment
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Are These Negative Queries Showing Up for Your Name?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Over 85% of potential clients and investors search Google before making a decision. Seeing any of these results destroys conversion rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                query: "Your Company + 'Fake / Scam / Fraud'",
                impact: "Causes 60% of inbound prospects to drop off before contacting sales.",
                badge: "High Risk"
              },
              {
                query: "1-Star Negative Google & Glassdoor Reviews",
                impact: "Damages employee recruitment and customer trust at the point of purchase.",
                badge: "Direct Loss"
              },
              {
                query: "Outdated Media News or Tabloid Reports",
                impact: "Blocks bank loans, investor term sheets, and enterprise partnerships.",
                badge: "Severe Impact"
              }
            ].map((threat) => (
              <div key={threat.query} className="rounded-xl border border-red-500/20 bg-red-950/10 p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    {threat.badge}
                  </span>
                  <span className="text-red-400 text-xs">⚠️ Negative Impact</span>
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2 font-mono bg-black/40 px-2.5 py-1.5 rounded border border-zinc-800">
                  {threat.query}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {threat.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-zinc-300 mb-4">
              If any of these appear on page 1 of Google, do not panic. We utilize established legal policies and search algorithms to remove or permanently push them past page 3.
            </p>
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors"
            >
              Get a Free Diagnostic Audit of Your Search Results →
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PLATFORMS WE REGULARLY CLEAN & DEFEND ──────── */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              Platform Expertise
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Where We Remove Negative Content
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-yellow-400/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base">{p.name}</h3>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE 6 CORE ORM SOLUTIONS ──────────────────── */}
      <section className="py-16 px-4 bg-zinc-900/40 border-y border-zinc-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              End to End Reputation Services
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Comprehensive Brand Defense &amp; Repair
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              From corporate crisis suppression to platform review removals, we protect every digital touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "⭐",
                title: "Negative Review Removal",
                desc: "Legally flag and permanently remove fraudulent, fake, or policy-violating reviews from Google Maps, Glassdoor, AmbitionBox, Trustpilot, and Yelp.",
              },
              {
                icon: "📰",
                title: "News & Article De-Indexing",
                desc: "Remove or push down defamatory articles, outdated court records, biased press reports, and damaging news publications from Google Search page 1.",
              },
              {
                icon: "🎥",
                title: "Video & Social Takedown",
                desc: "Execute targeted takedowns for copyright-infringing, defamatory, or harassing videos on YouTube, Reddit discussion threads, and Quora slander.",
              },
              {
                icon: "👔",
                title: "Executive & CEO Reputation",
                desc: "Establish authoritative personal branding for founders, C-suite executives, and public figures through controlled Wikipedia, Knowledge Panels, and PR.",
              },
              {
                icon: "🛡️",
                title: "Google Autocomplete Defense",
                desc: "Displace damaging suggested search predictions (such as brand name scams or fraud) with positive, authoritative search phrases.",
              },
              {
                icon: "📈",
                title: "Search Result Suppression",
                desc: "When direct de-indexing is legally contested, we push negative links past page 3 using high-authority media assets so prospects never see them.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 hover:border-yellow-500/40 transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: COMPARISON TABLE (US VS OTHERS) ───────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              The ORB Advantage
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Why Corporate Leaders Choose Online Reputation Builder
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800">
                  <th className="p-4 font-bold text-zinc-300">Feature / Capability</th>
                  <th className="p-4 font-bold text-yellow-400 bg-yellow-400/10 border-x border-zinc-800">
                    Online Reputation Builder
                  </th>
                  <th className="p-4 font-bold text-zinc-400">Generic PR Agencies / DIY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 bg-zinc-950/60">
                {[
                  { feature: "Bilateral NDA & Discretion", orb: "Guaranteed (100% Strict NDA)", other: "Rarely offered or casual" },
                  { feature: "Direct De-Indexing Petitions", orb: "Proprietary Terms of Service Legal Workflow", other: "Limited to simple PR articles" },
                  { feature: "Negative Review Removal", orb: "Platform-specific policy escalation", other: "Tells you to reply to reviews" },
                  { feature: "Speed of Case Evaluation", orb: "Forensic Audit within 60 minutes", other: "Several days or automated email" },
                  { feature: "24/7 Narrative Monitoring", orb: "Continuous brand sentiment alerts", other: "Monthly manual Google search" },
                  { feature: "Permanent Suppression Assets", orb: "Top-tier media and high-authority profiles", other: "Low-quality link spamming" },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 text-zinc-300 font-medium">{row.feature}</td>
                    <td className="p-4 text-white font-bold bg-yellow-400/5 border-x border-zinc-800 flex items-center gap-2">
                      <span className="text-emerald-400">✓</span> {row.orb}
                    </td>
                    <td className="p-4 text-zinc-500">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: 3-STEP TRANSPARENT PROCESS ────────────────── */}
      <section className="py-16 px-4 bg-zinc-900/40 border-y border-zinc-800/80">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
            Transparent Workflow
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
            How We Clean and Restore Your Reputation
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-10">
            A proven 3-stage process engineered for speed, legality, and permanent search defense.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              {
                step: "01",
                title: "Search Forensic Audit",
                desc: "We analyze all Page 1 to 5 search results, sentiment scores, and identify specific platform policy violations on negative assets.",
              },
              {
                step: "02",
                title: "Legal & Strategic Blueprint",
                desc: "We draft targeted terms-of-service de-indexing petitions and prepare authoritative counter-assets tailored to your industry.",
              },
              {
                step: "03",
                title: "Execution & Monitoring",
                desc: "Content is removed or suppressed down the search results. 24/7 automated alerts guarantee your brand stays permanently protected.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-6 overflow-hidden"
              >
                <span className="text-5xl font-black text-yellow-400/10 absolute top-2 right-4 select-none font-heading">
                  {step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center mb-3">
                  <span className="text-yellow-400 font-extrabold text-xs">{step}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-1.5">{title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: REAL CLIENT CASE HIGHLIGHTS ───────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              Verified Case Results
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Trusted by Leaders Across India and Globally
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "43 fake 1-star reviews hit our corporate Google profile within 48 hours. Online Reputation Builder audited the attack, escalated policy violations, and removed 39 reviews in 18 days. Rating went from 2.8 back to 4.7.",
                author: "Managing Director",
                industry: "Automotive Component Manufacturer, Pune",
              },
              {
                quote:
                  "An outdated 2019 legal dispute report was ranking #1 for my full name and harming our institutional fundraising. The team drafted direct de-indexing notices and completely removed the snippet from Google Search within 3 weeks.",
                author: "Co-Founder and CEO",
                industry: "FinTech Enterprise, Bengaluru",
              },
              {
                quote:
                  "Disgruntled former contractors posted defamatory Glassdoor reviews that were hurting our hiring of senior engineers. ORB handled it under strict NDA with zero drama. Truly exceptional confidentiality and results.",
                author: "Vice President of Talent",
                industry: "SaaS Enterprise, Gurgaon",
              },
            ].map((t) => (
              <div key={t.author} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-3 text-sm">
                    {"★★★★★"}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-white font-bold text-xs sm:text-sm">{t.author}</p>
                  <p className="text-zinc-500 text-[11px] mt-0.5">{t.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FREQUENTLY ASKED QUESTIONS (ACCORDION) ────── */}
      <section className="py-16 px-4 bg-zinc-900/40 border-y border-zinc-800/80">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              Common Questions
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            <FAQItem
              q="How fast can negative Google reviews or links be removed?"
              a="Timelines depend on the platform and nature of the content. Fake Google reviews are typically challenged and resolved within 7 to 21 business days. News article de-indexing or legal takedowns typically take 2 to 6 weeks. During our free audit, we provide an accurate timeline for your specific case."
            />
            <FAQItem
              q="Is the removal permanent?"
              a="Yes. When content is removed via platform policy violations or legal de-indexing, it is permanently deleted from the source or removed from search engine indexes. We also implement ongoing monitoring to alert you if any new negative content emerges."
            />
            <FAQItem
              q="Is our engagement kept confidential under NDA?"
              a="Absolutely. Discretion is the cornerstone of our service. We sign strict non-disclosure agreements (NDAs) prior to commencing any work. We never disclose client names, case studies without express permission, or that an ORM firm was engaged."
            />
            <FAQItem
              q="What if a negative article cannot be directly removed from the publisher?"
              a="If a news publisher refuses to delete a story, we execute an aggressive suppression campaign. By creating and ranking high-authority, positive media assets, we push the damaging article down to Page 3 or 4 of Google Search, where less than 1% of users ever click."
            />
            <FAQItem
              q="How do I get started?"
              a="Simply fill out the confidential audit form above or message us on WhatsApp (+91 88827 88412). Our senior strategy director will personally review your search presence and deliver a confidential action plan within 60 minutes."
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL HIGH-URGENCY CONVERSION STRIP ───────── */}
      <section className="py-14 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <span>⚠️</span> Over 85% of potential buyers research Google before buying
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Don't Let Negative Results Damage Your Business Revenue
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Every day a negative link or fake review sits on Google page 1 is a day of lost clients and damaged brand equity. Take control of your narrative today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#audit-form"
              className="btn-gold w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold shadow-xl shadow-amber-500/20"
            >
              Request Confidential Audit →
            </a>
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20a%20confidential%20reputation%20audit%20and%20removal%20strategy%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600/15 border border-emerald-500/40 text-emerald-400 font-bold text-xs sm:text-sm hover:bg-emerald-600/25 transition-all"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                  (window as any).gtag("event", "whatsapp_click", {
                    event_category: "Lead",
                    event_label: "Footer Strip WhatsApp",
                  });
                }
              }}
            >
              💬 WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* ── MINIMAL LEGAL FOOTER (NO SITESEARCH LEAKAGE) ───────── */}
      <footer className="border-t border-zinc-900 py-6 bg-zinc-950 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Online Reputation Builder. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="https://onlinereputationbuilders.in" className="hover:text-zinc-300 transition-colors">Main Site</a>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Sticky WhatsApp Bar */}
      <StickyWA />
    </main>
  );
}
