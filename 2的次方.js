function judge(a) {  
    if(a == 2) {
        console.log('true');
        return true;
    }
    if(a % 2) {
        console.log('false');
        return false;
    }else {
        a = a / 2;
        judge(a);
    }
}
judge(12);
judge(1000);
judge(64);
