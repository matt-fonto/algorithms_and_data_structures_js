/* 
    Write a function that returns the number of vowels used in a string
    vowels('abcde') => 2
*/

function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(vowels("aeeeiouabs"));
