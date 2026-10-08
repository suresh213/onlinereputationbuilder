const fs = require('fs');

async function submitIndexNow() {
  const host = 'onlinereputationbuilders.in';
  const key = '1f8a9b2c3d4e5f6g7h8i9j0k1l2m3n4o';
  
  // URLs we just created yesterday
  const urls = [
    'https://onlinereputationbuilders.in/blog/b2b-reputation-management-guide',
    'https://onlinereputationbuilders.in/blog/fake-news-removal-india',
    'https://onlinereputationbuilders.in/blog/remove-negative-press-google-musician',
    'https://onlinereputationbuilders.in/blog/orm-for-private-people-public-figures',
    'https://onlinereputationbuilders.in/blog/online-reputation-management-pricing',
    'https://onlinereputationbuilders.in/orm-agency-mumbai',
    'https://onlinereputationbuilders.in/reviews'
  ];

  const payload = {
    host: host,
    key: key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls
  };

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'charset': 'utf-8'
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    console.log("✅ Successfully pinged IndexNow! Bing, Yahoo, and DuckDuckGo are indexing the new pages.");
  } else {
    console.log("Error:", response.status, await response.text());
  }
}

submitIndexNow().catch(console.error);
