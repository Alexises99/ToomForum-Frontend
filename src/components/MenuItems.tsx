import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { MenuItemsProps } from "../interfaces/nav/navElemet.interface"
import ImageUser from "./ImageUser"

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
  const { user, logout } = useAuth()

  return (
    <ul
      className={
        active
          ? "text-white flex flex-col items-center fixed inset-0 bg-black/40 backdrop-blur-lg left-1/4 gap-8 justify-center text-2xl md:hidden z-50"
          : "hidden"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={showMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <li>
        <Link to="/">Nabos</Link>
      </li>
      <li>
        <Link to="/">Eventos</Link>
      </li>
      <li>
        <Link to="/">Concursos</Link>
      </li>
      <li>
        <Link to="/">Foro</Link>
      </li>
      {!user && (
        <>
          <li className="text-cyan-500" onClick={showMenu}>
            <Link to="/login">Iniciar Sesion</Link>
          </li>
          <li className="text-green-500">
            <Link to="/signup">Registrarse</Link>
          </li>
        </>
      )}
      {user && (
        <div className="flex items-center flex-col">
          <li className="text-red-500">
            <Link to="/" onClick={logout}>
              Desconectarse
            </Link>
          </li>
          <Link to="/profile" className="hover:scale-110 hover:cursor-pointer">
            <ImageUser className="mt-3 h-16 w-16 rounded-full" user={user} />
          </Link>
        </div>
      )}
    </ul>
  )
}

export default MenuItems
