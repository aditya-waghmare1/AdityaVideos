import React, { useState } from 'react'
import NavBar from './Componets/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/video/Video'; // Adjust the path based on your project structure


function App() {

  const [sidebar,setSidebar]=useState(true)

  return (
    <div>
       <NavBar setSidebar={setSidebar}/>
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>}/>
    <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>

    </div>
   
  )
}

export default App