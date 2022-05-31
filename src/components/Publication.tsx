import { PublicationProps } from "../interfaces/publication/publication.interface"

const Publication = ({username, timestamp, topic, content}: PublicationProps) => {
  return (
    <div className="mx-2 my-1 border-2 rounded p-2 border-cyan-500">
      <div className="flex items-center">
        <img src="https://www.svgrepo.com/show/416739/account-customize-man.svg"
          className="rounded-full bg-contain h-16 border-2 border-neutral-grayish-blue" />
        <div className="w-full flex justify-between">
          <span className="font-bold  mx-3">{username}</span>
          <span className="mx-3 text-gray-500">{timestamp}</span>
        </div>
      </div>
      <div className="m-1">
        <p className="font-medium my-1"><span className="font-bold">Tema: </span>{topic}</p>
        <p className="text-clip max-h-16 overflow-hidden sm:max-h-24">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Publication
