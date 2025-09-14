type callBack = (value:number) => void;

function displayNumbers(callback:callBack, delay:number) {
    let count =1;

    setInterval(() => {
        callback(count);
        count++;
    }, delay);
}

displayNumbers((value:number) => {
    console.log("So thu tu: ", value);
},1000);