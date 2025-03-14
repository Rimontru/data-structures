import solution from '../src/modules/solution';

describe('Two Sum Challenge', () => {
  test("Given an array with '[2,7,11,15]' elements and a target equals to '9' should be '[0,1]'", () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("Given an array with '[3,2,4]' elements and a target equals to '6' should be '[1,2]'", () => {
    expect(solution([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("Given an array with '[3,3]' elements and a target equals to '6' should be '[0,1]'", () => {
    expect(solution([3, 3], 6)).toEqual([0, 1]);
  });

  test("Given an array with '[3,2,3]' elements and a target equals to '6' should be '[0,2]'", () => {
    expect(solution([3, 2, 3], 6)).toEqual([0, 2]);
  });

  test("Given an array with '[3,2,4]' elements and a target equals to '7' should be '[0,2]'", () => {
    expect(solution([3, 2, 4], 7)).toEqual([0, 2]);
  });
});
