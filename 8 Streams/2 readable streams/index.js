import fs, { read } from "fs"

const readStream = fs.createReadStream("chars.txt")
console.log(readStream.readableFlowing) // false, if it is null then it is in initial state 
console.log(readStream.readableEnded)   // false, if readable stream read completly then return true otherwise false 
console.log(readStream.isPaused())      // false, if our stream is fause then return true otherwise false, make sure first start reading
readStream.pause();
console.log(readStream.isPaused())      //  true, because first we start then pause then checking 


readStream.resume()  // make sure resume then operation otherwise next log will not work 

readStream.on("data", (chunks) => {
})  

console.log(readStream.readableFlowing) // true,  because we start reading 
console.log(readStream.readableEnded)   // false, because still didn't ended 


readStream.on("end", (chunks) => {
    console.log(readStream.readableFlowing)
    console.log(readStream.readableEnded )
    console.log(readStream.isPaused()) // it will return false, because at the end it will end not pause, like in video at end we can't pause , that will automatically end 
})

