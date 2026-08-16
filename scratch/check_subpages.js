const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'Templetes');

const folders = fs.readdirSync(templatesDir).filter(f => {
  return fs.statSync(path.join(templatesDir, f)).isDirectory();
});

console.log('Template Folders found:', folders.length);

let totalSubpages = 0;
let missingLinks = [];
let allFiles = [];

// Also check index.html in root
const rootIndex = path.join(rootDir, 'index.html');
if (fs.existsSync(rootIndex)) {
  allFiles.push({ dir: rootDir, file: 'index.html', full: rootIndex });
}

folders.forEach(folder => {
  const fPath = path.join(templatesDir, folder);
  const files = fs.readdirSync(fPath);
  files.forEach(file => {
    if (file.endsWith('.html')) {
      allFiles.push({ dir: fPath, file: file, full: path.join(fPath, file), folder: folder });
    }
  });
});

console.log(`Total HTML files found to check: ${allFiles.length}`);

allFiles.forEach(item => {
  const content = fs.readFileSync(item.full, 'utf8');
  
  // Check if file is essentially blank (< 300 bytes or minimal content)
  if (content.trim().length < 400) {
    console.warn(`[BLANK/EMPTY WARNING]: ${item.folder || 'root'}/${item.file} is only ${content.length} bytes!`);
  }

  const linkRegex = /(?:href|src)=["']([^"'#?]+)["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const link = match[1];
    if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:') || link.startsWith('data:')) {
      continue;
    }
    const resolved = path.resolve(item.dir, link);
    if (!fs.existsSync(resolved)) {
      missingLinks.push({
        sourceFile: `${item.folder ? item.folder + '/' : ''}${item.file}`,
        rawLink: link,
        resolvedPath: resolved
      });
    }
  }
});

console.log('\n--- MISSING / 404 LINKS REPORT ---');
if (missingLinks.length === 0) {
  console.log('No missing file paths found!');
} else {
  console.log(`Found ${missingLinks.length} broken/404 references:`);
  missingLinks.forEach(m => {
    console.log(`  in ${m.sourceFile}: -> "${m.rawLink}" (Resolved: ${m.resolvedPath})`);
  });
}
