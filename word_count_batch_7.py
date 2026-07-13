import json
import os

SCRATCH_DIR = "/Users/suresh/.gemini/antigravity/brain/8e6cc1d3-61f8-4c70-8c01-e1c2ac73b5cb/scratch"
slugs = [
    "why-do-small-businesses-need-orm-in-2025",
    "why-g2-review-management-should-be-at-the-core-of-your-orm-strategy",
    "how-brand-reputation-influences-customer-satisfaction",
    "building-long-term-trust-through-orm",
    "why-online-reputation-management-matters-more-than-ever",
    "how-can-quora-content-removal-protect-your-online-reputation",
    "why-online-review-management-is-important-for-brands",
    "crisis-management-tips-for-brand-protection",
    "case-study-nikes-online-reputation-management-success",
    "how-online-reputation-builder-helps-you-build-a-secure-and-trustworthy-brand"
]

all_good = True
for slug in slugs:
    json_path = os.path.join(SCRATCH_DIR, f"{slug}.json")
    if os.path.exists(json_path):
        with open(json_path, 'r') as f:
            data = json.load(f)
            text = " ".join([b.get('content', '') or b.get('text', '') for b in data])
            words = len(text.split())
            if words < 1000:
                print(f"WARNING: {slug}: {words} words")
                all_good = False
            else:
                print(f"OK: {slug}: {words} words")
    else:
        print(f"MISSING: {slug}")
        all_good = False

if all_good:
    print("ALL 10 BATCH 7 BLOGS ARE 1000+ WORDS.")
