// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

const removeElement = (nums) => {
  if (nums.length <= 2) {
    return nums.length;
  }
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
const arr1 = [1, 1, 1, 2, 2, 3];
console.log(removeElement(arr1));
