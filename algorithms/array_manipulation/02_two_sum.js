/* 
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

nums = [2, 7, 11, 15];
target = 9;
output [0, 1]
*/

function twoSumAdjcent(nums, target) {
  // in case they are adjcent, we could do this. But the problem doesn't state that
  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const nextElement = nums[i + 1];

    if (currentElement + nextElement === target) {
      return [i, i + 1];
    }
  }
}

function twoSum(nums, target) {
  // 9 - 2 = 7
  // 9 - 7 = 2
  // 9 - 11 = -2

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));

function twoSumOptimized(nums, target) {
  const map = {};

  for (let index = 0; index < nums.length; index++) {
    const difference = target - nums[index];

    if (difference in map) {
      return [map[difference], index];
    }

    map[nums[index]] = index;
  }
}

console.log(twoSumOptimized([2, 7, 11, 15], 9));
