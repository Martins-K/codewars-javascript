/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
  let max = 0;
  let maxChar = '';
  str.split('').forEach((char) => {
    if (str.split(char).length - 1 > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  return maxChar;
}

export { maxChar };
