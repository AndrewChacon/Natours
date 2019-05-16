import React, { Component } from "react";

export default class NavigationBar extends Component {
  state = {
    isToggleOn: false
  };

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(this.state.isToggleOn);
  };

  render() {
    return (
      <div className="navigation">
        <input
          type="checkbox"
          name=""
          id="navi-toggle"
          className="navigation__checkbox"
          onClick={this.handleClick}
          checked={this.state.isToggleOn}
          readOnly
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div
          // className={`wrapper searchDiv ${
          //   this.state.something ? "my-cla0ss " : ""
          // } ${this.state.somethingElse ? "my-other-class " : ""}`}
          className={`
          navigation__background
            ${
              this.state.isToggleOn
                ? "navigation__background--showing"
                : "navigation__background--hidden"
            }
          `}
        >
          &nbsp;
        </div>
        <nav
          className={`
          navigation__nav
            ${
              this.state.isToggleOn
                ? "navigation__nav--showing"
                : "navigation__nav--hidden"
            }
          `}
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#about"
                className="navigation__link"
                onClick={this.handleClick}
              >
                About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#benefits"
                className="navigation__link"
                onClick={this.handleClick}
              >
                Your Benefits
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#section-tours"
                className="navigation__link"
                onClick={this.handleClick}
              >
                Popular Tours
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#stories"
                className="navigation__link"
                onClick={this.handleClick}
              >
                Stories
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#book"
                className="navigation__link"
                onClick={this.handleClick}
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
