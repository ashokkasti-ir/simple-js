# Simple JS Project with Express API and Next.js Frontend

This project combines an Express.js API with a Next.js frontend.

## Project Structure

- Express API running on port 3001
- Next.js frontend running on port 3000

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Express API

```bash
npm run dev
```

This will start the Express API server on http://localhost:3001

### Run Next.js Frontend

In a separate terminal:

```bash
npm run next-dev
```

This will start the Next.js development server on http://localhost:3000

## Available Scripts

- `npm run dev` - Start Express API with nodemon (auto-reload)
- `npm start` - Start Express API
- `npm run next-dev` - Start Next.js development server
- `npm run next-build` - Build Next.js for production
- `npm run next-start` - Start Next.js production server

## API Endpoints

- `GET /` - Welcome message
- `GET /api/items` - Get list of items
- `POST /api/items` - Create a new item

## Next.js Pages

- `/` - Home page
- `/api-example` - Example page that interacts with the Express API

## Notes

- Make sure both servers are running simultaneously to test the full application
- The Next.js frontend makes API calls to the Express backend at http://localhost:3001