import { books } from "../page";
import Link from "next/link";


const novelBooks = books.filter(book => book.type == 'novel')

const bookCard = novelBooks.map(book => (
    <section key={book.id} className="p-[4rem] mx-3 rounded-md transition ease-linear duration-[0.6s] hover:scale-[0.85] shadow-2xl">
    <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
     <h2>{book.title}</h2>
     <p>{book.author}</p>
    </Link>
    </section>
))

export default function Novel() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {bookCard}
        </div>
    )
}