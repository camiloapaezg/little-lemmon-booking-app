import image1 from "../../assets/about-image-1.png";
import image2 from "../../assets/about-image-2.png";

const About = () => {
  return (
    <div id="section-about-container">
      <div id="section-about-left">
        <div>
          <h2 className="subtitle">Little Lemon</h2>
          <h3 className="button-text">Chicago</h3>
        </div>
        <div>
          <p className="card-text">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla non eleifend nisl. Etiam sollicitudin
            elit ut elit porta semper. Curabitur rhoncus libero scelerisque
            nulla faucibus consequat. Praesent vitae leo dapibus, laoreet lacus
            non, dictum sapien. Sed congue hendrerit nulla vel elementum.
          </p>
        </div>
      </div>
      <div id="section-about-right">
        <div id="section-about-image-top">
          <img
            src={image1}
            alt="man serving food"
            className="section-about-image"
          />
        </div>
        <div id="section-about-image-bottom">
          <img
            src={image2}
            alt="grilled fish"
            className="section-about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
