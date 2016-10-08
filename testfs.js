const fs = require('fs');
const print = require('./print.js');

var data = 'append data';

fs.open('./test/test.txt','a',function(err,fd){
    if (err) {
        print(err);
    }else{
        print('open');
        //var buffer = new Buffer(dataone,'utf-8');
        fs.writeFile(fd,data,function(err){
            if (err) {
                print(err);
            }else{
                print('ok new');
            }
        });
    }
});