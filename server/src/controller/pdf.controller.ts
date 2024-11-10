import PDFDocument from 'pdfkit';
import fs from "fs"
import path from "path"



export async function postPdf(req : Express.Request , res: Express.Response){

    const body = req.file
    console.log(body)

}


export async function postText(req: any, res: any){

    const {text, heading, output} = req.body;
    console.log(text, heading, output)

    const doc = new PDFDocument()

    // const result = fs.readFileSync(text, "utf-8")

    doc.pipe(fs.createWriteStream(`./src/file/${output}.pdf`))

    if(heading){
        doc.fontSize(30).text(heading, 100, 50)
    }
    doc.fontSize(15).text(text.replace(/\r\n|\r/g, '\n'), 100, 100)

    doc.end()

    console.log("Document Created Successfully");
    res.setHeader('Content-Type', 'application/pdf');

   return res.status(200).sendFile(path.resolve("./src/file", `${output}.pdf`))
}



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