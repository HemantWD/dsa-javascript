function wordPattern(pattern, s) {
  sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;

  const kMap = {};
  const vMap = {};
  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i];
    const value = sArr[i];
    if (key in kMap || value in vMap) {
      if (kMap[key] !== value) {
        return false;
      }
      if (vMap[value] !== key) {
        return false;
      }
    } else {
      kMap[key] = value;
      vMap[value] = key;
    }
  }
  return true;
}

const pattern = "abba";
const s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
