# Netflix Clone 🎬

A modern Netflix clone built with React, featuring user authentication, movie browsing, and video streaming capabilities. This project replicates the core functionality and design of Netflix with a responsive user interface.

![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-red?style=for-the-badge&logo=netflix)

## 🌟 Features

### Authentication
- **User Registration**: Create new accounts with email and password
- **User Login**: Secure login system with Firebase Authentication
- **Session Management**: Automatic login/logout handling
- **Protected Routes**: Access control for authenticated users

### Movie Browsing
- **Hero Section**: Featured movie with play and info buttons
- **Movie Categories**: 
  - Popular on Netflix
  - Blockbuster Movies
  - Only on Netflix
  - Upcoming Movies
  - Top Picks for You
- **Horizontal Scrolling**: Smooth scrolling through movie cards
- **Movie Details**: Click on any movie to view trailer

### Video Player
- **YouTube Integration**: Stream movie trailers
- **Movie Information**: Display release date, title, and type
- **Navigation**: Easy back navigation to home page

### User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Netflix-like UI**: Authentic Netflix styling and layout
- **Loading States**: Spinner animations during authentication
- **Toast Notifications**: User feedback for actions

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **Vite 6.3.5** - Build tool and development server
- **React Router DOM 7.6.2** - Client-side routing
- **CSS3** - Styling and animations

### Backend & Services
- **Firebase 11.9.1** - Authentication and database
- **Firestore** - NoSQL database for user data
- **TMDB API** - Movie data and images
- **YouTube API** - Video streaming

### Development Tools
- **ESLint** - Code linting
- **React Hooks** - State management
- **React Toastify** - Notifications

## 📁 Project Structure

```
netflix-clone/
├── public/
├── src/
│   ├── assets/
│   │   ├── cards/
│   │   └── [images and icons]
│   ├── components/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── TitleCards/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- TMDB API account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Copy your Firebase config

4. **Set up TMDB API**
   - Create an account at [TMDB](https://www.themoviedb.org/)
   - Get your API key from the API section
   - Generate a Bearer token for API requests

5. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_TMDB_BEARER_TOKEN=your_tmdb_bearer_token
   ```

6. **Update Firebase Configuration**
   Update `src/firebase.js` with your Firebase config details

7. **Update TMDB Authorization**
   Update the Bearer token in `src/components/TitleCards/TitleCards.jsx` and `src/pages/Player/Player.jsx`

### Running the Application

1. **Development Mode**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Usage

### Authentication
1. **Sign Up**: Create a new account with name, email, and password
2. **Sign In**: Login with existing credentials
3. **Auto-redirect**: Automatic navigation based on authentication status

### Browsing Movies
1. **Home Page**: Browse featured content and movie categories
2. **Scroll**: Use mouse wheel or touch to scroll through movie cards
3. **Click**: Select any movie to watch its trailer

### Watching Content
1. **Player Page**: Automatic trailer playback
2. **Movie Info**: View release date, title, and content type
3. **Navigation**: Use back arrow to return to browsing

## 🔧 Configuration

### Firebase Setup
- Authentication: Email/Password provider enabled
- Firestore: User collection with uid, name, email, authProvider fields
- Security Rules: Configure based on your requirements

### TMDB API Integration
- **Endpoints Used**:
  - `/movie/now_playing` - Currently playing movies
  - `/movie/popular` - Popular movies
  - `/movie/top_rated` - Top rated movies
  - `/movie/upcoming` - Upcoming movies
  - `/movie/{id}/videos` - Movie trailers

## 🎨 Customization

### Styling
- CSS files are located in each component/page directory
- Global styles in `src/index.css`
- Netflix color scheme and typography

### Adding New Categories
1. Add new category to TMDB API endpoints
2. Update `TitleCards` component with new category prop
3. Add new `TitleCards` instance in `Home` component

### Modifying Authentication
- Update `firebase.js` for additional auth providers
- Modify `Login.jsx` for UI changes
- Adjust `App.jsx` for routing logic

## 🐛 Troubleshooting

### Common Issues

1. **Firebase Configuration Error**
   - Verify all Firebase config values in `.env`
   - Check Firebase project settings
   - Ensure Authentication and Firestore are enabled

2. **TMDB API Issues**
   - Verify Bearer token is valid
   - Check API rate limits
   - Ensure proper CORS configuration

3. **Build Issues**
   - Clear `node_modules` and reinstall dependencies
   - Check for version compatibility
   - Verify all environment variables

### Error Handling
- Authentication errors are displayed via toast notifications
- API errors are logged to console
- Loading states prevent user interaction during async operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Please respect the terms of service of Netflix, TMDB, and other services used.

## 🙏 Acknowledgments

- [Netflix](https://netflix.com) for design inspiration
- [TMDB](https://www.themoviedb.org/) for movie data
- [Firebase](https://firebase.google.com/) for backend services
- [React](https://reactjs.org/) community for excellent documentation

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section
2. Search existing issues
3. Create a new issue with detailed information

---

**Made with ❤️ using React and Firebase**