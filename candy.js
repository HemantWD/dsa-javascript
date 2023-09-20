const candy = (ratings) => {
  let candies = [];
  let currNymber = 1;
  candies[0] = 1;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      currNymber++;
    } else {
      currNymber = 1;
    }
    candies[i] = currNymber;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      currNymber++;
    } else {
      currNymber = 1;
    }
    candies[i] = Math.max(currNymber, candies[i]);
  }
  return candies;
};

const rate = [1, 0, 2];
console.log(candy(rate));
// iterate over the array
// then check the maximum numbe rin the element and alot him 2 candy
