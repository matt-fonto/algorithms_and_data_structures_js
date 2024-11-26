/* 
    Given a string, return the character that is most commonly used in the string
    maxChar('abcccccccd') -> 'c'
    maxChar('apple 123111111') -> '1'
*/

/**
 * @param {string} str
 * @returns {string}
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
  let maxCount = 0;
  let maxChar = "";

  // of: for...of -> loops through arrays in strings
  // in: for...in -> loops through objects

  // Add to the map
  for (let i = 0; i < str.length; i++) {
    // check if the value already exists
    // if yes, increment it
    if (map[str[i]]) {
      map[str[i]]++;
    } else {
      // if no, initiliaze it
      map[str[i]] = 1;
    }
  }

  for (const [char, count] of Object.entries(map)) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

// console.log(maxChar("abbbbcccccccdddd"));

/**
 * @param {string} str
 * @returns {string}
 * - code reduction in for loop to create map
 * - using for in to loop through object
 */
function maxCharRefactored(str) {
  const map = {};
  let maxCount = 0;
  let maxChar = "";

  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }

  for (let char in map) {
    if (map[char] > maxCount) {
      maxCount = map[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxCharRefactored("abbbbccccddddweeewdd"));
