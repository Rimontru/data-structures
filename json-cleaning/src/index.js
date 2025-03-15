/**
 * 
1. Remove all keys that have value of N/A ✅
2. Remove all empty strings ✅
3. Remove all keys that have value of "-" ✅
 * 
 */

const solution_1 = (json) => {
  // console.log(json);
  // Lets define the values that we want to remove
  const garbage = ["-", "", "N/A"];

  // Lets iterate over the json object
  for (const [parentKey, parentValue] of Object.entries(json)) {
    // Lets identify if the parent value is String or Number
    if (typeof parentValue === "string" || typeof parentValue === "number") {
      if (garbage.includes(parentValue)) {
        delete json[parentKey];
      }
    } else {
      // Lets identify if the parent value is Array or Object
      for (const [childKey, childValue] of Object.entries(parentValue)) {
        // Lets check if the child value contains the garbage values
        if (garbage.includes(childValue)) {
          // Lets identify if the child key is Array or Object
          if (!isNaN(Number(childKey))) {
            // Lets remove the element from the array
            parentValue.splice(childKey);
          } else {
            // Lets remove the key from the object
            delete parentValue[childKey];
          }
        }
      }
    }
  }

  return json;
};
/**
 * Used recursion to solve the problem
 */
const solution = (json) => {
  const garbage = ["-", "", "N/A"];

  const clean = (obj) => {
    // Lets check if the obj is an array
    if (Array.isArray(obj)) {
      // Lets filter the array and remove the garbage values
      // Lets map the array and recursively call the clean function
      return obj.filter((item) => !garbage.includes(item)).map(clean);
    } else if (typeof obj === "object" && obj !== null) {
      // Lets check if the obj is an object
      // Lets iterate over the object and recursively call the clean function
      // Lets check if the value is garbage and remove it
      for (const key in obj) {
        if (garbage.includes(obj[key])) {
          delete obj[key];
        } else {
          obj[key] = clean(obj[key]);
        }
      }
    }
    return obj;
  };

  return clean(json);
};

const getData = async () => {
  const url = "https://coderbyte.com/api/challenges/json/json-cleaning";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

(async () => {
  const data = await getData();
  console.log(solution(data));
})();

// Testings
import assert from "node:assert/strict";

assert.deepStrictEqual(
  solution({
    name: {
      first: "Robert",
      middle: "",
      last: "Smith",
    },
    age: 25,
    DOB: "-",
    hobbies: ["running", "coding", "-"],
    education: {
      highschool: "N/A",
      college: "Yale",
    },
  }),
  {
    name: {
      first: "Robert",
      last: "Smith",
    },
    age: 25,
    hobbies: ["running", "coding"],
    education: {
      college: "Yale",
    },
  }
);
