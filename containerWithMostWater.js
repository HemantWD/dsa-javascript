function conatainer(arr) {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const minHeight = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = minHeight * width;

    maxArea = Math.max(maxArea, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(conatainer(arr));
