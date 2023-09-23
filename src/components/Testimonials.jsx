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
        <TestimonialCard rate={5}/>
        <TestimonialCard rate={1}/>
        <TestimonialCard rate={3}/>
        <TestimonialCard rate={2}/>
      </div>
    </div>
  );
};

export default Testimonials;
