'use strict';
!function(){
	x=1;
	alert(window.x);
}();
!function(a){
	arguments[0]=100;
	alert(a);
}(1);								//1
!function(a){
	arguments[0].x=100;
	alert(a.x);
}({x:1});							//100
!function(){
	var obj={x:1,x:2};
	alert(obj.x);
}();
!function(){
	alert(0123);                //八进制字面量不被允许
}();
!function(){
	eval("var evalVal=2");
	alert(typeof evalVal);      
}();
