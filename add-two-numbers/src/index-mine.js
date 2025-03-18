/**
 * 
Issues in the Current Solution:
Input Assumptions:

The solution assumes the input is an array, but the problem specifies that the input is a linked list.

The constraints (list_one.length > 10) are arbitrary and not part of the problem.

Inefficient Operations:

Converting the linked list to a string, then to a number, and back to an array is unnecessary and inefficient.

This approach won't work for very large numbers (e.g., numbers with 100+ digits) because JavaScript's Number type cannot handle such large values accurately.

Incorrect Handling of Linked Lists:

The problem requires working with linked lists, not arrays. Your solution assumes arrays, which doesn't align with the problem statement.

Unnecessary Complexity:

The solution involves multiple loops and conversions, which can be simplified.
 *
 */

const solution = (list_one, list_two) => {
  // lets check is not empty
  if (list_one.length === 0 || list_two.length === 0) return [];
  // lets check contains digits less than 10 of length
  if (list_one.length > 10 || list_two.length > 10) return [];

  // lets create a single object with each list
  const original_lists = [list_one, list_two];
  const lists_reversed = [];
  const total_reversed = [];
  const total_sumed = [];
  let sumed = 0;

  original_lists.forEach((list, i) => {
    lists_reversed[i] = [];
    total_reversed[i] = '';
    total_sumed[i] = 0;
    let initial = 0;

    for (let index = list.length - 1; index >= 0; index--) {
      lists_reversed[i][initial++] = list[index];
      total_reversed[i] += String(list[index]);
    }

    total_sumed[i] += Number(total_reversed[i]);
    sumed += total_sumed[i];
  });

  const string_sumed = sumed.toString();
  const inversed = [];
  let idx = 0;
  for (let index = string_sumed.length - 1; index >= 0; index--) {
    const num = string_sumed[index];
    inversed[idx++] = Number(num);
  }

  /* console.log(lists_reversed);
  console.log(total_reversed);
  console.log(total_sumed);
  console.log(sumed); */

  return inversed;
};

const l1 = [2, 4, 3], // 342
  l2 = [5, 6, 4]; // 465

// 342 + 465 = 807 = [7,0,8]
console.log('solution:', solution(l1, l2));
