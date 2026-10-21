"use client";
import React from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const heroBullets = [
  "Direct escalation to Practo moderation desk under Patient Feedback Guidelines",
  "Challenge anonymous non-patient reviews lacking appointment or prescription records",
  "Delete defamatory medical negligence claims violating NMC regulations and Indian law",
  "Simultaneous cleanup across Google Maps, Lybrate, and healthcare directories",
];

const stats = [
  { number: "8+", label: "Years in Doctor & Healthcare ORM" },
  { number: "95%", label: "Practo Dispute Success Rate" },
  { number: "1,400+", label: "Malicious Doctor Reviews Removed" },
  { number: "100%", label: "Patient Privacy & Medical Discretion" },
];

const violationTypes = [
  {
    title: "Non-Patient Accounts & Competitor Sabotage",
    desc: "Reviews posted by individuals who never booked an appointment, visited the clinic, or received a valid medical prescription.",
    icon: "🚫",
  },
  {
    title: "False Medical Negligence Allegations",
    desc: "Unsubstantiated claims accusing medical specialists of malpractice without any clinical investigation or Medical Council ruling.",
    icon: "⚕️",
  },
  {
    title: "Fee Disputes & Commercial Extortion",
    desc: "Vengeful reviews posted after a patient is refused a non-medical refund, insurance concession, or unauthorized prescription.",
    icon: "💳",
  },
  {
    title: "Abusive, Profane & Harassing Feedback",
    desc: "Comments using aggressive, threatening, or personal language targeting doctors, hospital staff, or nursing teams.",
    icon: "⚠️",
  },
  {
    title: "Staff or Facility Operational Complaints",
    desc: "Ratings unfairly penalizing a senior surgeon or consultant for parking delays, receptionist wait times, or billing queries.",
    icon: "🏥",
  },
  {
    title: "Duplicate & Coordinated 1-Star Review Floods",
    desc: "Multiple identical or bot-generated 1-star ratings submitted within hours to collapse the doctor's Practo profile score.",
    icon: "🤖",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Clinical Record & Feedback Cross-Audit",
    desc: "We verify the reviewer name, appointment date, and Practo booking ID against your hospital management system to establish non-patient status or factual discrepancies.",
  },
  {
    step: "02",
    title: "Practo Moderation Escalation",
    desc: "We submit a detailed dispute brief to Practo's Compliance Team demonstrating specific policy breaches under their Patient Story Guidelines.",
  },
  {
    step: "03",
    title: "Statutory Defamation Notice",
    desc: "Where malicious slander persists, our legal counsel issues formal notice citing Section 356 BNS and Intermediary Guidelines to compel deletion.",
  },
  {
    step: "04",
    title: "Comprehensive Clinic Reputation Shield",
    desc: "We fortify the doctor's Google Business Profile, academic publications, and verified patient testimonials to establish unbreakable 4.8+ star trust.",
  },
];

const faqs = [
  {
    q: "Can a doctor remove fake or defamatory reviews from Practo?",
    a: "Yes. Practo maintains strict Patient Feedback Policies. Reviews containing unverified accusations, commercial extortion, abusive language, non-patient accounts, or competitor interference can be formally disputed and permanently deleted through Practo's moderation desk and legal counsel escalations."
  },
  {
    q: "What can a doctor do if a patient posts false malpractice claims on Practo?",
    a: "Allegations of medical negligence or malpractice require statutory proof under Indian law (National Medical Commission regulations). Unsubstantiated claims violate Practo terms and Indian defamation statutes (Section 356 BNS). We submit formal legal notices demanding immediate removal."
  },
  {
    q: "How long does a Practo review dispute take?",
    a: "Formal platform disputes and legal verification notices take between 7 to 18 business days for resolution and deletion on Practo."
  },
  {
    q: "Can you also clean up Google Maps reviews and Lybrate profiles for doctors?",
    a: "Yes. Our healthcare ORM service covers Practo, Google Maps Business Profiles, Lybrate, Justdial, and medical forums simultaneously to ensure full digital defense for your clinic or hospital practice."
  },
  {
    q: "Does this affect my doctor profile visibility or verified badges on Practo?",
    a: "No. All disputes are handled through lawful, verified channels. Your verified badges, doctor profile status, and appointment booking features remain completely unaffected."
  }
];

export default function PractoRemovalPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-brand-gold/30">
      <Topbar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/review-management" className="hover:text-brand-gold transition-colors">Review Management</Link>
          <span>/</span>
          <span className="text-zinc-200">Practo Review Removal</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Healthcare & Doctor ORM Specialists
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Practo Review Removal & Doctor Reputation Defense
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Protect your clinical credibility, specialist standing, and patient appointment pipeline. Permanently delete fraudulent, unverified, and defamatory patient stories from Practo, Google Maps, and Lybrate.
            </p>

            <div className="mt-6 space-y-2.5">
              {heroBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-sm text-zinc-200">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/918882788412?text=Hi%2C%20I%20am%20a%20doctor%20and%20need%20urgent%20assistance%20removing%20a%20Practo%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40"
              >
                <span>Doctor Confidential WhatsApp Desk</span>
              </a>
              <a
                href="tel:+918882788412"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-all"
              >
                <span>Direct Hotline: +91 88827 88412</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                  Medical Practice Priority Desk
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Request Practo Profile Audit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Submit your doctor profile link or review details for confidential legal evaluation under strict discretion.
                </p>
              </div>
              <ContactForm dark={true} />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">{s.number}</p>
              <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Violation Grounds Grid */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Removable Practo Patient Story Violations
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Practo feedback guidelines strictly prohibit fraudulent, non-clinical, and defamatory posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {violationTypes.map((v, idx) => (
              <div key={idx} className="bg-zinc-900/60 border border-zinc-800/80 p-6 rounded-2xl">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Protocol */}
        <section className="mb-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Our 4-Stage Doctor Reputation Recovery Protocol
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Lawful, ethical, and fast dispute resolution designed specifically for medical practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-zinc-950/80 border border-zinc-800 p-5 rounded-2xl relative">
                <span className="text-3xl font-black text-emerald-400/30 font-mono block mb-2">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <FAQSection
            title="Practo Review Removal FAQ"
            subtitle="Common questions regarding Practo feedback policies, legal notices, and clinic protection."
            faqs={faqs}
          />
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-brand-gold/20 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Protect Your Years of Clinical Excellence
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Do not let a false or vindictive review undermine your medical practice. Speak directly with our healthcare reputation specialists today under complete medical discretion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://wa.me/918882788412?text=Hi%2C%20I%20am%20a%20doctor%20and%20need%20urgent%20assistance%20removing%20a%20Practo%20review."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950/40"
            >
              <span>Instant WhatsApp Consultation</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm border border-zinc-700 transition-all"
            >
              <span>Schedule Practice Audit</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
