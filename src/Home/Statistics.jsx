import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class customNavbar extends Component {
  details = [
    {
      icon: "assets/icons/homepage_community_followers.svg",
      text: "5000",
      addText: "+",
      moreText: "followers",
    },
    {
      icon: "assets/icons/homepage_community_globe.svg",
      text: "2000",
      addText: "+",
      moreText: "contributers",
    },
    {
      icon: "assets/icons/homepage_community_agency.svg",
      text: "1000K",
      addText: "",
      moreText: "partners",
    },
    {
      icon: "assets/icons/youtube-light.png",
      text: "60M",
      addText: "",
      moreText: "subscribers",
    },
    {
      icon: "assets/icons/twitter-light.png",
      text: "80M",
      addText: "+",
      moreText: "tweets",
    },
    {
      icon: "assets/icons/linkedin-light.png",
      text: "700K",
      addText: "+",
      moreText: "followers",
    },
  ];

  render() {
    return (
      <div className="statistics">
        <div className="container mx-auto p-2">
          <div className="statistics-header m-4">
            Nam tempor tortor vitae est molestie, vitae fringilla leo finibus
            vulputate non blandit a, auctor at ante.
          </div>
          <div className="statistics-body m-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            nunc volutpat, auctor ipsum quis, mattis dolor. In euismod metus
            est. Morbi vestibulum metus vel pharetra malesuada. Suspendisse
            euismod aliquam libero, id lobortis enim pretium ac. Cras molestie
            congue lorem, vel lobortis mi elementum eu. Phasellus aliquet
            viverra nunc, a consequat quam rhoncus non. Suspendisse fringilla
            nisl et nisl dapibus rhoncus.
          </div>
          <Row className="m-5">
            {this.details.map((value, index) => (
              <Col
                md="4"
                className={
                  "statistics-col p-3 text-center statistics-item-" +
                  String(index)
                }
              >
                <div className="">
                  <img
                    src={value.icon}
                    className="statistics-icon"
                    alt=""
                  ></img>
                  <div>
                    <span className="statistics-text">{value.text}</span>
                    <span className="statistics-addText">{value.addText}</span>
                  </div>
                  <div className="statistics-moreText">{value.moreText}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
