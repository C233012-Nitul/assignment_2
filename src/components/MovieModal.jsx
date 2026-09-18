import { useEffect } from 'react';

function stripHtml(html) {
  if (!html) return 'No description available.';
  const text = html.replace(/<[^>]*>/g, ' ');
  return text.replace(/\s+/g, ' ').trim();
}

function MovieModal({ show, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-950/80 border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {show.image?.original && (
          <div className="relative h-48 sm:h-64 w-full overflow-hidden">
            <img
              src={show.image.original}
              alt={show.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
        )}

        <div className="p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {show.name}
          </h2>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {show.rating?.average != null ? (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-sm font-semibold text-amber-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {show.rating.average}
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-gray-800 rounded-md text-sm text-gray-400">
                No rating
              </span>
            )}
            {show.genres?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}
          </div>

          <p className="text-gray-300 leading-relaxed">
            {stripHtml(show.summary)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;