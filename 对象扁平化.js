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

const arrayIncludes = (arr, a) => arr.toString().includes(a.toString()) ;

const sear = (obj, deep, arr) => {
    for(let key in obj) {
        !arr[deep] && (arr[deep] = []);
        var keys = Object.keys(obj);
        !arrayIncludes(arr[deep], keys) && arr[deep].push(Object.keys(obj));
        if(typeof obj[key] === 'object') {
            sear(obj[key], deep+1,arr);
        }
    }
    return arr;
}

console.log(sear(obj, 0, {}))
var res = _.flattenDeep(sear(obj, 0, []).reverse());
console.log(res);

