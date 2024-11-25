/* 
Given a string, return a new string with the reversed order of characters
*/

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

// console.log(reverseString("hi"));
// console.log(reverseString("hello"));
// console.log(reverseString("switerzerland"));

/**
 * @param {string} str
 * @returns {string}
 */
function reverseWithMethod(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseWithMethod("hi"));
// console.log(reverseWithMethod("hello"));
// console.log(reverseWithMethod("switerzerland"));

/**
 * @param {number} num
 * @returns {number}
 */
function reverseInt(num) {
  const isNegative = num < 0;

  const strVersion = String(Math.abs(num)); // Math.abs: returns absolute value
  let reverseStrVersion = "";

  for (let i = strVersion.length - 1; i >= 0; i--) {
    reverseStrVersion += strVersion[i];
  }

  let reversedNum = Number(reverseStrVersion);

  if (isNegative) {
    reversedNum *= -1;
  }

  return reversedNum;
}

console.log(reverseInt(123));
console.log(reverseInt(5672));
console.log(reverseInt(-51));

/**
 * @param {number} num
 * @returns {number}
 */
function reverseIntegerWithMethod(num) {
  return Number(String(num).split("").reverse().join(""));
}

// console.log(reverseIntegerWithMethod(123));
// console.log(reverseIntegerWithMethod(5672));
