var path = require('path');

console.log("Hello World");
console.log(__dirname);
console.log(__filename);
var dirname = path.dirname(__dirnames);
console.log(dirname);
var basename = path.basename(__filename);
console.log(basename);
var extname = path.extname();

