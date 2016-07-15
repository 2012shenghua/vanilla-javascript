let benchmark = require('benchmark');
let suit = new benchmark.Suite;


let sub = length => {let i = length;for(; i; i--);}
let add = length => {let i = 0;for(; i < length; i++);}
let arr = [1,2,2,3,4,1,3];
const sort1 = arr => {
    //数组深拷贝，为了不影响原来的数组
    const newArr = arr.concat();
    newArr.sort();
    let i = newArr.length;
    for (; i >= 0; i--) {
        // use == if '2' eq 2, else ===
        if (newArr[i] === newArr[i - 1]) {
            newArr.splice(i, 1);
        }
    }
    return newArr;
};
const sort2 = arr => {
    //数组深拷贝，为了不影响原来的数组
    const newArr = arr.concat();
    newArr.sort();
    let i = 0;
    for (; i < newArr.length; i++) {
        // use == if '2' eq 2, else ===
        if (newArr[i] === newArr[i - 1]) {
            newArr.splice(i--, 1);
        }
    }
    return newArr;
};
suit.add('sort1', function() {
    sort1(arr);
}).add('sort2', function() {
    sort2(arr);
}).add('sub', function() {
    sub(1000000);
}).add('add', function() {
    add(1000000);
}).on('cycle', function(e) {
    console.log(String(e.target));
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});

