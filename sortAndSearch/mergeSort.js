function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.slice()).concat(right.slice());
}

export default function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const len = arr.length;
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}
