const SpecialsPanel = ({ imageUrl, title, price, description }) => {
  return (
    <article>
      <div className="specials-panel-container box-shadow animate-highlight">
        <div className="specials-panel-image-container">
          <figure>
            <img
              src={imageUrl}
              alt={title}
              className="specials-panel-image box-shadow"
            />
          </figure>
        </div>
        <div className="specials-panel-title">
          <div>
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="specials-panel-price">
            <span className="highlight-text">{price}</span>
          </div>
        </div>
        <div>
          <p className="card-text">{description}</p>
        </div>
        <div className="specials-panel-footer">
          <a href="localhost:3000" className="highlight-text anchor-tag">
            Order a delivery
          </a>
          <span className="material-icons" style={{ fontSize: "26px" }}>
            pedal_bike
          </span>
        </div>
      </div>
    </article>
  );
};

export default SpecialsPanel;
