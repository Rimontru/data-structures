import solution from "../src/modules/solution";

describe("Challenge: Frequency Counter", () => {
  test("Given an array with numbers, it should return the frequency of each number", () => {
    expect(solution([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toEqual({
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    });
  });

  test("Given an array with strings, it should return the frequency of each string", () => {
    expect(
      solution(["apple", "banana", "apple", "orange", "banana", "apple"])
    ).toEqual({
      apple: 3,
      banana: 2,
      orange: 1,
    });
  });

  test("Given an empty array, it should return an empty object", () => {
    expect(solution([])).toEqual({});
  });
});
