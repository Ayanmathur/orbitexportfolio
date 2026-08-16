const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace all href="Templetes/xxx/" with href="Templetes/xxx/index.html"
content = content.replace(/href="Templetes\/([a-zA-Z0-9_-]+)\/"/g, 'href="Templetes/$1/index.html"');

fs.writeFileSync(indexPath, content, 'utf8');
console.log('✓ Updated index.html with explicit /index.html links!');
