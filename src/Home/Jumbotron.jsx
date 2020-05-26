import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default class customJumbotron extends Component {
  render() {
    return (
      <Jumbotron className="push-spaces">
        <div className="overlay"></div>
        <div className="container inner">
          <span className="p-4">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </span>
          <p>
            <Button variant="primary" size="lg">
              <span className="m-4"> Learn more</span>
            </Button>
          </p>
        </div>
      </Jumbotron>
    );
  }
}
