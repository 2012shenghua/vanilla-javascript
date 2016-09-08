function randomString(len) {
    for(var rdmString = ''; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}

!(function(){
    console.log(randomString(5));
    console.log(randomString(15));
})()