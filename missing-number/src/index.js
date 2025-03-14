const solution = (length, elements) => {
  // lets check if string is empty
  if (!elements || elements.length === 0) return 0;

  // lets takes number with highest value from elements
  const maxElement = Math.max(...elements);
  // lets compare length given against highest value from elements
  if (length < maxElement) {
    return 'Invalid input: length is less than the maximum element in the array.';
  }

  // lets use a Set constructor for lookups by "has" method
  const elementSet = new Set(elements);
  let a = 1;
  // lets define a bucle that iterate by length number + 1
  for (let index = 0; index <= length; index++) {
    // has function check for each element in elementSet collection
    if (!elementSet.has(index)) {
      // if this index has not found in elements collection then end bucle and return index
      return index;
    }
  }

  // If no missing number is found, return the next number
  return length + 1;
};

const length = 5,
  //elements = [0, 5, 3, 7, 9, 1, 2, 8, 6, 10];
  elements = [0, 1, 2, 3, 4];
const output = solution(length, elements);
console.log(output);
