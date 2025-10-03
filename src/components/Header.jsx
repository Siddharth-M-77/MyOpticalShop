import React, { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Header Component
const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleLogoClick = () => {
    navigate("/"); // navigate to home
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top smoothly
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Eye className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-gray-900">MEC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="h-5 w-5 text-gray-700" />
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t">
            <input
              type="text"
              placeholder="Search for glasses, sunglasses, lenses..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
