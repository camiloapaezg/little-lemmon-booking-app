import { useParams } from "react-router-dom";

const msgConfirmed =
  "Your booking confirmation has been successfully placed. You will receive a confirmation message in your email.";

const msgRejected =
  "There was an error placing your booking form. Please try again later. If the issue persists, please inform about this issue to service@little-lemmon.com.";

const ConfirmedBooking = () => {
  let { confirmed } = useParams();
  let msg = confirmed === "true" ? msgConfirmed : msgRejected;

  return (
    <section id="section-confirmed-booking">
      <div id="confirmed-booking-container">
        <div className="confirmed-booking-item">
          <h2 className="subtitle">Booking Confirmation</h2>
        </div>
        <div className="confirmed-booking-item">
          <p className="lead-text">{msg}</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
