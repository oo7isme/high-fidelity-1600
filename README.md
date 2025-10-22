# ByggOm - Next.js Marketplace for Construction Materials

A modern Norwegian marketplace for sustainable construction materials built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Homepage** with hero section and exploration cards
- 🛍️ **Product Catalog** with advanced filtering and search
- 📦 **Shopping Basket** with item management
- 💬 **Messaging System** for buyer-seller communication
- 👤 **User Profiles** with statistics and order history
- 📝 **Ad Creation** for listing materials
- 📰 **Blog Section** with sustainability content
- 📱 **Responsive Design** optimized for all devices
- 🎨 **Modern UI** with smooth animations and transitions

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API with useReducer
- **Icons**: Font Awesome
- **Data**: JSON-based product data with API routes

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── basket/           # Shopping basket
│   ├── messages/         # Messages
│   ├── profile/          # User profile
│   ├── annonse/          # Create listing
│   ├── blog/             # Blog content
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ExploreSections.tsx
│   ├── FiltersSidebar.tsx
│   ├── ProductsGrid.tsx
│   ├── BasketContent.tsx
│   ├── MessagesContent.tsx
│   ├── ProfileContent.tsx
│   ├── AnnonseForm.tsx
│   ├── BlogContent.tsx
│   └── MobileMenu.tsx
├── lib/                  # Utilities and context
│   └── AppContext.tsx    # Global state management
├── types/                # TypeScript type definitions
│   └── index.ts
└── data/                 # Static data
    └── products.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd high-fidelity-1600
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features Implementation

### State Management
The application uses React Context API with useReducer for global state management:
- Product data and filtering
- Shopping basket functionality
- User messages
- Active filters and search terms

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive navigation with mobile menu
- Responsive grid layouts
- Touch-friendly interactions

### Data Flow
- Products loaded from JSON via API routes
- Real-time filtering and search
- Persistent state with localStorage
- Optimistic UI updates

## Pages Overview

### Homepage (`/`)
- Hero section with search functionality
- Exploration cards for materials, regions, and categories
- Direct navigation to product listings

### Products (`/products`)
- Advanced filtering sidebar
- Search functionality
- Product grid with lazy loading
- Filter tags with removal capability

### Product Detail (`/products/[id]`)
- Detailed product information
- Specifications and descriptions
- Add to basket functionality
- Product history and origin

### Shopping Basket (`/basket`)
- Item management with quantities
- Message seller functionality
- Empty state with navigation
- Persistent across sessions

### Messages (`/messages`)
- Sent messages to sellers
- Message status tracking
- Product context for each message
- Delete message functionality

### User Profile (`/profile`)
- User information and statistics
- Recent orders and status
- Contact information
- Interests and badges

### Create Listing (`/annonse`)
- Comprehensive form for material listing
- Image upload with preview
- Form validation and submission
- Multi-step form sections

### Blog (`/blog`)
- Featured articles
- Article grid with categories
- Newsletter subscription
- Responsive card layouts

## Styling Approach

The project uses Tailwind CSS with custom component classes defined in `globals.css`:
- Component-based styling with `@layer components`
- Utility classes for responsive design
- Custom animations and transitions
- Consistent color scheme and typography

## Data Management

- **Products**: Static JSON data with API route
- **State**: React Context with localStorage persistence
- **Images**: External URLs (Unsplash, Wikimedia)
- **User Data**: Mock data for demonstration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes
- Progressive enhancement approach

## Development Notes

### State Persistence
User data (basket, messages, filters) is automatically saved to localStorage and restored on page reload.

### Performance Optimizations
- Lazy loading for product images
- Debounced search functionality
- Efficient filtering algorithms
- Minimal re-renders with proper state management

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## Future Enhancements

- User authentication system
- Real-time messaging
- Payment integration
- Advanced search with AI
- Mobile app development
- Multi-language support
- Admin dashboard
- Analytics integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Design Documentation

For detailed information about the design process, user testing findings, and design decisions, see [DESIGN_DOCUMENTATION.md](./DESIGN_DOCUMENTATION.md).

This document includes:
- User testing results from mid-fidelity prototype
- Design changes implemented based on user feedback
- Technical choices and UI/UX principles
- Comprehensive feature overview with rationale

## Contact

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and modern web technologies.