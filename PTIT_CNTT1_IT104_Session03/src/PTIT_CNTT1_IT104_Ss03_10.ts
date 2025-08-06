const sentence: string = "hello world apple banana orange pumpkin cucumber";

const longestWord = (str: string): string => {
    const words = str.split(" ");
    let wordLength = "";

    for (let word of words) {
        let check = true;

        for (let i = 0; i < word.length; i++) {
            if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
                check = false;
                break;
            }
        }

        if (check && word.length > wordLength.length) {
           wordLength = word;
        }
    }

    return wordLength;
};

console.log(longestWord(sentence)); 
