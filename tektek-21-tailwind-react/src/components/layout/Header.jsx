import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <img src="/logo.png" alt="TekTek-21 Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              TekTek-21
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/presentation" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Présentation
            </Link>
            <Link to="/collaborateurs" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Collaborateurs
            </Link>
            <Link to="/tous-les-dons" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Tous les dons
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/donner">
              <Button>Faire un don</Button>
            </Link>
            <Link to="/login">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
