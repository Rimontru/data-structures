const solution_1 = (string) => {
  const splited = string.split(",");
  let objects = [];
  let couple = {};
  let key_stored = "";
  let greater = 0;

  splited.forEach((itm) => {
    const trimed = itm.trim();
    if (trimed.startsWith("key=")) {
      const key_value = trimed.substr(4);
      key_stored = key_value;
      couple[key_value] = {};
      couple[key_value]["key"] = key_value;
    } else if (trimed.startsWith("age=")) {
      const age_value = trimed.substr(4);
      couple[key_stored]["age"] = Number(age_value) || "NaN";
    }

    if (couple[key_stored]["age"] !== undefined) {
      if (couple[key_stored]["age"] === "NaN") {
        couple[key_stored]["age"] = 0;
      }

      if (couple[key_stored]["age"] >= 50) {
        greater++;
      }

      Object.assign(couple[key_stored], { age: couple[key_stored]["age"] });
      objects.push(couple[key_stored]);
    }
  });

  console.log(objects);

  return greater;
};

const solution = (string) => {
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

const getData = async () => {
  const url = "https://coderbyte.com/api/challenges/json/age-counting";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
  }
};

(async () => {
  const data = await getData();
  console.log(solution(data));
})();
