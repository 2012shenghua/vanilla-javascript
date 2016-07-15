var obj={
	name:"cjc",
	get age(){
		return new Date().getFullYear()-1994;
	},
	set age(val){
		console.log("age cannot be set to"+val);
	},
};
console.log(obj.age);                  //21
obj.age=100;					 //age cannot be set to 100
console.log(obj.age);					 //21


//对象序列化
var my={
	x:1,
	y:2,
	o:{
		o1:1,
		o2:2,
		toJSON:function(){
			return this.o1+this.o2;
		}
	}
};
console.log(JSON.stringify(my));						//{"x":1,"y":2,"o":3}

