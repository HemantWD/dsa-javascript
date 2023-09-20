// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//  ---> Method 1
// function rotate(nums, k) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     nums[i + k] = nums[i];
//   }
//   for (let j = k - 1; j >= 0; j--) {
//     nums[j] = nums.pop();
//   }
//   return nums;
// }

//  ---> Method 2
// function rotate2(nums, k) {
//   while (k--) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// }

//  ---> Method 3
function rotate3(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// console.log(rotate(arr, k));
// console.log(rotate2(arr, k));
console.log(rotate3(arr, k));
