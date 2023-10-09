// * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// ? In this my approach is that first i will reverse the whole array and after that made a helper function that will again reverse the array. In this way the Time Complexity will be O(n) and Space Complexity will be O(1) i.e. constant time.

const numReverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();
  numReverse(nums, 0, k - 1);
  numReverse(nums, k, nums.length - 1);
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3));
