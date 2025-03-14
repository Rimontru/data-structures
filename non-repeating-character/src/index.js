const solution = (input) => {
  // lets clean any whitespace character
  const trimed = input.trim();
  // lets ensures that input its not empty
  if (trimed.length === 0) return 'Input must be any string';

  // case insensitive upper or lower
  const insensitive = trimed.toLowerCase();

  // lets scape the string from numbers
  const arrayable = insensitive.match(/[a-zA-Z]/g);

  // handle with only one character
  if (arrayable.length === 1) {
    return arrayable[0];
  }

  // lets define dictionary Object
  let dict = {};
  // lets create lowest, highest and char
  let lowest_value = 0,
    highest_value = 0,
    lowest_char = null;

  // lets iterate elements from string
  arrayable.map((char) => {
    /*
    // when char does not exist in dictionary
    if (!dict.hasOwnProperty(char)) {
      // lets initialize it 
      dict[char] = 1
    } 
    else {
      // lets increase it
      dict[char] = dict[char] + 1
    } */
    // An empty dictionary is created and the value of the key is increased by 1 if it exists in the dictionary.
    dict[char] = (dict[char] || 0) + 1;

    // lets get the highest value to will serve to initialize the lowest value
    if (dict[char] > highest_value) {
      highest_value = dict[char];
    }
  });

  // lets initialize lowest value through the highest value
  lowest_value = highest_value;

  // lets Iterate through the dictionary object
  for (const char in dict) {
    // lets get the lowest value and char, if the current value is less than the lowest value
    if (dict[char] < lowest_value) {
      lowest_value = dict[char]; // Update the minimum value
      lowest_char = char; // Update the minimum value character
    }
  }

  //
  console.log(dict);
  console.log(`Highest: ${highest_value}`);
  console.log(`Lowest: ${lowest_value}`);

  return lowest_char;
};

const input = 'aABbcC';
console.log('solution:', solution(input));
