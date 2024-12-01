import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'

function Home({sidebar}) {
  const[category,setCategory]= useState(0)
  return (
    <>
    <div className="d-flex">
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>


<div className={`container ${sidebar? "":"large-container"}`}>
  <Feed  category={category} />
</div>

    </div>
    
    
      
    </>
  )
}

export default Home
