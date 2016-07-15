'use strict';

function fun() { return this; }
console.log(fun() === undefined);	//true
console.log(fun.call(2) === 2);		//true
console.log(fun.apply(null) === null);		//true
console.log(fun.call(undefined) === undefined);		//true
console.log(fun.bind(true)() === true);		//true
!function(){
	x=1;
	console.log(x);
}();
!function(a){
	arguments[0]=100;
	console.log(a);
}(1);								//1
!function(a){
	arguments[0].x=100;
	console.log(a.x);
}({x:1});							//100
!function(){
	var obj={x:1,x:2};
	console.log(obj.x);
}();
!function(){
	//console.log(0123);                //八进制字面量不被允许
}();
!function(){
	eval("var evalVal=2");
	console.log(typeof evalVal);      
}();
