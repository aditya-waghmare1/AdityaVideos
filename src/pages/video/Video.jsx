import React from 'react'
import Playvideo from '../../Componets/Playvideo/Playvideo'
import './Video.css'
import Recommande from '../../Componets/Recommanded/Recommande'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} =useParams();

  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recommande categoryId={categoryId}/>


    </div>
  )
}

export default Video