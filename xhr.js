function createXHR(){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
}
var xhr = createXHR();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
            alert(xhr.responseText);
        }else{
            alert("request is unsuccessful:" + xhr.status);
        }
    }
}
xhr.open("get", "cjc.txt", true);
xhr.send(null);

//像表单那样post数据，要加http头
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
