# TwinMind Android

A React Native application for real-time meeting transcription and AI-powered meeting assistance.

## Features

- 🔐 Google OAuth Authentication
- 📆 Google Calendar Integration
- 🎙️ Real-time Audio Transcription
- 💬 Interactive Transcript Chat with AI
- 🧠 Automatic Summary Generation
- 💾 Local and Cloud Storage
- 🛠️ Comprehensive Error Handling
- 🧪 Testing Infrastructure

## Tech Stack

- React Native with Expo
- TypeScript
- Firebase Authentication
- Google Calendar API
- OpenAI/Gemini APIs for transcription and chat
- SQLite for local storage
- Firebase Firestore for cloud storage
- Sentry for error tracking

## Project Structure

```
src/
├── api/              # API clients and endpoints
├── components/       # Reusable UI components
├── config/          # Configuration files
├── contexts/        # React contexts
├── hooks/           # Custom React hooks
├── navigation/      # Navigation configuration
├── screens/         # Screen components
├── services/        # Business logic and services
├── store/           # State management
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API keys and configuration

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on Android:
   ```bash
   npm run android
   ```

## Development Guidelines

- Follow TypeScript best practices
- Write unit tests for critical functionality
- Use ESLint and Prettier for code formatting
- Follow the component structure in `src/components`
- Implement error boundaries for robust error handling
- Use React Context for global state management
- Follow the established folder structure

## Testing

Run tests with:
```bash
npm test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## License

MIT
