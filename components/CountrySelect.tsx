"use client";
import React, { useState, useRef, useEffect } from "react";
import { Country, ALL_COUNTRIES, POPULAR_COUNTRIES, DEFAULT_COUNTRY } from "./countryData";

interface CountrySelectProps {
  value: Country;
  onChange: (country: Country) => void;
  dark?: boolean;
}

export default function CountrySelect({ value, onChange, dark = false }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Filter countries
  const query = searchQuery.trim().toLowerCase().replace(/^\+/, "");
  const filteredCountries = ALL_COUNTRIES.filter((c) => {
    if (!query) return true;
    const nameMatch = c.name.toLowerCase().includes(query);
    const codeMatch = c.code.toLowerCase().includes(query);
    const dialMatch = c.dialCode.replace(/^\+/, "").includes(query);
    const keywordMatch = c.keywords ? c.keywords.toLowerCase().includes(query) : false;
    return nameMatch || codeMatch || dialMatch || keywordMatch;
  });

  const handleSelect = (country: Country) => {
    onChange(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`form-input w-full flex items-center justify-between text-left cursor-pointer transition-all ${
          dark
            ? "bg-white/10 border-white/20 text-white hover:border-white/40 focus:border-brand-gold"
            : "bg-white border-zinc-300 text-zinc-800 hover:border-zinc-400 focus:border-brand-blue"
        } ${isOpen ? (dark ? "border-brand-gold ring-1 ring-brand-gold/30" : "border-brand-blue ring-1 ring-brand-blue/30") : ""}`}
      >
        <span className="flex items-center gap-2 truncate text-xs sm:text-sm font-medium">
          <span className="text-base leading-none select-none">{value.flag}</span>
          <span className="truncate">{value.name}</span>
          <span className={`text-[11px] font-semibold ${dark ? "text-brand-gold" : "text-brand-blue"}`}>
            ({value.dialCode})
          </span>
        </span>
        <svg
          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "transform rotate-180 text-brand-gold" : dark ? "text-zinc-400" : "text-zinc-500"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl shadow-2xl border overflow-hidden transition-all animate-in fade-in-0 zoom-in-95 duration-150 ${
            dark
              ? "bg-zinc-950/95 backdrop-blur-xl border-zinc-700 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              : "bg-white border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          }`}
          style={{ maxHeight: "320px" }}
        >
          {/* Search Header */}
          <div className={`p-2 border-b sticky top-0 z-10 ${dark ? "bg-zinc-900/95 border-zinc-800" : "bg-zinc-50 border-zinc-100"}`}>
            <div className="relative flex items-center">
              <svg
                className={`w-3.5 h-3.5 absolute left-3 pointer-events-none ${dark ? "text-zinc-400" : "text-zinc-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code (e.g. US, +44, UAE)..."
                className={`w-full text-xs rounded-lg pl-8 pr-7 py-2 outline-none border transition-colors ${
                  dark
                    ? "bg-zinc-950 border-zinc-700 text-white placeholder-zinc-500 focus:border-brand-gold"
                    : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-brand-blue"
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className={`absolute right-2 text-xs p-1 rounded hover:opacity-100 opacity-60 ${dark ? "text-zinc-300" : "text-zinc-500"}`}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* List of Countries */}
          <div className="overflow-y-auto max-h-[250px] divide-y divide-zinc-100 dark:divide-zinc-900">
            {/* Show Popular section only if not searching */}
            {!query && (
              <div className="p-1">
                <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${dark ? "text-zinc-400" : "text-zinc-400"}`}>
                  Popular Countries
                </div>
                {POPULAR_COUNTRIES.map((c) => {
                  const isSelected = value.code === c.code;
                  return (
                    <button
                      key={`popular-${c.code}`}
                      type="button"
                      onClick={() => handleSelect(c)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-lg text-left transition-colors ${
                        isSelected
                          ? dark
                            ? "bg-brand-gold/15 text-brand-gold font-semibold"
                            : "bg-blue-50 text-brand-blue font-semibold"
                          : dark
                          ? "hover:bg-zinc-800/80 text-zinc-200"
                          : "hover:bg-zinc-100 text-zinc-800"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="text-base select-none">{c.flag}</span>
                        <span className="truncate">{c.name}</span>
                      </span>
                      <span className={`text-[11px] font-mono font-medium ml-2 ${isSelected ? "" : dark ? "text-zinc-400" : "text-zinc-500"}`}>
                        {c.dialCode}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* All / Filtered Countries */}
            <div className="p-1">
              {!query && (
                <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${dark ? "text-zinc-400" : "text-zinc-400"}`}>
                  All Countries
                </div>
              )}
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => {
                  const isSelected = value.code === c.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleSelect(c)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-lg text-left transition-colors ${
                        isSelected
                          ? dark
                            ? "bg-brand-gold/15 text-brand-gold font-semibold"
                            : "bg-blue-50 text-brand-blue font-semibold"
                          : dark
                          ? "hover:bg-zinc-800/80 text-zinc-200"
                          : "hover:bg-zinc-100 text-zinc-800"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="text-base select-none">{c.flag}</span>
                        <span className="truncate">{c.name}</span>
                      </span>
                      <span className={`text-[11px] font-mono font-medium ml-2 ${isSelected ? "" : dark ? "text-zinc-400" : "text-zinc-500"}`}>
                        {c.dialCode}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className={`text-center py-6 text-xs ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
                  No countries found matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
