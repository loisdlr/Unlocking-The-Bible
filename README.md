# Unlocking the Bible — Public Student Version

This version is designed for a **public student-facing Bible study website**.

## What this version includes
- 12 lessons in a modern church elegant design
- Full lesson content copied from the uploaded source PDFs and displayed page by page as web text
- Creative built-in lesson graphics (no uploaded lesson images required)
- Bible quick-reference side panel with KJV / NIV / NLT / Tagalog support via API
- Progress tracking and reflection notes saved locally in the student’s browser
- Mobile responsive layout

## What this version does NOT include
- No original source PDF files
- No public PDF URLs
- No page-image uploads required for the lesson content

## Files
- `index.html` — main app shell
- `styles.css` — full site styling
- `app.js` — lesson data, interactions, progress, notes, Bible panel
- `lesson-pages.js` — full extracted lesson page text from the source PDFs
- `assets/` — generated SVG graphics for the 12 lessons
- `api/bible.js` — Bible API endpoint for passage lookup
- `vercel.json` — cache headers for generated assets

## Deploy on Vercel
1. Upload the project to a GitHub repository.
2. Import the repository into Vercel.
3. Add your `API_BIBLE_KEY` environment variable if you want live Bible lookup.
4. Deploy.

## Bible API note
The Bible side panel is ready, but you need your own API key in Vercel for live verse retrieval.

