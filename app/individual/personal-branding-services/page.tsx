// "use client";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
// import FAQ from "@/components/FAQ";
// import Link from "next/link";

// const brandingBenefits = [
//   {
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
//       </svg>
//     ),
//     title: "Build a Strong Online Presence",
//     desc: "Build a strong online presence that clearly shows your skills, experience, and professional success across search, social, and media.",
//   },
//   {
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
//       </svg>
//     ),
//     title: "Improve Credibility & Trust",
//     desc: "Improve the credibility and trust of your target audience with authentic and steady personal branding. People work with those they know, like and trust.",
//   },
//   {
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
//       </svg>
//     ),
//     title: "Grow Opportunities",
//     desc: "Grow your chances of collaborations, partnerships, and business opportunities with a strong and positive online reputation that attracts the right people.",
//   },
//   {
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
//       </svg>
//     ),
//     title: "Become an Industry Leader",
//     desc: "Become a leader in your industry with smart content and better online visibility. Establish yourself as the go-to expert in your niche.",
//   },
// ];

// const howItWorks = [
//   {
//     step: "01",
//     title: "Helps in Determining the Best Way to Position You Online",
//     desc: "We start with a deep personal branding session to understand your goals, values, and competitive landscape. Then we develop a strategy for building websites and profiles that will help you stand out from competitors in your market.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Building an Online Presence That Highlights Your Expertise",
//     desc: "We craft experienced and professional websites for you, then optimize them to ensure they are as visible as possible when people search for your name on Google and other search engines.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "Make Sure People Find Your Online Presence When They Google You",
//     desc: "Google's algorithm keeps changing and is never the same. Tactics that worked yesterday may not work today. We help you stay on top by continuously improving your online presence with up-to-date strategies.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "04",
//     title: "Creating Positive Content That Positions You as a Leader",
//     desc: "Every month, we publish blog posts, videos, social media updates, and presentations that showcase your expertise. This continual creation improves your long-term visibility and authority in your field.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "05",
//     title: "Strategically Build an Audience to Amplify Opportunities",
//     desc: "Every brand has an audience that will help them reach the top of their careers. We help you build an audience and promote your content to them so that opportunities - speaking, collaborations, media features - come your way.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
//       </svg>
//     ),
//   },
//   {
//     step: "06",
//     title: "Report on Your Progress as Your Online Reputation Improves",
//     desc: "We provide quarterly reports detailing what we've done for you, plus metrics about engagement and positioning of your online properties, so you always know exactly where you stand.",
//     icon: (
//       <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
//       </svg>
//     ),
//   },
// ];

// const pillars = [
//   { title: "Gains Trust", desc: "People are more comfortable working with those who have a clear personal brand. It shows genuine intentions, helping in gaining trust with clients and collaborators.", icon: "🤝" },
//   { title: "Get Connected", desc: "Personal branding helps in building connections in different fields and areas of expertise. Staying connected is key to remaining consistent and building reputation.", icon: "🔗" },
//   { title: "Builds Reliability", desc: "Personal branding services help establish your name in your field as an expert. You become more visible and accessible to your target audience.", icon: "🏆" },
//   { title: "Attain Confidence", desc: "You gain confidence while developing your brand. When people know you have something valuable to provide, your self-esteem and authority both boost.", icon: "💡" },
// ];

// const brandingTips = [
//   "Define your mission, values, and target audience clearly",
//   "Maintain consistent visuals, tone, and communication style",
//   "Share authentic experiences and real success stories",
//   "Stay active on professional and social platforms",
//   "Engage with followers through meaningful, relatable content",
//   "Continuously build credibility with insights, testimonials, and achievements",
// ];

// const brandingSteps = [
//   "Set your goals",
//   "Maintain your brand",
//   "Formulate your value proposition",
//   "Research your market",
//   "Identify your audience",
//   "Create your visual identity",
//   "Develop your brand strategy",
//   "Prepare your content plan",
//   "Rollout your activities",
// ];

// const faqs = [
//   { q: "Why is personal branding important?", a: "Personal branding is important because it helps individuals build a strong and memorable image in the minds of their target audience. This can increase visibility and opportunities, help establish credibility and trust, and differentiate you from others in your industry." },
//   { q: "What are personal branding services?", a: "Personal branding services are professional services that help individuals develop and promote their personal brand. These include creating a personal brand strategy, designing a personal website and social media presence, creating and managing content, and providing coaching and guidance." },
//   { q: "How can personal branding services help an individual's career?", a: "Personal branding services help by increasing visibility, credibility, and reputation, making you more attractive to employers or clients. A strong personal brand can establish you as a thought leader, increase chances of high-profile positions, and build a more fulfilling career." },
//   { q: "What are the benefits of using personal branding services?", a: "Benefits include increased visibility and opportunities, better alignment with personal and career goals, stronger credibility and trust, and the ability to stand out in a competitive market. Personal branding services also provide guidance for individuals unsure about how to develop their brand." },
//   { q: "Who can benefit from personal branding services?", a: "Anyone who wants to establish or enhance their personal brand can benefit - those starting a new career, transitioning to a new industry, or seeking to increase their visibility. Executives, entrepreneurs, professionals, and public figures all gain measurably from a strong personal brand." },
// ];

// const testimonials = [
//   { name: "Scott", role: "Business Owner", text: "I'm really happy with the results I've seen from working with this company. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward. Highly recommend.", initials: "SC" },
//   { name: "Juli", role: "Marketing Professional", text: "I was really impressed with the level of personalization and attention to detail. They took the time to understand my specific needs. I'm so glad I found them - highly recommend to anyone in need of ORM services.", initials: "JU" },
//   { name: "Abhay", role: "Entrepreneur", text: "I am so much happier with the results I've seen. They helped me clean up my online presence and improve my search results, which has been invaluable for my business.", initials: "AB" },
// ];

// export default function PersonalBrandingServicesPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />

//       {/* ── PAGE HERO ─────────────────────────────────────────── */}
//       <section className="hero-bg relative overflow-hidden">
//         <div className="hero-orb w-[500px] h-[500px] bg-brand-gold/8 top-[-100px] right-[-100px] absolute" />
//         <div className="hero-orb w-[300px] h-[300px] bg-brand-blue/10 bottom-[-60px] left-[-60px] absolute" style={{ animationDelay: "2.5s" }} />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-60" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-22 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
//           <div>
//             <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em]">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-light opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-light" />
//               </span>
//               Personal Branding · India
//             </div>

//             <h1 className="font-heading text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-5 tracking-tight">
//               Powerful Personal Branding Services - Build{" "}
//               <span className="text-brand-gold-light">Trust</span>,{" "}
//               <span className="text-brand-gold-light">Authority</span>{" "}
//               &amp; Influence
//             </h1>

//             <p className="text-white/65 text-base mb-7 leading-relaxed">
//               Your Personal Brand is a True Reflection of Who You Are. More than just a marketing strategy - it&apos;s how you appear to the world. We make it powerful, consistent, and unforgettable.
//             </p>

//             <ul className="space-y-2 mb-8">
//               {brandingBenefits.map((b) => (
//                 <li key={b.title} className="check-item text-[0.82rem] text-white/75">
//                   <span className="check-icon">
//                     <svg width="10" height="10" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 12 12">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5"/>
//                     </svg>
//                   </span>
//                   {b.title}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-3">
//               <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
//               <a href="tel:+918882788412" className="btn-outline">Call: +9188827 88412</a>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="relative">
//             <div className="absolute -inset-4 bg-brand-gold/8 rounded-2xl blur-2xl pointer-events-none" />
//             <div className="relative bg-white rounded-xl p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-white/10">
//               <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-gold via-brand-blue to-transparent rounded-full -translate-y-px" />
//               <div className="flex items-center justify-between mb-5">
//                 <div>
//                   <p className="section-label text-brand-blue mb-1">Free Consultation</p>
//                   <h2 className="font-heading text-lg font-bold text-brand-dark leading-tight">Build Your Personal Brand Today</h2>
//                 </div>
//                 <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
//                   <svg width="20" height="20" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
//                   </svg>
//                 </div>
//               </div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── WHY YOU NEED IT ───────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50/60 border-l border-zinc-100 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <p className="section-label mb-3">Why Personal Branding</p>
//               <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight heading-underline">
//                 Why Do You Need Personal Branding Services?
//               </h2>
//               <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
//                 In today&apos;s competitive world, personal branding plays a big role in how people see you online. A strong personal brand highlights your skills, values, and achievements, helping you connect better with your audience, gain new opportunities, and stand out in your industry.
//               </p>
//               <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
//                 With a solid personal brand, you&apos;ll gain an advantage over your competitors and establish your business for long-term growth. Our personal branding agency in Kolkata helps turn your story into a powerful and memorable brand presence.
//               </p>

//               {/* Tip list */}
//               <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Important Tips for Personal Branding</p>
//               <div className="space-y-2 mb-8">
//                 {brandingTips.map((tip) => (
//                   <div key={tip} className="flex items-start gap-2.5 text-sm text-zinc-600">
//                     <div className="w-4 h-4 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <svg width="8" height="8" className="w-2 h-2 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 8 8">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 4l2 2 3-3"/>
//                       </svg>
//                     </div>
//                     {tip}
//                   </div>
//                 ))}
//               </div>

//               <Link href="#contact" className="btn-gold">Start Building Your Brand</Link>
//             </div>

//             <div className="relative">
//               <div className="img-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
//                   alt="Personal Branding Strategy"
//                 />
//               </div>
//               <div className="floating-badge absolute -bottom-4 -right-4 z-10">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
//                     <span className="text-sm">⭐</span>
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold text-zinc-900">Authority Score</p>
//                     <p className="text-[0.65rem] text-zinc-500">Industry Leader Status</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── 4 PILLARS ────────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center max-w-2xl mx-auto mb-14">
//             <p className="section-label mb-3 justify-center">Why It Works</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900 leading-tight">
//               We Promise to Build a Brand That Makes You Seen as an Expert
//             </h2>
//             <p className="text-zinc-400 text-sm mt-4 leading-relaxed">We are committed to helping you build a personal brand that showcases your specialty, spreads your message, and impacts lives.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {pillars.map((p, i) => (
//               <div key={p.title} className="service-card group flex flex-col text-center items-center">
//                 <span className="text-3xl mb-4">{p.icon}</span>
//                 <h3 className="font-heading font-bold text-base text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors">{p.title}</h3>
//                 <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── HOW IT WORKS (6 steps) ────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
//             <div>
//               <p className="section-label mb-3">Our Process</p>
//               <h2 className="font-heading text-3xl font-bold text-zinc-900">
//                 How Our Personal Branding Service Works
//               </h2>
//             </div>
//             <Link href="#contact" className="btn-gold whitespace-nowrap flex-shrink-0">Get Started</Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {howItWorks.map((step) => (
//               <div key={step.step} className="group border border-zinc-200 rounded-xl p-6 hover:border-brand-gold/20 hover:shadow-[0_8px_32px_rgba(194,148,10,0.08)] transition-all duration-300 bg-white relative overflow-hidden">
//                 <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="w-11 h-11 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-amber-50 group-hover:text-brand-gold group-hover:border-amber-100 transition-all">
//                     {step.icon}
//                   </div>
//                   <span className="text-[0.6rem] font-black text-zinc-200 font-mono">{step.step}</span>
//                 </div>
//                 <h3 className="font-bold text-zinc-900 text-sm mb-2 leading-snug group-hover:text-brand-gold transition-colors">{step.title}</h3>
//                 <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── HOW TO TRANSFORM YOURSELF ────────────────────────── */}
//       <section className="py-20 px-4 bg-[#070d1a] relative overflow-hidden border-b border-zinc-900">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />
//         <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/25 to-transparent" />

//         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//           <div>
//             <p className="section-label text-brand-gold mb-3">Brand Transformation</p>
//             <h2 className="font-heading text-3xl font-bold text-white mb-5 leading-tight">
//               How to Transform Yourself into a Powerful Brand
//             </h2>
//             <p className="text-zinc-400 text-sm leading-relaxed mb-8">
//               There are essentially nine steps to follow to create, develop and maintain your personal brand. Getting the best personal branding position enables you to shine a spotlight on your expertise, and make you stand out from the crowd.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//               {brandingSteps.map((s, i) => (
//                 <div key={s} className="flex items-center gap-3 p-3 rounded-lg bg-white/4 border border-white/6 hover:bg-white/8 hover:border-brand-gold/20 transition-all group">
//                   <span className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0 text-[0.55rem] font-black text-brand-gold">
//                     {i + 1}
//                   </span>
//                   <span className="text-zinc-300 text-xs font-medium group-hover:text-white transition-colors">{s}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="img-frame border-zinc-800">
//               <img
//                 src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
//                 alt="Personal Brand Transformation"
//                 className="opacity-90"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ─────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <p className="section-label mb-3 justify-center">Client Testimonials</p>
//             <h2 className="font-heading text-3xl font-bold text-zinc-900">What Our Clients Say</h2>
//             <p className="text-zinc-400 text-sm mt-3">We pay attention to details and quality, good communication and strong customer relationships.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {testimonials.map((t) => (
//               <div key={t.name} className="testimonial-card">
//                 <div className="flex text-brand-gold text-sm mb-4 gap-0.5">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
//                 <p className="text-zinc-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
//                 <div className="flex items-center gap-3 border-t border-zinc-100 pt-4">
//                   <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-xs font-bold">{t.initials}</span>
//                   </div>
//                   <div>
//                     <p className="font-bold text-zinc-900 text-sm">{t.name}</p>
//                     <p className="text-zinc-400 text-xs">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ──────────────────────────────────────────────── */}
//       <section className="py-20 px-4 bg-white border-b border-zinc-100 relative overflow-hidden">
//         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-zinc-50 border-l border-zinc-100 pointer-events-none hidden lg:block" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
//             <div className="lg:col-span-2">
//               <p className="section-label mb-3">Common Questions</p>
//               <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-5 leading-tight">
//                 Personal Branding <span className="text-brand-blue">FAQs</span>
//               </h2>
//               <p className="text-zinc-400 text-sm leading-relaxed mb-7">
//                 Have a question not covered below? Our personal branding experts are happy to discuss your unique situation.
//               </p>
//               <a href="tel:+918882788412" className="btn-gold inline-flex items-center gap-2">
//                 <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//                 Call Us Now
//               </a>
//             </div>
//             <div className="lg:col-span-3">
//               <FAQ items={faqs} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CONTACT ───────────────────────────────────────────── */}
//       <section id="contact" className="py-20 px-4 bg-zinc-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
//         <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <p className="section-label text-brand-gold mb-3">Start Today</p>
//             <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
//               Don&apos;t Let a Single Negative Google Result Ruin Your Business
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-8 text-sm max-w-lg">
//               Schedule a free consultation today. We promise to build a brand for you so that you are seen as an expert in your industry.
//             </p>
//             <div className="space-y-0 mb-8">
//               {[
//                 { label: "Hotline", value: "+9188827 88412", href: "tel:+918882788412" },
//                 { label: "Email", value: "contact@onlinereputationbuilder.in", href: "mailto:contact@onlinereputationbuilder.in" },
//                 { label: "Location", value: "Shantipally, Behala, Kolkata - 700060", href: null },
//               ].map((item) => (
//                 <div key={item.label} className="contact-info-item">
//                   <div>
//                     <p className="text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
//                     {item.href ? (
//                       <a href={item.href} className="text-white font-semibold text-sm hover:text-brand-gold-light transition-colors">{item.value}</a>
//                     ) : (
//                       <p className="text-white text-sm">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a href="tel:+918882788412" className="btn-gold inline-flex items-center gap-2">
//               <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
//               Call Now
//             </a>
//           </div>
//           <div className="relative">
//             <div className="absolute -inset-3 bg-brand-gold/6 rounded-2xl blur-xl pointer-events-none" />
//             <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-7 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
//               <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-brand-gold/50 via-brand-blue/50 to-transparent" />
//               <p className="text-white font-bold text-base mb-1">Send Us a Message</p>
//               <p className="text-zinc-500 text-xs mb-5">We respond within 24 hours on business days.</p>
//               <ContactForm dark />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
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

const brandingBenefits = [
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    ),
    title: "Build a Strong Online Presence",
    desc: "Build a strong online presence that clearly shows your skills, experience, and professional success across search, social, and media.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Improve Credibility & Trust",
    desc: "Improve the credibility and trust of your target audience with authentic and steady personal branding. People work with those they know, like and trust.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
      </svg>
    ),
    title: "Grow Opportunities",
    desc: "Grow your chances of collaborations, partnerships, and business opportunities with a strong and positive online reputation that attracts the right people.",
  },
  {
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: "Become an Industry Leader",
    desc: "Become a leader in your industry with smart content and better online visibility. Establish yourself as the go-to expert in your niche.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Helps in Determining the Best Way to Position You Online",
    desc: "We start with a deep personal branding session to understand your goals, values, and competitive landscape. Then we develop a strategy for building websites and profiles that will help you stand out from competitors in your market.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Building an Online Presence That Highlights Your Expertise",
    desc: "We craft experienced and professional websites for you, then optimize them to ensure they are as visible as possible when people search for your name on Google and other search engines.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Make Sure People Find Your Online Presence When They Google You",
    desc: "Google's algorithm keeps changing and is never the same. Tactics that worked yesterday may not work today. We help you stay on top by continuously improving your online presence with up-to-date strategies.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Creating Positive Content That Positions You as a Leader",
    desc: "Every month, we publish blog posts, videos, social media updates, and presentations that showcase your expertise. This continual creation improves your long-term visibility and authority in your field.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Strategically Build an Audience to Amplify Opportunities",
    desc: "Every brand has an audience that will help them reach the top of their careers. We help you build an audience and promote your content to them so that opportunities - speaking, collaborations, media features - come your way.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    step: "06",
    title: "Report on Your Progress as Your Online Reputation Improves",
    desc: "We provide quarterly reports detailing what we've done for you, plus metrics about engagement and positioning of your online properties, so you always know exactly where you stand.",
    icon: (
      <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
];

const pillars = [
  { title: "Gains Trust", desc: "People are more comfortable working with those who have a clear personal brand. It shows genuine intentions, helping in gaining trust with clients and collaborators.", icon: "🤝" },
  { title: "Get Connected", desc: "Personal branding helps in building connections in different fields and areas of expertise. Staying connected is key to remaining consistent and building reputation.", icon: "🔗" },
  { title: "Builds Reliability", desc: "Personal branding services help establish your name in your field as an expert. You become more visible and accessible to your target audience.", icon: "🏆" },
  { title: "Attain Confidence", desc: "You gain confidence while developing your brand. When people know you have something valuable to provide, your self-esteem and authority both boost.", icon: "💡" },
];

const brandingTips = [
  "Define your mission, values, and target audience clearly",
  "Maintain consistent visuals, tone, and communication style",
  "Share authentic experiences and real success stories",
  "Stay active on professional and social platforms",
  "Engage with followers through meaningful, relatable content",
  "Continuously build credibility with insights, testimonials, and achievements",
];

const brandingSteps = [
  "Set your goals",
  "Maintain your brand",
  "Formulate your value proposition",
  "Research your market",
  "Identify your audience",
  "Create your visual identity",
  "Develop your brand strategy",
  "Prepare your content plan",
  "Rollout your activities",
];

const faqs = [
  { q: "Why is personal branding important?", a: "Personal branding is important because it helps individuals build a strong and memorable image in the minds of their target audience. This can increase visibility and opportunities, help establish credibility and trust, and differentiate you from others in your industry." },
  { q: "What are personal branding services?", a: "Personal branding services are professional services that help individuals develop and promote their personal brand. These include creating a personal brand strategy, designing a personal website and social media presence, creating and managing content, and providing coaching and guidance." },
  { q: "How can personal branding services help an individual's career?", a: "Personal branding services help by increasing visibility, credibility, and reputation, making you more attractive to employers or clients. A strong personal brand can establish you as a thought leader, increase chances of high-profile positions, and build a more fulfilling career." },
  { q: "What are the benefits of using personal branding services?", a: "Benefits include increased visibility and opportunities, better alignment with personal and career goals, stronger credibility and trust, and the ability to stand out in a competitive market. Personal branding services also provide guidance for individuals unsure about how to develop their brand." },
  { q: "Who can benefit from personal branding services?", a: "Anyone who wants to establish or enhance their personal brand can benefit - those starting a new career, transitioning to a new industry, or seeking to increase their visibility. Executives, entrepreneurs, professionals, and public figures all gain measurably from a strong personal brand." },
];

const testimonials = [
  { name: "Scott", role: "Business Owner", text: "I'm really happy with the results I've seen from working with this company. They helped me improve my search results and provided valuable insights on how to maintain a positive reputation going forward. Highly recommend.", initials: "SC" },
  { name: "Juli", role: "Marketing Professional", text: "I was really impressed with the level of personalization and attention to detail. They took the time to understand my specific needs. I'm so glad I found them - highly recommend to anyone in need of ORM services.", initials: "JU" },
  { name: "Abhay", role: "Entrepreneur", text: "I am so much happier with the results I've seen. They helped me clean up my online presence and improve my search results, which has been invaluable for my business.", initials: "AB" },
];

// Custom Scroll Reveal Hook for "Experienced Developer" feel
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

export default function PersonalBrandingServicesPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── PAGE HERO - Elegant Authority Layout ─────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50">
        <div className="hero-ambient hero-ambient-gold opacity-50 top-[-10%] right-[-10%]" />
        <div className="hero-ambient hero-ambient-blue opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
              </span>
              Personal Branding · India
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
              Powerful Personal Branding Services - Build{" "}
              <span className="text-gradient-gold">Trust</span>,{" "}
              <span className="text-gradient-gold">Authority</span>{" "}
              &amp; Influence
            </h1>

            <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl">
              Your Personal Brand is a True Reflection of Who You Are. More than just a marketing strategy - it&apos;s how you appear to the world. We make it powerful, consistent, and unforgettable.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {brandingBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span>{b.title}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 px-8 py-3.5">Get A Free Consultation</Link>
              <a href="tel:+918882788412" className="btn-outline px-8 py-3.5 border-zinc-600 text-zinc-300 hover:text-white hover:border-white">Call: +9188827 88412</a>
            </div>
          </div>

          {/* Right: Glassmorphic Form Panel */}
          <div className="relative lg:mt-6">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
            <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
              <div className="form-card-orbit opacity-50" />
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-5">
                <div>
                  <p className="section-label text-brand-gold mb-1">Free Consultation</p>
                  <h2 className="font-heading text-xl font-bold text-white leading-tight">Build Your Personal Brand Today</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg width="20" height="20" className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                  </svg>
                </div>
              </div>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY YOU NEED IT - Split Visual Layout ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
            
            <RevealOnScroll>
              <div className="premium-copy-panel pr-0 lg:pr-8">
                <p className="section-label mb-2 text-brand-gold">Why Personal Branding</p>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-zinc-900 mb-6 leading-tight">
                  Why Do You Need <span className="heading-script text-brand-blue">Personal Branding Services?</span>
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-5 text-[0.95rem]">
                  In today&apos;s competitive world, personal branding plays a big role in how people see you online. A strong personal brand highlights your skills, values, and achievements, helping you connect better with your audience, gain new opportunities, and stand out in your industry.
                </p>
                <p className="text-zinc-500 leading-relaxed mb-8 text-[0.95rem]">
                  With a solid personal brand, you&apos;ll gain an advantage over your competitors and establish your business for long-term growth. Our personal branding agency in India helps turn your story into a powerful and memorable brand presence.
                </p>

                {/* Premium Tip List */}
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mb-8 shadow-sm">
                  <p className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-4">Important Tips for Personal Branding</p>
                  <div className="grid grid-cols-1 gap-3">
                    {brandingTips.map((tip) => (
                      <div key={tip} className="flex items-start gap-3 text-sm text-zinc-700">
                        <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="12" height="12" className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 4l2 2 3-3"/>
                          </svg>
                        </div>
                        <span className="font-medium">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20">Start Building Your Brand</Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/10 rounded-full blur-[80px] -z-10"></div>
<div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50 relative z-10">
  <img
    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    alt="Personal Branding Strategy"
    className="w-full h-[600px] object-cover object-top hover:scale-105 transition-transform duration-700"
  />
</div>
                
                <div className="absolute -bottom-6 -left-6 z-20 glass-panel-light p-4 rounded-2xl border border-white shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center flex-shrink-0 text-xl shadow-inner">
                    ⭐
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 mb-0.5">Authority Score</p>
                    <p className="text-[0.65rem] text-zinc-500 font-bold uppercase tracking-widest">Industry Leader Status</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 4 PILLARS - Dark Mode Elegance ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label text-brand-gold mb-3 justify-center">Why It Works</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight">
                We Promise to Build a Brand That Makes You <span className="text-gradient-gold">Seen as an Expert</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] mt-5 leading-relaxed">
                We are committed to helping you build a personal brand that showcases your specialty, spreads your message, and impacts lives.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="glass-panel border border-zinc-800/80 rounded-3xl p-8 flex flex-col text-center items-center h-full hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-400 card-premium-hover">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-4">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (6 steps) - Staggered Grid ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <RevealOnScroll>
              <div>
                <p className="section-label mb-2">Our Process</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
                  How Our <span className="heading-script text-brand-blue">Personal Branding</span> Service Works
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <Link href="#contact" className="btn-gold shadow-lg shadow-brand-gold/20 whitespace-nowrap flex-shrink-0 py-3.5 px-8">Get Started</Link>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {howItWorks.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 100}>
                <div className="card-premium-hover group bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-500 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold group-hover:shadow-lg transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-[0.75rem] font-black text-zinc-200 group-hover:text-brand-gold/40 transition-colors font-mono tracking-widest text-3xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-gold transition-colors relative z-10 leading-snug">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1 relative z-10">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO TRANSFORM YOURSELF - Glassmorphic Pill Grid ────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-[#090f1c] relative overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="section-label text-brand-gold mb-3">Brand Transformation</p>
              <h2 className="font-heading text-3xl lg:text-[2.5rem] font-bold text-white mb-6 leading-tight">
                How to Transform Yourself into a <span className="heading-script text-brand-gold">Powerful Brand</span>
              </h2>
              <p className="text-zinc-400 text-[0.95rem] leading-relaxed mb-10">
                There are essentially nine steps to follow to create, develop and maintain your personal brand. Getting the best personal branding position enables you to shine a spotlight on your expertise, and make you stand out from the crowd.
              </p>

              {/* Unique Glassmorphic Chips for the 9 steps */}
              <div className="flex flex-wrap gap-3">
                {brandingSteps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3 py-2 px-4 rounded-xl glass-panel border-zinc-800/80 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300 group cursor-default">
                    <span className="w-6 h-6 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0 text-[0.65rem] font-black text-brand-gold shadow-inner group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/20 rounded-3xl blur-2xl opacity-40 pointer-events-none"></div>
              <div className="premium-image-frame rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/50 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
                  alt="Personal Brand Transformation"
                  className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS - Clean Light Mode ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-white border-b border-zinc-200 premium-section-light overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="section-label mb-2 justify-center">Client Testimonials</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">What Our <span className="heading-script text-brand-blue">Clients Say</span></h2>
              <p className="text-zinc-500 text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed">We pay attention to details and quality, good communication and strong customer relationships.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 100}>
                <div className="premium-info-card bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:border-brand-blue/40 transition-all duration-400">
                  <div className="flex text-brand-gold text-sm mb-5 gap-1 tracking-widest drop-shadow-sm">{"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}</div>
                  <p className="text-zinc-600 text-[0.95rem] leading-relaxed mb-8 italic flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-blue text-xs font-bold tracking-wider">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-sm leading-none mb-1">{t.name}</p>
                      <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ - Asymmetrical Layout ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
            <RevealOnScroll>
              <div className="sticky top-24">
                <p className="section-label mb-2">Knowledge Base</p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  Personal Branding <span className="heading-script text-brand-blue">FAQs</span>
                </h2>
                <p className="text-zinc-500 text-[0.95rem] leading-relaxed mb-8">
                  Have a question not covered below? Our personal branding experts are happy to discuss your unique situation.
                </p>
                <a href="tel:+918882788412" className="btn-gold shadow-lg shadow-brand-gold/20 inline-flex items-center gap-2 px-8 py-3.5">
                  <svg width="16" height="16" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  Call Us Now
                </a>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="bg-white rounded-3xl shadow-sm border border-zinc-200/80 p-2 md:p-6">
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
              <p className="section-label text-brand-gold mb-3">Start Today</p>
              <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
                Don&apos;t Let a Single Negative Google Result <span className="heading-script text-brand-gold">Ruin Your Business</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 text-[0.95rem] max-w-lg">
                Schedule a free consultation today. We promise to build a brand for you so that you are seen as an expert in your industry.
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