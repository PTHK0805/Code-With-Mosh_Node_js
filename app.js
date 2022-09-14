const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Thiha');
console.log(logger);

console.log(path.dirname(__filename));
console.log(os.totalmem());
console.log(os.uptime());

// Synchronous Method
const files = fs.readdirSync('./');
console.log(files);

// Asynchronous Method
const asynfiles = fs.readdir('./', function (err, files) {
    if (err) console.log('Error : ', err);
    else console.log('Result : ', files);
});