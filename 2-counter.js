// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startCounter(count, duration) {
    
    function update() {
        if (count <= duration) {
        console.log(count);
        count++;
        setTimeout(update, 1000);
        } 

        else {
            console.log("Counter finished");
        }
    }

    update();
}

startCounter(1, 5);









































































// (Hint: setTimeout)