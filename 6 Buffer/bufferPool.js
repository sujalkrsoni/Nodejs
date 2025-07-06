import { Buffer } from "buffer";


const a = Buffer.alloc(4);
const b = Buffer.allocUnsafe(4);

// this is nodejs buffer and both length will be same 
console.log(a.byteLength) // 4 bytes
console.log(b.byteLength) // 4 bytes 

// This is array buffer lenght , and it may be different 
console.log(a.buffer.byteLength) // 4
console.log(b.buffer.byteLength) // 8192Kb (8 bytes )

