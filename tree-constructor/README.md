# Tree Constructor

- Coderbyte challenge

## Levels included

[Easy](https://chat.deepseek.com/a/chat/s/da86990c-5585-4237-b998-84b9887c75a9)

## Description

Given a set of pairs representing child-parent relationships, determine if they can form a valid binary tree.

Have the function `TreeConstructor(strArr)` take the array of strings stored in `strArr`, which will contain pairs of integers in the following format: **(i1,i2)**, where **i1** represents a child node in a tree and the second integer **i2** signifies that it is the parent of **i1**.
For example: if strArr is `["(1,2)", "(2,4)", "(7,2)"]`, then this forms the following tree:

---

|----- 4 -----|
|---- / ------|
|--- 2 -------|
|-- /-\ ------|
|- 1 - 7 -----|

---

which you can see forms a proper binary tree. Your program should, in this case, return the string **true** because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string **false**. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

## Constraints

1. Each node can have at one children.
2. The input pairs will be unique.

## Input

- An array of pairs, where each pair is represented as `[child, parent]`.

## Output

- A boolean value: `true` if the pairs can form a valid binary tree, otherwise `false`.

## Example 1

> Input: Input: [[4, 2],[5, 2],[2, 6],[6, 3],[1, 3]]
> Output: true

## Example 2

> Input: Input: [[1, 2], [3, 2], [2, 12], [5 ,2]]
> Output: false

## Example 3

> Input: [[1, 2], [1, 3]]
> Output: false (1 has two parents)

## Example 4

> Input: [[1, 2], [3, 4]]
> Output: false(two separate trees)

## Example 5

> Input: [[1, 2], [2, 3], [3, 4]]
> Output: true

