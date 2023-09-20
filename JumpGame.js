// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

const jumpGame = (nums) => {
  if (nums.length <= 1) {
    return true;
  }
  let max = nums[0]; //2
  for (let i = 0; i < nums.length; i++) {
    if (max <= i && nums[i] === 0) {
      //(2<0&&2)
      return false;
    }
    if (i + nums[i] >= max) {
      //(>=2)
      max = i + nums[i];
    }
    if (max >= nums.length - 1) {
      //(4>=4)
      return true;
    }
  }
  return false;
};

const nums = [0, 3, 1, 1, 4];
console.log(jumpGame(nums));
