import React, { Component } from "react";
import Navbar from "./Home/Navbar";
import Jumbotron from "./Home/Jumbotron";
import Footer from "./Home/Footer";
import Products from "./Home/Products";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Products />
        <Footer />
      </div>
    );
  }
}
