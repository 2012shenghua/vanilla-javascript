exports.judge = function judge(a) {  
    if(a == 2) {
        return true;
    }
    if(a % 2) {
        return false;
    }else {
        a = a / 2;
        return judge(a);
    }
}
