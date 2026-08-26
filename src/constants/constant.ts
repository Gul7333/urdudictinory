// import path from "path";

//  export const filePath = path.join(process.cwd(), "/src/db", "onlytest.json");




//  export function urduToRoman(urduText: string): string {
//   // Basic character-level mapping
//   const map: Record<string, string> = {
//     "ا": "a",
//     "آ": "aa",
//     "ب": "b",
//     "پ": "p",
//     "ت": "t",
//     "ٹ": "t",
//     "ث": "s",
//     "ج": "j",
//     "چ": "ch",
//     "ح": "h",
//     "خ": "kh",
//     "د": "d",
//     "ڈ": "d",
//     "ذ": "z",
//     "ر": "r",
//     "ڑ": "r",
//     "ز": "z",
//     "ژ": "zh",
//     "س": "s",
//     "ش": "sh",
//     "ص": "s",
//     "ض": "z",
//     "ط": "t",
//     "ظ": "z",
//     "ع": "a",
//     "غ": "gh",
//     "ف": "f",
//     "ق": "q",
//     "ک": "k",
//     "گ": "g",
//     "ل": "l",
//     "م": "m",
//     "ن": "n",
//     "ں": "n",
//     "و": "w",
//     "ہ": "h",
//     "ھ": "h",
//     "ء": "",
//     "ی": "y",
//     "ے": "e",
//     "ۂ": "h"
//   };

//   let result = words_romanize.json.find

//   return result;
// }
import fs from "fs";
import path from "path";

export const filePath = path.join(process.cwd(), "src/db", "onlytest.json");

export function urduToRoman(urduText: string): string {
  const words_romanize = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
  );

  const result = words_romanize.find(
    (item: { urdu: string; roman: string }) =>
      item.urdu === urduText
  );

  return result?.roman ?? urduText;
}