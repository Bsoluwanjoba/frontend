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
       <h1 className="text-5xl font-semibold py-4 border-b-8 border-double border-[gold]">Title: {card.title}</h1>
        <h2 className="text-5xl font-medium p-4">Author: {card.author}</h2>
        <p className="p-2 text-xl capitalize">Year Of Publication: {card.year}</p>
        <p className="p-2 text-xl capitalize">Type Of Novel: {card.type}</p>
       </section>
        <figure className={`flex flex-col shadow-xl items-center justify-center ${styles.image} w-3/5 m-auto`}>
            <Image src='/media/download.jpg' alt={card.title} width='300' height='200' />
            <figcaption>{card.title} by {card.author} published in {card.year}</figcaption>
        </figure>

        <section className="py-6">
            <h2 className="text-3xl py-3 font-semibold">Summary</h2>
            {card.summary.map((para, index) =>(
                <p key={index}>{para}</p>
            ))}
        </section>

        <section>
            <h2 className="text-3xl py-3 font-semibold capitalize">Related Books</h2>

          <aside className="grid grid-cols-4 gap-4">
          {filteredBooks.map((buk, index) => (
                <section key={index}>
                    <Link href={`/books/${buk.title.split(' ').join('-')}`}>
                    <Image src='/media/download.jpg' alt={buk.title} width={100} height={100} />
                    <h3>{buk.title}</h3>
                    </Link>

                </section>
            ))}
          </aside>
        </section>
        </section>
  )
}
