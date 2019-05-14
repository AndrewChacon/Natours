import React from "react";

import StoryImage1 from "./nat-8.jpg";
import StoryImage2 from "./nat-9.jpg";

import Video1 from "./video.mp4";
import Video2 from "./video.webm";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={Video1} type="video/mp4" />
          <source src={Video2} type="video/mp4" />
          Your browser is not supported
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary" id="stories">
          We make people genuinely happy
        </h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={StoryImage1}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              facere inventore quam odit consequuntur sapiente, officia beatae,
              illum cupiditate iste rerum ut magni magnam. Saepe beatae
              excepturi hic dolor ratione laboriosam nostrum veniam quide m
              sequi atque sapiente dolorum inventore, ab, corrupti officiis.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src={StoryImage2}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Willson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completly different now
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              dolor accusantium deleniti cupiditate eveniet ad nobis, suscipit
              dolorum possimus architecto similique quaerat enim quidem ex modi
              aliquam temporibus. Error totam inventore modi nihil quam
              consectetur nemo deserunt beatae molestiae?
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="javascript:void(0)" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
