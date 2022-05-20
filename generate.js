var push = require('web-push'); 
// npm i web-push
let keys = push.generateVAPIDKeys();
console.log(keys);