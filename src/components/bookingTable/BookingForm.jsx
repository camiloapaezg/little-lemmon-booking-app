/* eslint-disable react-hooks/exhaustive-deps */
import SliderInput from "./SliderInput";
import { useFormik } from "formik";
import { useEffect, useState, useReducer, useRef } from "react";
import { occasions } from "../../data/formSelectData";
import ReCAPTCHA from "react-google-recaptcha";
import { fetchAPI, submitAPI } from "../../utils/bookingAPI";
import { useNavigate } from "react-router-dom";

const errorLabelStyle = {
  textAlign: "start",
  color: "rgb(189, 0, 0)",
  padding: "0.3em 0em 0.3em 0em",
};

const buildTimeOptions = (times) => {
  return times.map((time) => {
    return { value: time, text: time };
  });
};

const reducer = (_, action) => {
  if (action.payload) {
    return buildTimeOptions(action.payload);
  }
};

const getCurrentDate = () => {
  let d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
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
  }

  if (!values.confirmEmail) {
    errors.confirmEmail = "Required";
  } else if (
    values.confirmEmail?.trim().toLowerCase() !==
    values.email?.trim().toLowerCase()
  ) {
    errors.email = "The emails must be coincident.";
    errors.confirmEmail = "The emails must be coincident.";
  }

  return errors;
};

const FormProperty = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setErrorMessage(props.error || "");
  }, [props.error]);

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

const BookingForm = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [reCaptchaConfirmed, setReCaptchaConfirmed] = useState(undefined);
  const captchaRef = useRef(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: getCurrentDate(),
      time: state?.[0]?.value,
      guestsCount: 2,
      occasion: "noSpecified",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      comments: "",
    },
    validate,
    onSubmit: (formData) => {
      let token = captchaRef.current.getValue();
      setReCaptchaConfirmed(token !== "");
      if (token !== "") {
        var response = submitAPI(formData);
        navigate(`/book-a-table/${response}`);
      }
    },
  });

  // Fetches an available times options list.
  useEffect(() => {
    let date = "";
    if (formik.values?.date) {
      date = formik.values.date;
    } else {
      date = formik.initialValues.date;
    }

    var availableTimes = fetchAPI(date);
    dispatch({ payload: availableTimes });
  }, [formik?.values?.date]);

  // Sets a new default time when the state changes.
  useEffect(() => {
    if (!state || !formik.values) {
      return;
    }

    let availableTimes = state.map((t) => t.value);
    if (!availableTimes.includes(formik.values.time)) {
      formik.values.time = availableTimes[0];
    }
  }, [state]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div id="booking-form-container">
        <div>
          <h3 className="form-section-title section-title">
            Reservation details
          </h3>
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
          <select
            name="time"
            id="time"
            className="input-select-element card-text input-element-centered"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          >
            {state?.map((t) => (
              <option key={t.value} value={t.value}>
                {t.text}
              </option>
            ))}
          </select>
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
            min={1}
            max={10}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guestsCount}
          />
        </FormProperty>
        <FormProperty id="occasion" label="Occasion:">
          <select
            name="occasion"
            id="occasion"
            className="input-select-element card-text input-element-centered"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occasion}
          >
            {occasions.map((occasion) => (
              <option key={occasion.value} value={occasion.value}>
                {occasion.text}
              </option>
            ))}
          </select>
        </FormProperty>
        <div>
          <h3 className="form-section-title section-title">Personal details</h3>
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
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          style={{ alignSelf: "center", marginTop: "1em" }}
        />
        {reCaptchaConfirmed !== undefined && !reCaptchaConfirmed && (
          <strong
            className="error-text"
            style={{ ...errorLabelStyle, alignSelf: "center" }}
            aria-description="Please validate the reCAPTCHA"
          >
            Please validate the reCAPTCHA
          </strong>
        )}
        <div style={{ alignSelf: "center", marginTop: "1em" }}>
          <button
            type="submit"
            className="button-yellow button-text"
            disabled={
              Object.keys(formik.touched).length === 0 || !formik.isValid
            }
          >
            Send request
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
