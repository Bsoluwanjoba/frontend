import Image from "next/image"
import React from "react"
import pic from "../images/loan1.jpg"
import Link from "next/link"

export default function Main() {
  return (
    <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)), url(/morebooks.jpg)`}} className="h-[85.7vh] bg-cover">
      
      <div className="relative text-center">
         
      <p className=" sm:text-2xl md:text-6xl text-[25px] uppercase font-extrabold text-[#d81] tracking-widest text-center p-5 place-content-center absolute sm:top-[350%] sm:left-[15%] md:top-[350%] md:left-[15%] top-[650%] left-[8%] shadow-inner cursor-pointer">Welcome To Kreator's Library</p>
         <button type="button" className="bg-[#d81] p-[9px] rounded-md -outline-offset-4 outline-2 outline-dashed outline-black text-black font-semibold text-[17px] w-[210px] relative sm:top-[300px] sm:bottom-2 sm:left-3 sm:right-5 md:top-[300px] md:bottom-2 md:left-3 md:right-5 top-[420px] bottom-2 left-3 right-5 shadow-[silver] shadow-sm cursor-pointer">
          <Link href="/course">Go To Books</Link>
          </button> 
      </div>
        
    </div>
  )
}
