import fs from "fs/promises"

let data = await fs.readFile("./chars.txt", "utf-8")

console.log(data.toString("base64"))