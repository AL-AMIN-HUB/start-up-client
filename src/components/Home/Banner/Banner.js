import React from "react";

const banner = {
  backgroundImage: "url(https://i.ibb.co/xGbGtY6/banner-bg.jpg)",
  backgroundSize: "cover",
  height: " 950px",
};
const Banner = () => {
  return (
    <>
      <div style={banner} className="d-flex justify-content-between align-items-center">
        <div className="row w-75 mx-auto">
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div>
                <h1>World’s Leading AI & Machine Learning Company</h1>
                <p className="text-muted my-5">
                  Entrepreneurs and startup founders wear many hats because it is expected of them. They start out with organizing the company.
                </p>
                <button className="primary-btn1">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 text-end mt-5 mt-md-0">
            <img className="img-fluid" src="https://i.ibb.co/ZXrgrL4/ml-main-pic.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/H7C2zsM/partner-hover1.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/1q9B6BV/partner-hover2.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/6BXtfvx/partner-hover3.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/mBMcw8r/partner-hover6.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/kGYk6X8/partner-hover7.png" alt="" />
        <img className="img-fluid mx-5 my-5 img-logo" style={{ cursor: "pointer" }} src="https://i.ibb.co/9YFKcsh/partner-hover10.png" alt="" />
      </div>
    </>
  );
};

export default Banner;
