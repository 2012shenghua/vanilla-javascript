const print = require('./print.js');

function randomString(len) {
    for(var rdmString = ''; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}

!(function(){
    print(randomString(5));
    print(randomString(15));
})()