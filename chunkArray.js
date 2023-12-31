// ** Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

const chunk = (arr, size) => {
  let subArray = [];
  let index = 0;
  while (index < arr.length) {
    subArray.push(arr.slice(index, index + size));
    index += size;
  }
  return subArray;
};

const arr = [1, 2, 3, 4, 5, 6],
  size = 3;
console.log(chunk(arr, size));
