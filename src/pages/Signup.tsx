import { useField, useFieldFile } from "../hooks"
import logo from "../images/logo.png"
import useAuth from "../hooks/useAuth"
import axios, { AxiosRequestHeaders } from "axios"
import { UserEntry, UserEntryImage } from "../interfaces/users/users"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import Notification from "../components/Notification"

const Signup = () => {
  const { reset: resetUsername, ...username } = useField("text")
  const { reset: resetPassword, ...password } = useField("password")
  const { reset: resetIsland, ...island } = useField("text")
  const { reset: resetFruit, ...fruit } = useField("text")
  const { reset: resetImage, ...image } = useFieldFile()

  const { signUp, error, setError } = useAuth()

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 10000)
  }, [error])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSignup = async () => {
    const formData = new FormData()

    let newUserEntry: UserEntryImage | UserEntry
    if (image.image) {
      formData.append("profileImage", image.image)
      const headers: AxiosRequestHeaders = {
        "Content-Type": "form-data",
      }
      const response = await axios.post("/api/images", formData, headers)
      newUserEntry = {
        username: username.value,
        password: password.value,
        imageId: response?.data.imageId,
      }
    } else {
      newUserEntry = {
        username: username.value,
        password: password.value,
      }
    }

    signUp(newUserEntry)
    if (!error) {
      resetUsername()
      resetIsland()
      resetPassword()
      resetFruit()
      resetImage()
    }
  }

  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="mx-2 flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white border-t border-green-600 rounded shadow-lg shadow-green-800/50 lg:max-w-md">
            <img className="mx-auto" src={logo} />

            <h2 className="mt-1 text-cyan-500 text-center text-3xl">
              Registrarse
            </h2>

            <form className="mt-6" onSubmit={handleSubmit(handleSignup)}>
              {error && (
                <Notification text={error.response.data.message} type="error" />
              )}
              <div>
                <label htmlFor="username" className="text-lg text-gray-800">
                  Usuario: <span className="text-red-400"> *</span>
                </label>
                <input
                  {...register("username", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
                  placeholder="Introduce tu username"
                  {...username}
                />
                {errors.username && username.value.length === 0 && (
                  <p className="text-red-600 px-5 pt-2 md:text-lg">
                    El Username es obligatorio
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="username" className="text-lg text-gray-800">
                  Contrasena: <span className="text-red-400"> *</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
                  placeholder="Introduce tu contrasena"
                  {...password}
                />
                {errors.password && password.value.length === 0 && (
                  <p className="text-red-600 px-5 pt-2 md:text-lg">
                    La Contrasena es obligatoria
                  </p>
                )}
                <div className="mt-4 grid xl:grid-cols-2">
                  <div className="mr-2">
                    <label htmlFor="username" className="text-lg text-gray-800">
                      Nombre de tu isla:{" "}
                      <span className="text-red-400"> *</span>
                    </label>
                    <input
                      {...register("island", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
                      placeholder="Introduce tu isla"
                      {...island}
                    />
                    {errors.island && island.value.length === 0 && (
                      <p className="text-red-600 px-5 pt-2 md:text-lg">
                        La Isla es obligatoria
                      </p>
                    )}
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-2">
                    <label htmlFor="username" className="text-lg text-gray-800">
                      Indica tu fruta: <span className="text-red-400"> *</span>
                    </label>
                    <input
                      {...register("fruit", { required: true })}
                      className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
                      placeholder="Introduce tu fruta"
                      {...fruit}
                    />
                    {errors.fruit && fruit.value.length === 0 && (
                      <p className="text-red-600 px-5 pt-2 md:text-lg">
                        La fruta es obligatoria
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <label
                    htmlFor="profileImage"
                    className="text-sm md:text-lg text-gray-800"
                  >
                    Selecciona tu avatar:{" "}
                  </label>
                  <input
                    type="file"
                    accept="image/"
                    onChange={image.onChange}
                    name="profileImage"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 md:text-lg lg:text-xl"
                  />
                  {image.value && (
                    <img className="w-28 h-28 rounded-full" src={image.value} />
                  )}
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white bg-cyan-700 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                    Registrarse
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-dog-image hidden lg:block w-full h-full bg-cover bg-right md:bg-center"></div>
      </div>
    </div>
  )
}

export default Signup
