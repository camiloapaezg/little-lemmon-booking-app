import { render, screen } from "@testing-library/react";
import BookingForm from "../components/bookingTable/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reservation details");
  expect(headingElement).toBeInTheDocument();
});
