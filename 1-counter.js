let count = 0;

function counter (){
    count = count +1;
    console.log(count);
}

const interval = setInterval(counter,1000);