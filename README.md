# Unlocking the Bible - Student Web App

A public 12-lesson Bible-study website based on the uploaded Unlocking the Bible curriculum.

## Included

- No login or student dashboard
- All 12 lessons are immediately browsable
- Desktop 3-panel layout: lessons / study content / Bible
- Mobile lesson drawer and Bible drawer
- Interactive Bible-story / end-times timelines
- Clickable Scripture references
- KJV, NIV, NLT and Tagalog Bible tabs through API.Bible
- Simple knowledge check for every lesson
- Reflection notes saved only in the student's browser (localStorage)
- Vercel-ready serverless Bible proxy so the API key is not exposed in browser JavaScript

## Run locally

For the lesson UI only:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

The `/api/bible` function is a Vercel Serverless Function and works after deployment. To test that function locally, install the Vercel CLI and run `vercel dev`.

## Connect the Bible sidebar

1. Create an API.Bible account and obtain an API key.
2. In Vercel open your project → Settings → Environment Variables.
3. Add:

   `API_BIBLE_KEY = your_secret_key`

4. Redeploy.
5. In your API.Bible account, make sure the translations you want are available to your plan/license.

The app dynamically finds an available KJV, NIV and NLT by their metadata. For Tagalog it looks for a Bible whose metadata contains Tagalog, Filipino, Ang Biblia, or Magandang Balita.

> NIV and NLT are copyrighted translations. Availability depends on the Bible licenses attached to your API.Bible account. Keep copyright information returned by the API visible in the Bible panel.

## Deploy to Vercel

### GitHub method

1. Put these files in a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Other**.
4. No build command is required.
5. Add `API_BIBLE_KEY` in Vercel environment variables.
6. Deploy.

### Vercel CLI

```bash
vercel
```

## Easy customization

- Site title / header: `index.html`
- Colors and typography: top of `styles.css`
- Lesson text, references, quizzes and reflection questions: `lessons` array at the top of `app.js`
- Bible API translation matching: `api/bible.js`

## Source note

This prototype adapts and summarizes the uploaded 2018 *Unlocking the Bible* lesson materials for a student-facing web experience. Review your permission to publish/adapt the curriculum publicly before deploying it to a public URL.
