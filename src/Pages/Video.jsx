import React from 'react'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'
import { useParams } from 'react-router-dom'

function Video() {

  const{videoId, categoryId}=useParams()
  return (
    <>
    <div className="play-container">
      <PlayVideo videoId={videoId}/>
      <Recommended/>
  
    </div>
      
    </>
  )
}

export default Video
