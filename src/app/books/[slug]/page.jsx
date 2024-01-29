import { books } from "@/app/course/page"
import Image from "next/image"
import styles from './books.module.css'
import Link from "next/link"

export default function page({params}) {
   const card = books.find(book => book.title.split(' ').join('-') == params.slug)

   const filteredBooks = books.filter(book => book.type == card.type || book.author == card.author)
  return (
    <section className="w-4/5 m-auto"> 
       <section className="text-center py-8">
       <h1 className="md:text-5xl text-2xl font-semibold py-4 border-b-8 border-double border-[#d81]">Title: {card.title}</h1>
        <h2 className="md:text-5xl text-2xl font-medium p-4">Author: {card.author}</h2>
        <p className="p-2 text-xl capitalize">Year Of Publication: {card.year}</p>
        <p className="p-2 text-xl capitalize">Type Of Novel: {card.type}</p>
       </section>
        <figure className={`flex flex-col shadow-xl items-center justify-center ${styles.image} md:w-3/5 w-full m-auto`}>
            <Image src={`https://robohash.org/${card.author}.png`} alt={card.title} width='300' height='200' />
            <figcaption className="md:w-0 w-full">{card.title} by {card.author} published in {card.year}</figcaption>
        </figure>

        <section className="py-6 md:w-0 w-full">
            <h2 className="text-3xl py-3 font-semibold">Summary</h2>
            {card.summary.map((para, index) =>(
                <p key={index}>{para}</p>
            ))}
        </section>

        <section>
            <h2 className="text-3xl py-3 font-semibold capitalize">Related Books</h2>

          <aside className="grid md:grid-cols-4 grid-cols-3 gap-4">
          {filteredBooks.map((buk, index) => (
                <section key={index}>
                    <Link href={`/books/${buk.title.split(' ').join('-')}`}>
                    <Image src={`https://robohash.org/${buk.author}.png`} alt={buk.title} width={100} height={100} />
                    <h3>{buk.title}</h3>
                    </Link>

                </section>
            ))}
          </aside>
        </section>
        </section>
  )
}
