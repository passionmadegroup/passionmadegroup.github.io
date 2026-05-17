# PASSIONMADE GROUP — deploy with SEO

This folder is the **SEO-optimized draft** of the site, ready to upload to GitHub Pages.

## What's different from `deploy/`?

Every page now includes:

- **`<title>`** — page-specific, bilingual
- **`<meta name="description">`** — 1–2 sentence summary (Google shows this in search results, ~150 chars)
- **`<meta name="keywords">`** — Thai + English keywords across construction, modular housing, premium home, contractor
- **`<link rel="canonical">`** — tells Google the official URL of each page
- **Open Graph tags** (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`) — used by Facebook, LINE, Messenger when someone shares a link
- **Twitter Card tags** — same purpose for X/Twitter
- **`<meta name="robots" content="index, follow">`** — explicitly tell crawlers to index the page

The **home page** additionally includes:
- **Schema.org JSON-LD** — structured `GeneralContractor` data: name, address, phone, email, services, founding date. This is what Google reads to build the right-side "knowledge panel" and rich snippets.

Plus 2 new files at the root:
- **`sitemap.xml`** — lists all 5 pages so Google indexes them faster
- **`robots.txt`** — points to the sitemap

## Before deploying

Update the base URL **inside each HTML file** if your domain is different from `https://www.passionmadegroup.com`. Search-and-replace `https://www.passionmadegroup.com` → your actual domain. Same with `sitemap.xml` and `robots.txt`.

## After deploying

1. Submit your sitemap to **Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add your property (`passionmadegroup.com`)
   - Sitemaps → Add a new sitemap → enter `sitemap.xml`

2. Test your structured data:
   - https://search.google.com/test/rich-results
   - Paste your homepage URL and verify the Organization schema is detected

3. Verify the social-share preview:
   - https://developers.facebook.com/tools/debug/ (paste any page URL)
   - https://cards-dev.twitter.com/validator

## Keywords used

Both Thai and English keywords are layered to capture local Thai search + international queries:

**Thai:**
แพชชั่นเมด กรุ๊ป · ผู้รับเหมาก่อสร้าง · รับเหมาก่อสร้างขอนแก่น · รับสร้างบ้านพรีเมียม · บ้านโมดูลาร์ · รับเหมาก่อสร้างอาคารพาณิชย์ · รับเหมาก่อสร้างโรงแรม · บริษัท วรนิทัศน์ จำกัด

**English:**
PASSIONMADE GROUP · modular housing Thailand · construction company Thailand · premium home builder Thailand · residential construction · commercial construction
