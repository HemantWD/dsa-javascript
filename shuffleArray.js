function shuffle(nums, n) {
  //   ! Method 1 (Recommended)
  //   let res = [];
  //   for (i = 0; i < n; i++) {
  //     res.push(nums[i], nums[i + n]);
  //   }
  //   return res;
  //! Method 2
  //   In this problem we will use two loops: Loop 1 will group the number into pairs [x1,y1],[x2,y2]. by storing both number xn and yn in binary representation. Loop 2 will then place these pairs in their final position.
  let i = n - 1;
  for (let j = nums.length - 1; j >= n; j--) {
    nums[j] <<= 10;
    nums[j] |= nums[i];
    i--;
  }
  i = 0;
  for (let j = n; j < nums.length; j++) {
    const num1 = nums[j] & 1023;
    const num2 = nums[j] >> 10;
    nums[i] = num1;
    nums[i + 1] = num2;
    i += 2;
  }
  return nums;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
// result = [2,3,5,4,1,7]
console.log(shuffle(nums, n));
