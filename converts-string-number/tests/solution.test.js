// important: in package.json add to line "type": "module" for activate ES6 modules ⚠️

import solution from '../src/modules/solution.js';

describe('solution - Converts string to Number', () => {
  test('should return NaN when the string is empty', () => {
    const string = '';
    expect(solution(string)).toBe('NaN');
  });

  test('should return NaN when the string is alphanumeric', () => {
    const string = '1x0';
    expect(solution(string)).toBe('NaN');
  });

  test('should return positive numbers in a basic case', () => {
    const string = '123';
    expect(solution(string)).toBe(123);
  });

  test('should return positive numbers when string contains a (+) sign', () => {
    const string = '+123';
    expect(solution(string)).toBe(123);
  });

  test('should return negative numbers when string contains a (-) sign', () => {
    const string = '-123';
    expect(solution(string)).toBe(-123);
  });

  test('should return a positive number when string contains white spaces', () => {
    const string = '  127 ';
    expect(solution(string)).toBe(127);
  });

  test('should return a positive number when string contains trailing zeros followed by numbers', () => {
    const string = '0007';
    expect(solution(string)).toBe(7);
  });
});
