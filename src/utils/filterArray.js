const filterArray = function (arr, id, newArr) {
  arr.some((o) => o.name === id && Object.assign(newArr, o));
  return newArr;
};
export { filterArray };
