import fs, { read } from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

//! open -> ready -> data print -> end -> close 

// console.log(readStream.read()); // null

// readStream.on("readable", (chunk) => {
//   console.log(readStream.readableLength);
//   console.log(readStream.read(1));
//   console.log(readStream.readableLength);
// });

//? ---------------- Encoding ----------

readStream.setEncoding("utf-8");
// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
readStream.setEncoding("utf-8"); // we can also write after, it will work

//? --------------------- end , closed and error --------------------------

// readStream.on("close", () => {
//   console.log("closed");
// });

// readStream.on("end", () => {
//   console.log("end"); // first end will fire then close event will fired !
// });

// readStream.destroy("something went wrong!"); // if we run this then end event will not fired, only closed event will be fired !

// readStream.on("error", (err) => {
//   console.log({err}) // this will come from destroy !
// })

//! --------------- OR ------------------------

//! or we can simpliy pass error object
// readStream.destroy(new Error("err")); // if we run this then end event will not fired, only closed event will be fired !
// readStream.on("error", (err) => {
  // console.log({ err }); // this will come from destroy !
// });

//? -------------- Ready and open event ----------------

readStream.on("open", () => {
  console.log("opened")
});

readStream.on("data", (chunk) => {
  console.log(chunk);
});
readStream.on("ready", () => {
  console.log("ready")
});


