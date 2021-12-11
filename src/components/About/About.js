import React from "react";
import Fd from "../Home/Fd/Fd";

const About = () => {
  const bg = {
    background: "url(https://i.ibb.co/qxJNKn0/banner-bg1.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "300px",
  };
  return (
    <div>
      <div style={{ ...bg }} className="banner">
        <h2 className="banner-text">About Us</h2>
      </div>

      <div className="row w-75 mx-auto py-5">
        <div className="col-md-7 col-12">
          <img className="img-fluid" src="https://i.ibb.co/jLD3GnV/agency-about-img.jpg" alt="" />
        </div>
        <div className="col-md-5 col-12 d-flex justify-content-center align-items-center">
          <div>
            <p style={{ background: "#F5DFFD", width: "100px", borderRadius: "30px" }} className=" py-1 px-3">
              <small> About Us</small>
            </p>
            <h2>Engaging New Audiences Through Smart Approach</h2>
            <div className="line">
              <div className="lineAnimation"></div>
            </div>
            <p className="my-3">
              To keep up with the requirements of the job, the entrepreneur has to know something of everything. <br /> <br /> This can be
              accomplished by being involved with the right people who’ve had enough practice and excellent work experience, by working with the right
              people such as professionals/consultants, or even by outsourcing some business functions to a third-party provider.
            </p>
            <button className="primary-btn1 mx-0">Discover More</button>
          </div>
        </div>
      </div>
      <Fd />
      <div className="container mx-auto py-5">
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/H7C2zsM/partner-hover1.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/1q9B6BV/partner-hover2.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/6BXtfvx/partner-hover3.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/mBMcw8r/partner-hover6.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/kGYk6X8/partner-hover7.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/9YFKcsh/partner-hover10.png" alt="" />
      </div>
    </div>
  );
};

export default About;
