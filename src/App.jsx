
import './App.css'
import Header from './Components/Header'
import { Route,Routes } from 'react-router-dom'
import Video from './Pages/Video'
import Home from './Pages/Home'
import { useState } from 'react'

function App() {
  const[sidebar, setSidebar]=useState(true);
  

  return (
    <>
      <Header setSidebar={setSidebar}/>


      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
