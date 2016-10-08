const print = require('./print.js');

//Function构造器
var func=new Function('a','b','print(a+b);');
func(1,2);
function a(){
	this.a=37;
	return {a:38};
};
var x= new a();
print(x.a);

this.x=9;
var module={
	x:81,
	getX:function(){
		return this.x;
	}
};
print(module.getX());                   //81
var getX=module.getX;
print(getX());                          //9
var bindgetX=getX.bind(module);
alert(bindgetX());									  //81
function foo(){
	this.b=100;
	return this.a;
};
var func=foo.bind({a:1});
print(func());
