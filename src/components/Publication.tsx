const Publication = () => {
  return (
    <div className="mx-2 my-1 border-2 rounded p-2 border-cyan-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://www.svgrepo.com/show/416739/account-customize-man.svg"
            className="rounded-full bg-contain h-16 border-2 border-neutral-grayish-blue" />
            <div className="flex sm:flex-col">
              <span className="font-bold  mx-3">Linuxgunter</span>
              <span className="mx-3 text-gray-500">16:00</span>
            </div>
        </div>
        
      </div>
      <div className="m-0.5">
        <p className="font-medium"><span className="font-bold">Tema: </span>Nabos</p>
        <p className="text-ellipsis max-h-16 overflow-hidden sm:max-h-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae eius omnis, magnam a blanditiis repellat veritatis velit dolor dolorem repudiandae accusamus natus ipsum quam, voluptatem provident quod at expedita.
        </p>
      </div>
    </div>
  )
}

export default Publication
