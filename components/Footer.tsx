// "use client";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="footer-bg text-gray-300">
//       {/* CTA Strip */}
//       <div className="bg-brand-blue py-6 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <div>
//             <p className="font-heading text-xl font-bold text-white">Ready to Protect Your Reputation?</p>
//             <p className="text-white/70 text-sm mt-1">Get a free consultation with India&apos;s #1 ORM experts today.</p>
//           </div>
//           <a href="tel:+918882788412" className="btn-gold whitespace-nowrap flex-shrink-0">
//             Call: +9188827 88412
//           </a>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <div className="flex items-center gap-2.5 mb-5">
//             <div className="w-9 h-9 rounded bg-brand-blue flex items-center justify-center flex-shrink-0">
//               <svg width="20" height="20" className="w-5 h-5 text-brand-gold-light" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 1.5L3 6.75V12c0 5.25 3.92 10.12 9 11.25C17.08 22.12 21 17.25 21 12V6.75L12 1.5z"/>
//               </svg>
//             </div>
//             <div className="leading-tight">
//               <span className="font-heading font-bold text-white text-[0.82rem] block">Online Reputation</span>
//               <span className="font-heading font-bold text-brand-gold-light text-[0.82rem] block">Builder</span>
//             </div>
//           </div>
//           <p className="text-sm text-gray-400 leading-relaxed mb-6">
//             India&apos;s No.1 Online Reputation Management Company, dedicated to protecting and enhancing your online presence since 2014.
//           </p>
//           <div className="flex items-center gap-2.5">
//             {[
//               { href: "https://www.facebook.com/onlinereputationbuilder", label: "Facebook" },
//               { href: "https://x.com/reputationbuild", label: "Twitter" },
//               { href: "https://www.linkedin.com/company/onlinereputationbuilder", label: "LinkedIn" },
//               { href: "https://www.instagram.com/onlinereputationbuilder", label: "Instagram" },
//             ].map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={s.label}
//                 className="w-8 h-8 rounded bg-white/8 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-gray-400 hover:text-white flex items-center justify-center transition-all"
//               >
//                 {s.label === "Facebook" && (
//                   <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
//                 )}
//                 {s.label === "Twitter" && (
//                   <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//                 )}
//                 {s.label === "LinkedIn" && (
//                   <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
//                 )}
//                 {s.label === "Instagram" && (
//                   <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//                     <circle cx="12" cy="12" r="4"/>
//                     <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
//                   </svg>
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h3>
//           <ul className="space-y-2.5">
//             {[
//               { label: "Business Solutions", href: "#" },
//               { label: "Individual Solutions", href: "#" },
//               { label: "Remove Content", href: "/remove-negative-results" },
//               { label: "Public Relation", href: "#" },
//               { label: "Review Management", href: "/review-management" },
//               { label: "Crisis Management", href: "/crisis-management" },
//               { label: "Reputation Audit", href: "/reputation-audit" },
//             ].map((l) => (
//               <li key={l.label}>
//                 <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-gold-light transition-colors flex items-center gap-2 group">
//                   <span className="text-brand-gold text-xs opacity-70 group-hover:opacity-100 transition-opacity">›</span>
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h3>
//           <ul className="space-y-2.5">
//             {[
//               { label: "About Us", href: "#" },
//               { label: "Blog", href: "#" },
//               { label: "Case Studies", href: "#" },
//               { label: "Contact Us", href: "#" },
//               { label: "Privacy Policy", href: "#" },
//               { label: "Terms & Conditions", href: "#" },
//             ].map((l) => (
//               <li key={l.label}>
//                 <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-gold-light transition-colors flex items-center gap-2 group">
//                   <span className="text-brand-gold text-xs opacity-70 group-hover:opacity-100 transition-opacity">›</span>
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact Us</h3>
//           <div className="space-y-4">
//             <div className="flex items-start gap-3">
//               <svg width="16" height="16" className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
//               </svg>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hotline</p>
//                 <a href="tel:+918882788412" className="text-white font-semibold hover:text-brand-gold-light transition-colors text-sm">+9188827 88412</a>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <svg width="16" height="16" className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
//               </svg>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
//                 <a href="mailto:contact@onlinereputationbuilder.in" className="text-white text-sm hover:text-brand-gold-light transition-colors">contact@onlinereputationbuilder.in</a>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <svg width="16" height="16" className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
//               </svg>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
//                 <p className="text-white text-sm">Shantipally, Behala, Kolkata - 700060</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/8 py-5 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
//           <p>© {new Date().getFullYear()} Online Reputation Builder. All rights reserved.</p>
//           <div className="flex items-center gap-4">
//             <Link href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
//             <span className="opacity-30">|</span>
//             <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";
import Image from "next/image"; // Added next/image import

export default function Footer() {
  return (
    <footer className="footer-bg text-gray-300">
      {/* CTA Strip */}
      <div className="bg-brand-blue py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-xl font-bold text-white">Ready to Protect Your Reputation?</p>
            <p className="text-white/70 text-sm mt-1">Get a free consultation with India&apos;s #1 ORM experts today.</p>
          </div>
          <a href="tel:+918882788412" className="btn-gold whitespace-nowrap flex-shrink-0">
            Call: +9188827 88412
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            {/* Replaced SVG with new logo image */}
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <Image 
                src="/logo-orm.png"
                alt="Online Reputation Builder Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-white text-[0.82rem] block">Online Reputation</span>
              <span className="font-heading font-bold text-brand-gold-light text-[0.82rem] block">Builder</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            India&apos;s No.1 Online Reputation Management Company, dedicated to protecting and enhancing your online presence since 2014.
          </p>
          <div className="flex items-center gap-2.5">
            {[
              { href: "https://www.facebook.com/onlinereputationbuilder", label: "Facebook" },
              { href: "https://x.com/reputationbuild", label: "Twitter" },
              { href: "https://www.linkedin.com/company/onlinereputationbuilder", label: "LinkedIn" },
              { href: "https://www.instagram.com/onlinereputationbuilder", label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded bg-white/8 hover:bg-brand-blue border border-white/10 hover:border-brand-blue text-gray-400 hover:text-white flex items-center justify-center transition-all"
              >
                {s.label === "Facebook" && (
                  <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                )}
                {s.label === "Twitter" && (
                  <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )}
                {s.label === "LinkedIn" && (
                  <svg width="14" height="14" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                )}
                {s.label === "Instagram" && (
                  <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h3>
          <ul className="space-y-2.5">
            {[
              { label: "Business Solutions", href: "/business" },
              { label: "Individual Solutions", href: "/individual" },
              { label: "Remove Content", href: "/business/remove-negative-results" },
              { label: "Public Relation", href: "/public-relation" },
              { label: "Review Management", href: "/review-management" },
              { label: "Crisis Management", href: "/business/crisis-management" },
              { label: "Reputation Audit", href: "/business/reputation-audit" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-gold-light transition-colors flex items-center gap-2 group">
                  <span className="text-brand-gold text-xs opacity-70 group-hover:opacity-100 transition-opacity">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h3>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", href: "#" }, 
              { label: "Blog", href: "/blog" },
              { label: "Case Studies", href: "/solution" },
              { label: "Contact Us", href: "/contact-us" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-gold-light transition-colors flex items-center gap-2 group">
                  <span className="text-brand-gold text-xs opacity-70 group-hover:opacity-100 transition-opacity">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hotline</p>
                <a href="tel:+918882788412" className="text-white font-semibold hover:text-brand-gold-light transition-colors text-sm">+9188827 88412</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:contact@onlinereputationbuilder.in" className="text-white text-sm hover:text-brand-gold-light transition-colors">contact@onlinereputationbuilder.in</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-white text-sm">Shantipally, Behala, Kolkata - 700060</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Online Reputation Builder. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span className="opacity-30">|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}