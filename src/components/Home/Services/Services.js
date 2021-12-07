import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-5 history-card" style={{ padding: "100px 0", marginTop: "80px" }}>
      <div className="text-center pb-5">
        <p style={{ background: "#F5DFFD", width: "150px", borderRadius: "30px" }} className=" py-1 px-2 mx-auto">
          <small> Our Solutions</small>
        </p>
        <h2>Our Services</h2>
        <div className="serviceLine">
          <div className="lineAnimation"></div>
        </div>
        <p className="text-muted">
          Startup Founders or Marketing Heads may not have the time or expertise to get the most out of blogging. <br /> Outsourcing your blog writing
          to a professional service will save you a lot of time, and can prove to be a worthy investment.
        </p>
      </div>
      <div>
        <Row xs={1} sm={1} md={3} className="g-4 container mx-auto">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
