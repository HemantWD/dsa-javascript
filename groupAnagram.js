var groupAnagrama = (strs) => {
  const groupAnagram = {};

  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    if (!groupAnagram[sorted]) {
      groupAnagram[sorted] = [str];
    } else {
      groupAnagram[sorted].push(str);
    }
  }
  return groupAnagram;
};

const str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrama(str));
