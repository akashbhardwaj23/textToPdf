"use client"

import { useRecoilState } from "recoil"
import { pdfState } from "@/utils/recoil/state"

export default function Pdf(){
    const text = useRecoilState(pdfState);
    const data = text[0];
    return (
        <div className="relative z-10">
            {/* { raw pdf data} */}
           <p>{ data }</p>
        </div>
    )
}
