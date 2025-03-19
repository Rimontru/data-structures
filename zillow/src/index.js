// Source: HackerRank
// https://www.hackerrank.com/contests/zillow-engineering-coding-challenge/challenges/property-match

import fs from "node:fs";
import { log } from "node:console";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// "/<propertyCity>,<propertyState>/<min_sft>_<max_sft>" min_sft <= propertySft <= max_sft

function matchSavedSearch(
  propertyId,
  propertyCity,
  propertyState,
  propertySft,
  propertyPrice,
  propertyType,
  savedSearches
) {
  const result = [];
  const propertySftNum = parseInt(propertySft, 10);

  for (const search of savedSearches) {
    const [cityState, sftRange] = search.trim().split("/").slice(-2);
    const [city, state] = cityState.split(",");
    const sftParts = sftRange.split("_");

    if (city === propertyCity && state === propertyState) {
      if (sftParts.length === 3) {
        const [minSft, maxSft] = sftParts.map(Number);
        if (minSft <= propertySftNum && propertySftNum <= maxSft) {
          result.push(search);
        }
      } else if (sftParts.length === 2) {
        const minSft = parseInt(sftParts[0], 10);
        if (minSft <= propertySftNum) {
          result.push(search);
        }
      }
    }
  }

  return result;
}

for (let i = 1; i < 4; i++) {
  const filePath = path.join(__dirname, `input00${i}.txt`);
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const [
      propertyId,
      propertyCity,
      propertyState,
      propertySft,
      propertyPrice,
      propertyType,
      savedSearchCount,
      ...savedSearches
    ] = data.split("\n");

    log(
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
  } catch (error) {
    console.error(`Error reading file input00${i}.txt:`, error.message);
  }
}

