function deepClone(obj) {
    var _toString = Object.prototype.toString;
    var res = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor(): {};

    //null, undefined, non-Object, function
    if(!obj || typeof obj !== 'object') {
        return obj;
    }

    //Date
    if(_toString.call(obj) === '[object Date]') {
        return new Date(obj.getTime());
    }

    //RegExp
    if(_toString.call(obj) === '[object RegExp]') {
        var flag = [];
        obj.global && flag.push('g');
        obj.mutiline && flag.push('m');
        obj.ignoreCase && flag.push('i');
        return new RegExp(obj.source, flag.join(''));
    }

    //DOM Node
    if(obj.nodeType && obj.cloneNode) {
        return obj.cloneNode(true);
    }
    
    for(var key in obj) {
        res[key] = typeof obj[key] === 'object'? deepClone(obj[key]) : obj[key];
    }

    return res;
}

!(function(){
    var obj = {
        name: 'qiu',
        birth: new Date(),
        pattern: /qiu/gim,
        hobbys: ['book', new Date(), /aaa/gim, 111],
        func: function() {}
    };
    var newObj = deepClone(obj);
    console.log(newObj === obj);
    console.log(newObj, obj);
    console.log(newObj.hobbys === obj.hobbys)
})()