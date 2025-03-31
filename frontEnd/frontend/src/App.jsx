

import { Route, Routes } from 'react-router-dom'
import MainPages from '../pages/MainPages'
import './App.css'
import Lgin from '../pages/Lgin'
import Dash from '../pages/Dash'
import Home from '../pages/Home'

function App() {
 

  return (
    <>

   
    <Routes>
    <Route path='/' element={ <Home />} ></Route>
    <Route path='/register' element={<MainPages/>} ></Route>
      <Route path='/login' element={<Lgin />} ></Route>
      <Route path='/dash' element={<Dash />}></Route>
    </Routes>
  
    </>
  )
}

export default App
