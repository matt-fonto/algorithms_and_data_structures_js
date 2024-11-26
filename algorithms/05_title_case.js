/* 
    Given a string, capitalize each letter of each word in the string.
    Return capitalized version
*/

/**
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  const arrayOfWords = str.split(" ");
  const result = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    result.push(arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1));
  }

  return result.join(" ");
}

console.log(capitalize("what is titlecase?"));
// console.log(capitalize("titles of books, moves, songs"));
