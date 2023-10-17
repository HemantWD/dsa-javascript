// * Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// * formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// * reversing the digits, determine whether the resulting number has any prime factors. If it does
// * have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const reverseDigit = (num) => {
  let reveserNum = 0;
  while (num > 0) {
    reveserNum = reveserNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reveserNum;
};

const reverseAndCheck = (num) => {
  const reversed = reverseDigit(num);
//   console.log(reversed)  //615
  const primeFactors = [];
  for (let i = 2; i <= reversed; i++) {
    if (isPrime(i) && reversed % i === 0) {
      primeFactors.push(i);
    }
  }
  return primeFactors;
};

const num = 516;
console.log(reverseAndCheck(num));
