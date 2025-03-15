export default solution = (arr) => {
  if (arr.length === 0) return {};
  const dict = {};

  arr.forEach((itm) => {
    dict[itm] = (dict[itm] || 0) + 1;
  });

  return dict;
};
