import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const History = () => {
  return (
    <div style={{ margin: "100px 0" }} className="container mx-auto text-center">
      <div>
        <h2>Our Recent Story</h2>
        <div className="line">
          <div className="lineAnimation"></div>
        </div>
        <p className="mt-3 mb-5">
          <small className="text-muted">
            On Startups. This one isn't just about any startup topic, it specifically focuses on software startups. <br /> Young Upstarts. The content
            here delves ...
          </small>
        </p>
      </div>
      <Row xs={1} sm={1} md={3} className="g-4 text-start">
        <Col>
          <Card style={{ cursor: "pointer" }} className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/hCdg4NN/blog9.jpg" />
            <Card.Body className="history-card">
              <Card.Title>
                <p>
                  <small className="text-muted"> Admin / 19 Nov 2021</small>
                </p>
                <h4>Making Peace With The Feast Or Famine Of Freelancing</h4>
              </Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  Ideas, Advice & insights from the Techstars network. Founded in 2006, Techstars began with three simple ideas-entrepreneurs.
                </small>
                <p style={{ cursor: "pointer" }} className="mt-2 text-dark fw-bold">
                  <small>
                    Read Story <i className="fas fa-plus"></i>
                  </small>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col>
          <Card style={{ cursor: "pointer" }} className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/fGQ6LBC/blog10.jpg" />
            <Card.Body className="history-card">
              <Card.Title>
                <p>
                  <small className="text-muted"> Admin / 19 Nov 2021</small>
                </p>
                <h4>I Used The Web For A Day On A 50 MB Budget</h4>
              </Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  Ideas, Advice & insights from the Techstars network. Founded in 2006, Techstars began with three simple ideas-entrepreneurs.
                </small>
                <p style={{ cursor: "pointer" }} className="mt-2 text-dark fw-bold">
                  <small>
                    Read Story <i className="fas fa-plus"></i>
                  </small>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ cursor: "pointer" }} className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/q7dZpjJ/blog11.jpg" />
            <Card.Body className="history-card">
              <Card.Title>
                <p>
                  <small className="text-muted"> Admin / 19 Nov 2021</small>
                </p>
                <h4>Here are the 5 most telling signs of micromanagement</h4>
              </Card.Title>
              <Card.Text>
                <small>
                  {" "}
                  Ideas, Advice & insights from the Techstars network. Founded in 2006, Techstars began with three simple ideas-entrepreneurs.
                </small>
                <p style={{ cursor: "pointer" }} className="mt-2 text-dark fw-bold">
                  <small>
                    Read Story <i className="fas fa-plus"></i>
                  </small>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>ss
      </Row>
    </div>
  );
};

export default History;
