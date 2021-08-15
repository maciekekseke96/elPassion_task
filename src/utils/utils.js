export const removeDuplicates = (arr) => {
  let uniqueValues = [];
  arr.forEach((element) => {
    if (uniqueValues.includes(element) === false) {
      uniqueValues.push(element);
    }
  });
  return uniqueValues;
};
