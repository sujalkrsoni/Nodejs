import fs from "fs/promises"
import fs1 from "fs"
import fs2 from "fs"


console.log("hii")

setTimeout(()=> {
    console.log("setTimeout !")
},0)


//? ----------------------------------------------------------------------------------------

// async 
let data = await fs.readFile("sujal.txt", "utf-8")
console.log(data, "async")

//! ----------------- Or -------------------------------

// The callback version (fs.readFile) is asynchronous and non-blocking, so it's pushed to the event loop queue, and only runs after all synchronous & awaited code finishes.
fs1.readFile("sujal.txt","utf-8", (err, data) => { // make sure import only "fs" 
    console.log(data, "callback async")
})


//? ----------------------------------------------------

// sync 
let data2 = fs2.readFileSync("sujal.txt", "utf-8")
console.log(data2, "sync")

console.log("End")