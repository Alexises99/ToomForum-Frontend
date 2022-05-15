import { Link } from "react-router-dom"

interface MenuItemsProps {
  showMenu: () => void,
  active: boolean
}

const MenuItems = ({showMenu, active}: MenuItemsProps) => {
  return (
    <ul className={active ? "text-white flex flex-col items-center fixed inset-0 bg-black/40 backdrop-blur-lg left-1/4 gap-8 justify-center md:hidden z-50" : "hidden" }>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={showMenu}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <li><Link to='/'>Nabos</Link></li>
        <li><Link to='/'>Eventos</Link></li>
        <li><Link to='/'>Concursos</Link></li>
        <li><Link to='/'>Foro</Link></li>
        <li className="text-cyan-500" onClick={showMenu}><Link to='/login'>Iniciar Sesion</Link></li>
        <li><Link to='/'>Registrarse</Link></li>
    </ul>
  )
}

export default MenuItems