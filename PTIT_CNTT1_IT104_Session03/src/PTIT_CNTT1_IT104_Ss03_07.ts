const input : string = "banana";

const duplicate = (str : string) : string => {
    let result : string = "";
    for (let i=0; i < str.length; i++){
        if(!result.includes(str[i])){
            result += str[i];
        }
    }
    return result;
};
console.log(duplicate(input));