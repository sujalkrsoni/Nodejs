// import fs from "fs/promises"


//! time :3s        //Note :  not exact round off 
//! Memory 1880mb 
//! CPU : 4%
// let data = await fs.readFile("C:\\Users\\sujal\\OneDrive\\Desktop\\movie2.mp4",)
// console.log(data.toString("base64"))
// console.log(data.byteLength)



//! time :7s         //Note :  not exact round off 
//! Memory 50mb
//! CPU : 12%
import fs, { read } from "fs"
// let data = fs.createReadStream("C:\\Users\\sujal\\OneDrive\\Desktop\\movie2.mp4", {highWaterMark : 8})
// data.on("data",(chunkBuffer) => {
//     fs.appendFileSync("output.mp4", chunkBuffer)
//     readCount++;
// })



// getting count 
// let data = fs.createReadStream("chars.txt", {highWaterMark : 8})
// let readCount = 0 ;
// data.on("data",(chunkBuffer) => {
//     fs.appendFileSync("output.txt", chunkBuffer)
//     readCount++;
// })

// data.on("end", () => {
//     console.log({readCount})
// })



// const fs = require("fs");


const outputPath = "output.txt";

const totalSize = fs.statSync("C:\\Users\\sujal\\OneDrive\\Desktop\\movie2.mp4").size; // get total file size in bytes
let bytesRead = 0;
let readCount = 0;

const data = fs.createReadStream("C:\\Users\\sujal\\OneDrive\\Desktop\\movie2.mp4", { highWaterMark: 8 });

// Clear previous output file (optional)
fs.writeFileSync(outputPath, "");

data.on("data", (chunkBuffer) => {
  fs.appendFileSync(outputPath, chunkBuffer);
  bytesRead += chunkBuffer.length;
  readCount++;

  const percent = ((bytesRead / totalSize) * 100).toFixed(2);
  const barLength = 20; // length of progress bar
  const filledLength = Math.round((percent / 100) * barLength);
  const bar = "█".repeat(filledLength) + "-".repeat(barLength - filledLength);

//   process.stdout.clearLine(0);
//   process.stdout.cursorTo(0);
//   process.stdout.write(`Progress: [${bar}] ${percent}%`);
});

data.on("end", () => {
  console.log("\n\nDone!");
  console.log({ readCount });
});




