const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// Recursively find all html, css, js files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== '.git' && file !== 'node_modules' && file !== '.system_generated') {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = getAllFiles(rootDir);
console.log(`Auditing ${allFiles.length} files for path issues...`);

let absolutePathsFound = [];
let spellingMismatches = [];

allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(rootDir, f);

  // Check for leading slash href or src (e.g. href="/something")
  const slashRegex = /(?:href|src|action)=["'](\/[a-zA-Z0-9_-][^"']*)["']/g;
  let match;
  while ((match = slashRegex.exec(content)) !== null) {
    absolutePathsFound.push({ file: rel, match: match[0], val: match[1] });
  }

  // Check for css url(/something)
  const cssUrlRegex = /url\(["']?(\/[a-zA-Z0-9_-][^"')]+)["']?\)/g;
  while ((match = cssUrlRegex.exec(content)) !== null) {
    absolutePathsFound.push({ file: rel, match: match[0], val: match[1] });
  }

  // Check for spelling 'templates/' (with 'a') vs 'Templetes/' (with 'e')
  const templateRegex = /(templates\/[a-zA-Z0-9_-]+)/gi;
  while ((match = templateRegex.exec(content)) !== null) {
    if (match[1].startsWith('templates/')) {
      spellingMismatches.push({ file: rel, match: match[1] });
    }
  }
});

console.log('\n=== ABSOLUTE LEADING-SLASH PATHS (BREAKS ON GITHUB PAGES & SUBDIRECTORIES) ===');
console.log(`Found ${absolutePathsFound.length} instances:`, absolutePathsFound);

console.log('\n=== SPELLING VARIATIONS (templates vs Templetes) ===');
console.log(`Found ${spellingMismatches.length} instances:`, spellingMismatches);
