const twoSum = (arr, target) => {
  let a = 0;
  let b = arr.length - 1;

  while (a < b) {
    const sum = arr[a] + arr[b];
    if (sum === target) {
      return [a + 1, b + 1];
    } else if (sum < target) {
      a++;
    } else {
      b--;
    }
  }
  return null;
};
const arr = [1, 2, 3, 4, 4, 9, 56, 90];
const target = 8;
console.log(twoSum(arr, target));
