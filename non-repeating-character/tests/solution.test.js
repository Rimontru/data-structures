import solution from '../src/modules/solution';

describe('solution - Non Repeating Character', () => {
  test("Non Repeated Character in 'string' should be 's'", () => {
    const input =
      '87B6897b68JGGUYGYgkjghjgJKHGKJHGY7GLGLskoddyKIUD7T78KDktdKKTYDkudt';
    expect(solution(input)).toBe('s');
  });

  test('should return the first non-repeated character in a mixed case string', () => {
    expect(solution('aAbBcCdD')).toBeNull();
  });

  test('should handle an empty string', () => {
    expect(solution('')).toBeNull();
  });

  test('should handle a string with only one character', () => {
    expect(solution('z')).toBe('z');
  });

  test('should handle a string with all unique characters', () => {
    expect(solution('abcdef')).toBeNull();
  });
});
