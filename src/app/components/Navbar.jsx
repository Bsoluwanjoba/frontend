"use client"
import Link from "next/link"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineCancel } from "react-icons/md"
import React, {useState} from 'react'



export default function Navbar() {
  const [showNav, setShowNav] = useState(false)


  function onClick(){
    setShowNav(!showNav)
  }

  return (
    <nav className="flex bg-black">
      <div className="flex gap-5 md:mr-[420px] mr-0 items-center">
        <Image src='/android-chrome-512x512.png' width={50} height={30}/>
        <h1 className="text-xl text-[#d81] font-extrabold uppercase tracking-widest">Kreator's Blog</h1>
      </div>
      <RxHamburgerMenu  className={`${showNav ? 'hidden' : 'block md:hidden'} cursor-pointer text-[#d81] text-[30px] md:ml-0 ml-auto`} onClick={onClick} />
    <MdOutlineCancel className={`${showNav ? 'block md:hidden' : 'hidden'} cursor-pointer text-[#d81] text-[30px] md:ml-0 m-auto`} onClick={onClick} />
          <ul className={`md:flex md:flex-row ${showNav ? 'flex' : 'hidden'} flex-col justify-center text-white md:h-[60px] h-[60vh] items-center gap-10`}>

        
          <Link href="/" className=" text-white ease-in p-[6px] duration-500 rounded-md hover:bg-[#d81]">
            <li>Home</li>
            </Link>

          <Link href="/contact" className="hover:bg-[#d81] text-white ease-in p-[6px] duration-300 rounded-md">
            <li>Contact</li>
            </Link>

            <Link href="/course" className="hover:bg-[#d81] text-white ease-in p-[6px] duration-300 rounded-md">
            <li className="text-white">Course</li>
            </Link>
           
        </ul>
    </nav>
  )
}
