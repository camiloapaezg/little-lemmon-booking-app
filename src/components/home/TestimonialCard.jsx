import React from "react";

const Stars = (rate) => {
  let result = [];
  for (let i = 0; i < rate; i++) {
    result.push(<span className="material-icons">star_rate</span>);
  }
  return result;
};

const TestimonialCard = ({ rate, imgSrc, name, review }) => {
  return (
    <div
      id="testimonial-card-container"
      className="box-shadow animate-highlight"
    >
      <div id="testimonial-card-rating">
        {React.Children.map(Stars(rate), (star) => star)}
      </div>
      <div id="testimonial-card-image">
        <figure>
          <img src={imgSrc} alt="A person" />
        </figure>
      </div>
      <div id="testimonial-card-name">
        <h3 className="card-title">{name}</h3>
      </div>
      <div id="testimonial-card-review">
        <q className="card-text">{review}</q>
      </div>
    </div>
  );
};

export default TestimonialCard;
