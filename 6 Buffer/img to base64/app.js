#!/usr/bin/env node
import fs from "fs/promises";
let imgPath = process.argv[2];
let data = await fs.readFile(imgPath, "base64"); // getting base64 data instead of buffer 
let fullData = `data:image/png;base64,${data}`
fs.writeFile("output.txt", fullData);



//? for base 64 to img :
// let data = await fs.readFile(imgPath, "utf-8"); // getting base64 data instead of buffer 
// fs.writeFile("output.png", data, "base64");


//! fs.writeFile(file, data, [options], callback) is a Node.js method to write data to a file.
//! "output.png" → File name to save as.
//! data → Your data is a Base64-encoded string.
//! "base64" → This tells Node that data is Base64 encoded, so it should decode it before writing the binary content to the file.