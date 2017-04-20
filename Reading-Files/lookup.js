var fs = require("fs");
var path = require("path");
var myanswer = '';
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var myName = "BigIpsum";
var myDirectory = "./BigIpsum";

pickDirectory();
function pickDirectory() {
    rl.question("What is the Directory you want to look in (no need for ./)? ", function (answer) {
        myDirectory = "./" + answer;
        console.log(myDirectory);
    });
    main();
}
function main() {
    console.log("This wokring?");

    fs.readdir(myDirectory, function (err, files) {
        console.log("Yes");

        files.forEach(function (fileName) {
            rl.question("What is the file you want to look in? ", function (answer) {
                myName = answer;
            });
            var file = path.join(__dirname, myName, fileName);
            var stats = fs.statSync(file);
            if (stats.isFile() && fileName !== ".DS_Store") {

                fs.readFile(file, "UTF-8", function (err, contents) {

                    PickWord(contents);
                });
            }

        });

        function PickWord(contents) {
            rl.question("What is the word you want to find? ", function (answer) {
                myanswer = answer;
                if (contents.indexOf(myanswer) > 1) {
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
}



