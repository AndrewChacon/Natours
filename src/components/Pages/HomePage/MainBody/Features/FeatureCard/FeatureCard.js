import React from "react";

const FeatureCard = props => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={`feature-box__icon ${props.icon}`} />
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.title}
        </h3>
        <p className="feature-box__text">{props.text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
