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
    return element.id === id;
  });

  return {
    issue: foundIssue,
    id: foundIssueIndex,
  };
};

export const countSpecificIssues = (filter, arr) => {
  let matchingIssues = 0;

  switch (filter) {
    case 'done':
      arr.forEach((element) => {
        if (element.status === 'done') {
          matchingIssues += 1;
        }
      });
      break;
    case 'open':
      arr.forEach((element) => {
        if (element.status === 'open') {
          matchingIssues += 1;
        }
      });
      break;
    case 'all':
      matchingIssues = arr.length;
      break;
    default:
      matchingIssues = 0;
  }
  return matchingIssues;
};
