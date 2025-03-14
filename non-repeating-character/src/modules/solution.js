export default solution = (input) => {
  const trimed = input.trim();

  if (trimed.length === 0) return null;

  const insensitive = trimed.toLowerCase();

  const arrayable = insensitive.match(/[a-zA-Z]/g);

  if (arrayable.length === 1) {
    return arrayable[0];
  }

  let dict = {},
    lowest_value = 0,
    highest_value = 0,
    lowest_char = null;

  arrayable.map((char) => {
    dict[char] = (dict[char] || 0) + 1;

    if (dict[char] > highest_value) {
      highest_value = dict[char];
    }
  });

  lowest_value = highest_value;

  for (const char in dict) {
    if (dict[char] < lowest_value) {
      lowest_value = dict[char];
      lowest_char = char;
    }
  }

  return lowest_char;
};
