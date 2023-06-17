import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar bg-dark p-4 d-flex justify-content-between'>
      <img onClick={() => navigate("/")} style={{ maxWidth: "100px", cursor: "pointer" }} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      <div className=''>
      <button className='btn btn-danger '>JOIN NOW</button>
      <button className='btn btn-outline-light mx-1'>SIGN IN</button>
      </div>
      
    </div>
  )
}

export default Header