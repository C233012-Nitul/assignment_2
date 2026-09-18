# Movie Explorer

A responsive React web app to browse and search TV shows using the free [TVMaze API](https://www.tvmaze.com/api) — no API key required.

## Features

- **Home page** with hero banner and CTA
- **Movie listing page** showing all TV shows
- **Live search** with debounce via the TVMaze search endpoint
- **Movie cards** with poster, name, genres, and rating
- **Details modal** with backdrop image, full summary (HTML tags stripped), genres, and rating
- **Fully responsive**: 1 column on mobile, 2 on tablet, 3–4 on desktop
- **Loading / error / empty states** for all fetches

## Tech Stack

- React (create-react-app)
- React Router v6
- Tailwind CSS
- TVMaze API

## API Usage

| Purpose | Endpoint |
|---|---|
| All shows | `GET https://api.tvmaze.com/shows` |
| Search by title | `GET https://api.tvmaze.com/search/shows?q={query}` |

## Getting Started

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build
```

## Deployment

Deployed on Vercel: [\[live link\]](https://movie-explorer-three-dusky.vercel.app/)

## Project Structure

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    HeroBanner.jsx
    MovieCard.jsx
    MovieGrid.jsx
    SearchBar.jsx
    MovieModal.jsx
  hooks/
    useMovies.js
  pages/
    HomePage.jsx
    MovieListingPage.jsx
  App.jsx
  index.js
```

## License

MIT