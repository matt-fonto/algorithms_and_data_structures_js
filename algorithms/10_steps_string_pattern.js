/* 
    Write a function that accepts a positive number N.
    The function should log a step shape with N levels usings the # character.
    Make sure the step has spaces on the right hand side

    step(2)
        '# '
        '##'
    step(3)
        '#  '
        '## '
        '###'
*/

function steps(n) {
  // good rule of thumb for `for loops`
  // if i = 0 then i < n
  // if 1 = 1 then 1 <= n

  // nested loops: i is the row, j is the column
  for (let row = 1; row <= n; row++) {
    let line = "";

    for (let column = 1; column <= row; column++) {
      if (column <= row) {
        line += "#";
      } else {
        line += "-";
      }
    }

    console.log(line);
  }
}

console.log(steps(3));
