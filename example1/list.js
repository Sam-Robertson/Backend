var fs = require('fs');

fs.readdir('../general', function (err, files) {
    console.log(files);
});

console.log('Reading the ./general directory');
