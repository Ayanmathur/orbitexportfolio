const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'Templetes');

const folders = fs.readdirSync(templatesDir).filter(f => {
  return fs.statSync(path.join(templatesDir, f)).isDirectory();
});

console.log('=== TEMPLATE DIRECTORIES & FILES ===');
folders.forEach(f => {
  const files = fs.readdirSync(path.join(templatesDir, f));
  console.log(`[${f}] (${files.length} files): ${files.join(', ')}`);
});

// Let's crawl every HTML file
console.log('\n=== CRAWLING EVERY LINK IN EVERY PAGE ===');
const allHtmlFiles = [];

// Root index
allHtmlFiles.push({ file: 'index.html', dir: rootDir, rel: 'index.html' });

folders.forEach(f => {
  const fPath = path.join(templatesDir, f);
  fs.readdirSync(fPath).forEach(file => {
    if (file.endsWith('.html')) {
      allHtmlFiles.push({
        file: file,
        dir: fPath,
        rel: `Templetes/${f}/${file}`,
        folder: f
      });
    }
  });
});

let brokenCount = 0;

allHtmlFiles.forEach(page => {
  const content = fs.readFileSync(path.join(page.dir, page.file), 'utf8');
  
  // Extract all href and src
  const regex = /(?:href|src)=["']([^"'#?]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    if (raw.startsWith('http') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:') || raw.startsWith('data:') || raw.startsWith('#')) {
      continue;
    }
    
    const resolved = path.resolve(page.dir, raw);
    if (!fs.existsSync(resolved)) {
      console.error(`🚨 BROKEN LINK in [${page.rel}]: -> "${raw}" (Resolved to: ${resolved})`);
      brokenCount++;
    } else {
      // Check case-sensitivity matching
      const targetDir = path.dirname(resolved);
      const targetBase = path.basename(resolved);
      if (fs.existsSync(targetDir)) {
        const actualFiles = fs.readdirSync(targetDir);
        if (!actualFiles.includes(targetBase)) {
          console.error(`⚠️ CASE SENSITIVITY MISMATCH in [${page.rel}]: "${raw}" vs actual "${actualFiles.find(x => x.toLowerCase() === targetBase.toLowerCase())}"`);
          brokenCount++;
        }
      }
    }
  }

  // Also check inline onclick window.location or open
  const jsLinkRegex = /(?:location\.href|window\.open)\s*=\s*['"]([^'"]+)['"]/g;
  while ((match = jsLinkRegex.exec(content)) !== null) {
    const raw = match[1].split('?')[0];
    if (raw.startsWith('http') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
    const resolved = path.resolve(page.dir, raw);
    if (!fs.existsSync(resolved)) {
      console.error(`🚨 BROKEN JS REDIRECT in [${page.rel}]: -> "${raw}"`);
      brokenCount++;
    }
  }
});

console.log(`\nCrawl complete. Total broken links or case mismatches: ${brokenCount}`);
