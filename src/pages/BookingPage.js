import './BookingPage.css';

function BookingPage() {
  return (
    <main className="booking-page">
      <section className="booking-form-section">
        <h1>Reserve a Table</h1>
        <form className="booking-form">
          <fieldset>
            <legend>Reservation Details</legend>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="10" required />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion">
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </fieldset>

          <button type="submit">Reserve Table</button>
        </form>
      </section>
    </main>
  );
}

export default BookingPage;
