import express from "express"
import {postPdf, postText} from "../controller/pdf.controller"
import { upload } from "../middleware/multer.middleware";

const router = express.Router()

//@ts-ignore
router.route("/pdf").post(upload.single('pdf'), postPdf);

router.route("/text").post(postText)




export default router





// should use mongodb



