var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = safeHTML`<p>${sender} has send you a message</p>`;

function safeHTML(templateData) {
    var s = templateData[0];
    for(var i = 1, l = arguments.length; i < l; i++) {
        var arg = String(arguments[i]);

        s += arg.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        s += templateData[i];
    }
    return s;
}

console.log(message);