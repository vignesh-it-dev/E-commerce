# ShopHub - Modern E-commerce Website

A beautiful, fully functional E-commerce website built with vanilla HTML, CSS, and JavaScript. Features a modern design, smooth animations, and complete shopping functionality including cart, wishlist, search, filtering, and checkout.

## 🚀 Features

### Design & UI
- ✨ Eye-catching colorful gradients and modern typography
- 🎭 Smooth page load, hover, and scroll animations
- 💫 Micro-interactions on buttons, icons, and product cards
- 📌 Sticky animated navbar with live cart badge
- 🌓 Dark / Light mode toggle with system preference detection
- 🎨 Clean, premium UI similar to Amazon / Flipkart / Myntra

### E-commerce Features
- 🛍️ Product listing with attractive cards
- 🖼️ Image zoom on hover
- 🛒 Add to Cart & Remove from Cart functionality
- 💾 Cart stored using LocalStorage
- ➕ Quantity increase / decrease with automatic price calculation
- 📝 Checkout page UI (UI only, no payment integration)

### User Experience
- 🔍 Live product search with debounce (300ms)
- 🎯 Product filtering by category and price range
- 📊 Sorting (price low-to-high, high-to-low, popularity, rating)
- 🔔 Toast notifications for user actions
- ⏳ Skeleton loaders while products load
- 🎪 Empty cart animation

### Extra Features
- ❤️ Wishlist with heart icon toggle
- 👀 Recently viewed products (ready for implementation)
- ⬆️ Scroll-to-top button
- 🖼️ Lazy loading images
- ✨ Section reveal animation on scroll

### Responsiveness & Performance
- 📱 Mobile-first responsive design
- 🍔 Smooth hamburger menu animation
- ⚡ Optimized performance with debouncing and lazy loading
- ♿ Basic accessibility practices (ARIA labels, keyboard navigation)
- 🎯 Focus visible states for keyboard navigation

## 📁 Project Structure

```
E-commerce/
├── index.html              # Main product listing page
├── checkout.html          # Checkout page UI
├── css/
│   ├── main.css          # Core styles, variables, resets
│   ├── components.css    # Reusable components (cards, buttons, nav)
│   ├── animations.css    # Keyframes and animation utilities
│   └── responsive.css    # Mobile-first responsive styles
├── js/
│   ├── main.js           # App initialization, event listeners
│   ├── products.js       # Product data and management
│   ├── cart.js           # Cart functionality (LocalStorage)
│   ├── search.js         # Search with debounce
│   ├── filter.js         # Filtering and sorting logic
│   ├── wishlist.js       # Wishlist functionality
│   ├── theme.js          # Dark/Light mode toggle
│   └── utils.js          # Utilities (toast, skeleton, lazy load)
└── README.md             # Project documentation
```

## 🎨 Color Scheme

### Light Mode
- Primary gradient: Vibrant blues/purples (`#667eea` → `#764ba2`)
- Accent: Coral/Pink (`#ff6b6b`, `#ffa500`)
- Background: White/Light gray

### Dark Mode
- Primary: Deep blues/purples (`#1a202c`, `#2d3748`)
- Accent: Bright cyan/yellow (`#00f5ff`, `#ffd700`)
- Background: Dark (`#0f172a`, `#1e293b`)

## 📱 Responsive Breakpoints

- Mobile: 320px+ (1 column)
- Tablet: 768px+ (2 columns)
- Desktop: 1024px+ (3 columns)
- Large Desktop: 1440px+ (4 columns)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ features, LocalStorage API, Intersection Observer

## 🚦 Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. No build process required - works directly!

## 📝 Usage

### Adding Products
Products are defined in `js/products.js`. Each product object includes:
- `id` - Unique product identifier
- `name` - Product name
- `price` - Current price
- `originalPrice` - Original price (for discount calculation)
- `discount` - Discount percentage
- `category` - Product category (fashion, electronics, accessories, shoes)
- `rating` - Product rating (0-5)
- `reviews` - Number of reviews
- `image` - Primary product image URL
- `images` - Array of product images
- `description` - Product description
- `inStock` - Stock availability
- `featured` - Featured product flag

### LocalStorage Keys
- `cart` - Cart items array
- `wishlist` - Wishlist item IDs array
- `theme` - Current theme preference (light/dark)

### Keyboard Navigation
- `Tab` - Navigate between interactive elements
- `Enter` - Activate buttons/links
- `Escape` - Close modals/overlays
- `Space` - Scroll down (when focused on scrollable elements)

## 🎯 Key Features Explained

### Cart System
- Add items to cart with quantity management
- Cart persists across page refreshes using LocalStorage
- Real-time price calculation (subtotal, tax, total)
- Cart badge shows total item count with pulse animation

### Wishlist
- Toggle items with heart icon
- Persists using LocalStorage
- Visual feedback on toggle

### Search
- Debounced search (300ms delay) for performance
- Searches in product name, description, and category
- Highlights matching products

### Filtering & Sorting
- Filter by category (multiple selection)
- Filter by price range
- Sort by price (low-to-high, high-to-low), popularity, or rating
- Filters combine intelligently

### Dark Mode
- Toggle between light and dark themes
- Remembers preference in LocalStorage
- Detects system preference on first visit
- Smooth theme transition animation

### Animations
- Page load: Staggered fade-in for product cards
- Scroll reveal: Products animate in when scrolled into view
- Hover effects: Scale, shadow, and image zoom
- Micro-interactions: Button ripples, icon bounces
- Empty states: Animated icons

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on icons and interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images
- Screen reader friendly
- Respects `prefers-reduced-motion` media query

## 🎨 Customization

### Changing Colors
Edit CSS custom properties in `css/main.css`:
```css
:root {
    --color-primary: #667eea;
    --color-accent: #ff6b6b;
    /* ... */
}
```

### Adding Categories
1. Add category to product data in `js/products.js`
2. Add category filter checkbox in `index.html`
3. Update filter logic in `js/filter.js` if needed

### Modifying Animations
Edit `css/animations.css` for animation timings and effects.

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer Notes

- All images are loaded from Unsplash CDN (placeholder service)
- No external dependencies - pure vanilla JavaScript
- LocalStorage is used for data persistence
- Intersection Observer API for scroll animations and lazy loading
- Event delegation for dynamic elements
- Debounced functions for performance optimization

## 🐛 Known Limitations

- Checkout page is UI-only (no actual payment processing)
- Product images are from external CDN (may be subject to rate limits)
- No backend integration (cart/wishlist stored locally only)

## 🚀 Future Enhancements

- Backend integration for persistent cart/wishlist
- User authentication
- Product reviews and ratings system
- Payment gateway integration
- Product comparison feature
- Recently viewed products section
- Product recommendations

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**



