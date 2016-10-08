const print = require('./print.js');

function* fibs(end) {
    var a = 1;
    var b = 1;

    yield a;
    [a, b] = [b, a + b];
    return [a,b];
}

for (let v of fibs()) {
    print(v);
}