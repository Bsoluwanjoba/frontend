import Image from "next/image"
import React from "react"
import pic from "../images/loan1.jpg"

export default function Main() {
  return (
    <div>
        <h1 className="text-5xl text-center p-5">Kreators Library</h1>
        <section className="grid grid-cols-2">
        <Image src='/media/book.jpg' alt='books' width={600} height={500}/>
        <Image src='/media/morebooks.jpg' alt='books' width={600} height={500}/>
        <Image src='https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fHww' alt='books' width={600} height={500}/>
        <Image src={pic} alt='books' width={600} height={500}/> 
        </section>
        
    </div>
  )
}
