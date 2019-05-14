import React, { Component } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import MainBody from "./MainBody/MainBody";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";

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
