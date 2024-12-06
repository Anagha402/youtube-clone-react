import React from 'react'
import userprofile from '../assets/user_profile.jpg'
import { Link } from 'react-router-dom'

function Header({setSidebar}) {
  return (
    <>
      <div id="header"  className="header sm-12 lg-6 md-6 d-flex justify-content-between " style={{height:"70px", backgroundColor:"white"}}>
        {/* menu icon */}
        <i className="fa-solid fa-bars fs-lg m-3 " onClick={()=>setSidebar(prev=>prev===false?true:false)} style={{fontSize:"30px"}}></i>

      {/* logo and name */}
      <div className="logo d-flex mt-2" >
    <Link to={'/'}>  <i class="fa-brands fa-youtube text-danger" style={{fontSize:"50px"}}></i></Link>
        <h1 style={{textDecoration:"none"}}>YouTube</h1>
      </div>

      <div sm={12} md={6} lg={12}  className="search  "style={{position:"relative"}} >
        <input  type="text"style={{position:"absolute", top:"10px", height:"50px", borderRadius:"25px", borderColor:"grey", border:"1px solid grey", outline:"none"}} />
        <i class="fa-solid fa-magnifying-glass " style={{position:"absolute", top:"25px", left:"175px"}}></i>
      </div>

      <div sm={12} md={6} lg={12}  className="others d-flex mx-5" >
      <i class="fa-solid fa-video m-3 text-danger" style={{fontSize:"27px"}}></i>
      <i class="fa-solid fa-bell m-3" style={{fontSize:"27px"}}></i>
      <img src={userprofile} style={{borderRadius:"50px"}}   className='m-3 ' alt="" />
      </div>
      </div>
    </>
  )
}

export default Header
