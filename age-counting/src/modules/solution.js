export default solution = (string) => {
  const splited = string.split(",");
  let greater = 0;
  let currentKey = "";

  splited.forEach((itm) => {
    const trimmed = itm.trim();
    if (trimmed.startsWith("key=")) {
      currentKey = trimmed.substr(4);
    } else if (trimmed.startsWith("age=")) {
      const age = Number(trimmed.substr(4));
      if (!isNaN(age) && age >= 50) {
        greater++;
      }
    }
  });

  return greater;
};
