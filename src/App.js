import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import './App.css';

export function initializeTimes() {
  if (window.fetchAPI) {
    return window.fetchAPI(new Date());
  }
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES' && window.fetchAPI && action.date) {
    const dateObj = new Date(action.date);
    return window.fetchAPI(dateObj);
  }
  return state;
}

function AppContent() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Mock API always returns true
    // If API is loaded, use it; otherwise allow submission anyway
    if (window.submitAPI) {
      const result = window.submitAPI(formData);
      navigate('/booking-confirmed');
      return result;
    }
    // Fallback for when API script hasn't loaded yet
    navigate('/booking-confirmed');
    return true;
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
