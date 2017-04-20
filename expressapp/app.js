
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var foods = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//when a get request is coming from the root

// app.get('/', function (req,res) {
//
//     res.sendFile('index.html');
//
// });

app.get('/getBacon', function (req,res) {
   //localhost:3000/getBacon
    res.sendFile('I like Bacon')
});

app.get('/getTime', function (req,res) {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    //localhost:3000/getTime
    res.send(datetime)
});
app.post('/setEntry', function (req, res) {
   console.log('client calling post to setEntry');
    foods.push(req.body);
    console.log(req.body);
    console.log(foods);

    fs.writeFile('myfood.txt', foods[0].Foods)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
