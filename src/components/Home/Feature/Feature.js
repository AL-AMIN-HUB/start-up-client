import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Feature = () => {
  return (
    <div className="py-5 my-5">
      <div className="text-center pb-5">
        <p style={{ background: "#F5DFFD", width: "150px", borderRadius: "30px" }} className=" py-1 px-2 mx-auto">
          <small> What We Offer</small>
        </p>
        <h2>Our Featured Solutions</h2>
        <div className="line">
          <div className="lineAnimation"></div>
        </div>
        <p>
          For technology startups, the founder is also sometimes the CTO and / or lead programmer, <br /> as well as the accounting and finance
          person.
        </p>
      </div>
      <Row xs={1} sm={1} md={4} className="g-4 container mx-auto">
        <Col>
          <Card style={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", cursor: "pointer" }} className="img-card border-0 py-3">
            <Card.Img
              variant="top"
              style={{ width: "80px", padding: "10px", boxShadow: " inset 1px 2px 10px rgba(0,0,0,0.05)", borderRadius: "50%" }}
              className="img-fluid mx-auto d-block card-img"
              src="https://i.ibb.co/RYZZTYr/icon4-1.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Robotic Automation</Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  This blog discusses common problems encountered by startups and their online presence. The articles on QuickSprout are...
                </small>
              </Card.Text>{" "}
              <Card.Text>
                {" "}
                <i className="fas fa-plus-circle"></i> Learn More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card style={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", cursor: "pointer" }} className="img-card border-0 py-3">
            <Card.Img
              variant="top"
              style={{ width: "80px", padding: "10px", boxShadow: " inset 1px 2px 10px rgba(0,0,0,0.05)", borderRadius: "50%" }}
              className="img-fluid mx-auto d-block card-img"
              src="https://i.ibb.co/wKF5jWQ/icon5-1.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Cognitive Automation</Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  This blog discusses common problems encountered by startups and their online presence. The articles on QuickSprout are...
                </small>
              </Card.Text>{" "}
              <Card.Text>
                {" "}
                <i className="fas fa-plus-circle"></i> Learn More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", cursor: "pointer" }} className="img-card border-0 py-3">
            <Card.Img
              variant="top"
              style={{ width: "80px", padding: "10px", boxShadow: " inset 1px 2px 10px rgba(0,0,0,0.05)", borderRadius: "50%" }}
              className="img-fluid mx-auto d-block card-img"
              src="https://i.ibb.co/J5yFSKX/icon6-1.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Cognitive Engagement</Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  This blog discusses common problems encountered by startups and their online presence. The articles on QuickSprout are...
                </small>
              </Card.Text>{" "}
              <Card.Text>
                {" "}
                <i className="fas fa-plus-circle"></i> Learn More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card style={{ boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", cursor: "pointer" }} className="img-card border-0 py-3">
            <Card.Img
              variant="top"
              style={{ width: "80px", padding: "10px", boxShadow: " inset 1px 2px 10px rgba(0,0,0,0.05)", borderRadius: "50%" }}
              className="img-fluid mx-auto d-block card-img"
              src="https://i.ibb.co/z5mGkmp/icon7.png"
            />
            <Card.Body className="text-center">
              <Card.Title>Security & Surveillance</Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  This blog discusses common problems encountered by startups and their online presence. The articles on QuickSprout are...
                </small>
              </Card.Text>{" "}
              <Card.Text>
                {" "}
                <i className="fas fa-plus-circle"></i> Learn More
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
