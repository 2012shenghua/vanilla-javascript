function normalize(arr) {
    if (arr && Array.isArray(arr)) {
        for (var i = arr.length; i > 0; i--) {
            if ( arr[i] === arr[ i - 1 ] ) { // use == if '2' eq 2, else ===
             arr.splice( i, 1 );
            }
        }
        return arr;
    }
}

function ascSort(arr) {
    arr.sort(function(a, b) {
        return a - b;
    })
}

function fillArray(arr, start, end) {
    var start = start == undefined ? 1 : start,
        end = end == undefined ? 100 : end;
    if(end <= start) {
        end = start + 100;
    }
    var width = end - start;
    for(var i = 100; i > 0; i--) {
        arr.push(Math.floor(Math.random() * width) + start);
    }
    return arr;
}

!(function(){
    var arr= [];
    fillArray(arr, 1, 100);
    ascSort(arr);
    normalize(arr);
    console.log(arr);
})()