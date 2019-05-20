import React from "react";
import CompositionImage1Large from "./nat-1-large.jpg";
import CompositionImage1Normal from "./nat-1.jpg";
import CompositionImage2Large from "./nat-2-large.jpg";
import CompositionImage2Normal from "./nat-2.jpg";
import CompositionImage3Large from "./nat-3-large.jpg";
import CompositionImage3Normal from "./nat-3.jpg";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for advanturous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            unde sapiente architecto temporibus. Amet voluptate molestiae fugiat
            similique sunt fugit recusandae repellendus provident id quaerat, in
            ullam, iure optio ipsa!
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never had before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            voluptate sapiente placeat deserunt ipsam quisquam tempore possimus
            est expedita atque facilis delectus quaerat, in, quos ipsum minima
            accusamus iure quam.
          </p>

          <a href="javascript:void(0)" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${CompositionImage1Normal} 300w, ${CompositionImage1Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={CompositionImage1Normal}
            />
            <img
              srcSet={`${CompositionImage2Normal} 300w, ${CompositionImage2Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={CompositionImage2Normal}
            />
            <img
              srcSet={`${CompositionImage3Normal} 300w, ${CompositionImage3Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={CompositionImage3Normal}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
