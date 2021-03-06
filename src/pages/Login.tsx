import { useField } from "../hooks"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { UserEntry } from "../interfaces/users/users"
import { useForm } from "react-hook-form"
import Notification from "../components/Notification"
import { useEffect } from "react"
import SubmitBottom from "../components/SubmitBotton"

const Login = () => {
  const { reset: resetUsername, ...username } = useField("text")
  const { reset: resetPassword, ...password } = useField("password")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { login, error, setError } = useAuth()

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 10000)
  }, [error])

  const handleLogin = async () => {
    const userEntry: UserEntry = {
      username: username.value,
      password: password.value,
    }

    login(userEntry)

    if (!error) {
      resetUsername()
      resetPassword()
    }
  }

  return (
    <div className="grid lg:grid-cols-2 mx-4">
      <div className="mx-2 flex flex-col justify-center">
        <div className="w-full p-6 m-auto lg:bg-white lg:border-t lg:border-green-600 lg:rounded lg:shadow-lg lg:shadow-green-800/50 lg:max-w-md">
          <img
            src={logo}
            alt="logo"
            className="h-32 w-56 mx-auto md:w-96 md:h-44"
          />

          <form className="mt-6" onSubmit={handleSubmit(handleLogin)}>
            {error && (
              <Notification text={error.response.data.message} type="error" />
            )}
            <div>
              <label
                htmlFor="username"
                className="text-lg md:text-xl text-gray-800"
              >
                Username <span className="text-red-400"> *</span>
              </label>
              <input
                {...register("username", { required: true })}
                className="w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-4 md:text-xl"
                placeholder="Introduce tu nombre de usuario"
                {...username}
              />
              {errors.username && username.value.length === 0 && (
                <p className="text-red-600 px-5 pt-2 md:text-lg">
                  El username es obligatorio.
                </p>
              )}
            </div>

            <div className="mt-4">
              <div>
                <label
                  htmlFor="password"
                  className="text-lg text-gray-800 md:text-xl"
                >
                  Contrasena <span className="text-red-400"> *</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  className="text-lg w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
                  placeholder="Introduce tu contrase??a"
                  {...password}
                />
                {errors.password && password.value.length === 0 && (
                  <p className="text-red-600 px-5 pt-2 md:text-lg">
                    La contrasena es obligatorio.
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <Link
                  to="/recover-password"
                  className="text-md text-cyan-600 hover:underline md:text-xl"
                >
                  Has olvidado la contrasena?
                </Link>
              </div>

              <div className="mt-3">
                <SubmitBottom label="Iniciar Sesion" />
              </div>
            </div>
          </form>

          <p className="mt-8 text-md font-light text-center text-gray-700 md:text-lg">
            No tienes cuenta? {"  "}
            <Link
              to="/signup"
              className="font-medium text-green-600 hover:underline"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-cat-image hidden lg:h-screen lg:block w-full h-full bg-cover"></div>
    </div>
  )
}

export default Login
