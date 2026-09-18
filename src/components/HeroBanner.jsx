function HeroBanner() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-gray-950 to-blue-900/60" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your Next{' '}
          <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
            Favorite Show
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Explore thousands of TV shows — from timeless classics to
          hidden gems. Search by title, view ratings, and get all the
          details in one click.
        </p>
        <a
          href="/movies"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold rounded-lg text-lg shadow-lg shadow-red-900/50 hover:opacity-90 transition-opacity"
        >
          Browse Movies
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
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-400">
          <span>🎬 30,000+ Shows</span>
          <span>★ Ratings from TVMaze</span>
          <span>🔍 Live search</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;