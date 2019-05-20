import React, { Component } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import About from "./About/About";
import Features from "./Features/Features";
import Tours from "./Tours/Tours";
import Stories from "./Stories/Stories";
import Form from "./Form/Form";

export default class HomePage extends Component {
  state = {
    isToggleOn: false
  };

  handlePopupToggle = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(this.state.isToggleOn);
  };
  render() {
    return (
      <div>
        <NavigationBar />
        <Header />
        <About />
        <Features />
        <Tours handlePopupToggle={this.handlePopupToggle} />
        <Stories />
        <Form />
        <Footer />
        <Popup
          isToggleOn={this.state.isToggleOn}
          handlePopupToggle={this.handlePopupToggle}
        />
      </div>
    );
  }
}
