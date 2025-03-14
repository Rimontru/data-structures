var solution = function (s) {
  // Clear string from Numbers using reGexp match function
  const cleanString = s.match(/[a-zA-Z]/g);
  const dict = new Map();
  // make dictionary data by letter
  cleanString.map((char, i) => {
    // check if char exits on dictionary
    if (!dict.has(char)) {
      dict.set(char, 1);
    } else {
      const mutable = dict.get(char);
      dict.set(char, mutable + 1);
    }
  });

  // lets compare for each letter into dictionary
  let highest = 0,
    char = "";
  dict.forEach((_val, _key) => {
    if (highest === 0) {
      highest = _val;
      char = _key;
    }

    if (_val > highest) {
      highest = _val;
      char = _key;
    }
  });

  return char;
};

const input =
  "87B6897b68JGGUYGYgkjghjgJKHGKJHGY7GLGLskoddyKIUD7T78KDktdKKTYDkudt";
const output = solution(input);
console.log(output);
