const _ = require('lodash');
const print = require('./print.js');

const match = _.curry((reg, str) => str.match(reg));
const filter = _.curry((f, arr) => arr.filter(f));
const compose = (f, g) => x => f(g(x));
const havaSpace = match(/\s+/g);

var first = arr => arr[0];
var reverse = arr => arr.reverse();

var last = compose(first, reverse);

print(last([1,2,3,4,5]));
// print(havaSpace('hahah'));
// print(havaSpace('a b'));

// print(filter(havaSpace, ['aa', 'hello world']));