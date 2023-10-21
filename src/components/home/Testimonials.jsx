import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  const data = testimonialsData();

  return (
    <div id="section-testimonials-container">
      <div>
        <h2 id="section-testimonials-title" className="subtitle">
          Testimonials
        </h2>
      </div>
      <div id="section-testimonials-items">
        {data.map((item) => {
          return (
            <TestimonialCard
              key={item.name}
              rate={item.rate}
              imgSrc={item.imgSrc}
              name={item.name}
              review={item.review}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
