import React from "react";
import "./contact.css";
import mapimg from "../../Assets/map.jpg";

const Contact = () => {
  return (
    <div className="container-fluid last-bgimg   ">
      <div className="row ">
        <div className="col-12 ">
          <div className="f-heading text-white ">
            <h6 className="fw-bold d-flex justify-content-center mt-5">
              CONTACT US
            </h6>
            <hr className="footer-line mx-auto mb-5 " />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-10">
          <img src={mapimg} alt="" className="img-fluid mb-4" />
        </div>
        <div className="col-lg-4 ">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-4 mb-2">
              <input
                type="text"
                placeholder="Your name...."
                className="w-100 input-area "
              />
            </div>
            <div className="col-lg-5 col-sm-4 mb-2">
              <input
                type="text"
                placeholder="Your email...."
                className="w-100 input-area "
              />
            </div>
            <div className="col-lg-10 col-sm-8 d-flex justify-content-center ">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your message"
                className="w-100 textarea-clr"
              ></textarea>
            </div>
            
          </div>
          <div className="btn d-flex justify-content-center">
          <button type="button" class="btn btn-success last-btn ">Success</button>
          </div>
          
        </div>
      </div>

      

    </div>
  );
};

export default Contact;
