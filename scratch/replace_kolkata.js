const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'app');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(targetDir);
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace Kolkata with India (respecting case)
  content = content.replace(/Kolkata/g, 'India');
  content = content.replace(/kolkata/g, 'india');
  
  // Clean up any double "India, India" or "India India" that might happen 
  // if the text originally said "Kolkata, India"
  content = content.replace(/India, India/g, 'India');
  content = content.replace(/India India/g, 'India');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`Successfully updated ${changedFiles} files to replace Kolkata with India.`);
