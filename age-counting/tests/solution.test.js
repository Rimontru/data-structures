import solution from "../src/modules/solution";

describe("Age Counting Challenge", () => {
  test("Should return the number of people that are 50 years old or older", () => {
    const data = "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47";
    expect(solution(data)).toBe(2);
  });

  test("Should return the number of people that are 50 years old or older", () => {
    const data =
      "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=9cnVg, age=55";
    expect(solution(data)).toBe(3);
  });

  test("Should return the number of people that are 50 years old or older", () => {
    const data =
      "key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=9cnVg, age=55, key=7b5Zg, age=50";
    expect(solution(data)).toBe(4);
  });

  // test cases with fetch API
  test("Should return the number of people that are 50 years old or older API", async () => {
    const data = await fetch(
      "https://coderbyte.com/api/challenges/json/age-counting"
    )
      .then((response) => response.json())
      .then((json) => json.data);

    expect(solution(data)).toBe(128);
  });
});
