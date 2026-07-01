// "use client";
// import { useState, useEffect, useRef, ReactNode } from "react";
// import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";

// // Custom Scroll Reveal Hook for the "Experienced Developer" feel
// function RevealOnScroll({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div 
//       ref={ref} 
//       className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// export default function ContactPage() {
//   return (
//     <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
//       <Topbar />
//       <Navbar />

//       {/* ── CONTACT HERO - Premium Dark Split Layout ─────────────────────────────────────────── */}
//       <section className="hero-bg relative flex-1 overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50 flex items-center min-h-[85vh]">
//         <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
//         <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
//         <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center relative z-10 w-full">
          
//           {/* Left: Contact Information */}
//           <div className="hero-copy mt-4">
//             <RevealOnScroll>
//               <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
//                 </span>
//                 Contact Us
//               </div>

//               <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
//                 How Can We <span className="text-gradient-gold">Help?</span>
//               </h1>

//               <p className="text-white/70 text-base lg:text-lg mb-12 leading-relaxed max-w-xl">
//                 Ready to build, protect, and enhance your brand? Reach out to our team of experts and let's create a strategy tailored to your success.
//               </p>
//             </RevealOnScroll>

//             {/* Premium Contact Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              
//               {/* Address Card */}
//               <RevealOnScroll delay={100} className="sm:col-span-2">
//                 <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex items-start gap-5 hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-400 card-premium-hover">
//                   <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-gold shadow-inner">
//                     <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Address</p>
//                     <p className="text-white font-medium text-[0.95rem] leading-relaxed mb-1">C-72/2, Sainik Nagar, New Delhi - 110059.</p>
//                     <p className="text-zinc-400 text-sm italic">Landmark: Near Metro Pillar No. 742, Nawada Metro Station</p>
//                   </div>
//                 </div>
//               </RevealOnScroll>

//               {/* Phone Card */}
//               <RevealOnScroll delay={200}>
//                 <a href="tel:+918882788412" className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover h-full">
//                   <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-blue shadow-inner">
//                     <svg width="16" height="16" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">Phone Number</p>
//                     <p className="text-white font-heading font-bold text-lg">+9188827 88412</p>
//                   </div>
//                 </a>
//               </RevealOnScroll>

//               {/* Email Card */}
//               <RevealOnScroll delay={300}>
//                 <a href="mailto:contact@onlinereputationbuilder.in" className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-400 card-premium-hover h-full">
//                   <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-gold shadow-inner">
//                     <svg width="16" height="16" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1">Email</p>
//                     <p className="text-white font-heading font-bold text-[0.95rem] truncate">contact@onlinereputationbuilder.in</p>
//                   </div>
//                 </a>
//               </RevealOnScroll>
//             </div>

//             {/* Follow Us / Socials */}
//             <RevealOnScroll delay={400}>
//               <div className="pt-6 border-t border-white/10 flex items-center gap-6">
//                 <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-bold">Follow Us</p>
//                 <div className="flex items-center gap-3">
//                   <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-sm backdrop-blur-sm group">
//                     {/* X (Twitter) Icon */}
//                     <svg width="16" height="16" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/40 transition-all shadow-sm backdrop-blur-sm group">
//                     {/* LinkedIn (in) Icon */}
//                     <svg width="16" height="16" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </RevealOnScroll>
//           </div>

//           {/* Right: Glassmorphic Contact Form */}
//           <div className="relative lg:mt-6">
//             <RevealOnScroll delay={200}>
//               <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
//               <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
//                 <div className="form-card-orbit opacity-50" />
//                 <div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-5 relative z-10">
//                   <div>
//                     <h2 className="font-heading text-2xl font-bold text-white leading-tight">
//                       Business Solution Inquiry
//                     </h2>
//                     <p className="text-zinc-500 text-sm mt-1">Please fill in your details below.</p>
//                   </div>
//                   <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
//                     <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                 </div>
                
//                 {/* Embedded Reused Contact Form Component */}
//                 <div className="relative z-10">
//                   <ContactForm dark />
//                 </div>
//               </div>
//             </RevealOnScroll>
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

// Custom Scroll Reveal Hook for smooth entry animations
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

export default function ContactPage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* ── CONTACT HERO - Premium Dark Split Layout ─────────────────────────────────────────── */}
      <section className="hero-bg relative flex-1 overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50 flex items-center min-h-[90vh]">
        <div className="hero-ambient hero-ambient-blue opacity-40 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-20 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start relative z-10 w-full">
          
          {/* Left: Contact Information */}
          <div className="hero-copy mt-4">
            <RevealOnScroll>
              <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                Contact Us
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
                Let&apos;s Spark Your <span className="text-gradient-gold">Online Presence.</span>
              </h1>

              <p className="text-white/70 text-base lg:text-lg mb-12 leading-relaxed max-w-xl">
                Our experienced team is always available to provide top-tier digital marketing and online reputation management services. Get in touch today.
              </p>
            </RevealOnScroll>

            {/* Premium Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              
              {/* Call or WhatsApp Card */}
              <RevealOnScroll delay={100} className="sm:col-span-2">
                <a href="tel:+918882788412" className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 hover:border-brand-blue/40 hover:bg-white/5 transition-all duration-400 card-premium-hover">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-blue shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Call or WhatsApp</p>
                    <p className="text-white font-heading font-bold text-xl leading-relaxed mb-1">+91 8882788412</p>
                    <p className="text-zinc-400 text-xs mt-2">Available Mon-Sat | 10 AM - 8 PM IST</p>
                    <p className="text-zinc-500 text-xs italic mt-1">Text us outside hours - we&apos;ll hit you back soon!</p>
                  </div>
                </a>
              </RevealOnScroll>

              {/* Email Card */}
              <RevealOnScroll delay={200} className="sm:col-span-2">
                <a href="mailto:contact@onlinereputationbuilder.in" className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-400 card-premium-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-brand-gold shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Email Us Anytime</p>
                    <p className="text-white font-heading font-bold text-lg truncate mb-1">contact@onlinereputationbuilder.in</p>
                    <p className="text-zinc-400 text-xs italic mt-2">Expect a reply in 24 hours or less. Pinky promise!</p>
                  </div>
                </a>
              </RevealOnScroll>

              {/* Location Card */}
              <RevealOnScroll delay={300} className="sm:col-span-2">
                <div className="glass-panel border border-zinc-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 hover:border-emerald-500/40 hover:bg-white/5 transition-all duration-400 card-premium-hover">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-emerald-500 shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.65rem] text-zinc-500 uppercase tracking-widest font-bold mb-1.5">Our Location</p>
                    <p className="text-white font-medium text-[0.95rem] leading-relaxed mb-2">Shantipally, Behala Near Shantipally Park Kolkata - 700060</p>
                    <p className="text-zinc-400 text-xs italic mt-1">We work globally 🌍, but this is our home base. Come say hi (with chai)!</p>
                  </div>
                </div>
              </RevealOnScroll>

            </div>

            {/* Social Follow Links */}
            <RevealOnScroll delay={400}>
              <div className="pt-6 border-t border-white/10 flex items-center gap-6">
                <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest font-bold">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all shadow-sm backdrop-blur-sm group">
                    <svg width="16" height="16" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#E4405F]/20 hover:border-[#E4405F]/40 transition-all shadow-sm backdrop-blur-sm group">
                    <svg width="16" height="16" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-all shadow-sm backdrop-blur-sm group">
                    <svg width="16" height="16" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="relative lg:mt-6">
            <RevealOnScroll delay={200}>
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/10 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
              <div className="glass-panel bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
                <div className="form-card-orbit opacity-50" />
                
                {/* Form Header with friendly chat bubbles aesthetic */}
                <div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-5 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-brand-blue/20 text-brand-blue text-xs font-bold px-2 py-0.5 rounded-t-lg rounded-br-lg">Hi!</span>
                      <span className="bg-brand-gold/20 text-brand-gold text-xs font-bold px-2 py-0.5 rounded-t-lg rounded-bl-lg">Hello!</span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-white leading-tight">
                      Get In Touch
                    </h2>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg width="20" height="20" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Embedded Reused Contact Form Component */}
                <div className="relative z-10">
                  <ContactForm dark />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}