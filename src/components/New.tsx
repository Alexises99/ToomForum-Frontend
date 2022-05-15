import nabo from '../images/nabo.png'

const New  = () => {
  return (
    <div className=''>
      <div className='flex border-2 border-cyan-200 rounded-xl m-1 w-48 items-center bg-gradient-to-r bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'>
        <img src={nabo} className="w-12 h-12 rounded-full"/>
        <div className='mx-1'>
          <p className='text-xl font-medium leading-tight mb-0.5'>Isla Ubuntin</p>
          <p className='text-gray-500'>100 nabos</p>
        </div>
        
      </div>
    </div>
    
      
  )
}

export default New