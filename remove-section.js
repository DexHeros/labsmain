const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace('Stay ahead of the curve with insights from AI Start-ups shaping tomorrow\'s technology.', 'Upload or generate your web3 avatar used within the web3 metaverse');
fs.writeFileSync('index.html', content);
console.log('Updated text');

