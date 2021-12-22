/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
    let arr = str.split("");
    let reverseArr = [];
    for (let index = arr.length; index >= 0; index--) {
        reverseArr.push(arr[index]);
    }
    return reverseArr.join("");
}


export { reverse };
