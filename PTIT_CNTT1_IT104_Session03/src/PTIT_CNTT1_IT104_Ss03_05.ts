let firstName : string = "john";
let lastName : string = "doe";

const inHoa = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = inHoa(firstName);
lastName = inHoa(lastName);

let fullName : string = `${firstName} ${lastName}`;
console.log(fullName);