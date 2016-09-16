function isPrime(num) {
    if(typeof num !== 'number' || !Number.isInteger(num) || num < 2) {
        return false;
    }
    if(num === 2) {
        return true;
    }else if(num % 2 === 0) {
        return false;
    }
    var limit = Math.sqrt(num);
    for(var i = 3; i < limit; i += 2) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(7));