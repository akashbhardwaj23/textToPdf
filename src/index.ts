import PDFDocument from 'pdfkit';

import fs from "fs"

const doc = new PDFDocument()

const result = fs.readFileSync("./input.txt", "utf-8")

doc.pipe(fs.createWriteStream("./socketIO.pdf"))

doc.fontSize(30).text("Socket IO CheatSheet", 100, 50).link(100, 100, 160, 27,"https://socket.io/docs/v3/emit-cheatsheet/")
doc.fontSize(15).text(result.replace(/\r\n|\r/g, '\n'), 100, 100)

console.log(result)

doc.end()

console.log("Document Created Successfully")





// Another way to do the same using streams
// const stream = fs.createReadStream("./input.txt", "utf-8")

// stream.on("data", (chunks : string) => {
//     console.log(typeof chunks)
//     doc.fontSize(25).text(chunks, 100, 100)
//     console.log("i am Here")
// })


// doc
//   .fontSize(25)
//   .text('Some text with an embedded font!', 100, 100);

// stream.on("end", () => {
//     doc.end();
// })