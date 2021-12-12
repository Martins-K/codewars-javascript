/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let count : number = 0; 
    let char : string = "";
    console.log(`string is ${str}, length of the string is ${str.length}`);
    for (let index = 0; index < str.length; index++) {
    console.log(`There are ${str.replace(str[index], "").length} instances of character "${str[index]}"`);
        if (str.length - str.replace(str[index], "").length > count) {
            char = str[index];
            count = str.length - str.replace(str[index], "").length;
        }
    }
    return char;
}

export { maxChar };
