/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */


function isEven(n: number) {
    let isEven = false;
    n < 0 ? n *= -1 : n;
    for (let a = 0; a <= n; a++) {
        isEven = !isEven;
    }
    return isEven;
}

export { isEven };
