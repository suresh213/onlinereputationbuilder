"use client";
import { useEffect, useState, useRef } from "react";
import ContactForm from "@/components/ContactForm";

/* ── Animated counter ────────────────────────────────── */
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

/* ── Sticky WhatsApp CTA (mobile) ────────────────────── */
function StickyWA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <a
      href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20confidential%20help%20with%20my%20online%20reputation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm shadow-2xl shadow-emerald-500/40"
      onClick={() => {
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
          (window as any).gtag("event", "whatsapp_click", {
            event_category: "Lead",
            event_label: "Sticky WhatsApp CTA",
          });
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.525 5.843L.057 23.882a.5.5 0 00.61.65l6.238-1.637A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.001-1.354l-.36-.213-3.722.977.995-3.63-.234-.374A9.866 9.866 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
      </svg>
      WhatsApp — Instant Reply
    </a>
  );
}

const testimonials = [
  {
    name: "Rajesh M.",
    role: "Managing Director, Mumbai",
    text: "We had 43 fake negative reviews destroying our Google rating. Within 3 weeks, Online Reputation Builder had them removed and our rating went from 2.9 to 4.6 stars. Absolutely professional.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "CEO, Bangalore",
    text: "A defamatory news article was ranking #1 for my name. The team got it de-indexed within 10 days. Extremely discreet, zero fuss. Highly recommended for any executive.",
    stars: 5,
  },
  {
    name: "Arjun K.",
    role: "Director, Delhi NCR",
    text: "Our Glassdoor ratings were hurting recruitment. ORB helped us get 14 defamatory reviews removed legally, and our employer brand has completely turned around.",
    stars: 5,
  },
];

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-yellow-400/30">

      {/* ── Minimal header — logo + trust badge only ── */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="https://onlinereputationbuilders.in" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md">
              <span className="text-zinc-950 font-black text-xs">ORB</span>
            </div>
            <span className="font-bold text-white text-sm hidden sm:block">Online Reputation Builder</span>
          </a>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 border border-zinc-700/60 rounded-full px-3 py-1">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            100% Confidential
          </div>
        </div>
      </header>

      {/* ── HERO + FORM ─────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(194,148,10,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — headline & trust copy */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
                </span>
                <span className="text-yellow-400 font-bold text-[11px] uppercase tracking-widest">
                  Free Consultation — Limited Slots Today
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-[1.1] mb-4 tracking-tight">
                Online Reputation Management —{" "}
                <span className="text-gradient-gold">Remove Negative Results</span>{" "}
                &amp; Protect Your Brand
              </h1>

              <p className="text-zinc-400 text-base lg:text-lg mb-7 leading-relaxed">
                Negative reviews, fake news articles, or damaging search results hurting your business? Our experts have helped{" "}
                <strong className="text-white">1,200+ businesses and executives</strong> across India clean their search results — discreetly and permanently.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Remove fake or defamatory Google reviews",
                  "De-index negative news articles & links",
                  "Push down damaging Glassdoor / YouTube content",
                  "Repair your brand reputation — fast & confidential",
                  "Protect executives from online reputational attacks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center">
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-6">
                {[
                  { end: 1200, suffix: "+", label: "Clients Served" },
                  { end: 98, suffix: "%", label: "Success Rate" },
                  { end: 12, suffix: "+", label: "Years Experience" },
                ].map(({ end, suffix, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-heading text-2xl font-black text-yellow-400">
                      <Counter end={end} duration={1800} />{suffix}
                    </p>
                    <p className="text-zinc-500 text-[11px] font-semibold uppercase tracking-wider mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Desktop WhatsApp CTA */}
              <a
                href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20confidential%20help%20with%20my%20online%20reputation."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2.5 mt-7 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                    (window as any).gtag("event", "whatsapp_click", { event_category: "Lead", event_label: "Hero Desktop CTA" });
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.525 5.843L.057 23.882a.5.5 0 00.61.65l6.238-1.637A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 01-5.001-1.354l-.36-.213-3.722.977.995-3.63-.234-.374A9.866 9.866 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
                </svg>
                Chat on WhatsApp — Instant Reply
              </a>
            </div>

            {/* RIGHT — form card (sticky on desktop) */}
            <div id="consultation" className="sticky top-20">
              <div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/80 backdrop-blur-sm shadow-2xl p-6 lg:p-7">
                <p className="text-yellow-400 text-[11px] font-bold uppercase tracking-widest mb-1">Free &amp; Confidential</p>
                <h2 className="font-heading text-xl font-bold text-white mb-1">
                  Get Your Free Reputation Audit
                </h2>
                <p className="text-zinc-400 text-sm mb-5">
                  Tell us your concern — we respond within 1 hour with a tailored action plan.
                </p>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────── */}
      <section className="bg-zinc-900/40 border-y border-zinc-800/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">
            Trusted by 1,200+ clients across India
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-zinc-700/50 bg-zinc-900 p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            How It Works — Simple &amp; Transparent
          </h2>
          <p className="text-zinc-500 text-sm mb-10">No long contracts. Results-driven approach.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "You tell us your problem. We audit your online presence for free — same day." },
              { step: "02", title: "Custom Strategy", desc: "We design a tailored plan — review removal, de-indexing, content suppression, or full ORM." },
              { step: "03", title: "Execution & Results", desc: "Our team executes discreetly. You see measurable results within 2–6 weeks." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 text-left">
                <span className="text-[3rem] font-black text-yellow-400/10 leading-none absolute top-3 right-4 font-heading select-none">
                  {step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-3">
                  <span className="text-yellow-400 font-bold text-xs">{step}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-1.5">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <section className="py-12 border-t border-zinc-800/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Fix Your Online Reputation?
          </h2>
          <p className="text-zinc-400 text-sm mb-7">
            Join 1,200+ clients who trusted us to protect their name, brand, and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#consultation" className="btn-gold px-7 py-3 text-sm font-bold">
              Get Free Consultation →
            </a>
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20need%20confidential%20help%20with%20my%20online%20reputation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition-all"
              onClick={() => {
                if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                  (window as any).gtag("event", "whatsapp_click", { event_category: "Lead", event_label: "Bottom CTA" });
                }
              }}
            >
              💬 WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer — legal links only, no nav ── */}
      <footer className="border-t border-zinc-800/50 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Online Reputation Builder. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="https://onlinereputationbuilders.in" className="hover:text-zinc-400 transition-colors">Main Site</a>
          </div>
        </div>
      </footer>

      <StickyWA />
    </main>
  );
}
