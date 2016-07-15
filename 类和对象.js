(function(){
  var n=1;
  window.n=n;
  function person(name){
     this.name=name;
  }
  person.prototype.say=function(){
    alert("person hello"+this.name+n);
  } 
  window.person=person;      //提供对外接口
}());//自调用
(function(){
  function student(name){
     this.name=name;
  }
  //继承
  student.prototype=new person();
  //调用父类方法
  var fathersay=student.prototype.say;
  //重写
  student.prototype.say=function(){
     fathersay.call(this);
     alert("stu hello"+this.name+n);
}
  window.student=student;
}());
var stu=new student("cjc");
stu.say();
//继承方法2
function people(){
  var _this={};
  _this.sayhello=function(){
  	alert("继承方法2 phello");
  }
  return _this;
}
function cjc(){
	var _this=people();
	//调用父类方法
	var phello=_this.sayhello;
	_this.sayhello=function(){
		phello.call(this);
		alert("cjchello");
	};
	return _this;
}
var test=cjc();
test.sayhello();
