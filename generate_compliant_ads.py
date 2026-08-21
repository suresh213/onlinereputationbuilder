import csv

# EXACT column order from the original google_ads_bulk_upload.csv that Google accepted
COLUMNS = [
    "Row Type","Action","Campaign status","Ad group status","Ad status","Keyword status",
    "Campaign ID","Campaign","Campaign type","Budget","Delivery method","Bid strategy type",
    "Language","Location","EU political ads","Ad group ID","Ad group","Default max. CPC",
    "Ad group type","Ad rotation","Keyword ID","Keyword","Type","Ad ID","Ad type",
    "Headline 1","Headline 2","Headline 3","Headline 4","Headline 5",
    "Headline 6","Headline 7","Headline 8","Headline 9","Headline 10",
    "Description 1","Description 2","Description 3","Description 4",
    "Final URL","Level","Negative keyword"
]

def make_ad(ad_group, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10,
            d1, d2, d3, d4, url):
    # Validate character limits BEFORE writing
    headlines = [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10]
    descriptions = [d1,d2,d3,d4]
    for i, h in enumerate(headlines, 1):
        assert len(h) <= 30, f"HEADLINE {i} TOO LONG ({len(h)}): {h}"
    for i, d in enumerate(descriptions, 1):
        assert len(d) <= 90, f"DESCRIPTION {i} TOO LONG ({len(d)}): {d}"
    
    row = {col: "" for col in COLUMNS}
    row["Row Type"] = "Ad"
    row["Action"] = "Add"
    row["Ad status"] = "Enabled"
    row["Campaign"] = "ORM Search Campaign"
    row["Ad group"] = ad_group
    row["Ad type"] = "Responsive search ad"
    row["Headline 1"] = h1
    row["Headline 2"] = h2
    row["Headline 3"] = h3
    row["Headline 4"] = h4
    row["Headline 5"] = h5
    row["Headline 6"] = h6
    row["Headline 7"] = h7
    row["Headline 8"] = h8
    row["Headline 9"] = h9
    row["Headline 10"] = h10
    row["Description 1"] = d1
    row["Description 2"] = d2
    row["Description 3"] = d3
    row["Description 4"] = d4
    row["Final URL"] = url
    return row

ads = [
    make_ad(
        ad_group="Google Review Removal",
        h1="Fix Your Google Reviews",        # 23
        h2="Respond To Bad Reviews",          # 22
        h3="Protect Your Star Rating",        # 24
        h4="Dispute Fake Reviews Fast",       # 25
        h5="100% Risk-Free Consultation",     # 26 -- F-r-e-e = 28... let me count: "100% Risk-Free Consultation" = 27
        h6="Google Review Management",        # 24
        h7="Free Review Audit Today",         # 23
        h8="India's ORM Specialists",         # 23
        h9="Trusted By 1200+ Clients",        # 24
        h10="Stop Fake Review Damage",        # 23
        d1="Fake reviews hurting your business? We file official Google dispute requests fast.",   # 82
        d2="We respond to negative reviews professionally to rebuild customer trust quickly.",      # 80
        d3="We guide you through Google's official dispute process. Free consultation available.",  # 84 -- let me count: "We guide you through Google's official dispute process. Free consultation available." = 83
        d4="Build a stronger review profile and protect your local business reputation today.",     # 81
        url="https://onlinereputationbuilder.in/business/remove-google-business-review"
    ),
    make_ad(
        ad_group="Glassdoor & Employer ORM",
        h1="Fix Your Glassdoor Profile",      # 26
        h2="Fix Your Employer Brand",         # 23
        h3="Attract Top Talent Again",        # 24
        h4="Stop Losing Top Hires",           # 21
        h5="Dispute Fake Glassdoor Reviews",  # 30
        h6="Protect Your Company Image",      # 26
        h7="Glassdoor Brand Management",      # 26
        h8="India's Top Employer ORM",        # 24
        h9="Rebuild Your Hiring Brand",       # 25
        h10="Free Employer Brand Audit",      # 25
        d1="Fake Glassdoor reviews? We file official dispute requests on your behalf today.",     # 79
        d2="We respond to negative reviews and rebuild your employer brand professionally.",      # 78
        d3="Bad Glassdoor rating hurting your hiring? Our experts help rebuild your reputation.", # 83
        d4="Corporate employer branding experts. 1200+ clients. Free consultation today.",        # 76
        url="https://onlinereputationbuilder.in/review-management/remove-glassdoor-review"
    ),
    make_ad(
        ad_group="PR & Crisis Management",
        h1="Elite PR Crisis Management",      # 26
        h2="Manage Your Brand Narrative",     # 27
        h3="Confidential & Secure",           # 21
        h4="24/7 Emergency PR Response",      # 26
        h5="Protect Your Brand Online",       # 25
        h6="Protect Your Brand Value",        # 24
        h7="Rapid Reputation Repair",         # 23
        h8="Defend Your Brand Legacy",        # 24
        h9="India's Top Crisis Firm",         # 23
        h10="Get Immediate PR Help",          # 21
        d1="Facing a PR crisis? Our team helps build a strong positive digital presence fast.",   # 81
        d2="Take back control of your brand narrative. 24/7 emergency response team on call.",   # 82
        d3="Our legal and SEO teams restore your brand's positive digital presence together.",    # 80
        d4="Contact our senior crisis directors for immediate action. Free assessment today.",    # 81
        url="https://onlinereputationbuilder.in/business/crisis-management"
    ),
    make_ad(
        ad_group="Personal & Executive Reputation",
        h1="Personal Reputation Repair",      # 26
        h2="Control Your Name Online",        # 24
        h3="Discreet & Professional",         # 23
        h4="Executive Reputation ORM",        # 24
        h5="Manage Your Search Results",      # 26
        h6="Protect Your Good Name",          # 22
        h7="VIP Reputation Services",         # 23
        h8="Defend Your Personal Brand",      # 26
        h9="India's Top Executive ORM",       # 25
        h10="Free Confidential Audit",        # 23
        d1="Negative Google results for your name? We build a stronger positive presence fast.", # 82
        d2="High-profile individual reputation management. 100% discreet and confidential.",     # 79
        d3="Control what employers, investors, and partners see when they search your name.",     # 79
        d4="Don't let a damaged reputation hold back your career. Our ORM team can help.",       # 77
        url="https://onlinereputationbuilder.in/individual/personal-branding-services"
    ),
]

filename = "compliant_ads_upload.csv"
with open(filename, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=COLUMNS)
    writer.writeheader()
    for ad in ads:
        writer.writerow(ad)

print(f"✅ Generated {filename} with {len(ads)} ads.")
print(f"   All headlines ≤ 30 chars, all descriptions ≤ 90 chars.")
print(f"   Column format matches original google_ads_bulk_upload.csv exactly.")
