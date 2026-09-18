import { useState } from 'react';
import useMovies from '../hooks/useMovies';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import MovieModal from '../components/MovieModal';

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-12 h-12 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin" />
      <p className="text-gray-400">Loading shows...</p>
    </div>
  );
}

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center py-24 space-y-4">
      <p className="text-red-400 text-lg">Something went wrong: {message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

function EmptyState({ query }) {
  return (
    <div className="text-center py-24 space-y-3">
      <p className="text-4xl">🔍</p>
      <p className="text-gray-200 text-lg font-medium">
        No shows found for "{query}"
      </p>
      <p className="text-gray-400">Try a different search term</p>
    </div>
  );
}

function MovieListingPage() {
  const { shows, query, setQuery, loading, error, searching, reload } = useMovies();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          {query.trim() ? `Results for "${query}"` : 'All Shows'}
        </h1>
        <SearchBar query={query} onQueryChange={setQuery} searching={searching} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} onRetry={reload} />
      ) : shows.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <MovieGrid shows={shows} onSelect={setSelectedShow} />
      )}

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}

export default MovieListingPage;