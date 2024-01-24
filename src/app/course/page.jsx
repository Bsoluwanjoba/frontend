
import Link from "next/link"


export const books = [
  {
    id: '001',
    title: 'Atomic Habits',
    author: 'James Clear',
    type: 'prose',
    year: 2018,
    summary: [
      'Atomic Habits by James Clear is a transformative guide that explores the power of tiny habits in creating remarkable results.',
      'Clear delves into the science of habits, breaking down how they work and providing practical strategies for building positive habits and breaking destructive ones.',
      'Drawing on scientific research and real-life examples, the book offers actionable insights for personal and professional development.'
    ]
  },
  {
    id: '002',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    type: 'novel',
    year: 1958,
    summary: [
      'Things Fall Apart by Chinua Achebe is a classic novel that tells the story of Okonkwo, a proud Igbo warrior, and the impact of British colonialism on his community.',
      'Achebe masterfully weaves a narrative that explores the clash of cultures and the devastating consequences of imperialism.',
      'Through vivid characters and rich storytelling, the novel provides a poignant reflection on the complexities of identity, tradition, and change.'
    ]
  },
  {
    id: '003',
    title: 'The Beautiful Ones Are Not Yet Born',
    author: 'Aye Kwe Amah',
    type: 'novel',
    year: 1968,
    summary: [
      'The Beautiful Ones Are Not Yet Born by Aye Kwe Amah is a thought-provoking novel set against the backdrop of postcolonial Ghana.',
      'The story follows an unnamed protagonist navigating a corrupt society, wrestling with moral dilemmas, and seeking personal integrity in the face of societal decay.',
      'Amah\'s narrative skillfully captures the struggles and hopes of individuals in a changing world.'
    ]
  },
  {
    id: '004',
    title: 'Zero to One',
    author: 'Peter Thale',
    type: 'prose',
    year: 2014,
    summary: [
      'Zero to One by Peter Thiel is a groundbreaking book that challenges conventional thinking about innovation and entrepreneurship.',
      'Thiel, a co-founder of PayPal and an early investor in tech giants like Facebook, shares his insights on building the future by creating something entirely new.',
      'The book encourages entrepreneurs to focus on creating monopolies rather than competing in crowded markets, emphasizing the importance of unique and innovative ideas.'
    ]
  },
  {
    id: '005',
    title: 'The Bottled Leopard',
    author: 'Chukwuemeka Ike',
    type: 'novel',
    year: 1985,
    summary: [
      'The Bottled Leopard by Chukwuemeka Ike is a captivating novel set in postcolonial Nigeria, exploring themes of tradition, modernity, and the clash between rural and urban life.',
      'The story follows the adventures of a young boy, Moke, as he encounters a mysterious leopard and navigates the challenges of a changing society.',
      'Ike\'s storytelling blends folklore and social commentary, providing a glimpse into the complexities of Nigerian culture.'
    ]
  },
  {
    id: '006',
    title: 'Purple Hibiscus',
    author: 'Chimanmanda Adichie',
    type: 'novel',
    year: 2003,
    summary: [
      'Purple Hibiscus by Chimamanda Adichie is a compelling novel that follows the coming-of-age journey of Kambili, a teenage girl in postcolonial Nigeria.',
      'The story explores themes of family, religion, and political turmoil as Kambili discovers her voice and identity in the midst of a strict and abusive household.',
      'Adichie\'s prose is both lyrical and powerful, offering a nuanced portrayal of a nation in transition.'
    ]
  },
  {
    id: '007',
    title: 'The Lion and the Jewel',
    author: 'Wole Soyinka',
    type: 'drama',
    year: 1962,
    summary: [
      'The Lion and the Jewel by Wole Soyinka is a classic play that explores the clash between tradition and modernity in a Nigerian village.',
      'The story revolves around the romantic entanglements of Sidi, a beautiful village girl, and the rivalry between two suitors: the modern schoolteacher Lakunle and the traditional Bale Baroka.',
      'Soyinka\'s play is rich in cultural symbolism and offers a humorous yet thought-provoking commentary on the challenges of societal progress.'
    ]
  },
  {
    id: '008',
    title: 'No Longer at Ease',
    author: 'Chinua Achebe',
    type: 'novel',
    year: 1960,
    summary: [
      'No Longer at Ease by Chinua Achebe is a novel that follows the life of Obi Okonkwo, a young Nigerian man educated in England and working for the colonial government.',
      'As Obi navigates the complexities of postcolonial Nigeria, he grapples with moral dilemmas, corruption, and the clash between tradition and modernity.',
      'Achebe\'s narrative offers a powerful exploration of the challenges faced by individuals caught between cultural expectations and the realities of a changing world.'
    ]
  },
  {
    id: '009',
    title: 'The Gods Are Not to Blame',
    author: 'Ola Rotimi',
    type: 'drama',
    year: 1971,
    summary: [
      'The Gods Are Not to Blame by Ola Rotimi is a tragic play that reinterprets the classical Greek story of Oedipus Rex within a Nigerian context.',
      'The play explores themes of fate, free will, and the consequences of societal expectations.',
      'Rotimi\'s adaptation masterfully blends traditional African storytelling elements with Greek tragedy, offering a compelling narrative that reflects on the complexities of human existence.'
    ]
  },
  {
    id: '010',
    title: 'The Incorruptible Judge',
    author: 'D.O. Fagunwa',
    type: 'novel',
    year: 1946,
    summary: [
      'The Incorruptible Judge by D.O. Fagunwa is a classic Yoruba novel that follows the adventures of Akaraogun, a fearless and just judge.',
      'As Akaraogun dispenses justice in the mythical land of Jogbo, he faces supernatural challenges and moral dilemmas.',
      'Fagunwa\'s novel, written in the Yoruba language, is celebrated for its rich cultural elements, folklore, and the portrayal of a hero who upholds justice in the face of adversity.'
    ]
  },
  {
    id: '011',
    title: 'The River Between',
    author: 'Ngũgĩ wa Thiong\'o',
    type: 'novel',
    year: 1965,
    summary: [
      'The River Between by Ngũgĩ wa Thiong\'o is a novel set in Kenya that explores the cultural and religious tensions between two neighboring villages.',
      'The story follows the life of Waiyaki, a young man caught between tradition and the influence of colonial forces.',
      'Ngũgĩ\'s novel addresses themes of identity, love, and the impact of external forces on indigenous communities.'
    ]
  },
  {
    id: '012',
    title: 'The Trials of Brother Jero',
    author: 'Wole Soyinka',
    type: 'drama',
    year: 1960,
    summary: [
      'The Trials of Brother Jero by Wole Soyinka is a satirical play that follows the antics of Brother Jero, a self-proclaimed prophet in a Nigerian seaside community.',
      'The play humorously explores themes of power, corruption, and the manipulation of religious fervor for personal gain.',
      'Soyinka\'s wit and social commentary make this play a classic in African drama, offering insights into the complexities of faith and human nature.'
    ]
  },
  {
    id: '013',
    title: 'So Long a Letter',
    author: 'Mariama Bâ',
    type: 'novel',
    year: 1981,
    summary: [
      'So Long a Letter by Mariama Bâ is an epistolary novel that tells the story of Ramatoulaye, a Senegalese woman writing a letter to her friend Aissatou.',
      'The novel explores themes of polygamy, tradition, and the changing role of women in postcolonial Senegal.',
      'Bâ\'s poignant narrative provides a powerful portrayal of female resilience and the challenges faced by women in a changing society.'
    ]
  },
  {
    id: '014',
    title: 'The Man Died- Prison Notes',
    author: 'Wole Soyinka',
    type: 'prose',
    year: 1972,
    summary: [
      'The Man Died: Prison Notes by Wole Soyinka is a collection of essays and reflections based on Soyinka\'s experiences during his imprisonment in Nigeria.',
      'The book addresses themes of political oppression, human rights, and the struggle for justice.',
      'Soyinka\'s powerful prose offers a firsthand account of the challenges faced by individuals fighting for freedom and justice in the face of tyranny.'
    ]
  }
]
const bookCard = books.map(book =>(
  <section key={book.id} className="p-10 mx-4 shadow-2xl rounded-2xl transition ease-linear duration-[0.6s] hover:scale-[0.85]">

    <Link href={`/books/${book.title.split(' ').join('-')}`} title={`${book.title} by ${book.author}`}>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    </Link>
  </section>
))

export default function Course() {
 
  return (

    <section>
         <form className='flex items-center justify-center py-[1em]'>
    <input type="search" name="search" id="search" placeholder='Search For Food & Categories' className='w-3/5 outline-8 rounded-[40px] border-2 border-[#d81] border-solid p-4 my-5 m-auto' />
  </form>

    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {bookCard}
    </div>
    </section>
  )
}
