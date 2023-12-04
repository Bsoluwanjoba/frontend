import Link from "next/link"

export default function Courses() {
  return (
    <nav>
        <ul className='flex justify-around h-10 bg-blue-700 text-white text-1xl '>
         <Link href='/course'>
         <li>All</li>
         </Link>

         <Link href='/course/drama'>
         <li>Drama</li>
         </Link>

         <Link href='/course/prose'>
         <li>Prose</li>
         </Link>

         <Link href='/course/novel'>
         <li>Novel</li>
         </Link>
        </ul>
        
    </nav>
  )
}
