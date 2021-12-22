/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */


function capitalize(str: string) {
    let strArray = str.split(" ");
    for (let a = 0; a < strArray.length; a++) {
        strArray[a] = strArray[a][0].toUpperCase() + strArray[a].substring(1);
    }
    return strArray.join(" ");
}

capitalize("i love breakfast at bill miller bbq");

export { capitalize };
