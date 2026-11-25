const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);
if (!match) throw new Error('No inline application script found');
new vm.Script(match[1], { filename: 'index.html:inline-script' });
console.log('PocketBudget inline JavaScript syntax: OK');
