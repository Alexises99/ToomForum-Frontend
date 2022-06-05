import ImageUser from "./ImageUser"

interface Props {
  islandName: string
  islandDreamcode: string
  username: string
  horaFin: string
  horaIni: string
  price: number
  imageUser: number
}

const NaboPublication = ({
  islandName,
  islandDreamcode,
  username,
  horaIni,
  horaFin,
  price,
  imageUser,
}: Props) => {
  return (
    <div className="border-2 rounded-md p-2 text-xl shadow-lg my-5">
      <div className="grid grid-cols-3 items-center">
        <ImageUser
          user={imageUser}
          className="rounded-full w-16 h-16 mx-auto"
        />
        <h3 className="leading-tight text-2xl uppercase text-center text-blue-300 font-black">
          {islandName}
        </h3>
        <div className="flex items-center">
          <span className="p-3">0</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 hover:text-red-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <p>
          <span className="font-bold text-md">Codigo de Sueno: </span>
          {islandDreamcode}
        </p>
        <div className="grid grid-cols-2 justify-items-center">
          <p>
            <span className="font-bold text-md">Usuario: </span>
            {username}
          </p>
          <p>
            <span className="font-bold text-md"> Precio: </span>
            {price}
          </p>

          <p>
            <span className="font-bold text-md">Hora inicio: </span>
            {horaIni}
          </p>
          <p>
            <span className="font-bold text-md">Hora final: </span>
            {horaFin}
          </p>
        </div>
      </div>
      <div className="px-2">
        <button
          type="button"
          className="bg-green-400 w-full rounded-md mt-4 h-12 font-medium text-white text-lg hover:cursor"
        >
          Participar
        </button>
      </div>
    </div>
  )
}

export default NaboPublication
