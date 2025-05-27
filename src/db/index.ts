// db/index.ts
// import type { JsonData } from "@/types"; // if you have a type file

import { getDictionaryData } from "@/lib/dictionory";

// import data from "./onlytest.json";
const data: JsonData[] = require("../db/onlytest.json");


export const dictionaryData: JsonData[] = data;
// export const dictionaryData: JsonData[] = await  getDictionaryData()
