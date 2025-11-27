import path from "path";

 export const filePath = path.join(process.cwd(), "/src/db", "onlytest.json");




 export function urduToRoman(urduText: string): string {
  // Basic character-level mapping
  const map: Record<string, string> = {
    "ا": "a",
    "آ": "aa",
    "ب": "b",
    "پ": "p",
    "ت": "t",
    "ٹ": "t",
    "ث": "s",
    "ج": "j",
    "چ": "ch",
    "ح": "h",
    "خ": "kh",
    "د": "d",
    "ڈ": "d",
    "ذ": "z",
    "ر": "r",
    "ڑ": "r",
    "ز": "z",
    "ژ": "zh",
    "س": "s",
    "ش": "sh",
    "ص": "s",
    "ض": "z",
    "ط": "t",
    "ظ": "z",
    "ع": "a",
    "غ": "gh",
    "ف": "f",
    "ق": "q",
    "ک": "k",
    "گ": "g",
    "ل": "l",
    "م": "m",
    "ن": "n",
    "ں": "n",
    "و": "w",
    "ہ": "h",
    "ھ": "h",
    "ء": "",
    "ی": "y",
    "ے": "e",
    "ۂ": "h"
  };

  let result = "";

  for (const char of urduText) {
    result += map[char] ?? char; // Use mapping or keep the original
  }

  return result;
}
