const fs = require('fs');

async function submitIndexNow() {
  const host = 'onlinereputationbuilders.in';
  const key = '1f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o';
  
  const urls = [
    'https://onlinereputationbuilders.in/blog/remove-glassdoor-reviews',
    'https://onlinereputationbuilders.in/blog/delete-mouthshut-complaints',
    'https://onlinereputationbuilders.in/blog/remove-quora-defamation',
    'https://onlinereputationbuilders.in/blog/remove-fake-google-maps-reviews',
    'https://onlinereputationbuilders.in/blog/trustpilot-review-removal-guide',
    'https://onlinereputationbuilders.in/blog/reddit-defamation-removal'
  ];

  const payload = {
    host: host,
    key: key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    console.log("✅ Successfully pinged IndexNow! Bing is indexing the 6 platform takedown pages.");
  } else {
    console.log("Error:", response.status, await response.text());
  }
}

submitIndexNow().catch(console.error);
