const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'Templetes');

const allHtmlFiles = [];
allHtmlFiles.push({ file: 'index.html', dir: rootDir, rel: 'index.html' });

const folders = fs.readdirSync(templatesDir).filter(f => fs.statSync(path.join(templatesDir, f)).isDirectory());
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

console.log('=== CHECKING FOR DIRECTORY-STYLE LINKS (ENDING IN /) ===');
allHtmlFiles.forEach(page => {
  const content = fs.readFileSync(path.join(page.dir, page.file), 'utf8');
  const regex = /href=["']([^"'#?]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    if (raw.startsWith('http') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) continue;
    if (raw.endsWith('/') || !path.extname(raw)) {
      console.log(`[${page.rel}]: Directory-style link found: "${raw}"`);
    }
  }
});
