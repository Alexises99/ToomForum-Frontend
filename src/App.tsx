import NavBar from './components/NavBar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './hooks/useAuth';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return (
    <>
      <AuthProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
    
  );
}

export default App;


