import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App, { initializeTimes, updateTimes } from './App';

// Mock the API functions
global.window = Object.create(window);
window.fetchAPI = jest.fn((date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
});
window.submitAPI = jest.fn(() => true);

describe('App', () => {
  test('renders navigation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const navElement = screen.getByText(/little lemon/i);
    expect(navElement).toBeInTheDocument();
  });
});

describe('initializeTimes', () => {
  test('returns expected initial times when fetchAPI is available', () => {
    const result = initializeTimes();
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns default times when fetchAPI is not available', () => {
    const originalFetchAPI = window.fetchAPI;
    delete window.fetchAPI;

    const result = initializeTimes();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);

    window.fetchAPI = originalFetchAPI;
  });
});

describe('updateTimes', () => {
  test('returns same value provided in state when action type is UPDATE_TIMES', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-12-31' };

    const result = updateTimes(state, action);

    expect(window.fetchAPI).toHaveBeenCalledWith('2024-12-31');
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns state when action type is not UPDATE_TIMES', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'OTHER_ACTION' };

    const result = updateTimes(state, action);

    expect(result).toEqual(state);
  });
});
