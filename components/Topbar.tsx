"use client";

// Helper functions for Google Analytics tracking
const trackPhoneClick = () => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "click_call", {
      event_category: "Lead Generation",
      event_label: "Topbar Phone Click",
      value: 1,
    });
  }
};

const trackEmailClick = () => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "click_email", {
      event_category: "Lead Generation",
      event_label: "Topbar Email Click",
      value: 1,
    });
  }
};

export default function Topbar() {
  return (
    <div className="topbar py-2 px-4 text-xs text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 min-w-0">
          <a href="tel:+918882788412" onClick={trackPhoneClick} className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
            <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            Call: +9188827 88412
          </a>
          <a href="mailto:contact@onlinereputationbuilder.in" onClick={trackEmailClick} className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors break-all">
            <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            contact@onlinereputationbuilder.in
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Kolkata, India
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: "facebook", href: "https://www.facebook.com/onlinereputationbuilder" },
            { icon: "twitter", href: "https://x.com/reputationbuild" },
            { icon: "linkedin", href: "https://www.linkedin.com/company/onlinereputationbuilder" },
            { icon: "instagram", href: "https://www.instagram.com/onlinereputationbuilder" },
          ].map((s) => (
            <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              {s.icon === "facebook" && <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>}
              {s.icon === "twitter" && <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
              {s.icon === "linkedin" && <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>}
              {s.icon === "instagram" && <svg className="w-3.5 h-3.5" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#0d1f3c"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0d1f3c" strokeWidth="2"/></svg>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
