"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { useEffect, useState } from "react";

const Counter = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <span>{count}</span>;
};

export default function BrandManagementCampaign() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-brand-gold/30 selection:text-white">
      <Topbar />
      <Navbar />

      {/* ── HERO SECTION ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-zinc-950 to-zinc-950 -z-10" />
        <div className="absolute top-0 right-0 w-full h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="max-w-2xl">
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                Corporate Digital PR
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Strategic <span className="text-gradient-gold">Digital Presence</span> & Corporate Brand Management
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
                We empower executives and corporations to construct, manage, and scale a premium digital identity. Control your narrative with India's leading corporate communications firm.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Comprehensive Search Sentiment Analysis",
                  "Executive Image Consulting & PR Strategy",
                  "Proactive Corporate Brand Defense",
                  "24/7 Digital Narrative Monitoring"
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="#consultation" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Schedule Consultation</Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10" />
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/80 relative z-10 bg-zinc-900/90 backdrop-blur-sm p-8" id="consultation">
                <div className="text-center mb-6">
                  <p className="section-label text-brand-gold mb-2 justify-center">Strictly Confidential</p>
                  <h3 className="font-heading text-2xl font-bold text-white leading-tight">Speak with a Strategy Director</h3>
                </div>
                <ContactForm dark />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────────────────── */}
      <div className="bg-[#0a1120] border-y border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60 py-10">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="font-heading text-3xl font-black text-brand-gold mb-1"><Counter end={1200} duration={2000} />+</p>
              <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest">Global Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="font-heading text-3xl font-black text-brand-gold mb-1"><Counter end={98} duration={2000} />%</p>
              <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="font-heading text-3xl font-black text-brand-gold mb-1"><Counter end={24} duration={2000} />/7</p>
              <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest">Active Monitoring</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="font-heading text-3xl font-black text-brand-gold mb-1"><Counter end={12} duration={2000} />+</p>
              <p className="text-zinc-400 text-[0.65rem] font-bold uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
