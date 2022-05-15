import { NavElementProps } from "../types/nav/navElemet"

const NavElement = ({image, text}: NavElementProps) => {
  return (
    <div>
      <div className="inline-block mx-3 h-10 w-10 sm:hidden">
        <div className="px-2 py-1 flex flex-col items-center ">
          <div className="w-10 h-10 bg-white rounded-full">
            <img 
              src={image} 
              alt={text} 
              className="rounded-full shadow-lg"/>
          </div>
          <span className="mt-0.5 text-center">{text}</span>
        </div>
      </div>
      <div className="invisible mx-5 sm:visible transition hover:scale-125 hover:font-bold">
        <span>{text}</span>
      </div>
    </div>
    
  ) 
}

export default NavElement