import { performance } from "node:perf_hooks";
import assert from "node:assert/strict";

const solution = (length = null, max = null) => {
  // If length is 0 and max is null, return an empty array. Its a rule of fibonacci series ✅
  if (length === 0 && max === null) return [];
  // If length is 1 and max is null or length is null and max is 0, return [0]. Its a rule of fibonacci series ✅
  if ((length === 1 && max === null) || (length === null && max === 0))
    return [0];

  // ‼️ Function to generate fibonacci series by length,
  // ‼️ It receives length such as the number of elements.
  var byLength = (length) => {
    //if (length <= 2) return Array.from({ length }, (_, i) => i);
    let fibo = [0, 1];
    // If length is less than or equal to 2, return [0, 1]
    if (length <= 2) return fibo;
    // Generate fibonacci series by length
    // It starts from 2 because the first two elements are already in the array to start the addition
    // It stops when the length of the array is less than the length
    // It cannot be equal to the length because It starts from position 0
    for (let i = 2; i < length; i++) {
      // It makes the addition aritmethic of the last two elements and push the result to the array
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo; // Return the fibonacci series by length
  };

  // ‼️ Function to generate fibonacci series by maximum,
  // ‼️ It receives max such as the maximum value or equal to the maximum value of the series.
  var byMaximum = (max) => {
    let fibo = [0, 1];
    // If max is less than 2, return [0, 1]. Its a rule of fibonacci series ✅
    if (max < 2) return fibo;
    // Generate fibonacci series by maximum
    // It starts from 2 because the first two elements are already in the array to start the addition
    // It will be iterate when the next element is less than or equal to the maximum value
    for (let i = 2; fibo[i - 1] + fibo[i - 2] <= max; i++) {
      // It makes the addition aritmethic of the last two elements and push the result to the array
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
  };

  // Entry point of the solution by Length function
  if (length !== null && length > 0) {
    return byLength(length);
  }

  // Entry point of the solution by Maximum function
  if (max !== null && max > 0) {
    return byMaximum(max);
  }
  return [];
};

// Benchmarking the solution function
const benchmark = (length, max) => {
  const start = performance.now();
  const result = solution(length, max);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return result;
};

console.log("solution:", benchmark(20, null));
console.log("solution:", benchmark(null, 1000));

// Testing with assert
// Test case 1 - When length is 0
assert.deepStrictEqual(solution(0, null), [], "When length is 0");
// Test case 2 - When length is 1
assert.deepStrictEqual(solution(1, null), [0], "When length is 1");
// Test case 3 - When length is 2
assert.deepStrictEqual(solution(2, null), [0, 1], "When length is 2");
// Test case 4 - When length is 5
assert.deepStrictEqual(solution(5, null), [0, 1, 1, 2, 3], "When length is 5");
// Test case 5 - When max is 0
assert.deepStrictEqual(solution(null, 0), [0], "When max is 0");
// Test case 6 - When max is 1
assert.deepStrictEqual(solution(null, 1), [0, 1], "When max is 1");
// Test case 7 - When max is 5
assert.deepStrictEqual(solution(null, 5), [0, 1, 1, 2, 3, 5], "When max is 5");
// Test case 8 - When max is 21
assert.deepStrictEqual(
  solution(null, 21),
  [0, 1, 1, 2, 3, 5, 8, 13, 21],
  "When max is 21"
);
// Test case 10 - When max is 100
assert.deepStrictEqual(
  solution(null, 100),
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
  "When max is 100"
);

