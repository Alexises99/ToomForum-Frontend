import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import github from "../images/git.svg"

const Footer = () => {
  return (
    <footer className="bg-primary-dark-blue py-10 mt-5">
      <div className="container">
        <div className="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
            <img src={logo} className="w-44 h-28 mb-7" />
            <div className="lex justify-between items-center">
              <Link to="https://github.com/Alexises99">
                <img
                  src={github}
                  className="w-8 h-8 text-white hover:text-green-400 fill-current cursor-pointer"
                />
              </Link>
            </div>
          </div>

          <div className="text-2xl grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white md:text-lg lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense">
            <Link to="/">Sobre mi</Link>
            <Link to="/">Sobre el proyecto</Link>
            <Link to="/">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
