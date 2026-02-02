import BookingForm from '../components/BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <main className="booking-page">
      <section className="booking-form-section">
        <h1>Reserve a Table</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
}

export default BookingPage;
