// // // "use client";
// // // import { useState } from "react";
// // // import Topbar from "@/components/Topbar";
// // // import Navbar from "@/components/Navbar";
// // // import Footer from "@/components/Footer";
// // // import ContactForm from "@/components/ContactForm";
// // // import FAQ from "@/components/FAQ";
// // // import Link from "next/link";

// // // const platforms = [
// // //   "Google Search", "Glassdoor Reviews", "Trustpilot Ratings", "Facebook Reviews", "Tripadvisor", 
// // //   "Indeed", "Yelp Platforms", "BBB Ratings", "G2 Crowd Reviews", "Clutch Badging", "RateMDs", "Ripoff Report"
// // // ];

// // // const services = [
// // //   { icon: "👁️", title: "Monitor", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management to identify reviews that can strengthen or damage your online reputation." },
// // //   { icon: "🗑️", title: "Removal", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews and flags them for direct platform removals." },
// // //   { icon: "💬", title: "Response Automation", desc: "We craft professional, empathetic responses to all reviews - positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
// // //   { icon: "⭐", title: "Review Generation", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
// // //   { icon: "📣", title: "Client Outreach", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
// // //   { icon: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
// // // ];

// // // const faqs = [
// // //   { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
// // //   { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously - including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
// // //   { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
// // //   { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
// // //   { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews - positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
// // // ];

// // // // Interactive Rating Distribution Widget
// // // function RatingDistributionWidget() {
// // //   return (
// // //     <div className="border border-zinc-200 rounded bg-white p-6 text-left font-sans select-none">
// // //       <h4 className="font-heading font-extrabold text-sm text-zinc-950 uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">
// // //         Rating Distribution
// // //       </h4>
// // //       <div className="flex items-center gap-6 mb-6">
// // //         <div className="text-center">
// // //           <p className="text-4xl font-extrabold text-zinc-900 leading-none">4.8</p>
// // //           <div className="text-amber-500 text-xs mt-1.5 flex justify-center">★★★★★</div>
// // //           <p className="text-[0.62rem] text-zinc-400 uppercase tracking-wider font-bold mt-1">1,248 Reviews</p>
// // //         </div>
// // //         <div className="flex-1 space-y-2">
// // //           {[
// // //             { stars: 5, pct: 85, color: "bg-emerald-500" },
// // //             { stars: 4, pct: 10, color: "bg-emerald-400" },
// // //             { stars: 3, pct: 2, color: "bg-amber-400" },
// // //             { stars: 2, pct: 1, color: "bg-orange-400" },
// // //             { stars: 1, pct: 2, color: "bg-red-400" }
// // //           ].map(r => (
// // //             <div key={r.stars} className="flex items-center gap-2.5 text-[0.68rem] text-zinc-500">
// // //               <span className="w-3 text-right font-bold">{r.stars}</span>
// // //               <div className="h-2 flex-1 bg-zinc-100 rounded overflow-hidden">
// // //                 <div className={`h-full ${r.color}`} style={{ width: `${r.pct}%` }} />
// // //               </div>
// // //               <span className="w-6 text-right font-semibold">{r.pct}%</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //       <div className="bg-zinc-50 border border-zinc-100 rounded p-3 text-center">
// // //         <p className="text-[0.7rem] text-zinc-500 font-semibold">
// // //           🚀 Verified sentiment index: <span className="text-emerald-600 font-bold">EXCELLENT</span>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Interactive Review Response Editor Simulation
// // // function ReviewResponseWidget() {
// // //   const [replied, setReplied] = useState(false);
// // //   const [response, setResponse] = useState("Hi Rajesh, thank you for sharing your experience! We are proud to support your business expansion goals. - Support Team");

// // //   return (
// // //     <div className="border border-zinc-200 rounded bg-white overflow-hidden text-left font-sans select-none">
// // //       <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex justify-between items-center">
// // //         <span className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
// // //         <span className={`text-[0.62rem] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
// // //           replied ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"
// // //         }`}>
// // //           {replied ? "Responded" : "Needs Response"}
// // //         </span>
// // //       </div>
// // //       <div className="p-5 space-y-4">
// // //         {/* Customer Review Card */}
// // //         <div className="border border-zinc-100 bg-zinc-50/50 rounded p-4">
// // //           <div className="flex justify-between items-start mb-2">
// // //             <div>
// // //               <span className="font-bold text-xs text-zinc-800">Rajesh K. (CEO)</span>
// // //               <p className="text-[0.62rem] text-zinc-400 mt-0.5">Google Maps · 2 hours ago</p>
// // //             </div>
// // //             <span className="text-amber-500 text-[0.68rem] flex">★★★★★</span>
// // //           </div>
// // //           <p className="text-xs text-zinc-700 leading-normal">
// // //             &ldquo;Exceptional service. Online Reputation Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
// // //           </p>
// // //         </div>

// // //         {/* Reply Section */}
// // //         <div className="space-y-2">
// // //           <label className="text-[0.62rem] font-bold text-zinc-400 uppercase tracking-wider">Draft Professional Response</label>
// // //           <textarea
// // //             className="form-input text-xs w-full p-2.5"
// // //             rows={3}
// // //             value={response}
// // //             onChange={(e) => setResponse(e.target.value)}
// // //             disabled={replied}
// // //           />
// // //         </div>

// // //         <div className="flex justify-end gap-2.5">
// // //           {!replied ? (
// // //             <button onClick={() => setReplied(true)} className="btn-blue py-2 px-5 text-[0.7rem] leading-none">
// // //               Publish Response
// // //             </button>
// // //           ) : (
// // //             <>
// // //               <span className="text-[0.68rem] text-emerald-600 font-semibold py-1">✓ Response published to Google Reviews</span>
// // //               <button onClick={() => setReplied(false)} className="btn-outline border-zinc-300 text-zinc-600 hover:bg-zinc-50 py-1.5 px-3 text-[0.68rem] leading-none">
// // //                 Edit
// // //               </button>
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const mediaNames = [
// // //   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
// // //   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// // // ];

// // // export default function ReviewManagementPage() {
// // //   return (
// // //     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
// // //       <Topbar />
// // //       <Navbar />

// // //       {/* PAGE HERO */}
// // //       <section className="page-hero relative overflow-hidden">
// // //         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
// // //           <div>
// // //             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold mb-5 uppercase tracking-wider">
// // //               ⭐ Top Review Management Company · Delhi India
// // //             </div>
// // //             <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] mb-4">
// // //               Professional Review Management Services
// // //             </h1>
// // //             <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
// // //               Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all leading platforms.
// // //             </p>
// // //             <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
// // //               Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews.
// // //             </p>
// // //             <ul className="space-y-2 mb-8">
// // //               {[
// // //                 "Continuous monitoring of reviews across major platforms",
// // //                 "Professional responses to positive and negative feedback",
// // //                 "Detection and reporting of fake or spam reviews",
// // //                 "Reputation improvement strategies to build long-term trust",
// // //               ].map((item) => (
// // //                 <li key={item} className="check-item text-xs text-zinc-300">
// // //                   <span className="text-brand-gold font-bold flex-shrink-0">✓</span>
// // //                   <span>{item}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
// // //           </div>
// // //           <div className="bg-slate-900 border border-zinc-800 rounded p-7">
// // //             <p className="section-label mb-1 text-[0.62rem] text-brand-gold uppercase tracking-widest font-bold">Start Today</p>
// // //             <h3 className="font-heading text-lg font-bold text-white mb-4">Protect Your Reviews Now</h3>
// // //             <ContactForm dark />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* MEDIA LOGOS */}
// // //       <div className="bg-zinc-50 py-6 border-b border-zinc-200">
// // //         <div className="max-w-7xl mx-auto px-4 overflow-hidden">
// // //           <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
// // //             {mediaNames.map((m, i) => (
// // //               <span key={i} className="logo-badge-pill">
// // //                 {m}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* BUILD TRUST SECTION */}
// // //       <section className="py-24 px-4 bg-white border-b border-zinc-200">
// // //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
// // //           <div className="pr-0 lg:pr-12">
// // //             <p className="section-label mb-2">Google Reviews</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-5">
// // //               Build Trust With a Powerful Google Review Management Service
// // //             </h2>
// // //             <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
// // //               Online Reputation Builder can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
// // //             </p>
// // //             <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
// // //               We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
// // //             </p>
// // //             <h3 className="font-bold text-zinc-800 mb-3 text-xs uppercase tracking-wider">Outperform Competitors With Customer Feedback</h3>
// // //             <p className="text-zinc-500 text-xs leading-relaxed mb-6">
// // //               Our business review management service focuses on developing a long-term reputation strategy which leads to leads, calls and conversions. We use ethical and effective methods through our sophisticated review management service.
// // //             </p>
// // //             <ul className="space-y-2">
// // //               {["Increased brand authority and customer trust", "Higher visibility through positive online reviews", "Better customer engagement and response handling", "Full control over your online reputation narrative"].map(i => (
// // //                 <li key={i} className="check-item text-xs text-zinc-700">
// // //                   <span className="text-brand-gold font-bold">✓</span>
// // //                   <span>{i}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //           <div className="w-full max-w-md mx-auto pl-0 lg:pl-12">
// // //             <RatingDistributionWidget />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* PLATFORMS */}
// // //       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-12">
// // //             <p className="section-label mb-2">Platforms We Cover</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
// // //               Manage Reviews on Google, Glassdoor, Trustpilot &amp; Others
// // //             </h2>
// // //           </div>
// // //           <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
// // //             {platforms.map((p) => (
// // //               <span key={p} className="logo-badge-pill">
// // //                 {p}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* REPUTATION REPAIR */}
// // //       <section className="py-24 px-4 bg-white border-b border-zinc-200">
// // //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:divide-x lg:divide-zinc-200">
// // //           <div className="w-full max-w-md mx-auto pr-0 lg:pr-12">
// // //             <ReviewResponseWidget />
// // //           </div>
// // //           <div className="pl-0 lg:pl-12">
// // //             <p className="section-label mb-2">Reputation Repair</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900 mb-4">
// // //               Manage, Build, &amp; Preserve Your Online Reputation
// // //             </h2>
// // //             <p className="text-brand-blue font-semibold text-xs mb-5 uppercase tracking-wider">
// // //               &ldquo;If you can turn a negative experience into a positive resolution, your brand value grows.&rdquo;
// // //             </p>
// // //             <h3 className="font-bold text-zinc-800 mb-3 text-xs uppercase tracking-wider">How to repair your online reputation by removing negative reviews?</h3>
// // //             <p className="text-zinc-500 text-xs leading-relaxed mb-4">
// // //               Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present on all of the top review sites.
// // //             </p>
// // //             <div className="space-y-4">
// // //               <div className="bg-zinc-50 rounded p-4 border border-zinc-200">
// // //                 <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">Respond to Reviews</h4>
// // //                 <p className="text-xs text-zinc-500 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say - it shows you care about every customer experience.</p>
// // //               </div>
// // //               <div className="bg-zinc-50 rounded p-4 border border-zinc-200">
// // //                 <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-wider mb-1">Get More Positive Reviews</h4>
// // //                 <p className="text-xs text-zinc-500 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* OUR SOLUTIONS */}
// // //       <section className="py-24 px-4 bg-[#fafafa] border-b border-zinc-200">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-12">
// // //             <p className="section-label mb-2">Our Solutions</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">
// // //               Online Reputation Builder Offers Advanced Review Management Solutions
// // //             </h2>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {services.map((s, idx) => (
// // //               <div 
// // //                 key={s.title} 
// // //                 className={`service-card ${idx % 2 === 0 ? "card-accent-blue" : "card-accent-gold"}`}
// // //               >
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <span className="text-3xl select-none">{s.icon}</span>
// // //                   <h3 className="font-extrabold text-zinc-900 text-sm uppercase tracking-wider">{s.title}</h3>
// // //                 </div>
// // //                 <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* WHY REVIEWS MATTER */}
// // //       <section className="py-24 px-4 bg-zinc-900 border-b border-zinc-950">
// // //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
// // //           <div>
// // //             <p className="section-label text-brand-gold mb-2">Why It Matters</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-5">
// // //               Why Do Online Reviews Matter More Than Ever for Your Business Growth?
// // //             </h2>
// // //             <p className="text-zinc-400 leading-relaxed mb-5 text-xs">
// // //               Online Reputation Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews of businesses.
// // //             </p>
// // //             <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
// // //               We deal with negative content that impacts your business and advertise positive, value-based content that will enhance your web presence. We will assist your business to rank higher in Google, build stronger brand value, and convert more leads online.
// // //             </p>
// // //             <div className="grid grid-cols-2 gap-4">
// // //               {[
// // //                 { n: "93%", l: "of consumers check reviews before buying" },
// // //                 { n: "4.2★", l: "Average rating needed to earn customer trust" },
// // //                 { n: "89%", l: "of consumers read business responses" },
// // //                 { n: "10x", l: "more trust with 50+ positive reviews" },
// // //               ].map(s => (
// // //                 <div key={s.l} className="bg-white/5 border border-white/10 rounded p-4">
// // //                   <p className="font-heading text-2xl font-extrabold text-brand-gold">{s.n}</p>
// // //                   <p className="text-zinc-400 text-[0.62rem] uppercase tracking-wider mt-1">{s.l}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="border border-zinc-800 bg-zinc-950 rounded p-6 max-w-sm mx-auto w-full text-left">
// // //             <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">ORM Trust Metric</h4>
// // //             <div className="space-y-4">
// // //               {[
// // //                 { label: "Positive Index", val: "94%" },
// // //                 { label: "Suppressed Defamatory Pages", val: "100%" },
// // //                 { label: "Average Platform Score", val: "4.7 / 5.0" }
// // //               ].map((m, i) => (
// // //                 <div key={i} className="flex justify-between items-center text-xs">
// // //                   <span className="text-zinc-400">{m.label}</span>
// // //                   <span className="text-brand-gold font-bold">{m.val}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* DON'T LET NEGATIVE CTA */}
// // //       <section className="py-10 px-4 bg-brand-gold text-center">
// // //         <div className="max-w-4xl mx-auto">
// // //           <h2 className="font-heading text-lg font-bold text-white mb-3 uppercase tracking-wider">Don&apos;t let a single negative result ruin your business</h2>
// // //           <Link href="#contact" className="btn-blue">Schedule a Strategy Blueprint Consultation</Link>
// // //         </div>
// // //       </section>

// // //       {/* FAQ */}
// // //       <section className="py-16 px-4 bg-[#fafafa] border-b border-zinc-200">
// // //         <div className="max-w-4xl mx-auto">
// // //           <div className="text-center mb-10">
// // //             <p className="section-label mb-2">FAQs</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-zinc-900">Common Questions About Review Management</h2>
// // //           </div>
// // //           <FAQ items={faqs} />
// // //         </div>
// // //       </section>

// // //       {/* CONTACT */}
// // //       <section id="contact" className="py-16 px-4 bg-zinc-900 relative overflow-hidden">
// // //         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //           <div>
// // //             <p className="section-label text-brand-gold mb-2">Contact Us</p>
// // //             <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4">Take Control of Your Reviews Today</h2>
// // //             <p className="text-zinc-400 leading-relaxed mb-6 text-xs">
// // //               Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
// // //             </p>
// // //             <div className="space-y-3 border-t border-zinc-800 pt-6">
// // //               {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
// // //                 <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300 leading-normal">
// // //                   <span className="text-brand-gold">✓</span>
// // //                   <span>{i}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="bg-zinc-950 border border-zinc-800 rounded p-7">
// // //             <p className="text-white font-bold text-sm mb-4">Get Free Review Audit</p>
// // //             <ContactForm dark />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import Topbar from "@/components/Topbar";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import ContactForm from "@/components/ContactForm";
// // import FAQ from "@/components/FAQ";
// // import Link from "next/link";

// // const platforms = [
// //   "Google Search", "Glassdoor Reviews", "Trustpilot Ratings", "Facebook Reviews", "Tripadvisor", 
// //   "Indeed", "Yelp Platforms", "BBB Ratings", "G2 Crowd Reviews", "Clutch Badging", "RateMDs", "Ripoff Report"
// // ];

// // const services = [
// //   { icon: "👁️", title: "Monitor", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management to identify reviews that can strengthen or damage your online reputation." },
// //   { icon: "🗑️", title: "Removal", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews and flags them for direct platform removals." },
// //   { icon: "💬", title: "Response Automation", desc: "We craft professional, empathetic responses to all reviews - positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
// //   { icon: "⭐", title: "Review Generation", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
// //   { icon: "📣", title: "Client Outreach", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
// //   { icon: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
// // ];

// // const faqs = [
// //   { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
// //   { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously - including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
// //   { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
// //   { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
// //   { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews - positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
// // ];

// // // Interactive Rating Distribution Widget (Upgraded to Premium UI)
// // function RatingDistributionWidget() {
// //   return (
// //     <div className="premium-info-card border border-zinc-200 rounded-xl bg-white p-8 text-left font-sans select-none h-full flex flex-col justify-center">
// //       <h4 className="font-heading font-extrabold text-sm text-zinc-950 uppercase tracking-wider mb-5 border-b border-zinc-100 pb-3">
// //         Rating Distribution
// //       </h4>
// //       <div className="flex items-center gap-8 mb-8">
// //         <div className="text-center shrink-0">
// //           <p className="text-5xl font-heading font-extrabold text-zinc-900 leading-none">4.8</p>
// //           <div className="text-brand-gold text-sm mt-2 flex justify-center tracking-widest">★★★★★</div>
// //           <p className="text-[0.65rem] text-zinc-400 uppercase tracking-wider font-bold mt-2">1,248 Reviews</p>
// //         </div>
// //         <div className="flex-1 space-y-2.5">
// //           {[
// //             { stars: 5, pct: 85, color: "bg-emerald-500" },
// //             { stars: 4, pct: 10, color: "bg-emerald-400" },
// //             { stars: 3, pct: 2, color: "bg-amber-400" },
// //             { stars: 2, pct: 1, color: "bg-orange-400" },
// //             { stars: 1, pct: 2, color: "bg-red-400" }
// //           ].map(r => (
// //             <div key={r.stars} className="flex items-center gap-3 text-[0.7rem] text-zinc-500">
// //               <span className="w-3 text-right font-bold">{r.stars}</span>
// //               <div className="h-2.5 flex-1 bg-zinc-100 rounded-full overflow-hidden">
// //                 <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
// //               </div>
// //               <span className="w-8 text-right font-semibold">{r.pct}%</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-4 text-center mt-auto">
// //         <p className="text-[0.75rem] text-zinc-500 font-semibold">
// //           🚀 Verified sentiment index: <span className="text-emerald-600 font-bold ml-1">EXCELLENT</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // // Interactive Review Response Editor Simulation (Upgraded to Premium UI)
// // function ReviewResponseWidget() {
// //   const [replied, setReplied] = useState(false);
// //   const [response, setResponse] = useState("Hi Rajesh, thank you for sharing your experience! We are proud to support your business expansion goals. - Support Team");

// //   return (
// //     <div className="premium-info-card border border-zinc-200 rounded-xl bg-white overflow-hidden text-left font-sans select-none">
// //       <div className="bg-zinc-50 border-b border-zinc-200 px-5 py-4 flex justify-between items-center">
// //         <span className="text-[0.7rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
// //         <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded border uppercase tracking-wider transition-colors ${
// //           replied ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-amber-50 border-amber-200 text-amber-700"
// //         }`}>
// //           {replied ? "Responded" : "Needs Response"}
// //         </span>
// //       </div>
// //       <div className="p-6 space-y-5">
// //         {/* Customer Review Card */}
// //         <div className="border border-zinc-100 bg-zinc-50/80 rounded-lg p-5">
// //           <div className="flex justify-between items-start mb-3">
// //             <div>
// //               <span className="font-bold text-sm text-zinc-800">Rajesh K. (CEO)</span>
// //               <p className="text-[0.65rem] text-zinc-400 mt-1 uppercase tracking-wider">Google Maps · 2 hours ago</p>
// //             </div>
// //             <span className="text-brand-gold text-sm tracking-widest flex">★★★★★</span>
// //           </div>
// //           <p className="text-sm text-zinc-600 leading-relaxed italic">
// //             &ldquo;Exceptional service. Online Reputation Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
// //           </p>
// //         </div>

// //         {/* Reply Section */}
// //         <div className="space-y-2.5">
// //           <label className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-wider">Draft Professional Response</label>
// //           <textarea
// //             className="form-input text-sm w-full p-3 min-h-[90px]"
// //             value={response}
// //             onChange={(e) => setResponse(e.target.value)}
// //             disabled={replied}
// //           />
// //         </div>

// //         <div className="flex justify-end gap-3 pt-2">
// //           {!replied ? (
// //             <button onClick={() => setReplied(true)} className="btn-blue text-[0.75rem] py-2.5 px-6">
// //               Publish Response
// //             </button>
// //           ) : (
// //             <>
// //               <span className="text-[0.75rem] text-emerald-600 font-semibold py-2 flex items-center gap-1.5">
// //                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
// //                 Response published to Google
// //               </span>
// //               <button onClick={() => setReplied(false)} className="btn-outline !border-zinc-200 !text-zinc-600 hover:!bg-zinc-50 text-[0.75rem] py-2 px-5">
// //                 Edit
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const mediaNames = [
// //   "CNW", "ANI", "ET BrandEquity", "Times Now", "Forbes", "DNA India", 
// //   "CNBC", "Hindustan Times", "Business Standard", "India Today", "Midday", "Yahoo Finance"
// // ];

// // export default function ReviewManagementPage() {
// //   return (
// //     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
// //       <Topbar />
// //       <Navbar />

// //       {/* PAGE HERO */}
// //       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark">
// //         <div className="hero-ambient hero-ambient-blue" />
// //         <div className="hero-ambient hero-ambient-gold" />
// //         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
// //         <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"/>

// //         <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-center relative z-10">
// //           <div className="hero-copy">
// //             <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider">
// //               ⭐ Top Review Management Company · Delhi India
// //             </div>
// //             <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.18rem] font-extrabold text-white leading-[1.04] mb-4 tracking-tight max-w-3xl">
// //               Professional Review Management Services
// //             </h1>
// //             <p className="text-white/70 text-base mb-5 leading-relaxed max-w-2xl">
// //               Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all leading platforms.
// //             </p>
// //             <p className="text-white/60 text-sm mb-6 leading-relaxed max-w-2xl">
// //               Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews.
// //             </p>
// //             <ul className="hero-proof-grid mb-8">
// //               {[
// //                 "Continuous monitoring of reviews across major platforms",
// //                 "Professional responses to positive and negative feedback",
// //                 "Detection and reporting of fake or spam reviews",
// //                 "Reputation improvement strategies to build long-term trust",
// //               ].map((item) => (
// //                 <li key={item} className="check-item text-sm text-white/80">
// //                   <span className="check-icon text-brand-gold text-base">✓</span>
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //             <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
// //           </div>
// //           <div className="premium-form-card dark bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8">
// //             <div className="form-card-orbit" />
// //             <p className="section-label mb-2 text-brand-gold">Start Today</p>
// //             <h3 className="font-heading text-xl font-bold text-white mb-5">Protect Your Reviews Now</h3>
// //             <ContactForm dark />
// //           </div>
// //         </div>
// //       </section>

// //       {/* MEDIA LOGOS */}
// //       <div className="logo-marquee-shell bg-zinc-50 py-8 border-b border-zinc-200 overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-4 overflow-hidden">
// //           <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
// //             {mediaNames.map((m, i) => (
// //               <span key={i} className="logo-badge-pill">
// //                 {m}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* BUILD TRUST SECTION */}
// //       <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
// //           <div className="premium-copy-panel pr-0 lg:pr-8">
// //             <p className="section-label mb-2">Google Reviews</p>
// //             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">
// //               Build Trust With a Powerful <span className="heading-script text-brand-blue">Review Management</span> Service
// //             </h2>
// //             <p className="text-zinc-500 leading-relaxed mb-4 text-sm">
// //               Online Reputation Builder can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
// //             </p>
// //             <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
// //               We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
// //             </p>
            
// //             <div className="premium-info-card bg-zinc-50 rounded-lg p-5 border border-zinc-200 border-l-4 border-l-brand-blue mb-8">
// //               <h3 className="font-bold text-zinc-900 mb-2 text-sm uppercase tracking-wider">Outperform Competitors With Customer Feedback</h3>
// //               <p className="text-zinc-500 text-sm leading-relaxed">
// //                 Our business review management service focuses on developing a long-term reputation strategy which leads to leads, calls and conversions. We use ethical and effective methods through our sophisticated review management service.
// //               </p>
// //             </div>

// //             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// //               {["Increased brand authority and customer trust", "Higher visibility through positive online reviews", "Better customer engagement and response handling", "Full control over your online reputation narrative"].map(i => (
// //                 <li key={i} className="check-item text-sm text-zinc-700 items-start">
// //                   <span className="check-icon text-brand-gold text-base mt-0.5">✓</span>
// //                   <span className="leading-snug">{i}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div className="w-full max-w-lg mx-auto lg:ml-auto">
// //             <RatingDistributionWidget />
// //           </div>
// //         </div>
// //       </section>

// //       {/* PLATFORMS */}
// //       <section className="py-20 lg:py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
// //         <div className="platform-grid-glow" />
// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <div className="text-center mb-12">
// //             <p className="section-label mb-2 text-brand-gold">Platforms We Cover</p>
// //             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
// //               Manage Reviews on <span className="heading-script text-brand-gold">Google, Glassdoor, Trustpilot</span> &amp; Others
// //             </h2>
// //           </div>
// //           <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
// //             {platforms.map((p) => (
// //               <span key={p} className="logo-badge-pill !bg-zinc-900 !border-zinc-800 !text-zinc-300 hover:!bg-zinc-800 hover:!text-white hover:!border-zinc-600 transition-all">
// //                 {p}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* REPUTATION REPAIR */}
// //       <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
// //           <div className="w-full max-w-lg mx-auto lg:mr-auto order-2 lg:order-1">
// //             <ReviewResponseWidget />
// //           </div>
// //           <div className="premium-copy-panel pl-0 lg:pl-8 order-1 lg:order-2">
// //             <p className="section-label mb-2">Reputation Repair</p>
// //             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">
// //               Manage, Build, &amp; Preserve Your <span className="heading-script text-brand-blue">Online Reputation</span>
// //             </h2>
// //             <div className="bg-brand-blue/5 border-l-2 border-brand-blue py-3 px-4 mb-6">
// //               <p className="text-brand-blue font-bold text-xs uppercase tracking-wider italic">
// //                 &ldquo;If you can turn a negative experience into a positive resolution, your brand value grows.&rdquo;
// //               </p>
// //             </div>
// //             <h3 className="font-bold text-zinc-900 mb-3 text-sm">How to repair your online reputation by removing negative reviews?</h3>
// //             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
// //               Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present on all of the top review sites.
// //             </p>
// //             <div className="space-y-4">
// //               <div className="premium-info-card bg-zinc-50 rounded-lg p-5 border border-zinc-200">
// //                 <h4 className="font-bold text-zinc-900 text-sm mb-2">Respond to Reviews</h4>
// //                 <p className="text-sm text-zinc-500 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say - it shows you care about every customer experience.</p>
// //               </div>
// //               <div className="premium-info-card bg-zinc-50 rounded-lg p-5 border border-zinc-200">
// //                 <h4 className="font-bold text-zinc-900 text-sm mb-2">Get More Positive Reviews</h4>
// //                 <p className="text-sm text-zinc-500 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* OUR SOLUTIONS */}
// //       <section className="relative py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <div className="text-center mb-16">
// //             <p className="section-label mb-2">Our Solutions</p>
// //             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
// //               Online Reputation Builder Offers Advanced <br className="hidden lg:block"/>
// //               <span className="heading-script text-brand-blue">Review Management Solutions</span>
// //             </h2>
// //           </div>
          
// //           <div className="services-showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
// //             {services.map((s, i) => (
// //               <div 
// //                 key={s.title} 
// //                 className="group premium-service-card service-showcase-item relative bg-white rounded-2xl p-8 transition-all duration-500 overflow-hidden flex flex-col h-full border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 z-10 hover:z-20"
// //                 style={{ transitionDelay: `${i * 25}ms` }}
// //               >
// //                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent group-hover:via-brand-blue transition-all duration-500"></div>
// //                 <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] via-transparent to-transparent group-hover:from-brand-blue/[0.06] transition-all duration-500 pointer-events-none"></div>
                
// //                 <div className="relative z-10 flex flex-col h-full">
// //                   <div className="w-14 h-14 service-icon-shell flex items-center justify-center rounded-xl mb-8 bg-zinc-50 border border-zinc-100/80 shadow-sm text-2xl group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg group-hover:shadow-brand-blue/25 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left">
// //                     {s.icon}
// //                   </div>
// //                   <h3 className="font-heading font-bold text-xl text-zinc-900 mb-4 leading-snug group-hover:text-brand-blue transition-colors duration-300">
// //                     {s.title}
// //                   </h3>
// //                   <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1 group-hover:text-zinc-600 transition-colors duration-300">
// //                     {s.desc}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* WHY REVIEWS MATTER */}
// //       <section className="py-20 lg:py-24 px-4 bg-zinc-900 border-b border-zinc-950 relative overflow-hidden premium-section-dark">
// //         <div className="hero-ambient hero-ambient-gold opacity-30" />
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
// //           <div className="premium-copy-panel-dark">
// //             <p className="section-label text-brand-gold mb-2">Why It Matters</p>
// //             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
// //               Why Do Online Reviews Matter More Than Ever for <span className="heading-script text-brand-gold">Your Business Growth?</span>
// //             </h2>
// //             <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
// //               Online Reputation Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews of businesses.
// //             </p>
// //             <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
// //               We deal with negative content that impacts your business and advertise positive, value-based content that will enhance your web presence. We will assist your business to rank higher in Google, build stronger brand value, and convert more leads online.
// //             </p>
// //             <div className="grid grid-cols-2 gap-4">
// //               {[
// //                 { n: "93%", l: "of consumers check reviews before buying" },
// //                 { n: "4.2★", l: "Average rating needed to earn customer trust" },
// //                 { n: "89%", l: "of consumers read business responses" },
// //                 { n: "10x", l: "more trust with 50+ positive reviews" },
// //               ].map(s => (
// //                 <div key={s.l} className="bg-white/5 border border-white/10 rounded-lg p-5 premium-info-card">
// //                   <p className="font-heading text-3xl font-extrabold text-brand-gold mb-2">{s.n}</p>
// //                   <p className="text-zinc-300 text-[0.65rem] uppercase tracking-wider leading-snug">{s.l}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="premium-form-card dark border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm rounded-xl p-8 max-w-sm mx-auto w-full text-left">
// //             <div className="form-card-orbit" />
// //             <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-3 relative z-10">ORM Trust Metric</h4>
// //             <div className="space-y-5 relative z-10">
// //               {[
// //                 { label: "Positive Index", val: "94%" },
// //                 { label: "Suppressed Defamatory Pages", val: "100%" },
// //                 { label: "Average Platform Score", val: "4.7 / 5.0" }
// //               ].map((m, i) => (
// //                 <div key={i} className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
// //                   <span className="text-zinc-400">{m.label}</span>
// //                   <span className="text-brand-gold font-bold bg-brand-gold/10 px-2.5 py-1 rounded">{m.val}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* DON'T LET NEGATIVE CTA */}
// //       <section className="py-14 px-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-center relative overflow-hidden">
// //         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-[length:24px_24px] opacity-30 mix-blend-overlay pointer-events-none"></div>
// //         <div className="max-w-4xl mx-auto relative z-10">
// //           <h2 className="font-heading text-xl md:text-2xl font-bold text-zinc-950 mb-6 uppercase tracking-wider">Don&apos;t let a single negative result ruin your business</h2>
// //           <Link href="#contact" className="btn-blue !bg-zinc-950 !border-zinc-950 hover:!bg-zinc-800 hover:!border-zinc-800">
// //             Schedule a Strategy Blueprint Consultation
// //           </Link>
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="text-center mb-12">
// //             <p className="section-label mb-2">FAQs</p>
// //             <h2 className="font-heading text-3xl font-bold text-zinc-900">Common Questions About <span className="heading-script text-brand-blue">Review Management</span></h2>
// //           </div>
// //           <FAQ items={faqs} />
// //         </div>
// //       </section>

// //       {/* CONTACT CTA */}
// //       <section id="contact" className="py-20 lg:py-24 px-4 bg-zinc-900 relative overflow-hidden premium-section-dark">
// //         <div className="absolute top-10 left-10 w-80 h-80 bg-brand-gold/5 rounded-full"/>
// //         <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-blue/5 rounded-full"/>
        
// //         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
// //           <div className="premium-copy-panel-dark">
// //             <p className="section-label text-brand-gold mb-2">Contact Us</p>
// //             <h2 className="font-heading text-3xl font-bold text-white mb-5">
// //               Take Control of Your <br className="hidden lg:block"/>
// //               <span className="heading-script text-brand-gold">Reviews Today</span>
// //             </h2>
// //             <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
// //               Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
// //             </p>
// //             <div className="space-y-4 border-t border-zinc-800 pt-8 mb-8">
// //               {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
// //                 <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 leading-normal">
// //                   <span className="text-brand-gold bg-brand-gold/10 w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0">✓</span>
// //                   <span>{i}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="premium-form-card dark bg-zinc-950 border border-zinc-800 rounded-xl p-7">
// //             <p className="text-white font-bold text-lg mb-5">Get Free Review Audit</p>
// //             <ContactForm dark />
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const platforms = [
//   "Google Search", "Glassdoor Reviews", "Trustpilot Ratings", "Facebook Reviews", "Tripadvisor", 
//   "Indeed", "Yelp Platforms", "BBB Ratings", "G2 Crowd Reviews", "Clutch Badging", "RateMDs", "Ripoff Report"
// ];

// const services = [
//   { icon: "👁️", title: "Monitor", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management to identify reviews that can strengthen or damage your online reputation." },
//   { icon: "🗑️", title: "Removal", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews and flags them for direct platform removals." },
//   { icon: "💬", title: "Response Automation", desc: "We craft professional, empathetic responses to all reviews - positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
//   { icon: "⭐", title: "Review Generation", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
//   { icon: "📣", title: "Client Outreach", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
//   { icon: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
// ];

// const faqs = [
//   { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
//   { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously - including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
//   { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
//   { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
//   { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews - positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
// ];

// // Interactive Rating Distribution Widget (Upgraded to a distinct glass panel look)
// function RatingDistributionWidget() {
//   return (
//     <div className="glass-panel-light rounded-xl p-8 text-left font-sans select-none h-full flex flex-col justify-center relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(37,99,235,0.08)]">
//       <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
      
//       <h4 className="font-heading font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5 border-b border-zinc-200/60 pb-3 relative z-10">
//         Live Rating Distribution
//       </h4>
//       <div className="flex items-center gap-8 mb-8 relative z-10">
//         <div className="text-center shrink-0">
//           <p className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-600 leading-none">4.8</p>
//           <div className="text-brand-gold text-sm mt-2 flex justify-center tracking-widest drop-shadow-sm">★★★★★</div>
//           <p className="text-[0.65rem] text-zinc-500 uppercase tracking-wider font-bold mt-2">1,248 Reviews</p>
//         </div>
//         <div className="flex-1 space-y-3">
//           {[
//             { stars: 5, pct: 85, color: "bg-gradient-to-r from-emerald-400 to-emerald-500" },
//             { stars: 4, pct: 10, color: "bg-gradient-to-r from-emerald-300 to-emerald-400" },
//             { stars: 3, pct: 2, color: "bg-gradient-to-r from-amber-300 to-amber-400" },
//             { stars: 2, pct: 1, color: "bg-gradient-to-r from-orange-300 to-orange-400" },
//             { stars: 1, pct: 2, color: "bg-gradient-to-r from-red-300 to-red-400" }
//           ].map(r => (
//             <div key={r.stars} className="flex items-center gap-3 text-[0.7rem] text-zinc-600">
//               <span className="w-3 text-right font-bold">{r.stars}</span>
//               <div className="h-2.5 flex-1 bg-zinc-200/50 rounded-full overflow-hidden shadow-inner">
//                 <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
//               </div>
//               <span className="w-8 text-right font-bold">{r.pct}%</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white/80 border border-zinc-200/50 rounded-lg p-4 text-center mt-auto shadow-sm relative z-10">
//         <p className="text-[0.75rem] text-zinc-600 font-semibold">
//           🚀 Verified sentiment index: <span className="text-emerald-600 font-black ml-1">EXCELLENT</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Interactive Review Response Editor Simulation
// function ReviewResponseWidget() {
//   const [replied, setReplied] = useState(false);
//   const [response, setResponse] = useState("Hi Rajesh, thank you for sharing your experience! We are proud to support your business expansion goals. - Support Team");

//   return (
//     <div className="premium-info-card border border-zinc-200 rounded-xl bg-white overflow-hidden text-left font-sans select-none shadow-[0_20px_40px_-15px_rgba(9,15,28,0.05)]">
//       <div className="bg-zinc-50/80 border-b border-zinc-200 px-5 py-4 flex justify-between items-center">
//         <span className="text-[0.7rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
//         <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded border uppercase tracking-wider transition-all duration-300 ${
//           replied ? "bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm" : "bg-amber-50 border-amber-200 text-amber-700"
//         }`}>
//           {replied ? "Responded" : "Needs Response"}
//         </span>
//       </div>
//       <div className="p-6 space-y-5">
//         <div className="border border-zinc-100 bg-white shadow-sm rounded-lg p-5 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
//           <div className="flex justify-between items-start mb-3">
//             <div>
//               <span className="font-bold text-sm text-zinc-800">Rajesh K. (CEO)</span>
//               <p className="text-[0.65rem] text-zinc-400 mt-1 uppercase tracking-wider">Google Maps · 2 hours ago</p>
//             </div>
//             <span className="text-brand-gold text-sm tracking-widest flex">★★★★★</span>
//           </div>
//           <p className="text-sm text-zinc-600 leading-relaxed italic">
//             &ldquo;Exceptional service. Online Reputation Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
//           </p>
//         </div>

//         <div className="space-y-2.5">
//           <label className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-wider">Draft Professional Response</label>
//           <textarea
//             className="form-input text-sm w-full p-4 min-h-[95px] bg-zinc-50/50 focus:bg-white transition-colors"
//             value={response}
//             onChange={(e) => setResponse(e.target.value)}
//             disabled={replied}
//           />
//         </div>

//         <div className="flex justify-end gap-3 pt-2">
//           {!replied ? (
//             <button onClick={() => setReplied(true)} className="btn-blue text-[0.75rem] py-2.5 px-6 shadow-lg shadow-brand-blue/20">
//               Publish Response
//             </button>
//           ) : (
//             <>
//               <span className="text-[0.75rem] text-emerald-600 font-semibold py-2 flex items-center gap-1.5">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                 Response published to Google
//               </span>
//               <button onClick={() => setReplied(false)} className="btn-outline !border-zinc-200 !text-zinc-600 hover:!bg-zinc-50 text-[0.75rem] py-2 px-5">
//                 Edit
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Upgraded to use real online image URLs for maximum visual fidelity instead of text pills
// const mediaLogos = [
//   { name: "Forbes", img: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" },
//   { name: "CNBC", img: "https://www.google.com/s2/favicons?domain=cnbc.com&sz=128" },
//   { name: "Yahoo Finance", img: "https://www.google.com/s2/favicons?domain=finance.yahoo.com&sz=128" },
//   { name: "India Today", img: "https://www.google.com/s2/favicons?domain=indiatoday.in&sz=128" },
//   { name: "The Economic Times", img: "https://www.google.com/s2/favicons?domain=economictimes.indiatimes.com&sz=128" },
//   { name: "Hindustan Times", img: "https://www.google.com/s2/favicons?domain=hindustantimes.com&sz=128" },
//   { name: "ANI", img: "https://www.google.com/s2/favicons?domain=aninews.in&sz=128" },
//   { name: "Times Now", img: "https://www.google.com/s2/favicons?domain=timesnownews.com&sz=128" },
// ];

// export default function ReviewManagementPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* DISTINCT PAGE HERO - Asymmetrical layout with strong visual hierarchy */}
//       <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
//         <div className="hero-ambient hero-ambient-gold opacity-60" />
//         <div className="hero-ambient hero-ambient-blue opacity-40 top-1/2 left-1/4" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10">
//           <div className="hero-copy">
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-gold/10 border-brand-gold/30 text-brand-gold">
//               ⭐ Premium Review Management
//             </div>
//             <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
//               Control the Narrative. <br/>
//               <span className="text-gradient-gold">Master Your Reviews.</span>
//             </h1>
//             <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
//               Don't let fake or negative reviews dictate your brand's value. We monitor, manage, and optimize your presence across every major platform.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
//               {[
//                 "24/7 Platform Monitoring",
//                 "Fake Review Detection & Removal",
//                 "Professional Response Strategy",
//                 "Authentic Review Generation",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
//                   <span className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-[0.65rem] shrink-0 font-bold border border-brand-blue/30">✓</span>
//                   <span className="font-medium">{item}</span>
//                 </div>
//               ))}
//             </div>
//             <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Secure Your Reputation</Link>
//           </div>
          
//           <div className="relative">
//              {/* Floating decorative elements to make this hero distinct from the homepage */}
//              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/20 rounded-2xl blur-xl opacity-50"></div>
//              <div className="glass-panel border border-zinc-700/50 rounded-2xl p-7 md:p-10 relative z-10 shadow-2xl">
//                 <p className="section-label mb-2 text-brand-gold">Start Your Audit</p>
//                 <h3 className="font-heading text-2xl font-bold text-white mb-6">Protect Your Reviews Now</h3>
//                 <ContactForm dark />
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* ONLINE MEDIA LOGOS MARQUEE */}
//       <div className="bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
//         <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">As Featured In Leading Publications</p>
//         <div className="max-w-7xl mx-auto px-4 overflow-hidden logo-marquee-shell">
//           <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
//             {/* Duplicated for seamless scrolling */}
//             {[...mediaLogos, ...mediaLogos].map((m, i) => (
//               <img 
//                 key={i} 
//                 src={m.img} 
//                 alt={m.name} 
//                 className="h-7 md:h-8 w-auto object-contain trust-logo-strip hover:scale-105 transition-transform duration-300"
//                 title={m.name}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* BUILD TRUST SECTION - Enhanced layout */}
//       <section className="py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 premium-copy-panel">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-white border border-zinc-200 shadow-sm">
//               <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
//               <p className="section-label text-[0.65rem] text-zinc-600 m-0">Google Reviews Focus</p>
//             </div>
//             <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
//               Build Trust With a Powerful <span className="heading-script text-brand-gold">Review Management</span> Engine
//             </h2>
//             <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
//               Online Reputation Builder can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
//             </p>
//             <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
//               We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
//             </p>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
//               {["Increased brand authority", "Higher visibility on search", "Better response handling", "Total narrative control"].map(i => (
//                 <div key={i} className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-md bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
//                     <span className="text-brand-blue font-bold text-xs">✓</span>
//                   </div>
//                   <span className="text-sm text-zinc-700 font-medium leading-tight">{i}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
//             <RatingDistributionWidget />
//           </div>
//         </div>
//       </section>

//       {/* PLATFORMS - Re-styled for uniqueness */}
//       <section className="py-24 px-4 bg-zinc-900 border-b border-zinc-950 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <p className="section-label mb-3 text-brand-gold">Omni-Channel Coverage</p>
//           <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-10">
//             We Manage Your Narrative Across <span className="text-gradient-gold">Every Platform</span>
//           </h2>
//           <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
//             {platforms.map((p) => (
//               <span key={p} className="logo-badge-pill !bg-zinc-800/50 !border-zinc-700 !text-zinc-300 hover:!bg-brand-blue hover:!border-brand-blue hover:!text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 text-xs px-5 py-2.5">
//                 {p}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REPUTATION REPAIR */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mr-auto order-2 lg:order-1">
//             <ReviewResponseWidget />
//           </div>
//           <div className="lg:col-span-6 premium-copy-panel order-1 lg:order-2">
//             <p className="section-label mb-2 text-brand-blue">Reputation Repair</p>
//             <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
//               Manage, Build &amp; Preserve Your <span className="heading-script text-brand-blue">Online Image</span>
//             </h2>
            
//             <blockquote className="border-l-4 border-brand-blue pl-5 py-2 mb-8 bg-zinc-50 rounded-r-lg pr-4">
//               <p className="text-brand-blue font-bold text-sm tracking-wide italic leading-relaxed">
//                 "If you can turn a negative experience into a positive resolution, your brand value grows exponentially."
//               </p>
//             </blockquote>
            
//             <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8">
//               Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present and active on all of the top review sites.
//             </p>

//             <div className="space-y-5">
//               <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-blue transition-colors">
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">💬</span>
//                   <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Strategic Responses</h4>
//                 </div>
//                 <p className="text-sm text-zinc-500 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say - it shows you care about every customer experience.</p>
//               </div>
//               <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-gold transition-colors">
//                 <div className="flex items-center gap-3 mb-3">
//                   <span className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">⭐</span>
//                   <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Generate Positivity</h4>
//                 </div>
//                 <p className="text-sm text-zinc-500 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR SOLUTIONS - Utilizing the premium card system */}
//       <section className="relative py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
//         <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <p className="section-label mb-2">Our Solutions</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
//               Advanced Solutions for <br className="hidden lg:block"/>
//               <span className="heading-script text-brand-blue">Total Review Control</span>
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {services.map((s, i) => (
//               <div 
//                 key={s.title} 
//                 className="card-premium-hover bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col h-full relative overflow-hidden group"
//               >
//                 <div className={`absolute top-0 left-0 w-full h-1 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
//                 <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:shadow-md transition-all duration-300">
//                   {s.icon}
//                 </div>
//                 <h3 className="font-heading font-bold text-lg text-zinc-900 mb-3">{s.title}</h3>
//                 <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY REVIEWS MATTER */}
//       <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark">
//         <div className="ambient-glow-blue top-0 right-0 opacity-20"></div>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
//           <div className="lg:col-span-7 premium-copy-panel-dark">
//             <p className="section-label text-brand-gold mb-3">Why It Matters</p>
//             <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight">
//               Why Do Online Reviews Dictate <span className="heading-script text-brand-gold">Business Growth?</span>
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-6 text-[0.95rem]">
//               Online Reputation Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews.
//             </p>
//             <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
//               We deal with negative content that impacts your business and advertise positive, value-based content that will enhance your web presence. Rank higher in Google, build stronger brand value, and convert more leads online.
//             </p>
            
//             <div className="grid grid-cols-2 gap-5">
//               {[
//                 { n: "93%", l: "Consumers check reviews first" },
//                 { n: "4.2★", l: "Rating needed to earn trust" },
//                 { n: "89%", l: "Read business responses" },
//                 { n: "10x", l: "More trust with 50+ reviews" },
//               ].map(s => (
//                 <div key={s.l} className="border-l-2 border-brand-gold pl-4 py-1">
//                   <p className="font-heading text-2xl lg:text-3xl font-black text-white mb-1 tracking-tight">{s.n}</p>
//                   <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold leading-snug">{s.l}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="lg:col-span-5 w-full">
//             <div className="glass-panel border border-zinc-800 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"></div>
//               <h4 className="font-heading font-bold text-sm text-brand-gold uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 relative z-10">Performance Metrics</h4>
//               <div className="space-y-6 relative z-10">
//                 {[
//                   { label: "Positive Sentiment Index", val: "94%" },
//                   { label: "Suppressed Defamatory Content", val: "100%" },
//                   { label: "Average Platform Score", val: "4.7 / 5.0" }
//                 ].map((m, i) => (
//                   <div key={i} className="flex justify-between items-end border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
//                     <span className="text-zinc-300 text-sm font-medium">{m.label}</span>
//                     <span className="text-white font-heading font-bold text-lg leading-none">{m.val}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CALL TO ACTION */}
//       <section className="py-16 px-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none mix-blend-overlay"></div>
//         <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <h2 className="font-heading text-xl md:text-2xl font-black text-zinc-950 uppercase tracking-wide text-left">
//             Don't let a single negative result<br className="hidden md:block"/> ruin your business pipeline.
//           </h2>
//           <Link href="#contact" className="btn-blue !bg-zinc-950 !border-zinc-950 hover:!bg-zinc-800 hover:!border-zinc-800 shrink-0 shadow-xl shadow-zinc-900/20">
//             Schedule Free Strategy Session
//           </Link>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 bg-white border-b border-zinc-200">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-2">FAQs</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900">Expert Answers About <span className="heading-script text-brand-blue">Review Management</span></h2>
//           </div>
//           <FAQ items={faqs} />
//         </div>
//       </section>

//       {/* CONTACT FOOTER CTA */}
//       <section id="contact" className="py-24 px-4 bg-zinc-900 relative overflow-hidden premium-section-dark">
//         <div className="ambient-glow-gold bottom-0 left-0 opacity-20"></div>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div className="premium-copy-panel-dark pr-0 lg:pr-8">
//             <p className="section-label text-brand-gold mb-3">Get Started Today</p>
//             <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-white mb-6 leading-tight">
//               Take Control of Your <br/>
//               <span className="heading-script text-brand-gold">Online Reviews</span>
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
//               Our review management experts are ready to help you build a stronger, more trustworthy online presence. Reach out today for a confidential assessment.
//             </p>
//             <div className="space-y-4">
//               {["Free initial review ecosystem audit", "Multi-platform monitoring setup", "Dedicated account management", "Monthly performance analytics"].map(i => (
//                 <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
//                   <div className="w-6 h-6 rounded bg-brand-gold/10 flex items-center justify-center shrink-0">
//                     <span className="text-brand-gold text-xs font-bold">✓</span>
//                   </div>
//                   <span className="font-medium">{i}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="glass-panel border border-zinc-700/50 rounded-2xl p-8 lg:p-10 shadow-2xl relative">
//             <p className="text-white font-heading font-bold text-xl mb-6">Request Your Free Audit</p>
//             <ContactForm dark />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

// Upgraded to use real online image URLs for platform logos
const platformLogos = [
  { name: "Google Search", img: "https://www.google.com/s2/favicons?domain=google.com&sz=128" },
  { name: "Glassdoor", img: "https://www.google.com/s2/favicons?domain=glassdoor.com&sz=128" },
  { name: "Trustpilot", img: "https://www.google.com/s2/favicons?domain=trustpilot.com&sz=128" },
  { name: "Facebook", img: "https://www.google.com/s2/favicons?domain=facebook.com&sz=128" },
  { name: "Tripadvisor", img: "https://www.google.com/s2/favicons?domain=tripadvisor.com&sz=128" },
  { name: "Indeed", img: "https://www.google.com/s2/favicons?domain=indeed.com&sz=128" },
  { name: "Yelp", img: "https://www.google.com/s2/favicons?domain=yelp.com&sz=128" },
  { name: "BBB", img: "https://www.google.com/s2/favicons?domain=bbb.org&sz=128" },
  { name: "G2 Crowd", img: "https://www.google.com/s2/favicons?domain=g2.com&sz=128" },
  { name: "Clutch", img: "https://www.google.com/s2/favicons?domain=clutch.co&sz=128" },
  { name: "RateMDs", img: "https://www.google.com/s2/favicons?domain=ratemds.com&sz=128" },
  { name: "Ripoff Report", img: "https://www.google.com/s2/favicons?domain=ripoffreport.com&sz=128" }
];

const services = [
  { icon: "👁️", title: "Monitor", desc: "We actively track customer reviews and make your online presence a priority. We scour millions of web pages and thousands of review sites with powerful reputation management to identify reviews that can strengthen or damage your online reputation." },
  { icon: "🗑️", title: "Removal", desc: "No matter how good your products or services are, eventually you will have to deal with bad reviews. Our review management strategy identifies false and unfavorable reviews and flags them for direct platform removals." },
  { icon: "💬", title: "Response Automation", desc: "We craft professional, empathetic responses to all reviews - positive and negative. Timely, thoughtful responses show customers you care and can turn a dissatisfied reviewer into a loyal advocate for your brand." },
  { icon: "⭐", title: "Review Generation", desc: "We help you build a systematic process to generate more authentic positive reviews from your satisfied customers across all major platforms, boosting your overall rating and visibility." },
  { icon: "📣", title: "Client Outreach", desc: "Strategic outreach campaigns to encourage happy customers to share their experiences online. We make the process easy and natural so customers are happy to leave positive feedback." },
  { icon: "📊", title: "Analytics & Reporting", desc: "Detailed monthly reports on your review performance, sentiment trends, platform-by-platform analysis, and actionable insights to continuously improve your online reputation." },
];

const faqs = [
  { q: "Can you remove negative reviews from Google?", a: "Yes, we can help remove negative reviews that violate Google's content policies. We analyze the review, gather evidence, submit professional removal requests to Google, and follow up rigorously. For reviews that cannot be removed, we use suppression strategies to minimize their impact." },
  { q: "How do you manage reviews across multiple platforms?", a: "We use advanced reputation management tools to monitor and manage reviews across all major platforms simultaneously - including Google, Glassdoor, Trustpilot, Facebook, Yelp, and 50+ others. You get a unified dashboard view of your entire review ecosystem." },
  { q: "Can fake reviews be removed from Glassdoor or Trustpilot?", a: "Yes. We have experience working directly with Glassdoor, Trustpilot, and other review platforms to flag and remove fake, defamatory, or policy-violating reviews. Each platform has its own process, and our team handles all the communication on your behalf." },
  { q: "How long does it take to improve my review rating?", a: "With our review generation and removal strategies, most clients see measurable improvement in their average rating within 30-60 days. A comprehensive reputation turnaround typically takes 3-6 months depending on the volume of negative reviews and your industry." },
  { q: "Do you help with responding to reviews?", a: "Absolutely. Our team crafts professional, brand-consistent responses to all reviews - positive and negative. Thoughtful responses demonstrate excellent customer service and can significantly improve how potential customers perceive your brand." },
];

// Utilizing reliable Favicon API to bypass AdBlockers, retaining all original names
const mediaLogos = [
  { name: "Forbes", img: "https://www.google.com/s2/favicons?domain=forbes.com&sz=128" },
  { name: "CNBC", img: "https://www.google.com/s2/favicons?domain=cnbc.com&sz=128" },
  { name: "Yahoo Finance", img: "https://www.google.com/s2/favicons?domain=finance.yahoo.com&sz=128" },
  { name: "India Today", img: "https://www.google.com/s2/favicons?domain=indiatoday.in&sz=128" },
  { name: "The Economic Times", img: "https://www.google.com/s2/favicons?domain=economictimes.indiatimes.com&sz=128" },
  { name: "Hindustan Times", img: "https://www.google.com/s2/favicons?domain=hindustantimes.com&sz=128" },
  { name: "ANI", img: "https://www.google.com/s2/favicons?domain=aninews.in&sz=128" },
  { name: "Times Now", img: "https://www.google.com/s2/favicons?domain=timesnownews.com&sz=128" },
];

// Smooth Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) {
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

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

// Interactive Rating Distribution Widget
function RatingDistributionWidget() {
  return (
    <div className="glass-panel-light rounded-2xl p-8 text-left font-sans select-none h-full flex flex-col justify-center relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(37,99,235,0.08)]">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <h4 className="font-heading font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5 border-b border-zinc-200/60 pb-3 relative z-10">
        Live Rating Distribution
      </h4>
      <div className="flex items-center gap-8 mb-8 relative z-10">
        <div className="text-center shrink-0">
          <p className="text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-600 leading-none">4.8</p>
          <div className="text-brand-gold text-sm mt-2 flex justify-center tracking-widest drop-shadow-sm">★★★★★</div>
          <p className="text-[0.65rem] text-zinc-500 uppercase tracking-wider font-bold mt-2">1,248 Reviews</p>
        </div>
        <div className="flex-1 space-y-3">
          {[
            { stars: 5, pct: 85, color: "bg-gradient-to-r from-emerald-400 to-emerald-500" },
            { stars: 4, pct: 10, color: "bg-gradient-to-r from-emerald-300 to-emerald-400" },
            { stars: 3, pct: 2, color: "bg-gradient-to-r from-amber-300 to-amber-400" },
            { stars: 2, pct: 1, color: "bg-gradient-to-r from-orange-300 to-orange-400" },
            { stars: 1, pct: 2, color: "bg-gradient-to-r from-red-300 to-red-400" }
          ].map(r => (
            <div key={r.stars} className="flex items-center gap-3 text-[0.7rem] text-zinc-600">
              <span className="w-3 text-right font-bold">{r.stars}</span>
              <div className="h-2.5 flex-1 bg-zinc-200/50 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
              </div>
              <span className="w-8 text-right font-bold">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/80 border border-zinc-200/50 rounded-xl p-4 text-center mt-auto shadow-sm relative z-10">
        <p className="text-[0.75rem] text-zinc-600 font-semibold">
          🚀 Verified sentiment index: <span className="text-emerald-600 font-black ml-1">EXCELLENT</span>
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
    <div className="premium-info-card border border-zinc-200 rounded-2xl bg-white overflow-hidden text-left font-sans select-none shadow-[0_20px_40px_-15px_rgba(9,15,28,0.05)]">
      <div className="bg-zinc-50/80 border-b border-zinc-200 px-5 py-4 flex justify-between items-center">
        <span className="text-[0.7rem] font-bold text-zinc-500 uppercase tracking-wider">Review Management Workspace</span>
        <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded border uppercase tracking-wider transition-all duration-300 ${
          replied ? "bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm" : "bg-amber-50 border-amber-200 text-amber-700"
        }`}>
          {replied ? "Responded" : "Needs Response"}
        </span>
      </div>
      <div className="p-6 space-y-5">
        <div className="border border-zinc-100 bg-white shadow-sm rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="font-bold text-sm text-zinc-800">Rajesh K. (CEO)</span>
              <p className="text-[0.65rem] text-zinc-400 mt-1 uppercase tracking-wider">Google Maps · 2 hours ago</p>
            </div>
            <span className="text-brand-gold text-sm tracking-widest flex">★★★★★</span>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed italic">
            &ldquo;Exceptional service. Online Reputation Builder suppressed three defamatory listings that were negatively affecting our B2B inquiries.&rdquo;
          </p>
        </div>

        <div className="space-y-2.5">
          <label className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-wider">Draft Professional Response</label>
          <textarea
            className="form-input text-sm w-full p-4 min-h-[95px] bg-zinc-50/50 focus:bg-white transition-colors"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            disabled={replied}
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          {!replied ? (
            <button onClick={() => setReplied(true)} className="btn-blue text-[0.75rem] py-2.5 px-6 shadow-lg shadow-brand-blue/20">
              Publish Response
            </button>
          ) : (
            <>
              <span className="text-[0.75rem] text-emerald-600 font-semibold py-2 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Response published to Google
              </span>
              <button onClick={() => setReplied(false)} className="btn-outline !border-zinc-200 !text-zinc-600 hover:!bg-zinc-50 text-[0.75rem] py-2 px-5">
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReviewManagementPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* PAGE HERO */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-blue opacity-50" />
        <div className="hero-ambient hero-ambient-gold opacity-60 right-0 top-20" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold mb-6 uppercase tracking-widest bg-brand-gold/10 border-brand-gold/30 text-brand-gold">
              ⭐ Top Review Management Company · Delhi India
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
              Professional <span className="text-gradient-gold">Review Management</span> Services
            </h1>
            
            <p className="text-white/70 text-base md:text-lg mb-4 leading-relaxed max-w-xl">
              Our Review Management services assist companies in tracking, controlling, and acting on customer reviews on all leading platforms.
            </p>
            <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-xl">
              Through our online review management service, you maintain control over your brand image, respond to customer issues faster, and avoid giving your business a negative reputation because of fake or negative reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
              {[
                "Continuous monitoring of reviews across major platforms",
                "Professional responses to positive and negative feedback",
                "Detection and reporting of fake or spam reviews",
                "Reputation improvement strategies to build long-term trust",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-[0.65rem] shrink-0 mt-0.5 font-bold border border-brand-blue/30">✓</span>
                  <span className="font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Get A Free Consultation</Link>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/20 rounded-3xl blur-xl opacity-50"></div>
             <div className="glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-7 md:p-10 relative z-10 shadow-2xl">
                <div className="form-card-orbit opacity-50" />
                <p className="section-label mb-2 text-brand-gold">Start Today</p>
                <h3 className="font-heading text-2xl font-bold text-white mb-6">Protect Your Reviews Now</h3>
                <ContactForm dark />
             </div>
          </div>
        </div>
      </section>

      {/* MEDIA LOGOS - Image Marquee Strip */}
      <div className="logo-marquee-shell bg-white py-10 border-b border-zinc-200 overflow-hidden relative shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] z-20">
        <p className="text-center text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-6">As Featured In Leading Publications</p>
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="marquee-track flex items-center gap-12 md:gap-16 whitespace-nowrap w-max">
            {[...mediaLogos, ...mediaLogos].map((m, i) => (
              <img 
                key={i} 
                src={m.img} 
                alt={m.name} 
                className="h-7 md:h-9 w-auto object-contain trust-logo-strip hover:scale-105 transition-transform duration-300 rounded-sm"
                title={m.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BUILD TRUST SECTION */}
      <section className="py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 premium-copy-panel">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-white border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <p className="section-label text-[0.65rem] text-zinc-600 m-0">Google Reviews</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Build Trust With a Powerful <span className="heading-script text-brand-gold">Review Management</span> Service
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4 text-[0.95rem]">
              Online Reputation Builder can help you gain trust and make your business more known. Having a powerful Google review management will provide your business with a good first impression and gain customer trust at all points of contact.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8 text-[0.95rem]">
              We assist you in creating, handling and bringing to light the positive Google reviews and downplay the bad stuff to ensure that your business becomes a good and reputable one.
            </p>
            
            <div className="premium-info-card bg-white rounded-xl p-6 border border-zinc-200 border-l-4 border-l-brand-blue mb-8 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-2 text-sm uppercase tracking-wider">Outperform Competitors With Customer Feedback</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Our business review management service focuses on developing a long-term reputation strategy which leads to leads, calls and conversions. We use ethical and effective methods through our sophisticated review management service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Increased brand authority and customer trust", "Higher visibility through positive online reviews", "Better customer engagement and response handling", "Full control over your online reputation narrative"].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-blue font-bold text-[0.65rem]">✓</span>
                  </div>
                  <span className="text-sm text-zinc-700 font-medium leading-tight">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
            <RatingDistributionWidget />
          </div>
        </div>
      </section>

      {/* PLATFORMS - Upgraded to Premium Masonry Tile Grid */}
      <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="platform-grid-glow opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="section-label mb-3 text-brand-gold">Omni-Channel Coverage</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-12">
            Manage Reviews on <span className="text-gradient-gold">Google, Glassdoor, Trustpilot</span> &amp; Others
          </h2>
          
          <div className="premium-platform-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm relative z-20">
            {platformLogos.map((p) => (
              <div 
                key={p.name} 
                className="platform-tile flex flex-col items-center justify-center p-8 border-r border-b border-white/5 last:border-r-0 relative group min-h-[140px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="platform-icon flex flex-col items-center gap-4 relative z-10">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-10 h-10 object-contain rounded-md bg-white p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-500 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" 
                  />
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest group-hover:text-brand-gold transition-colors duration-300 text-center">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPUTATION REPAIR */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mr-auto order-2 lg:order-1">
            <ReviewResponseWidget />
          </div>
          <div className="lg:col-span-6 premium-copy-panel order-1 lg:order-2">
            <p className="section-label mb-2 text-brand-blue">Reputation Repair</p>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
              Manage, Build, &amp; Preserve Your <span className="heading-script text-brand-blue">Online Reputation</span>
            </h2>
            
            <blockquote className="border-l-4 border-brand-blue pl-5 py-2 mb-8 bg-zinc-50 rounded-r-xl pr-4">
              <p className="text-brand-blue font-bold text-sm tracking-wide italic leading-relaxed">
                &ldquo;If you can turn a negative experience into a positive resolution, your brand value grows.&rdquo;
              </p>
            </blockquote>
            
            <h3 className="font-bold text-zinc-900 mb-3 text-sm">How to repair your online reputation by removing negative reviews?</h3>
            <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8">
              Have an online presence everywhere. To fix the negative aspects of your reputation, you need to be present and active on all of the top review sites.
            </p>

            <div className="space-y-5">
              <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-blue transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">💬</span>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Respond to Reviews</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Reply to both positive and negative reviews. Potential customers want to see what you have to say - it shows you care about every customer experience.</p>
              </div>
              <div className="premium-info-card group bg-white rounded-xl p-6 border border-zinc-200 shadow-sm hover:border-brand-gold transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">⭐</span>
                  <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Get More Positive Reviews</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">Great reviews need to outnumber negative reviews. Implement a plan to obtain new and great reviews from happy and satisfied customers through strategic outreach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="relative py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="section-label mb-2">Our Solutions</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Online Reputation Builder Offers Advanced <br className="hidden lg:block"/>
              <span className="heading-script text-brand-blue">Review Management Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div 
                key={s.title} 
                className="card-premium-hover bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col h-full relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-gold'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] via-transparent to-transparent group-hover:from-zinc-500/[0.05] transition-all duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-2xl mb-6 group-hover:shadow-md group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1 group-hover:text-zinc-600 transition-colors duration-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REVIEWS MATTER - Featuring Animated Counters */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-b border-zinc-900">
        <div className="ambient-glow-blue top-0 right-0 opacity-30"></div>
        <div className="ambient-glow-gold bottom-0 left-0 opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Why It Matters</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight">
              Why Do Online Reviews Matter More Than Ever for <span className="heading-script text-brand-gold">Your Business Growth?</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-[0.95rem]">
              Online Reputation Builder assists in making your business recognizable in a good and reliable manner. In the modern world, before deciding on a purchase, potential customers will search for verified online reviews of businesses.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              We deal with negative content that impacts your business and advertise positive, value-based content that will enhance your web presence. We will assist your business to rank higher in Google, build stronger brand value, and convert more leads online.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: 93, suffix: "%", decimals: 0, l: "of consumers check reviews before buying" },
                { n: 4.2, suffix: "★", decimals: 1, l: "Average rating needed to earn customer trust" },
                { n: 89, suffix: "%", decimals: 0, l: "of consumers read business responses" },
                { n: 10, suffix: "x", decimals: 0, l: "more trust with 50+ positive reviews" },
              ].map(s => (
                <div key={s.l} className="border-l-2 border-brand-gold pl-4 py-1 group hover:border-brand-blue transition-colors">
                  <p className="font-heading text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                    <AnimatedCounter end={s.n} suffix={s.suffix} decimals={s.decimals} duration={2500} />
                  </p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="form-card-orbit opacity-60" />
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest mb-8 border-b border-zinc-800 pb-4 relative z-10">ORM Trust Metric</h4>
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Positive Index", val: "94%" },
                  { label: "Suppressed Defamatory Pages", val: "100%" },
                  { label: "Average Platform Score", val: "4.7 / 5.0" }
                ].map((m, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
                    <span className="text-zinc-400 text-sm font-medium">{m.label}</span>
                    <span className="text-brand-gold font-heading font-bold text-lg leading-none bg-brand-gold/10 px-3 py-1.5 rounded-lg border border-brand-gold/20">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] bg-[length:24px_24px] opacity-30 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-heading text-xl md:text-2xl font-black text-zinc-950 uppercase tracking-wide text-left">
            Don't let a single negative result<br className="hidden md:block"/> ruin your business.
          </h2>
          <Link href="#contact" className="btn-blue !bg-zinc-950 !border-zinc-950 hover:!bg-zinc-800 hover:!border-zinc-800 shrink-0 shadow-xl shadow-zinc-900/20 text-sm py-4">
            Schedule a Strategy Blueprint Consultation
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">FAQs</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">Common Questions About <span className="heading-script text-brand-blue">Review Management</span></h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 lg:py-32 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"/>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/15 rounded-full blur-[80px] pointer-events-none"/>
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Contact Us</p>
            <h2 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Take Control of Your <br className="hidden lg:block"/><span className="heading-script text-brand-gold">Reviews Today</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem]">
              Our review management experts are ready to help you build a stronger, more trustworthy online presence. Schedule a free consultation today.
            </p>
            
            <div className="space-y-5 border-t border-zinc-800/80 pt-8">
              {["Free initial review audit", "Multi-platform coverage", "Dedicated account manager", "Monthly performance reports"].map(i => (
                <div key={i} className="flex items-center gap-4 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold text-xs shadow-inner flex-shrink-0">✓</span>
                  <span>{i}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-blue/10 rounded-3xl blur-2xl opacity-40"></div>
             <div className="premium-form-card dark bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-6">Get Free Review Audit</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}