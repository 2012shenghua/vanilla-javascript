function starMove (obj,json,fn) {
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for (var attr in json) {
			//取当前的值
			var iCur=0;
			if(attr=='opacity'){
				iCur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur=parseInt(getStyle(obj,attr));
			}
			//算速度
			var speed=(json[attr]-iCur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			//检测停止
			if (iCur===json[attr]) {
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}else if(attr=='opacity'){
				obj.style.filter='alpha(opacity='+(iCur+speed)+')';
				obj.style.opacity=(iCur+speed)/100;
			}else{
				obj.style[attr]=iCur+speed+'px';
			}
		}
	},50);
}