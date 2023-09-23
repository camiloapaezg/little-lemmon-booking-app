import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div id="section-testimonials-container">
      <div>
        <h2 id="section-testimonials-title" className="subtitle">
          Testimonials
        </h2>
      </div>
      <div id="section-testimonials-items">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
