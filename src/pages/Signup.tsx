import Form from "../components/Form"
import InputField from "../components/InputField"
import { useField, useFieldFile } from "../hooks"
import logo from '../images/logo.png'
import useAuth from '../hooks/useAuth';
import axios, { AxiosRequestHeaders } from "axios";
import { UserEntryImage } from "../types/users/users";

const Signup = () => {

  const {reset: resetUsername, ...username} = useField('text')
  const {reset: resetPassword, ...password} = useField('password')
  const {reset: resetIsland, ...island} = useField('text')
  const {reset: resetFruit, ...fruit} = useField('text')
  const {reset: resetImage, ...image} = useFieldFile()

  const {signUp, error} = useAuth()

  const handleSubmit = async () => {
    
    const formData = new FormData()
    console.log(image.image)
    if (image.image) {
      formData.append('profileImage', image.image)
    }
    const headers: AxiosRequestHeaders = {
      "Content-Type": "form-data"
    }
    
    const response = await axios.post('/api/images', formData, headers)
    const newUserEntry: UserEntryImage  = {
      username: username.value,
      password: password.value,
      imageId: response.data.imageId
    }
    
    signUp(newUserEntry)

    resetUsername()
    resetIsland()
    resetPassword()
    resetFruit()
    resetImage()
    
  }

  return (
    <div>
      <div className='grid lg:grid-cols-2'>
          <div className="mx-2 flex flex-col justify-center min-h-screen overflow-hidden">
            <div
              className="w-full p-6 m-auto bg-white border-t border-green-600 rounded shadow-lg shadow-green-800/50 lg:max-w-md">
                <img className="mx-auto" src={logo} />

                <h2 className="mt-1 text-cyan-500 text-center text-3xl">Registrarse</h2>

                <Form className='mt-6' handleSubmit={handleSubmit}>
                  {error && <p className="text-center text-red-600">{error.response.data.message}</p>}
                    <InputField
                      label='Usuario'
                      className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                      name='username'
                      placeholder='Introduce un nombre de usuario'
                      required={true}
                      {...username} />
                    <div className="mt-4">
                      <InputField
                        label='Contrasena'
                        className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        name='password'
                        placeholder='Introduce una contrasena'
                        required={true}
                        {...password} />
                    <div className="mt-4 grid lg:grid-cols-2">
                      <div className="mr-2">
                        <InputField
                           label='Nombre de tu isla'
                            className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            name='password'
                            placeholder='Introduce el nombre de tu isla'
                            required={true}
                            {...island} />
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-2">
                        <InputField
                          label='Que fruta tienes?'
                          className='block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40'
                          name='password'
                          placeholder='Introduce la fruta de tu isla'
                          required={true}
                          {...fruit} />
                      </div>
                    </div>
                    <div className="mt-4">
                    <input
                        type="file"
                        accept="image/"
                        onChange={image.onChange}
                        name="profileImage"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                      {image.value && <img className="w-24 h-24" src={image.value}/>}
                    </div>
                    <div className="mt-6">
                      <button
                        className="w-full px-4 py-2 tracking-wide text-white bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                          Registrarse
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          <div className='bg-dog-image hidden lg:block w-full h-full bg-cover bg-right sm:bg-center'>
        </div>
      </div>
    </div>
  )
}

export default Signup