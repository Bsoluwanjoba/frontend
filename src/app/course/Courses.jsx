import Link from "next/link"

export default function Courses() {
  return (
    <nav>
        <ul className='flex justify-center h-10 bg-[#d81] text-black text-[17px] items-center gap-6 font-medium '>
         <Link href='/course' className="hover:bg-[#751] bg-opacity-30 rounded-xl px-5 py-1 duration-700 ease-in-out">
         <li>All</li>
         </Link>

         <Link href='/course/drama' className="hover:bg-[#751] bg-opacity-30 rounded-xl px-5 py-1 duration-700 ease-in-out" >
         <li>Drama</li>
         </Link>

         <Link href='/course/prose' className="hover:bg-[#751] bg-opacity-30 rounded-xl px-5 py-1 duration-700 ease-in-out">
         <li>Prose</li>
         </Link>

         <Link href='/course/novel' className="hover:bg-[#751] bg-opacity-30 rounded-xl px-5 py-1 duration-700 ease-in-out">
         <li>Novel</li>
         </Link>
        </ul>
        
    </nav>
  )
}
