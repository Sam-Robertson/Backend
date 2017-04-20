var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var music = [
    {
        composer: "Johann Sebastian Bach",
        work:"Brandenburg Concertos"
    },
        {
        composer: "Johann Sebastian Bach",
        work:"Air on the G String"
    },
    {
        composer: "Johann Sebastian Bach",
        work:"Arioso"
    },
    {
        composer: "Wolfgang Amadeus Mozart",
        work:"Requiem"
    },
    {
        composer: "Wolfgang Amadeus Mozart",
        work:"Symphony No. 25"
    },
    {
        composer: "Antonio Vivaldi",
        work:"The Four Seasons"
    },
    {
        composer: "Antonio Vivaldi ",
        work:"sonatas and chamber music"
    },
    {
        composer: "Kenny G",
        work:"End of the Night"
    },
    ]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next){
    console.log(`Client submitted a ${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./public"));
app.get("/music-api", function(req, res){
    res.json(music);
});

// app.route('/music-api')
//   .use(express.static("./public"))
//   .get("/music-api", function(req, res){
//
//     //localhost:3000/music-api4
//     res.json(music);
// });
app.post("/music-api", function(req, res) {
    music.push(req.body);
    res.json(music);
});
app.delete("/music-api/:composer", function(req, res) {
    music = music.filter(function(data) {
        return data.composer.toLowerCase() !== req.params.composer.toLowerCase();
    });
    res.json(music);
});
app.listen(3000);
console.log("My app running on port 3000");

module.exports = app;
