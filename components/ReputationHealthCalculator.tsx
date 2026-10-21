"use client";
import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import { Country, DEFAULT_COUNTRY } from "./countryData";

interface ThreatOption {
  id: string;
  label: string;
  weight: number;
  description: string;
}

const threatOptions: ThreatOption[] = [
  {
    id: "google_reviews",
    label: "Fake or Malicious 1-Star Google Reviews",
    weight: 25,
    description: "Competitor attacks, bogus ratings, or coordinated 1-star review floods damaging Google Maps rating.",
  },
  {
    id: "defamatory_articles",
    label: "Defamatory News Articles & Media Coverage on Page 1",
    weight: 35,
    description: "Biased press, sensationalized media stories, or outdated allegations ranking on Google search results.",
  },
  {
    id: "negative_autocomplete",
    label: "Negative Google Autocomplete & Related Searches",
    weight: 20,
    description: "Damaging suggestions such as '[Your Brand] scam', 'fraud', or 'lawsuit' appearing automatically.",
  },
  {
    id: "mouthshut_glassdoor",
    label: "MouthShut, Glassdoor, or AmbitionBox Grievances",
    weight: 25,
    description: "Unverified complaints from anonymous users or ex-employees ruining consumer & recruitment trust.",
  },
  {
    id: "court_fir",
    label: "Outdated Court Cases, FIRs, or Police Inquiries",
    weight: 30,
    description: "Dismissed, settled, or quashed legal records still indexed on IndianKanoon and search engines.",
  },
  {
    id: "social_video",
    label: "YouTube Smear Videos, Reddit Threads, or Quora Slander",
    weight: 20,
    description: "Viral social discussions and slanderous videos monopolizing Page 1 rankings.",
  },
];

const entityTypes = [
  { id: "corporate", label: "Corporate Enterprise / Brand", baseRisk: 15 },
  { id: "sme", label: "Small / Medium Business", baseRisk: 20 },
  { id: "executive", label: "CEO / Founder / High-Profile Individual", baseRisk: 25 },
  { id: "doctor", label: "Doctor / Healthcare Clinic / Hospital", baseRisk: 30 },
  { id: "ecommerce", label: "E-Commerce / D2C Brand", baseRisk: 25 },
];

const trafficTiers = [
  { id: "low", label: "Under 2,000 searches/month", multiplier: 1.0, lossMin: "1,50,000", lossMax: "4,00,000" },
  { id: "medium", label: "2,000 to 10,000 searches/month", multiplier: 1.5, lossMin: "4,50,000", lossMax: "15,00,000" },
  { id: "high", label: "10,000 to 50,000+ searches/month", multiplier: 2.2, lossMin: "18,00,000", lossMax: "65,00,000" },
];

export default function ReputationHealthCalculator() {
  const [selectedEntity, setSelectedEntity] = useState("corporate");
  const [selectedThreats, setSelectedThreats] = useState<string[]>(["google_reviews"]);
  const [selectedTraffic, setSelectedTraffic] = useState("medium");
  
  const [name, setName] = useState("");
  const [targetName, setTargetName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleThreat = (id: string) => {
    setSelectedThreats((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate Threat Score (0 to 100)
  const currentEntity = entityTypes.find((e) => e.id === selectedEntity) || entityTypes[0];
  const threatScoreRaw =
    currentEntity.baseRisk +
    selectedThreats.reduce((sum, tid) => {
      const match = threatOptions.find((t) => t.id === tid);
      return sum + (match ? match.weight : 0);
    }, 0);
  const score = Math.min(Math.max(threatScoreRaw, 18), 98);

  const currentTraffic = trafficTiers.find((t) => t.id === selectedTraffic) || trafficTiers[1];

  let severityLabel = "Low Reputation Risk";
  let severityColor = "text-emerald-400";
  let meterColor = "bg-emerald-500";
  let recommendedAction = "Proactive monitoring and search presence fortification.";

  if (score >= 70) {
    severityLabel = "Critical Reputation Emergency";
    severityColor = "text-rose-400";
    meterColor = "bg-rose-500";
    recommendedAction =
      "Immediate legal de-indexing (Section 79 IT Act / Court Order) combined with Tier-1 media suppression to neutralize search fallout.";
  } else if (score >= 45) {
    severityLabel = "Moderate Commercial Damage";
    severityColor = "text-amber-400";
    meterColor = "bg-amber-500";
    recommendedAction =
      "Aggressive review dispute escalation, outdated snippet clearing, and reverse SEO asset dominance.";
  }

  const trackEvent = (name: string, label: string) => {
    try {
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", name, {
          event_category: "Calculator",
          event_label: label,
        });
      }
    } catch (e) {
      console.warn("Tracking error:", e);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    trackEvent("calculator_lead_submit", `${targetName || name} - Score: ${score}`);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey) {
        await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name,
            email,
            phone: `${selectedCountry.dialCode} ${phone}`,
            service: `Calculator Audit (Threat Score: ${score}/100)`,
            message: `Brand/Target: ${targetName || "Not specified"} | Entity: ${selectedEntity} | Threats: ${selectedThreats.join(", ")} | Estimated Loss: INR ${currentTraffic.lossMin} to ${currentTraffic.lossMax}`,
            created_at: new Date().toISOString(),
          }),
        });
      }

      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
          value: 1.0,
          currency: "INR",
        });
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hi, I just ran the Reputation Risk Calculator for ${targetName || "my brand"}. My Threat Score is ${score}/100 (${severityLabel}). Please share the confidential takedown action plan.`
  );

  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-wide uppercase mb-2">
              Instant Diagnostic Tool
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Online Reputation Risk & Financial Impact Calculator
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Evaluate real-time Google search vulnerabilities and quantify revenue at risk from negative digital footprints.
            </p>
          </div>
          <div className="text-right sm:border-l sm:border-zinc-800 sm:pl-6">
            <span className="text-xs text-zinc-500 uppercase tracking-widest block font-mono">Algorithm Version</span>
            <span className="text-sm font-semibold text-zinc-300">2026.4 Active</span>
          </div>
        </div>

        {/* ── STEP 1: Entity Type ─────────────────────────────── */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
            Step 1: Select Your Profile or Industry Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {entityTypes.map((et) => {
              const active = selectedEntity === et.id;
              return (
                <button
                  key={et.id}
                  type="button"
                  onClick={() => {
                    setSelectedEntity(et.id);
                    trackEvent("calculator_select_entity", et.id);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    active
                      ? "bg-brand-blue/20 border-brand-blue text-white shadow-md shadow-brand-blue/20 ring-1 ring-brand-blue"
                      : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  {et.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── STEP 2: Threats Checklist ───────────────────────── */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
            Step 2: Check Active Negative Threats in Google Results (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {threatOptions.map((thr) => {
              const checked = selectedThreats.includes(thr.id);
              return (
                <div
                  key={thr.id}
                  onClick={() => toggleThreat(thr.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    checked
                      ? "bg-zinc-800/80 border-brand-gold/60 ring-1 ring-brand-gold/30"
                      : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 opacity-80"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {}}
                      className="mt-1 h-4 w-4 rounded border-zinc-700 text-brand-gold focus:ring-brand-gold bg-zinc-900"
                    />
                    <div>
                      <p className={`text-sm font-semibold ${checked ? "text-white" : "text-zinc-300"}`}>
                        {thr.label}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {thr.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── STEP 3: Monthly Search Volume Tier ──────────────── */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
            Step 3: Approximate Brand Search Exposure
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {trafficTiers.map((tr) => {
              const active = selectedTraffic === tr.id;
              return (
                <button
                  key={tr.id}
                  type="button"
                  onClick={() => {
                    setSelectedTraffic(tr.id);
                    trackEvent("calculator_select_traffic", tr.id);
                  }}
                  className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                    active
                      ? "bg-brand-gold/20 border-brand-gold text-white shadow-md shadow-brand-gold/20 ring-1 ring-brand-gold"
                      : "bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  {tr.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── LIVE SCORE & IMPACT DASHBOARD ───────────────────── */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Visual Threat Index */}
            <div className="text-center md:border-r md:border-zinc-800 md:pr-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Calculated Threat Index
              </span>
              <div className="flex items-baseline justify-center gap-1 my-2">
                <span className={`text-5xl font-black ${severityColor}`}>{score}</span>
                <span className="text-zinc-500 font-bold text-xl">/ 100</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden my-3">
                <div
                  className={`h-full transition-all duration-500 ${meterColor}`}
                  style={{ width: `${score}%` }}
                />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${severityColor}`}>
                {severityLabel}
              </span>
            </div>

            {/* Estimated Revenue Loss */}
            <div className="text-center md:border-r md:border-zinc-800 md:px-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Estimated Monthly Loss
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white my-2">
                INR {currentTraffic.lossMin}
                <span className="text-zinc-500 text-lg font-normal"> to </span>
                {currentTraffic.lossMax}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Based on industry benchmarks where 1 negative Page 1 result causes 22% customer abandonment.
              </p>
            </div>

            {/* Strategic Protocol */}
            <div className="text-left md:pl-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold block mb-1">
                Recommended Takedown Protocol
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed mt-2">
                {recommendedAction}
              </p>
            </div>
          </div>
        </div>

        {/* ── STEP 4: Lead Unlock Form ────────────────────────── */}
        {!isSuccess ? (
          <form onSubmit={handleLeadSubmit} className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-white">
                  Unlock Your Free 12-Page Forensic Takedown & Defense Roadmap
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Our cyber lawyers & Google de-indexing specialists will audit your exact search results under strict NDA.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Brand / Executive Name to Audit
                  </label>
                  <input
                    type="text"
                    value={targetName}
                    onChange={(e) => setTargetName(e.target.value)}
                    placeholder="e.g. Acme Corp or John Doe"
                    className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Corporate / Private Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Direct Phone / WhatsApp *
                  </label>
                  <div className="flex gap-2">
                    <div className="w-[125px] flex-shrink-0">
                      <CountrySelect
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                        dark={true}
                      />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 2.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm-1 9.75l5-5-1.5-1.5L9 9.25 7.5 7.75 6 9.25l3 3.75z" clipRule="evenodd" />
                  </svg>
                  <span>100% Confidentiality & Strict Mutual NDA Protected</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/918882788412?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("calculator_whatsapp_click", `${targetName || name}`)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/30"
                  >
                    <span>Instant WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Generating..." : "Get Forensic Report"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Diagnostic Data Received</h4>
            <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-4">
              Our lead cyber de-indexing strategist is reviewing search results for {targetName || name}. We will email your forensic PDF report and contact you via WhatsApp shortly.
            </p>
            <a
              href={`https://wa.me/918882788412?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Connect on WhatsApp for Immediate Escalation</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
