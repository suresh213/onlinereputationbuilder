"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { blogPosts, BlogPost } from "./data";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Strategy", "Removal", "Branding", "Industry", "Comparison", "Crisis", "Reviews", "Individual", "Content", "Search"];
  
  // Find featured post
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  
  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory === "All") return true;
    return post.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* Hero Header */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark border-b border-zinc-800/50 py-16 lg:py-20">
        <div className="hero-ambient hero-ambient-blue opacity-50 top-[-10%] right-[-5%]" />
        <div className="hero-ambient hero-ambient-gold opacity-30 bottom-[-10%] left-[-10%]" />
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.67rem] font-bold mb-6 uppercase tracking-[0.15em] border-brand-gold/30 bg-brand-gold/10 text-brand-gold shadow-[0_0_15px_rgba(194,148,10,0.15)] mx-auto">
            📖 Knowledge Base & Resources
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 tracking-tight">
            Our Reputation <span className="text-gradient-gold">Insight Center</span>
          </h1>
          <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Expert manuals, industry strategies, and search engine insights to help you build, repair, and defend your online presence.
          </p>
        </div>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="py-12 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4">
            <p className="section-label mb-6">Featured Article</p>
            <div className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:border-brand-blue/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-zinc-100">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 mb-4">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
                  <span className="text-xs font-bold text-zinc-700">By {featuredPost.author}</span>
                  <Link href={`/blog/${featuredPost.slug}`} className="btn-blue px-6 py-2.5 shadow-sm text-xs font-bold">
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid Section */}
      <section className="py-20 lg:py-28 px-4 bg-white relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center border-b border-zinc-100 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`logo-badge-pill border transition-all ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "bg-brand-blue border-brand-blue text-white hover:bg-brand-blue hover:text-white"
                    : "bg-white border-zinc-200 text-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div 
                key={post.slug} 
                className="group premium-article-card bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:border-brand-blue/30 flex flex-col h-full hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.1)] border-t-4 border-t-zinc-200 hover:border-t-brand-blue transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-white text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[0.65rem] font-bold text-zinc-400 mb-3 uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-zinc-900 mb-3 group-hover:text-brand-blue transition-colors leading-tight">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6">{post.excerpt}</p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-zinc-500">By {post.author}</span>
                    <Link href={`/blog/${post.slug}`} className="text-brand-blue font-bold text-xs hover:text-brand-dark transition-colors inline-flex items-center gap-1 group/link">
                      Read More
                      <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-zinc-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-24 px-4 bg-zinc-950 relative overflow-hidden premium-section-dark border-t-4 border-brand-gold">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-3">Audit Your Digital Footprint</p>
            <h2 className="font-heading text-3xl lg:text-[2.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Get a free, confidential reputation review
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 text-[0.95rem] max-w-lg">
              Is negative content affecting your brand or name? Our ORM team offers free consultations. Share your situation securely, and we will formulate a personalized removal and monitoring roadmap.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {["Confidential review", "100% data security", "Tailored suppress plans", "Competitor analysis"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 rounded-3xl blur-2xl pointer-events-none opacity-50" />
            <div className="relative glass-panel bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <p className="text-white font-heading font-bold text-xl mb-2">Request an ORM Audit</p>
              <p className="text-zinc-500 text-sm mb-6">Our experts respond within 24 hours on business days.</p>
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
