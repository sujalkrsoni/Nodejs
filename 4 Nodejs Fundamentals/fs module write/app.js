import fs from "fs/promises";

fs.writeFile("./sujal.txt", "hello"); // if file is not exists then it create and write, if the file has already content then it replace that content
fs.appendFile("./sujal.txt", "\ni'm sujal "); // it append the content, doen't remove preivous content, it also create file if file doesn't exists


// reading desktop file and creating here new file and adding content 
// let content = await fs.readFile(
//   "C:\\Users\\sujal\\OneDrive\\Desktop\\file-1.txt",
//   "utf-8"
// );

// fs.writeFile("./new.txt", content)


// reading image and creating new file into desktop 
let data = await fs.readFile("./img.png")
fs.writeFile("C:\\Users\\sujal\\OneDrive\\Desktop\\sujal.png", data) 