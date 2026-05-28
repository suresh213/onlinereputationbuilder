"use client";
import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const platforms = [
  "Google Search", "Glassdoor Reviews", "Trustpilot Ratings", "Facebook Reviews", "Tripadvisor", 
  "Indeed", "Yelp Platforms", "BBB Ratings", "G2 Crowd Reviews", "Clutch Badging", "RateMDs", "Ripoff Report"
];

const services = [
  { icon: "👁️", title: "Monitor", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management to identify reviews that can strengthen or damage your online reputation." },
  { icon: "🗑️", title: "Removal", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews and flags them for direct platform removals." },
  { icon: "💬", title: "Response Automation", desc: "We craft professional, empathetic responses to all reviews — positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
  { icon: "⭐", title: "Review Generation", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
  { icon: "📣", title: "Client Outreach", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
];

const faqs = [
  { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
  { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously — including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
  { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
  { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
  { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews — positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
];

// Interactive Rating Distribution Widget
function RatingDistributionWidget() {
  return (
    <div className="border border-zinc-200 rounded bg-white p-6 text-left font-sans select-none">
      <h4 className="font-heading font-extrabold text-sm text-zinc-950 uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">
        Rating Distribution
      </h4>
      <div className="flex items-center gap-6 mb-6">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-zinc-900 leading-none">4.8</p>
          <div className="text-amber-500 text-xs mt-1.5 flex justify-center">★★★★★</div>
          <p className="text-[0.62rem] text-zinc-400 uppercase tracking-wider font-bold mt-1">1,248 Reviews</p>
        </div>
        <div className="flex-1 space-y-2">
          {[
            { stars: 5, pct: 85, color: "bg-emerald-500" },
            { stars: 4, pct: 10, color: "bg-emerald-400" },
            { stars: 3, pct: 2, color: "bg-amber-400" },
            { stars: 2, pct: 1, color: "bg-orange-400" },
            { stars: 1, pct: 2, color: "bg-red-400" }
          ].map(r => (
            <div key={r.stars} className="flex items-center gap-2.5 text-[0.68rem] text-zinc-500">
              <span className="w-3 text-right font-bold">{r.stars}</span>
              <div className="h-2 flex-1 bg-zinc-100 rounded overflow-hidden">
                <div className={`h-full ${r.color}`} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="w-6 text-right font-semibold">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-zinc-50 border border-zinc-100 rounded p-3 text-center">
        <p className="text-[0.7rem] text-zinc-500 font-semibold">
          🚀 Verified sentiment index: <span className="text-emerald-600 font-bold">EXCELLENT</span>
        </p>
      </div>
    </div>
  );
}

// Interactive Review Response Editor Simulation
function ReviewResponseWidget() {
  const [replied, setReplied] = useState(false);
  const [response, setResponse] = useState("Hi Rajesh, thank you for sharing your experience! We are proud to support your business expansion goals. - Support Team");

  return (
    <div className="border border-zinc-200 rounded bg-white overflow-hidden text-left font-sans select-none">
      <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex justify-between items-center">
        <span className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
        <span className={`text-[0.62rem] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
          replied ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"
        }`}>
          {replied ? "Responded" : "Needs Response"}
        </span>
      </div>
      <div className="p-5 space-y-4">
        {/* Customer Review Card */}
        <div className="border border-zinc-100 bg-zinc-50/50 rounded p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="font-bold text-xs text-zinc-800">Rajesh K. (CEO)</span>
              <p className="text-[0.62rem] text-zinc-400 mt-0.5">Google Maps · 2 hours ago</p>
            </div>
            <span className="text-amber-500 text-[0.68rem] flex">★★★★★</span>
          </div>
          <p className="text-xs text-zinc-700 leading-normal">
            &ldquo;Exceptional service. Online Reputation Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
          </p>
        </div>

        {/* Reply Section */}
        <div className="space-y-2">
          <label className="text-[0.62rem] font-bold text-zinc-400 uppercase tracking-wider">Draft Professional Response</label>
          <textarea
            className="form-input text-xs w-full p-2.5"
            rows={3}
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            disabled={replied}
          />
        </div>

        <div className="flex justify-end gap-2.5">
          {!replied ? (
            <button onClick={() => setReplied(true)} className="btn-blue py-2 px-5 text-[0.7rem] leading-none">
              Publish Response
            </button>
          ) : (
            <>
              <span className="text-[0.68rem] text-emerald-600 font-semibold py-1">✓ Response published to Google Reviews</span>
              <button onClick={() => setReplied(false)} className="btn-outline border-zinc-300 text-zinc-600 hover:bg-zinc-50 py-1.5 px-3 text-[0.68rem] leading-none">
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const mediaNames = [
  "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
  "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
];

export default function ReviewManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
              ⭐ Top Review Management Company · Delhi India
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
              Professional Review Management Services
            </h1>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all leading platforms.
            </p>
            <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
              Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Continuous monitoring of reviews across major platforms",
                "Professional responses to positive and negative feedback",
                "Detection and reporting of fake or spam reviews",
                "Reputation improvement strategies to build long-term trust",
              ].map((item) => (
                <li key={item} className="check-item text-xs text-zinc-300">
                  <span className="text-brand-gold font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
          </div>
          <div className="bg-slate-900 border border-zinc-800 rounded p-7">
            <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Start Today</p>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Protect Your Reviews Now</h3>
            <ContactForm dark />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-zinc-50 py-6 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
            {mediaNames.map((m, i) => (
              <span key={i} className="logo-badge-pill">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BUILD TRUST SECTION */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
          <div className="pr-0 lg:pr-12">
            <p className="section-label mb-2">Google Reviews</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-5">
              Build Trust With a Powerful Google Review Management Service
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
              Online Reputation Builder can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
              We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
            </p>
            <h3 className="font-bold text-zinc-800 mb-3 text-xs uppercase tracking-wider">Outperform Competitors With Customer Feedback</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6">
              Our business review management service focuses on developing a long-term reputation strategy which leads to leads, calls and conversions. We use ethical and effective methods through our sophisticated review management service.
            </p>
            <ul className="space-y-2">
              {["Increased brand authority and customer trust", "Higher visibility through positive online reviews", "Better customer engagement and response handling", "Full control over your online reputation narrative"].map(i => (
                <li key={i} className="check-item text-xs text-zinc-700">
                  <span className="text-brand-gold font-bold">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-md mx-auto pl-0 lg:pl-12">
            <RatingDistributionWidget />
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Platforms We Cover</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
              Manage Reviews on Google, Glassdoor, Trustpilot &amp; Others
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {platforms.map((p) => (
              <span key={p} className="logo-badge-pill">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REPUTATION REPAIR */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
          <div className="w-full max-w-md mx-auto pr-0 lg:pr-12">
            <ReviewResponseWidget />
          </div>
          <div className="pl-0 lg:pl-12">
            <p className="section-label mb-2">Reputation Repair</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-4">
              Manage, Build, &amp; Preserve Your Online Reputation
            </h2>
            <p className="text-brand-blue font-semibold text-xs mb-5 uppercase tracking-wider">
              &ldquo;If you can turn a negative experience into a positive resolution, your brand value grows.&rdquo;
            </p>
            <h3 className="font-bold text-zinc-800 mb-3 text-xs uppercase tracking-wider">How to repair your online reputation by removing negative reviews?</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present on all of the top review sites.
            </p>
            <div className="space-y-4">
              <div className="bg-zinc-50 rounded p-4 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">Respond to Reviews</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say — it shows you care about every customer experience.</p>
              </div>
              <div className="bg-zinc-50 rounded p-4 border border-zinc-200">
                <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">Get More Positive Reviews</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Solutions</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
              Online Reputation Builder Offers Advanced Review Management Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div 
                key={s.title} 
                className={`service-card ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl select-none">{s.icon}</span>
                  <h3 className="font-extrabold text-zinc-900 text-sm uppercase tracking-wider">{s.title}</h3>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REVIEWS MATTER */}
      <section className="py-24 px-4 bg-zinc-900 border-b border-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label text-brand-gold mb-2">Why It Matters</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-5">
              Why Do Online Reviews Matter More Than Ever for Your Business Growth?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-5 text-xs">
              Online Reputation Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews of businesses.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
              We deal with negative content that impacts your business and advertise positive, value-based content that will enhance your web presence. We will assist your business to rank higher in Google, build stronger brand value, and convert more leads online.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "93%", l: "of consumers check reviews before buying" },
                { n: "4.2★", l: "Average rating needed to earn customer trust" },
                { n: "89%", l: "of consumers read business responses" },
                { n: "10x", l: "more trust with 50+ positive reviews" },
              ].map(s => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded p-4">
                  <p className="font-heading text-2xl font-extrabold text-brand-gold">{s.n}</p>
                  <p className="text-zinc-400 text-[0.62rem] uppercase tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-zinc-800 bg-zinc-950 rounded p-6 max-w-sm mx-auto w-full text-left">
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">ORM Trust Metric</h4>
            <div className="space-y-4">
              {[
                { label: "Positive Index", val: "94%" },
                { label: "Suppressed Defamatory Pages", val: "100%" },
                { label: "Average Platform Score", val: "4.7 / 5.0" }
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-zinc-400">{m.label}</span>
                  <span className="text-brand-gold font-bold">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DON'T LET NEGATIVE CTA */}
      <section className="py-10 px-4 bg-brand-gold text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-lg font-bold text-white mb-3 uppercase tracking-wider">Don&apos;t let a single negative result ruin your business</h2>
          <Link href="#contact" className="btn-blue">Schedule a Strategy Blueprint Consultation</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#fafafa] border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Common Questions About Review Management</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-zinc-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-brand-gold mb-2">Contact Us</p>
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">Take Control of Your Reviews Today</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
              Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
            </p>
            <div className="space-y-3 border-t border-zinc-800 pt-6">
              {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300 leading-normal">
                  <span className="text-brand-gold">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-950 border border-zinc-800 rounded p-7">
            <p className="text-white font-bold text-sm mb-4">Get Free Review Audit</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
