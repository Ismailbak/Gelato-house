# Gelato House Website

A responsive website for Gelato House, an ice cream shop featuring authentic Italian gelato. This website is designed to work seamlessly on both desktop and mobile devices, with a luxurious brown and gold color scheme.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, elegant design with smooth animations
- **Interactive Elements**: Flavor filtering, image gallery with lightbox
- **Contact Form**: Easy way for customers to get in touch
- **Newsletter Signup**: Capture potential customer emails

## Structure

The website includes the following sections:

1. **Header/Navigation**: Fixed navigation bar with centered logo and menu
2. **Hero Section**: Fullscreen banner with call-to-action
3. **About Section**: Information about Gelato House and its values
4. **Our Menu**: Interactive display of gelato flavors with filtering
5. **Special Offers**: Promotions and special deals
6. **Gallery**: Photo gallery showcasing gelato and the shop
7. **Contact**: Location information and contact form
8. **Footer**: Quick links, newsletter signup, and social media

## Files and Directories

- `index.html` - Main HTML file
- `css/style.css` - Main stylesheet
- `js/script.js` - JavaScript for interactivity
- `img/` - Directory for website images
- `gallery/` - Directory containing gallery images

## Setup Instructions

### Logo Setup

The website is designed to display your logo centered in the header:

- Create a logo file named `logo.svg` or `logo.jpg` 
- Place it in the `img/` directory
- Recommended size: Around 200-250px height
- Format: SVG (preferred), JPG, or PNG (with transparency if needed)

If your logo has a different filename, update the reference in `index.html`:
```html
<img src="img/logo.jpg" alt="Gelato House Logo" class="logo-image">
```

### Required Images

The website requires the following images in the `img/` directory:

1. `hero-bg.jpg` - Hero background image
   - High-quality, landscape orientation (1920×1080px recommended)
   - Ideally showing gelato, ice cream, or ingredients
   - Will be styled with a brown overlay automatically

2. `about-image.jpg` - Image for the About section

3. `special-offers-bg.jpg` - Background image for special offers section

4. Flavor images:
   - `vanilla.jpg`
   - `chocolate.jpg`
   - `strawberry.jpg`
   - `mango.jpg`
   - `pistachio.jpg`
   - `tiramisu.jpg`
   - `lemon.jpg`
   - `hazelnut.jpg`

For testing or placeholder images, you can use stock photos from:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

Make sure to optimize all images for web to ensure fast loading times.

## Customization

### Colors

The website uses a luxury brown and gold color scheme defined as CSS variables in `style.css`. You can easily change these colors to match your brand:

```css
:root {
    --primary-color: #8B5A2B;      /* Rich brown */
    --secondary-color: #D4AF37;    /* Gold */
    --accent-color: #F5F5DC;       /* Beige/cream */
    --dark-color: #3A2718;         /* Dark chocolate brown */
    --light-color: #FFF8E1;        /* Warm off-white */
}
```

### Content

Edit the text content in `index.html` to reflect your business information:
- Update the About Us section with your story
- Change the flavor descriptions
- Update contact information and opening hours

## Browser Compatibility

The website is compatible with modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential future enhancements for the website:
1. Online ordering system
2. User accounts
3. Blog section with gelato recipes and tips
4. Integration with social media feeds
5. Events calendar for special events

## Credits

- Fonts: Google Fonts (Playfair Display, Poppins)
- Icons: Font Awesome
- Images: Replace placeholder images with your own photography

---

© 2025 Gelato House | Created by GitHub Copilot
