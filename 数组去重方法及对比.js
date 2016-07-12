let benchmark = require('benchmark');
let suit = new benchmark.Suite;
let arr1 = [1, 1, 1, 2, 3, 2, 4];
let es6 = () => {
    let array = Array.from(new Set(arr1));
};

let filter = () => { 
    arr1.filter((value, index, array) => { return index <= array.indexOf(value);}); 
};

let json = () => {
    let res = [],
        obj = {};
    arr1.forEach(value => {
        let key = typeof(value) + value;
        !obj.hasOwnProperty(key) && (res.push(value), obj[key] = 1);
    })
    return res;
}

let sort = () => {
    //数组深拷贝，为不了影响原来的数组
    let arr = arr1.concat();
    arr.sort();
    for (var i = 1; i < arr.length; i++ ) {
        if ( arr[i] === arr[ i - 1 ] ) { // use == if '2' eq 2, else ===
            arr.splice( i--, 1 );
        }
    }
    return arr;
}

let foreach = () => {
    arr1.forEach(value => {
        res.indexOf(value) == -1 && res.push(value);
    }, res = [])
}

suit.add('es6', function() {
    es6();
}).add('filter', function() {
    filter();
}).add('json', function() {
    json();
}).add('sort', function() {
    sort();
}).add('foreach', function() {
    foreach();
}).on('cycle', function(event) {
    console.log(String(event.target));
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name') + '\n slowest is ' + this.filter('slowest').map('name'));
}).run({'async': true});
