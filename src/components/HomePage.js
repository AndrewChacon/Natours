import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import Popup from "./Popup";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Header />
        <MainBody />
        <Footer />
        <Popup />
      </div>
    );
  }
}
