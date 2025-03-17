import solution from "../src/modules/solution";

describe("Name Challenge", () => {
  test("Given an array with '[2,7,11,15]' elements and a target equals to '9' should be '[0,1]'", () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
