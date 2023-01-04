import React from 'react'
import './acheivement.css'

const Acheivements = () => {
  return (
    <div className="container">
      <div className="row my-5 g-4 justify-content-center">
        <div className="col-md-5 col-lg-2">
        <div className="card bg-light text-center  ">
        <h6>926</h6>
          <p>REGULAR VISITORS</p>
        </div>
        </div>
        <div className="col-md-5 col-lg-2">
        <div className="card bg-light text-center  ">
        <h6>214</h6>
          <p>FINISHED PROJECTS</p>
        </div>
        </div>
        <div className="col-md-5 col-lg-2">
        <div className="card bg-light text-center  ">
        <h6>118</h6>
          <p>HAPPY CLIENTS</p>
        </div>
        </div>
        <div className="col-md-5 col-lg-2">
        <div className="card bg-light text-center  ">
        <h6>16</h6>
          <p>TOTAL AWARDS</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Acheivements