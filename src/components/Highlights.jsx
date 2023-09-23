import SpecialsPanel from "./SpecialsPanel";
import { specialsData } from "../data/specials";

const Highlights = () => {
  const data = specialsData();
  return (
    <div id="section-highlights-container" className="section-column">
      <div id="section-highlights-title">
        <div>
          <h2 className="subtitle">Specials</h2>
        </div>
        <div>
          <button type="button" className="button-hero-section button-text">
            Online Menu
          </button>
        </div>
      </div>
      <div id="section-highlights-cards">
        {data.map((special) => (
          <SpecialsPanel
            key={special.title}
            imageUrl={special.imageUrl}
            title={special.title}
            price={special.price}
            description={special.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
