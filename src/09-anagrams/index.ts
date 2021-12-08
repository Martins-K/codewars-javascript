/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    let stringAArray = stringA.toLowerCase().replace(/\W/g, "").split("").sort();
    console.log("Converting string 1 into array...");
    let stringBArray = stringB.toLowerCase().replace(/\W/g, "").split("").sort();
    console.log("Converting string 2 into array...");
    console.log("Comparing both arrays");
    if (stringAArray.every((val, index) => val === stringBArray[index])) {
        return true;
    } else {
        return false;
    }
}

export { anagrams };
