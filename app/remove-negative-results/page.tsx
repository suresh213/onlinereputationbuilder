"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const faqs = [
  { q: "Can negative content be permanently removed from Google?", a: "Yes, in many cases negative content can be permanently removed from Google through official removal requests, legal takedowns, or direct outreach to webmasters. Our team evaluates each case and uses the most effective strategy for permanent removal." },
  { q: "How long does it take to remove negative Google search results?", a: "The timeline varies depending on the type of content and platform. Some removals happen within days, while others may take 4-8 weeks. SEO suppression strategies typically show results in 60-90 days." },
  { q: "What types of negative content can be removed?", a: "We can assist with removing news articles, blog posts, forum threads, defamatory reviews, legal information, images, videos, and other harmful online content through various legal and technical methods." },
  { q: "Do you handle both business and personal reputation issues?", a: "Absolutely. We provide tailored solutions for both businesses and individuals — whether you're a corporation dealing with a PR crisis or an individual facing false allegations online." },
];

const contentTypes = [
  { icon: "📰", label: "News Articles" },
  { icon: "⚖️", label: "Legal Info" },
  { icon: "📝", label: "Blog Posts" },
  { icon: "🎬", label: "Videos & Images" },
  { icon: "⭐", label: "Negative Reviews" },
  { icon: "💬", label: "Forum Threads" },
  { icon: "📱", label: "Social Media Posts" },
  { icon: "📋", label: "Complaint Sites" },
];

const steps = [
  { n: "01", title: "Free Reputation Analysis", desc: "We conduct a thorough audit of your online presence to identify all negative content affecting your brand or personal reputation." },
  { n: "02", title: "Strategy Development", desc: "Our experts develop a customized multi-pronged removal and suppression strategy tailored to your specific situation." },
  { n: "03", title: "Removal & Suppression", desc: "We execute the plan using legal, technical, and SEO-based methods to remove or suppress harmful content from search results." },
  { n: "04", title: "Positive Content Creation", desc: "We build and promote positive, authoritative content to push negative results further down the search pages." },
  { n: "05", title: "Ongoing Monitoring", desc: "We continuously monitor your online presence and alert you to any new issues before they escalate." },
];

export default function RemoveNegativeResultsPage() {
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full -translate-y-1/2 translate-x-1/4"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              🛡️ Negative Content Removal Experts
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Remove Negative Content From Google Search
            </h1>
            <p className="text-white/70 text-base mb-5 leading-relaxed">
              Negative Content Removal Services help businesses erase harmful Google search results fast.
            </p>
            <h2 className="text-white/90 text-lg font-semibold mb-3">Has Negative Content Damaged Your Business Reputation?</h2>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              We specialize in negative content removal to wipe out damaging reviews and articles from Google search results.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Quick removal or suppression of negative reviews that damage your credibility",
                "Proven SEO strategies that push positive content to the first page of Google",
                "24/7 reputation monitoring to identify issues early",
              ].map((item) => (
                <li key={item} className="check-item text-sm text-white/80">
                  <span className="text-brand-gold text-base font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-2xl p-7">
            <p className="section-label mb-2">Free Consultation</p>
            <h3 className="font-heading text-xl font-bold text-brand-dark mb-5">Tell Us About Your Situation</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <img
            src="https://buildbrandbetter.io/wp-content/uploads/2023/01/media-logo.png"
            alt="Featured in media"
            className="max-w-3xl mx-auto w-full h-auto object-contain opacity-70"
          />
        </div>
      </div>

      {/* NO ONE WANTS NEGATIVE CONTENT */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-2">Why It Matters</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">
              No One Wants Negative Content About Their Business or Personal Brand on Google's Search Results
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Negative content on Google can significantly impact your brand's credibility, customer trust, and revenue. Studies show that 87% of consumers research businesses online before making a decision, and a single negative result can cost you thousands of potential customers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              If your negative content is ranking high on Google search results, don't panic. There are numerous tactics and strategies that can be implemented to remove or suppress negative content from Google search results. Our online reputation experts specialize in removing, suppressing, and managing negative content on Google using proven legal, technical, and SEO-driven strategies.
            </p>
            <Link href="#contact" className="btn-blue">Start Removal Process</Link>
          </div>
          <div className="text-center">
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2023/01/Build-brandRemove-Negative-google-result-1.gif"
              alt="Remove Negative Results"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Expertise</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Types of Negative Content We Remove</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {contentTypes.map((c) => (
              <div key={c.label} className="platform-item flex flex-col items-center gap-3 py-6">
                <span className="text-3xl">{c.icon}</span>
                <span className="font-semibold text-sm text-brand-dark text-center">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Process</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">How Our Removal Process Works</h2>
          </div>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="process-step bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="step-number font-heading">{s.n}</div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 bg-brand-blue">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "98%", l: "Content Removal Success Rate" },
            { n: "1200+", l: "Clients Protected" },
            { n: "50+", l: "Platforms Covered" },
            { n: "48 hrs", l: "Average Response Time" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-heading text-4xl font-bold text-white mb-1">{s.n}</p>
              <p className="text-white/60 text-sm font-medium">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-4 bg-brand-dark relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-yellow-400/80 mb-2">Take Action Now</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Don't Let Negative Content Define Your Brand
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Every day that negative content stays on Google is another day of lost opportunities. Contact us now for a free, confidential consultation and take the first step toward a cleaner online presence.
            </p>
            <div className="space-y-3">
              {["Fast-track removal for urgent cases", "Confidential and discreet service", "Proven track record with 1200+ clients", "No cure, no fee guarantee available"].map(i => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-brand-gold">✓</span> {i}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-7">
            <p className="text-white font-bold text-lg mb-5">Get Free Removal Consultation</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
