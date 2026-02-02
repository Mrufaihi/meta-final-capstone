# Little Lemon Restaurant - Capstone Project
![Uploading Screenshot 2026-02-02 at 3.51.59 PM.png…]()

A modern, responsive web application for Little Lemon Restaurant featuring online table reservations and ordering capabilities. This is the capstone project for Meta's Front-End Developer Professional Certificate on Coursera.

## About Little Lemon

**Little Lemon** is a family-owned Mediterranean restaurant located in Chicago, Illinois, blending traditional recipes with a modern twist.

### The Business

- **Owners:** Two Italian brothers
  - **Mario:** Head chef who relies on family recipes and his experience as a chef in Italy
  - **Adrian:** Handles marketing and led the expansion to incorporate broader Mediterranean cuisines
- **Cuisine:** Mediterranean (Italian, Greek, Turkish influences)
- **Menu:** 12-15 seasonal items featuring traditional recipes with a modern twist
- **Atmosphere:** Rustic and relaxed with moderate prices
- **Operating Hours:**
  - Monday - Friday: 2pm - 10pm
  - Saturday: 2pm - 11pm
  - Sunday: 2pm - 9pm

### The Challenge

Little Lemon currently has a basic website but lacks modern online booking and ordering capabilities. This project will build a complete web application with:

- **Table Reservation System** - Online booking with date/time selection
- **Online Ordering** - Browse menu, add to cart, place orders
- **Restaurant Pages** - About, menu, testimonials, contact
- **Modern UI/UX** - Responsive, accessible, professional design

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design system including colors, typography, spacing, and component guidelines.

### Quick Reference

**Colors:**

- Primary Green: `#495E57`
- Primary Yellow: `#F4CE14`
- Secondary Orange: `#EE9972`
- Secondary Beige: `#FBDABB`
- Highlight Light: `#EDEFEE`
- Highlight Dark: `#333333`

**Typography:**

- Headings: `Markazi Text` (Google Fonts)
- Body: `Karla` (Google Fonts)

**Breakpoints:**

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Technologies

- **React** - Frontend framework
- **React Router** - Client-side routing
- **React Hooks** - State management (useState, useReducer)
- **CSS** - Custom styling with CSS variables
- **React Testing Library** - Unit testing
- **Jest** - Test runner

## Getting Started

```bash
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/     # Reusable components (Nav, Footer, BookingForm, etc.)
├── pages/          # Page components (HomePage, BookingPage, MenuPage, etc.)
└── App.js          # Main app with routing and state management

public/
├── api.js          # Booking API functions
└── images/         # Restaurant images
```

## Features

### ✅ Completed Features

- **Table Reservation System** - Full booking form with date/time selection
- **State Management** - useReducer for shared booking state
- **API Integration** - Connected to booking API for available times
- **Form Validation** - HTML5 + React validation with error handling
- **Unit Tests** - Comprehensive test coverage
- **Additional Pages** - About, Menu, and Order pages
- **Real Content** - All placeholder text replaced with realistic content
- **Responsive Design** - Mobile-first responsive layouts
- **Accessibility** - ARIA attributes and semantic HTML

## Documentation

- [Stage 2 Implementation](./STAGE_2_IMPLEMENTATION.md) - UI & Semantic Structure
- [Stage 3 Implementation](./STAGE_3_IMPLEMENTATION.md) - Booking System & Functionality
- [Design System](./DESIGN_SYSTEM.md) - Complete design guidelines

## References

- [Meta Capstone Course](https://www.coursera.org/learn/meta-front-end-developer-capstone)
- [Little Lemon Figma Design](https://www.figma.com/community/file/1390322027406537062/meta-front-end-capstone-little-lemon-wireframe-mockup)
