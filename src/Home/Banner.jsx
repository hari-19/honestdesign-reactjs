import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class Banner extends Component {
  render() {
    return (
      <div className="container">
        <Row className="flex-row-reverse">
          <Col md="4" className="mx-auto">
            <img
              src="assets/Variation-3@2x.png"
              className="banner-img p-4 m-4 text-center"
              alt=""
            ></img>
          </Col>
          <Col md="8">
            <div className="p-3 m-3 banner-content">
              <div className="banner-header pb-4">
                Start Growing With HubSpot Today
              </div>
              <div className="banner-text">
                Mauris non est non purus porta gravida eu non velit. Nam rutrum
                felis dignissim, tincidunt lectus in, dictum justo. Vivamus ut
                dignissim ante, aliquam placerat urna. Fusce vulputate urna
                orci, vitae ornare orci dapibus eget. Proin ac mauris nec justo
                gravida ultrices. Maecenas varius sagittis pretium. Maecenas
                hendrerit nulla augue, vel semper diam pulvinar a.
              </div>
              <Button className="mt-5 px-5 py-3 ">Get Started</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
