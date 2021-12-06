/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string ) {
    let arr = input.replace(/[^\w\s]/gi, '').split(" ");
    let stringArray = arr.filter(el => {return el != ""});
    console.log(stringArray);
    let acronym = [];
    for (let a = 0; a < stringArray.length; a++) {
        if (stringArray[a][0] == "_") {
            acronym.push(stringArray[a][1]);
        } else {
            acronym.push(stringArray[a][0]);
        }
    }
    return acronym.join("").toUpperCase();
}

export { parse };
