"use client"

import { useRecoilState } from "recoil"
import { pdfState } from "@/utils/recoil/state"
import { useEffect, useState } from "react";

export default function Pdf(){
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdf, setPdf] = useRecoilState(pdfState);
  console.log(pdf)

  if(!pdf){
    return <div>Loading...</div>
  };

  useEffect(() => {
    const mypdfUrl = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    setPdfUrl(mypdfUrl);
  }, [])


    return (
        <div className="relative z-10">
            {/* { raw pdf data} */}
          {pdfUrl && <embed src={pdfUrl} type="application/pdf" />}
        </div>
    )
}
