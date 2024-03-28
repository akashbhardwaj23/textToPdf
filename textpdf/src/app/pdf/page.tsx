import axios from "axios"

export default async function Pdf(){
    const data = await getPdf();
    return (
        <div className="relative z-10">
            {/* { raw pdf data} */}
           <p>{data}</p>
        </div>
    )
}



async function getPdf() {
    const response = await axios.post("http://localhost:3000/api/v1/text", {text: "Dummy text", heading: "Heading", output: "output1"})
    
    return response.data
}