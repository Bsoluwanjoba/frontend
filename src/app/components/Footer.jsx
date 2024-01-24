import SocialIcons from "./SociaIIcons";


export default function Footer() {
  return (
     <footer className="bg-black flex items-center text-white justify-center h-[10vh] font-medium tracking-widest px-10">
        <p> &copy; Kreator {new Date().getFullYear()} </p>

        <SocialIcons />
     </footer>
  )
}
