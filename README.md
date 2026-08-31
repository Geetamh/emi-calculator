# EMI Guru

A Next.js EMI (Equated Monthly Instalment) calculator for home loans, personal loans and car loans, with a visual break-up of principal vs. interest.

## Features
- Tabs to switch between Home Loan, Personal Loan and Car Loan, each with sensible default ranges
- Linked input box + slider for amount, interest rate, and tenure (years or months)
- Instant EMI, total interest, and total payment calculation using the standard reducing-balance formula
- Custom SVG donut chart showing principal vs. interest split (no chart library dependency)
- Sidebar for featured calculators/articles (placeholder for future internal content) and an ad slot placeholder for Google AdSense
- SEO: sitemap.xml, robots.txt, page metadata/Open Graph, and an on-page "How EMI is calculated" + FAQ section for real, indexable text content

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Before going live
- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your actual domain once you have one
- Replace the placeholder `.ad-slot` in `components/FeaturedSidebar.tsx` with your real AdSense ad unit code once approved
- Fill in real articles/calculators in `components/FeaturedSidebar.tsx` as you build them

## Project structure
- `app/page.tsx` — page shell, layout grid (calculator + sidebar)
- `components/EmiCalculator.tsx` — the calculator itself (tabs, sliders, results)
- `components/LoanSlider.tsx` — reusable linked input + range slider
- `components/BreakdownChart.tsx` — custom SVG donut chart
- `components/FeaturedSidebar.tsx` — sidebar content + ad slot
- `components/SeoContent.tsx` — on-page SEO text/FAQ
- `lib/emiCalculations.ts` — EMI formula and loan-type presets
