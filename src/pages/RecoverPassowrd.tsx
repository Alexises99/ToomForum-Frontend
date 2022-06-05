import logo from "../images/logo.png"
import { useForm } from "react-hook-form"
import { useField } from "../hooks"
import { Link } from "react-router-dom"
import SubmitBottom from "../components/SubmitBotton"

const RecoverPassword = () => {
  const { reset, ...newPassword } = useField("text")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="mt-6">
      <img
        src={logo}
        alt="logo"
        className="h-32 w-56 mx-auto md:w-96 md:h-44"
      />
      <div className="mt-4 container max-w-2xl text-lg">
        <h2 className="leading-tight text-4xl text-blue-500 font-black">
          Recuperar contrasena
        </h2>
        <p className="mt-2">
          Aqui podras establecer tu nueva contrasena en caso de que la hayas
          olvidado.
        </p>
        <form className="mt-3" onSubmit={handleSubmit(() => 1)}>
          <label
            htmlFor="username"
            className="text-lg text-gray-800 block md:text-xl"
          >
            Usuario: <span className="text-red-400"> *</span>
          </label>
          <input
            {...register("newPassword", { required: true })}
            className="w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl"
            placeholder="Introduce tu username"
            {...newPassword}
          />
          {errors.newPassword && newPassword.value.length === 0 && (
            <p className="text-red-600 px-5 pt-2 md:text-lg">
              La contrasena es obligatoria
            </p>
          )}
          <SubmitBottom label="Recuperar contrasena" />
        </form>
        <Link to="/login" className="text-center block mt-4 underline">
          Volver a Iniciar sesion
        </Link>
      </div>
    </div>
  )
}

export default RecoverPassword
