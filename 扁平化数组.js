function flat(data, res) {
    for(var i = 0, len = data.length; i < len; i++) {
        var d = data[i];
        if(typeof d == 'number') {
            res.push(d);
        }else {
            flat(d, res);
        }
    }
}

var data =  [1, [2, [ [3, 4], 5], 6]],
    res = [];
flat(data, res);
console.log(res);