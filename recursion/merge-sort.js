/*
Usage:
mergeSort([])
=> []
mergeSort([73])
=> [73]
mergeSort([1, 2, 3, 4, 5])
=> [1, 2, 3, 4, 5]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1])
=> [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110])
=> [79, 100, 105, 110]
*/

const merge = (a, b) => a.length && b.length
                          ? (a[0] < b[0]
                            ? [a[0], ...merge(a.slice(1), b)]
                            : [b[0], ...merge(a, b.slice(1))])
                          : [...a, ...b];

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
};