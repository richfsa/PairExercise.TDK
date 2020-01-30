const twoSum = (arr, targetSum) => {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (hashMap[targetSum - number] !== undefined) {
      return [hashMap[targetSum - number], i];
    }
    hashMap[number] = i;
  }
  return [];
};

module.exports = twoSum;
