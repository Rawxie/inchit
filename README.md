# COACH Platform

A modern web platform for heritage content creators and enthusiasts to share, discover, and engage with cultural heritage content.

## Features

- User Registration and Authentication
- Content Creation and Management
- Content Discovery and Exploration
- User Profiles and Preferences
- Real-time Notifications
- Content Interaction (Likes, Comments, Shares)

## Tech Stack

- React 18
- TypeScript
- Material-UI
- React Router
- Formik & Yup
- Redux Toolkit
- Axios
- Vite

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coach-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
coach-platform/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── features/      # Feature-specific components and logic
│   ├── services/      # API services and utilities
│   ├── store/         # Redux store configuration
│   ├── utils/         # Helper functions and utilities
│   ├── hooks/         # Custom React hooks
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Application entry point
├── public/            # Public assets
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 