/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    let string  = s.toLowerCase();
    let noOfVowels = 0;
    for (let index = 0; index < string.length; index++) {
        switch (string[index]) {
            case "a":
                noOfVowels++;
                break;
            case "e":
                noOfVowels++;
                break
            case "i":
                noOfVowels++;
                break;
            case "o":
                noOfVowels++;
                break;
            case "u":
                noOfVowels++;
                break;
            default:
                break;
        }
    }
    return noOfVowels;
}

export { vowels };
