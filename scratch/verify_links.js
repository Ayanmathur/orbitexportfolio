const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
console.log('Root Directory:', rootDir);

// Verify index.html links
const indexContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const indexMatches = indexContent.matchAll(/href=["'](Templetes\/[^"'#?]+)["']/g);
let indexMissing = 0;
let indexChecked = 0;

for (const match of indexMatches) {
  indexChecked++;
  const target = match[1];
  const resolved = path.resolve(rootDir, target);
  if (!fs.existsSync(resolved)) {
    console.error(`✕ Broken Template Link in index.html: ${target} -> ${resolved}`);
    indexMissing++;
  } else {
    // console.log(`✓ Valid link: ${target}`);
  }
}
console.log(`Verified ${indexChecked} template links in index.html. Broken links: ${indexMissing}`);
