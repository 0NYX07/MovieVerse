# MovieVerse 🎬

A modern, fast, and responsive React Native application designed for discovering movies and TV shows, exploring synopses and ratings, searching across the TVMaze catalog, and bookmarking favorite titles with offline persistence.

Developed and maintained by **Krishna Sahni** ([@0NYX07](https://github.com/0NYX07)).

---

## 🌟 Key Features

- **🚀 Native Splash Screen**: Fast and smooth initial launch using `react-native-bootsplash`.
- **🏠 Home Screen**: Curated grid and list of featured movies and TV series fetched in real time.
- **🔍 Instant Search**: Dynamic search bar querying the TVMaze API with debounced requests and immediate visual feedback.
- **📄 Deep Details Screen**: Comprehensive show information including high-resolution poster artwork, episode runtime, premier/end dates, genre tags, ratings, broadcast schedules, and clean HTML-stripped summaries.
- **❤️ Favorites Management**: Save and remove favorite shows instantly. Bookmarks persist across app sessions via `@react-native-async-storage/async-storage`.
- **🧭 Stack & Tab Navigation**: Seamless screen transitions powered by `@react-navigation/native`, `@react-navigation/bottom-tabs`, and `@react-navigation/stack`.
- **🎨 Dark Cinema Theme**: Polished dark theme with Netflix-inspired vibrant red accents (`#E50914`).

---

## 🏗️ Architecture & Project Structure

```
MovieVerse/
├── __tests__/                # Jest unit and component test suites
├── android/                  # Native Android configuration, Gradle, and Kotlin bindings
├── docs/                     # Architecture and API documentation
│   └── API_DOCUMENTATION.md  # TVMaze endpoint references and data schemas
├── ios/                      # Native iOS project, Podfile, and assets
├── src/
│   ├── assets/               # Image assets and shared style constants
│   │   ├── images/           # Splash and app assets
│   │   └── styles/           # Theme color definitions
│   ├── context/              # State management providers
│   │   └── FavoritesContext.tsx # Global favorites state & AsyncStorage sync
│   ├── navigation/           # Navigation stacks and tabs
│   │   ├── AppNavigator.tsx         # Bottom tab navigator
│   │   ├── HomeStackNavigator.tsx   # Home stack (Home -> Details)
│   │   └── SearchStackNavigator.tsx # Search stack (Search -> Details)
│   ├── screens/              # UI Screen Components
│   │   ├── HomeScreen.tsx           # Discover featured shows
│   │   ├── SearchScreen.tsx         # Search query results
│   │   ├── DetailsScreen.tsx        # Show synopsis & metadata
│   │   └── FavoritesScreen.tsx      # Saved bookmarks
│   └── types/                # TypeScript type definitions (Show, SearchResult)
├── .env.example              # Environment variables template
├── App.tsx                   # Main application entry point & context wrapper
├── index.js                  # React Native app registry
└── package.json              # Dependencies and run scripts
```

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React Native](https://reactnative.dev) (v0.76.6)
- **Language**: [TypeScript](https://www.typescriptlang.org) (v5.0.4)
- **Navigation**: [React Navigation 7](https://reactnavigation.org)
- **HTTP Client**: [Axios](https://axios-http.com)
- **Local Storage**: [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- **Icons**: [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) (MaterialIcons)
- **Splash Screen**: [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- **Testing**: Jest & React Test Renderer

---

## 🚀 Getting Started

### Prerequisites

Ensure you have your environment set up for React Native development:
- [Node.js](https://nodejs.org/) (>= 18)
- [JDK 17+](https://adoptium.net/) (for Android)
- Android Studio / Android SDK and Emulator
- (macOS only) Xcode and CocoaPods for iOS

### 1. Clone the Repository

```bash
git clone https://github.com/0NYX07/MovieVerse.git
cd MovieVerse
```

### 2. Install Dependencies

```bash
npm install
```

For iOS (macOS only):
```bash
cd ios && pod install && cd ..
```

### 3. Start the Metro Bundler

```bash
npm start
```

### 4. Run the Application

In a separate terminal, launch the platform of your choice:

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

---

## 🧪 Testing and Linting

Run test suites:
```bash
npm test
```

Run linter:
```bash
npm run lint
```

Auto-fix lint errors:
```bash
npm run lint:fix
```

---

## 👤 Author

**Krishna Sahni**
- GitHub: [@0NYX07](https://github.com/0NYX07)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
