export default function (s) {
  const cleanString = s.match(/[a-zA-Z]/g);
  let dict = {},
    hightestChar = "",
    hightestCount = 0;

  cleanString.map((char, i) => {
    dict[char] = (dict[char] || 0) + 1;
    if (dict[char] > hightestCount) {
      hightestCount = dict[char];
      hightestChar = char;
    }
  });

  return hightestChar;
}
