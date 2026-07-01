// import type { Metadata } from "next";
// import SolutionDetailPage from "@/components/SolutionDetailPage";

// export const metadata: Metadata = {
//   title: "Education Reputation Management: ORM Agency For Education Industries",
//   description:
//     "Protect your education brand with expert reputation management services. Build trust with students and parents to grow your institution.",
//   alternates: { canonical: "/education-industry-reputation-management" },
// };

// const faqs = [
//   {
//     q: "Why is reputation management essential for educational institutions?",
//     a: "Reputation builds trust, influences enrollment decisions, and strengthens your institution's brand with students, parents, alumni, staff, and stakeholders.",
//   },
//   {
//     q: "Which platforms are critical for managing an institution's reputation?",
//     a: "Google Business Profile, Facebook, Instagram, LinkedIn, education directories, review platforms, and search engine results are all important reputation touchpoints.",
//   },
//   {
//     q: "How do you handle negative reviews?",
//     a: "We assess the review, respond professionally when appropriate, report policy violations, and build positive visibility so isolated feedback does not define the institution.",
//   },
//   {
//     q: "Can reputation management improve student enrollment?",
//     a: "Yes. A positive online presence can increase inquiries and applications because students and parents rely heavily on search results, reviews, and social proof.",
//   },
//   {
//     q: "What role does social media play in reputation management?",
//     a: "Social media helps institutions share campus updates, academic achievements, testimonials, events, and community impact while keeping engagement active and transparent.",
//   },
//   {
//     q: "What is the cost of reputation management for schools?",
//     a: "Costs depend on the size of the institution, the number of platforms, content needs, review volume, and crisis risk. We provide a tailored quote after an audit.",
//   },
//   {
//     q: "How do you measure the success of reputation management efforts?",
//     a: "We track improved ratings, increased positive reviews, stronger engagement, improved search visibility, reduced negative exposure, and higher inquiry quality.",
//   },
//   {
//     q: "Do you provide crisis management for educational institutions?",
//     a: "Yes. We provide expert crisis management services to protect and restore reputation during sensitive situations involving students, parents, media, or public feedback.",
//   },
// ];

// export default function EducationIndustryPage() {
//   return (
//     <SolutionDetailPage
//       eyebrow="Education ORM - Schools, Colleges and Universities"
//       title="Education Reputation Management for"
//       accent="Trusted Institutions"
//       intro="In the education sector, reputation is the cornerstone of trust and enrollment success. Build Brand Better helps educational institutions showcase excellence, strengthen credibility, and build a lasting legacy online."
//       secondaryIntro="From managing reviews to improving visibility, we help schools, colleges, universities, training institutes, and education brands stand out in a competitive landscape."
//       heroImage="https://buildbrandbetter.io/wp-content/uploads/2025/01/Strengthening-Educational-Brands.png"
//       heroImageAlt="Strengthening educational brands with reputation management"
//       bullets={[
//         "Attract more students with positive online visibility",
//         "Strengthen trust with parents and stakeholders",
//         "Protect your institution from negative reviews and PR risks",
//         "Highlight awards, results, campus stories, and achievements",
//       ]}
//       stats={[
//         { value: "360", label: "Reputation View" },
//         { value: "24/7", label: "Monitoring" },
//         { value: "6 mo", label: "Growth Roadmap" },
//       ]}
//       trustStrip={[
//         "Google",
//         "Facebook",
//         "Instagram",
//         "LinkedIn",
//         "Education Directories",
//         "Parent Reviews",
//         "Student Forums",
//         "News Mentions",
//       ]}
//       overviewTitle="Managing Online Reputation to Secure a Brighter Educational Future"
//       overviewText="Build Brand Better specializes in education reputation management, tailoring strategies to showcase your institution's achievements, values, and commitment to excellence. A strong digital presence helps prospective students and parents understand why your institution is credible, safe, active, and future-ready."
//       servicesTitle="Comprehensive Services for Education Reputation Management"
//       servicesIntro="Our services safeguard and enhance the reputation of educational institutions, ensuring they remain trusted, visible, and sought after."
//       services={[
//         {
//           label: "Reviews",
//           title: "Review Monitoring and Response",
//           desc: "We proactively monitor and respond to reviews on platforms like Google, Facebook, and specialized education directories. Timely, professional responses build trust and show commitment to excellence.",
//         },
//         {
//           label: "Social",
//           title: "Social Media Reputation Building",
//           desc: "We create and maintain engaging content across Instagram, LinkedIn, and Facebook, sharing success stories, campus updates, and testimonials that connect with students and parents.",
//         },
//         {
//           label: "Crisis",
//           title: "Crisis and Negative Feedback Handling",
//           desc: "We help handle negative reviews and public relations challenges with practical response strategies that mitigate issues before they escalate.",
//         },
//         {
//           label: "Content",
//           title: "Achievement and Trust Promotion",
//           desc: "We highlight awards, academic results, extracurricular success, alumni outcomes, and community contributions through optimized online content.",
//         },
//         {
//           label: "Search",
//           title: "Search Visibility Improvement",
//           desc: "We strengthen the content that appears when people search for your institution so high-value, accurate, and confidence-building assets dominate the conversation.",
//         },
//         {
//           label: "Audit",
//           title: "Institution Reputation Audit",
//           desc: "We evaluate your current online reputation to identify gaps, risks, missing trust signals, and opportunities for stronger student and parent engagement.",
//         },
//       ]}
//       impactTitle="Preserving Trust in Education Through Effective Review Management"
//       impactIntro="A robust reputation not only boosts enrollment but also enhances stakeholder confidence. We make sure your values, achievements, and student outcomes shine through."
//       impacts={[
//         {
//           label: "Enrollment",
//           title: "More Inquiries and Applications",
//           desc: "A positive online presence attracts more inquiries and applications from prospective students who compare institutions online before making decisions.",
//         },
//         {
//           label: "Trust",
//           title: "Parent and Student Confidence",
//           desc: "Strong testimonials, reviews, and transparent communication build trust among parents, students, staff, and governing stakeholders.",
//         },
//         {
//           label: "Alumni",
//           title: "Long-Term Community Pride",
//           desc: "Maintaining a positive reputation fosters alumni pride and encourages continued engagement, referrals, and advocacy.",
//         },
//         {
//           label: "Authority",
//           title: "Educational Leadership Positioning",
//           desc: "Highlighting your institution's contributions to society solidifies your position as a trusted educational leader.",
//         },
//       ]}
//       processTitle="Why Choose Build Brand Better for Education Reputation Management"
//       processIntro="We align reputation strategy with the unique challenges and goals of educational institutions, from admission cycles to parent sentiment and public visibility."
//       process={[
//         {
//           label: "Audit",
//           title: "Evaluate the Current Reputation",
//           desc: "We map your institution's search results, reviews, social profiles, directories, and public mentions to understand the current reputation baseline.",
//         },
//         {
//           label: "Plan",
//           title: "Develop a Tailored Reputation Strategy",
//           desc: "We create a plan designed to enhance visibility, trust, engagement, and conversion across every important digital touchpoint.",
//         },
//         {
//           label: "Execute",
//           title: "Promote Strong Proof Points",
//           desc: "We publish and optimize stories around academic excellence, placements, awards, student success, campus life, and community contributions.",
//         },
//         {
//           label: "Monitor",
//           title: "Track Feedback and Public Perception",
//           desc: "We continuously track reviews, feedback, search results, and public perception to protect long-term trust.",
//         },
//       ]}
//       faqTitle="Education Reputation Management FAQs"
//       faqs={faqs}
//     />
//   );
// }

"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

/* ─── Original Data Preserved ─────────────────────────────────────────────── */

const heroBullets = [
  "Attract more students with positive online visibility",
  "Strengthen trust with parents and stakeholders",
  "Protect your institution from negative reviews and PR risks",
  "Highlight awards, results, campus stories, and achievements",
];

const faqs = [
  {
    q: "Why is reputation management essential for educational institutions?",
    a: "Reputation builds trust, influences enrollment decisions, and strengthens your institution's brand with students, parents, alumni, staff, and stakeholders.",
  },
  {
    q: "Which platforms are critical for managing an institution's reputation?",
    a: "Google Business Profile, Facebook, Instagram, LinkedIn, education directories, review platforms, and search engine results are all important reputation touchpoints.",
  },
  {
    q: "How do you handle negative reviews?",
    a: "We assess the review, respond professionally when appropriate, report policy violations, and build positive visibility so isolated feedback does not define the institution.",
  },
  {
    q: "Can reputation management improve student enrollment?",
    a: "Yes. A positive online presence can increase inquiries and applications because students and parents rely heavily on search results, reviews, and social proof.",
  },
  {
    q: "What role does social media play in reputation management?",
    a: "Social media helps institutions share campus updates, academic achievements, testimonials, events, and community impact while keeping engagement active and transparent.",
  },
  {
    q: "What is the cost of reputation management for schools?",
    a: "Costs depend on the size of the institution, the number of platforms, content needs, review volume, and crisis risk. We provide a tailored quote after an audit.",
  },
  {
    q: "How do you measure the success of reputation management efforts?",
    a: "We track improved ratings, increased positive reviews, stronger engagement, improved search visibility, reduced negative exposure, and higher inquiry quality.",
  },
  {
    q: "Do you provide crisis management for educational institutions?",
    a: "Yes. We provide expert crisis management services to protect and restore reputation during sensitive situations involving students, parents, media, or public feedback.",
  },
];

const services = [
  {
    label: "Reviews",
    title: "Review Monitoring and Response",
    desc: "We proactively monitor and respond to reviews on platforms like Google, Facebook, and specialized education directories. Timely, professional responses build trust and show commitment to excellence.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
    ),
  },
  {
    label: "Social",
    title: "Social Media Reputation Building",
    desc: "We create and maintain engaging content across Instagram, LinkedIn, and Facebook, sharing success stories, campus updates, and testimonials that connect with students and parents.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
  },
  {
    label: "Crisis",
    title: "Crisis and Negative Feedback Handling",
    desc: "We help handle negative reviews and public relations challenges with practical response strategies that mitigate issues before they escalate.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
    ),
  },
  {
    label: "Content",
    title: "Achievement and Trust Promotion",
    desc: "We highlight awards, academic results, extracurricular success, alumni outcomes, and community contributions through optimized online content.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    label: "Search",
    title: "Search Visibility Improvement",
    desc: "We strengthen the content that appears when people search for your institution so high-value, accurate, and confidence-building assets dominate the conversation.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    ),
  },
  {
    label: "Audit",
    title: "Institution Reputation Audit",
    desc: "We evaluate your current online reputation to identify gaps, risks, missing trust signals, and opportunities for stronger student and parent engagement.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
  },
];

const impacts = [
  {
    label: "Enrollment",
    title: "More Inquiries and Applications",
    desc: "A positive online presence attracts more inquiries and applications from prospective students who compare institutions online before making decisions.",
    icon: "📈",
  },
  {
    label: "Trust",
    title: "Parent and Student Confidence",
    desc: "Strong testimonials, reviews, and transparent communication build trust among parents, students, staff, and governing stakeholders.",
    icon: "🛡️",
  },
  {
    label: "Alumni",
    title: "Long-Term Community Pride",
    desc: "Maintaining a positive reputation fosters alumni pride and encourages continued engagement, referrals, and advocacy.",
    icon: "🎓",
  },
  {
    label: "Authority",
    title: "Educational Leadership Positioning",
    desc: "Highlighting your institution's contributions to society solidifies your position as a trusted educational leader.",
    icon: "⭐",
  },
];

const processes = [
  {
    label: "Audit",
    title: "Evaluate the Current Reputation",
    desc: "We map your institution's search results, reviews, social profiles, directories, and public mentions to understand the current reputation baseline.",
  },
  {
    label: "Plan",
    title: "Develop a Tailored Reputation Strategy",
    desc: "We create a plan designed to enhance visibility, trust, engagement, and conversion across every important digital touchpoint.",
  },
  {
    label: "Execute",
    title: "Promote Strong Proof Points",
    desc: "We publish and optimize stories around academic excellence, placements, awards, student success, campus life, and community contributions.",
  },
  {
    label: "Monitor",
    title: "Track Feedback and Public Perception",
    desc: "We continuously track reviews, feedback, search results, and public perception to protect long-term trust.",
  },
];

// Mapped original trustStrip data to online image URLs via Favicon API
const touchpointLogos = [
  { name: "Google", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Facebook", img: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
  { name: "Instagram", img: "https://www.google.com/s2/favicons?domain=instagram.com&sz=128" },
  { name: "LinkedIn", img: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128" },
  { name: "Education Directories", img: "https://www.google.com/s2/favicons?domain=education.com&sz=128" },
  { name: "Parent Reviews", img: "https://www.google.com/s2/favicons?domain=trustpilot.com&sz=128" },
  { name: "Student Forums", img: "https://www.google.com/s2/favicons?domain=reddit.com&sz=128" },
  { name: "News Mentions", img: "https://www.google.com/s2/favicons?domain=news.google.com&sz=128" },
];

/* ─── Animation Components ───────────────────────────────────────── */

// Custom Scroll Reveal Hook 
function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Smooth Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function EducationIndustryPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── HERO - High-End Academic Dark Layout ─────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy mt-4">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-blue/30 bg-brand-blue/10 text-brand-blue shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              Education ORM - Schools, Colleges and Universities
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Education Reputation Management for{" "}
              <span className="text-gradient-gold">Trusted Institutions</span>
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-4 leading-relaxed max-w-2xl">
              In the education sector, reputation is the cornerstone of trust and enrollment success. Build Brand Better helps educational institutions showcase excellence, strengthen credibility, and build a lasting legacy online.
            </p>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-2xl">
              From managing reviews to improving visibility, we help schools, colleges, universities, training institutes, and education brands stand out in a competitive landscape.
            </p>

            <ul className="space-y-3 mb-10 max-w-xl">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5 shadow-inner">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">
                Strengthen Your Legacy
              </Link>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5 relative z-10">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">
                    Secure Your Institution's Future
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── REPUTATION TOUCHPOINTS - Image Marquee ─────────────────────────────────────── */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">Reputation touchpoints we manage</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {/* Duplicated array for seamless CSS marquee scroll */}
            {[...touchpointLogos, ...touchpointLogos].map((m, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="h-6 w-auto object-contain rounded-sm filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider group-hover:text-zinc-800 transition-colors">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW & FLOATING STATS ─────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Overview</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Managing Online Reputation to Secure a <span className="heading-script text-brand-blue">Brighter Educational Future</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
                  Build Brand Better specializes in education reputation management, tailoring strategies to showcase your institution's achievements, values, and commitment to excellence. A strong digital presence helps prospective students and parents understand why your institution is credible, safe, active, and future-ready.
                </p>
                <Link href="#contact" className="btn-blue shadow-[0_10px_30px_rgba(37,99,235,0.2)] px-8 py-3.5">
                  Protect Your Institution
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
<div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
  <img
    src="https://buildbrandbetter.io/wp-content/uploads/2025/01/Strengthening-Educational-Brands.png"
    alt="Strengthening educational brands with reputation management"
    className="w-full h-[600px] object-cover object-top hover:scale-105 transition-transform duration-700"
  />
</div>
                
                {/* Floating Metric Card leveraging data stats */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20 glass-panel-light p-3 rounded-2xl border border-white shadow-xl hidden md:block">
                  <div className="grid grid-cols-3 gap-2 divide-x divide-zinc-200/60">
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-blue mb-0.5">
                        <AnimatedCounter end={360} suffix="°" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Reputation View</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-brand-gold mb-0.5">
                        <AnimatedCounter end={24} suffix="/7" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Monitoring</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="font-heading text-xl font-black text-zinc-800 mb-0.5">
                        <AnimatedCounter end={6} suffix=" mo" duration={2500} />
                      </p>
                      <p className="text-[0.55rem] text-zinc-500 font-bold uppercase tracking-widest">Growth Roadmap</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID - Elevated Staggered Design ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                <p className="section-label text-[0.65rem] font-bold tracking-wider uppercase text-zinc-600 m-0">Our Expertise</p>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Comprehensive Services for Education <span className="heading-script text-brand-gold">Reputation Management</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] mt-5 max-w-xl mx-auto leading-relaxed">
                Our services safeguard and enhance the reputation of educational institutions, ensuring they remain trusted, visible, and sought after.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <RevealOnScroll key={s.title} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg transition-all duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[0.6rem] font-bold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md uppercase tracking-widest group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors relative z-10">{s.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT SECTION - Premium Dark Layout ────────────────────────────────────── */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">
                Building Futures
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">
                Preserving Trust in Education Through <span className="text-gradient-gold">Effective Review Management</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
                A robust reputation not only boosts enrollment but also enhances stakeholder confidence. We make sure your values, achievements, and student outcomes shine through.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((imp, i) => (
              <RevealOnScroll key={imp.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 hover:bg-white/5 hover:border-brand-gold/40 transition-all duration-400 card-premium-hover h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {imp.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">{imp.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{imp.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE - Vertical Connection Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 text-brand-blue">Implementation</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-5 leading-tight">
                Why Choose Build Brand Better for <span className="heading-script text-brand-blue">Education Reputation</span>
              </h2>
              <p className="text-zinc-500 text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
                We align reputation strategy with the unique challenges and goals of educational institutions, from admission cycles to parent sentiment and public visibility.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-6 relative">
            <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-zinc-200 z-0 hidden sm:block"></div>
            
            {processes.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 100}>
                <div className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-zinc-200 bg-white hover:border-brand-blue/30 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-zinc-500 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 shadow-sm font-heading font-black text-xs uppercase tracking-widest">
                    0{i + 1}
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-zinc-900 text-lg group-hover:text-brand-blue transition-colors">{step.title}</h4>
                      <span className="text-[0.6rem] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-sm uppercase tracking-widest">{step.label}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ - Asymmetrical Layout ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Knowledge Base</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  Education Reputation Management <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a specific question about our academic ORM services? Our experts offer a free,
                  no-obligation consultation to assess your institution&apos;s brand.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-zinc-50 rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
                <FAQ items={faqs} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA - Premium Grand Finish ──────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealOnScroll>
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-3">Let&apos;s Elevate Your Brand</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Ready to Boost Enrollments with <span className="heading-script text-brand-gold">Stellar Trust?</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation today. Our education reputation experts will assess your institution&apos;s
                digital footprint, identify review gaps, and present a clear strategy - with no obligation.
              </p>
              
              <div className="space-y-6 mb-10 border-t border-zinc-800/80 pt-8">
                {[
                  { label: "Direct Hotline (24/7)", value: "+9188827 88412", href: "tel:+918882788412", icon: "📞" },
                  { label: "Secure Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in", icon: "✉️" },
                  { label: "Headquarters", value: "Shantipally, Behala, Kolkata - 700060", href: null, icon: "🏢" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner shrink-0 text-brand-gold">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-heading font-bold text-lg hover:text-brand-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white font-heading font-bold text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
              <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-gold/50 via-brand-blue/50 to-transparent" />
                <p className="text-white font-heading font-bold text-xl mb-2">Send Us a Secure Message</p>
                <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
                <ContactForm dark />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}