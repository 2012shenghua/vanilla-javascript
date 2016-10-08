const fs = require('fs');
const print = require('./print.js');
const rs = fs.createReadStream('./test/test.txt','utf-8');

rs.on('data', chunk => print('DATA1:' + chunk));

rs.on('data', chunk => print('DATA2:' + chunk));

rs.on('end', () => print('END:'));

rs.on('err', err => print('ERROR:' + err));