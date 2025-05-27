// generateWords.js
const fs = require("fs");
const path = require("path");

// Read words from file and convert to array

  



// Adjust these paths as needed
const inputPath = path.join(process.cwd(), "src", "db", "onlytest.json");
const outputPath = path.join(__dirname, "public", "words.json");

// Read and parse JSON, then extract item[1] from each entry
function listofword() {
  const rawData = fs.readFileSync(inputPath, "utf-8");
  const data = JSON.parse(rawData);
  return data
    .filter((item) => item && item[1])
    .map((item) => item[1]);
}

// Ensure `public` folder exists
const publicDir = path.dirname(outputPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Generate words.json
const words = listofword();
fs.writeFileSync(outputPath, JSON.stringify(words, null, 2));

console.log("✅ words.json generated at public/words.json");
