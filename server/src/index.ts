import express from "express"
import pdfRoutes from "./routes/pdf.route"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser  from "cookie-parser"

const app = express()


dotenv.config()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static("public"))


app.use("/api/v1", pdfRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})







