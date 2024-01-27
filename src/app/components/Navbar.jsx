"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Courgette } from 'next/font/google'
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineCancel } from "react-icons/md"


const kreat = Courgette({ subsets: ['latin'] , weight: ['400'] })


export default function Navbar() {
  const [showNav, setShowNav] = useState(false)


  function onClick(){
    setShowNav(!showNav)
  }


  return (
    <div>
      <nav className='flex md:flex-row flex-col bg-black md:py-[20px] py-[16px] md:h-0 h-[65px]'>

        <div className='flex gap-2 md:ml-[70px] ml-[50px] items-center'>
         <Image src="/android-chrome-512x512.png" alt='logo' width={30} height={30}/>
         <h1 className={`${kreat.className} text-[#d81]`}>{`Kreator's Library`}</h1> 
        </div>

        <div className={`${showNav ? 'hidden' : 'flex md:hidden'} items-center`}>
        <RxHamburgerMenu
          className={`block ml-[330px] mt-[-33px] cursor-pointer text-[30px] text-[#d81]`}
          onClick={onClick}
        />
      </div>

      <div className={`${showNav ? 'block md:hidden' : 'hidden'} items-center`}>
        <MdOutlineCancel
          className="ml-[330px] items-center mt-[-33px] cursor-pointer text-[30px] text-[#d81]"
          onClick={onClick}
        />
      </div>

        <div className='text-white md:ml-[460px] ml-0 items-center'>
          <ul className={`flex md:flex-row ${showNav ? 'flex' : 'hidden'} flex-col justify-center md:gap-6 gap-10 items-center bg-black`}>
           <Link href='/' className='py-1 hover:bg-[#d81] rounded-md px-1 translate-x-2 ease-in-out duration-700'>
            <li>Home</li>
           </Link>
           <Link href='/contact' className='py-1 hover:bg-[#d81] rounded-md px-1 translate-x-2 ease-in-out duration-700'>
            <li>Team</li>
           </Link>
           <Link href='/course' className='py-1 hover:bg-[#d81] rounded-md px-1 translate-x-2 ease-in-out duration-700'>
            <li>Books</li>
           </Link>
          </ul>
        </div>

      </nav>
    </div>
  )
}
