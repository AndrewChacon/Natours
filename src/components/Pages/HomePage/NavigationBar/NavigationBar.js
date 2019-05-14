import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        name=""
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              About Natous
            </a>
          </li>
          <li className="navigation__item">
            <a href="#benefits" className="navigation__link">
              Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-tours" className="navigation__link">
              Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#stories" className="navigation__link">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#book" className="navigation__link">
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
