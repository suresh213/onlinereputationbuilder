# Build Brand Better – Next.js Clone

A pixel-faithful clone of buildbrandbetter.io built with Next.js 14, TypeScript, and Tailwind CSS.

## Pages Included

| Route | Page |
|-------|------|
| `/` | Homepage (full) |
| `/remove-negative-results` | Remove Negative Google Results | 
| `/review-management` | Review Management |
| `/reputation-audit` | Online Reputation Audit |
| `/crisis-management` | Crisis Management |

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** – Playfair Display + DM Sans

## Getting Started

```bash
# 1. Unzip the folder
unzip buildbrandbetter.zip
cd buildbrandbetter

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
buildbrandbetter/
├── app/
│   ├── globals.css              # All custom styles + Tailwind
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── remove-negative-results/ # Page 2
│   ├── review-management/       # Page 3
│   ├── reputation-audit/        # Page 4
│   └── crisis-management/       # Page 5
├── components/
│   ├── Topbar.tsx               # Top info bar
│   ├── Navbar.tsx               # Sticky nav with dropdowns
│   ├── Footer.tsx               # Full footer with CTA
│   ├── ContactForm.tsx          # Reusable contact form
│   ├── StatsBar.tsx             # Stats section
│   └── FAQ.tsx                  # Accordion FAQ
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Notes

- Images are loaded directly from buildbrandbetter.io CDN
- All sections match the original site's layout and content
- Fully responsive (mobile, tablet, desktop)
- Built-in FAQ accordion, mobile nav, marquee animations
