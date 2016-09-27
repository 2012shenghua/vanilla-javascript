var benchmark =require('benchmark');
var suit = new benchmark.Suite;

function toTheMin1(budget,num,valueList,res) {
	var flag = 0;
    for(var i = 0, l = valueList.length; i < l; i++) {
    	if((valueList[i] <= budget) && (valueList[i + 1] > budget) || (i == l - 1)) {
        	flag = 1;
            var min = Math.floor(budget / valueList[i]);
            budget = budget - min * valueList[i];
            if(budget < valueList[0]) {
                console.log(min + res);
                return min + res;
            }else {
            	toTheMin1(budget, i+1, valueList.slice(0,i), min+res);
            }
        }
    }

    if(flag == 0) {
    	return -1;
    }  
}

function toTheMin2(n,m,arr) {
    var dp = {0:0};
    for(var i = m; i >= 0; i--){
        for(var j = arr[i]; j <= n; j++){
            if(dp[j-arr[i]] != undefined){
                if(dp[j] == undefined) {
                    dp[j] = dp[j-arr[i]] + 1;
                }else{
                    dp[j] = Math.min(dp[j], dp[j-arr[i]] + 1);
                }
            }
        }
    }
    return dp[n];
}

var arr = [300, 600, 2];
var list = arr.sort(function(a, b) {
    return a - b;
});
var num = list.length;

suit.add('baoli', function(){
    toTheMin1(1000,num,list,0);
}).add('dp', function() {
    toTheMin2(1000,num,list);
}).on('cycle', function(e) {
    console.log(e.target);
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async': true});
