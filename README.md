# Enhanced JavaScript Project

This is a full-stack JavaScript application with a comprehensive set of dependencies for building robust web applications. The project combines Express.js for the backend API and Next.js for the frontend.

## Features

This project includes a wide range of libraries and tools for various purposes:

### Backend
- **Express.js**: Web server framework
- **Mongoose**: MongoDB object modeling
- **JWT & Passport.js**: Authentication and authorization
- **Socket.io**: Real-time communication
- **Redis**: Caching
- **Winston & Morgan**: Logging
- **Helmet**: Security headers
- **Express Validator**: Input validation
- **Multer & Sharp**: File uploads and image processing
- **Nodemailer**: Email sending
- **Swagger UI Express**: API documentation

### Frontend
- **Next.js**: React framework with SSR/SSG
- **React**: UI library
- **Redux & Redux Toolkit**: State management
- **React Query**: Data fetching and caching
- **Material UI**: Component library
- **Tailwind CSS**: Utility-first CSS
- **Styled Components**: CSS-in-JS
- **Formik & Yup**: Form handling and validation
- **React Router**: Client-side routing
- **Framer Motion**: Animations
- **Chart.js**: Data visualization
- **Three.js**: 3D graphics

### Development Tools
- **TypeScript**: Type checking
- **ESLint & Prettier**: Code quality and formatting
- **Jest & Testing Library**: Unit and component testing
- **Cypress**: End-to-end testing
- **MSW**: API mocking
- **Husky & lint-staged**: Git hooks
- **Webpack**: Module bundling

### Third-party Services
- **Firebase**: Backend as a service
- **Stripe**: Payment processing
- **AWS SDK**: Cloud services

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running the Application

```bash
# Run Express API server (port 3001)
npm run dev

# In a separate terminal, run Next.js frontend (port 3000)
npm run next-dev
```

### Available Scripts

- `npm start`: Start the Express server in production mode
- `npm run dev`: Start the Express server with hot-reload
- `npm run next-dev`: Start the Next.js development server
- `npm run next-build`: Build the Next.js application
- `npm run next-start`: Start the Next.js production server
- `npm run lint`: Run ESLint
- `npm run test`: Run Jest tests
- `npm run format`: Format code with Prettier

## API Endpoints

- `GET /api/items`: Get all items
- `POST /api/items`: Create a new item
- `GET /api/items/:id`: Get a specific item
- `PUT /api/items/:id`: Update a specific item
- `DELETE /api/items/:id`: Delete a specific item

## Next.js Pages

- `/`: Home page
- `/api-example`: Example page demonstrating API integration

## License

MIT