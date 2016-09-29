var powerOfTwo = require('../powerOfTwo.js');

describe('basic test', function(){
    it('test sample', function() {
        expect(powerOfTwo.judge(16)).toBe(true);
        expect(powerOfTwo.judge(12)).toBe(false);
        expect(powerOfTwo.judge(1024)).toBe(true);
    })
})