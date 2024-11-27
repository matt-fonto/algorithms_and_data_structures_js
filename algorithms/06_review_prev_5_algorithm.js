/* 
1. reverse string and integer 
Given a string, return a new string with the reversed order of characters
*/
function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

// console.log(reverseString("hi"));
// console.log(reverseString("hello"));
// console.log(reverseString("switer zerland"));

function reverseInt(int) {
  const isNegative = int < 0; // save the info that the value is negative
  const stringOfInteger = String(Math.abs(int)); // get the absolute value, thus ignoring in this stage if it's negative
  let reversedIntStr = "";

  for (let i = stringOfInteger.length - 1; i >= 0; i--) {
    reversedIntStr += stringOfInteger[i];
  }

  let reversedNum = Number(reversedIntStr); // we get the reversed num from the string

  if (isNegative) {
    reversedNum *= -1; // in case the original num is negative, we make the inverted negative too
  }

  return reversedNum;
}

// console.log(reverseInt(123));
// console.log(reverseInt(5672));
// console.log(reverseInt(-51));
/* 
2. palindrome 
    Given a string, return true if the string is a palindrome, else false.
    Palindroms: strings that form the same workd if reversed
    madam, kayak, abbc
*/
function palindrome(str) {
  const arrayOfChar = str.split("");
  let reversedStr = "";

  for (let i = arrayOfChar.length - 1; i >= 0; i--) {
    reversedStr += arrayOfChar[i];
  }

  return str === reversedStr;
}

// console.log(palindrome("abc"));
// console.log(palindrome("kayak"));

/* 
3. max char
    Given a string, return the character that is most commonly used in the string
    maxChar('abcccccccd') -> 'c'
    maxChar('apple 123111111') -> '1'

*/
function maxChar(str) {
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (charMap[currentLetter]) {
      charMap[currentLetter]++;
    } else if (!charMap[currentLetter]) {
      charMap[currentLetter] = 1;
    }
  }

  let maxCount = 0;
  let maxChar = "";

  for (const [char, count] of Object.entries(charMap)) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

// console.log(maxChar("abcccccccd"));

/* 
4. array chunking
    Given an array and chunk size, divide the array into many subarrays
    where each subarray is of length specified at the chunk size

    chunk([1,2,3,4], 2) -> [[1,2],[3,4]]
    chunk([1,2,3,4, 5], 2) -> [[1,2],[3,4], [5]]
    chunk([1,2,3,4, 5, 6, 7, 8], 3) -> [[1,2,3],[4,5,6], [7,8]]
*/
function chunk(arr, size) {
  const result = [];
  let step = 0;

  while (step < arr.length) {
    result.push(arr.slice(step, step + size));
    step += size;
  }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

/* 
5. title case 
    Given a string, capitalize each letter of each word in the string.
    Return capitalized version
*/
function titleCase(str) {
  // break str into array
  const arrayOfWords = str.split(" ");
  const result = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    const word = arrayOfWords[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result;
}

console.log(titleCase("what is titlecase?"));
