import React from "react";
import CountUp from "react-countup";
import "./Fd.css";
const Fd = () => {
  const bg = {
    backgroundImage: "url(https://i.ibb.co/bJSFRVb/map.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    padding: "100px 0 50px 0",
  };
  return (
    <div style={bg} className="text-center container mx-auto">
      <div>
        <h2>
          We Always Try To Understand Users <br /> Expectation
        </h2>
        <div className="line">
          <div className="lineAnimation"></div>
        </div>
        <p className="my-3">
          <small className="text-muted">
            Reporting on all things business and tech, TechCrunch’s website <br /> has a ton of information for startup founders.
          </small>
        </p>
      </div>
      <div className="row mt-5 pt-2">
        <div className="col-md-3 col-6">
          <h2 style={{ color: "#44CE6F", fontWeight: "500", lineHeight: "25px" }}>
            <CountUp start={1} end={193} duration={3} />k
          </h2>
          <p>
            <small className="text-muted">Downloaded</small>
          </p>
        </div>{" "}
        <div className="col-md-3 col-6">
          <h2 style={{ color: "#44CE6F", fontWeight: "500", lineHeight: "25px" }}>
            {" "}
            <CountUp start={1} end={27} duration={3} />k
          </h2>
          <p>
            <small className="text-muted">Feedback</small>
          </p>
        </div>{" "}
        <div className="col-md-3 col-6">
          {" "}
          <h2 style={{ color: "#44CE6F", fontWeight: "500", lineHeight: "25px" }}>
            {" "}
            <CountUp start={1} end={700} duration={3} />+
          </h2>
          <p>
            <small className="text-muted">Workers</small>
          </p>
        </div>{" "}
        <div className="col-md-3 col-6">
          <h2 style={{ color: "#44CE6F", fontWeight: "500", lineHeight: "25px" }}>
            {" "}
            <CountUp start={1} end={130} duration={3} />+
          </h2>
          <p>
            <small className="text-muted">Contributors</small>
          </p>
        </div>
      </div>
      <div className="row contact-div">
        <div className="col-12 p-3 d-flex justify-content-around align-items-center" style={{ border: "1px dotted lightgrey" }}>
          <div className="text-start">
            <h3>Have any question about us?</h3>
            <p className="text-muted">Don't hesitate to contact us</p>
          </div>
          <div>
            <button className="primary-btn2">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fd;
