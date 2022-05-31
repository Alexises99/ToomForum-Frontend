import { HomeCardProps } from "../interfaces/nav/Home.interface"

const HomeCard = ({img, title, description}: HomeCardProps) => {
  return (
    <div>
      <div className="px-5 py-3 flex flex-col items-center mt-4">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg">
            <img 
              src={img} 
              className="rounded-full"/>
          </div>
          <h3 className="mt-1 text-center text-xl text-primary-dark-blue">{title}</h3>
          <p className="text-md text-neutral-grayish-blue">{description}</p>
        </div>
    </div>
  )
}

export default HomeCard