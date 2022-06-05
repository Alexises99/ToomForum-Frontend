import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { AuthProvider } from "./hooks/useAuth"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import RecoverPassword from "./pages/RecoverPassowrd"
import Nabos from "./pages/Nabos"

const App = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/nabos" element={<Nabos />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
