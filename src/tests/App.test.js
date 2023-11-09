import { render, screen } from "@testing-library/react";
import BookingForm from "../components/bookingTable/BookingForm";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utils/bookingAPI";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reservation details");
  expect(headingElement).toBeInTheDocument();
});

test("The available times array should change when the date changes", () => {
  let today = new Date();
  let firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDay() === 1 ? 2 : 1
  );
  let day1array = fetchAPI(today.toDateString());
  let day2array = fetchAPI(firstDayOfMonth.toDateString());

  expect(day1array).not.toEqual(day2array);
});

test("Checks the submit API function.", () => {
  let today = new Date();
  let time = fetchAPI(today.toDateString())[0];

  let formData = {
    date: today.toDateString(),
    time: time,
    guestsCount: 2,
    occasion: "birthday",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    confirmEmail: "john.doe@email.com",
    comments: "",
  };

  let response = submitAPI(formData);
  expect(response).toBe(true);
});
