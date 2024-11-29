/* 
    Given a positive number, we should console.log a pyramid shape with N levels using the # character

    Make sure the pyramid has spaces on both the left and right hand sides

    pyramid(4)
        '   #   ' 1
        '  ###  ' 2  num 2 => columns 3
        ' ##### ' 3  num 3 => columns 5
        '#######' 4  num 4 => columns 7

        // columns numbers: 2n - 1

*/

function pyramid(number) {
  const midPoint = Math.floor((2 * number - 1) / 2);

  // outer: row
  for (let row = 0; row < number; row++) {
    let line = "";

    for (let column = 0; column < 2 * number - 1; column++) {
      if (column >= midPoint - row && column <= midPoint + row) {
        line += "#";
      } else {
        line += "-";
      }
    }

    console.log(line);
  }
}

console.log(pyramid(20));

// r1 c1 | r1 c2 | r1 c3 | r1 c4 | r1 c5
// r2 c1 | r2 c2 | r2 c3 | r2 c4 | r2 c5
// r3 c1 | r3 c2 | r3 c3 | r3 c4 | r3 c5
