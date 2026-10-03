import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Reputation Builder Reviews | Top ORM Agency in India",
  description:
    "Read reviews and case studies from clients who have used India's best ORM agency to remove negative content, fake reviews, and repair their digital reputation.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
            Client Success Stories
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            ORM Agency in India Reviews
          </h1>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            See why Online Reputation Builder is trusted by over 1,200 clients globally. 
            From corporate executives to healthcare providers, our 100% legal removal strategies deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              industry: "Healthcare Provider",
              location: "Mumbai",
              quote: "We were hit by a coordinated fake review attack on Google Maps that dropped our rating to 3.2. The team at Online Reputation Builder forensically proved the reviews were policy violations and had 45 of them removed within 3 weeks. Incredible service.",
              rating: 5,
            },
            {
              industry: "Financial Executive",
              location: "Bengaluru",
              quote: "A decade-old news article was affecting my background checks. Other agencies said it was impossible to remove. This ORM agency's legal team successfully de-indexed the URL from Google Search entirely. True professionals.",
              rating: 5,
            },
            {
              industry: "Tech Startup",
              location: "Delhi NCR",
              quote: "Disgruntled ex-employees were weaponizing Glassdoor against us. Online Reputation Builder not only helped remove defamatory reviews but also implemented a proactive strategy that boosted our rating to 4.6.",
              rating: 5,
            },
            {
              industry: "E-commerce Brand",
              location: "Chennai",
              quote: "As the top ORM service provider, they delivered exactly what they promised. We had false consumer forum complaints ranking on page 1 for our brand name. They suppressed them to page 4 within 60 days.",
              rating: 5,
            },
          ].map((review, idx) => (
            <div key={idx} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/30 transition-all">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">"{review.quote}"</p>
              <div className="flex justify-between items-end border-t border-zinc-800 pt-4 mt-auto">
                <div>
                  <p className="text-white font-bold text-sm">{review.industry}</p>
                  <p className="text-zinc-500 text-xs">{review.location}</p>
                </div>
                <div className="text-emerald-400 text-xs font-semibold px-2 py-1 bg-emerald-400/10 rounded">
                  Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-gold text-zinc-950 font-bold text-sm hover:scale-105 transition-transform">
            Request Your Free Confidential Audit
          </Link>
        </div>
      </div>
    </main>
  );
}
