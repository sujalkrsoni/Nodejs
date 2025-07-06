const fs = require('fs');
const text = fs.readFileSync("C:\\Users\\sujal\\OneDrive\\Desktop\\MERN\\MERN2.0\\NODE-JS ( MASTER )\\Class1\\script.js")
console.log(text.toString());

fs.renameSync('text.txt', 'change.txt')

// console.log("end");

// var a = 10;
// console.log(a);

// global.b = 20 
// console.log(b)

// const c = 30;
// console.log(c)  
