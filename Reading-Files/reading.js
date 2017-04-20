var fs = require("fs");
var path = require("path");
var myanswer = '';
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var myName = "BigIpsum";



fs.readdir("./BigIpsum", function(err, files) {

    files.forEach(function(fileName) {
        var file = path.join(__dirname, myName, fileName);
        var stats = fs.statSync(file);
        if(stats.isFile() && fileName !== ".DS_Store") {

            fs.readFile(file, "UTF-8", function(err, contents) {

                PickWord(contents);
            });
        }

    });

        function PickWord(contents) {
            rl.question("What is the word you want to find? ", function (answer) {
                myanswer = answer;
                if(contents.indexOf(myanswer) >1) {
                    var p = contents.indexOf(myanswer) - 15;
                    var original = contents.indexOf(myanswer) + 30;
                    console.log("found it! Here's the line:");
                    var ResultString = contents.substring(p, original);
                    console.log(ResultString);
                }
                else {
                    console.log("It's not in here broski")
                }
            });

        }


});





var string = "lorem ipsum dolor sit amet, consectetur adipisicing elit";
var count = 0;
for(var i=0; string.length > i; i++){
    if(string.charAt(i) == 'i'){
        ++count;
    }
}
console.log(count);    // 7

var someString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var count = 0;
var pos = someString.indexOf("ip");
while(pos > -1){
    ++count;
    pos = someString.indexOf("ip", ++pos);
}
