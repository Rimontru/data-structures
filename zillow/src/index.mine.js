const { log } = require("node:console");
const fs = require("node:fs");

/*
  [
    "/<propertyCity>,<propertyState>/<min_sft>_<max_sft>" min_sft <= propertySft <= max_sft
    "/SanFrancisco,CA/1230_2500_sft/20000_30000_price"
    "/SanFrancisco,CA/1400_1550_sft"
    "/SanFrancisco,CA/1550_sft"
    "/Austin,TX/2000_2500_sft"
  ]
  
  // input001.txt
  propertyId:    123
  propertyCity:  SanFrancisco
  propertyState: CA
  propertySft:   1450
  propertyPrice: 800000
  propertyType:  Condo
*/

function matchSavedSearch(
  propertyId,
  propertyCity,
  propertyState,
  propertySft,
  propertyPrice,
  propertyType,
  savedSearches
) {
  let result = [];
  for (const search of savedSearches) {
    const splited_search = search.trim().split("/");
    const propertySft_input = splited_search[splited_search.length - 1];
    const propertySft_splited = propertySft_input.split("_");
    if (propertySft_splited.length === 3) {
      if (
        propertySft_splited[0] <= propertySft &&
        propertySft_splited[1] <= propertySft
      ) {
        result.push(search);
      }
    } else if (propertySft_splited.length === 2) {
      if (propertySft_splited[0] <= propertySft) {
        result.push(search);
      }
    }
  }

  return result;
}

for (var i = 1; i < 4; i++) {
  const data = fs.readFileSync(`input00${i}.txt`, "utf8");
  let [
    propertyId,
    propertyCity,
    propertyState,
    propertySft,
    propertyPrice,
    propertyType,
    savedSearchCount,
    ...savedSearches
  ] = data.split("\n");
  console.log(
    matchSavedSearch(
      propertyId,
      propertyCity,
      propertyState,
      propertySft,
      propertyPrice,
      propertyType,
      savedSearches
    )
  );
}

