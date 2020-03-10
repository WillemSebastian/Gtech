import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div
        className="section section-examples"
        data-background-color="black"
        id="section-example"
      >
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
            </div>
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile.jpg")}
                ></img>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
