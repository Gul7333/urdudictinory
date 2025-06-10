import { getDictionaryData } from "@/lib/dictionory";

let data: JsonData[];

if (process.env.DATA_SOURCE === "remote") {
  data = await getDictionaryData(); // fetch from API or remote JSON
} else {
  // Local fallback
  data = require("./onlytest.json") as JsonData[];
}

async function getdb(){
  if (process.env.DATA_SOURCE === "remote") {
    data = await getDictionaryData(); // fetch from API or remote JSON
  } else {
    // Local fallback
    data = require("./onlytest.json") as JsonData[];
  }
  return data
}

export const dictionaryData: JsonData[] = await getdb()


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
