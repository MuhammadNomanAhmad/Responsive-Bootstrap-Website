import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWifi} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer-bgcolor">
      <div className="row align-items-center  ">
        <div className="col-lg-6">
        <p className='text-white d-flex justify-content-center py-3'>Copyright@2017Company Name - Design Template </p>
        </div>
        <div className="col-lg-6  d-flex justify-content-center">
        <div className="socialLinks d-flex p-3">
  <h5><FaFacebookF/></h5>
    <h5><FaTwitter/></h5>
    <h5><FaLinkedinIn/></h5>
    <h5><FaWifi/></h5>
    <h5><FaGithub/></h5>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Footer