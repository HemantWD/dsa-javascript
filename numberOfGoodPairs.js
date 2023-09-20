function pair(nums) {
  //  ? Method 1 (Not Recommended)
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;
  //   ? Method 2 (Recommended)
  const count = {}; //Created an empty object to act as a map to store the count of each unit
  let sum = 0;

  for (const number of nums) {
    if (count[number]) {
      sum += count[number];
      count[number] += 1;
    } else {
      count[number] = 1;
    }
  }
  return sum;
}

const nums = [1, 1, 1, 1]; //Output : 4
console.log(pair(nums));
