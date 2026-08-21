import csv

data = [
    # Campaign settings (first row sets it up)
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "1000", "Campaign Type": "Search", "Ad Group": "", "Keyword": "", "Match Type": "", "Max CPC": ""},
    
    # Ad Group 1: Corporate ORM
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "High-Ticket Corporate ORM", "Keyword": "online reputation management company", "Match Type": "Exact", "Max CPC": "150"},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "High-Ticket Corporate ORM", "Keyword": "corporate reputation management", "Match Type": "Exact", "Max CPC": "150"},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "High-Ticket Corporate ORM", "Keyword": "reputation management services", "Match Type": "Phrase", "Max CPC": "150"},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "High-Ticket Corporate ORM", "Keyword": "orm agency", "Match Type": "Phrase", "Max CPC": "150"},

    # Ad Group 2: Google Review Removal
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "Google Review Removal", "Keyword": "remove google review", "Match Type": "Exact", "Max CPC": "150"},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "Google Review Removal", "Keyword": "delete fake google review", "Match Type": "Phrase", "Max CPC": "150"},

    # Negative Keywords (Campaign Level)
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "", "Keyword": "-free", "Match Type": "Broad", "Max CPC": ""},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "", "Keyword": "-cheap", "Match Type": "Broad", "Max CPC": ""},
    {"Campaign": "ORM Search Campaign", "Campaign Daily Budget": "", "Campaign Type": "", "Ad Group": "", "Keyword": "-software", "Match Type": "Broad", "Max CPC": ""},
]

with open('scratch/google_ads_bulk_upload.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["Campaign", "Campaign Daily Budget", "Campaign Type", "Ad Group", "Keyword", "Match Type", "Max CPC"])
    writer.writeheader()
    writer.writerows(data)
