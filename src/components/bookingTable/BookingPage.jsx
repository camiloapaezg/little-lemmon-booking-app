import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <section id="booking-page-container">
      <div id="booking-page-title">
        <h2 className="subtitle">Reserve a Table</h2>
      </div>
      <BookingForm />
    </section>
  );
};

export default BookingPage;
