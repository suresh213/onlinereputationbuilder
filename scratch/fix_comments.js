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
    } else if (file.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walkDir(solutionDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix the broken comments by ensuring they have // in front of them
  const brokenPhrases = [
    'Mapped original trustStrip data to online image URLs via Favicon API',
    'Custom Scroll Reveal Hook',
    'Smooth Animated Counter Component'
  ];

  brokenPhrases.forEach(phrase => {
    // Replace the exact phrase at the start of a line (with optional spaces)
    const regex = new RegExp(`^(\\s*)(${phrase})`, 'gm');
    content = content.replace(regex, '$1// $2');
  });

  fs.writeFileSync(file, content);
  console.log(`Fixed comments in: ${file}`);
});
