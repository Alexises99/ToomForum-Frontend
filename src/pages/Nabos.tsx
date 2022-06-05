import { useEffect, useRef, useState } from "react"
import NaboPublication from "../components/NaboPublication"
import { NewAttributes } from "../interfaces/new/new.interface"
import newService from "../services/new"
import naboImage from "../images/nabos.png"
import Togglable, { ToggableHandle } from "../components/Toggable"
import { useField } from "../hooks"
import { useForm } from "react-hook-form"
import InputForm from "../components/InputForm"
import SubmitBottom from "../components/SubmitBotton"
import useAuth from "../hooks/useAuth"
import { ResponseNew } from "../services/new"
import Notification from "../components/Notification"
import Footer from "../components/Footer"

const Nabos = () => {
  const [news, setNews] = useState<Array<ResponseNew>>()
  const [error, setError] = useState<any>(null)

  const { reset: resetPrecio, ...precio } = useField("number")
  const { reset: resetHoraIni, ...horaIni } = useField("number")
  const { reset: resetHoraFin, ...horaFin } = useField("number")

  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const fetchData = async () => {
    return await newService.getAllNews()
  }

  useEffect(() => {
    fetchData()
      .then((data) => setNews(data))
      .catch((err) => setError(err))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 5000)
  }, [error])

  const addNewForm = useRef<ToggableHandle>(null)

  const handlePublication = async () => {
    if (addNewForm.current) {
      addNewForm.current.toggleVisibility()
    }
    const newObj: NewAttributes = {
      endHour: horaFin.value,
      startHour: horaIni.value,
      price: precio.value,
      user: user?.id as number,
    }
    try {
      await newService.addNew(newObj, user?.token as string)
      const data = await fetchData()
      setNews(data)
    } catch (err: any) {
      setError(err.response.data.message)
    }
  }

  const errorMessage = (text: string) => {
    return <p className="text-red-600 px-5 pt-2 md:text-lg">{text}</p>
  }

  return (
    <div>
      <h2 className="leading-10 text-2xl text-center text-blue-500 font-black">
        Bienvenido a la venta de Nabos
      </h2>
      <div className="container">
        <img src={naboImage} alt="Juana" className="mb-2 mx-auto" />
        {error && <Notification text={error} type="error" />}
        <Togglable
          ref={addNewForm}
          labelShow="Publicar oferta"
          labelCancel="Cerrar"
        >
          <div>
            <form onSubmit={handleSubmit(handlePublication)}>
              <h3 className="leading-tight text-xl text-center text-blue-300 font-black">
                Crea tu anuncio de nabos
              </h3>
              <InputForm
                hook={precio}
                label="precio"
                required="true"
                textLabel="Precio: "
                placeholder="Introduce el precio"
                register={register("precio", { required: true })}
                validation={
                  errors.precio &&
                  precio.value.length === 0 &&
                  errorMessage("Debes indicar el precio")
                }
              />
              <div className="grid grid-cols-2 gap-2">
                <InputForm
                  hook={horaIni}
                  label="horaIni"
                  register={register("horaIni", { required: true })}
                  required="true"
                  textLabel="Hora Inicio:"
                  placeholder="Introduce la hora de inicio"
                  validation={
                    errors.horaIni &&
                    horaIni.value.length === 0 &&
                    errorMessage("Debes indicar la hora de apertura")
                  }
                />
                <InputForm
                  hook={horaFin}
                  label="horaFin"
                  register={register("horaFin", { required: true })}
                  required="true"
                  textLabel="Hora Fin: "
                  placeholder="Introduce la hora de fin"
                  validation={
                    errors.horaFin &&
                    horaFin.value.length === 0 &&
                    errorMessage("Debes indicar la hora de cierre")
                  }
                />
              </div>

              <SubmitBottom label="Publicar" />
            </form>
          </div>
        </Togglable>

        <section className="mt-4">
          {news &&
            news.map((newObj) => (
              <NaboPublication
                key={newObj.id}
                price={newObj.price}
                horaIni={newObj.startHour}
                horaFin={newObj.endHour}
                islandDreamcode={newObj.User.Island.dreamCode}
                islandName={newObj.User.Island.name}
                username={newObj.User.username}
                imageUser={newObj.User.ImageId}
              />
            ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Nabos
