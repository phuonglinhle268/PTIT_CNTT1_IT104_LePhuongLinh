type callBack = (result:boolean) => void;

function checkCondition(condition:boolean, callback:callBack) {
    let count =1;
    setInterval(() => {
        callback(condition);
    }, 1000);
}

function display(result:boolean) {
    console.log("Dieu kien tra ve: ", result);
}
checkCondition(true, display);
checkCondition(false, display);