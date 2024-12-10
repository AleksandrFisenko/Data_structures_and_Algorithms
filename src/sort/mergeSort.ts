const mergeSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 2) {
    if (arr?.[0] > arr?.[1]) return arr.reverse();
    return arr;
  }

  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2, arr.length));
  return [...merge(left, right)];
};

const merge = <T>(left: T[], right: T[]): T[] => {
  const result = [];
  let [lIndex, rIndex] = [0, 0];

  while (lIndex !== left.length && rIndex !== right.length) {
    if (left[lIndex] < right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
  }

  return [...result, ...left.slice(lIndex), ...right.slice(rIndex)];
};

export default mergeSort;
