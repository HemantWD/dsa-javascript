// * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
// * Since the result may be very large, so you need to return a string instead of an integer.

const largestNumber = (arr) => {
  if (arr.length === 0) {
    return "0";
  }
  arr.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return arr.join("");
};

const arr = [3, 30, 34, 5, 9];
console.log(largestNumber(arr));
