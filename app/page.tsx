"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const services = [
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Reputation Management", desc: "With customized strategies, we improve your online visibility and build trust with reputation management solutions for businesses and individuals.", href: "/reputation-monitoring" },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>, title: "Review Management", desc: "We maintain a careful check on the reviews to earn more positive reviews and improve your brand trust while removing those that interfere with your reputation with cutting-edge review management solutions.", href: "/review-management" },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>, title: "Content Removal", desc: "Remove harmful content and information that has the potential to harm your hard-earned online reputation to manage your excellent image in the market.", href: "#" },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>, title: "Reputation Monitoring", desc: "By monitoring your business, we spot problems before they can harm your business prospects with proactive monitoring solutions designed for your needs.", href: "#" },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, title: "Branding", desc: "We put a spotlight on your achievements, values, online credibility, and digital reputation with customized branding solutions for companies and individuals.", href: "#" },
  { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: "Crisis Management", desc: "A crisis has the potential to damage your company's reputation. We identify threats, streamline communications, and recover quickly with crisis management solutions.", href: "/business/crisis-management" },
];

const platforms = [
  { name: "Google", icon: "https://cdn.simpleicons.org/google/white" },
  { name: "Glassdoor", icon: "https://cdn.simpleicons.org/glassdoor/white" },
  { name: "Product Reviews", icon: "https://ui-avatars.com/api/?name=Product+Reviews&background=2563eb&color=fff&bold=true&format=svg" },
  { name: "Twitter", icon: "https://cdn.simpleicons.org/x/white" },
  // { name: "Ripoff Report", icon: "https://ui-avatars.com/api/?name=Ripoff+Report&background=c2940a&color=fff&bold=true&format=svg" },
  { name: "Ripoff Report", icon: "https://ui-avatars.com/api/?name=Ripoff+Report&background=c2940a&color=fff&bold=true&format=svg" },
  { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook/white" },
  { name: "Tripadvisor", icon: "https://cdn.simpleicons.org/tripadvisor/white" },
  { name: "RateMDs", icon: "https://ui-avatars.com/api/?name=RateMDs&background=090f1c&color=fff&bold=true&format=svg" },
  { name: "Trustpilot", icon: "https://cdn.simpleicons.org/trustpilot/white" },
  { name: "Indeed", icon: "https://cdn.simpleicons.org/indeed/white" },
  { name: "Yelp", icon: "https://cdn.simpleicons.org/yelp/white" },
  { name: "BBB", icon: "https://ui-avatars.com/api/?name=BBB&background=2563eb&color=fff&bold=true&format=svg" },
  { name: "G2", icon: "https://cdn.simpleicons.org/g2/white" },
  { name: "Clutch", icon: "https://static.cdnlogo.com/logos/c/22/clutch-co_800.png" }
];

const caseStudies = [
  { title: "Insurance", desc: "Success stories of building trust and expanding policyholder reach...", color: "bg-blue-50" },
  { title: "Real Estate", desc: "Success stories of enhancing property brands and driving investments...", color: "bg-zinc-50" },
  { title: "Politics", desc: "Success stories of driving campaigns and engaging communities...", color: "bg-blue-50" },
  { title: "Fast Food Franchise", desc: "Our ORM strategy has transformed the franchise's online reputation...", color: "bg-zinc-50" },
  { title: "Celebrity", desc: "Managing an excellent reputation is crucial for a celebrity...", color: "bg-blue-50" },
  { title: "Healthcare", desc: "Success stories of advancing healthcare brands and patient trust...", color: "bg-zinc-50" },
  { title: "Electronic", desc: "Online buzz shapes an electronic brand's reputation and more...", color: "bg-blue-50" },
  { title: "Spiritual", desc: "In today's digital age, religious institutions face online challenges...", color: "bg-zinc-50" },
];

const clients = [
  { name: "Hitachi", img: "/images/logos/hitachi.png" },
  { name: "FedEx", img: "/images/logos/fedex.png" },
  { name: "PeopleStrong", img: "/images/logos/peoplestrong.png" },
  { name: "Caterpillar", img: "/images/logos/caterpillar.png" },
  { name: "Hilton", img: "/images/logos/hilton.png" },
  { name: "SpiceJet", img: "/images/logos/spicejet.png" },
  { name: "IKEA", img: "/images/logos/ikea.png" },
  { name: "Sahara", img: "/images/logos/sahara.png" },
  { name: "H&M", img: "/images/logos/hm.png" },
  { name: "LPU", img: "/images/logos/lpu.png" },
  { name: "Radisson", img: "/images/logos/radisson.png" },
  { name: "Cure.fit", img: "/images/logos/curefit.png" },
  { name: "Raymond", img: "/images/logos/raymond.png" },
  { name: "Apollo", img: "/images/logos/apollo.png" },
  { name: "Nykaa", img: "/images/logos/nykaa.png" },
  { name: "Zara", img: "/images/logos/zara.jpg" },
];

const mediaLogos = [
  { name: "CNW", img: "/images/media/cnw.webp" },
  { name: "ANI", img: "/images/media/ani.png" },
  { name: "ET", img: "/images/media/et.webp" },
  { name: "Times Now", img: "/images/media/timesnow.webp" },
  { name: "Forbes", img: "/images/media/forbes.webp" },
  { name: "DNA", img: "/images/media/dna.png" },
  { name: "CNBC", img: "/images/media/cnbc.webp" },
  { name: "Hindustan", img: "/images/media/hindustan.webp" },
  { name: "Business Standard", img: "/images/media/businessstandard.webp" },
  { name: "India Today", img: "/images/media/indiatoday.webp" },
  { name: "Midday", img: "/images/media/midday.webp" },
  { name: "Yahoo", img: "/images/media/yahoo.webp" },
  { name: "Outlook", img: "/images/media/outlook.webp" },
];

const faqs = [
  { q: "Will Online Reputation Management Help my Business Grow?", a: "Yes, ORM is an opportunity to grow the business by promoting trust, strengthening search engine results, and boosting conversion rates. Positive presence online attracts customers, increases revenue, and generates loyalty. As the best ORM company in Delhi, we guarantee strong digital presence for long-term success and competitive superiority." },
  { q: "Is there a Service to Remove Google Reviews?", a: "Yes. Specialized ORM services can help remove fake, misleading, or defamatory Google reviews by reporting policy violations directly to Google. At Online Reputation Builder, we analyze the review, collect supporting evidence, submit professional removal requests, and follow up rigorously to maximize success rates." },
  { q: "Is it Possible to Remove Negative Online Reviews?", a: "Yes. Negative reviews that do not comply with platform guidelines may be deleted by means of efficient flagging and provision of evidence. Online Reputation Builder works across several sites for deletion and reputation protection efficiently using Google and other platforms." },
  { q: "Why do you need Online Reputation Management Services?", a: "ORM services protect against digital crisis, track mentions online, and publish positive content. They create trust, improve search rates, and make sales in a market dominated by reviews. We protect brands to build long-term trust and development." },
  { q: "How does online reputation management work?", a: "Online Reputation Management works by tracking online mentions, responding to feedback quickly, and creating positive content. We improve brand image, counter negative information, and boost customer trust through strategic online presence management." },
  { q: "How long does it take to see results with ORM services?", a: "You can start seeing positive results from ORM services within 1-3 months with enhanced ranking and sentiment shifts. Major changes are seen between 3-6 months; complete rebuilding is seen between 6-12 months. We achieve beneficial changes through persistent diligence." },
];

const howTos = [
  { category: "STRATEGY", time: "5 MIN READ", title: "What is online reputation management, and why do you need excellent ORM for your business?", desc: "All businesses work hard to keep their customers happy, but even with the best customer service, a business is bound to see its reputation take a hit every now and then.", href: "/blog/what-is-online-reputation-management" },
  { category: "BRANDING", time: "4 MIN READ", title: "What is personal branding and how do you do it?", desc: "Personal branding is the process of creating a brand identity for a person or company, establishing your unique value proposition in the market.", href: "/blog/what-is-personal-branding" },
  { category: "INDIVIDUAL", time: "6 MIN READ", title: "Why do celebrities need online reputation management?", desc: "Celebrity reputation management helps you protect what you have built as your brand. Anything that damages your reputation can put your present and future at risk.", href: "/blog/why-celebrities-need-orm" },
  { category: "REVIEWS", time: "5 MIN READ", title: "How to manage and respond to a negative customer review?", desc: "Customer reviews impact business tremendously and the decisions potential customers make to patronize or not patronize your business.", href: "/blog/how-to-respond-to-negative-customer-reviews" },
  { category: "CONTENT", time: "7 MIN READ", title: "How to remove negative news articles from Google?", desc: "Understanding your personal or brand's online reputation is becoming increasingly essential as more users move to search engines for research.", href: "/blog/how-to-remove-negative-news-articles-from-google" },
  { category: "SEARCH", time: "4 MIN READ", title: "How to push down or bury negative search results?", desc: "Every company is different with different challenges, and they each deal differently with negative or fake search results on Google.", href: "/blog/how-to-push-down-negative-search-results" },
];

export default function HomePage() {
  return (
    <div className="font-body text-zinc-800 bg-white min-h-screen flex flex-col premium-home">
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden bg-zinc-950 premium-section-dark">
        <div className="hero-ambient hero-ambient-blue" />
        <div className="hero-ambient hero-ambient-gold" />
        {/* Background decorative elements - Flat solid colors, no shadows/gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"/>

        <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-14 items-center relative z-10">
          {/* Left */}
          <div className="hero-copy">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider">
              🏆 India's #1 ORM Company · Delhi NCR
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-white leading-[1.04] mb-4 tracking-tight max-w-3xl">
              Rebrand Yourself and Your Business with India's No.1 Online Reputation Management Company
            </h1>
            <p className="text-white/70 text-base lg:text-lg mb-6 leading-relaxed max-w-2xl">
              Manage and Improve your Online Reputation With a top-rated Online Reputation Management Agency.
            </p>
            <ul className="hero-proof-grid mb-8">
              {[
                "Free reputation consultation",
                "Build an impressive online presence with us",
                "Repair Online Reputation",
                "Clean Negative Search Results From Google",
                "Removal / Suppression of Negative Content",
                "Removal / Suppression Negative & Fake Reviews",
                "Ranked as India's top 10 best ORM company in Delhi",
                "1200+ Happy Clients across the globe",
              ].map((item) => (
                <li key={item} className="check-item text-sm text-white/80">
                  <span className="check-icon text-brand-gold text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/individual" className="btn-gold">Explore Individual Solutions</Link>
              <Link href="/business" className="btn-outline">Explore Business Solutions</Link>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="premium-form-card bg-white border border-zinc-200 rounded-xl p-6 md:p-8">
            <div className="form-card-orbit" />
            <p className="section-label mb-2">Get Free Consultation</p>
            <h2 className="font-heading text-xl font-bold text-brand-dark mb-5">Take Control of Your Online Reputation Today</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FEATURED IN MARQUEE */}
      <div className="logo-marquee-shell bg-zinc-50 py-8 border-b border-zinc-200 overflow-hidden">
        <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Featured In Publications</p>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
            {[...mediaLogos, ...mediaLogos].map((m, i) => (
              <img key={i} src={m.img} alt={m.name} className="h-8 w-auto object-contain trust-logo-strip"/>
            ))}
          </div>
        </div>
      </div>

      {/* TAKE CONTROL SECTION */}
<section className="py-16 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Column: Copy Panel */}
          <div className="premium-copy-panel">
            <p className="section-label mb-2">What We Do</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 mb-5 leading-tight">
              Take Control of Your <span className="heading-script text-brand-blue">Online Image</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
              Build a reputation that speaks for itself. Strengthen your online presence, gain trust, and stay ahead in the digital world effortlessly.
            </p>

            <div className="space-y-6 mb-8">
              <div className="premium-info-card bg-zinc-50 rounded-lg p-5 border border-zinc-200 border-l-4 border-l-brand-blue">
                <h3 className="font-bold text-zinc-900 mb-2">Suppress Negative Google Results</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  A single piece of negative content has the power to destroy the reputation and hamper the online presence of a brand. These contents can be in any form - blogs, forums, reviews, complaints, videos. We help brands clean the negative content and control the damage.
                </p>
              </div>
              <div className="premium-info-card bg-zinc-50 rounded-lg p-5 border border-zinc-200 border-l-4 border-l-brand-gold">
                <h3 className="font-bold text-zinc-900 mb-2">Impress Everyone</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  With customized ORM solutions, clean your negative image on the search and impress your customers with a positive presence. We help you minimize risk factors on Google and social media, maximize positive visibility, and monitor your reputation.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-gold">Get A Free Consultation</Link>
              <a href="tel:+918882788412" className="btn-blue">Call: +9188827 88412</a>
            </div>
          </div>

          {/* Right Column: Rebuilt Image Frame */}
          <div className="relative text-center lg:order-none order-2 w-full max-w-md mx-auto mt-8 lg:mt-0">
            
            {/* Main Image Frame (Forced to stay open with aspect-video and minHeight) */}
            <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 p-2 shadow-sm">
              <img
                src="https://ik.imagekit.io/j0xzq9pns/orm_dashboard.png"
                // src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="ORM Dashboard Strategy"
                className="w-full h-auto aspect-video object-cover rounded border border-zinc-200"
                style={{ minHeight: '250px' }} 
              />
            </div>

            {/* Metric 1 - Top Left */}
            <div className="absolute -top-4 -left-4 bg-brand-blue text-white px-4 py-2 rounded-lg shadow-lg text-left z-10 hidden sm:block">
              <strong className="block text-xl">89%</strong>
              <span className="text-xs">Positive visibility lift</span>
            </div>

            {/* Metric 2 - Bottom Right */}
            <div className="absolute -bottom-4 -right-4 bg-zinc-950 text-white px-4 py-2 rounded-lg shadow-lg text-left z-10 hidden sm:block">
              <strong className="block text-xl">97%</strong>
              <span className="text-xs">Review response accuracy</span>
            </div>

            {/* Optional Small Portrait Image - Bottom Left */}
            <div className="absolute -bottom-8 -left-2 w-20 h-20 border-4 border-white rounded-full overflow-hidden shadow-lg bg-zinc-100 hidden sm:block z-10">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80" 
                 alt="Reputation consultation" 
                 className="w-full h-full object-cover" 
               />
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* COMPREHENSIVE ORM SERVICES */}
<section className="relative py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted overflow-hidden z-0">
        {/* Premium Background Accents - Visible by default */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-white border border-zinc-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
              <p className="section-label text-xs font-semibold tracking-wider uppercase text-zinc-600 m-0">Our Services</p>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              Comprehensive ORM Services<br className="hidden lg:block"/> to Strengthen Your <span className="heading-script text-brand-blue relative inline-block">
                Brand &<br className="hidden lg:block"/> Individual
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-blue/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
              </span> Presence
            </h2>
          </div>

          <div className="services-showcase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <div 
                key={s.title} 
                className="group premium-service-card service-showcase-item relative bg-white rounded-2xl p-8 transition-all duration-500 overflow-hidden flex flex-col h-full border border-zinc-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.06)] hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 z-10 hover:z-20" 
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {/* Top Border Gradient - Now partially visible by default, intensifies on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent group-hover:via-brand-blue transition-all duration-500"></div>
                
                {/* Persistent soft gradient background that deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.02] via-transparent to-transparent group-hover:from-brand-blue/[0.06] transition-all duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon shell now has a distinct, premium default state with a soft shadow */}
                  <div className="w-14 h-14 service-icon-shell flex items-center justify-center rounded-xl mb-8 bg-zinc-50 border border-zinc-100/80 shadow-sm text-zinc-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-lg group-hover:shadow-brand-blue/25 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 origin-bottom-left">
                    {s.icon}
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-zinc-900 mb-4 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                    {s.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-1 group-hover:text-zinc-600 transition-colors duration-300">
                    {s.desc}
                  </p>
                  
                  {/* <Link href={s.href} className="mt-auto text-brand-blue font-bold text-sm hover:text-brand-dark transition-colors inline-flex items-center gap-3 group/link w-fit">
                    <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue group-hover/link:after:w-full after:transition-all after:duration-300">
                      Explore Service
                    </span> */}
                    {/* Link icon circle is now visible by default with a soft background */}
                    {/* <span className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:text-white transition-all duration-300 overflow-hidden relative">
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-0 -translate-x-6 absolute opacity-0 group-hover/link:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> */}
                      {/* Default arrow visible, slides out on hover */}
                      {/* <svg className="w-4 h-4 transform group-hover/link:translate-x-6 group-hover/link:opacity-0 transition-all duration-300 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELETE ONLINE CONTENT SECTION */}
      <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="premium-image-stage text-center lg:order-none order-2">
            {/* High-quality Internet Photo replacing AI image */}
            <div className="w-full max-w-md mx-auto border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 p-2 shadow-sm premium-image-frame">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                alt="Content Removal Process"
                className="w-full rounded border border-zinc-200"
              />
            </div>
          </div>
          <div className="premium-copy-panel">
            <p className="section-label mb-2">Content Removal</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-4">Delete <span className="heading-script text-brand-blue">Online Content</span></h2>
            <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
              Negative content is hurtful. Using our professional removal process, we will help you get rid of it for good.
            </p>
            <p className="font-bold text-zinc-900 mb-3 text-sm">We are professionally skilled at removing:</p>
            <ul className="space-y-2 mb-8">
              {["News Articles", "Legal Info", "Blog Posts", "Videos & Images", "Reviews"].map((item) => (
                <li key={item} className="check-item text-sm text-zinc-700">
                  <span className="check-icon text-brand-gold text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/business/remove-negative-results" className="btn-gold">Learn About Removal Services</Link>
          </div>
        </div>
      </section>

      {/* HOW TO SECTION */}
      <section className="py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Knowledge Hub</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">How <span className="heading-script text-brand-blue">To...</span></h2>
          </div>
          <div className="knowledge-layout">
            {howTos.map((h, i) => (
              <Link key={h.title} href={h.href} className="group premium-article-card knowledge-item flex flex-col p-7 bg-white border border-zinc-200 rounded-xl hover:border-brand-gold transition-colors h-full cursor-pointer">
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-[0.65rem] font-bold tracking-wider uppercase rounded-sm group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors">{h.category}</span>
                  <span className="text-zinc-400 text-[0.65rem] font-bold tracking-wider">{h.time}</span>
                </div>
                <h4 className="font-heading font-bold text-lg text-zinc-900 mb-3 leading-snug group-hover:text-brand-gold transition-colors">{h.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">{h.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-zinc-900 font-bold text-[0.7rem] uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  Read Article
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 lg:py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden premium-section-dark">
        <div className="platform-grid-glow" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <p className="section-label mb-2 text-brand-gold">Platforms We Manage</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-3">
              Reliable ORM Solutions Backed<br className="hidden lg:block"/> by <span className="heading-script text-brand-gold">Trusted Platforms</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
              Trusted by over 50 platforms including Google, Facebook, Yelp, and Twitter, our ORM services empower your brand with expert monitoring and management.
            </p>
          </div>
          <div className="premium-platform-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {platforms.map((p) => (
              <div key={p.name} className="group platform-tile bg-zinc-900 border border-zinc-800 hover:border-brand-blue rounded-lg p-3 flex flex-col items-center justify-center min-h-[92px] cursor-pointer transition-colors">
                <img
  src={p.icon}
  alt={p.name}
  className={`mb-2 opacity-85 platform-icon ${
    p.name === "Clutch"
      ? "w-16 h-16 -mt-4"
      : "w-8 h-8"
  }`}
/>
                <p
  className={`text-zinc-300 text-[0.62rem] font-bold uppercase tracking-wider text-center leading-tight ${
    p.name === "Clutch" ? "-mt-5" : ""
  }`}
>
  {p.name}
</p>
              </div>
            ))}
            <div className="platform-tile bg-brand-gold/10 border border-brand-gold/30 hover:bg-brand-gold/20 rounded-lg p-3 flex items-center justify-center min-h-[92px] cursor-pointer transition-colors">
              <p className="text-brand-gold text-xs font-bold text-center">50+ More</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="#contact" className="btn-gold">Schedule a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 lg:py-24 px-4 bg-white border-b border-zinc-200 premium-section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Success Stories</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900 mb-3">We Have Stories to <span className="heading-script text-brand-blue">Inspire You</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm">
              Discover the journey behind every success. From groundbreaking strategies to stunning transformations, explore how we've partnered with brands to achieve remarkable results.
            </p>
          </div>
          <div className="case-study-board">
            {caseStudies.map((c) => (
              <div key={c.title} className="group premium-case-card case-study-item rounded-xl overflow-hidden border border-zinc-200 bg-white hover:border-brand-blue transition-colors cursor-pointer flex flex-col">
                <div className={`case-visual h-32 w-full flex flex-col items-center justify-center border-b border-zinc-200 ${c.color}`}>
                   <span className="font-heading font-bold text-lg text-zinc-800 opacity-60 tracking-wider uppercase">{c.title}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-zinc-900 text-sm mb-1.5">{c.title} Case Study</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/solution" className="btn-blue">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 px-4 bg-zinc-50 border-b border-zinc-200 premium-section-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-zinc-900">You Have Questions?<br/><span className="heading-script text-brand-blue">We Have Answers.</span></h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="py-20 lg:py-24 px-4 bg-zinc-950 relative overflow-hidden border-b border-zinc-900 premium-section-dark">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="section-label text-brand-gold mb-2">Our Testimonials</p>
            <h2 className="font-heading text-3xl font-bold text-white">What Our <span className="heading-script text-brand-gold">Clients Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", role: "CEO, TechCorp India", text: "Online Reputation Builder transformed our online image completely. Negative reviews that were hurting our business are gone, and our Google rankings improved dramatically within 3 months." },
              { name: "Priya Sharma", role: "Real Estate Developer", text: "After facing a PR crisis, their team worked tirelessly to repair our reputation. Professional, discreet, and incredibly effective. Our business is back on track." },
              { name: "Amit Singh", role: "Healthcare Professional", text: "I had false reviews affecting my practice. Their team handled everything professionally and quickly. I highly recommend Online Reputation Builder for any ORM needs." },
            ].map((t) => (
              <div key={t.name} className="premium-testimonial-card bg-zinc-900 rounded-xl p-7 border border-zinc-800">
                <div className="flex text-brand-gold text-sm mb-4">★★★★★</div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:+918882788412" className="btn-gold">Request a Call</a>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="logo-marquee-shell py-16 px-4 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label mb-2">Trusted By</p>
            <h2 className="font-heading text-2xl font-bold text-zinc-900">Trusted by leading 250+ brands across the world</h2>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max py-3">
              {[...clients, ...clients].map((c, i) => (
                 <img key={i} src={c.img} alt={c.name} className="h-10 w-auto object-contain trust-logo-strip"/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20 lg:py-24 px-4 bg-zinc-900 relative overflow-hidden premium-section-dark">
        {/* Flat shapes instead of gradients */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-brand-gold/5 rounded-full"/>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-blue/5 rounded-full"/>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="premium-copy-panel-dark">
            <p className="section-label text-brand-gold mb-2">Get Started Today</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-5">
              Online Reputation<br className="hidden lg:block"/> <span className="heading-script text-brand-gold">Management Services</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
              Don't let negative content define your brand. Reach out today for a free, confidential consultation and discover how we can protect and enhance your online reputation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Hotline</p>
                <p className="text-white font-bold">+9188827 88412</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-bold">Shantipally, Behala, Kolkata - 700060</p>
              </div>
            </div>
            <a href="tel:+918882788412" className="btn-gold">Call Now</a>
          </div>
          <div className="premium-form-card dark bg-zinc-950 border border-zinc-800 rounded-xl p-7">
            <p className="text-white font-bold text-lg mb-5">Send Us a Message</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
