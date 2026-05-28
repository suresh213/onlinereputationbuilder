"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const platforms = [
  { name: "Google", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Google.png" },
  { name: "Glassdoor", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Glassdoor.png" },
  { name: "Trustpilot", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Trustpilot.png" },
  { name: "Facebook", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/facebook.png" },
  { name: "Tripadvisor", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Tripadvisor.png" },
  { name: "Indeed", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Indeed.png" },
  { name: "Yelp", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/yelp-shiled.png" },
  { name: "BBB", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/BBB.png" },
  { name: "G2", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/G2-1.png" },
  { name: "Clutch", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/Clutch.png" },
  { name: "RateMDs", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/RateMDs.png" },
  { name: "Ripoff Report", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Ripoff_Report.png" },
];

const services = [
  { icon: "👁️", title: "Monitor", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/monitor.png", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management. With review monitoring, we identify reviews that can strengthen or damage your online reputation." },
  { icon: "🗑️", title: "Removal", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/Removal.png", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews. Then, our team works directly with review sites to flag and remove violating content." },
  { icon: "💬", title: "Response", img: "", desc: "We craft professional, empathetic responses to all reviews — positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
  { icon: "⭐", title: "Review Generation", img: "", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
  { icon: "📣", title: "Outreach", img: "", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
  { icon: "📊", title: "Reporting", img: "", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
];

const faqs = [
  { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
  { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously — including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
  { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
  { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
  { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews — positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
];

export default function ReviewManagementPage() {
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              ⭐ Top Review Management Company · Delhi India
            </div>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Professional Review Management Services That Protect Your Brand
            </h1>
            <p className="text-white/70 text-base mb-5 leading-relaxed">
              Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all leading platforms.
            </p>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Continuous monitoring of reviews across major platforms",
                "Professional responses to positive and negative feedback",
                "Detection and reporting of fake or spam reviews",
                "Reputation improvement strategies to build long-term trust",
              ].map((item) => (
                <li key={item} className="check-item text-sm text-white/80">
                  <span className="text-brand-gold font-bold flex-shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-7">
            <p className="section-label mb-2">Start Today</p>
            <h3 className="font-heading text-xl font-bold text-brand-dark mb-5">Protect Your Reviews Now</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <img src="https://buildbrandbetter.io/wp-content/uploads/2023/01/media-logo.png" alt="Featured in media" className="max-w-3xl mx-auto w-full h-auto object-contain opacity-70"/>
        </div>
      </div>

      {/* BUILD TRUST SECTION */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-2">Google Reviews</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-5">
              Build Trust With a Powerful Google Review Management Service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Build Brand Better can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
            </p>
            <h3 className="font-bold text-brand-dark mb-3">Bury Your Competition With Positive Customer Feedback</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our business review management service focuses on developing a long-term reputation strategy which leads to leads, calls and conversions. We use ethical and effective methods through our sophisticated review management service.
            </p>
            <ul className="space-y-2">
              {["Increased brand authority and customer trust", "Higher visibility through positive online reviews", "Better customer engagement and response handling", "Full control over your online reputation narrative"].map(i => (
                <li key={i} className="check-item text-sm text-gray-700">
                  <span className="text-brand-gold font-bold">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2025/02/Online-Review-Presence-768x493-1.png"
              alt="Online Review Management"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Platforms We Cover</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              Remove Negative Reviews from Google, Glassdoor, Trustpilot & Others
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className="platform-item flex flex-col items-center gap-3 py-5">
                <img src={p.img} alt={p.name} className="h-12 w-auto object-contain"/>
                <span className="text-xs font-semibold text-gray-600">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REPAIR SECTION */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="text-center">
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2023/01/review-management.gif"
              alt="Review Management"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
          <div>
            <p className="section-label mb-2">Reputation Repair</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">
              Manage, Build, and Preserve Your Online Reputation
            </h2>
            <p className="text-brand-blue font-semibold text-sm mb-5 italic">
              "If you can turn a negative review into a positive customer experience, your online reputation will increase."
            </p>
            <h3 className="font-bold text-brand-dark mb-3">How to repair your online reputation by removing negative reviews?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present on all of the top review sites.
            </p>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-sm mb-1">Respond to Reviews</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say — it shows you care about every customer experience.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-sm mb-1">Get More Positive Reviews</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Solutions</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">
              Build Brand Better offers advanced review management solutions for your business to grow
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="flex items-center gap-3 mb-4">
                  {s.img ? (
                    <img src={s.img} alt={s.title} className="w-12 h-12 object-contain"/>
                  ) : (
                    <span className="text-3xl">{s.icon}</span>
                  )}
                  <h3 className="font-bold text-brand-dark text-lg">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REVIEWS MATTER */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label text-yellow-400/80 mb-2">Why It Matters</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-5">
              Why Do Online Reviews Matter More Than Ever for Your Business Growth?
            </h2>
            <p className="text-white/60 leading-relaxed mb-5">
              Build Brand Better assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will be busy searching for good online reviews of businesses.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              We deal with negative content that impacts your business and tactfully advertise positive, value-based content that will enhance your web presence. We will assist your business to rank higher in Google, build stronger brand value, and convert more leads online.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "93%", l: "of consumers check reviews before buying" },
                { n: "4.2★", l: "Average rating needed to earn customer trust" },
                { n: "89%", l: "of consumers read business responses" },
                { n: "10x", l: "more trust with 50+ positive reviews" },
              ].map(s => (
                <div key={s.l} className="bg-white/10 rounded-lg p-4">
                  <p className="font-heading text-2xl font-bold text-brand-gold">{s.n}</p>
                  <p className="text-white/60 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2023/01/Build-Your-Brand-Better-1.gif"
              alt="Build Your Brand Better"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* DON'T LET NEGATIVE CTA */}
      <section className="py-10 px-4 bg-brand-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-white mb-3">Don't let a single negative Google result ruin your business</h2>
          <Link href="#contact" className="btn-blue">Schedule a Free Consultation</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">Common Questions About Review Management</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-4 bg-brand-dark relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-yellow-400/80 mb-2">Contact Us</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Take Control of Your Reviews Today</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
            </p>
            <div className="space-y-3">
              {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-brand-gold">✓</span>{i}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-7">
            <p className="text-white font-bold text-lg mb-5">Get Free Review Audit</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
