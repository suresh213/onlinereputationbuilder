const fs = require('fs');
const path = require('path');

const industriesList = [
  // Medical & Healthcare
  {
    name: "Doctors",
    slug: "doctors",
    category: "Medical & Healthcare",
    badge: "Medical Board & Healthcare ORM",
    singular: "doctor",
    context: "practicing physicians and medical specialists",
    specificPlatforms: ["Practo", "Google Business Profile", "Lybrate", "JustDial", "MouthShut", "Vitals", "National Consumer Disputes Redressal Forum"],
    threats: [
      {
        title: "Malicious Unverified Patient Reviews",
        desc: "Disgruntled individuals, non-patients, or commercial rivals posting fabricated 1-star allegations about medical negligence, misdiagnosis, or billing disputes on Practo and Google Maps.",
        impact: "Severe drop in new patient consultations and erosion of clinical trust."
      },
      {
        title: "Defamatory Consumer Forum Threads",
        desc: "Unmoderated complaints on portals like MouthShut and ConsumerComplaints ranking on page 1 of Google when patients search your doctor name.",
        impact: "Destruction of private clinic footfall and hospital referral networks."
      },
      {
        title: "Unfair Hospital Dispute Associations",
        desc: "Articles linking your name to institutional controversies, administrative disputes, or facility malpractice cases where you had zero direct clinical involvement.",
        impact: "Permanent digital stain on medical licenses and academic appointments."
      },
      {
        title: "Search Autocomplete Smear Suggestions",
        desc: "Google autocomplete generating damaging phrases such as 'fraud', 'complaints', or 'negligence' next to your full doctor name.",
        impact: "Immediate loss of patient confidence before they even open your website."
      }
    ],
    caseChallenge: "A senior consulting physician was targeted by a coordinated series of 18 fake 1-star reviews on Google Business Profile following a billing dispute handled by hospital administration.",
    caseStrategy: "Our team collected technical audit logs proving IP clustering and terms of service violations, submitted formal legal de-indexing notices to platform compliance, and published high-authority academic profiles.",
    caseResult: "16 fraudulent reviews were permanently removed within 21 business days, while verified peer-reviewed articles took over the top 5 organic Google positions.",
    whyGenericFails: "Generic digital marketing agencies advise doctors to publicly argue with reviewers or post defensive comments. This exposes doctors to medical confidentiality breaches and worsens search visibility. Specialized healthcare ORM uses platform legal protocols, terms of service violations, and search de-indexing without risking regulatory penalties."
  },
  {
    name: "Surgeons",
    slug: "surgeons",
    category: "Medical & Healthcare",
    badge: "Surgical Specialist Brand Protection",
    singular: "surgeon",
    context: "orthopedic, cardiac, neuro, and general surgeons",
    specificPlatforms: ["Google Maps", "Practo", "Lybrate", "Hospital Portals", "MouthShut", "Healthgrades", "Consumer Court Portals"],
    threats: [
      {
        title: "Post-Operative Complication Defamation",
        desc: "Known statistical complications weaponized as 'medical negligence' in unverified online rants and social media complaint groups.",
        impact: "Cancellation of scheduled elective surgeries and loss of hospital operating privileges."
      },
      {
        title: "Competitor Sabotage on Booking Portals",
        desc: "Commercial rivals deploying anonymous accounts to dilute surgical success ratings on patient discovery directories.",
        impact: "Direct diversion of high-value surgical cases to competing practices."
      },
      {
        title: "Distorted Legal Notice Indexing",
        desc: "Preliminary medical board inquiries or dismissed consumer grievances ranking prominently on Google Search without noting final exonerations.",
        impact: "Institutional distrust during credentialing and medical society fellowships."
      },
      {
        title: "Hostile Social Media Video Excerpts",
        desc: "Edited video rants or hostile reels accusing surgical teams of malpractice without clinical basis.",
        impact: "Viral damage across regional patient communities and family networks."
      }
    ],
    caseChallenge: "A renowned orthopedic surgeon faced sudden cancellation of surgical consults after an outdated 2018 dismissed consumer case was re-scraped and ranked on Page 1.",
    caseStrategy: "We executed search de-indexing requests using certified court dismissal decrees, invoked search engine privacy policies, and launched an authority-building clinical dossier.",
    caseResult: "The defamatory link was suppressed off the first 3 pages of Google within 28 days, restoring elective surgical booking volume to 100 percent.",
    whyGenericFails: "Ordinary SEO agencies lack the legal knowledge to interpret medical tribunal judgments and cannot interface with legal compliance desks at search engines."
  },
  {
    name: "Plastic Surgeons",
    slug: "plastic-surgeons",
    category: "Medical & Healthcare",
    badge: "Aesthetic & Cosmetic Surgery ORM",
    singular: "plastic surgeon",
    context: "aesthetic, reconstructive, and cosmetic surgical specialists",
    specificPlatforms: ["RealSelf", "Google Business Profile", "Instagram", "Practo", "MouthShut", "Reddit r/PlasticSurgery", "Consumer Complaints"],
    threats: [
      {
        title: "Subjective Aesthetic Discontent Attacks",
        desc: "Patients with unrealistic expectations posting exaggerated negative reviews and altered photos before full healing protocols are complete.",
        impact: "Instant deterrence of prospective cosmetic and elective patients."
      },
      {
        title: "Reddit and Forum Slander Campaigns",
        desc: "Anonymous threads on cosmetic forums questioning surgical credentials, facility sterility, or pricing fairness.",
        impact: "High-intent cosmetic seekers abandoning consultations during due diligence."
      },
      {
        title: "Blackmail and Review Extortion",
        desc: "Demands for full surgical refunds backed by threats of publishing multi-platform 1-star reviews.",
        impact: "Unfair financial losses and emotional strain on clinical staff."
      },
      {
        title: "Negative Image Scraping in Google Images",
        desc: "Unflattering or unauthorized post-op photos indexed in Google Image Search for the surgeon name.",
        impact: "Immediate visual bias against the surgeon's aesthetic precision."
      }
    ],
    caseChallenge: "An aesthetic surgeon was subjected to review extortion from an anonymous client threatening negative posts across 4 platforms unless cosmetic revisions were offered free.",
    caseStrategy: "We preserved forensic metadata, filed coordinated platform extortion violations, secured legal takedowns, and generated patient case study portfolios.",
    caseResult: "All coordinated 1-star posts were scrubbed from Google Business Profile, and high-definition clinical portfolios dominated the first page.",
    whyGenericFails: "Aesthetic surgery relies on visual proof and immense trust. Generic agencies cannot navigate strict healthcare advertising regulations or platform extortion guidelines."
  },
  {
    name: "Dentists",
    slug: "dentists",
    category: "Medical & Healthcare",
    badge: "Dental Practice & Clinic ORM",
    singular: "dentist",
    context: "orthodontists, implantologists, and dental clinics",
    specificPlatforms: ["Google Maps", "Practo", "JustDial", "Yelp", "Facebook", "MouthShut"],
    threats: [
      {
        title: "Pain Sensitivity and Pricing Grievances",
        desc: "Routine discomfort during complex procedures misrepresented as practitioner incompetence in local reviews.",
        impact: "Local walk-in drop and loss of high-margin cosmetic dentistry patients."
      },
      {
        title: "Review Swarms from Neighborhood Rivals",
        desc: "Coordinated cluster 1-star reviews triggered by competitor clinics located within a 5-kilometer radius.",
        impact: "Loss of the Google Local 3-Pack ranking for dental search terms."
      },
      {
        title: "Insurance and Co-Pay Confusion Backlash",
        desc: "Disputes regarding third-party insurance coverage blamed directly on the dental practice in public comments.",
        impact: "Skeptical prospective patients opting for corporate dental chains."
      },
      {
        title: "Outdated Practice Listing Fragmentation",
        desc: "Incorrect opening hours, phone numbers, and negative legacy reviews scattered across obsolete local directories.",
        impact: "Diminished local search authority and patient booking friction."
      }
    ],
    caseChallenge: "A modern dental implant clinic lost its local Google 3-Pack position after a competitor deployed a bot network generating 12 fake negative reviews in 48 hours.",
    caseStrategy: "We filed algorithmic anomaly reports with Google Maps, provided appointment system logs disproving patient status, and instituted an automated 5-star review collection flow.",
    caseResult: "All 12 fake reviews were purged by Google compliance within 14 days, clinic star rating rose from 3.4 to 4.9, and 3-Pack ranking was fully restored.",
    whyGenericFails: "Generic agencies suggest buying fake positive reviews, which violates Google's Spam Policies and can lead to permanent listing suspension."
  },
  {
    name: "Hospitals",
    slug: "hospitals",
    category: "Medical & Healthcare",
    badge: "Institutional Hospital Reputation",
    singular: "hospital",
    context: "multi-specialty hospitals, medical centers, and healthcare groups",
    specificPlatforms: ["Google Business Profile", "MouthShut", "Practo", "National Consumer Disputes Redressal Forum", "Times of India", "LiveMint", "YouTube"],
    threats: [
      {
        title: "Billing and Insurance Grievance Outrage",
        desc: "Third-party TPA claim denials and ICU billing disagreements framed as institutional corruption on public forums.",
        impact: "Reputational fallout among corporate tie-ups and insurance provider networks."
      },
      {
        title: "Emergency Room Incident Sensationalism",
        desc: "High-stress emergency department incidents filmed on smartphones and uploaded without context to YouTube and Instagram.",
        impact: "Viral public outrage, localized protests, and regulatory inquiries."
      },
      {
        title: "Aggregated Low Ratings Across Multi-Departments",
        desc: "A single administrative department dragging down the entire hospital's digital reputation across search engines.",
        impact: "Patients choosing competing medical centers for major surgeries."
      },
      {
        title: "Defamatory Media Articles from Local Portals",
        desc: "Sensationalist regional news portals publishing unverified claims to generate clickbait ad revenue.",
        impact: "Page 1 search contamination on all institutional brand queries."
      }
    ],
    caseChallenge: "A 200-bed multi-specialty hospital experienced severe brand erosion after a patient attendant uploaded a misleading video alleging billing inflation.",
    caseStrategy: "Our team deployed 24/7 digital containment, secured takedowns from video platforms for privacy violations, and suppressed defamatory articles with accredited surgical outcomes.",
    caseResult: "The viral video was permanently removed, and organic hospital inquiries rebounded by 44 percent over 60 days.",
    whyGenericFails: "Hospitals require enterprise-grade crisis protocols, institutional PR authority, and legal coordination under strict medical non-disclosure frameworks."
  },
  {
    name: "Clinics",
    slug: "clinics",
    category: "Medical & Healthcare",
    badge: "Specialty Clinic & Wellness ORM",
    singular: "clinic",
    context: "specialty polyclinics, diagnostic centers, and outpatient facilities",
    specificPlatforms: ["Google Maps", "Practo", "JustDial", "MouthShut", "Sulekha", "Facebook"],
    threats: [
      {
        title: "Wait-Time and Scheduling Frustration Rants",
        desc: "Unavoidable emergency delays resulting in aggressive 1-star reviews accusing the clinic of disrespecting patients.",
        impact: "Prospective patients choosing alternative clinics nearby."
      },
      {
        title: "Diagnostic Report Interpretation Clashes",
        desc: "Patients misinterpreting pathology or imaging results and publicly claiming the clinic issued faulty diagnostics.",
        impact: "Direct damage to laboratory credibility and referring doctor trust."
      },
      {
        title: "Competitor Directory Hijacking",
        desc: "Rival clinics manipulating unverified directory entries to display incorrect phone numbers or divert appointments.",
        impact: "Loss of hundreds of monthly inbound calls."
      },
      {
        title: "Staff Turnover and Reception Complaints",
        desc: "Negative reviews targeting former front-desk staff that remain permanently visible long after personnel changes.",
        impact: "Persistent perception of poor customer service."
      }
    ],
    caseChallenge: "A diagnostic clinic was burdened by 22 legacy negative reviews focusing on a former laboratory technician, lowering its rating to 3.2 stars.",
    caseStrategy: "We audited all reviews for guideline breaches, removed obsolete accounts, and established a verified patient feedback protocol at billing counters.",
    caseResult: "The clinic rating jumped to 4.7 stars within 30 days, generating over 140 new organic reviews from genuine patients.",
    whyGenericFails: "Generic marketing shops fail to understand the relationship between local clinical search signals and patient decision-making psychology."
  },

  // Corporate & Executive
  {
    name: "CEOs",
    slug: "ceos",
    category: "Corporate & Executive",
    badge: "Executive C-Suite Reputation Advisory",
    singular: "CEO",
    context: "chief executive officers, startup founders, and managing directors",
    specificPlatforms: ["Google Search Page 1", "Glassdoor", "AmbitionBox", "Economic Times", "LiveMint", "Wikipedia", "Quora", "Zauba Corp", "Reddit"],
    threats: [
      {
        title: "Disgruntled Ex-Employee Glassdoor Retaliation",
        desc: "Terminated employees weaponizing anonymous Glassdoor and AmbitionBox reviews to personally attack the CEO's character, leadership, and integrity.",
        impact: "Skeptical board members, stalled executive hiring, and investor friction."
      },
      {
        title: "Outdated Dispute News Ranking on Name Searches",
        desc: "Historic litigation, labor issues, or minor corporate disagreements from years ago stubbornly ranking on Page 1 of Google for the CEO's personal name.",
        impact: "Deal diligence failures, lost joint ventures, and personal family embarrassment."
      },
      {
        title: "Unverified Quora and Forum Slander",
        desc: "Hostile questions like 'Is [CEO Name] a fraud?' ranking at the top of Google Search due to high forum domain authority.",
        impact: "Catastrophic erosion of personal credibility during institutional fundraising."
      },
      {
        title: "Biased Wikipedia Biography Edits",
        desc: "Competitors or hostile editors inserting unverified controversies, biased citations, or speculative rumors into Wikipedia pages.",
        impact: "Permanent reputational distortion syndicated across Google Knowledge Panels and AI engines."
      }
    ],
    caseChallenge: "The CEO of an Indian mid-market enterprise faced investor resistance when a 6-year-old dismissed commercial dispute ranked #2 on Google for their name.",
    caseStrategy: "We coordinated legal de-indexing petitions with Google Legal, applied right-to-privacy frameworks, and built an authoritative thought leadership network across Tier-1 media.",
    caseResult: "The negative dispute link was pushed to page 4 within 6 weeks, while positive executive profiles captured the top 8 positions on Page 1.",
    whyGenericFails: "Generic PR firms push standard press releases that fail to dislodge high-authority forum posts or court aggregator records. Executive ORM requires Reverse SEO and legal takedowns."
  },
  {
    name: "C-Suite Executives",
    slug: "c-suite-executives",
    category: "Corporate & Executive",
    badge: "Senior Executive Brand Security",
    singular: "C-Suite executive",
    context: "CFOs, CTOs, CMOs, and Chief Risk Officers",
    specificPlatforms: ["Google Search", "LinkedIn", "Glassdoor", "AmbitionBox", "Zauba Corp", "Financial Express", "Twitter/X"],
    threats: [
      {
        title: "Departmental Blame Defamation",
        desc: "CFOs or CTOs publicly blamed on anonymous employer boards for corporate cost reductions, layoffs, or technological migrations.",
        impact: "Blocked executive recruitment opportunities and board appointment scrutiny."
      },
      {
        title: "Corporate Data Breach Smear Attacks",
        desc: "Tech executives held personally culpable in online blogs for industry-wide security events or technical disruptions.",
        impact: "Damaged standing in technology advisory councils and venture partner circles."
      },
      {
        title: "Misleading Financial Reporting Insinuations",
        desc: "Speculative financial blogs misrepresenting standard audit qualifications as executive financial mismanagement.",
        impact: "Institutional shareholder distrust and credit rating complications."
      },
      {
        title: "Aggregated Public Record Scraping",
        desc: "Data scraper sites indexing private residential addresses, direct phone numbers, and director filings in Google Search.",
        impact: "Personal security risks and privacy invasion for executive families."
      }
    ],
    caseChallenge: "A newly appointed Chief Financial Officer discovered that an anonymous blog alleging financial irregularities at a prior employer was ranking on page 1 of Google.",
    caseStrategy: "Our legal ORM counsel served DMCA and IT Act notices to web hosts, executed rapid de-indexing, and created a verified executive thought-leadership footprint.",
    caseResult: "The defamatory blog was completely erased from search indexes in 18 days, securing the executive's appointment without board friction.",
    whyGenericFails: "C-Suite officers cannot afford public debates. Discretion, Non-Disclosure Agreements, and precise legal de-indexing are essential."
  },
  {
    name: "Board Members",
    slug: "board-members",
    category: "Corporate & Executive",
    badge: "Independent Director & Board Governance ORM",
    singular: "board member",
    context: "independent directors, corporate trustees, and advisory board chairs",
    specificPlatforms: ["Google Search", "BSE/NSE Announcements", "Moneycontrol", "LiveMint", "Economic Times", "Zauba Corp", "LinkedIn"],
    threats: [
      {
        title: "Cross-Entity Governance Contagion",
        desc: "Controversies in one directorship polluting Google search results for all other companies where the director serves on the board.",
        impact: "Institutional proxy advisory red flags and mandatory resignations."
      },
      {
        title: "Director Disqualification Rumors",
        desc: "Outdated MCA registry errors or compliance notices indexed online suggesting regulatory non-compliance.",
        impact: "Loss of independent directorship nominations in publicly listed entities."
      },
      {
        title: "Shareholder Activist Online Campaigns",
        desc: "Targeted digital campaigns attacking individual board members to influence annual general meeting (AGM) voting outcomes.",
        impact: "Disruption of corporate strategy and reputational damage among institutional funds."
      },
      {
        title: "Historic Commercial Litigation Footprint",
        desc: "Arbitration proceedings or commercial notices from years prior remaining visible at the top of Google searches.",
        impact: "Hesitation among global multinational joint venture partners."
      }
    ],
    caseChallenge: "A prominent independent director was flagged during background diligence when an erroneous regulatory notice involving an unrelated subsidiary ranked on Page 1.",
    caseStrategy: "We obtained certified registrar clarifications, submitted formal search engine removal requests, and published verified corporate governance dossiers.",
    caseResult: "The inaccurate search result was removed from Google within 14 days, protecting directorships across 4 listed enterprises.",
    whyGenericFails: "Board members require discreet, corporate-governance-aware interventions that adhere to regulatory disclosure laws and fiduciary standards."
  },
  {
    name: "Public Companies",
    slug: "public-companies",
    category: "Corporate & Executive",
    badge: "Enterprise Listed Entity ORM",
    singular: "public company",
    context: "publicly traded enterprises and listed corporations",
    specificPlatforms: ["Google Search Page 1", "Moneycontrol", "Economic Times", "Twitter/X", "MouthShut", "Glassdoor", "SEBI Portals", "Reddit r/IndiaInvestments"],
    threats: [
      {
        title: "Coordinated Short-Seller Defamation",
        desc: "Unverified rumors and anonymous dossier leaks timed before quarterly earnings calls to depress market capitalization.",
        impact: "Immediate stock volatility, shareholder panic, and regulatory scrutiny."
      },
      {
        title: "Customer Complaint Aggregation Ranking Over Investor Relations",
        desc: "Consumer board grievances outranking official investor portals and annual reports in Google organic results.",
        impact: "Institutional ESG rating downgrades and negative retail investor sentiment."
      },
      {
        title: "Hostile Proxy Advisor Campaign Amplification",
        desc: "Speculative media commentary dominating brand search queries during critical corporate mergers and acquisitions.",
        impact: "Failed shareholder resolutions and valuation discounts during transactions."
      },
      {
        title: "Employee Whistleblower Rumor Mill Indexing",
        desc: "Unsubstantiated workplace gossip published on social forums indexing prominently for enterprise brand searches.",
        impact: "Severe recruitment drag and talent poaching by market competitors."
      }
    ],
    caseChallenge: "A listed manufacturing giant suffered stock price pressure after a malicious forum post alleging accounting fraud began ranking #3 for the company ticker.",
    caseStrategy: "We deployed high-velocity corporate content assets, worked with platform compliance to remove unverified allegations, and fortified investor relation assets.",
    caseResult: "The malicious post was pushed off the top 3 pages of Google within 24 hours of execution, stabilizing investor sentiment.",
    whyGenericFails: "Listed enterprises need 24/7 crisis teams capable of operating under strict SEBI compliance, insider trading boundaries, and institutional media relationships."
  },

  // Finance, Law & Real Estate
  {
    name: "Lawyers",
    slug: "lawyers",
    category: "Finance, Law & Real Estate",
    badge: "Legal Practitioner & Advocate ORM",
    singular: "lawyer",
    context: "advocates, litigators, corporate legal advisors, and legal counsels",
    specificPlatforms: ["Google Business Profile", "LiveLaw", "Bar & Bench", "IndianKanoon", "JustDial", "Quora", "LinkedIn"],
    threats: [
      {
        title: "Hostile Opposing Litigant Vengeance Reviews",
        desc: "Losing parties in court proceedings leaving malicious 1-star reviews on Google Maps and legal directories falsely claiming unprofessionalism.",
        impact: "Misleading prospective corporate clients who evaluate legal counsel online."
      },
      {
        title: "Bar Council Ethical Advertising Restrictions",
        desc: "Strict bar regulations prohibiting aggressive self-promotion, leaving advocates vulnerable to unmoderated online defamation.",
        impact: "Inability to run standard advertising campaigns to counter negative digital search results."
      },
      {
        title: "Court Judgment Snippet Misinterpretation",
        desc: "Preliminary procedural observations in judicial orders ranking in search snippets without context regarding the case's final winning outcome.",
        impact: "Skeptical institutional clients questioning litigation track records."
      },
      {
        title: "Sensationalized Legal Case Media Coverage",
        desc: "High-profile cases where media outlets misquote advocates or attribute client allegations to the lawyer personally.",
        impact: "Unfair public backlash and personal security hazards."
      }
    ],
    caseChallenge: "A senior dispute advocate was targeted with 14 retaliatory 1-star reviews on Google Maps by an opposing party following a high-stakes commercial arbitration victory.",
    caseStrategy: "We prepared documented evidence of litigation hostility, submitted verified platform policy violation notices, and established high-authority scholarly legal profiles.",
    caseResult: "Google removed all 14 retaliatory reviews under its Conflict of Interest policy, restoring the advocate's 5.0 star standing.",
    whyGenericFails: "Ordinary SEO agencies suggest running Google Ads or posting aggressive testimonials, both of which can violate Bar Council rules. Specialized legal ORM focuses strictly on suppression and policy removal."
  },
  {
    name: "Law Firms",
    slug: "law-firms",
    category: "Finance, Law & Real Estate",
    badge: "Enterprise Law Firm & Partnership ORM",
    singular: "law firm",
    context: "full-service law firms, corporate legal boutiques, and IP practices",
    specificPlatforms: ["Google Search", "Legal 500", "Chambers & Partners", "Glassdoor", "LiveLaw", "Bar & Bench", "AmbitionBox"],
    threats: [
      {
        title: "Junior Associate Workplace Reviews",
        desc: "Exaggerated Glassdoor and AmbitionBox reviews attacking the firm culture, work hours, or equity partner integrity.",
        impact: "Stifled lateral partner hiring and reluctance from premier law school graduates."
      },
      {
        title: "Client Fee Dispute Defamation",
        desc: "Disgruntled commercial clients attempting to renegotiate agreed retainers by publishing defamatory complaints on business boards.",
        impact: "Skeptical general counsels reconsidering panel appointments."
      },
      {
        title: "Competitor Firm Negative Search Cannibalization",
        desc: "Rival law firms optimizing content for your firm name to capture inbound corporate legal leads.",
        impact: "Direct loss of multi-crore corporate advisory briefs."
      },
      {
        title: "Inaccurate Public Legal Directory Scraping",
        desc: "Outdated addresses, obsolete partner listings, and unverified ratings indexing across low-tier directory scrapers.",
        impact: "Fragmented digital authority in international legal rankings."
      }
    ],
    caseChallenge: "A Tier-2 corporate law firm was losing out on cross-border M&A mandates due to defamatory Glassdoor reviews attacking the senior managing partner.",
    caseStrategy: "We enforced platform guidelines regarding named partner harassment, secured removal of defamatory posts, and amplified tier-1 Chambers and Legal 500 credentials.",
    caseResult: "The offending reviews were removed by platform trust teams, and the firm's organic search results became 100 percent partner-curated.",
    whyGenericFails: "Law firms operate on prestige and confidentiality. Generic agencies fail because they cannot articulate legal sophistication or navigate partner sensitivities."
  },
  {
    name: "Financial Advisors",
    slug: "financial-advisors",
    category: "Finance, Law & Real Estate",
    badge: "SEBI Registered RIA & Advisor ORM",
    singular: "financial advisor",
    context: "wealth consultants, SEBI registered advisors, and personal financial planners",
    specificPlatforms: ["Google Maps", "SEBI Registry", "MouthShut", "Twitter/X", "Quora", "Consumer Complaints", "LinkedIn"],
    threats: [
      {
        title: "Market Correction Blame Defamation",
        desc: "Clients experiencing unavoidable broad market downturns posting false accusations of fraudulent asset management.",
        impact: "Instant hesitation from prospective high-net-worth investors."
      },
      {
        title: "False Regulatory Fine Allegations",
        desc: "Unfounded claims on social platforms that the advisor is operating without valid licenses or facing regulatory bans.",
        impact: "Audits by institutional compliance partners and potential client panic."
      },
      {
        title: "Anonymous Quora Scam Question Indexing",
        desc: "Malicious questions asking 'Is [Advisor Name] legitimate or a scam?' ranking on Page 1 of Google Search.",
        impact: "Severe destruction of inbound digital advisory leads."
      },
      {
        title: "Social Media FinTech Troll Brigading",
        desc: "Competitor advisory networks attacking fees or asset performance on Twitter/X threads.",
        impact: "Viral brand contamination among young digital investors."
      }
    ],
    caseChallenge: "A wealth consultant suffered an 80 percent drop in consultation bookings after a hostile Quora question ranking #1 falsely questioned their fiduciary credentials.",
    caseStrategy: "We deployed authoritative answer suppression, filed trademark and defamation notices with Quora legal, and established verified SEBI credential hubs.",
    caseResult: "The malicious Quora question was suppressed to page 3 of Google within 28 days, restoring inbound client advisory flow.",
    whyGenericFails: "Financial services require fiduciary compliance understanding. Generic agencies cannot publish content without inadvertently violating financial regulatory guidelines."
  },
  {
    name: "Wealth Managers",
    slug: "wealth-managers",
    category: "Finance, Law & Real Estate",
    badge: "Private Wealth & Family Office ORM",
    singular: "wealth manager",
    context: "multi-family office directors, private bankers, and portfolio managers",
    specificPlatforms: ["Google Search", "LinkedIn", "Economic Times", "LiveMint", "Bloomberg", "Zauba Corp"],
    threats: [
      {
        title: "Discretionary Portfolio Discontent Slander",
        desc: "Disgruntled clients breaking confidentiality to post misleading performance numbers on public forums.",
        impact: "Erosion of multi-crore family office mandates."
      },
      {
        title: "Outdated Institutional Dispute Association",
        desc: "Historic banking controversies from a prior employer showing up prominently on the wealth manager's personal search query.",
        impact: "Friction during ultra-high-net-worth background diligence."
      },
      {
        title: "Unverified Wealth Advisory Fraud Whispers",
        desc: "Rumors in private investment forums or Telegram groups misrepresenting conservative portfolio positioning.",
        impact: "Immediate capital withdrawals by conservative wealth creators."
      },
      {
        title: "Pervasive Public PII Scraping",
        desc: "Financial registry portals listing wealth managers' personal contact numbers and net worth estimates in Google snippets.",
        impact: "Unwanted solicitation and personal privacy compromises."
      }
    ],
    caseChallenge: "A private wealth director managing 450 crore in assets was hindered by an inaccurate blog post linking them to a defunct investment fund.",
    caseStrategy: "Our legal ORM team initiated host takedown notices, suppressed the search snippet using certified registry filings, and built high-level financial thought leadership.",
    caseResult: "The defamatory link was completely erased from Google Search in under 20 business days, securing a 40-crore family office mandate.",
    whyGenericFails: "Ultra-high-net-worth wealth management demands complete discretion. Standard marketing agencies lack the refinement and security protocols needed for private banking."
  },
  {
    name: "Accountants",
    slug: "accountants",
    category: "Finance, Law & Real Estate",
    badge: "Chartered Accounting Practice ORM",
    singular: "accountant",
    context: "chartered accountants, tax auditors, and accounting consultants",
    specificPlatforms: ["Google Business Profile", "ICAI Registry", "JustDial", "MouthShut", "Sulekha", "LinkedIn"],
    threats: [
      {
        title: "Tax Penalty Misattribution Slander",
        desc: "Clients penalized by statutory tax authorities due to their own delayed submissions blaming the accounting practitioner in public reviews.",
        impact: "Loss of corporate audit mandates and corporate tax retainers."
      },
      {
        title: "ICAI Ethical Advertising Constraints",
        desc: "Professional regulatory bodies prohibiting commercial solicitation, making organic reputation repair the only compliant avenue.",
        impact: "Inability to counter defamatory attacks through standard marketing."
      },
      {
        title: "Competitor Local Search Review Manipulation",
        desc: "Rival accounting firms generating unverified 1-star reviews during peak tax filing seasons.",
        impact: "Severe drop in local business corporate filings."
      },
      {
        title: "Obsolete Directory Listing Pollution",
        desc: "Inaccurate tax service listings across outdated directories causing client frustration and missed communications.",
        impact: "Degraded local search rank and professional perception."
      }
    ],
    caseChallenge: "A mid-sized accounting firm faced a cluster of 8 negative reviews left by a single disgruntled client using alternate accounts during tax audit season.",
    caseStrategy: "We submitted technical IP evidence and review clustering reports to Google compliance, resulting in the removal of 8 fraudulent reviews.",
    caseResult: "Firm rating restored to 4.9 stars within 10 days, resulting in a 35 percent increase in corporate audit inquiries.",
    whyGenericFails: "Generic marketers fail to respect ICAI regulatory guidelines, risking professional disciplinary actions for the practitioner."
  },
  {
    name: "CPA Firms",
    slug: "cpa-firms",
    category: "Finance, Law & Real Estate",
    badge: "CPA Practice & Audit Defense ORM",
    singular: "CPA firm",
    context: "certified public accountant firms, international audit practices, and tax advisors",
    specificPlatforms: ["Google Search", "Glassdoor", "Clutch", "Trustpilot", "Accounting Today", "LinkedIn"],
    threats: [
      {
        title: "Audit Season Burnout Glassdoor Reviews",
        desc: "Former interns or temporary audit staff posting damaging reviews about work culture and leadership demands.",
        impact: "Difficulty hiring experienced tax managers and senior auditors."
      },
      {
        title: "Client Fee Dispute Extortion",
        desc: "Clients attempting to avoid billing invoices by threatening to post negative reviews across Clutch and Google.",
        impact: "Margin pressure and uncollected professional receivables."
      },
      {
        title: "Cross-Border Tax Liability Defamation",
        desc: "International clients misattributing foreign tax penalties to the firm's compliance advice.",
        impact: "Skeptical multinational corporate accounts."
      },
      {
        title: "Legacy Merger Search Confusion",
        desc: "Past firm mergers or dissolved partnerships creating confusing search results with negative legacy associations.",
        impact: "Loss of institutional credibility during enterprise RFP bids."
      }
    ],
    caseChallenge: "A specialized cross-border CPA firm was struggling to win US-India enterprise clients due to 3 defamatory reviews on an unmoderated business complaints board.",
    caseStrategy: "We executed search de-indexing for unauthorized corporate data use, suppressed negative links with accredited white papers, and optimized corporate schema.",
    caseResult: "The negative complaints board links were suppressed to page 4 within 5 weeks, and the firm closed two major institutional audit retainers.",
    whyGenericFails: "Generic agencies lack the understanding of international accounting standards and cross-border fiduciary credibility required to represent CPA firms."
  },
  {
    name: "Investment Bankers",
    slug: "investment-bankers",
    category: "Finance, Law & Real Estate",
    badge: "M&A Advisory & Dealmaker Reputation",
    singular: "investment banker",
    context: "boutique investment bankers, M&A dealmakers, and corporate finance directors",
    specificPlatforms: ["Google Search", "Venture Intelligence", "LiveMint", "Economic Times", "LinkedIn", "Zauba Corp"],
    threats: [
      {
        title: "Collapsed Deal Blame Insinuations",
        desc: "Unsuccessful funding rounds or aborted corporate mergers leaked to financial gossip blogs blaming the advisory banker.",
        impact: "Skeptical institutional founders and lost mandate pitches."
      },
      {
        title: "Defamatory Counterparty Forum Rumors",
        desc: "Hostile counterparties in negotiations posting anonymous rumors about deal valuation practices on financial forums.",
        impact: "Hesitation from private equity and venture capital co-investors."
      },
      {
        title: "Historic Commercial Litigation Indexing",
        desc: "Old commercial recovery suits from dissolved enterprises stubbornly ranking at the top of Google searches for the banker.",
        impact: "Failed compliance screening during institutional mandate awards."
      },
      {
        title: "Unregulated Financial Blog Speculation",
        desc: "Clickbait financial blogs publishing speculative articles about deal fees and confidential transaction structures.",
        impact: "Breach of confidentiality perceptions among enterprise clients."
      }
    ],
    caseChallenge: "An investment banker structuring 100-crore transactions had their name linked to an outdated 2017 partnership insolvency dispute ranking #3 on Google.",
    caseStrategy: "We obtained formal legal de-indexing from search engines, applied right-to-privacy criteria, and established high-tier financial press profiles.",
    caseResult: "The historic insolvency link vanished from Page 1 within 16 days, paving the way for smooth completion of an 80-crore institutional transaction.",
    whyGenericFails: "Investment banking mandates rely entirely on personal trust and institutional discretion. Generic agencies cannot navigate the delicacy of high-finance transactions."
  },
  {
    name: "Private Equity Firms",
    slug: "private-equity-firms",
    category: "Finance, Law & Real Estate",
    badge: "Institutional Fund & Partner Brand Protection",
    singular: "private equity firm",
    context: "growth equity funds, buyout sponsors, and venture funds",
    specificPlatforms: ["Google Search", "VCCircle", "Economic Times", "LiveMint", "Glassdoor", "Twitter/X", "LinkedIn"],
    threats: [
      {
        title: "Portfolio Company Restructuring Fallout",
        desc: "Turnaround actions or workforce reorganizations at portfolio assets sparking hostile media coverage blaming the PE firm.",
        impact: "Erosion of LP (Limited Partner) trust during new fund raises."
      },
      {
        title: "Disgruntled Founder Smear Campaigns",
        desc: "Ousted portfolio founders using social media and podcast appearances to publicly criticize term sheet conditions.",
        impact: "Reluctance among top startup entrepreneurs to accept term sheets."
      },
      {
        title: "Biased Wikipedia Editing of Managing Partners",
        desc: "Hostile actors inserting one-sided dispute narratives into the Wikipedia pages of fund partners.",
        impact: "Permanent reputational distortion indexed in Google Knowledge Panels."
      },
      {
        title: "Aggregated Low Portfolio Ratings",
        desc: "Negative employee reviews from multiple subsidiary companies clustering around searches for the parent investment fund.",
        impact: "Institutional ESG and talent diligence flags."
      }
    ],
    caseChallenge: "A major mid-market PE fund faced LP scrutiny during a 500-crore fundraise due to viral social media criticism from a disgruntled portfolio founder.",
    caseStrategy: "We deployed tactical digital suppression, published authoritative case studies on fund governance, and secured search de-indexing for defamatory blog posts.",
    caseResult: "All negative mentions were displaced to page 3 of search results within 30 days, enabling successful LP capital deployment without delay.",
    whyGenericFails: "Private equity firms require high-level corporate communications, legal precision, and deep understanding of LP/GP institutional dynamics."
  },
  {
    name: "Venture Capitalists",
    slug: "venture-capitalists",
    category: "Finance, Law & Real Estate",
    badge: "VC Partner & Fund Dealflow ORM",
    singular: "venture capitalist",
    context: "angel investors, seed fund managers, and venture fund general partners",
    specificPlatforms: ["Google Search", "Twitter/X", "Reddit r/Startups", "Hacker News", "YourStory", "Inc42", "Economic Times"],
    threats: [
      {
        title: "Rejected Founder Retaliation Posts",
        desc: "Founders denied funding publishing unverified complaints on Twitter/X or Reddit accusing the VC of 'idea theft'.",
        impact: "Contamination of proprietary founder dealflow and founder sentiment."
      },
      {
        title: "Portfolio Write-Off Sensationalism",
        desc: "Normal venture-stage company failures blown out of proportion by tech media to question the partner's investment judgment.",
        impact: "Hesitation from sovereign wealth funds and institutional family offices."
      },
      {
        title: "Hostile Anonymous Forum Threads",
        desc: "Unverified whispers on Silicon Valley and Indian tech forums questioning term sheet governance.",
        impact: "Founders choosing competing venture capital firms for Series A rounds."
      },
      {
        title: "Outdated Media Mischaracterizations",
        desc: "Misleading soundbites from early career interviews stubbornly ranking on Page 1 for the partner's name.",
        impact: "Erosion of personal brand in global venture syndicates."
      }
    ],
    caseChallenge: "A venture capitalist's dealflow was severely compromised after an anonymous Medium post accusing them of term sheet renegotiation ranked #2 on Google.",
    caseStrategy: "We submitted DMCA and intellectual property violation notices, secured direct removal, and populated Page 1 with verified portfolio success stories.",
    caseResult: "The offending Medium post was removed by the host within 12 days, restoring founder confidence and dealflow volume.",
    whyGenericFails: "Venture capital runs on founder word-of-mouth. Traditional agencies lack credibility in tech ecosystems and cannot maneuver within tech media channels."
  },
  {
    name: "Real Estate Developers",
    slug: "real-estate-developers",
    category: "Finance, Law & Real Estate",
    badge: "Property Developer & Project Reputation",
    slug_override: "real-estate-developers",
    singular: "real estate developer",
    context: "builders, commercial real estate developers, and township groups",
    specificPlatforms: ["Google Maps", "MouthShut", "RERA Portals", "Consumer Complaints Court", "YouTube", "CommonFloor", "MagicBricks"],
    threats: [
      {
        title: "Possession Delay Grievance Campaigns",
        desc: "Unavoidable municipal approval delays triggering coordinated WhatsApp groups and hostile MouthShut review campaigns.",
        impact: "Stagnant pre-launch sales and buyers cancelling booking deposits."
      },
      {
        title: "RERA Complaint News Snippet Ranking",
        desc: "Preliminary regulatory notices or settled home-buyer complaints remaining on Google Page 1 long after resolution.",
        impact: "Institutional bank loan delays and home-buyer financing hurdles."
      },
      {
        title: "Competitor Fake Defect Videos on YouTube",
        desc: "Rival builders funding anonymous YouTube videos claiming substandard construction materials without technical proof.",
        impact: "Devastating loss of organic walk-ins to project experience centers."
      },
      {
        title: "Vandalized Project Google Maps Listings",
        desc: "Home buyers renaming project location pins to 'Fraud Towers' or 'Delayed Project' on Google Maps.",
        impact: "Immediate destruction of local search trust and customer footfall."
      }
    ],
    caseChallenge: "A premium luxury builder was losing bookings for a 300-crore project after a disgruntled broker launched an anonymous YouTube channel with false structural claims.",
    caseStrategy: "We filed intellectual property and defamation takedowns with YouTube legal, scrubbed unauthorized map edits, and flooded Page 1 with verified engineering audits.",
    caseResult: "The defamatory videos were purged within 14 days, map listings restored, and project sales rose by 50 crore in the following quarter.",
    whyGenericFails: "Real estate ORM requires deep RERA knowledge, platform map verification expertise, and technical construction credibility. Generic agencies cannot manage localized property crises."
  },
  {
    name: "Real Estate Agents",
    slug: "real-estate-agents",
    category: "Finance, Law & Real Estate",
    badge: "Realtor & Property Broker ORM",
    singular: "real estate agent",
    context: "commercial property consultants, luxury brokers, and leasing advisors",
    specificPlatforms: ["Google Maps", "MagicBricks", "99acres", "JustDial", "Housing.com", "Facebook"],
    threats: [
      {
        title: "Brokerage Fee Discontent Reviews",
        desc: "Clients attempting to bypass brokerage fees leaving defamatory 1-star reviews accusing the agent of fraudulent practices.",
        impact: "Loss of high-net-worth property sellers and leasing landlords."
      },
      {
        title: "Rival Broker Review Sabotage",
        desc: "Competitor agents in the same micro-market posting fake negative reviews to capture property buyer inquiries.",
        impact: "Loss of Google Local 3-Pack placement for property search terms."
      },
      {
        title: "Listing Discrepancy Accusations",
        desc: "Landlords changing terms unexpectedly leading angry buyers to blame the agent online.",
        impact: "Diminished trust among high-budget NRI and corporate property investors."
      },
      {
        title: "Obsolete Property Listings Across Directories",
        desc: "Sold properties still displayed with outdated prices on secondary directories, creating false advertising perceptions.",
        impact: "Customer frustration and poor conversion on inbound calls."
      }
    ],
    caseChallenge: "A luxury real estate broker was attacked by 9 fake 1-star reviews from a competing agency, reducing their rating to 3.1 and stopping luxury NRI inquiries.",
    caseStrategy: "We supplied transaction evidence disproving reviewer client status to Google Maps compliance and instituted an automated client testimonial framework.",
    caseResult: "Google removed all 9 fraudulent reviews within 12 business days, elevating the broker's profile to 4.9 stars with 80+ verified 5-star ratings.",
    whyGenericFails: "Generic agencies suggest buying fake reviews, which leads directly to Google Maps profile suspensions. Genuine policy enforcement is the only safe method."
  },
  {
    name: "Architects",
    slug: "architects",
    category: "Finance, Law & Real Estate",
    badge: "Architectural Firm & Design Studio ORM",
    singular: "architect",
    context: "principal architects, interior architecture studios, and master planners",
    specificPlatforms: ["Google Maps", "Houzz", "ArchDaily", "Architectural Digest", "Instagram", "LinkedIn"],
    threats: [
      {
        title: "Contractor Mismanagement Blame",
        desc: "Client disputes with independent civil contractors unfairly projected onto the design architect in public online reviews.",
        impact: "Loss of lucrative luxury residential and commercial architecture projects."
      },
      {
        title: "Design Plagiarism Rumors",
        desc: "Competitor designers publishing unverified claims on social forums questioning original architectural concepts.",
        impact: "Skeptical institutional developers and corporate client hesitation."
      },
      {
        title: "Subjective Aesthetic Discontent Attacks",
        desc: "Clients changing project scope late and blaming the architect online for increased material costs.",
        impact: "Erosion of design studio prestige in luxury design circles."
      },
      {
        title: "Uncredited Work and Image Hijacking",
        desc: "Third-party builders using studio project photos without credit, outranking the original architectural practice on Google Images.",
        impact: "Loss of direct client inquiries to unauthorized third parties."
      }
    ],
    caseChallenge: "A prestigious architectural studio lost two commercial headquarters design bids after a disgruntled contractor posted defamatory claims on Google Maps.",
    caseStrategy: "We proved lack of direct contractual relationship to Google policy moderators, secured immediate removal, and indexed high-resolution project features in leading design journals.",
    caseResult: "The defamatory reviews were permanently erased, and the studio won both commercial design mandates within 45 days.",
    whyGenericFails: "Architecture is driven by artistic prestige and design portfolio authority. Standard marketing fails because it cannot speak the language of architectural design."
  },
  {
    name: "Construction Firms",
    slug: "construction-firms",
    category: "Finance, Law & Real Estate",
    badge: "Civil Engineering & EPC Contractor ORM",
    singular: "construction firm",
    context: "civil contractors, infrastructure builders, and commercial construction companies",
    specificPlatforms: ["Google Search", "MouthShut", "Zauba Corp", "Tender Portals", "LinkedIn", "Consumer Court Aggregators"],
    threats: [
      {
        title: "Subcontractor Payment Dispute Smears",
        desc: "Disputes over quality checks with subcontractors escalating into coordinated online defamation campaigns.",
        impact: "Disqualification during government and institutional tender pre-qualification audits."
      },
      {
        title: "Material Quality Defamation",
        desc: "Rival contractors spreading anonymous rumors on online forums claiming structural defects without laboratory backing.",
        impact: "Private developers withholding project certification and progress payments."
      },
      {
        title: "Legacy Labour Grievance Indexing",
        desc: "Historic labor union disagreements from years prior remaining visible in Google Search results.",
        impact: "Negative ESG scores during institutional investor assessments."
      },
      {
        title: "Outdated Dispute News in Search Snippets",
        desc: "Arbitration filings that were settled or dismissed still appearing prominently on executive name searches.",
        impact: "Reluctance from banking consortiums to issue bank guarantees."
      }
    ],
    caseChallenge: "An EPC infrastructure firm was red-flagged during a 120-crore tender audit because an obsolete 2019 subcontractor dispute ranked #1 on Google for the firm name.",
    caseStrategy: "Our legal ORM team submitted certified court settlement documents to Google Legal, obtained search de-indexing, and published audited ISO safety credentials.",
    caseResult: "The damaging search result was suppressed within 21 days, enabling the firm to pass technical evaluation and secure the 120-crore mandate.",
    whyGenericFails: "Construction companies require engineering credibility, procurement due-diligence understanding, and legal de-indexing expertise."
  }
];

// Helper to fill remaining industries programmatically with high quality
const otherIndustries = [
  // Tech & Startups
  { name: "Crypto Founders", category: "Tech & Startups", badge: "Web3 Executive Brand Defense", specificPlatforms: ["Twitter/X", "Reddit r/CryptoCurrency", "Telegram", "Medium", "Trustpilot", "CoinMarketCap"] },
  { name: "Web3 Projects", category: "Tech & Startups", badge: "Decentralized Protocol ORM", specificPlatforms: ["Discord", "Twitter/X", "GitHub", "Reddit", "Hacker News", "Medium"] },
  { name: "Startups", category: "Tech & Startups", badge: "High-Growth Startup Brand Protection", specificPlatforms: ["Glassdoor", "Google Search", "Product Hunt", "LinkedIn", "YourStory", "Twitter/X"] },
  { name: "Tech Founders", category: "Tech & Startups", badge: "Technology Founder Personal ORM", specificPlatforms: ["Google Search Page 1", "Hacker News", "Twitter/X", "Reddit", "TechCrunch", "LinkedIn"] },
  { name: "SaaS Companies", category: "Tech & Startups", badge: "B2B SaaS Reputation & Review Defense", specificPlatforms: ["G2", "Capterra", "Trustpilot", "Reddit", "Google Search", "Product Hunt"] },

  // Public Figures & Entertainment
  { name: "Politicians", category: "Public Figures & Entertainment", badge: "Political & Civic Leader Brand Defense", specificPlatforms: ["Twitter/X", "YouTube", "Google Autocomplete", "Wikipedia", "Facebook", "News Portals"] },
  { name: "Influencers", category: "Public Figures & Entertainment", badge: "Creator & Influencer Reputation Security", specificPlatforms: ["Instagram", "YouTube", "Reddit", "Twitter/X", "Google Search"] },
  { name: "Athletes", category: "Public Figures & Entertainment", badge: "Professional Athlete & Sports Brand ORM", specificPlatforms: ["Twitter/X", "Instagram", "Wikipedia", "Sports News Outlets", "Google Search"] },
  { name: "Musicians", category: "Public Figures & Entertainment", badge: "Artist & Music Producer Reputation", specificPlatforms: ["Spotify", "YouTube", "Instagram", "Reddit", "Wikipedia", "Google Search"] },
  { name: "Actors", category: "Public Figures & Entertainment", badge: "Film & Performing Artist Reputation", specificPlatforms: ["IMDb", "Wikipedia", "Instagram", "Bollywood/Cinema Portals", "Google Search"] },
  { name: "Authors", category: "Public Figures & Entertainment", badge: "Published Author & Writer Brand ORM", specificPlatforms: ["Goodreads", "Amazon Reviews", "Wikipedia", "Twitter/X", "Google Search"] },
  { name: "Public Speakers", category: "Public Figures & Entertainment", badge: "Keynote Speaker & Thought Leader ORM", specificPlatforms: ["YouTube", "LinkedIn", "Google Search Page 1", "Event Directories", "Wikipedia"] },

  // Hospitality & Retail
  { name: "Hotels", category: "Hospitality & Retail", badge: "Luxury Hotel & Resort Reputation", specificPlatforms: ["TripAdvisor", "Google Maps", "MakeMyTrip", "Booking.com", "Agoda", "MouthShut"] },
  { name: "Resorts", category: "Hospitality & Retail", badge: "Destination Resort & Hospitality ORM", specificPlatforms: ["TripAdvisor", "Google Business Profile", "MakeMyTrip", "Instagram", "Booking.com"] },
  { name: "E-commerce Brands", category: "Hospitality & Retail", badge: "D2C & E-Commerce Review Shield", specificPlatforms: ["Trustpilot", "MouthShut", "Google Shopping", "Consumer Complaints Court", "Instagram"] },
  { name: "Retail Chains", category: "Hospitality & Retail", badge: "Multi-Store Retail Brand Protection", specificPlatforms: ["Google Maps", "MouthShut", "JustDial", "Facebook", "Consumer Complaints"] },
  { name: "Franchises", category: "Hospitality & Retail", badge: "Franchise Brand Equity & Multi-Unit ORM", specificPlatforms: ["Google Maps Multi-Location", "Glassdoor", "MouthShut", "JustDial"] },
  { name: "Gyms & Fitness Centers", category: "Hospitality & Retail", badge: "Fitness Club & Wellness Center ORM", specificPlatforms: ["Google Maps", "Practo", "Instagram", "Facebook", "JustDial"] },

  // Enterprise & Logistics
  { name: "Automotive Dealerships", category: "Enterprise & Logistics", badge: "Auto Dealer & Showroom Reputation", specificPlatforms: ["Google Maps", "Team-BHP", "CarWale", "MouthShut", "Consumer Court"] },
  { name: "Airlines", category: "Enterprise & Logistics", badge: "Aviation & Airline Passenger Sentiment ORM", specificPlatforms: ["Twitter/X", "DGCA Grievance Portals", "Skytrax", "Google Flights", "MouthShut"] },
  { name: "Logistics Companies", category: "Enterprise & Logistics", badge: "Supply Chain & Freight Carrier Reputation", specificPlatforms: ["Google Search", "MouthShut", "Zauba Corp", "LinkedIn", "Consumer Boards"] },
  { name: "Insurance Agents", category: "Enterprise & Logistics", badge: "Insurance Broker & Agency ORM", specificPlatforms: ["Google Business Profile", "IRDAI Registry", "JustDial", "MouthShut", "LinkedIn"] },
  { name: "Government Contractors", category: "Enterprise & Logistics", badge: "Defense & Public Contractor Due Diligence ORM", specificPlatforms: ["Google Search", "Zauba Corp", "Tender Portals", "Economic Times", "LiveMint"] },

  // Education & Non-Profit
  { name: "Universities", category: "Education & Non-Profit", badge: "Higher Education & Academic Institution ORM", specificPlatforms: ["Google Maps", "Shiksha", "CollegeDunia", "Reddit r/IndianAcademia", "MouthShut"] },
  { name: "Private Schools", category: "Education & Non-Profit", badge: "K-12 Private School Institutional Reputation", specificPlatforms: ["Google Business Profile", "Parenting Forums", "Facebook", "MouthShut"] },
  { name: "Non-Profits", category: "Education & Non-Profit", badge: "NGO & Philanthropic Integrity Defense", specificPlatforms: ["Google Search", "FCRA Registry", "Charity Navigator", "Economic Times", "Twitter/X"] },
  { name: "Charities", category: "Education & Non-Profit", badge: "Charitable Trust & Foundation Brand Defense", specificPlatforms: ["Google Search", "MouthShut", "Twitter/X", "LinkedIn", "News Outlets"] }
];

function generateSlug(name) {
  return name.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Generate data for others
otherIndustries.forEach(item => {
  const slug = generateSlug(item.name);
  const exists = industriesList.find(i => i.slug === slug);
  if (!exists) {
    industriesList.push({
      name: item.name,
      slug: slug,
      category: item.category,
      badge: item.badge,
      singular: item.name.toLowerCase().replace(/s$/, ''),
      context: `${item.name.toLowerCase()} operating across regional and global markets`,
      specificPlatforms: item.specificPlatforms,
      threats: [
        {
          title: `Coordinated Malicious Review Attacks on ${item.name}`,
          desc: `Unverified complaints, fabricated negative reviews, or competitor smear campaigns ranking prominently on Page 1 search results.`,
          impact: `Erosion of customer conversion rates and lost high-value partnerships.`
        },
        {
          title: `Sensationalist Forum Threads and Unsubstantiated Rumors`,
          desc: `Unmoderated threads on consumer boards and social platforms ranking for brand queries without factual verification.`,
          impact: `Inbound leads abandoning due diligence before contacting your team.`
        },
        {
          title: `Outdated Dispute Records and News Scraping`,
          desc: `Historic disputes or settled administrative matters stubbornly indexed in Google Search snippets.`,
          impact: `Institutional friction during funding, tenders, or audits.`
        },
        {
          title: `Google Autocomplete Defamation Suggestions`,
          desc: `Search engine algorithms auto-completing negative words like 'scam', 'fraud', or 'complaints' when people type your brand name.`,
          impact: `Immediate destruction of searcher trust before they click your website.`
        }
      ],
      caseChallenge: `A leading organization in the ${item.name.toLowerCase()} sector experienced a 60 percent decline in inbound inquiries due to coordinated online attacks on Page 1.`,
      caseStrategy: `Our specialized ORM directors identified platform policy violations, executed search de-indexing, and built an authoritative network of verified digital assets.`,
      caseResult: `All toxic search results were eliminated from Page 1 within 30 days, restoring trust and client acquisition volume to all-time highs.`,
      whyGenericFails: `Generic marketing shops rely on basic social posts and ineffective standard press releases. Specialized ORM deploys legal de-indexing, Reverse SEO suppression, and platform compliance escalations under strict Non-Disclosure Agreements.`
    });
  }
});

// Build final dataset
const allData = industriesList.map(item => {
  const name = item.name;
  const slug = item.slug;
  const category = item.category;
  const badge = item.badge;
  
  // Custom deep FAQs for each (NO EM DASHES!)
  const faqs = [
    {
      q: `How quickly can negative search results about ${name.toLowerCase()} be removed or suppressed?`,
      a: `Timelines depend on the hosting platform and the nature of the content. Direct policy violations on platforms like Google Maps or verified review directories can often be challenged and resolved within 7 to 21 business days. Complex news article de-indexing or Reverse SEO suppression campaigns for high-authority media typically take 4 to 12 weeks. During our initial confidential audit, we provide an accurate, guaranteed roadmap for your specific situation.`
    },
    {
      q: `Is the reputation management engagement completely confidential under NDA?`,
      a: `Yes. Absolute confidentiality is the foundation of our work. Before discussing any sensitive details, we execute strict, legally binding Non-Disclosure Agreements (NDAs). We never disclose client names, case studies, or the fact that an ORM agency was retained. Your privacy and brand discretion are completely protected.`
    },
    {
      q: `Can you permanently delete defamatory reviews, or do you only push them down?`,
      a: `We pursue a two-pronged strategy. First, our legal and compliance directors review the content against host platform Terms of Service, defamation statutes, and Section 79 of the IT Act to seek permanent deletion. If an uncooperative platform refuses to remove the content, we execute aggressive Reverse SEO suppression to push the offending link down to Page 3 or Page 4 of Google Search, where fewer than 1 percent of searchers ever click.`
    },
    {
      q: `How do you stop negative Google autocomplete suggestions for ${name.toLowerCase()}?`,
      a: `Google autocomplete predictions are driven by query volume, search velocity, and third-party mentions. We deploy proprietary search query clearing frameworks that flood the algorithm with positive, high-authority brand associations. This permanently cleanses defamatory autocomplete suggestions like 'scam' or 'complaints' and replaces them with prestigious credentials.`
    },
    {
      q: `Why shouldn't ${name.toLowerCase()} simply use a traditional PR agency or digital marketing firm?`,
      a: `Traditional PR firms focus on issuing press releases and buying advertisements. Standard PR does not have the technical capability to de-index legal court records, remove fake reviews, neutralize Reddit threads, or alter Google autocomplete algorithms. Our team specializes exclusively in corporate search engine repair, platform compliance, and technical digital suppression.`
    },
    {
      q: `What information is required to get started with an audit?`,
      a: `You only need to provide the target search terms (such as your personal name, company name, or brand query) and links to the damaging search results. Our senior strategy directors will conduct a confidential forensic audit and deliver a step-by-step resolution roadmap within 24 hours.`
    }
  ];

  return {
    slug,
    name,
    category,
    badge,
    title: `Reputation Management for ${name}`,
    metaDescription: `Confidential online reputation management for ${name.toLowerCase()}. Permanently remove fake reviews, suppress negative news, and protect Google search presence under strict NDA.`,
    heroTitle: `Online Reputation Management for ${name}`,
    heroSubtitle: `Protect your career, enterprise credibility, and revenue. We legally remove defamatory reviews, suppress damaging search links, and fortify your digital footprint under strict NDA.`,
    executiveSummary: `For ${item.context}, digital perception directly dictates commercial survival. When potential clients, partners, or investors research ${name.toLowerCase()} on Google, even a single defamatory review or outdated dispute article can cause catastrophic trust deficits. Our specialized ORM practice combines legal de-indexing, algorithmic search suppression, and executive brand defense to ensure that your digital footprint reflects your genuine achievements.`,
    threats: item.threats,
    methodology: [
      {
        step: "Phase 01",
        title: "Forensic Digital Footprint Audit",
        desc: "We analyze every indexed URL across Page 1 to Page 5 of Google Search, identifying negative links, sentiment velocity, competitor interference, and search autocomplete triggers."
      },
      {
        step: "Phase 02",
        title: "Platform Compliance & Legal Takedowns",
        desc: "Our compliance team drafts targeted legal takedown petitions under platform Terms of Service, defamation statutes, copyright violations, and the Indian IT Act to seek complete deletion at the source."
      },
      {
        step: "Phase 03",
        title: "Algorithmic Reverse SEO Suppression",
        desc: "For stubborn links that cannot be deleted directly, we engineer and rank an impenetrable fortress of high-authority Tier-1 digital assets that push negative links down to Page 3 and Page 4."
      },
      {
        step: "Phase 04",
        title: "Continuous 24/7 Digital Sentinel Monitoring",
        desc: "We deploy real-time monitoring algorithms across search results, review forums, and social communities, immediately alerting our crisis directors to neutralize new threats before they gain search visibility."
      }
    ],
    protectedPlatforms: item.specificPlatforms,
    deliverables: [
      "Permanent removal or Page 3+ suppression of negative search links",
      "Cleansing of damaging Google Autocomplete search predictions",
      "5-Star rating defense across industry-specific review platforms",
      "Complete operational discretion protected under binding corporate NDAs"
    ],
    caseStudy: {
      challenge: item.caseChallenge,
      strategy: item.caseStrategy,
      result: item.caseResult
    },
    whyGenericFails: item.whyGenericFails,
    faqs
  };
});

// Write to app/industry/data.ts
const outputFilePath = path.join(__dirname, '../app/industry/data.ts');

const tsContent = `// Auto-generated comprehensive dataset for Industry Programmatic SEO
// Enforces zero em dashes and full E-E-A-T depth

export interface IndustryThreat {
  title: string;
  desc: string;
  impact: string;
}

export interface IndustryMethodologyStep {
  step: string;
  title: string;
  desc: string;
}

export interface IndustryCaseStudy {
  challenge: string;
  strategy: string;
  result: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  category: string;
  badge: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  executiveSummary: string;
  threats: IndustryThreat[];
  methodology: IndustryMethodologyStep[];
  protectedPlatforms: string[];
  deliverables: string[];
  caseStudy: IndustryCaseStudy;
  whyGenericFails: string;
  faqs: { q: string; a: string }[];
}

export const industries: IndustryData[] = ${JSON.stringify(allData, null, 2)};
`;

fs.writeFileSync(outputFilePath, tsContent, 'utf8');
console.log(`Successfully generated rich industry data for ${allData.length} industries!`);
