// palindrome: series of characters which reads equal backward and frontward

// require Stack.js
const Stack = require("./StackObject");

// madam, kayak, level

function isPalindrome(word) {
  const normalSequence = new Stack();
  const invertedSequence = new Stack();

  for (let i = 0; i < word.length; i++) {
    normalSequence.push(word[i]);
  }

  for (let i = word.length - 1; i >= 0; i--) {
    invertedSequence.push(word[i]);
  }

  return normalSequence.toString() === invertedSequence.toString();
}

console.log("madam", isPalindrome("madam"));
console.log("kayak", isPalindrome("kayak"));
console.log("level", isPalindrome("level"));
