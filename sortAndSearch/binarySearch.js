export default function binarySearch(arr, queryNumber) {
  let startIdx = 0;
  let stopIdx = arr.length - 1;
  let middle = Math.floor((startIdx + stopIdx) / 2);

  while (arr[middle] !== queryNumber && startIdx < stopIdx) {
    if (queryNumber > arr[middle]) {
      startIdx = middle + 1;
    } else if (queryNumber < arr[middle]) {
      stopIdx = middle - 1;
    }
    middle = Math.floor((startIdx + stopIdx) / 2);
  }
  return arr[middle] === queryNumber ? middle : -1;
}
