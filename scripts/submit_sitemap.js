const fs = require('fs');
const creds = JSON.parse(fs.readFileSync('/Users/suresh/.config/gsc/credentials.json', 'utf8'));

const CLIENT_ID = creds.client_id || creds.web?.client_id;
const CLIENT_SECRET = creds.client_secret || creds.web?.client_secret;
const REFRESH_TOKEN = creds.refresh_token;

async function getAccessToken() {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: 'refresh_token'
    })
  });
  return (await r.json()).access_token;
}

async function submitSitemap() {
  const token = await getAccessToken();
  const siteUrl = encodeURIComponent('sc-domain:onlinereputationbuilders.in');
  const feedpath = encodeURIComponent('https://onlinereputationbuilders.in/sitemap.xml');
  
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${siteUrl}/sitemaps/${feedpath}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (r.status === 204 || r.status === 200) {
    console.log("✅ Sitemap successfully submitted to Google Search Console!");
  } else {
    const d = await r.text();
    console.log("Error submitting sitemap:", r.status, d);
  }
}

submitSitemap().catch(console.error);
