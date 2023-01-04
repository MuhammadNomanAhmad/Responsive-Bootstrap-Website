import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light  ">
  <div class="container nav-bg f-size ">
    <a class="navbar-brand brnd-name" href="#">METEOR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center  ">

        <li class="nav-item">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT US</a>
        </li>

     
       
      </ul>
  
    </div>
  </div>
</nav>
  )
}

export default Navbar