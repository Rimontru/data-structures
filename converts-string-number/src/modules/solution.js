export default solution = (string) => {
  // lets clean up the white spaces
  const clean_string = string.replaceAll(' ', '');

  // lets check the string is not empty
  if (!clean_string || clean_string.length === 0) return 'NaN';

  // lets define initial iterator
  let i = 0;
  let sign = 1;

  // lets check the beginning of string contains a sign (- | +)
  if (clean_string[i] === '+' || clean_string[0] === '-') {
    // lets confirm its positive or negative
    sign = clean_string[i] === '-' ? -1 : 1;
    i++;
  }

  let result = 0;

  // lets iterate all elements by string length
  while (i < clean_string.length) {
    // get a character
    const char = clean_string[i];
    // check if char is between 0 and 9 letter
    if (char >= '0' && char <= '9') {
      // To get number from letter, It makes a substract of charCode letter by Zero
      // Rule: All number substracted by Zero is equals to itself
      const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
      // convert to 10 Base
      result = result * 10 + digit;
      i++;
    } else return 'NaN';
  }

  // Apply sign to reult
  result = result * sign;

  return result;
};
