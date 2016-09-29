var toTheMin = require('../toTheMin.js');

describe('basic test', function(){
    it('expect [300,600,2] tobe 52', function() {
        var arr = [300, 600, 2];
        var list = arr.sort(function(a, b) {
            return a - b;
        });
        var num = list.length;
        expect(toTheMin.toTheMin1(1000,num,list,0)).toBe(52);
        expect(toTheMin.toTheMin2(1000,num,list)).toBe(52);
    })
})