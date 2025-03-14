const MESSAGE_TYPES = Object.freeze({
  ERROR: Symbol(),
  NAN: Symbol(),
});

const stringToInteger = async (string) => {
  // trim white spaces from string
  const clean_string = string.replaceAll(' ', '');

  // lets check is not empty
  if (!clean_string || clean_string.length === 0) throw new Error('NaN');

  // define iterator init
  let i = 0;
  let sign = 1;

  // lets check string contents a sign (- | +)
  if (clean_string[i] === '+' || clean_string[0] === '-') {
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
      // To get number from letter, makes a substract by letter charCode by Zero
      // Rule: All number substracted by Zero is equals to itself
      const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
      // convert to 10 Base
      result = result * 10 + digit;
      i++;
    } else throw new Error('NaN');
  }

  // Apply sign
  result = result * sign;

  return result;
};

Promise.allSettled([
  stringToInteger(''),
  stringToInteger('123'),
  stringToInteger('-456'),
  stringToInteger('+789'),
  stringToInteger('  -42'),
  stringToInteger('  007'),
  stringToInteger('0000'),
  stringToInteger('abc'),
]).then((results) => {
  results.forEach((result) => {
    console.log(result);
  });
});

/* try {
  console.log(stringToInteger('')); // Throws an error
  console.log(stringToInteger('123')); // Output: 123
  console.log(stringToInteger('-456')); // Output: -456
  console.log(stringToInteger('+789')); // Output: 789
  console.log(stringToInteger('  -42')); // Output: -42
  console.log(stringToInteger('  007')); // Output: 7
  console.log(stringToInteger('0000')); // Output: 0
  console.log(stringToInteger('abc')); // Throws an error
} catch (error) {
  console.error(error.message);
} */

//console.log(MESSAGE_TYPES.ERROR); // Throws an error
