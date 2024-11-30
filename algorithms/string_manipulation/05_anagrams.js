/* 
    Check if two provided strings are anagrams of each other
    One string is an anagram of another if it uses the same characters in the same quantity
    Consider capital letters to be the same as lower case
    Don't consider spaces, nor punctuation

    anagrams('coding rock', 'rock coding')=> true
    anagrams('RAIL SAFETY!, 'fairy tales') => true

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function anagrams(str1, str2) {
  const charMap1 = addLetterToMap(cleanString(str1));
  const charMap2 = addLetterToMap(cleanString(str2));

  return compareObjects(charMap1, charMap2);
}

function cleanString(str) {
  return str.toLowerCase().replace(/[^A-Z0-9]/gi, "");
}

function addLetterToMap(str) {
  let charMap = {};

  for (const letter of str) {
    if (charMap[letter]) {
      charMap[letter]++;
    } else {
      charMap[letter] = 1;
    }
  }

  return charMap;
}

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(anagrams("coding rock", "rock coding"));
// console.log(anagrams("RAIL SAFETY!", "fairy tales"));
// console.log(anagrams("RIL SAFETY!", "fairy tales"));

function anagramSimplified(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str
    .toLowerCase()
    .replace(/[^A-Z0-9]/gi, "")
    .split("")
    .sort()
    .join();
}

console.log(anagramSimplified("coding rock", "rock coding"));
console.log(anagramSimplified("RAIL SAFETY!", "fairy tales"));
console.log(anagramSimplified("RIL SAFETY!", "fairy tales"));
