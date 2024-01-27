import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const kreator = Lato({ subsets: ['latin'] , weight: ['400'] })

export const metadata = {
  title: 'Kreator Advanced Library',
  description: 'Frontend 6B6 Class 1 on React',
  keywords: 'React, Next, Javascript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kreator.className}>
        <Navbar />
        <div className='min-h-[70vh]'>
        {children}
        
        </div>
        <Footer />
        </body>
    </html>
  )
}
