/* Jump Game 
 You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
 */

// ---> Method 1

// function jump(nums) {
//   let maximum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (maximum <= i && nums[i] === 0) {
//       return false;
//     }
//     if (i + nums[i] > maximum) {
//       maximum = i + nums[i];
//     }
//     if (maximum >= nums.length - 1) {
//       return true;
//     }
//   }
// }

//  ---> Method 2

function jump2(nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
    if (goal === 0) {
      return true;
    }
  }
  return false;
}

const arr = [2, 3, 1, 1, 4];
// console.log(jump(arr));
console.log(jump2(arr));
