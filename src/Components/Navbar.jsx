import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4   backdrop-blur">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-white dark:bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 px-3 py-1 rounded-lg hover:scale-105 transform transition"
        >
          Motmaker
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-pink-300 transition">Home</Link>
          <Link to="/portfolio" className="hover:text-pink-300 transition border px-3 py-1 flex items-center rounded-full justify-center border-green-600 pb-2 bg-green-100 text-green-900">portfolio</Link>
          <Link to="/projects" className="hover:text-pink-300 transition">Projects</Link>
          <Link to="/reports" className="hover:text-pink-300 transition">Reports</Link>
          <Link to="/teams" className="hover:text-pink-300 transition">Teams</Link>
          <Link to="/tasks" className="hover:text-pink-300 transition">Tasks</Link>
          <Link to="/settings" className="hover:text-pink-300 transition">Settings</Link>
        </div>


        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 hidden md:flex border border-pink-200 rounded-md">
                    Login
          </button>
          <div className="relative group flex gap-3">
            <div className="px-2 py-1 rounded-lg border-l border-white/20 shadow-lg bg-white/20 hover:bg-white/30 cursor-pointer transition">
                  {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "💻"}
            </div> 

            <div className="absolute top-8 right-0 hidden group-hover:flex flex-col  text-black dark:text-white rounded-lg shadow-lg w-28 overflow-hidden border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setTheme("dark")}
                className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-left ${
                  theme === "dark" ? "bg-pink-200 dark:bg-gray-600 font-semibold" : ""
                }`}
              >
                🌙 Dark
              </button>
              <button
                onClick={() => setTheme("light")}
                className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-left ${
                  theme === "light" ? "bg-pink-200 dark:bg-gray-600 font-semibold" : ""
                }`}
              >
                ☀️ Light
              </button>
              <button
                onClick={() => setTheme("system")}
                className={`px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-left ${
                  theme === "system" ? "bg-pink-200 dark:bg-gray-600 font-semibold" : ""
                }`}
              >
                💻 System
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 cursor-pointer rounded-lg  transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden h-screen backdrop-blur/10  mt-4 flex flex-col text-gray-800 dark:text-white space-y-2  dark:bg-gray-800/5 shadow-3xl rounded-lg p-4  dark:border-gray-700 animate-slide-down transition-all duration-500">
          <Link onClick={() => setMobileOpen(false)} to="/" className="hover:text-pink-300 font-bold text-lg transition"> Home</Link>
          <Link onClick={() => setMobileOpen(false)} to="/projects" className="hover:text-pink-300 font-bold text-lg transition">Projects</Link>
          <Link onClick={() => setMobileOpen(false)} to="/reports" className="hover:text-pink-300 font-bold text-lg transition">Reports</Link>
          <Link onClick={() => setMobileOpen(false)} to="/teams" className="hover:text-pink-300 font-bold text-lg transition">Teams</Link>
          <Link onClick={() => setMobileOpen(false)} to="/tasks" className="hover:text-pink-300 font-bold text-lg transition">Tasks</Link>
          <Link onClick={() => setMobileOpen(false)} to="/settings" className="hover:text-pink-300 font-bold text-lg transition">Settings</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
