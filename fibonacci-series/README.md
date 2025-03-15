# Fibonacci Series Challenge

## Level range

- [Easy](https://chat.deepseek.com/a/chat/s/25438e15-7ca5-43e2-ab2b-5a3231277c06)

## Problem Statement

Write a JavaScript function to generate the Fibonacci series up to `n` terms or up to a maximum value, depending on the input. The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.

## Input

- An integer `n` representing the number of terms in the Fibonacci series.
- **OR** a maximum value `max` up to which the Fibonacci series should be generated.

## Output

- An array containing the Fibonacci series up to `n` terms or up to the maximum value `max`.

## Constraints

1. If the input is `n` (number of terms):
   - `0 <= n <= 50` (to avoid performance issues with large inputs).
   - If `n = 0`, return an empty array.
   - If `n = 1`, return `[0]`.
   - If `n = 2`, return `[0, 1]`.

2. If the input is `max` (maximum value):
   - `0 <= max <= 1000` (to keep the series manageable).
   - The series should include all Fibonacci numbers less than or equal to `max`.

## Examples

### Example 1: Input as `n` (number of terms)

```javascript
Input: n = 10
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Example 2: Input as `max` (maximum value)

```javascript
Input: max = 21
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

## Challenge

Write a JavaScript function fibonacci that takes one or two arguments:

- If one argument is provided, assume it is n (number of terms).
- If two arguments are provided, assume the second argument is max (maximum value).
- The function should handle both cases and return the appropriate Fibonacci series based on the input.
