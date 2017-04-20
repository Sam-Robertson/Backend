var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var realPerson = {
    name: '',
    sayings: []
};

rl.question("What is the name of a real person? ", function (answer) {

    realPerson.name = answer;
})