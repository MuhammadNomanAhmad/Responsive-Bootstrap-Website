import React from 'react'
import './header.css'


const Header = () => {
  return (
      <div className="container-fluid   min-vh-100 d-flex  
      flex-column justify-content-center  align-items-center   bg-img ">
      <div className="row ">
        <div className="col-12  d-flex flex-column align-items-center justify-content-center text-center  text-white Img-adjust   ">
          <h6 style={{fontWeight:"light"}}>INTRODUCTION TO</h6>
          <h2  style={{fontWeight:"bolder"}}>CREATIVE METEOR</h2>
          <p className='para   '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, deleniti culpa dolores quaerat eligendi magnam alias ab impedit nisi assumenda sed vel perferendis quidem rerum minima? Fugit minima alias atque?</p>
          <button className='btn-header'>DISCOVER MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Header