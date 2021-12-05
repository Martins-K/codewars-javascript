/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    sen.replace(/[^a-z0-9+]+/gi, '');
    let arr = sen.split(" ");
    console.log(arr);
    let longestWord = "";
    for (let index = 0; index < arr.length; index++) {
        console.log(`Current element is ${arr[index]}`);
        if (arr[index].length > longestWord.length) {
            longestWord = arr[index];
        }       
    }
    return longestWord;
}

export { longestWord };
