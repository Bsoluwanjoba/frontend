import Image from "next/image"
import React from "react"
import pic from "../images/loan1.jpg"
import Link from "next/link"

export default function Main() {
  return (
    <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.700), rgba(0, 0, 0, 0.700)), url(/morebooks.jpg)`}} className="h-[81.7vh] bg-cover">
      
      <h2 className="md:text-6xl text-[16px] text-[#d81] md:ml-[90px] ml-[30px] absolute md:top-[190px] top-[280px] font-bold uppercase tracking-widest">{`Welcome To Kreator's Library`}</h2> 
        <Link href='/course' className="md:ml-[590px] ml-[120px] md:relative relative md:top-[280px] top-[280px]  bg-[#d81] p-[15px] rounded-lg outline-dashed outline-offset-2 outline-[#751]">GO TO BOOKS</Link>
            
    </div>
  )
}
