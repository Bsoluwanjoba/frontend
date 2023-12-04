import Contacts from "./Contacts"

export const metadata = {
    title: 'Contact My Library',
    description: 'Frontend 6B6 Class 1 on React',
    keywords: 'React, Next, Javascript'
  }

export default function layout({children}) {
  return (
    <div>
        <Contacts />
        {children}
    </div>
  )
}