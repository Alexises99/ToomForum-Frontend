import { useField } from '../hooks'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import InputField from '../components/InputField'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { UserEntry } from '../types/users/users'

const Login = () => {

    const {reset: resetUsername, ...username} = useField('text')
    const {reset: resetPassword, ...password} = useField('password')

    const navigate = useNavigate()

    const {login, error} = useAuth()

    const handleSubmit = async () => {
      resetUsername()
      resetPassword()

      const userEntry: UserEntry = {
        username: username.value,
        password: password.value
      }
      
      login(userEntry)
  }

    return (
        <div className='grid lg:grid-cols-2 mx-4'>
          <div className="mx-2 flex flex-col justify-center min-h-screen overflow-hidden">
            <div
              className="w-full p-6 m-auto bg-white border-t border-green-600 rounded shadow-lg shadow-green-800/50 lg:max-w-md">
                <img className="mx-auto" src={logo} />

                <Form className='mt-6' handleSubmit={handleSubmit}>
                {error && <p className="text-center text-red-600">{error.response.data.message}</p>}
                  <InputField
                    label='Usuario'
                    className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    name='username'
                    placeholder='Introduce tu nombre de usuario'
                    required={true}
                    {...username} />
                  <div className="mt-4">
                    <InputField
                      label='Contrasena'
                      className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                      name='password'
                      placeholder='Introduce tu contrasena'
                      required={true}
                      {...password} />
                    <Link to="" className="text-xs text-gray-600 hover:underline md:text-lg">Has olvidado la contrasena?</Link>
                    <div className="mt-6">
                      <button
                        className="w-full px-4 py-2 tracking-wide text-white bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                          Login
                      </button>
                    </div>
                  </div>
                </Form>
                
                <p className="mt-8 text-xs font-light text-center text-gray-700 md:text-lg"> No tienes cuenta? <Link to="/signup"
                  className="font-medium text-green-600 hover:underline">Registrarse</Link></p>
              </div>
            </div>
          <div className='bg-cat-image hidden lg:block w-full h-full bg-cover'>
          </div>
        </div>
        
    )
}

export default Login