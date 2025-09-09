import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, MapPin, Heart, User, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Jharkhand Tourism</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-green-600 transition-colors">
              Destinations
            </Link>
            <Link to="/itinerary" className="text-gray-700 hover:text-green-600 transition-colors">
              AI Planner
            </Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-green-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/guides" className="text-gray-700 hover:text-green-600 transition-colors">
              Guides
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">
              Analytics
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="text-sm">EN</span>
            </button>
            <Link to="/wishlist" className="text-gray-700 hover:text-green-600 transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-green-600 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-green-600 transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/itinerary"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Planner
            </Link>
            <Link
              to="/marketplace"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/guides"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;