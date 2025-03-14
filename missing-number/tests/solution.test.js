import solution from "../src/modules/solution.js";

describe("solution - Find missing Number", () => {
  test("should find the missing number in a basic case", () => {
    const length = 10;
    const elements = [0, 5, 3, 7, 9, 1, 2, 8, 6, 10];
    expect(solution(length, elements)).toBe(4);
  });

  test("should find the missing number when the first number is missing", () => {
    const length = 5;
    const elements = [1, 2, 3, 4, 5];
    expect(solution(length, elements)).toBe(0);
  });

  test("should find the missing number when the last number is missing", () => {
    const length = 5;
    const elements = [0, 1, 2, 3, 5];
    expect(solution(length, elements)).toBe(4);
  });

  test("should return null when the array is empty", () => {
    const length = 5;
    const elements = [];
    expect(solution(length, elements)).toBeNull();
  });

  test("should return null when no number is missing", () => {
    const length = 5;
    const elements = [0, 1, 2, 3, 4, 5];
    expect(solution(length, elements)).toBeNull();
  });
});
