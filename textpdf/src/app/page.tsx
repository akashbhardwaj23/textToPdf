"use client";
import axios from "axios";
import { useState } from "react";


export default function Home() {
  const [text, setText] = useState("")

  console.log(text)

  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full w-full">
      <h1 className="text-4xl text-white font-bold mb-6">TEXT TO PDF</h1>

     
        <div className="w-1/2 mb-4 border border-gray-200 rounded-lg bg-gray-50 h-full">
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <label htmlFor="comment" className="sr-only">
             Your Text
            </label>
            <textarea
              rows={4}
              className="w-full h-full p-2 text-lg text-gray-900 bg-white border-0"
              placeholder="Write a text..."
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t ">
            <button
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
              onClick={async() => {
                  const response = await axios.post("http://localhost:3000/api/v1/text", {text: text, heading: "Heading", output: "output1"})

                  console.log(response.data)
              }}
            >
              Post Text
            </button>
          </div>
        </div>
   
    </div>
  );
}
