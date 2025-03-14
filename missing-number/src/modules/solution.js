export default solution = (length, elements) => {
  if (elements.length === 0) return null;
  if (elements.length > length) return null;

  let missingNumber = null;
  const uint8 = new Uint8Array(elements);
  for (let index = 0; index < length; index++) {
    if (!uint8.includes(index)) missingNumber = index;
  }
  return missingNumber;
};
