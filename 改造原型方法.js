/*
现有一个Page类,其原型对象上有许多以post开头的方法(如postMsg);另有一拦截函数chekc,只返回ture或false.请设计一个函数,
该函数应批量改造原Page的postXXX方法,在保留其原有功能的同时,为每个postXXX方法增加拦截验证功能,当chekc返回true时继续
执行原postXXX方法,返回false时不再执行原postXXX方法 
*/
const print = require('./print.js');

function Page() {}

Page.prototype = {
    constructor: Page,
    postA: function(arg) {
        print('a = ' + arg);
    },
    postB: function(arg) {
        print('b = ' + arg);
    },
    postC: function(arg) {
        print('c = ' + arg);
    },
    check: function() {
        return Math.random() > 0.5;
    }
}

function checkfy(obj) {
    for(var key in obj) {
        if(key.indexOf('post') === 0  && typeof obj[key] === 'function') {
            (function (key) {
                var fn = obj[key];
                obj[key] = function () {
                if (obj.check()) {
                    fn.apply(obj, arguments);
                }
                };
            }(key));
        }
    }
}

!(function() {
    checkfy(Page.prototype);
    var page = new Page();
    page.postA('checkfy');
    page.postB('checkfy');
    page.postC('checkfy');
})()