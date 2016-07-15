let benchmark = require('benchmark');
let suit = new benchmark.Suite;
let arr = [1, 1, 1, 2, 3, 2, 4];

const es6 = arr => Array.from(new Set(arr));

const filter = arr => arr.filter((value, index, array) => index <= array.indexOf(value)); 

const json = arr => {
    let res = [],
        obj = {};
    arr.forEach(value => {
        //将 1 和 '1' 区分开
        let key = typeof(value) + value;
        !obj.hasOwnProperty(key) && (res.push(value), obj[key] = 1);
    })
    return res;
}

const sort = arr => {
    arr.sort();
    for (var i = arr.length; i > 0; i--) {
        if ( arr[i] === arr[ i - 1 ] ) { // use == if '2' eq 2, else ===
            arr.splice( i, 1 );
        }
    }
    return arr;
}

const foreach = arr => arr.forEach(value => res.includes(value) && res.push(value), res = []);

console.log(foreach(arr));

// let mapFunc = arr => {
//     arr.map(function (item) {
//   return item * item;
// });
//     console.log(arr);
// }
let mapFunc = arr => arr.map((value, index, array) => index != array.indexOf(value) ? value : arr.slice(index, 1))

//console.log(mapFunc(arr));

// console.log(arr);
// suit.add('es6', function() {
//     es6(arr);
// }).add('filter', function() {
//     filter(arr);
// }).add('json', function() {
//     json(arr);
// }).add('sort', function() {
//     sort(arr);
// }).add('foreach', function() {
//     foreach(arr);
// }).add('mapFunc', function() {
//     mapFunc(arr);
// }).on('cycle', function(event) {
//     console.log(String(event.target));
// }).on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name') + '\n slowest is ' + this.filter('slowest').map('name'));
// }).run({'async': true});