<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>

# 🔮 YT-Glass — A Glassmorphic YouTube Client

**YT-Glass** is a sleek, glassmorphism-themed YouTube client built with React. It reimagines the YouTube browsing experience through frosted-glass panels, blurred backgrounds, and translucent UI elements — giving the classic YouTube layout a modern, premium aesthetic.

> **Live search · Voice input · Inline video playback · Google sign-in — all wrapped in glass.**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Google Authentication** | Secure sign-in via Firebase Google Auth with persistent sessions (localStorage) |
| 🔍 **YouTube Search** | Real-time search powered by the YouTube Data API v3 with up to 50 results |
| 🎙️ **Voice Search** | Speak to search using the Web Speech API (`webkitSpeechRecognition`) |
| 💡 **Search Suggestions** | Live autocomplete suggestions fetched from Google's suggestion endpoint |
| 🏠 **Trending Home Feed** | Homepage populated with popular long-form videos on load |
| ▶️ **Inline Video Player** | Click any video card to expand an embedded YouTube player in-place |
| 🪟 **Glassmorphism UI** | Frosted-glass sidebar, search bar, and cards with `backdrop-blur`, gradients, and ring effects |
| 📱 **Responsive Design** | Adaptive layout — desktop sidebar collapses to a mobile bottom navigation bar |
| 🚪 **Logout** | One-click logout clears the session and returns to the login screen |

---

## 🖼️ UI Overview

### Login Screen
A full-screen blurred background with a single glassmorphic **"Sign With Google"** button — minimal and elegant.

### Main Interface
- **Logo & Hamburger** — YouTube-styled logo with a hamburger menu icon (desktop only)
- **Search Bar** — Centered, glass-styled input with search icon, voice search button, and user avatar
- **Sidebar** (desktop) — Translucent panel with navigation sections: Home, Shorts, Subscription, Library, History, Trending, Music, Film, Gaming
- **Bottom Nav** (mobile) — Compact icon bar with Home, Shorts, Subscription, and Logout
- **Video Grid** — Responsive grid (1 → 2 → 3 columns) of video cards with thumbnails, titles, and channel names

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI library with functional components & hooks |
| [Vite 8](https://vite.dev) | Lightning-fast build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [Firebase](https://firebase.google.com) | Google Authentication (sign-in with popup) |
| [YouTube Data API v3](https://developers.google.com/youtube/v3) | Video search & trending video data |
| [Lucide React](https://lucide.dev) | Beautiful, consistent SVG icon library |
| [React Player](https://github.com/cookpete/react-player) | (Available) React component for media playback |

---

## 📁 Project Structure

```
glass-yt/
├── public/
├── src/
│   ├── assets/
│   │   ├── Components/
│   │   │   ├── HomePage.jsx          # Trending videos grid (home feed)
│   │   │   ├── HomePageVideoCard.jsx # Thumbnail card for home grid
│   │   │   ├── InputBar.jsx          # Search bar + suggestions + search results
│   │   │   ├── LogoHamburger.jsx     # YouTube logo & hamburger icon
│   │   │   ├── Sidebar.jsx           # Desktop sidebar + mobile bottom nav
│   │   │   └── Trending.jsx          # Trending section variant
│   │   ├── VideoCard.jsx             # Video card for search results (horizontal)
│   │   ├── bac.jpeg                  # Background image
│   │   └── hero.png                  # Hero asset
│   ├── App.jsx                       # Root component — auth, routing, layout
│   ├── App.css                       # Legacy/additional CSS
│   ├── firebase.js                   # Firebase config & auth exports
│   ├── login.jsx                     # Google sign-in screen
│   ├── index.css                     # Tailwind CSS import
│   └── main.jsx                      # React DOM entry point
├── .env                              # YouTube API key (gitignored)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**
- A **YouTube Data API v3** key → [Get one here](https://console.cloud.google.com/apis/api/youtube.googleapis.com)
- A **Firebase project** with Google Auth enabled → [Firebase Console](https://console.firebase.google.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/yt-glass.git
cd yt-glass/glass-yt

# 2. Install dependencies
npm install

# 3. Create the environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the `glass-yt/` directory:

```env
VITE_YT_API_KEY=your_youtube_data_api_v3_key_here
```

> [!NOTE]
> The Firebase config is currently hardcoded in `src/firebase.js`. For production use, consider moving these values to environment variables as well.

### Run the Dev Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 API Keys & Configuration

### YouTube Data API

1. Go to the [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Enable the **YouTube Data API v3**
4. Create an API key under **Credentials**
5. Add the key to your `.env` file as `VITE_YT_API_KEY`

### Firebase Authentication

1. Create a project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Google** as a sign-in provider under **Authentication → Sign-in method**
3. Update the Firebase config in `src/firebase.js` with your project credentials

---

## 🎨 Design Philosophy

YT-Glass is built around the **glassmorphism** design trend:

- **`backdrop-blur-md` / `backdrop-blur-sm`** — Frosted glass effect on panels and buttons
- **`bg-white/10`, `bg-black/40`** — Semi-transparent backgrounds
- **`ring-1 ring-white/20`** — Subtle glowing borders
- **`bg-gradient-to-b from-white/30 to-white/5`** — Gradient overlays for depth
- **Blurred background image** — Full-screen `bac.jpeg` with `blur-md` and `brightness-75`
- **Hover animations** — `hover:scale-90`, `hover:bg-gray-400/20` for interactive feedback

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve YT-Glass:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React, Vite & Tailwind CSS
</p>
