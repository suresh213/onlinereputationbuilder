
// // "use client";
// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";

// // const navItems = [
// //   {
// //     label: "BUSINESS",
// //     href: "/business",
// //     children: [
// //       { label: "Remove Business Negative Google Results", href: "/business/remove-negative-results" },
// //       { label: "Review Management", href: "/business/review-management" },
// //       { label: "Online Reputation Audit", href: "/business/reputation-audit" },
// //       { label: "Crisis Management", href: "/business/crisis-management" },
// //       { label: "Reputation Monitoring", href: "/business/reputation-monitoring" },

// //     ],
// //   },
// //   {
// //     label: "INDIVIDUAL",
// //     href: "/individual",
// //     children: [
// //       { label: "Remove Individual Negative Google Results", href: "/individual/remove-individual-negative-results" },
// //       { label: "Personal Branding Service", href: "/individual/personal-branding-services" },
// //       { label: "Personal Brand Monitoring", href: "/individual/personal-brand-monitoring" },
// //       { label: "Change Google Autocomplete", href: "/individual/change-google-autocomplete" },
// //       { label: "Remove Private Info", href: "/individual/remove-private-info" },
// //     ],
// //   },
// //   { 
// //     label: "REVIEW & MANAGEMENT", 
// //     href: "/review-management",
// //     isMegaMenu: true,
// //     columns: [
// //       {
// //         title: "Content Removal",
// //         bgColor: "bg-brand-blue/5",
// //         links: [
// //           { label: "Quora Content Removal", href: "/review-management/quora-content-removal" },
// //           { label: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
// //           { label: "Fake News Removal", href: "/review-management/fake-news-removal" },
// //           { label: "News Article Removal From The Internet", href: "/review-management/news-article-removal-from-the-internet" },
// //           { label: "Cam Model Content Removal", href: "/review-management/cam-model-content-removal-service" },
// //           { label: "Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
// //           { label: "Ambitionbox Reputation Management", href: "/review-management/ambitionbox-reputation-management" },

// //         ]
// //       },
// //       {
// //         title: "Video & Image Removal",
// //         bgColor: "bg-white",
// //         links: [
// //           { label: "Image Removal", href: "/review-management/image-removal" },
// //           { label: "Video Removal", href: "/review-management/video-removal" },
// //         ],
// //         hasButton: true
// //       },
// //       {
// //         title: "Social Media Content Removal",
// //         bgColor: "bg-white",
// //         links: [
// //           { label: "Instagram Removal", href: "/review-management/instagram-videos-and-posts-removal" },
// //           { label: "Tiktok Removal", href: "/review-management/tiktok-video-and-post-removal" },
// //           { label: "Youtube Video Removal", href: "/review-management/youtube-video-removal" },
// //           { label: "Facebook Content Removal", href: "/review-management/facebook-content-removal" },
// //           { label: "Twitter Content Removal", href: "/review-management/twitter-content-removal" },
          
// //         ]
// //       },
// //       {
// //         title: "Review Removal",
// //         bgColor: "bg-white",
// //         links: [
// //           { label: "Fake Review Removal", href: "/review-management/fake-review-removal" },
// //           { label: "Product Review Management", href: "/review-management/product-review-management" },  
// //           { label: "Remove Google Business Review", href: "/business/remove-google-business-review" },
// //           { label: "Indeed Reputation Management", href: "/review-management/indeed-reputation-management" },
// //           { label: "Remove Glassdoor Reviews", href: "/review-management/remove-glassdoor-review" },
// //           { label: "Amplify Reviews", href: "/review-management/amplify-reviews" },
// //           { label: "Trustpilot Reputation Management", href: "/review-management/trustpilot-reputation-management" },
// //           { label: "Yelp Reputation Management", href: "/review-management/yelp-review-management" },
// //           { label: "Wikipedia Writing Services", href: "/review-management/wikipedia-writing-services" },

          
// //         ]
// //       }
// //     ],
// //     children: [
// //       { label: "Quora Content Removal", href: "/review-management/quora-content-removal" },
// //       { label: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
// //       { label: "Fake News Removal", href: "/review-management/fake-news-removal" },
// //       { label: "News Article Removal", href: "/review-management/news-article-removal-from-the-internet" },
// //       { label: "Cam Model Content Removal", href: "/review-management/cam-model-content-removal-service" },
// //       { label: "Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
// //       { label: "Image Removal", href: "/review-management/image-removal" },
// //       { label: "Video Removal", href: "/review-management/video-removal" },
// //       { label: "Instagram Removal", href: "/review-management/instagram-videos-and-posts-removal" },
// //       { label: "TikTok Removal", href: "/review-management/tiktok-video-and-post-removal" },
// //       { label: "YouTube Removal", href: "/review-management/youtube-video-removal" },
// //       { label: "Facebook Removal", href: "/review-management/facebook-content-removal" },
// //       { label: "Twitter Removal", href: "/review-management/twitter-content-removal" },
// //       { label: "Remove Glassdoor Reviews", href: "/review-management/remove-glassdoor-review" },
// //       { label: "Trustpilot Reputation Management", href: "/review-management/trustpilot-reputation-management" },
// //     ]
// //   },
// //   {
// //     label: "SOLUTIONS",
// //     href: "/solution",
// //     children: [
// //       { label: "Education Industry ORM", href: "/solution/education-industry-reputation-management" },
// //       { label: "Restaurant Industry ORM", href: "/solution/restaurant-industry-reputation-management" },
// //       { label: "Celebrity ORM Case Study", href: "/solution/case-studies-for-celebrity-reputation-management-company" },
// //       { label: "Education ORM Case Study", href: "/solution/case-studies-for-education-reputation-management-company" },
// //     ],
// //   },
// //   { label: "PR", href: "/public-relation" },
// //   { label: "BLOG", href: "/blog" },
// //   { label: "CONTACT US", href: "/contact-us" },
// // ];

// // export default function Navbar() {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [openDrop, setOpenDrop] = useState<string | null>(null);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <header 
// //       className={`sticky top-0 z-[100] transition-all duration-300 ${
// //         scrolled 
// //           ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-b border-zinc-200/50" 
// //           : "bg-white border-b border-zinc-200"
// //       }`}
// //     >
// //       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
// //         {/* Premium Logo Wrapper */}
// //         <Link href="/" className="flex-shrink-0 flex items-center gap-3 group relative z-20">
// //           <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
// //             <Image 
// //               src="/logo-orm.png"
// //               alt="Online Reputation Builder Logo"
// //               width={48}
// //               height={48}
// //               className="object-contain"
// //             />
// //           </div>
// //           <div className="leading-tight">
// //             <span className="font-heading font-black text-zinc-900 text-[0.9rem] block tracking-tight group-hover:text-brand-blue transition-colors">Online Reputation</span>
// //             <span className="font-heading font-bold text-brand-blue text-[0.8rem] block tracking-widest uppercase">Builder</span>
// //           </div>
// //         </Link>

// //         {/* Desktop Nav */}
// //         <nav className="hidden lg:flex items-center gap-1 lg:gap-2 flex-wrap h-full" aria-label="Main navigation">
// //           {navItems.map((item) =>
// //             item.isMegaMenu ? (
// //               <div key={item.label} className="group relative flex items-center h-[70px]">
// //                 {/* Changed button to Link for Mega Menu */}
// //                 <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
// //                   {item.label}
// //                   <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
// //                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
// //                   </svg>
// //                 </Link>
                
// //                 {/* Premium Mega Menu Container */}
// //                 <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-max max-w-[1200px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out flex border border-zinc-200/80 overflow-hidden z-50 rounded-2xl bg-white">
// //                   {item.columns?.map((col, idx) => (
// //                     <div key={idx} className={`p-8 lg:p-10 w-[360px] ${col.bgColor} border-r border-zinc-200/60 last:border-0 relative`}>
// //                       <h3 className="font-heading font-bold text-xl text-zinc-900 mb-6 tracking-tight flex items-center gap-3">
// //                         {col.title}
// //                       </h3>
// //                       <ul className="space-y-4">
// //                         {col.links.map(link => (
// //                           <li key={link.label}>
// //                             <Link href={link.href} className="text-zinc-700 font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-200 block text-[0.9rem] flex items-center gap-2 group/link">
// //                               <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover/link:bg-brand-blue transition-colors"></span>
// //                               {link.label}
// //                             </Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ) : item.children ? (
// //               <div key={item.label} className="dropdown group relative flex items-center h-[70px]">
// //                 {/* Changed button to Link for Standard Dropdown */}
// //                 <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
// //                   {item.label}
// //                   <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
// //                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
// //                   </svg>
// //                 </Link>
// //                 <div className="dropdown-menu absolute top-[70px] left-0 min-w-[260px] bg-white border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 rounded-2xl overflow-hidden py-2">
// //                   {item.children.map((c) => (
// //                     <Link key={c.label} href={c.href} className="dropdown-item block px-5 py-3 text-[0.85rem] text-zinc-600 hover:bg-zinc-50 hover:text-brand-blue hover:pl-6 transition-all duration-200 font-medium border-b border-zinc-50 last:border-0">
// //                       {c.label}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             ) : (
// //               <div key={item.label} className="flex items-center h-[70px]">
// //                 <Link href={item.href} className="nav-link px-3 py-2 block uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
// //                   {item.label}
// //                 </Link>
// //               </div>
// //             )
// //           )}
// //         </nav>

// //         {/* Action Button & Hamburger Wrapper */}
// //         <div className="flex items-center gap-4 relative z-20">
// //           <a
// //             href="tel:+918882788412"
// //             className="hidden lg:inline-flex items-center gap-2 btn-gold text-[0.8rem] whitespace-nowrap shadow-[0_8px_20px_rgba(194,148,10,0.2)] hover:shadow-[0_10px_25px_rgba(194,148,10,0.3)] px-6 py-2.5"
// //             aria-label="Call us"
// //           >
// //             <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
// //               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
// //             </svg>
// //             +9188827 88412
// //           </a>

// //           <button
// //             className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
// //             onClick={() => setMobileOpen(!mobileOpen)}
// //             aria-label="Toggle menu"
// //           >
// //             {mobileOpen ? (
// //               <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
// //               </svg>
// //             ) : (
// //               <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
// //               </svg>
// //             )}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div 
// //         className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${
// //           mobileOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
// //         }`}
// //       >
// //         <div className="px-4 py-2">
// //           {navItems.map((item) => (
// //             <div key={item.label} className="border-b border-zinc-100 last:border-0">
// //               {item.children ? (
// //                 <div>
// //                   {/* Split Mobile Navigation Link and Mobile Toggle Button */}
// //                   <div className="w-full flex items-center justify-between py-4">
// //                     <Link
// //                       href={item.href}
// //                       className="text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest flex-1 hover:text-brand-blue transition-colors"
// //                       onClick={() => setMobileOpen(false)}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                     <button
// //                       className="pl-4 focus:outline-none"
// //                       onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
// //                       aria-label={`Toggle ${item.label} sub-menu`}
// //                     >
// //                       <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openDrop === item.label ? "rotate-180 bg-brand-blue/10 text-brand-blue" : "bg-zinc-50 text-zinc-500"}`}>
// //                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
// //                         </svg>
// //                       </div>
// //                     </button>
// //                   </div>
                  
// //                   <div className={`transition-all duration-300 overflow-hidden ${openDrop === item.label ? "max-h-[1000px] pb-4" : "max-h-0"}`}>
// //                     <div className="pl-4 border-l-2 border-brand-blue/20 space-y-1 ml-2">
// //                       {item.children.map((c) => (
// //                         <Link
// //                           key={c.label}
// //                           href={c.href}
// //                           className="block py-2.5 px-3 text-[0.85rem] text-zinc-600 font-medium hover:text-brand-blue hover:bg-zinc-50 rounded-lg transition-colors"
// //                           onClick={() => setMobileOpen(false)}
// //                         >
// //                           {c.label}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <Link
// //                   href={item.href}
// //                   className="block py-4 text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest hover:text-brand-blue transition-colors"
// //                   onClick={() => setMobileOpen(false)}
// //                 >
// //                   {item.label}
// //                 </Link>
// //               )}
// //             </div>
// //           ))}
          
// //           <div className="pt-6 pb-8">
// //             <a href="tel:+918882788412" className="btn-gold w-full text-center flex items-center justify-center gap-2 py-3.5 shadow-lg shadow-brand-gold/20">
// //               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
// //                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
// //               </svg>
// //               Call: +9188827 88412
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const navItems = [
//   {
//     label: "BUSINESS",
//     href: "/business",
//     children: [
//       { label: "Remove Business Negative Google Results", href: "/business/remove-negative-results" },
//       { label: "Review Management", href: "/business/review-management" },
//       { label: "Online Reputation Audit", href: "/business/reputation-audit" },
//       { label: "Crisis Management", href: "/business/crisis-management" },
//       { label: "Reputation Monitoring", href: "/business/reputation-monitoring" },
//     ],
//   },
//   {
//     label: "INDIVIDUAL",
//     href: "/individual",
//     children: [
//       { label: "Remove Individual Negative Google Results", href: "/individual/remove-individual-negative-results" },
//       { label: "Personal Branding Service", href: "/individual/personal-branding-services" },
//       { label: "Personal Brand Monitoring", href: "/individual/personal-brand-monitoring" },
//       { label: "Change Google Autocomplete", href: "/individual/change-google-autocomplete" },
//       { label: "Remove Private Info", href: "/individual/remove-private-info" },
//     ],
//   },
//   { 
//     label: "REVIEW & MANAGEMENT", 
//     href: "/review-management",
//     isMegaMenu: true,
//     columns: [
//       {
//         title: "Content Removal",
//         bgColor: "bg-brand-blue/5",
//         links: [
//           { label: "Quora Content Removal", href: "/review-management/quora-content-removal" },
//           { label: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
//           { label: "Fake News Removal", href: "/review-management/fake-news-removal" },
//           { label: "News Article Removal From The Internet", href: "/review-management/news-article-removal-from-the-internet" },
//           { label: "Cam Model Content Removal", href: "/review-management/cam-model-content-removal-service" },
//           { label: "Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
//           { label: "Ambitionbox Reputation Management", href: "/review-management/ambitionbox-reputation-management" },
//         ]
//       },
//       {
//         title: "Video & Image Removal",
//         bgColor: "bg-white",
//         links: [
//           { label: "Image Removal", href: "/review-management/image-removal" },
//           { label: "Video Removal", href: "/review-management/video-removal" },
//         ],
//         hasButton: true
//       },
//       {
//         title: "Social Media Content Removal",
//         bgColor: "bg-white",
//         links: [
//           { label: "Instagram Removal", href: "/review-management/instagram-videos-and-posts-removal" },
//           { label: "Tiktok Removal", href: "/review-management/tiktok-video-and-post-removal" },
//           { label: "Youtube Video Removal", href: "/review-management/youtube-video-removal" },
//           { label: "Facebook Content Removal", href: "/review-management/facebook-content-removal" },
//           { label: "Twitter Content Removal", href: "/review-management/twitter-content-removal" },
//         ]
//       },
//       {
//         title: "Review Removal",
//         bgColor: "bg-white",
//         links: [
//           { label: "Fake Review Removal", href: "/review-management/fake-review-removal" },
//           { label: "Product Review Management", href: "/review-management/product-review-management" },  
//           { label: "Remove Google Business Review", href: "/business/remove-google-business-review" },
//           { label: "Indeed Reputation Management", href: "/review-management/indeed-reputation-management" },
//           { label: "Remove Glassdoor Reviews", href: "/review-management/remove-glassdoor-review" },
//           { label: "Amplify Reviews", href: "/review-management/amplify-reviews" },
//           { label: "Trustpilot Reputation Management", href: "/review-management/trustpilot-reputation-management" },
//           { label: "Yelp Reputation Management", href: "/review-management/yelp-review-management" },
//           { label: "Wikipedia Writing Services", href: "/review-management/wikipedia-writing-services" },
//         ]
//       }
//     ],
//     children: [
//       { label: "Quora Content Removal", href: "/review-management/quora-content-removal" },
//       { label: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
//       { label: "Fake News Removal", href: "/review-management/fake-news-removal" },
//       { label: "News Article Removal", href: "/review-management/news-article-removal-from-the-internet" },
//       { label: "Cam Model Content Removal", href: "/review-management/cam-model-content-removal-service" },
//       { label: "Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
//       { label: "Image Removal", href: "/review-management/image-removal" },
//       { label: "Video Removal", href: "/review-management/video-removal" },
//       { label: "Instagram Removal", href: "/review-management/instagram-videos-and-posts-removal" },
//       { label: "TikTok Removal", href: "/review-management/tiktok-video-and-post-removal" },
//       { label: "YouTube Removal", href: "/review-management/youtube-video-removal" },
//       { label: "Facebook Removal", href: "/review-management/facebook-content-removal" },
//       { label: "Twitter Removal", href: "/review-management/twitter-content-removal" },
//       { label: "Remove Glassdoor Reviews", href: "/review-management/remove-glassdoor-review" },
//       { label: "Trustpilot Reputation Management", href: "/review-management/trustpilot-reputation-management" },
//     ]
//   },
//   {
//     label: "SOLUTIONS",
//     href: "/solution",
//     children: [
//       { label: "Education Industry ORM", href: "/solution/education-industry-reputation-management" },
//       { label: "Restaurant Industry ORM", href: "/solution/restaurant-industry-reputation-management" },
//       { label: "Celebrity ORM Case Study", href: "/solution/case-studies-for-celebrity-reputation-management-company" },
//       { label: "Education ORM Case Study", href: "/solution/case-studies-for-education-reputation-management-company" },
//     ],
//   },
//   { label: "PR", href: "/public-relation" },
//   { label: "BLOG", href: "/blog" },
//   { label: "CONTACT US", href: "/contact-us" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDrop, setOpenDrop] = useState<string | null>(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header 
//       className={`sticky top-0 z-[100] transition-all duration-300 ${
//         scrolled 
//           ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-b border-zinc-200/50" 
//           : "bg-white border-b border-zinc-200"
//       }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-6">
//         {/* Premium Logo Wrapper */}
//         <Link href="/" className="flex-shrink-0 flex items-center gap-3 group relative z-20">
//           <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
//             <Image 
//               src="/logo-orm.png"
//               alt="Online Reputation Builder Logo"
//               width={48}
//               height={48}
//               className="object-contain"
//             />
//           </div>
//           <div className="leading-tight">
//             <span className="font-heading font-black text-zinc-900 text-[0.9rem] block tracking-tight group-hover:text-brand-blue transition-colors">Online Reputation</span>
//             <span className="font-heading font-bold text-brand-blue text-[0.8rem] block tracking-widest uppercase">Builder</span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-1 lg:gap-2 flex-wrap h-full" aria-label="Main navigation">
//           {navItems.map((item) =>
//             item.isMegaMenu ? (
//               <div key={item.label} className="group relative flex items-center h-[70px]">
//                 <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
//                   {item.label}
//                   <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
//                   </svg>
//                 </Link>
                
//                 {/* Fixed Mega Menu Container with Invisible Bridge */}
//                 <div className="absolute top-[50px] left-1/2 -translate-x-1/2 pt-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
//                   <div className="w-max max-w-[1200px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex border border-zinc-200/80 overflow-hidden rounded-2xl bg-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     {item.columns?.map((col, idx) => (
//                       <div key={idx} className={`p-8 lg:p-10 w-[360px] ${col.bgColor} border-r border-zinc-200/60 last:border-0 relative`}>
//                         <h3 className="font-heading font-bold text-xl text-zinc-900 mb-6 tracking-tight flex items-center gap-3">
//                           {col.title}
//                         </h3>
//                         <ul className="space-y-4">
//                           {col.links.map(link => (
//                             <li key={link.label}>
//                               <Link href={link.href} className="text-zinc-700 font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-200 block text-[0.9rem] flex items-center gap-2 group/link">
//                                 <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover/link:bg-brand-blue transition-colors"></span>
//                                 {link.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : item.children ? (
//               <div key={item.label} className="dropdown group relative flex items-center h-[70px]">
//                 <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
//                   {item.label}
//                   <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
//                   </svg>
//                 </Link>

//                 {/* Fixed Standard Dropdown with Invisible Bridge */}
//                 <div className="absolute top-[50px] left-0 pt-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
//                   <div className="dropdown-menu min-w-[260px] bg-white border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     {item.children.map((c) => (
//                       <Link key={c.label} href={c.href} className="dropdown-item block px-5 py-3 text-[0.85rem] text-zinc-600 hover:bg-zinc-50 hover:text-brand-blue hover:pl-6 transition-all duration-200 font-medium border-b border-zinc-50 last:border-0">
//                         {c.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div key={item.label} className="flex items-center h-[70px]">
//                 <Link href={item.href} className="nav-link px-3 py-2 block uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
//                   {item.label}
//                 </Link>
//               </div>
//             )
//           )}
//         </nav>

//         {/* Action Button & Hamburger Wrapper */}
//         <div className="flex items-center gap-4 relative z-20">
//           <a
//             href="tel:+918882788412"
//             className="hidden lg:inline-flex items-center gap-2 btn-gold text-[0.8rem] whitespace-nowrap shadow-[0_8px_20px_rgba(194,148,10,0.2)] hover:shadow-[0_10px_25px_rgba(194,148,10,0.3)] px-6 py-2.5"
//             aria-label="Call us"
//           >
//             <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//             </svg>
//             +9188827 88412
//           </a>

//           <button
//             className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? (
//               <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//               </svg>
//             ) : (
//               <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${
//           mobileOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 py-2">
//           {navItems.map((item) => (
//             <div key={item.label} className="border-b border-zinc-100 last:border-0">
//               {item.children ? (
//                 <div>
//                   <div className="w-full flex items-center justify-between py-4">
//                     <Link
//                       href={item.href}
//                       className="text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest flex-1 hover:text-brand-blue transition-colors"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                     <button
//                       className="pl-4 focus:outline-none"
//                       onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
//                       aria-label={`Toggle ${item.label} sub-menu`}
//                     >
//                       <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openDrop === item.label ? "rotate-180 bg-brand-blue/10 text-brand-blue" : "bg-zinc-50 text-zinc-500"}`}>
//                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
//                         </svg>
//                       </div>
//                     </button>
//                   </div>
                  
//                   <div className={`transition-all duration-300 overflow-hidden ${openDrop === item.label ? "max-h-[1000px] pb-4" : "max-h-0"}`}>
//                     <div className="pl-4 border-l-2 border-brand-blue/20 space-y-1 ml-2">
//                       {item.children.map((c) => (
//                         <Link
//                           key={c.label}
//                           href={c.href}
//                           className="block py-2.5 px-3 text-[0.85rem] text-zinc-600 font-medium hover:text-brand-blue hover:bg-zinc-50 rounded-lg transition-colors"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {c.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   href={item.href}
//                   className="block py-4 text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest hover:text-brand-blue transition-colors"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               )}
//             </div>
//           ))}
          
//           <div className="pt-6 pb-8">
//             <a href="tel:+918882788412" className="btn-gold w-full text-center flex items-center justify-center gap-2 py-3.5 shadow-lg shadow-brand-gold/20">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//               </svg>
//               Call: +9188827 88412
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "BUSINESS",
    href: "/business",
    children: [
      { label: "Remove Business Negative Google Results", href: "/business/remove-negative-results" },
      { label: "Review Management", href: "/business/review-management" },
      { label: "Online Reputation Audit", href: "/business/reputation-audit" },
      { label: "Crisis Management", href: "/business/crisis-management" },
      { label: "Reputation Monitoring", href: "/business/reputation-monitoring" },
    ],
  },
  {
    label: "INDIVIDUAL",
    href: "/individual",
    children: [
      { label: "Remove Individual Negative Google Results", href: "/individual/remove-individual-negative-results" },
      { label: "Personal Branding Service", href: "/individual/personal-branding-services" },
      { label: "Personal Brand Monitoring", href: "/individual/personal-brand-monitoring" },
      { label: "Change Google Autocomplete", href: "/individual/change-google-autocomplete" },
      { label: "Remove Private Info", href: "/individual/remove-private-info" },
    ],
  },
  { 
    label: "REVIEW & MANAGEMENT", 
    href: "/review-management",
    isMegaMenu: true,
    columns: [
      {
        title: "Content Removal",
        bgColor: "bg-brand-blue/5",
        links: [
          { label: "Quora Content Removal", href: "/review-management/quora-content-removal" },
          { label: "Reddit Post Removal", href: "/review-management/reddit-post-removal" },
          { label: "Fake News Removal", href: "/review-management/fake-news-removal" },
          { label: "News Article Removal From The Internet", href: "/review-management/news-article-removal-from-the-internet" },
          { label: "Cam Model Content Removal", href: "/review-management/cam-model-content-removal-service" },
          { label: "Complaint Removal", href: "/review-management/complaint-removal-and-management-services" },
          { label: "Ambitionbox Reputation Management", href: "/review-management/ambitionbox-reputation-management" },
        ]
      },
      {
        title: "Video & Image Removal",
        bgColor: "bg-white",
        links: [
          { label: "Image Removal", href: "/review-management/image-removal" },
          { label: "Video Removal", href: "/review-management/video-removal" },
        ],
        hasButton: true
      },
      {
        title: "Social Media Content Removal",
        bgColor: "bg-white",
        links: [
          { label: "Instagram Removal", href: "/review-management/instagram-videos-and-posts-removal" },
          { label: "Tiktok Removal", href: "/review-management/tiktok-video-and-post-removal" },
          { label: "Youtube Video Removal", href: "/review-management/youtube-video-removal" },
          { label: "Facebook Content Removal", href: "/review-management/facebook-content-removal" },
          { label: "Twitter Content Removal", href: "/review-management/twitter-content-removal" },
        ]
      },
      {
        title: "Review Removal",
        bgColor: "bg-white",
        links: [
          { label: "Fake Review Removal", href: "/review-management/fake-review-removal" },
          { label: "Product Review Management", href: "/review-management/product-review-management" },  
          { label: "Remove Google Business Review", href: "/business/remove-google-business-review" },
          { label: "Indeed Reputation Management", href: "/review-management/indeed-reputation-management" },
          { label: "Remove Glassdoor Reviews", href: "/review-management/remove-glassdoor-review" },
          { label: "Amplify Reviews", href: "/review-management/amplify-reviews" },
          { label: "Trustpilot Reputation Management", href: "/review-management/trustpilot-reputation-management" },
          { label: "Yelp Reputation Management", href: "/review-management/yelp-review-management" },
          { label: "Wikipedia Writing Services", href: "/review-management/wikipedia-writing-services" },
        ]
      }
    ]
  },
  {
    label: "SOLUTIONS",
    href: "/solution",
    children: [
      { label: "Education Industry ORM", href: "/solution/education-industry-reputation-management" },
      { label: "Restaurant Industry ORM", href: "/solution/restaurant-industry-reputation-management" },
      { label: "Celebrity ORM Case Study", href: "/solution/case-studies-for-celebrity-reputation-management-company" },
      { label: "Education ORM Case Study", href: "/solution/case-studies-for-education-reputation-management-company" },
    ],
  },
  { label: "PR", href: "/public-relation" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  
  // NEW: State to track which nested submenu is open
  const [openNestedDrop, setOpenNestedDrop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border-b border-zinc-200/50" 
          : "bg-white border-b border-zinc-200"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 xl:gap-6 relative z-30 bg-inherit">
        
        {/* Logo Wrapper */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 group relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo-orm.png"
              alt="Online Reputation Builder Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="leading-tight">
            <span className="font-heading font-black text-zinc-900 text-[0.8rem] sm:text-[0.9rem] block tracking-tight group-hover:text-brand-blue transition-colors">Online Reputation</span>
            <span className="font-heading font-bold text-brand-blue text-[0.7rem] sm:text-[0.8rem] block tracking-widest uppercase">Builder</span>
          </div>
        </Link>

        {/* Desktop Nav - Unchanged */}
        <nav className="hidden xl:flex items-center gap-1 xl:gap-2 flex-wrap h-full" aria-label="Main navigation">
          {navItems.map((item) =>
            item.isMegaMenu ? (
              <div key={item.label} className="group relative flex items-center h-[70px]">
                <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  {item.label}
                  <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>
                
                <div className="absolute top-[50px] left-1/2 -translate-x-1/2 pt-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                  <div className="w-max max-w-[1200px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex border border-zinc-200/80 overflow-hidden rounded-2xl bg-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.columns?.map((col, idx) => (
                      <div key={idx} className={`p-8 xl:p-10 w-[360px] ${col.bgColor} border-r border-zinc-200/60 last:border-0 relative`}>
                        <h3 className="font-heading font-bold text-xl text-zinc-900 mb-6 tracking-tight flex items-center gap-3">
                          {col.title}
                        </h3>
                        <ul className="space-y-4">
                          {col.links.map(link => (
                            <li key={link.label}>
                              <Link href={link.href} className="text-zinc-700 font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-200 block text-[0.9rem] flex items-center gap-2 group/link">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover/link:bg-brand-blue transition-colors"></span>
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.children ? (
              <div key={item.label} className="dropdown group relative flex items-center h-[70px]">
                <Link href={item.href} className="nav-link px-3 py-2 flex items-center gap-1.5 bg-transparent border-none cursor-pointer uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  {item.label}
                  <svg className="w-3.5 h-3.5 mt-0.5 text-zinc-400 group-hover:text-brand-blue group-hover:rotate-180 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </Link>

                <div className="absolute top-[50px] left-0 pt-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                  <div className="dropdown-menu min-w-[260px] bg-white border border-zinc-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href} className="dropdown-item block px-5 py-3 text-[0.85rem] text-zinc-600 hover:bg-zinc-50 hover:text-brand-blue hover:pl-6 transition-all duration-200 font-medium border-b border-zinc-50 last:border-0">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.label} className="flex items-center h-[70px]">
                <Link href={item.href} className="nav-link px-3 py-2 block uppercase text-[0.75rem] font-bold text-zinc-800 tracking-[0.05em] hover:text-brand-blue transition-colors relative after:absolute after:bottom-0 after:left-3 after:w-[calc(100%-1.5rem)] after:h-0.5 after:bg-brand-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  {item.label}
                </Link>
              </div>
            )
          )}
        </nav>

        {/* Action Button & Hamburger - Unchanged */}
        <div className="flex items-center gap-3 sm:gap-4 relative">
          <a
            href="tel:+918882788412"
            className="hidden xl:inline-flex items-center gap-2 btn-gold text-[0.8rem] whitespace-nowrap shadow-[0_8px_20px_rgba(194,148,10,0.2)] hover:shadow-[0_10px_25px_rgba(194,148,10,0.3)] px-6 py-2.5"
            aria-label="Call us"
          >
            <svg className="w-4 h-4 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +9188827 88412
          </a>

          <button
            className="xl:hidden w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU WRAPPER */}
      <div 
        className={`xl:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-2xl origin-top transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 max-h-[calc(100dvh-70px)]" : "opacity-0 max-h-0 pointer-events-none"
        } overflow-y-auto z-20`}
      >
        <div className="px-4 py-2 flex flex-col min-h-max">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-zinc-100 last:border-0">
              
              {/* Check if it's the Mega Menu (Review & Management) to render nested submenus */}
              {item.isMegaMenu && item.columns ? (
                 <div>
                  <div className="w-full flex items-center justify-between py-4">
                    <Link
                      href={item.href}
                      className="text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest flex-1 hover:text-brand-blue transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="pl-4 py-1 focus:outline-none"
                      onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label} sub-menu`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openDrop === item.label ? "rotate-180 bg-brand-blue/10 text-brand-blue" : "bg-zinc-50 text-zinc-500"}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                  
                  {/* LEVEL 1: Open Mega Menu */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openDrop === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 border-l-2 border-brand-blue/20 space-y-2 ml-2 pb-4 mt-1">
                        
                        {/* LEVEL 2: Map through the columns to create Nested Categories */}
                        {item.columns.map((col) => (
                          <div key={col.title} className="pb-1">
                            <button 
                              onClick={() => setOpenNestedDrop(openNestedDrop === col.title ? null : col.title)}
                              className="w-full flex items-center justify-between py-2.5 text-[0.8rem] font-bold text-zinc-700 hover:text-brand-blue transition-colors"
                            >
                              {col.title}
                              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openNestedDrop === col.title ? "rotate-180 text-brand-blue" : "text-zinc-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                              </svg>
                            </button>
                            
                            {/* LEVEL 3: Actual Links inside the specific category */}
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openNestedDrop === col.title ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                               <div className="overflow-hidden">
                                 <div className="pl-3 space-y-1 mb-2">
                                    {col.links.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block py-2 px-2 text-[0.85rem] text-zinc-500 font-medium hover:text-brand-blue hover:bg-zinc-50 rounded-lg transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                 </div>
                               </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>

              // Check if it's a standard dropdown (Business, Individual, Solutions)
              ) : item.children ? (
                <div>
                  <div className="w-full flex items-center justify-between py-4">
                    <Link
                      href={item.href}
                      className="text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest flex-1 hover:text-brand-blue transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      className="pl-4 py-1 focus:outline-none"
                      onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label} sub-menu`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openDrop === item.label ? "rotate-180 bg-brand-blue/10 text-brand-blue" : "bg-zinc-50 text-zinc-500"}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                  
                  {/* Standard Flat List Mobile Accordion */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      openDrop === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-4 border-l-2 border-brand-blue/20 space-y-1 ml-2 pb-4 mt-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            href={c.href}
                            className="block py-2.5 px-3 text-[0.85rem] text-zinc-600 font-medium hover:text-brand-blue hover:bg-zinc-50 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-4 text-[0.8rem] font-bold text-zinc-900 uppercase tracking-widest hover:text-brand-blue transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-6 pb-12 mt-4">
            <a href="tel:+918882788412" className="btn-gold w-full text-center flex items-center justify-center gap-2 py-3.5 shadow-lg shadow-brand-gold/20 rounded-xl">
              <svg className="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call: +9188827 88412
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}