import SliderInput from "./SliderInput";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const FormProperty = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setErrorMessage(props.error || "");
  }, [props.error]);

  const errorLabelStyle = {
    textAlign: "start",
    color: "rgb(189, 0, 0)",
    padding: "0.3em 0em 0.3em 0em",
  };

  return (
    <div className="form-property-container">
      <div className="form-property-label">
        <label htmlFor={props.id} className="lead-text">
          {props.label}
        </label>
      </div>
      <div className="form-property-input">
        {props.children}
        <strong className="error-text" style={errorLabelStyle}>
          {props.visited && errorMessage && errorMessage}
        </strong>
      </div>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.date) {
    errors.date = "Required";
  } else {
    let selectedDate = new Date(values.date);
    let currentDate = new Date();
    if (currentDate.setDate(currentDate.getDate() + 5) >= selectedDate) {
      errors.date = "The date must be at least five (5) days in advance.";
    }
  }

  if (!values.time) {
    errors.time = "Required";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  // Validates email address.
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (
    values.confirmEmail?.trim().toLowerCase() !==
    values.email?.trim().toLowerCase()
  ) {
    errors.email = "The emails must be coincident.";
    errors.confirmEmail = "The emails must be coincident.";
  }

  return errors;
};

const getCurrentDate = () => {
  let d = new Date();
  d.setDate(d.getDate() + 5);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      date: getCurrentDate(),
      time: "20:00",
      guestsCount: 2,
      occasion: "noSpecified",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      comments: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div id="booking-form-container">
        <div>
          <h4 className="form-section-title section-title">
            Reservation details
          </h4>
        </div>
        <FormProperty
          id="date"
          label="Date: *"
          visited={formik.touched.date}
          error={formik.errors.date}
        >
          <input
            type="date"
            id="date"
            name="date"
            className="input-element input-element-centered card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </FormProperty>
        <FormProperty
          id="time"
          label="Time: *"
          visited={formik.touched.time}
          error={formik.errors.time}
        >
          <input
            type="time"
            id="time"
            name="time"
            className="input-element input-element-centered card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          />
        </FormProperty>
        <FormProperty
          id="guestsCount"
          label="Number of guests: *"
          visited={formik.touched.guestsCount}
          error={formik.errors.guestsCount}
        >
          <SliderInput
            id="guestsCount"
            name="guestsCount"
            min={2}
            max={6}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guestsCount}
          />
        </FormProperty>
        <FormProperty id="occasion" label="Occasion:">
          <select
            name="occasion"
            id="occasion"
            className="input-element card-text input-element-centered"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}
          >
            <option value="noSpecified">No specified</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="christmas">Christmas</option>
          </select>
        </FormProperty>
        <div>
          <h4 className="form-section-title section-title">Personal details</h4>
        </div>
        <FormProperty
          id="firstName"
          label="First name: *"
          visited={formik.touched.firstName}
          error={formik.errors.firstName}
        >
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input-element card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </FormProperty>
        <FormProperty
          id="lastName"
          label="Last name: *"
          visited={formik.touched.lastName}
          error={formik.errors.lastName}
        >
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input-element card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </FormProperty>
        <FormProperty
          id="email"
          label="Email address: *"
          visited={formik.touched.email}
          error={formik.errors.email}
        >
          <input
            type="email"
            id="email"
            name="email"
            className="input-element card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </FormProperty>
        <FormProperty
          id="confirmEmail"
          label="Confirm email address: *"
          visited={formik.touched.confirmEmail}
          error={formik.errors.confirmEmail}
        >
          <input
            type="confirmEmail"
            id="confirmEmail"
            name="confirmEmail"
            className="input-element card-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmEmail}
          />
        </FormProperty>
        <FormProperty id="comments" label="Additional comments:">
          <textarea
            id="comments"
            name="comments"
            className="input-element card-text"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comments}
          />
        </FormProperty>
        <div style={{ alignSelf: "center", marginTop: "1em" }}>
          <button type="submit" className="button-yellow button-text">
            Send request
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
