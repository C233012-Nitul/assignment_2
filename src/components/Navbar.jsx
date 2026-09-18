import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Movie Explorer
            </span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`
              }
            >
              Movies
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;