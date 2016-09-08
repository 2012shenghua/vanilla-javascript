var co = require('co');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

co(function *(){
  var now = new Date();
  yield sleep(2000);
  console.log(new Date() - now);
})