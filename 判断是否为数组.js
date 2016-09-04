function isArray(arg) {
    if(typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}

var a = [1];
console.log(isArray(a));