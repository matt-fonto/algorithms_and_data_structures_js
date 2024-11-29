/* 
    Write a program that consoles the numbers from 1 to n. 
    However, for multiples of 3 print 'fizz' instead of the number
    For multiples of 5, print 'buzz'. 
    For multiples of 3 and 5, print 'fizzbuzz'
*/

function fizzBuzz(n) {
  // check multiple number % number_2 == 0

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(30));
