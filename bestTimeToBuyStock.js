// !You are given an array prices where prices[i] is the price of a given stock on the ith day.
// !You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// !Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); //5

// ---> Second Part
// ! You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// ! On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// ! Find and return the maximum profit you can achieve.

const maxProfit2 = (prices) => {
  //   const accumulate = (prev, curr) => prev + curr;
  let profit = new Array();
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit.push(prices[i + 1] - prices[i]);
    }
  }
  return profit.reduce((prev, curr) => prev + curr, 0);
};

const price = [7, 1, 5, 3, 6, 4];
console.log(maxProfit2(price));
