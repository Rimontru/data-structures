const solution = (length = null, max = null) => {
  if (length === 0 && max === null) return [];
  if ((length === 1 && max === null) || (length === null && max === 0))
    return [0];

  var byLength = (length) => {
    let fibo = [0, 1];
    let index = 2;
    if (length <= 2) return [0, 1];
    while (index < length) {
      fibo.push(fibo[index - 1] + fibo[index - 2]);
      index++;
    }

    return fibo;
  };

  var byMaximun = (max) => {
    let fibo = [0, 1];
    if (max < 2) return fibo;
    while (true) {
      const next = fibo[index - 1] + fibo[index - 2];
      if (next > max) break;
      fibo.push(next);
    }
    return fibo;
  };

  if (length !== null && length > 0) {
    return byLength(length);
  }

  if (max !== null && max > 0) {
    return byMaximun(max);
  }

  return [];
};

console.log("solution:", solution(0, 0));

