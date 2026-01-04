import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logoWhite from "@/assets/LogoBrancaSemFundoAzul.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
    {
      label: "GitHub",
      href: "https://github.com/MemoryForensicsLibrary",
      external: true,
    },
  ];

  return (
    <nav className="w-full py-4 bg-blue-600 border-b border-blue-700">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoWhite}
            alt="Memory Forensics Library"
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-semibold text-white">
            Memory Forensics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white transition-colors hover:text-blue-200"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-blue-200"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-500 bg-blue-600">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
