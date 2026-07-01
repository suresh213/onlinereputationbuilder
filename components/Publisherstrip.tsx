"use client";

/**
 * PublisherStrip — infinite sliding marquee with inline SVG logos.
 * No external image requests. Pauses on hover.
 */

const publishers = [
  {
    name: "Bloomberg",
    svg: (
      <svg width="120" height="24" viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="white" letterSpacing="-0.5">Bloomberg</text>
      </svg>
    ),
  },
  {
    name: "Forbes",
    svg: (
      <svg width="80" height="24" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Georgia, serif" fontSize="30" fontWeight="700" fill="white" fontStyle="italic">Forbes</text>
      </svg>
    ),
  },
  {
    name: "Reuters",
    svg: (
      <svg width="87" height="24" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="400" fill="white" letterSpacing="1">REUTERS</text>
      </svg>
    ),
  },
  {
    name: "CNN",
    svg: (
      <svg width="90" height="24" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <rect x="0" y="0" width="88" height="34" rx="4" fill="white" fillOpacity="0.15"/>
        <text x="10" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fill="white">CNN</text>
      </svg>
    ),
  },
  {
    name: "MarketWatch",
    svg: (
      <svg width="127" height="24" viewBox="0 0 190 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="white">MarketWatch</text>
      </svg>
    ),
  },
  {
    name: "The Indian Express",
    svg: (
      <svg width="153" height="24" viewBox="0 0 230 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="white" letterSpacing="2">THE</text>
        <text x="0" y="32" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="white">Indian Express</text>
      </svg>
    ),
  },
  {
    name: "Outlook",
    svg: (
      <svg width="93" height="24" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="white" fontStyle="italic">Outlook</text>
      </svg>
    ),
  },
  {
    name: "Business Line",
    svg: (
      <svg width="133" height="24" viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="white" letterSpacing="2">THE HINDU</text>
        <text x="0" y="32" fontFamily="Georgia, serif" fontSize="19" fontWeight="700" fill="white">BusinessLine</text>
      </svg>
    ),
  },
  {
    name: "People",
    svg: (
      <svg width="73" height="24" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Georgia, serif" fontSize="28" fontWeight="900" fill="white" letterSpacing="1">PEOPLE</text>
      </svg>
    ),
  },
  {
    name: "Silicon India",
    svg: (
      <svg width="113" height="24" viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <text x="0" y="27" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="white">siliconindia</text>
      </svg>
    ),
  },
];

export default function PublisherStrip() {
  const items = [...publishers, ...publishers];

  return (
    <section className="py-8 bg-zinc-900 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-zinc-500 text-[0.65rem] uppercase tracking-[0.2em] font-bold">
          As Featured In
        </p>
      </div>

      {/* Marquee track */}
      <div className="group relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-900 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-900 to-transparent" />

        <div
          className="flex items-center w-max"
          style={{ animation: "publisher-marquee 35s linear infinite" }}
        >
          {items.map((pub, i) => (
            <div
              key={`${pub.name}-${i}`}
              className="flex items-center justify-center flex-shrink-0 mx-10 opacity-40 hover:opacity-90 transition-opacity duration-300 cursor-default"
            >
              {pub.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes publisher-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .group:hover > div > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}