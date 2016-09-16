function countStr(str) {
    var obj = {};
    for(var i = 0, l = str.length, k; i < l; i++) {
        k = str.charAt(i);
        obj[k] = obj[k] ? obj[k] + 1 : 1;
    }
    var m = 0,
        i = null;
    for(var k in obj) {
        if(obj[k] > m) {
            m = obj[k];
            i = k;
        }
    }
    return i + ':' + m;
}

var str = 'qqqqjjjjjjjaai';
console.log(countStr(str));