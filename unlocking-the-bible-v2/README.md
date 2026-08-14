# Unlocking the Bible — V2 Final Polished

A public, student-facing 12-lesson Bible-study web app with a modern church elegant design.

## V2 highlights
- Welcome / course home page
- 12 polished lesson cover cards
- Full copied lesson text from every uploaded source page
- No original PDF files in the public project
- No uploaded PDF-page images required
- Custom built-in SVG graphics for all 12 lessons
- Key Scripture highlight in each lesson
- Persistent Bible quick-reference panel
- KJV / NIV / NLT / Tagalog tabs through API.Bible
- Lesson progress stored locally on the student’s device
- Full-lesson search
- Expand / collapse all page content
- Reflection and application card with auto-save
- Download personal lesson notes as a text file
- Print-friendly lesson view
- Mobile responsive lesson menu and Bible drawer
- Adjustable reading size

## Main files
- `index.html` — app shell
- `styles.css` — all layout, responsive and print styling
- `app.js` — lesson navigation, home screen, progress, notes, Bible panel and interactions
- `lesson-pages.js` — full extracted page-by-page lesson text
- `assets/lesson-01.svg` ... `lesson-12.svg` — generated lesson artwork
- `api/bible.js` — Bible API endpoint
- `vercel.json` — asset cache rules

## Deploy on Vercel
1. Put this folder in a GitHub repository.
2. Import the repository into Vercel.
3. Add the environment variable `API_BIBLE_KEY` if you want live Bible text.
4. Deploy.

The project contains no source PDF files.
