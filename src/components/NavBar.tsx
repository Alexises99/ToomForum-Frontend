import { Link } from "react-router-dom"
import logoIcon from "../images/iconApp.png"
import MenuItems from "./MenuItems"
import { useState } from "react"
import useAuth from "../hooks/useAuth"
import ImageUser from "./ImageUser"

const NavBar = () => {
  const [active, setActive] = useState(false)

  const { user, logout } = useAuth()

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className="top-0 sticky w-full flex justify-between p-4 items-center bg-black/80">
      <Link to="/">
        <img className="w-8 h-8 md:w-12 md:h-12 scale-150" src={logoIcon} />
      </Link>

      <nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden scale-150 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={showMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <ul className="hidden md:flex gap-8 p-4 uppercase text-white text-2xl">
          <li className="hover:scale-110 hover:font-semibold">
            <Link to="/nabos">Nabos</Link>
          </li>
          <li className="hover:scale-110 hover:font-semibold">
            <Link to="/">Eventos</Link>
          </li>
          <li className="hover:scale-110 hover:font-semibold">
            <Link to="/">Concursos</Link>
          </li>
          <li className="hover:scale-110 hover:font-semibold">
            <Link to="/">Foro</Link>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>

      <div className="hidden md:flex text-white ">
        {user && (
          <div className="flex items-center">
            <Link
              to="/"
              className="text-red-400 hover:scale-110 hover:cursor-pointer text-xl p-2 font-semibold"
              onClick={logout}
            >
              Desconectarse
            </Link>
            <Link
              to="/profile"
              className="hover:scale-110 hover:cursor-pointer"
            >
              <ImageUser
                className="h-12 w-12 rounded-full"
                user={user.ImageId as number}
              />
            </Link>
          </div>
        )}
        {!user && (
          <Link to="/login" className="hover:scale-110 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default NavBar
