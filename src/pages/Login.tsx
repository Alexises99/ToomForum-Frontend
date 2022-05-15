import logo from '../images/logo.png'

const Login = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

  return (
    <div className='grid lg:grid-cols-2'>
        <div className="mx-2 flex flex-col justify-center min-h-screen overflow-hidden">
            <div
                className="w-full p-6 m-auto bg-white border-t border-green-600 rounded shadow-lg shadow-green-800/50 lg:max-w-md">
                <img className="mx-auto" src={logo} />

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-800">Usuario</label>
                        <input type="text"
                            className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required />
                    </div>
                    <div className="mt-4">
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-800">Contrasena</label>
                            <input type="password"
                                className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required />
                        </div>
                        <a href="#" className="text-xs text-gray-600 hover:underline">Has olvidado la contrasena?</a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700"> No tienes cuenta? <a href="#"
                        className="font-medium text-green-600 hover:underline">Registrarse</a></p>
            </div>
        </div>
        <div className='bg-cat-image hidden lg:block w-full h-full bg-cover'>

        </div>
    </div>
    
  )
}

export default Login