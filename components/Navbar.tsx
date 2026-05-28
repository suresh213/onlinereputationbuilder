"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "BUSINESS",
    href: "/business",
    children: [
      { label: "Remove Business Negative Google Results", href: "/remove-negative-results" },
      { label: "Review Management", href: "/review-management" },
      { label: "Online Reputation Audit", href: "/reputation-audit" },
      { label: "Crisis Management", href: "/crisis-management" },
    ],
  },
  {
    label: "INDIVIDUAL",
    href: "/individual",
    children: [
      { label: "Remove Individual Negative Google Results", href: "#" },
      { label: "Personal Branding Service", href: "#" },
      { label: "Personal Brand Monitoring", href: "#" },
      { label: "Change Google Autocomplete", href: "#" },
      { label: "Remove Private Info", href: "#" },
    ],
  },
  { label: "REVIEWS", href: "/review-management" },
  { label: "SOLUTIONS", href: "#" },
  { label: "PR", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "CONTACT US", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded bg-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-mid transition-colors">
            <svg className="w-5 h-5 text-brand-gold-light" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1.5L3 6.75V12c0 5.25 3.92 10.12 9 11.25C17.08 22.12 21 17.25 21 12V6.75L12 1.5z"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-brand-dark text-[0.82rem] block tracking-tight">Online Reputation</span>
            <span className="font-heading font-bold text-brand-blue text-[0.82rem] block tracking-tight">Builder</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-wrap" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="dropdown" id={`dropdown-${item.label.toLowerCase()}`}>
                <button className="nav-link px-2.5 py-2 flex items-center gap-1 bg-transparent border-none cursor-pointer">
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div className="dropdown-menu">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href} className="dropdown-item">{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="nav-link px-2.5 py-2 block">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <a
          href="tel:+919971687251"
          className="hidden lg:inline-flex items-center gap-2 btn-gold text-[0.75rem] whitespace-nowrap"
          aria-label="Call us"
        >
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +91 99716 87251
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200 px-4 pb-4 border-b border-zinc-200">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left py-3 text-xs font-bold text-brand-blue uppercase tracking-wider border-b border-zinc-100 flex items-center justify-between"
                onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
              >
                {item.label}
                {item.children && (
                  <svg className={`w-4 h-4 transition-transform ${openDrop === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                )}
              </button>
              {item.children && openDrop === item.label && (
                <div className="pl-3 py-1 bg-zinc-50 rounded mt-1 mb-1 border border-zinc-100">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href} className="block py-2 px-2 text-sm text-gray-600 hover:text-brand-blue rounded-sm hover:bg-white transition-colors">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:+919971687251" className="btn-gold w-full text-center mt-4 block">
            Call: +91 99716 87251
          </a>
        </div>
      )}
    </header>
  );
}
