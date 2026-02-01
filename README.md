# Little Lemon Restaurant - Capstone Project

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
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Getting Started

```bash
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── hooks/          # Custom hooks
└── styles/         # CSS/Tailwind styles
```

## References

- [Meta Capstone Course](https://www.coursera.org/learn/meta-front-end-developer-capstone)
- [Little Lemon Figma Design](https://www.figma.com/community/file/1390322027406537062/meta-front-end-capstone-little-lemon-wireframe-mockup)
