#!/usr/bin/env node

/**
 * Automated IndexNow Submission Script
 * Submits all core and newly published URLs to IndexNow (Bing, Copilot, Yandex, Seznam, Naver).
 */

const key = 'e8d2f143a579482fa8162d98c25391a0';
const host = 'onlinereputationbuilders.in';
const keyLocation = `https://${host}/${key}.txt`;

const priorityUrls = [
  `https://${host}/`,
  `https://${host}/review-management/negative-link-removal`,
  `https://${host}/business/remove-negative-results`,
  `https://${host}/review-management/fake-review-removal`,
  `https://${host}/review-management/video-removal`,
  `https://${host}/review-management/news-article-removal-from-the-internet`,
  `https://${host}/business/remove-google-business-review`,
  `https://${host}/individual/change-google-autocomplete`,
  `https://${host}/review-management/ambitionbox-reputation-management`,
  `https://${host}/review-management/youtube-video-removal`,
  `https://${host}/review-management/reddit-post-removal`,
  `https://${host}/review-management/quora-content-removal`,
  `https://${host}/review-management/complaint-removal-and-management-services`,
  `https://${host}/review-management/trustpilot-reputation-management`,
  `https://${host}/review-management/yelp-review-management`,
  `https://${host}/reputation-management`,
  `https://${host}/blog/5-easy-steps-to-remove-fake-news-articles-from-the-internet`,
  `https://${host}/blog/how-to-push-down-negative-search-results`,
  `https://${host}/blog/remove-court-records-from-google`,
  `https://${host}/blog/how-to-remove-negative-links-from-google-search-2026`,
  `https://${host}/blog/how-to-remove-copyright-strike-from-aiplex-software`,
  `https://${host}/blog/remove-fake-news-articles-google-search`,
  `https://${host}/blog/remove-negative-glassdoor-reviews-employers`
];

async function submitIndexNow() {
  console.log(`Submitting ${priorityUrls.length} priority URLs to IndexNow...`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList: priorityUrls
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
      console.log(`[${res.status} ${res.statusText}] -> ${endpoint}`);
    } catch (err) {
      console.error(`Failed at ${endpoint}:`, err.message);
    }
  }

  console.log('IndexNow submission complete.');
}

submitIndexNow();
