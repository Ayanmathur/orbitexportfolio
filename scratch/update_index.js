const fs = require('fs');

const folders = [
  'salon', 'clinic', 'jeweller', 'cakeshop', 'tuition',
  'gym', 'cafe', 'clothing', 'realestate', 'tiffin',
  'detailing', 'coffee', 'streetwear', 'couture', 'marketplace'
];

let content = fs.readFileSync('index.html', 'utf8');

folders.forEach(f => {
  content = content.split('href="' + f + '/').join('href="Templetes/' + f + '/');
  content = content.split("href='" + f + '/').join("href='Templetes/" + f + '/');
});

fs.writeFileSync('index.html', content, 'utf8');
console.log('✓ Updated index.html with Templetes/ prefix successfully!');
