"use client";
import { useState } from "react";

interface FAQItem { q: string; a: string; }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? "faq-item-open" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-gray-800 pr-4 leading-snug">{item.q}</span>
            <span className={`text-brand-blue transition-transform duration-200 flex-shrink-0 ${open === i ? "rotate-180" : ""}`}>
              <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
