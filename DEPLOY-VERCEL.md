# Vercel deployment

This package is arranged so `index.html` is at the project root.

## Recommended Vercel settings
- Framework Preset: Other
- Root Directory: leave blank if these files are in the root of your GitHub repository
- Build Command: leave blank
- Output Directory: `.` (the included `vercel.json` also sets this)
- Install Command: leave blank

## Important
When you upload these files to GitHub, `index.html`, `vercel.json`, `app.js`, and `styles.css` should be visible immediately at the repository root.

Do not upload a parent folder that contains another `unlocking-the-bible-v2` folder unless you set that folder as the Vercel Root Directory.

After correcting settings, redeploy from Vercel.
