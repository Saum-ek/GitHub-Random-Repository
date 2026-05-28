# 🎲 GitHub Random Repository Finder

A React web app that fetches a random GitHub repository based on a selected programming language using the GitHub Search API.

---

## ✨ Features

- 🌐 Fetches random repositories from the GitHub API
- 🔤 Filter by programming language
- ⭐ Displays repo name, description, stars, forks, language and open issues
- 🎨 Clean UI with Tailwind CSS and glassmorphism design

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Search API](https://docs.github.com/en/rest/search)

---

## 📁 Project Structure

```
src/
├── App.jsx             # Main component, state and fetch logic
├── LanguageSelector.jsx # Language dropdown
├── Repocard.jsx        # Displays repo data
└── Fetch.jsx           # Fetch button
```

---

## 📡 API Used

```
https://api.github.com/search/repositories?q=language:{language}&sort=stars
```

No API key required — GitHub's public API is used directly.

---

## 🤝 Contributing

This is a personal learning project — feel free to fork and build on it!

---

## 👤 Author

**Saumek**  
GitHub: [@Saum-ek](https://github.com/Saum-ek)
