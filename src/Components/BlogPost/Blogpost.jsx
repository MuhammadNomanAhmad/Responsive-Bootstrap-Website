import React from "react";
import "./blogpost.css";
// import blogpostimg1 from '../../Assets/blogpostimg1.jpg'
// import blogpostimg2 from '../../Assets/blogpostimg2.jpg'
// import blogpostimg3 from '../../Assets/blogpostimg3.jpg'

const Blogpost = () => {
  return (
    <div className="container-fluid bg-color">
      <div className="row g-0">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="blogpost  text-white ">
            <h6 className="fw-bold mt-2 ">OUR BLOG POSTS</h6>
            <hr className="hr-line mx-auto mt-0" />
          </div>
        </div>
      </div>
      {/* Side Image 1 */}

      <div className="row justify-content-center m-0 ">
        <div className="col-lg-4 ">
          <div className="bg-img1 d-flex align-items-end">
            <div className="bgimg1-text text-white   ">
              <h4>Delicious Food Served</h4>
              <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
        {/* Side Image 2 & 3 */}
        <div className="col-lg-4 ">
          <div className="bg-img2 d-flex flex-column  justify-content-end text-white">
            <div className="bgimg2-text ">
            <h4>Creative & Clean Workspace</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className="bg-img3 d-flex align-items-end">
            <div className="bgimg3-text text-white">
              <h4>Crashed Plane Captured</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
