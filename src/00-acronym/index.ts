/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let stringArray = input.split(" ");
    let acronym = ""
    for (let a = 0; a < stringArray.length; a++) {
        acronym.concat(stringArray[a][0]);
    }
    return acronym;
}

export { parse };
