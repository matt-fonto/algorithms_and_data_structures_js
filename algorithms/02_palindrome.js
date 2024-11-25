/* 
    Given a string, return true if the string is a palindrome, else false.
    Palindroms: strings that form the same workd if reversed
    madam, kayak, abbc
*/

/**
 * @param {string} str
 * @returns {string}
 */
function palindrome(str) {
  let reversedString = "";

  /*  
  another possibility
  const reversed = str.split('').reverse().join()
  return str === reversedString 
    */

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return str === reversedString;
}

console.log(palindrome("kayak"));
console.log(palindrome("madam"));
console.log(palindrome("example"));
