// Transferring Array buffer data from memory to disk and network. 

import fs from "fs/promises"

const uint8Array = new Uint8Array(8);
// const a = unit8Array.buffer

uint8Array[0] = 0x50;
uint8Array[1] = 0x72;
uint8Array[2] = 0x6f;
uint8Array[3] = 0x43;
uint8Array[4] = 0x6f;
uint8Array[5] = 0x64;
uint8Array[6] = 0x72;
uint8Array[7] = 0x72;

const decoder = new TextDecoder('utf-8')
console.log(decoder.decode(uint8Array)) // ProCodrr

fs.writeFile("bufferText.txt", uint8Array) // creating new txt file and sending this unit8Array data 

