"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Acme } from 'next/font/google'
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineCancel } from "react-icons/md"


const kreat = Acme({ subsets: ['latin'] , weight: ['400'] })


export default function Navbar() {
  const [showNav, setShowNav] = useState(false)


  function navbar(){
    setShowNav(!showNav)
  }


  return (
    <div>
     <nav className='flex gap-11 bg-black h-[9vh] relative'>
      <div className='flex md:ml-[150px] ml-auto items-center gap-1'>
      <Image src="/android-chrome-512x512.png" width={30} height={30} alt='logo' />
      <p className='text-[#d81] w-full'>Kreator Library</p>
      </div>

      <div className='md:ml-[700px] ml-0'>
        <ul className={`bg-[#d81] md:bg-transparent  md:text-white md:font-normal font-bold md:gap-3 gap-20   md:relative md:flex md:flex-row flex flex-col fixed h-[81.6vh] md:h-[100%] w-[50%] md:top-0 top-[82px] bottom-0 left-0 items-center md:justify-center justify-center transition-transform transform ease-in-out duration-500 py-4 ${showNav ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          
        <li><MdOutlineCancel className='cursor-pointer md:hidden text-3xl text-white' onClick={navbar}/></li>
            
       
          <Link href='/' className='md:hover:bg-[#d81] md:duration-500 md:ease-in-out md:rounded-lg md:p-1  hover:bg-[#751] duration-500 ease-in-out rounded-lg p-1'>
            <li>Home</li>
          </Link>
          <Link href='/contact' className='md:hover:bg-[#d81] md:duration-500 md:ease-in-out md:rounded-lg md:p-1  hover:bg-[#751] duration-500 ease-in-out rounded-lg p-1'>
            <li>Team</li>
          </Link>
          <Link href='/course' className='md:hover:bg-[#d81] md:duration-500 md:ease-in-out md:rounded-lg md:p-1  hover:bg-[#751] duration-500 ease-in-out rounded-lg p-1'>
            <li>Books</li>
          </Link>
        </ul>
        <RxHamburgerMenu onClick={navbar} className='text-4xl md:hidden cursor-pointer text-[#d81] mt-[26px] ml-[190px]' />


      </div>
     </nav>
    </div>
  )
}
