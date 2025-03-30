

import { Route, Routes } from 'react-router-dom'
import MainPages from '../pages/MainPages'
import './App.css'
import Lgin from '../pages/Lgin'

function App() {
 

  return (
    <>

   
    <Routes>
    <Route path='/' element={ <MainPages />} ></Route>
      <Route path='/login' element={<Lgin />} ></Route>
    </Routes>
  
    </>
  )
}

export default App
