const API_ROOT = 'https://rest.api.bible/v1';

const VERSION_MATCHERS = {
  KJV: [b => exactAbbr(b, 'KJV'), b => blob(b).includes('king james version')],
  NIV: [b => exactAbbr(b, 'NIV'), b => blob(b).includes('new international version')],
  NLT: [b => exactAbbr(b, 'NLT'), b => blob(b).includes('new living translation')],
  TAGALOG: [
    b => blob(b).includes('tagalog'),
    b => blob(b).includes('filipino'),
    b => blob(b).includes('ang biblia'),
    b => blob(b).includes('magandang balita')
  ]
};

function blob(b) { return JSON.stringify(b || {}).toLowerCase(); }
function exactAbbr(b, abbr) { return String(b?.abbreviation || '').toUpperCase() === abbr; }
function cleanHTML(html='') {
  // API.Bible provides HTML designed for display. Remove script/event attributes as a precaution.
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+\s*=\s*(["']).*?\1/gi, '');
}

async function bibleFetch(path, apiKey) {
  const r = await fetch(`${API_ROOT}${path}`, { headers: { 'api-key': apiKey } });
  const payload = await r.json().catch(() => ({}));
  if (!r.ok) {
    const msg = payload?.message || payload?.error || `API.Bible returned ${r.status}`;
    const e = new Error(msg); e.status = r.status; throw e;
  }
  return payload;
}

function findVersion(bibles, requested) {
  const key = String(requested || 'KJV').toUpperCase();
  const matchers = VERSION_MATCHERS[key] || VERSION_MATCHERS.KJV;
  for (const matcher of matchers) {
    const found = bibles.find(matcher);
    if (found) return found;
  }
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  const apiKey = process.env.API_BIBLE_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'API_BIBLE_KEY is not configured.',
      message: 'Add an API.Bible key in Vercel Project Settings → Environment Variables, then redeploy.'
    });
  }

  const reference = String(req.query.reference || 'Acts 2:38').trim();
  const requested = String(req.query.version || 'KJV').toUpperCase();

  try {
    const list = await bibleFetch('/bibles', apiKey);
    const bibles = list?.data || [];
    const bible = findVersion(bibles, requested);
    if (!bible) {
      return res.status(403).json({
        error: `${requested} is not available to this API.Bible key.`,
        message: requested === 'TAGALOG'
          ? 'No Tagalog/Filipino Bible was found in this API.Bible account. Enable an available Tagalog translation in the API.Bible dashboard.'
          : `Enable a ${requested} license/version in your API.Bible plan, or choose another translation.`
      });
    }

    // API.Bible search accepts either a passage reference (John 3:16-19)
    // or keyword text. That lets the same sidebar handle both behaviors.
    const result = await bibleFetch(`/bibles/${encodeURIComponent(bible.id)}/search?query=${encodeURIComponent(reference)}&limit=12`, apiKey);
    const data = result?.data || {};

    if (Array.isArray(data.passages) && data.passages.length) {
      const p = data.passages[0];
      return res.status(200).json({
        type: 'passage',
        version: requested,
        versionLabel: bible.abbreviationLocal || bible.abbreviation || bible.nameLocal || bible.name,
        reference: p.reference || reference,
        content: cleanHTML(p.content || ''),
        copyright: p.copyright || bible.copyright || ''
      });
    }

    const verses = Array.isArray(data.verses) ? data.verses.slice(0, 12) : [];
    return res.status(200).json({
      type: 'search',
      version: requested,
      versionLabel: bible.abbreviationLocal || bible.abbreviation || bible.nameLocal || bible.name,
      items: verses.map(v => ({ reference: v.reference, text: v.text }))
    });
  } catch (err) {
    return res.status(err.status || 500).json({ error: 'Bible lookup failed.', message: err.message });
  }
};
