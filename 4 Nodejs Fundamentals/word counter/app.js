import fs from "node:fs/promises";

let filePath = process.argv[2];
let singleWord = process.argv[3];

let data = await fs.readFile(filePath, "utf-8");
// let data = "this is sujal my name is sujal "
let word = data.split(/[\W]/).filter((e) => e).map((e) => e.toLowerCase());

let obj1 = {};
function countWord(arr) {
  for (let word of arr) {
    obj1[word] = (obj1[word] || 0) + 1;
  }

  if (singleWord) {
    if (obj1[singleWord]) {
      return `${singleWord} : ${obj1[singleWord]}`;
    } else {
      return "This word is not avaible in this file ";
    }
  } else {
    return obj1;
  }
}

console.log(countWord(word));
