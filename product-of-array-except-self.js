/**
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

 */

var productExceptSelf = function (nums) {
  const answer = [];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      left[i] = 1;
    } else {
      left[i] = nums[i - 1] * left[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      right[i] = 1;
    } else {
      right[i] = nums[i + 1] * right[i + 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
