import React, { Component } from "react";
import Navbar from "./Home/Navbar";
import Jumbotron from "./Home/Jumbotron";
import Footer from "./Home/Footer";
import Products from "./Home/Products";
import Statistics from "./Home/Statistics";
import Banner from "./Home/Banner";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Products />
        <Statistics />
        <Banner />
        <Footer />
      </div>
    );
  }
}
