// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

var fs = require ("fs");

fs.readFile('index.js','utf-8',function (err,data){
    console.log (data);
})

function calculateTime(n) {
    const startTime = new Date();

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const endTime = new Date();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    return  console.log(`Sum from 1 to ${n}: ${sum}`),
    console.log(`Time taken: ${elapsedTimeInSeconds} seconds`);
}
calculateTime(1000000000);