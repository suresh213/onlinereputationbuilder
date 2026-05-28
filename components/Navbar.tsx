"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
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
  { label: "REVIEW & MANAGEMENT", href: "/review-management" },
  { label: "SOLUTIONS", href: "#" },
  { label: "PUBLIC RELATION", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "CONTACT US", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://buildbrandbetter.io/wp-content/uploads/2024/11/Build-brand-better-1.png"
            alt="Build Brand Better"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="dropdown">
                <button className="nav-link px-3 py-2 flex items-center gap-1 bg-transparent border-none cursor-pointer">
                  {item.label}
                  <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
              <Link key={item.label} href={item.href} className="nav-link px-3 py-2 block">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <a href="tel:+919971687251" className="hidden lg:inline-flex items-center gap-2 btn-gold text-xs whitespace-nowrap">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +91 99716 87251
        </a>

        {/* Hamburger */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5"/>
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5"/>
          <div className="w-6 h-0.5 bg-gray-800"/>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left py-3 text-sm font-semibold text-brand-blue uppercase tracking-wider border-b border-gray-100 flex items-center justify-between"
                onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
              >
                {item.label}
                {item.children && <span className="text-xs">{openDrop === item.label ? "▲" : "▼"}</span>}
              </button>
              {item.children && openDrop === item.label && (
                <div className="pl-4 py-1">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href} className="block py-2 text-sm text-gray-600 hover:text-brand-blue">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
