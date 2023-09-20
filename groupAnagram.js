const groupAnagram = (strs) => {
  //approach is that first we will create an empty object and then sort the string values of array and group them if the strings match.

  const anagramGroups = {}; //initailized an empty array

  for (const str of strs) {
    const sorted = str.split("").sort().join(""); //sorted the array
    if (!anagramGroups[sorted]) {
      //if there is no group we will create a group
      anagramGroups[sorted] = [str];
    } else {
      anagramGroups[sorted].push(str);
    }
  }
  return Object.values(anagramGroups);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagram(strs);
console.log(result);
