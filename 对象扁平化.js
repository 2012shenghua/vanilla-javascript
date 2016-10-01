var _ = require('lodash');

var obj = {
   a: {
       b: {
           c: {f: 'aa'}
       },
       d: {
           e: {g: 'bb'},
           h: {i: 'cc'}
       },
       j: {
           k: 'dd'
       }
   } 
};//f,g,i,c,e,h,k,b,d,j,a

const sear = (obj, deep, arr) => {
    !arr[deep] ? (arr[deep] = Object.keys(obj) ) : (arr[deep] = arr[deep].concat(Object.keys(obj)));
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            sear(obj[key], deep+1,arr);
        }
    }
    return arr;
}

console.log(sear(obj, 0, {}));
var res = sear(obj, 0, []).reverse().join(',');
console.log(res);

