import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, desc } = service;
  return (
    <div>
      <Col>
        <Card style={{ border: "none", boxShadow: "1px 2px 10px rgba(0,0,0,0.05)", cursor: "pointer" }} className="h-100 card-service style-card">
          <Card.Img style={{ width: "238px", height: "180px" }} variant="top" className="img-fluid mx-auto  d-block  my-5 card-image" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 100)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
