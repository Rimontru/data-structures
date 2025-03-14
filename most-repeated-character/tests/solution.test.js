import solution from "../src/modules/solution.js";

describe("solution - Most Repeated Character", () => {
  test("Most repeated character in 'hello world' should be 'l'", () => {
    expect(solution("hello world")).toBe("l");
  });

  test("Most repeated character in 'abracadabra' should be 'a'", () => {
    expect(solution("abracadabra")).toBe("a");
  });

  test("Most repeated character in 'aabbcc' should be 'a' (first in case of tie)", () => {
    expect(solution("aabbcc")).toBe("a");
  });

  test("Most repeated character in the provided input string should be 'G'", () => {
    const input =
      "87B6897b68JGGUYGYgkjghjgJKHGKJHGY7GLGLskoddyKIUD7T78KDktdKKTYDkudt";
    expect(solution(input)).toBe("G");
  });

  test("Most repeated character in 'zzzzzz' should be 'z'", () => {
    expect(solution("zzzzzz")).toBe("z");
  });

  test("Most repeated character in 'AAaaBBbb' should be 'A' (case-sensitive)", () => {
    expect(solution("AAaaBBbb")).toBe("A");
  });
});
