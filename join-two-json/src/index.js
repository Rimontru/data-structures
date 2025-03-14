import assert from "node:assert/strict";

const directory = [
  { id: 0, name: "Maggie", age: 14, phone: "+5555" },
  { id: 1, name: "Homer", age: 38, phone: "+5555" },
  { id: 2, name: "Marge", age: 34, phone: "+5555" },
  { id: 3, name: "Bart", age: 10, phone: "+5555" },
  { id: 4, name: "Lisa", age: 8, phone: "+5555" },
  { id: 5, name: "Julio", age: 30, phone: "+5555" },
  { id: 6, name: "Ned", age: 60, phone: "+5555" },
  { id: 7, name: "Moe", age: 50, phone: "+5555" },
  { id: 8, name: "Lenny", age: 40, phone: "+5555" },
  { id: 9, name: "Lenny", age: 40, phone: "+5555" },
  { id: 10, name: "Carl", age: 40, phone: "+5555" },
];

const registrations = [
  { id: 0, age: 15, email: "maggie@gmail.com" },
  { id: 1, age: 40, email: "homer@gmail.com" },
  { id: 2, age: 35, email: "Marge@gmail.com" },
  { id: 3, age: 12, email: "Bart@gmail.com" },
  { id: 4, age: 11, email: "Lisa@gmail.com" },
  { id: 8, age: 41, email: "Lisa@gmail.com" },
];

const exploit = [...Array(10000000).keys()].map((i) => ({
  id: i,
  age: i % 100,
  event: "Party",
  email: `user${i}@gmail`,
}));

/* 
// This logic has a time complexity of 400ms wiht 10 million records
// This is a brute force or Nested Loops implementation (O(n^2))
const join = (leftArray, rightArray, key) => {
  const joined = [];
  for (const leftItm of leftArray) {
    for (const rightItm of rightArray) {
      if (leftItm[key] === rightItm[key]) {
        joined.push({ ...leftItm, ...rightItm });
      }
    }
  }

  return joined;
};
 */

// This logic has a time complexity of 75ms wiht 10 million records
// This is a Hash Map implementation (O(n))
const join = (leftArray, rightArray, key) => {
  const map = {};
  leftArray.forEach((leftItm) => (map[leftItm[key]] = leftItm));

  const joined = [];
  rightArray.forEach((rightItm) => {
    // lets get the left item from the map using the key from the right item
    const leftItm = map[rightItm[key]];
    // if the left item is undefined, we ignore it
    if (leftItm === undefined) return;
    // we push the joined item to the
    // joined.push({ ...leftItm, ...rightItm }); // This is the old way and might be avoided
    // Modify the original leftItm directly instead of creating a new object such as above
    Object.assign(leftItm, rightItm);
    // push the updated leftItm to the joined array
    joined.push(leftItm);
  });

  return joined;
};

// log time complexity for basic
console.time("join");
console.log(join(directory, registrations, "id"));
console.timeEnd("join");
/* 
// log time complexity for exploit
console.time("exploit");
console.log(join(directory, exploit, "id"));
console.timeEnd("exploit");
 */
// Test cases

const left = [
  // first state
  { id: 1, name: "Bart", age: 10, phone: "+5555" },
];

const right = [
  // second state to update the first state
  { id: 1, name: "Bart", age: 12, email: "Bart@gmail.com" },
];

const expectOutput = [
  {
    id: 1,
    name: "Bart",
    phone: "+5555",
    age: 12,
    email: "Bart@gmail.com",
  },
];

assert.deepStrictEqual(join(left, right, "id"), expectOutput);
