import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default class customNavbar extends Component {
  products = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
    {
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    },
  ];
  render() {
    return (
      <div className="container">
        <div className="p-4 center">
          <Row>
            <Col lg="4" md="6">
              <div className="p-5   ">
                <span className="marketing-header">Praesent libero</span>
                <div className="marketing-body pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Integer nec odio. Praesent libero.
                </div>
              </div>
            </Col>
            {this.products.map((value, index) => {
              return (
                <Col lg="4" md="6">
                  <Card
                    className="p-2 m-2 mb-4 mx-auto"
                    style={{ width: "18rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://loremflickr.com/640/360"
                    />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{value.description} </Card.Text>
                      <Button variant="primary">Learn More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
