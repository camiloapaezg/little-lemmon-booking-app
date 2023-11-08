import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div id="section-hero-container">
      <div id="section-hero-left">
        <div>
          <h1 id="section-hero-title" className="display-title">
            Little Lemon
          </h1>
        </div>
        <div>
          <h2 id="section-hero-subtitle" className="subtitle">
            Chicago
          </h2>
        </div>
        <div>
          <p id="section-hero-description" className="lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. We would love to
            have you in our restaurant. Welcome! Now with new reservation
            system! Reserve your table by clicking on the button below!
          </p>
        </div>
        <div id="section-hero-button">
          <button
            type="button"
            className="button-yellow button-text"
            onClick={() => navigate("/book-a-table")}
          >
            Reserve a table
          </button>
        </div>
      </div>
      <div id="section-hero-right">
        <figure>
          <img
            id="section-hero-image"
            src={heroImage}
            alt="A hero section"
            className="box-shadow"
          />
        </figure>
      </div>
    </div>
  );
};

export default HeroSection;
