var solution = function (s) {
  // Clear string from Numbers using reGexp match function
  const cleanString = s.match(/[a-zA-Z]/g);
  let dict = {},
    hightestChar = "",
    hightestCount = 0;

  cleanString.map((char, i) => {
    // create dictionary
    dict[char] = (dict[char] || 0) + 1;
    // compare stored values against initial value next to hightest
    if (dict[char] > hightestCount) {
      hightestCount = dict[char];
      hightestChar = char;
    }
  });

  //console.log(dict);

  return hightestChar;
};

const input =
  "87B6897b68JGGUYGYgkjghjgJKHGKJHGY7GLGLskoddyKIUD7T78KDktdKKTYDkudt";
const output = solution(input);
console.log(output);
