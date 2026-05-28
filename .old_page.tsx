"use client";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const services = [
  { icon: "🔍", title: "Reputation Management", desc: "With customized strategies, we improve your online visibility and build trust with reputation management solutions for businesses and individuals.", href: "#" },
  { icon: "⭐", title: "Review Management", desc: "We maintain a careful check on reviews to earn more positive ones and improve your brand trust while removing those that interfere with your reputation.", href: "/review-management" },
  { icon: "🗑️", title: "Content Removal", desc: "Remove harmful content and information that has the potential to harm your hard-earned online reputation to manage your excellent image in the market.", href: "#" },
  { icon: "👁️", title: "Reputation Monitoring", desc: "By monitoring your business, we spot problems before they can harm your business prospects with proactive monitoring solutions designed for your needs.", href: "#" },
  { icon: "🏆", title: "Branding", desc: "We put a spotlight on your achievements, values, online credibility, and digital reputation with customized branding solutions for companies and individuals.", href: "#" },
  { icon: "🛡️", title: "Crisis Management", desc: "A crisis has the potential to damage your company's reputation. We identify threats, streamline communications, and recover quickly with crisis management solutions.", href: "/crisis-management" },
];

const platforms = [
  "Google", "Glassdoor", "Product Reviews", "Twitter", "Ripoff Report",
  "Facebook", "Tripadvisor", "Google Search", "RateMDs", "Trustpilot",
  "Indeed", "Yelp", "BBB", "G2", "Clutch",
];

const caseStudies = [
  { title: "Insurance", desc: "Success stories of building trust and expanding policyholder reach...", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/b-insurance.jpg" },
  { title: "Real Estate", desc: "Success stories of enhancing property brands and driving investments...", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/real-estat-img.jpg" },
  { title: "Politics", desc: "Success stories of driving campaigns and engaging communities...", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/politics.png" },
  { title: "Fast Food Franchise", desc: "Our ORM strategy has transformed the franchise's online reputation...", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/vertfood.jpg" },
  { title: "Celebrity", desc: "Managing an excellent reputation is crucial for a celebrity...", img: "https://buildbrandbetter.io/wp-content/uploads/2025/01/bg-ing-cle.jpg" },
  { title: "Healthcare", desc: "Success stories of advancing healthcare brands and patient trust...", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/healthcare.avif" },
  { title: "Electronic", desc: "Online buzz shapes an electronic brand's reputation and more...", img: "https://buildbrandbetter.io/wp-content/uploads/2025/02/electronic.webp" },
  { title: "Spiritual", desc: "In today's digital age, religious institutions face online challenges...", img: "https://buildbrandbetter.io/wp-content/uploads/2025/02/varansi.jpg" },
];

const clients = [
  { name: "Hitachi", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/hitachi-e1732946923451.png" },
  { name: "FedEx", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/fedx-e1732947682338-1024x333.png" },
  { name: "PeopleStrong", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/peoplestrong-e1732947658280.png" },
  { name: "Caterpillar", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-1-e1732947715601.png" },
  { name: "Hilton", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/hilton-e1736945095221.png" },
  { name: "SpiceJet", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/spicejet-e1732947700458.png" },
  { name: "IKEA", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/IKEA.png" },
  { name: "Sahara", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/images-e1732946630716.png" },
  { name: "H&M", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/hm-1024x676.png" },
  { name: "LPU", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-2-e1732947735848.png" },
  { name: "Radisson", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-3.png" },
  { name: "Cure.fit", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-6.png" },
  { name: "Raymond", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-7.png" },
  { name: "Apollo", img: "https://buildbrandbetter.io/wp-content/uploads/2025/01/Apollo-Pharmacy.png" },
  { name: "Nykaa", img: "https://buildbrandbetter.io/wp-content/uploads/2025/01/Nykaa.png" },
  { name: "Zara", img: "https://buildbrandbetter.io/wp-content/uploads/2024/11/download-1-e1732947825327.jpg" },
];

const mediaLogos = [
  { name: "CNW", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/cnw-1.png" },
  { name: "ANI", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/ANI.png" },
  { name: "ET", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/ET.png" },
  { name: "Times Now", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/TImes-now.png" },
  { name: "Forbes", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/fobes.png" },
  { name: "DNA", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/DNA.png" },
  { name: "CNBC", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/cnbc.png" },
  { name: "Hindustan", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/hindustan.png" },
  { name: "Business Standard", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/BS.png" },
  { name: "India Today", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/india-today.png" },
  { name: "Midday", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/midday.png" },
  { name: "Yahoo", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/yahoo.png" },
  { name: "Outlook", img: "https://buildbrandbetter.io/wp-content/uploads/2024/12/outlook.png" },
];

const faqs = [
  { q: "Will Online Reputation Management Help my Business Grow?", a: "Yes, ORM is an opportunity to grow the business by promoting trust, strengthening search engine results, and boosting conversion rates. Positive presence online attracts customers, increases revenue, and generates loyalty. As the best ORM company in Delhi, we guarantee strong digital presence for long-term success and competitive superiority." },
  { q: "Is there a Service to Remove Google Reviews?", a: "Yes. Specialized ORM services can help remove fake, misleading, or defamatory Google reviews by reporting policy violations directly to Google. At Build Brand Better, we analyze the review, collect supporting evidence, submit professional removal requests, and follow up rigorously to maximize success rates." },
  { q: "Is it Possible to Remove Negative Online Reviews?", a: "Yes. Negative reviews that do not comply with platform guidelines may be deleted by means of efficient flagging and provision of evidence. Build Brand Better works across several sites for deletion and reputation protection efficiently using Google and other platforms." },
  { q: "Why do you need Online Reputation Management Services?", a: "ORM services protect against digital crisis, track mentions online, and publish positive content. They create trust, improve search rates, and make sales in a market dominated by reviews. We protect brands to build long-term trust and development." },
  { q: "How does online reputation management work?", a: "Online Reputation Management works by tracking online mentions, responding to feedback quickly, and creating positive content. We improve brand image, counter negative information, and boost customer trust through strategic online presence management." },
  { q: "How long does it take to see results with ORM services?", a: "You can start seeing positive results from ORM services within 1-3 months with enhanced ranking and sentiment shifts. Major changes are seen between 3-6 months; complete rebuilding is seen between 6-12 months. We achieve beneficial changes through persistent diligence." },
];

const howTos = [
  { title: "What is online reputation management, and why do you need excellent ORM for your business?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New-Project-10-1.png", desc: "All businesses work hard to keep their customers happy, but even with the best customer service, a business is bound to see its reputation take a hit every now and then." },
  { title: "What is personal branding and how do you do it?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New_Project__13_-removebg-preview-2.png", desc: "Personal branding is the process of creating a brand identity for a person or company, establishing your unique value proposition in the market." },
  { title: "Why do celebrities need online reputation management?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New_Project__5_-removebg-preview-2.png", desc: "Celebrity reputation management helps you protect what you have built as your brand. Anything that damages your reputation can put your present and future at risk." },
  { title: "How to manage and respond to a negative customer review?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New_Project__7_-removebg-preview-2.png", desc: "Customer reviews impact business tremendously and the decisions potential customers make to patronize or not patronize your business." },
  { title: "How to remove negative news articles from Google?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New_Project__11_-removebg-preview-2.png", desc: "Understanding your personal or brand's online reputation is becoming increasingly essential as more users move to search engines for research." },
  { title: "How to push down or bury negative search results?", img: "https://buildbrandbetter.io/wp-content/uploads/2023/01/New_Project__4_-removebg-preview-2.png", desc: "Every company is different with different challenges, and they each deal differently with negative or fake search results on Google." },
];

export default function HomePage() {
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"/>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"/>

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              🏆 India's #1 ORM Company · Delhi NCR
            </div>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Rebrand Yourself and Your Business with India's No.1 Online Reputation Management Company in Delhi NCR
            </h1>
            <p className="text-white/70 text-base mb-6 leading-relaxed">
              Manage and Improve your Online Reputation With a top-rated Online Reputation Management Agency.
            </p>
            <ul className="space-y-2 mb-8">
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
              <Link href="#" className="btn-gold">Explore Individual Solutions</Link>
              <Link href="#" className="btn-outline">Explore Business Solutions</Link>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl shadow-2xl p-7">
            <p className="section-label mb-2">Get Free Consultation</p>
            <h2 className="font-heading text-xl font-bold text-brand-dark mb-5">Take Control of Your Online Reputation Today</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FEATURED IN MARQUEE */}
      <div className="bg-white py-8 border-b border-gray-100 overflow-hidden">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Featured In</p>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap w-max">
            {[...mediaLogos, ...mediaLogos].map((m, i) => (
              <img key={i} src={m.img} alt={m.name} className="h-8 w-auto object-contain trust-logo-strip"/>
            ))}
          </div>
        </div>
      </div>

      {/* TAKE CONTROL SECTION */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-2">What We Do</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-dark mb-5">Take Control of Your Online Image</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Build a reputation that speaks for itself. Strengthen your online presence, gain trust, and stay ahead in the digital world effortlessly.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-brand-blue">
                <h3 className="font-bold text-brand-dark mb-2">Suppress Negative Google Results</h3>
                <p className="text-sm text-gray-600 leading-relaxed">A single piece of negative content has the power to destroy the reputation and hamper the online presence of a brand. These contents can be in any form — blogs, forums, reviews, complaints, videos. At Build Brand Better, we help brands clean the negative content and control the damage.</p>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-brand-gold">
                <h3 className="font-bold text-brand-dark mb-2">Impress Everyone</h3>
                <p className="text-sm text-gray-600 leading-relaxed">With Build Brand Better's customized ORM solution, clean your negative image on the search and impress your customers with a positive presence. We help you minimize risk factors on Google and social media, maximize positive visibility, and monitor your reputation.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#" className="btn-gold">Get A Free Consultation</Link>
              <a href="tel:+919971687251" className="btn-blue">Call: +91 99716 87251</a>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2022/12/Build-Brand-gif.gif"
              alt="ORM Visualization"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsBar />

      {/* COMPREHENSIVE ORM SERVICES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Our Services</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-dark">
              Comprehensive ORM Services to Strengthen Your<br className="hidden lg:block"/> Brand & Individual Presence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="service-card group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.href} className="text-brand-blue font-semibold text-sm hover:text-brand-gold transition-colors inline-flex items-center gap-1">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELETE ONLINE CONTENT SECTION */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="text-center">
            <img
              src="https://buildbrandbetter.io/wp-content/uploads/2022/12/Build-Brand-2nd.gif"
              alt="Delete Online Content"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
          <div>
            <p className="section-label mb-2">Content Removal</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">Delete Online Content</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Negative content is hurtful. Using our professional removal process, we will help you get rid of it for good.
            </p>
            <p className="font-semibold text-brand-dark mb-3">We are professionally skilled at removing:</p>
            <ul className="space-y-2 mb-8">
              {["News Articles", "Legal Info", "Blog Posts", "Videos & Images", "Reviews"].map((item) => (
                <li key={item} className="check-item text-sm text-gray-700">
                  <span className="check-icon text-brand-gold text-base">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/remove-negative-results" className="btn-gold">Learn About Removal Services</Link>
          </div>
        </div>
      </section>

      {/* HOW TO SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Knowledge Hub</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">How To...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howTos.map((h) => (
              <div key={h.title} className="flex gap-4 items-start p-5 border border-gray-100 rounded-lg hover:border-brand-blue hover:shadow-md transition-all">
                <img src={h.img} alt="" className="w-14 h-14 object-contain flex-shrink-0"/>
                <div>
                  <h4 className="font-semibold text-sm text-brand-dark mb-1 leading-snug hover:text-brand-blue cursor-pointer transition-colors">{h.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Platforms We Manage</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-3">
              Reliable ORM Solutions Backed by Trusted Platforms and Technology
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm">
              Trusted by over 50 platforms including Google, Facebook, Yelp, and Twitter, our ORM services empower your brand with expert monitoring and management.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {platforms.map((p) => (
              <div key={p} className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-center cursor-pointer transition-all group">
                <p className="text-white/80 group-hover:text-white text-xs font-semibold">{p}</p>
              </div>
            ))}
            <div className="bg-brand-gold/20 hover:bg-brand-gold/30 rounded-lg p-3 text-center cursor-pointer transition-all">
              <p className="text-brand-gold text-xs font-bold">50+ More</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="#" className="btn-gold">Schedule a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Success Stories</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark mb-3">We Have Stories to Inspire You</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Discover the journey behind every success. From groundbreaking strategies to stunning transformations, explore how we've partnered with brands to achieve remarkable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {caseStudies.map((c) => (
              <div key={c.title} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer">
                <div className="overflow-hidden h-40">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark text-sm mb-1 group-hover:text-brand-blue transition-colors">{c.title}</h3>
                  <p className="text-xs text-gray-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="btn-blue">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Common Questions</p>
            <h2 className="font-heading text-3xl font-bold text-brand-dark">You Have Questions? We Have Answers.</h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="py-14 px-4 bg-brand-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label text-yellow-400/80 mb-2">Our Testimonials</p>
            <h2 className="font-heading text-3xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", role: "CEO, TechCorp India", text: "Build Brand Better transformed our online image completely. Negative reviews that were hurting our business are gone, and our Google rankings improved dramatically within 3 months." },
              { name: "Priya Sharma", role: "Real Estate Developer", text: "After facing a PR crisis, their team worked tirelessly to repair our reputation. Professional, discreet, and incredibly effective. Our business is back on track." },
              { name: "Amit Singh", role: "Healthcare Professional", text: "I had false reviews affecting my practice. Their team handled everything professionally and quickly. I highly recommend Build Brand Better for any ORM needs." },
            ].map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="flex text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="tel:+919971687251" className="btn-gold">Request a Call</a>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label mb-2">Trusted By</p>
            <h2 className="font-heading text-2xl font-bold text-brand-dark">Trusted by leading 250+ brands across the world</h2>
          </div>
          <div className="overflow-hidden">
            <div className="ticker-track flex items-center gap-10 w-max py-3">
              {[...clients, ...clients].map((c, i) => (
                <img key={i} src={c.img} alt={c.name} className="h-10 w-auto object-contain trust-logo-strip"/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-80 h-80 bg-brand-gold rounded-full"/>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 rounded-full"/>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="section-label text-yellow-400/80 mb-2">Get Started Today</p>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Online Reputation Management Services
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Don't let negative content define your brand. Reach out today for a free, confidential consultation and discover how we can protect and enhance your online reputation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hotline</p>
                <p className="text-white font-semibold">+91 99716-87251</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-semibold">Dwarka, New Delhi, 110059</p>
              </div>
            </div>
            <a href="tel:+919971687251" className="btn-gold">Call Now</a>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-7">
            <p className="text-white font-bold text-lg mb-5">Send Us a Message</p>
            <ContactForm dark />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
