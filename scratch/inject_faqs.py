import os
import re

def get_faqs_for_path(path):
    # 1. Platform Review Removals
    if 'glassdoor' in path.lower():
        return [
            {"question": "How to remove fake employee reviews from Glassdoor?", "answer": "You can flag reviews that violate Glassdoor's community guidelines. If the review contains defamatory statements or breaches confidentiality, you may need to escalate with legal removal requests."},
            {"question": "Can a company delete a Glassdoor review?", "answer": "A company cannot directly delete a review, but we can help identify policy violations and legally petition Glassdoor's legal team for permanent removal of false or malicious reviews."},
            {"question": "How to sue Glassdoor for defamation?", "answer": "Suing Glassdoor directly is difficult due to Section 230 of the CDA, but you can file a 'John Doe' lawsuit to unmask the anonymous reviewer and compel removal via court order. We assist with this entire legal process."}
        ]
    elif 'google-business-review' in path.lower() or 'google' in path.lower() and 'review' in path.lower():
        return [
            {"question": "How to remove negative reviews from Google?", "answer": "You can flag the review if it violates Google's policies (e.g., spam, conflict of interest, harassment). If Google rejects the flag, we escalate the case to their legal department for removal."},
            {"question": "Can a business owner delete a fake Google review?", "answer": "No, business owners do not have a 'delete' button. You must report it to Google with sufficient evidence that it violates their guidelines or is legally defamatory."},
            {"question": "Guaranteed Google review removal services - do they exist?", "answer": "Yes, we guarantee our removal services. If a review violates Google's Terms of Service or is defamatory, our legal and compliance teams can guarantee its removal or you don't pay."}
        ]
    elif 'youtube' in path.lower():
        return [
            {"question": "How to take down a defamatory video from YouTube?", "answer": "We submit highly detailed privacy complaints, copyright (DMCA) takedowns, or defamation claims directly to YouTube's legal team to strike the video from the platform."},
            {"question": "Can I find out who posted anonymously on YouTube?", "answer": "Yes, through targeted legal subpoenas we can often compel YouTube (Google) to reveal the IP address and registration details of the anonymous uploader."}
        ]
    elif 'crisis-management' in path.lower():
        return [
            {"question": "How to handle a massive corporate PR crisis online?", "answer": "Immediate action is required. We deploy a multi-channel strategy including rapid-response PR, negative link suppression, and social media management to control the narrative and protect your stock and brand value."},
            {"question": "How much does online crisis management cost?", "answer": "Costs vary depending on the severity of the crisis. We offer customized retainers that provide 24/7 monitoring, rapid legal takedowns, and massive positive PR injection."}
        ]
    elif 'personal-branding' in path.lower():
        return [
            {"question": "Best personal branding strategies for CEOs and executives?", "answer": "We build highly authoritative Wikipedia pages, secure Forbes and Bloomberg features, and dominate Google page 1 with premium thought-leadership content to establish unmatched industry authority."},
            {"question": "How to change Google autocomplete search suggestions?", "answer": "We manipulate search behavior using advanced SEO techniques to replace negative autocomplete suggestions (like 'CEO fraud') with positive ones (like 'CEO philanthropy')."}
        ]
    elif 'remove-private-info' in path.lower():
        return [
            {"question": "How to remove my personal information from Google search?", "answer": "We submit targeted Right to be Forgotten requests and privacy complaints to Google and individual data brokers to scrub your address, phone number, and family details from the internet."}
        ]
    elif 'solution' in path.lower():
        return [
            {"question": f"How to manage online reputation for my industry?", "answer": "We deploy industry-specific strategies, such as HIPAA-compliant review management for healthcare or aggressive PR suppression for politicians, ensuring your specific audience sees only a 5-star reputation."},
            {"question": "How to remove fake client reviews?", "answer": "We identify coordinated attack patterns and submit robust legal removal requests to the platforms hosting the fake reviews, permanently deleting them from your profile."}
        ]
    elif 'review-management' in path.lower():
        return [
            {"question": "How to remove negative reviews from complaint sites?", "answer": "We use a combination of direct legal takedown notices, arbitration, and aggressive search engine suppression to bury complaints on page 2 or 3 of Google where nobody will ever see them."},
            {"question": "Can I sue a reviewer for defamation?", "answer": "Yes, if the review contains verifiably false statements of fact that cause financial damage to your business, you can pursue a defamation lawsuit. We provide the litigation support needed."}
        ]
    else:
        return [
            {"question": "How to permanently remove negative search results from Google?", "answer": "We use proprietary legal frameworks and aggressive SEO suppression to either permanently delete the negative link at the source or bury it deep on page 3 of Google."},
            {"question": "How much does online reputation management cost?", "answer": "Costs vary based on the authority of the negative links. We provide a free, confidential audit within 2 hours to give you a precise quote and timeline for guaranteed removal."}
        ]

def inject_faq_into_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already injected
    if 'FAQSection' in content:
        return False

    faqs = get_faqs_for_path(filepath)
    
    # 1. Inject the import statement
    import_statement = 'import FAQSection from "@/components/FAQSection";\n'
    # Find the last import statement
    import_matches = list(re.finditer(r'^import .*;', content, re.MULTILINE))
    if import_matches:
        last_import = import_matches[-1]
        insert_pos = last_import.end() + 1
        content = content[:insert_pos] + import_statement + content[insert_pos:]
    else:
        # Fallback, put it after "use client" if it exists
        if '"use client";' in content:
            content = content.replace('"use client";', '"use client";\n' + import_statement)
        else:
            content = import_statement + content

    # 2. Inject the component before <Footer />
    # Format the faqs array as a string
    faqs_str = "[\n"
    for faq in faqs:
        question = faq['question'].replace('"', '\\"')
        answer = faq['answer'].replace('"', '\\"')
        faqs_str += f'      {{ question: "{question}", answer: "{answer}" }},\n'
    faqs_str += "    ]"

    faq_component = f"\n      <FAQSection items={{{faqs_str}}} />\n      "
    
    # Replace <Footer /> with FAQSection + Footer
    if '<Footer />' in content:
        content = content.replace('<Footer />', faq_component + '<Footer />')
    elif '</footer>' in content.lower():
        # Edge case, some might have manual footers
        pass
    else:
        # Just append before the last closing div/main
        content = re.sub(r'(</main>|</div>\s*)$', faq_component + r'\1', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

directories = ['app/business', 'app/individual', 'app/review-management', 'app/solution']

count = 0
for root_dir in directories:
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename == 'page.tsx':
                filepath = os.path.join(dirpath, filename)
                if inject_faq_into_file(filepath):
                    count += 1

print(f"Successfully injected FAQSection into {count} pages.")
