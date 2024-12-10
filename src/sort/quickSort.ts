const quickSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 1) return arr;

  const pointer = arr.pop() as T;
  const [left, right]: [T[], T[]] = [[], []];

  for (let i = 0; i < arr.length; i++) {
    pointer > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pointer, ...quickSort(right)];
};

export default quickSort;
