"use server"

import axios from "axios"

export async function getPdf({
    text,
    heading,
    output
}: {
    text : string | null;
    heading : string;
    output : string
}) {
    try {
        const formData = new FormData();
        formData.append("text", text || "");
        formData.append("heading", heading);
        formData.append("output", output);

        const response = await axios.post("http://localhost:3000/api/v1/text", formData, {  
            responseType: 'blob',
            maxContentLength : Infinity,
            maxBodyLength : Infinity 
        });
        
        return {
            data : response.data,
            error : false
        }
    } catch (error) {
        //@ts-ignore
        console.log(error.message);
        return {
            //@ts-ignore
            data : error.message,
            error : true
        }
    }
}