var obj={val:1};
var test1=Object.create(obj);
test1.val=2;
console.log(test1.val);     //2
delete test1.val;
console.log(test1.val);     //1

function Obj(){
	this.a=1;
};

var test2=new Obj();
test2.a=2;
console.log(test2.a);    //2
delete test2.a;
console.log(test2.a);    //undefined

var test3=Object.create(null);
console.log(test3.__proto__);    //undefined

function stu(){};
stu.prototype.x=1;
var bosn=new stu();
console.log(bosn.x);    //1
stu.prototype={y:2};
console.log(bosn.y);    //undefined


