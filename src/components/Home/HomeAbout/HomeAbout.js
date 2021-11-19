import React from "react";

const HomeAbout = () => {
  return (
    <div>
      <div className="row w-75 mx-auto">
        <div className="col-md-7 col-12">
          <img className="img-fluid" src="https://i.ibb.co/F6fT7pK/about4.png" alt="" />
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
    </div>
  );
};

export default HomeAbout;
