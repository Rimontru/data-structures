export default solution = (nums, target) => {
  let diffs = new Map();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const residue = target - num;

    if (diffs.has(residue)) {
      return [diffs.get(residue), index];
    }

    diffs.set(num, index);
  }

  /**
   * nums   = [2,7,11,15]
   * target = 9
   * 
   * 
    index = 0
    num = 2
    residue = 9 - 2 = 7
    current_diff: {}
    if exit []
    diff: {num => index} = {2,0}

    index = 1
    num = 7
    residue = 9 - 7 = 2
    current_diff: {2,0}
    if exit []
    diff: {num => index} = {2,0}
   *
   *
   */

  return [];
};
