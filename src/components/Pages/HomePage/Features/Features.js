import React from "react";
import FeatureCard from "./FeatureCard/FeatureCard";

const Features = () => {
  return (
    <section className="section-features" id="benefits">
      <div className="row">
        <FeatureCard
          icon="fas fa-globe-americas"
          title="explore the world"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          rem."
        />
        <FeatureCard
          icon="far fa-compass"
          title="Meet nature"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          rem."
        />
        <FeatureCard
          icon="far fa-map"
          title="Find your way"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          rem."
        />
        <FeatureCard
          icon="far fa-heart"
          title="Live a healthier life"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          rem."
        />
      </div>
    </section>
  );
};

export default Features;
