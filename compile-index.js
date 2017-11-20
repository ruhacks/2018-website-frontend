const fs = require('fs');
const pug = require('pug');
const input = './views/index.pug';
const output = './index.html';
const options = { pretty: true };

fs.writeFileSync(output, pug.renderFile(input, options));