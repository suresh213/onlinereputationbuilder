const fs = require('fs');
const path = require('path');

const solutionDir = path.join(__dirname, '..', 'app', 'solution');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file === 'page.tsx') {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(solutionDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the exact occurrence of "use client";
  const clientIndex = content.indexOf('"use client";');
  
  if (clientIndex !== -1 && clientIndex > 0) {
    // Delete everything before "use client";
    content = content.substring(clientIndex);
    fs.writeFileSync(file, content);
    console.log(`Cleaned duplicates from: ${file}`);
  }
});
