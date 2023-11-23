import SocialIcons from "./SociaIIcons";


export default function Footer() {
  return (
     <footer className="bg-[gold] flex items-center justify-center h-[20vh] font-bold px-10">
        <p>&copy; univelcity {new Date().getFullYear()}</p>

        <SocialIcons />
     </footer>
  )
}
