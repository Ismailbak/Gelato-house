# 🍨 Gelato House - Complete E-commerce Website

A modern, fully-featured website for Gelato House featuring authentic Italian gelato, with integrated shopping cart system, automatic Instagram feed, and WhatsApp ordering.

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

## ✨ Features

### 🛒 **Complete Shopping Cart System**
- **Add to Cart**: + buttons on all menu items
- **Smart Cart**: Sidebar cart with quantity controls
- **Live Updates**: Real-time total calculation
- **Checkout Process**: Customer details form
- **Order Types**: Pickup (In House) or Delivery
- **WhatsApp Integration**: Orders sent automatically to `+212649511492`

### 📱 **Instagram Integration**
- **Live Feed**: Automatically displays latest posts from `@gelato_house__`
- **Auto-Updates**: Fresh content without manual updates
- **Free Service**: Uses SociableKit widget (no monthly fees)

### 🎨 **Modern Design**
- **Responsive Layout**: Perfect on all devices (mobile, tablet, desktop)
- **Luxury Theme**: Brown and gold color scheme
- **Smooth Animations**: Professional hover effects and transitions
- **Category Filtering**: Easy menu navigation by category

### 📋 **Menu Categories**
- **Crêpes**: Traditional and specialty crepes (15-23 dh)
- **Gauffres**: Belgian waffles with various toppings
- **Pancakes**: Fluffy pancakes with creative toppings
- **Boissons**: Hot and cold beverages
- **Dubai Specialty**: Unique Middle Eastern flavors
- **Tartes Glacées**: Ice cream tarts
- **Pâtisserie**: French pastries and desserts

## 🚀 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Playfair Display, Poppins (Google Fonts)
- **Third-party**: SociableKit (Instagram feed)
- **Integration**: WhatsApp Business API

## 📁 Project Structure

```
gelato-house-project/
├── index.html              # Main page
├── css/
│   ├── style.css          # Main stylesheet
│   └── hero-bg.css        # Hero section styles
├── js/
│   ├── script.js          # Main functionality
│   ├── cart.js            # Shopping cart system
│   ├── auto-cart-buttons.js # Auto-add cart buttons
│   ├── instagram-feed.js   # Instagram API integration
│   └── cart-test.js       # Debug & testing
├── img/
│   ├── logo.jpg           # Company logo
│   └── custard-cream-bg.jpg # Hero background
├── gallery/
│   └── *.png              # Gallery images (Instagram screenshots)
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. **Clone Repository**
```bash
git clone https://github.com/Ismailbak/Gelato-house.git
cd Gelato-house
```

### 2. **Configuration**
- **WhatsApp Number**: Already configured to `+212649511492`
- **Instagram Feed**: Connected to `@gelato_house__` via SociableKit
- **Logo**: Update `img/logo.jpg` with your logo

### 3. **Deploy**
- Upload files to your web hosting service
- Or use GitHub Pages, Netlify, or Vercel for free hosting

## 🛒 Cart System Usage

### For Customers:
1. **Browse Menu**: Navigate through different categories
2. **Add Items**: Click + button on any menu item
3. **Review Order**: Click cart icon to open sidebar
4. **Modify**: Adjust quantities or remove items
5. **Checkout**: Fill in details (name, phone, pickup/delivery)
6. **Place Order**: Automatically opens WhatsApp with order details

### Order Process:
1. Customer fills checkout form
2. System generates formatted WhatsApp message
3. Message sent to `+212649511492` with:
   - Customer name and phone
   - Order type (pickup/delivery)
   - Delivery address (if applicable)
   - Complete order list with quantities
   - Total amount
   - Timestamp

## 📸 Instagram Integration

- **Automatic**: Feed updates when you post new content
- **Responsive**: Adapts to all screen sizes  
- **Free**: No monthly subscription required
- **Clickable**: Each post links to your Instagram profile

## 🎯 Menu Management

### Adding New Items:
The cart system automatically detects menu items with this structure:
```html
<div class="menu-item category-visible" data-category="category-name">
    <div class="price-tag">25dh</div>
    <h3>Item Name</h3>
    <p>Description of the item.</p>
</div>
```

### Categories:
- `crepes` - Crêpes
- `gauffres` - Gauffres  
- `pancakes` - Pancakes
- `boissons` - Boissons
- `dubai-specialty` - Dubai Specialty
- `tartes-glacees` - Tartes Glacées
- `patisserie` - Pâtisserie

## 🎨 Customization

### Colors (CSS Variables):
```css
:root {
    --primary-color: #8B5A2B;      /* Rich brown */
    --secondary-color: #D4AF37;    /* Gold */
    --accent-color: #F5F5DC;       /* Beige/cream */
    --dark-color: #3A2718;         /* Dark chocolate */
    --light-color: #FFF8E1;        /* Warm off-white */
}
```

### Contact Information:
Update contact details in the Contact section of `index.html`

## 📱 Mobile Responsiveness

- **Mobile-First Design**: Optimized for smartphones
- **Touch-Friendly**: Large buttons and easy navigation
- **Fast Loading**: Optimized images and efficient code
- **Full-Screen Cart**: Cart opens full-screen on mobile

## 🔧 Troubleshooting

### Cart Not Working:
1. Check browser console (F12) for JavaScript errors
2. Ensure all JS files are loading correctly
3. Verify WhatsApp number format: `+212649511492`

### Instagram Feed Not Loading:
1. Check internet connection
2. SociableKit service status
3. Instagram account accessibility

### Mobile Issues:
1. Test on different devices
2. Check viewport meta tag
3. Validate CSS media queries

## 🌟 Features Summary

| Feature | Status | Description |
|---------|--------|-------------|
| Shopping Cart | ✅ Active | Full e-commerce functionality |
| WhatsApp Orders | ✅ Active | Auto-send to +212649511492 |
| Instagram Feed | ✅ Active | Live @gelato_house__ posts |
| Mobile Design | ✅ Active | Responsive on all devices |
| Menu Categories | ✅ Active | 7 different categories |
| Price System | ✅ Active | Dynamic pricing (15-30 dh) |
| Order Management | ✅ Active | Pickup & delivery options |

## 🔮 Future Enhancements

- [ ] **Payment Integration**: Stripe/PayPal integration
- [ ] **User Accounts**: Customer login system  
- [ ] **Order Tracking**: Real-time order status
- [ ] **Loyalty Program**: Points and rewards system
- [ ] **Multi-language**: Arabic and French translations
- [ ] **Analytics**: Google Analytics integration
- [ ] **SEO Optimization**: Better search rankings

## 📊 Performance

- **Loading Speed**: Optimized for fast loading
- **SEO Ready**: Semantic HTML structure
- **Accessibility**: WCAG 2.1 compliant
- **Cross-Browser**: Works on all modern browsers

## 📞 Support

For technical support or customization requests:
- **Instagram**: @gelato_house__
- **WhatsApp**: +212649511492
- **GitHub**: [Issues Page](https://github.com/Ismailbak/Gelato-house/issues)

## 📄 License

MIT License - Feel free to customize for your business needs.

---

**Built with ❤️ for Gelato House**  
*Authentic Italian Gelato Experience*

🔗 **Live Demo**: [Your Website URL]  
📱 **Instagram**: [@gelato_house__](https://instagram.com/gelato_house__)  
📞 **Order via WhatsApp**: [+212649511492](https://wa.me/212649511492)
