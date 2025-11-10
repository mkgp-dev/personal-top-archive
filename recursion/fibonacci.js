/*
Usage:
fibs(8)
=> [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(10)
=> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const array = [0, 1];
  for (let i = 2; i < n; i++) array.push(array[i - 1] + array[i - 2]);

  return array;
};

const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
};