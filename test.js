import test from 'ava';

import binarySearch from './sortAndSearch/binarySearch';
import bubbleSort from './sortAndSearch/bubbleSort';

test('binary search: no elements', (t) => {
  t.is(binarySearch([], 10), -1);
});

test('binary search: one element and not exists', (t) => {
  t.is(binarySearch([1], 10), -1);
});

test('binary search: one element and exists', (t) => {
  t.is(binarySearch([10], 10), 0);
});

test('binary search: not exists', (t) => {
  t.is(binarySearch([1, 2, 3, 4, 5], 10), -1);
});

test('binary search: exists', (t) => {
  t.is(binarySearch([1, 2, 3, 10, 15], 10), 3);
});

test('bubble sort: correct', (t) => {
  t.deepEqual(bubbleSort([33, 103, 3, 726, 200, 984, 198, 764, 9]),
    [3, 9, 33, 103, 198, 200, 726, 764, 984]);
});
