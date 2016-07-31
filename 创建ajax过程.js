//创建一个XMLHttpRequest对象
function creatXHR() {
    var xhr;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}

var xhr = creatXHR();
//监听statechange事件
xhr.onreadystatechange = function() {
  /**
   * XMLHttpRequest的readystate有五个状态
   * 0 还没有调用open方法
   * 1 已调用open方法，尚未调用send方法
   * 2 已调用send，但尚未接收到响应
   * 3 已接收到部分响应数据
   * 4 已经接收到到全部数据，而且可以在客户端使用
   */
  if (xhr.readystate == 4) {
    //状态码在200 到 300表示请求成功，状态码304表示资源没有被修改，可以直接使用缓存中的版本
    if ((xhr.status >=200 && xhr.status < 300) || xhr.status == 304)) {
      alert(xhr.responseText);
    } else {
      //发生错误打印状态码，
      alert("Request was unsuccessful: " + xhr.status);
    }
  }
}
//打开请求以备发送
xhr.open('post', 'http://example.com', false);
//设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//序列化表单
var form = document.getElementById('test-form');
//发送请求
xhr.send(serialize(form));