import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Componets/Navbar/Sidebar/Sidebar'
import Feed from '../../Componets/Feed/Feed'

const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0)
  return (
    <>
    <Sidebar sidebar={sidebar } category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed category={category} ></Feed>
    </div>
        
    
    </>
  )
}

export default Home