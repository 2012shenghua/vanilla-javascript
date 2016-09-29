exports.toTheMin1 = function toTheMin1(budget,num,valueList,res) {
	var flag = 0;
    for(var i = 0, l = valueList.length; i < l; i++) {
    	if((valueList[i] <= budget) && (valueList[i + 1] > budget) || (i == l - 1)) {
        	flag = 1;
            var min = Math.floor(budget / valueList[i]);
            budget = budget - min * valueList[i];
            if(budget < valueList[0]) {
                return min + res;
            }else {
            	return toTheMin1(budget, i+1, valueList.slice(0,i), min+res);
            }
        }
    }

    if(flag == 0) {
    	return 0;
    }  
}

exports.toTheMin2 = function toTheMin2(n,m,arr) {
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


