import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div id="booking-page-container">
      <div id="booking-page-title">
        <h2 className="subtitle">Reserve a Table</h2>
      </div>
      <div>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
