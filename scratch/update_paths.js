const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const htmlFiles = walk('Templetes');
console.log('Found', htmlFiles.length, 'HTML files inside Templetes/');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace ../styles with ../../styles
  content = content.split('../styles/').join('../../styles/');
  
  // Replace ../scripts with ../../scripts
  content = content.split('../scripts/').join('../../scripts/');

  // Replace ../images with ../../images
  content = content.split('../images/').join('../../images/');

  // Replace ../index.html in return bar with ../../index.html
  content = content.split('../index.html').join('../../index.html');

  fs.writeFileSync(file, content, 'utf8');
  console.log('✓ Updated paths in:', file);
});
console.log('Finished updating all relative paths in Templetes/!');
