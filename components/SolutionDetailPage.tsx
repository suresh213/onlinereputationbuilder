"use client";

import Link from "next/link";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

type Feature = {
  label?: string;
  title: string;
  desc: string;
};

type Stat = {
  value: string;
  label: string;
};

type SolutionDetailPageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  secondaryIntro?: string;
  heroImage: string;
  heroImageAlt: string;
  bullets: string[];
  stats: Stat[];
  trustStrip: string[];
  overviewTitle: string;
  overviewText: string;
  servicesTitle: string;
  servicesIntro: string;
  services: Feature[];
  impactTitle: string;
  impactIntro: string;
  impacts: Feature[];
  processTitle: string;
  processIntro: string;
  process: Feature[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

const CheckIcon = () => (
  <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.6-4A12 12 0 0112 3 12 12 0 013.4 6 12 12 0 003 9c0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1-.1-2-.4-3z" />
  </svg>
);

const SignalIcon = () => (
  <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.5h3m3 0h3m3 0h6M6 17.5h12M8 9.5h8M12 5.5h.01" />
  </svg>
);

const SparkIcon = () => (
  <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l1.9 5.7L20 11l-6.1 2.3L12 19l-1.9-5.7L4 11l6.1-2.3L12 3z" />
  </svg>
);

const icons = [ShieldIcon, SignalIcon, SparkIcon];

export default function SolutionDetailPage({
  eyebrow,
  title,
  accent,
  intro,
  secondaryIntro,
  heroImage,
  heroImageAlt,
  bullets,
  stats,
  trustStrip,
  overviewTitle,
  overviewText,
  servicesTitle,
  servicesIntro,
  services,
  impactTitle,
  impactIntro,
  impacts,
  processTitle,
  processIntro,
  process,
  faqTitle,
  faqs,
}: SolutionDetailPageProps) {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue" />
        <div className="hero-ambient hero-ambient-gold" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center relative z-10">
          <div className="hero-copy min-w-0">
            <div className="hero-badge inline-block max-w-full px-3.5 py-1.5 rounded-full text-[0.62rem] sm:text-[0.68rem] font-bold mb-6 uppercase tracking-widest whitespace-normal leading-snug break-words">
              {eyebrow}
            </div>
            <h1 className="font-heading text-[2rem] sm:text-5xl lg:text-[3.15rem] font-black text-white leading-[1.08] mb-6 tracking-tight break-words">
              {title} <span className="text-gradient-gold">{accent}</span>
            </h1>
            <p className="text-zinc-300 text-base lg:text-lg mb-4 leading-relaxed max-w-2xl break-words [overflow-wrap:anywhere]">{intro}</p>
            {secondaryIntro && (
              <p className="text-zinc-400 text-sm mb-7 leading-relaxed max-w-2xl break-words [overflow-wrap:anywhere]">{secondaryIntro}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {bullets.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="check-icon text-brand-gold mt-0.5"><CheckIcon /></span>
                  <span className="min-w-0 break-words [overflow-wrap:anywhere]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gold">Get Free Consultation</Link>
              <a href="tel:+918882788412" className="btn-outline">Call: +9188827 88412</a>
            </div>
          </div>

          <div className="relative premium-image-stage min-w-0">
            <div className="premium-image-frame bg-white rounded-lg p-2 border border-white/10 overflow-hidden">
              <img src={heroImage} alt={heroImageAlt} className="w-full aspect-[4/3] object-cover rounded-md" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-lg p-4 text-center border-white/10">
                  <p className="font-heading text-xl font-black text-brand-gold-light leading-none">{stat.value}</p>
                  <p className="text-[0.58rem] text-zinc-400 font-bold uppercase tracking-widest mt-2 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="logo-marquee-shell bg-zinc-50 py-8 border-b border-zinc-200 overflow-hidden">
        <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Reputation touchpoints we manage</p>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-4 whitespace-nowrap w-max">
            {[...trustStrip, ...trustStrip].map((item, index) => (
              <span key={`${item}-${index}`} className="logo-badge-pill">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="premium-copy-panel">
            <p className="section-label mb-2">Strategic Overview</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">
              {overviewTitle}
            </h2>
            <p className="text-zinc-500 leading-relaxed text-sm lg:text-[0.95rem]">{overviewText}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="premium-info-card bg-zinc-50 rounded-lg p-6 border border-zinc-200 text-center">
                <p className="font-heading text-3xl font-black text-brand-blue mb-2">{stat.value}</p>
                <p className="text-[0.68rem] uppercase tracking-widest font-bold text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="section-label mb-2">Comprehensive Services</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">{servicesTitle}</h2>
            <p className="text-zinc-500 text-sm lg:text-[0.95rem] leading-relaxed">{servicesIntro}</p>
          </div>
          <div className="services-showcase">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={service.title} className="group premium-service-card service-showcase-item bg-white rounded-lg p-7 border border-zinc-200 overflow-hidden">
                  <div className="service-card-sheen" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="service-icon-shell rounded-lg flex items-center justify-center text-brand-blue">
                        <Icon />
                      </div>
                      {service.label && (
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-brand-gold bg-amber-50 border border-amber-100 rounded px-2 py-1">
                          {service.label}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 premium-section-dark relative overflow-hidden">
        <div className="ambient-glow-blue top-0 left-1/4 opacity-40" />
        <div className="ambient-glow-gold bottom-0 right-1/4 opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-start">
            <div className="premium-copy-panel-dark">
              <p className="section-label text-brand-gold mb-2">Business Impact</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">{impactTitle}</h2>
              <p className="text-zinc-400 text-sm lg:text-[0.95rem] leading-relaxed">{impactIntro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {impacts.map((impact) => (
                <div key={impact.title} className="glass-panel rounded-lg p-6 border border-zinc-800/80 card-premium-hover">
                  <p className="text-[0.62rem] uppercase tracking-widest text-brand-gold font-bold mb-3">{impact.label}</p>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{impact.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{impact.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div className="premium-copy-panel">
            <p className="section-label mb-2">Our Process</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">{processTitle}</h2>
            <p className="text-zinc-500 text-sm lg:text-[0.95rem] leading-relaxed">{processIntro}</p>
          </div>
          <div className="space-y-5">
            {process.map((step, index) => (
              <div key={step.title} className="process-step bg-white rounded-lg p-6 border border-zinc-200 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
                <div className="step-number font-heading flex-shrink-0">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-widest text-brand-gold font-bold mb-1">{step.label}</p>
                  <h3 className="font-heading text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div className="sticky top-24">
            <p className="section-label mb-2">Knowledge Base</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">{faqTitle}</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Get direct answers about how our team protects, repairs, and strengthens this reputation category.
            </p>
            <a href="tel:+918882788412" className="btn-gold">Speak With An Expert</a>
          </div>
          <div className="bg-white rounded-lg border border-zinc-200 p-2 md:p-6 shadow-sm">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 lg:py-28 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Free Consultation</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Ready to strengthen your online reputation?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[0.95rem] max-w-lg">
              Share your situation with our specialists. We will review your current visibility, identify risks, and recommend a tailored action plan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {["Confidential audit", "Custom ORM roadmap", "Review response support", "Search visibility strategy"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="text-brand-gold"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-2">Request a Reputation Review</p>
              <p className="text-zinc-500 text-sm mb-6">We respond within 24 hours on business days.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
