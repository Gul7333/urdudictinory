// // lib/dictionary.ts
// import { filePath } from "@/constants/constant";
// import fs from "node:fs";

import { fetchJsonFromR2 } from "./r2";

// let cachedData: JsonData[] | null = null;

// export function getDictionaryData(): JsonData[] {
//   if (cachedData) return cachedData;

//   const rawData = fs.readFileSync(filePath, "utf-8");
//   cachedData = JSON.parse(rawData);
//   return cachedData!;
// }

// export function findWordBySlug(slug: string): JsonData | undefined {
//   const rawData = fs.readFileSync(filePath, "utf-8");
//   const data: JsonData[] = JSON.parse(rawData);
//   return data.find((item) => item[1] === slug);
// }

// export function listofword(): string[] {
//   const rawData = fs.readFileSync(filePath, "utf-8");
//   const data: JsonData[] = JSON.parse(rawData);

//   const list = data.filter((item) => item && item[1]).map((item) => item[1]);
//   return list;
// }


// lib/dictionary.ts
// const R2_JSON_URL = "https://6f4b4eb55199f274d0b3b6d454bf5445.r2.cloudflarestorage.com/urdudictionary/onlytest.json";
const R2_JSON_URL = "https://pub-23d10a772bc34d1e82c3b5f74cbbb322.r2.dev/onlytest.json"

// Cache variable to avoid multiple fetches
let cachedData: JsonData[] | null = null;

export async function getDictionaryData(): Promise<JsonData[]> {
  if (cachedData) return cachedData;

  const response = await fetchJsonFromR2()
  // if (!response.ok) throw new Error("Failed to fetch dictionary data");

  // const data: JsonData[] = await response.json();
  cachedData = response;
  return cachedData!
}

export async function findWordBySlug(slug: string): Promise<JsonData | undefined> {
  const data = await getDictionaryData();
  return data.find((item) => item && item[1] === slug);
}

export async function listofword(): Promise<string[]> {
  const data = await getDictionaryData();
  return data.filter((item) => item && item[1]).map((item) => item[1]);
}
