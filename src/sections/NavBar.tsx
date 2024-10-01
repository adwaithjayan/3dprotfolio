import { useState } from "react"
import { navLinks } from "../constant"


const NavItem=()=>{
    return(
        <ul className="nav-ul">
            {
                navLinks.map(({id,href,name})=>(
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-li_a" onClick={()=>{}}>{name}</a>
                    </li>
                ))
            }
        </ul>
    )
}

function NavBar() {
    
    const [open, setOpen] = useState<boolean>(false)
    const toggleMenu=()=>{
        setOpen(prev=>!prev)
    }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Adwaith</a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
                    <img src={open ? "assets/close.svg" :"assets/menu.svg"} alt="toggle" className="size-6" />
                </button>
                <nav className="hidden sm:flex">
                    <NavItem/>
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${open ? "max-h-screen" : "max-h-0"}`}>
            <nav className="p-5">
                <NavItem/>
            </nav>
        </div>
    </header>
  )
}

export default NavBar