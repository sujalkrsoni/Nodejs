// // import fs from "node:fs"


// // with readfilesync 
// let bufferContent = fs.readFileSync("./index.html")
// console.log(bufferContent) 
// console.log(bufferContent.toString())

// // with readfilesync with a parameter 
// console.log("\n\n\n")
// let Content = fs.readFileSync("./index.html","utf-8")
// console.log(Content)

// // with readfile 
// fs.readFile("./index.html", (err, data) => {
//     const content = data.toString();
//     console.log(content)
// })


//? --------------------------------------------------------------------------------------------


import fs from "node:fs/promises"

// this is aschrounous code, this is better way to read file aschrounously 

let i= 0;
let timer = setInterval(() => {
    console.log(++i)
    if(i === 20){
        clearInterval(timer)
    }
}, 30);
let data =  await fs.readFile("./sujal.txt","utf-8");
console.log("data reading ")
console.log("end")