#!/usr/bin/env node

/**
 * Universal Fast Indexing Script
 * Submits all pages to IndexNow (Bing/Copilot/Yahoo) and Google Indexing API.
 */

const fs = require('fs');
const path = require('path');

const host = 'onlinereputationbuilders.in';
const indexNowKey = 'e8d2f143a579482fa8162d98c25391a0';
const keyLocation = `https://${host}/${indexNowKey}.txt`;
const credsPath = '/Users/suresh/.config/gsc/credentials.json';

async function fetchSitemapUrls() {
  try {
    const res = await fetch(`https://${host}/sitemap.xml`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    return Array.from(new Set(urls));
  } catch (e) {
    console.warn('Could not fetch remote sitemap, falling back to local audit cache:', e.message);
    const cached = JSON.parse(fs.readFileSync('scratch/zero_impression_urls.json', 'utf8'));
    return cached;
  }
}

async function pingIndexNow(urls) {
  console.log(`\n=== 1. Submitting ${urls.length} URLs to IndexNow (Bing/Copilot/Yahoo) ===`);
  const payload = {
    host,
    key: indexNowKey,
    keyLocation,
    urlList: urls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      console.log(`[IndexNow] ${endpoint} -> Status ${res.status}`);
    } catch (e) {
      console.error(`[IndexNow] Error for ${endpoint}:`, e.message);
    }
  }
}

async function getGoogleToken() {
  if (!fs.existsSync(credsPath)) {
    console.warn('Google Search Console credentials not found at:', credsPath);
    return null;
  }
  const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: creds.client_id || creds.web?.client_id,
      client_secret: creds.client_secret || creds.web?.client_secret,
      refresh_token: creds.refresh_token,
      grant_type: 'refresh_token'
    })
  });
  const data = await res.json();
  return data.access_token;
}

async function pingGoogleIndexing(urls, token, maxUrls = 150) {
  if (!token) return;
  const targetUrls = urls.slice(0, maxUrls);
  console.log(`\n=== 2. Submitting ${targetUrls.length} URLs to Google Indexing API ===`);

  let successCount = 0;
  for (let i = 0; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    try {
      const r = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' })
      });
      if (r.status === 200) {
        successCount++;
        const slug = url.replace(`https://${host}`, '') || '/';
        process.stdout.write(`\r[Google Indexing API] Processed: ${i + 1}/${targetUrls.length} (Success: ${successCount})`);
      }
      await new Promise(res => setTimeout(res, 120));
    } catch (e) {
      console.error(`\nError submitting ${url}:`, e.message);
    }
  }
  console.log(`\nGoogle Indexing API complete: ${successCount} URLs published successfully.`);
}

async function pingSitemaps() {
  console.log('\n=== 3. Pinging Sitemap Endpoints ===');
  const sitemapUrl = encodeURIComponent(`https://${host}/sitemap.xml`);
  const targets = [
    `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    `https://www.bing.com/ping?sitemap=${sitemapUrl}`
  ];

  for (const t of targets) {
    try {
      const res = await fetch(t);
      console.log(`[Sitemap Ping] ${t.split('?')[0]} -> Status ${res.status}`);
    } catch (e) {
      console.log(`[Sitemap Ping] ${t.split('?')[0]} -> Request sent`);
    }
  }
}

async function main() {
  console.log('Starting Fast Indexing Workflow for:', host);
  const urls = await fetchSitemapUrls();
  console.log(`Total URLs identified in sitemap: ${urls.length}`);

  // 1. IndexNow for Bing/Copilot/Yahoo
  await pingIndexNow(urls);

  // 2. Google Indexing API
  const token = await getGoogleToken();
  if (token) {
    // If specific non-indexed list exists, prioritize it, otherwise submit all up to quota
    let targets = urls;
    if (fs.existsSync('scratch/indexing_audit_results.json')) {
      const audit = JSON.parse(fs.readFileSync('scratch/indexing_audit_results.json', 'utf8'));
      const nonIndexed = audit.results
        .filter(r => r.coverageState !== 'Submitted and indexed')
        .map(r => r.url);
      if (nonIndexed.length > 0) {
        console.log(`Found ${nonIndexed.length} prioritized non-indexed URLs from recent audit.`);
        targets = [...nonIndexed, ...urls.filter(u => !nonIndexed.includes(u))];
      }
    }
    await pingGoogleIndexing(targets, token, 180);
  }

  // 3. Sitemap Pings
  await pingSitemaps();

  console.log('\nFast Indexing Execution Complete!');
}

main().catch(console.error);
