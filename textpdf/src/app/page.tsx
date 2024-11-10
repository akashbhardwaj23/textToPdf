"use client";

import { useRouter } from "next/navigation";
import { getPdf } from "./server/action";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { pdfState } from "@/utils/recoil/state";

export default function Home() {
  const [text, setText] = useState("");
  const [pdf, setPdf] = useRecoilState(pdfState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getThePdf = async () => {
    // const response = await axios.post("http://localhost:3000/api/v1/text", {text: text, heading: "Heading", output: "output1"})
    // console.log(response.data);
    setLoading(true);
    const respose = await getPdf({
      text,
      heading: "Your Pdf",
      output: "output1",
    });

    if (respose.error) {
      setError(respose.data);
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 9000);
      return;
    }
    setPdf(respose.data);
    setLoading(false);
    router.push("/pdf");
  };

  


  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full w-full relative antialiased">
      <h1 className="text-4xl relative z-10 text-white font-bold mb-6">
        TEXT TO PDF
      </h1>

      <div className="w-1/2 relative z-10 mb-4 border border-gray-200 rounded-lg bg-gray-50 h-full">
        <div className="px-4 py-2 bg-white rounded-t-lg ">
          <label htmlFor="comment" className="sr-only">
            Your Text
          </label>
          <textarea
            rows={4}
            className="w-full h-full p-2 text-lg text-gray-900 bg-white border-0"
            placeholder="Write a text..."
            onChange={
              //@ts-ignore
              (e) => setText(e.target.value)
            }
            required
          />
        </div>
      {error && <div className="text-red-600 text-lg font-bold font-mono p-2">
           Error - {error}
        </div>}
        <div className="flex items-center justify-between px-3 py-2 border-t ">
          <button
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
            disabled={loading}
            onClick={getThePdf}
          >
           {
            loading ? <div className="py-2.5 px-4">Loading</div> :  <span>Post Text</span>
           }
          </button>
        </div>
      </div>
    </div>
  );
}
