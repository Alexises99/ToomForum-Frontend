import NavBar from './components/NavBar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './hooks/useAuth';

function App() {

  return (
    <>
      <AuthProvider>
        <NavBar />
      
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


