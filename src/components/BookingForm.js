import { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = () => {
    const guestsNum = parseInt(guests, 10);
    return (
      date &&
      time &&
      guests &&
      guestsNum >= 1 &&
      guestsNum <= 10
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isFormValid()) {
      setError('Please fill in all required fields correctly.');
      return;
    }

    if (!submitForm) {
      setError('Form submission is not available. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = submitForm({ date, time, guests, occasion });
      // submitForm handles navigation, so if we get here and result is false, show error
      if (result === false) {
        setError('Failed to submit reservation. Please try again.');
        setIsSubmitting(false);
      }
      // If result is true, navigation happened, component will unmount
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Reservation Details</legend>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes && availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </fieldset>

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!isFormValid() || isSubmitting}
        aria-label="On Click"
      >
        {isSubmitting ? 'Submitting...' : 'Make Your reservation'}
      </button>
    </form>
  );
}

export default BookingForm;
