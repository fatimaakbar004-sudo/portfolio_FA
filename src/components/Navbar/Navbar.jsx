import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-[rgb(var(--primary))]"
        >
          Portfolio
        </a>

        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-[rgb(var(--primary))] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="w-11 h-11 rounded-full border flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-[rgb(var(--background))] border-t border-gray-200 dark:border-gray-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 hover:bg-[rgb(var(--primary))]/10"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;