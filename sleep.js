const co = require('co');
const print = require('./print.js');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

co(function *(){
  var now = new Date();
  yield sleep(2000);
  print(new Date() - now);
})