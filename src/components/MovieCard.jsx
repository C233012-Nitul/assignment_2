function MovieCard({ show, onSelect }) {
  return (
    <div className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-800">
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={show.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <svg
              className="w-16 h-16 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4v16M17 4v16M3 8h4M3 16h4M17 8h4M17 16h4M3 12h18"
              />
            </svg>
          </div>
        )}
        {show.rating?.average != null && (
          <span className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-gray-950/90 border border-gray-700 rounded-md text-xs font-semibold text-amber-400">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {show.rating.average}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-100 mb-2 truncate" title={show.name}>
          {show.name}
        </h3>
        {show.genres?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {show.genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={() => onSelect(show)}
          className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;