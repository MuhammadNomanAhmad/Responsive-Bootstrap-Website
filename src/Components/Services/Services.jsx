import React from "react";
import "./services.css";
import img1 from "../../Assets/growth.png";
import img2 from "../../Assets/mint.png";
import img3 from "../../Assets/mystery-box.png";
import img4 from "../../Assets/nft-market.png";

const Services = () => {
  return (
    <div className="container-fluid bg-light pb-5 ">
      <div className="row  ">
        <div className="col-12   text-center  my-sm-5  ">
          <h2 className=" fw-bold ">WHAT WE DO</h2>
          <hr className="mx-auto w-25 fw-bold fw-bolder" />
        </div>
      </div>

      <div className="row crd-center  justify-content-evenly align-items-center   pb-5">
        <div className="col-lg-3 col-sm-5  ">
          <div className="service-box text-center  ">
            <img src={img1} alt="" className="my-3" />
            <h6>Easy Customization</h6>
            <p>
              Meteor is free HTML website template by tooplate.Feel FRee to use
              this layout for your Project 
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-5  ">
          <div className="service-box text-center  ">
            <img src={img2} alt="" className="my-3" />
            <h6>Creative Ideas</h6>
            <p className="card-para">
              Meteor is free HTML website template by tooplate.Feel FRee to use
              this layout for your Project
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-5  ">
          <div className="service-box text-center  ">
            <img src={img3} alt="" className="my-3" />
            <h6>Good Profit</h6>
            <p className="card-para">
              Meteor is free HTML website template by tooplate.Feel FRee to use
              this layout for your Project
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-5  ">
          <div className="service-box text-center  ">
            <img src={img4} alt="" className="my-3" />
            <h6>Open To Public</h6>
            <p className="card-para">
              Meteor is free HTML website template by tooplate.Feel FRee to use
              this layout for your Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
