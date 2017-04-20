var fs = require("fs");

// Remember to explain that you cannot delete a directory until
// all of the files have been removed from that directory
fs.readdirSync("./logs").forEach(function(fileName) {

	fs.unlinkSync("./logs/" + fileName);

});

fs.rmdir("./logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});