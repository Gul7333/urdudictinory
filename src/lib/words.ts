// lib/words.ts
import { dictionaryData } from "@/db";

export const urduAlphabet = [
  "ا", "آ", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح",
  "خ", "د", "ڈ", "ذ", "ر", "ڑ", "ز", "ژ", "س", "ش",
  "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ",
  "ل", "م", "ن", "و", "ہ", "ھ", "ء", "ی", "ے"
];

// Get words grouped by initial letter
export const getWordsByLetter = (): Record<string, JsonData[]> => {
  const categorized: Record<string, JsonData[]> = {};
  
  urduAlphabet.forEach(letter => {
    categorized[letter] = dictionaryData
      .filter(word => word[1].startsWith(letter)) // Assuming word[1] contains the Urdu word
      .sort((a, b) => a[1].localeCompare(b[1])); // Sort Urdu words alphabetically
  });

  return categorized;
};

export const allWordsByLetter = getWordsByLetter();

// Get all words starting with a specific letter
export const getWordsBySpecificLetter = (letter: string): JsonData[] => {
  return allWordsByLetter[letter] || [];
};

// Count words per letter
export const getLetterCounts = () => {
  return Object.entries(allWordsByLetter).map(([letter, words]) => ({
    letter,
    count: words.length
  }));
};









// // Accept dictionary data as argument
// export const getWordsByLetter = (dictionaryData: JsonData[]): Record<string, JsonData[]> => {
//   const categorized: Record<string, JsonData[]> = {};

//   urduAlphabet.forEach(letter => {
//     categorized[letter] = dictionaryData
//       .filter(word => word[1].startsWith(letter))
//       .sort((a, b) => a[1].localeCompare(b[1]));
//   });

//   return categorized;
// };


