const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'app', 'blog', 'data.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace Kolkata with Delhi in the blog data to preserve the grammatical structure of lists (e.g., "Delhi, Mumbai, and Bengaluru") while successfully removing Kolkata.
content = content.replace(/Kolkata/g, 'Delhi');

fs.writeFileSync(file, content);
console.log('Updated app/blog/data.ts');
