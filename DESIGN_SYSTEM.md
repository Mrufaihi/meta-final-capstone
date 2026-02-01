# Little Lemon Design System

Design system and style guide for the Little Lemon Restaurant website.

## Color Palette

### Primary Colors

- **Primary Green** `#495E57`
  - Main brand color for headers, navigation, and primary actions
  - Use for: Headers, navigation bar, primary buttons, footer

- **Primary Yellow** `#F4CE14`
  - Accent color for CTAs and highlights
  - Use for: Call-to-action buttons, highlights, important badges

### Secondary Colors

- **Secondary Orange** `#EE9972`
  - Warm accent color
  - Use for: Secondary buttons, cards, accents

- **Secondary Beige** `#FBDABB`
  - Light warm tone
  - Use for: Backgrounds, subtle highlights, cards

### Neutral Colors

- **Highlight Light** `#EDEFEE`
  - Light background
  - Use for: Section backgrounds, cards, light areas

- **Highlight Dark** `#333333`
  - Dark text and elements
  - Use for: Body text, dark backgrounds

### Usage Guidelines

```css
/* Primary Actions */
.button-primary {
  background-color: #f4ce14;
  color: #333333;
}

/* Secondary Actions */
.button-secondary {
  background-color: #495e57;
  color: #edefee;
}

/* Headers/Navigation */
.header {
  background-color: #495e57;
  color: #edefee;
}
```

## Typography

### Font Families

**Headings:** `Markazi Text`

- Google Fonts: [Markazi Text](https://fonts.google.com/specimen/Markazi+Text)
- Use for: H1, H2, H3 headings
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

**Body Text:** `Karla`

- Google Fonts: [Karla](https://fonts.google.com/specimen/Karla)
- Use for: Body text, paragraphs, buttons, navigation
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)

### Font Sizes

**Headings:**

- H1: `64px` (4rem) - Page titles
- H2: `40px` (2.5rem) - Section titles
- H3: `24px` (1.5rem) - Subsection titles
- H4: `20px` (1.25rem) - Card titles

**Body:**

- Large: `18px` (1.125rem) - Lead text, important content
- Base: `16px` (1rem) - Standard body text
- Small: `14px` (0.875rem) - Captions, fine print

### Line Heights

- Headings: `1.2` (tight)
- Body: `1.5` (comfortable reading)
- Small text: `1.4`

### Example Usage

```css
h1 {
  font-family: 'Markazi Text', serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.2;
}

body {
  font-family: 'Karla', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}
```

## Spacing Scale

Consistent spacing using 4px base unit:

- `4px` (0.25rem) - xs
- `8px` (0.5rem) - sm
- `16px` (1rem) - base
- `24px` (1.5rem) - md
- `32px` (2rem) - lg
- `48px` (3rem) - xl
- `64px` (4rem) - 2xl
- `96px` (6rem) - 3xl

### Usage

- Component padding: `16px` - `24px`
- Section spacing: `48px` - `64px`
- Card gaps: `16px` - `24px`
- Button padding: `12px` - `16px` vertical, `24px` - `32px` horizontal

## Components

### Buttons

**Primary Button:**

- Background: `#F4CE14` (Primary Yellow)
- Text: `#333333` (Dark)
- Padding: `12px 24px`
- Border-radius: `16px`
- Font: Karla, 16px, Bold

**Secondary Button:**

- Background: `#495E57` (Primary Green)
- Text: `#EDEFEE` (Light)
- Padding: `12px 24px`
- Border-radius: `16px`

**Hover States:**

- Slight darken (10-15% opacity increase)
- Smooth transition: `0.3s ease`

### Cards

- Background: `#EDEFEE` or `#FFFFFF`
- Border-radius: `16px`
- Padding: `24px`
- Shadow: Subtle (0 2px 8px rgba(0,0,0,0.1))
- Hover: Lift effect with shadow increase

### Forms

- Input padding: `12px 16px`
- Border-radius: `8px`
- Border: `1px solid #495E57`
- Focus: `2px solid #F4CE14` outline
- Error state: Red border `#D32F2F`

## Layout

### Container Widths

- Max-width: `1200px`
- Padding: `16px` mobile, `32px` tablet, `48px` desktop

### Grid System

- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3-4 columns (depending on content)

### Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
```

## Icons & Images

- Icon size: `24px` standard, `32px` large
- Image border-radius: `16px` for cards, `8px` for thumbnails
- Aspect ratios: 16:9 for hero images, 1:1 for thumbnails

## Shadows

- Small: `0 2px 4px rgba(0,0,0,0.1)`
- Medium: `0 4px 8px rgba(0,0,0,0.15)`
- Large: `0 8px 16px rgba(0,0,0,0.2)`

## Animations

- Transitions: `0.3s ease` standard
- Hover effects: Smooth, subtle
- Loading states: Gentle fade/spinner

## Accessibility

- Color contrast: Minimum 4.5:1 for text
- Focus indicators: Visible outline (2px solid #F4CE14)
- Touch targets: Minimum 44x44px
- Font sizes: Minimum 16px for body text

## Tailwind Configuration

Add these to `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-green': '#495E57',
        'primary-yellow': '#F4CE14',
        'secondary-orange': '#EE9972',
        'secondary-beige': '#FBDABB',
        'highlight-light': '#EDEFEE',
        'highlight-dark': '#333333',
      },
      fontFamily: {
        heading: ['Markazi Text', 'serif'],
        body: ['Karla', 'sans-serif'],
      },
      fontSize: {
        display: '4rem', // 64px
        h2: '2.5rem', // 40px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
      },
    },
  },
};
```
