import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import  Welcome  from './components/Welcome/Welcome'

import  NavBar  from './views/NavBar/NavBar'
import  Login  from './views/Login/Login'


function App() {
  

  return (
        <>
        <NavBar />
        <Footer /> 
       
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
        </>
     
      
  )
}

export default App
