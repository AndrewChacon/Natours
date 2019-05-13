import React from "react";
import { Link } from "react-router-dom";

import CompositionImage1Large from "../img/nat-1-large.jpg";
import CompositionImage1Normal from "../img/nat-1.jpg";
import CompositionImage2Large from "../img/nat-2-large.jpg";
import CompositionImage2Normal from "../img/nat-2.jpg";
import CompositionImage3Large from "../img/nat-3-large.jpg";
import CompositionImage3Normal from "../img/nat-3.jpg";

import StoryImage1 from "../img/nat-8.jpg";
import StoryImage2 from "../img/nat-9.jpg";

import Video1 from "../img/video.mp4";
import Video2 from "../img/video.webm";

export default function MainBody() {
  return (
    <main>
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
              unde sapiente architecto temporibus. Amet voluptate molestiae
              fugiat similique sunt fugit recusandae repellendus provident id
              quaerat, in ullam, iure optio ipsa!
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never had before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              voluptate sapiente placeat deserunt ipsam quisquam tempore
              possimus est expedita atque facilis delectus quaerat, in, quos
              ipsum minima accusamus iure quam.
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
      <section className="section-features" id="benefits">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Explore the world
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Meet nature
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Find your way
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live a healthier life
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, rem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary" id="section-tours">
            Most popular tours
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    the sea explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    the forest hiker
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>7 day tour</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$497</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    the snow adventurer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>5 day tour</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$897</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          {/* #book */}
          <Link to="/about">
            <a className="btn btn--green">Discover all tours</a>
          </Link>
        </div>
      </section>
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
                facere inventore quam odit consequuntur sapiente, officia
                beatae, illum cupiditate iste rerum ut magni magnam. Saepe
                beatae excepturi hic dolor ratione laboriosam nostrum veniam
                quide m sequi atque sapiente dolorum inventore, ab, corrupti
                officiis.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid, dolor accusantium deleniti cupiditate eveniet ad nobis,
                suscipit dolorum possimus architecto similique quaerat enim
                quidem ex modi aliquam temporibus. Error totam inventore modi
                nihil quam consectetur nemo deserunt beatae molestiae?
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

      <section className="section-book" id="book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group u-margin-bottom-medium">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label htmlFor="small" className="form__radio-label">
                      <span className="form__radio-button" /> Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label htmlFor="large" className="form__radio-label">
                      <span className="form__radio-button" /> Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
