import assert from "node:assert/strict";

const solution = (arr) => {
  // lets check if there is no element in the array, return an empty object
  if (arr.length === 0) return {};
  // create a dictionary object
  const dict = {};
  // loop through the array and count the frequency of each element
  arr.forEach((itm) => {
    // if the element is not in the dictionary, add it with a value of 1
    dict[itm] = (dict[itm] || 0) + 1;
  });

  return dict;
};

console.log(solution([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Testing the solution
// Test case 1
assert.deepStrictEqual(solution([]), {});
// Test case 2
assert.deepStrictEqual(solution([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
});
// Test case 3
assert.deepStrictEqual(
  solution(["apple", "banana", "apple", "orange", "banana", "apple"]),
  { apple: 3, banana: 2, orange: 1 }
);
