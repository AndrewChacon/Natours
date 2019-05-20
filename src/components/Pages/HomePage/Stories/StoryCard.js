import React from "react";

const StoryCard = props => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img
            src={props.image}
            alt="Person on a tour"
            className="story__img"
          />
          <figcaption className="story__caption">{props.client}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.caption}
          </h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
