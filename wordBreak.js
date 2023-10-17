function wordBreak(s, wordDict) {
  let table = new Array(s.length + 1).fill(false);
  return table;
}

const s = "leetcode",
  wordDict = ["leet", "code"];

console.log(wordBreak(s, wordBreak));
