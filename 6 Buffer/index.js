// Notes: ArrayBuffer & DataView Example

// Create a 4-byte buffer
const a = new ArrayBuffer(4);

// Create a DataView to manipulate the buffer\const view = new DataView(a);

// Set 8-bit integers at different indices
view.setInt8(0, 80);            // Decimal
view.setInt8(1, 0b1010000);     // Binary (also 80)
view.setInt8(2, 0x50);          // Hexadecimal (also 80)
view.setInt8(3, 0o120);         // Octal (also 80)

console.log(a);                 // Logs the raw buffer
console.log(view.getInt8(1));   // Get value from index 1
console.log(view.getInt8(2));   // Get value from index 2

/*
Writing Multi Byte Data

- setInt8() can store only 8-bit (1-byte) integers (range: -128 to 127)
- setInt16() can store 16-bit (2-byte) integers
- Multi-byte methods (setInt16, setInt32, etc.) accept a 3rd argument: Endian format
    - Little Endian (LE) is default
    - To use Big Endian (BE), pass `true` as the third argument

Example:
view.setInt16(0, 4000);             // Little Endian by default
view.setInt16(0, 4000, true);       // Big Endian

- Use getInt16(index, endian?) to retrieve the values similarly

We also have methods for 32-bit:
- setInt32(), getInt32()
- setFloat32(), getFloat32(), etc.
*/
