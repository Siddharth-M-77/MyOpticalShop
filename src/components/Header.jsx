import { Link, useNavigate } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";
import { useState } from "react";
import {
  Calendar,
  Eye,
  Home,
  Info,
  Mail,
  Menu,
  Package,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointment = () => {
    setAppointmentOpen(true);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/products", label: "Products", icon: Package },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center gap-2 cursor-pointer "
              onClick={handleLogoClick}
            >
              <img className="w-20 h-20" src={logo} alt="" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button> */}
              {/* <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button> */}
              {/* <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
                <User className="h-5 w-5 text-gray-700" />
              </button> */}
              {/* Desktop Book Appointment Button */}
              <button
                onClick={handleBookAppointment}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition shadow-md hover:shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </button>
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="py-4 border-t animate-in slide-in-from-top duration-300">
              <input
                type="text"
                placeholder="Search for glasses, sunglasses, lenses..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                autoFocus
              />
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="flex items-center gap-2">
              </div>
              <img className="w-40 h-40" src={logo} alt="" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-white/50 rounded-full transition"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl font-medium transition-all duration-200 group"
                    >
                      <Icon className="h-5 w-5 text-gray-500 group-hover:text-teal-600 transition-colors" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </>
  );
};

export default Header;
