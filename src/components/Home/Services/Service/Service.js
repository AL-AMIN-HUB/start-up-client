import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, desc, _id } = service;
  return (
    <div>
      <Col>
        <Card style={{ border: "none", boxShadow: "1px 2px 10px rgba(0,0,0,0.05)", cursor: "pointer" }} className="h-100 card-service">
          <Card.Img style={{ width: "238px", height: "180px" }} variant="top" className="img-fluid mx-auto  d-block  my-5" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 100)}</Card.Text>
            <Link to={`/singleService/${_id}`} className="link-button">
              <Button className="primary-btn3 border-0 text-capitalize ms-0">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
