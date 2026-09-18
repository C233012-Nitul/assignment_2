function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Movie Explorer</span>
            {' '}— Browse and search TV shows via TVMaze
          </p>
          <p className="text-sm text-gray-500">© 2026 Movie Explorer</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;