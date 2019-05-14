import React from "react";
import NormalLogo1 from "./logo-green-1x.png";
import NormalLogo2 from "./logo-green-2x.png";
import SmallLogo1 from "./logo-green-small-1x.png";
import SmallLogo2 from "./logo-green-small-2x.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${SmallLogo1} 1x, ${SmallLogo2} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${NormalLogo1} 1x, ${NormalLogo2} 2x`}
            alt="Full logo"
            src={NormalLogo2}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="https://google.com" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="javascript:void(0)" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="javascript:void(0)" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="javascript:void(0)" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="javascript:void(0)" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by
            <a href="javascript:void(0)" className="footer__link">
              Andrew Chacon
            </a>
            for his online course
            <a href="javascript:void(0)" className="footer__link">
              Advanced CSS and SASS
            </a>
            Copyright &copy; by Andrew Chacon, you are 100% allowed to use this
            webpage for both personal and commerical use, but not to claim it as
            your own design. A credit to the original author andrew chacon, is
            of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
