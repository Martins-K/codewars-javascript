/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    if (n > 0) {
        let counter = n - 1;
        let arr: any[][] = [];
        arr[0][0] = " ".repeat(counter) + "#".repeat(n * 2 - 1) + " ".repeat(counter);
        console.log(arr[0][0]);
        for (let index = 0; index < n; index++) {
            arr[index].push(" ".repeat(counter) + "#".repeat(n * 2 - 1) + " ".repeat(counter))
        }
        return arr;
    } else {
        throw new Error("N must be a positive number");
    }
}

export { pyramid };
