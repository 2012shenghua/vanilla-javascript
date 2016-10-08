const print = require('./print.js');

var arr = [1,3,88,100];

print(Math.max(arr[0],arr[1],arr[2],arr[3]));
print(Math.max.call(Math,arr[0],arr[1],arr[2],arr[3]));
print(Math.max.apply(Math,arr));