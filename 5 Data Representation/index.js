import fs from "fs/promises"

const contentBuffer = await fs.readFile("./sujal.txt")

console.dir(contentBuffer) // decimal valuesBuffer(3) [Uint8Array] [ 224, 164, 149 ]
console.log(contentBuffer) // hex values <Buffer e0 a4 95>

// 224 => 1110 0000 => e0
// 164 => 1010 0100 => a4
// 149 => 1001 0101 => 95

//   224      164      149 
//  0000   10 0100  01 0101 
//  0000100100010101 content in file  “क”
// => 915 in hex, search value of it in utf char list, Unicode Character “क” (U+0915)




// 11100000 10100100 10010101 // from top 
// 11100000 10100100 10010101 // from running text file : xxd -b sujal.txt 




function bufferToString(buffer){
    let str = "";
    str += buffer.map((e) => e)
    return str;
}

console.log(bufferToString(contentBuffer))