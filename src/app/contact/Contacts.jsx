import Image from "next/image"

export default function Contacts() {
  return (
    <div>
        <section>
        <h1 className="text-center text-5xl p-5 italic">Meet The Team</h1>
        </section>
        
        <div className="grid grid-cols-4">
        <section>
         <Image src='/teamimages/mem3.jpg' alt='member' width='300' height='100' />
         <div>
        <h2>Jane Doe</h2>
        <p>CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button>Contact</button></p>
      </div>
        </section>


        <section>
        <Image src="/teamimages/mem.jpg" alt='member' width='150' height='50' style={100}/>
        <div>
        <h2>Mike Ross</h2>
        <p>Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button>Contact</button></p>
      </div>
        </section>


        <section>
        <Image src='/teamimages/mem1.jpg' alt='member' width='200' height='200' />
        <div>
        <h2>John Benjamin</h2>
        <p>Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button>Contact</button></p>
      </div>
        </section>


        <section>
        <Image src='/teamimages/mem2.jpg' alt='member' width='200' height='200' />
         <div>
        <h2>John Doe</h2>
        <p>Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button>Contact</button></p>
      </div>
        </section>
        </div>
    </div>
  )
}
