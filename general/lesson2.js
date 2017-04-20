process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
    fs.writefile("output.txt", `${chunk}`, function(err){
        if(err) {
            return console.log(err);
        }
        console.log("what am I doing? this is done")
        });
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});
