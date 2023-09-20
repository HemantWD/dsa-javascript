const validAnagram = (str, strs) => {
  let a = str.toLowerCase();
  let b = strs.toLowerCase();
  if (a.split("").sort().join("") === t.split("").sort().join("")) {
    return true;
  }

  return false;
};

const s = "anagram",
  t = "nagaram";
const result = validAnagram(s, t);
console.log(result);
