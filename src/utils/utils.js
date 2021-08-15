export const removeDuplicates = (arr) => {
  let uniqueValues = [];
  arr.forEach((element) => {
    if (uniqueValues.includes(element) === false) {
      uniqueValues.push(element);
    }
  });
  return uniqueValues;
};

export const findIssueById = (arr, id) => {
  const foundIssue = arr.find((element) => {
    return element.id === id;
  });

  const foundIssueIndex = arr.findIndex((element) => {
    return (element.id === id);
  });

  return {
    issue: foundIssue,
    id: foundIssueIndex,
  };
};
