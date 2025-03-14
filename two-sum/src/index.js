const solution = (nums, target) => {
  // Create a map to store the difference between target and each number
  let diff = {};

  // 2S - lets iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const residue = target - num;

    // Check if the residue exists in the difference map
    if (diff[residue] !== undefined) {
      // If it exists, return the current index and the index of the residue
      return [diff[residue], i];
    }

    // Otherwise, store the current number and its index in the difference map
    diff[num] = i;
  }

  // If no solution is found, return an empty array or throw an error
  return [];
};

const nums = [2, 11, 15, 7],
  target = 9;
console.log("solution:", solution(nums, target));
