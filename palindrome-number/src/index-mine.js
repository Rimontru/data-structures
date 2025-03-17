import { log } from "node:console";
import assert from "node:assert/strict";

const solution = (num) => {
  // We'll convert it to string
  const string = num.toString();
  // We'll check if It first character is a sign.
  // If its then return false because any negative number cannot be palindrome. Its a rule.
  if (string.at(0) === "-") return false;

  // We'll store origin value provided
  const origin = string;

  // We'll apply several built js functions
  // 1. Gonna taking the string and apply split function to convert an array
  // 2. Gonna taking the array and apply reverse function
  // 3. Gonna converting the array applying join to convert to a string
  const reverted = string.split("").reverse().join("");

  // We'll check and return resulset
  return reverted === origin;
};

log(solution(121));

// Testings using assert native

assert.deepStrictEqual(solution(10), false, "Test 1");
assert.deepStrictEqual(solution(-121), false, "Test 2");
assert.deepStrictEqual(solution(121), true, "Test 3");
