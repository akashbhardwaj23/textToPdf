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
    const response = await axios.post("http://localhost:3000/api/v1/text", {text, heading , output})
    return response.data
}