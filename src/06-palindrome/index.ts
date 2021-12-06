/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {
    let arr = str.split("");
    let reverseArr = [];
    let i = 0;
    for (let a = arr.length - 1; a >= 0; a--) {
        reverseArr[i] = arr[a];
        i++;
    }
    // arr.join("");
    // reverseArr.join("");
    console.log(`arr is \"${arr.join("")}\"`);
    console.log(`reverseArr is \"${reverseArr.join("")}\"`);
    if (arr.join("") == reverseArr.join("")) {
        return true;
    } else {
        return false;
    }
}

export { palindrome };
