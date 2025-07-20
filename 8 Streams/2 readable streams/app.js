import fs, { read } from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

//! loading data in output file 4 by 4 bytes
// let readCount = 0;
// readStream.on("data", (chunk) => {
//   readCount++;
//   if (readCount === 1) {
//     fs.writeFileSync("output.txt", chunk);
//   } else {
//     fs.appendFileSync("output.txt", chunk);
//   }
//   let timer = setTimeout(() => {
//     readStream.resume();
//   }, 100);
//   readStream.pause();
// });

//? without count variable
readStream.on("data", (chunk) => {
  if (readStream.readableHighWaterMark === readStream.bytesRead) {
    fs.writeFileSync("output.txt", chunk);
  } else {
    fs.appendFileSync("output.txt", chunk);
  }
  let timer = setTimeout(() => {
    readStream.resume();
  }, 100);
  readStream.pause();
});


//* Note : every time resume event is fired automatically once at first time 

//^ other events 
readStream.on("pause", () =>{
    console.log("stream pause event ")
})

readStream.on("resume", () => {
    console.log("stream resume event ")
})