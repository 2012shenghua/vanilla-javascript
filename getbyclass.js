if (!document.getElementsByClassName) {//如果不存在这个方法
    function getbyclass(cls) {//就自定义一个方法，并传入这个方法的参数，即class名
        var ret = [];//定义一个空数组用来存储获取到指定className元素
        var els = document.getElementsByTagName('*');//获取页面所有元素
        for (var i = 0; i < els.length; i++) {
            if (els[i].className === cls//获取页面元素的className等于传入的那个名字
                    || els[i].className.indexOf(cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls + ' ') >= 0
                    || els[i].className.indexOf(' ' + cls) >= 0) {
                ret.push(els[i]);//把获取到的元素压入空数组ret【】中
            }
        }
        return ret;//返回这个结果集，相当于之前的getElementsByClassName返回的 结果集。
    }
}