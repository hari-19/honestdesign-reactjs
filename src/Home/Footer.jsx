import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/Footer.css";

export default class Footer extends Component {
  contact = {
    address: "Hari Hara Sudhan, Someplace, Somewhere, India",
    email: "hari19@outlook.in",
    phone: "+91-12345678",
    fax: "+91-1234567890",
  };
  socialUrl = {
    facebook: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  };
  quickLinks = [
    {
      text: "Contact Us",
      link: "",
    },
    {
      text: "FAQ",
      link: "",
    },
    {
      text: "Sitemap",
      link: "",
    },
    {
      text: "Rules and Regulations",
      link: "",
    },
    {
      text: "Privacy Policy and Terms of Use",
      link: "",
    },
  ];
  render() {
    return (
      <div className="w-100 bg-dark text-white p-5">
        <Container>
          <Row>
            <Col md="4">
              <div id="quickLinksWrapper">
                <strong className="d-block mb-3 mt-3 titleFooter">
                  Quick Links
                </strong>
                <ul className="p-0">
                  {this.quickLinks.map((value, index) => {
                    return (
                      <li key={index} className="p-1">
                        <a
                          className="text-decoration-none text-reset"
                          href={value.link}
                        >
                          {value.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col md="4">
              <div>
                <strong className="d-block mb-3  titleFooter mt-3">
                  Social Links
                </strong>
                <div className="iconsWrapper">
                  <a
                    className="d-inline-block ml-2 p-1
                     socialIcon"
                    id="facebook"
                    href={this.socialUrl.facebook}
                  >
                    <img src="assets/icons/facebook-light.png" alt=""></img>
                  </a>
                  <a
                    className="d-inline-block ml-2 p-1 socialIcon"
                    id="linkedin"
                    href={this.socialUrl.linkedin}
                  >
                    <img src="assets/icons/linkedin-light.png" alt=""></img>
                  </a>
                  <a
                    className="d-inline-block ml-2 p-1 socialIcon"
                    id="twitter"
                    href={this.socialUrl.twitter}
                  >
                    <img src="assets/icons/twitter-light.png" alt=""></img>
                  </a>
                  <a
                    className="d-inline-block ml-2 p-1 socialIcon"
                    id="youtube"
                    href={this.socialUrl.youtube}
                  >
                    <img src="assets/icons/youtube-light.png" alt=""></img>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div>
                <strong className="d-block mb-3 mt-3 titleFooter">
                  Contact Us
                </strong>
                <div>
                  <p>{this.contact.address}</p>
                  <p>
                    <strong>Email : </strong>
                    {this.contact.email}
                  </p>
                  <p>
                    <strong>Phone : </strong>
                    {this.contact.phone}
                  </p>
                  <p>
                    <strong>Fax : </strong>
                    {this.contact.fax}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center mt-3">
                Copyright &copy; 2020 Hari Hara Sudhan
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
