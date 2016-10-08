'use strict';
const print = require('./print.js');

function fun() { return this; }
print(fun() === undefined);	//true
print(fun.call(2) === 2);		//true
print(fun.apply(null) === null);		//true
print(fun.call(undefined) === undefined);		//true
print(fun.bind(true)() === true);		//true
!function(){
	x=1;
	print(x);
}();
!function(a){
	arguments[0]=100;
	print(a);
}(1);								//1
!function(a){
	arguments[0].x=100;
	print(a.x);
}({x:1});							//100
!function(){
	var obj={x:1,x:2};
	print(obj.x);
}();
!function(){
	//print(0123);                //八进制字面量不被允许
}();
!function(){
	eval("var evalVal=2");
	print(typeof evalVal);      
}();
