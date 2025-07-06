#!/usr/bin/env node
// to run this file 
// node app.js ./sujal.txt C:\\Users\\sujal\\OneDrive\\Desktop

import fs from "fs/promises";
import path from "path";

// Get CLI arguments
const filePath = process.argv[2];
const destinationDir = process.argv[3];

// Validate input
if (!filePath || !destinationDir) {
  console.log("❌ Usage: copyfile <sourceFile> <destinationFolder>");
  process.exit(1);
}

// Extract file name and extension
const fileName = path.basename(filePath);
const destinationPath = path.join(destinationDir, fileName);


// console.log(fileName)
// console.log(filePath)
// console.log(destinationDir)
// console.log(destinationPath)

// Copy file
try {
  const data = await fs.readFile(filePath);
  await fs.writeFile(destinationPath, data);
  console.log(`✅ File copied to: ${destinationPath}`);
} catch (err) {
  console.error("❌ Error copying file:", err.message);
}
