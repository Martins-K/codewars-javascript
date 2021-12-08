/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    let intToString = int.toString();
    console.log("Parsing int to string...")
    if (intToString[0] == "-") {
        intToString = intToString.substring(1);
        console.log("Removing minus sign...")
    }
    console.log("Stripping off minus sign...")
    intToString = intToString.replace(/[^123456789]+/, "");
    console.log("Deleting 0s from the end if the string...")
    let reversedString = intToString.split("").reverse().join("");
    console.log("Reversing string...")
    if (int < 0) {
        reversedString = "-" + reversedString;
        console.log("Adding back minus sign...")
    }
    let reversedInt = parseInt(reversedString);
    console.log(`Parsing string to int...`);
    return reversedInt;
}

export { reverse };
