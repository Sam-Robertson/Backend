var fs = require('fs');
var path = require('path');

fs.readdir('../general', function (err, files) {

    files.forEach(function (fileName) {
        var file = path.join( __dirname, '../general', fileName);
        var stats = fs.statSync(file);

        if(stats.isFile()) {
            console.log('Reading file ${fileName}');

            var contents =fs.readFileSync(file, 'UTF-8');
            console.log(contents);
        }
    });
    // for (var i = 0; i < err.length; i++) {
    //     let file = files[i];
    //     file.doStuff();
    //
    // }
});

console.log('contents');
