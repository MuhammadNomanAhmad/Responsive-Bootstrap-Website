import React from 'react'
import './gallery.css'
import nature1 from '../../Assets/nature1.jpg'
import nature2 from '../../Assets/nature2.jpg'
import nature3 from '../../Assets/nature3.jpg'
import nature4 from '../../Assets/nature4.jpg'
import nature5 from '../../Assets/nature5.jpg'
import nature6 from '../../Assets/nature6.jpg'
import nature7 from '../../Assets/nature7.jpg'
import nature9 from '../../Assets/nature9.jpg'

const GallerySection = () => {
  return (
   <section className='gallery'>
    <div className="container-fluid bg-light ">
      <div className="row ">
        <div className="col-12 mt-5">
        <div className="portfolio text-center">
        <h5>OUR PORTFOLIO</h5>
        <hr className='line mx-auto'/>
      </div>
<div className="links-container  ">
<ul class="list-container list-unstyled d-flex justify-content-center    ">
  <li class="list-item ">All</li>
  <li class="list-item">Nature</li>
  <li class="list-item">Workspace</li>
  <li class="list-item">City</li>
  <li class="list-item">Technology</li>
</ul>
</div>

        </div>
        <div className="row justify-content-center mx-0 px-0">
          <div className="col-lg-2 col-md-5 col-10">
            <figure>
              <img src={nature1} alt="" className='images img-fluid' />
            </figure>
          </div>
          <div className="col-lg-2 col-md-5 col-10">
            <figure>
              <img src={nature2} alt="" className='images img-fluid' />
            </figure>
          </div>
          <div className="col-lg-2 col-md-5 col-10">
            <figure>
              <img src={nature3} alt="" className='images img-fluid' />
            </figure>
          </div>
          <div className="col-lg-2 col-md-5 col-10">
            <figure>
              <img src={nature4} alt="" className='images img-fluid' />
            </figure>
          </div>
          
          
        </div>
<div className="row justify-content-center mx-0 px-0">
  <div className="col-lg-2 col-md-5 col-10">
    <figure>
      <img src={nature5} alt="nature img not found" className='img-fluid' />
    </figure>
  </div>
  <div className="col-lg-2 col-md-5 col-10">
    <figure>
      <img src={nature6} alt="nature img not found" className='img-fluid' />
    </figure>
  </div>
  <div className="col-lg-2 col-md-5 col-10">
    <figure>
      <img src={nature7} alt="nature img not found" className='img-fluid' />
    </figure>
  </div>
  <div className="col-lg-2 col-md-5 col-10">
    <figure>
      <img src={nature9} alt="nature img not found" className='img-fluid' />
    </figure>
  </div>
</div>

      </div>
    </div>
   </section>
  )
}

export default GallerySection