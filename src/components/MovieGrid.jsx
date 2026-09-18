import MovieCard from './MovieCard';

function MovieGrid({ shows, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MovieGrid;