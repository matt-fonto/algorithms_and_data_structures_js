/* 
    Given an array and chunk size, divide the array into many subarrays
    where each subarray is of length specified at the chunk size

    chunk([1,2,3,4], 2) -> [[1,2],[3,4]]
    chunk([1,2,3,4, 5], 2) -> [[1,2],[3,4], [5]]
    chunk([1,2,3,4, 5, 6, 7, 8], 3) -> [[1,2,3],[4,5,6], [7,8]]
    */

/**
 * @param {string[] | number[]} array
 * @param {number} size
 * @returns {number[] | string[]}
 */
function chunk(array, size) {
  const result = [];
  let start = 0;

  while (start < array.length) {
    // loop 1: start 0, size 2
    // loop 2: start 2, size 2
    // loop 3: start 4, size 2

    result.push(array.slice(start, start + size));
    start += size;
  }

  // for (let i = 0; i < array.length; i += size) {
  //   result.push(array.slice(i, i + size));
  // }

  return result;
}

console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
