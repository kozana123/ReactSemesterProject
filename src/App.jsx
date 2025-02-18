import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import WelcomePage from './Pages/welcomePage'
import RegisterPassword from './Pages/RegisterPages/RegisterPassword'


function App(props) {
  const navigate = useNavigate();
  return (
    <>      
      <div className="card">
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path='/src/Pages/RegisterPages/RegisterPassword.jsx' element = {<RegisterPassword/>}/>

      </Routes>
      </div>
    </>
  )
}

export default App
