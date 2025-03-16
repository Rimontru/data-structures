import { log } from "node:console";
import assert from "node:assert/strict";

const solution = (arr) => {
  const parentMap = {};
  const childMap = {};

  for (const [child, parent] of arr) {
    // Lets handle the case where a child has more than 2 parents
    // If the child as a key is already in the childMap, then it has more than 2 parents
    // So we return false
    if (childMap[child]) return false;
    // We'll store the child as a key and the parent as a value
    childMap[child] = parent;

    // Lets handle the case where a parent has more than 2 children
    // We'll store the parent as a key and the number of children as a value
    parentMap[parent] = (parentMap[parent] || 0) + 1;
    // If the parent has more than 2 children, then we return false
    if (parentMap[parent] > 2) {
      return false;
    }
  }

  // ⚠️ Will Find the root node with the following conditions
  // ⭐ A root node is a node that is never a child but It's a parent
  // ⭐ A root node is a node that is in the parent Map but not in the child Map such a key
  // ⭐ A root node is a node that is in the top level of the tree

  //
  // We'll get all the nodes in the tree by combining the childMap and parentMap keys
  // We'll use the spread operator to get all the keys in the childMap and parentMap using the Object.keys method
  // We'll put all the keys in an array
  // We'll use the Set constructor to remove duplicate values of spreading the array
  const allNodes = new Set([
    ...Object.keys(childMap),
    ...Object.keys(parentMap),
  ]);

  // We'll get all the root candidates by filtering all the nodes that are not in the child map
  // First we'll use the spread operator to convert the allNodes of Set constructor to an array
  // Then we'll use the filter method to filter the nodes that are not in the child map
  const rootCandidates = [...allNodes].filter((node) => !childMap[node]);

  // Must have exactly one root node
  // If the rootCandidates has more than one node, then we return false
  return rootCandidates.length === 1;
};

// Example Test Cases
log(
  solution([
    [4, 2],
    [5, 2],
    [2, 6],
    [6, 3],
    [1, 3],
  ])
); // true
log(
  solution([
    [1, 2],
    [3, 2],
    [2, 12],
    [5, 2],
  ])
); // false
log(
  solution([
    [1, 2],
    [1, 3],
  ])
); // false (1 has two parents)
log(
  solution([
    [1, 2],
    [3, 4],
  ])
); // false (two separate trees)
log(
  solution([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // true

// Benchmark

// Testings
assert.strictEqual(
  solution([
    [4, 2],
    [5, 2],
    [2, 6],
    [6, 3],
    [1, 3],
  ]),
  true
);
assert.strictEqual(
  solution([
    [1, 2],
    [3, 2],
    [2, 12],
    [5, 2],
  ]),
  false
);
assert.strictEqual(
  solution([
    [1, 2],
    [1, 3],
  ]),
  false
);
assert.strictEqual(
  solution([
    [1, 2],
    [3, 4],
  ]),
  false
);
assert.strictEqual(
  solution([
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
  true
);

