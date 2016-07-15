var c= 0;
function printIt(){
	console.log("c="+c);
};
function plus(callback){
	setTimeout(function(){
		c+=1;
		callback(c);
	},2000);
};
plus(printIt);
