import SocialIcons from "./SociaIIcons";


export default function Footer() {
  return (
     <footer className="bg-black flex items-center text-white justify-center sm:h-screen md:h-[10vh] h-[10vh] font-medium tracking-widest px-10 sm:inset-0 md:inset-0 inset-0">
        <p className="sm:w-full md:w-[20%] w-full"> &copy; Kreator {new Date().getFullYear()} </p>

        <SocialIcons />
     </footer>
  )
}
