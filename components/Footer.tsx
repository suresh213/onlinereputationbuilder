"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg text-gray-300">
      {/* CTA Strip */}
      <div className="bg-brand-gold py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-bold text-white">Ready to Protect Your Reputation?</p>
            <p className="text-white/80 text-sm mt-1">Get a free consultation with India's #1 ORM experts today.</p>
          </div>
          <a href="tel:+919971687251" className="btn-blue whitespace-nowrap">
            Call: +91 99716 87251
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src="https://buildbrandbetter.io/wp-content/uploads/2024/11/Build-brand-better-1.png"
            alt="Build Brand Better"
            className="h-16 w-auto object-contain mb-4 brightness-0 invert"
          />
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            India's No.1 Online Reputation Management Company, dedicated to protecting and enhancing your online presence.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/BuildBrandBetter/", label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { href: "https://x.com/buildbrandbeter", label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { href: "https://www.linkedin.com/company/build-brand-better", label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
              { href: "https://www.instagram.com/buildbrandbetter/", label: "Instagram", path: "" },
              { href: "https://in.pinterest.com/buildbrandbetter/", label: "Pinterest", path: "" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-white text-gray-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  {s.path && <path d={s.path}/>}
                  {s.label === "Instagram" && <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </>}
                  {s.label === "Pinterest" && <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>}
                  {s.label === "LinkedIn" && <circle cx="4" cy="4" r="2"/>}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Services</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Business Solutions", href: "#" },
              { label: "Individual Solutions", href: "#" },
              { label: "Remove Content", href: "#" },
              { label: "Public Relation", href: "#" },
              { label: "Review Management", href: "/review-management" },
              { label: "Crisis Management", href: "/crisis-management" },
              { label: "Reputation Audit", href: "/reputation-audit" },
            ].map(l => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="text-brand-gold text-xs">›</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
          <ul className="space-y-2.5">
            {[
              { label: "About Us", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Case Studies", href: "#" },
              { label: "Contact Us", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ].map(l => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="text-brand-gold text-xs">›</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hotline</p>
                <a href="tel:+919971687251" className="text-white font-semibold hover:text-yellow-400 transition-colors">+91 99716-87251</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:buildbrandbetter@gmail.com" className="text-white text-sm hover:text-yellow-400 transition-colors">buildbrandbetter@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-white text-sm">Dwarka, New Delhi, 110059</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2021 All rights reserved. Design & Developed by <a href="/" className="text-brand-gold hover:underline">Build Brand Better</a> A Unit of <a href="http://360digitalidea.com" target="_blank" rel="noopener" className="text-brand-gold hover:underline">360 Digital Idea</a></p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
