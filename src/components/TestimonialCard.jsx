const TestimonialCard = () => {
  return (
    <div
      id="testimonial-card-container"
      className="box-shadow animate-highlight"
    >
      <div id="testimonial-card-rating">
        <h5 className="card-title">five stars</h5>
      </div>
      <div id="testimonial-card-image">
        <figure>
          <img src="" alt="A person" />
        </figure>
      </div>
      <div id="testimonial-card-name">
        <h5 className="card-title">Name</h5>
      </div>
      <div id="testimonial-card-review">
        <q className="card-text">It was awesome!</q>
      </div>
    </div>
  );
};

export default TestimonialCard;
