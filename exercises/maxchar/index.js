// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {};
//   for (let char of str) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
// }

module.exports = maxChar;
