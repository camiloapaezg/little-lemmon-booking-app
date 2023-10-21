const SliderInput = (props) => {
  return (
    <div className="slide-container">
      <input
        type="range"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        min={props.min}
        max={props.max}
      />
      <span className="slider-digit highlight-text">{props.value}</span>
    </div>
  );
};

export default SliderInput;
