// Write a function longestCommonPrefix(strs) that takes an array of strings as input and returns the longest common prefix of all the strings in the array. If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return '';
    }
  }
  return prefix;
}

const output = longestCommonPrefix(['flower', 'flow', 'flight']);

console.log(output);

// Write a function twoSum(nums, target) that takes an array of integers nums and an integer target as input and returns the indices of the two numbers that add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

/***
 * Tried Solution
 */

// function twoSum(nums, target) {
//   if (!nums.length) return [];
//   if (nums.length === 1) return nums[0];

//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     // let count = i;
//     // while (nums[i]) {}
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return (result = [i, j]);
//       }
//     }
//   }
//   return result;
// }

/***
 * Better Solution
 *
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
