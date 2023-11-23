
const books = [
  {
    id: '001',
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    id: '002',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
  },
  {
    id: '003',
    title: 'Zero to One',
    author: 'Peter Thale'
  },
  {
    id: '004',
    title: 'Purple Hibiscus',
    author: 'Chimamanda Adichie'
  },
  {
    id: '005',
    title: 'Faceless',
    author: 'Naomi Adigwe'
  },
  {
    id: '006',
    title: 'All Men in Lagos are Mad',
    author: 'Johnson Damilare'
  }
]

const bookCard = books.map(book =>(
  <section key={book.id} className="p-10 shadow-2xl rounded-2xl">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))

export default function Course() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {bookCard}
    </div>
  )
}
