import './css/App.css';
import { Route, Routes} from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import WelcomePage from './Pages/WelcomePage'
import ContinueRegister from './Pages/ContinueRegister'
import Edit from './Pages/Edit'
import MainPage from './Pages/MainPage'
import ConnectedUserEdit from './Pages/ConnectedUserEdit'
import SearchChat from './Pages/SearchChat'
import Setting from './Pages/Setting'

function App(props) {
  return (
    <>      
      <div className="card">
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ContinueRegister" element={<ContinueRegister/>} />
        <Route path="/Edit" element={<Edit/>} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/ConnectedUserEdit" element={<ConnectedUserEdit/>} />
        <Route path="/SearchChat" element={<SearchChat/>} />
        <Route path='/Setting' element={<Setting/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
