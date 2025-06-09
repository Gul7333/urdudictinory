import { getDictionaryData } from "@/lib/dictionory";

let data: JsonData[];

if (process.env.DATA_SOURCE === "remote") {
  data = await getDictionaryData(); // fetch from API or remote JSON
} else {
  // Local fallback
  data = require("./onlytest.json") as JsonData[];
}

export const dictionaryData: JsonData[] = data;


// import { getDictionaryData } from "@/lib/dictionory";

// let data: JsonData[];

// if (process.env.DATA_SOURCE === "remote") {
//   data = await getDictionaryData(); // fetch from API or remote JSON
  
// } else {
//   // Local fallback using dynamic import for JSON
//   const localData = await import("./onlytest.json", {
//     assert: { type: "json" },
//   });
//   data = localData.default;
// }

// export const dictionaryData: JsonData[] = data;
