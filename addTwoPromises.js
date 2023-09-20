// !Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

const addTwoPromise = async (promise1, promise2) => {
  // * wait for both promise to resolve that is why we will use async and await
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};
var promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
var promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromise(promise1, promise2).then(console.log);
