import NavBar from './components/NavBar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login';




function App() {

  return (
    <>
      <NavBar />
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
    
  );
}

export default App;


