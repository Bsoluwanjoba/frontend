import Image from "next/image"

const contacts = [
  {
    id: '0',
    image: "/teamimages/mem3.jpg",
    contact: 'Jane Doe',
    position: 'CEO & Founder',
    mail: 'janedoe@example.com',
    phone: 'Contact',
    detail: 'Some text that describes me lorem ipsum ipsum lorem.',
  },
  {
    id: '1',
    image: '/teamimages/mem.jpg',
    contact: 'Mike Ross',
    position: 'Library Manager',
    mail: 'mikeross@example.com',
    phone: 'Contact',
    detail: 'Some text that describes me lorem ipsum ipsum lorem.',
  },
  {
    id: '2',
    image: '/teamimages/mem1.jpg',
    contact: 'John Benjamin',
    position: 'Library Attendant',
    mail: 'benjamin@example.com',
    phone: 'Contact',
    detail: 'Some text that describes me lorem ipsum ipsum lorem.',
  },
  {
    id: '3',
    image: '/teamimages/mem2.jpg',
    contact: 'Ariana Bliss',
    position: 'Library Attendant',
    mail: 'bliss@example.com',
    phone: 'Contact',
    detail: 'Some text that describes me lorem ipsum ipsum lorem.',
  }
]

const contactCard = contacts.map( contact =>(
  <section key={contact.id} className=" shadow-2xl rounded-sm transition ease-linear duration-[0.6s] hover:scale-[0.85]">
 
     <div className="text-center place-content-center p-5">
    <Image src={contact.image}  alt="team" width={200} height={200} className="m-auto"/>
    <p className="text-3xl font-semibold uppercase p-2 text-[#d81]">{contact.contact}</p>
    <p>{contact.position}</p>
    <p>{contact.mail}</p>
    <p>{contact.detail}</p>
    </div>

  </section>
) )
export default function Contact() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">MEET THE TEAM</h1>
    <div className="flex md:flex-row flex-col gap-4 my-[4em]"> {contactCard} </div>
    </div>
  )
}
