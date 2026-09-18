import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieListingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;