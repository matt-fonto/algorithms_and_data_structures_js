/* 
    Given a string, return the character that is most commonly used in the string
    maxChar('abcccccccd') -> 'c'
    maxChar('apple 123111111') -> '1'
*/

/**
 * @param {str} str
 * @returns {str}
 */
function maxChar(str) {
  // character map
  // {
  //     a: 1,
  //     b: 1,
  //     c: 4,
  //     d: 1
  // }
  const map = {};

  // Add to the map
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      map[str[i]]++;
    } else {
      map[str[i]] = 1;
    }
  }

  // Need to find biggest value
  for (const [key, value] of Object.entries(map)) {
    console.log("key,value", key, value);
  }

  return map;
}

console.log(maxChar("abbbbcccccccdddd"));
