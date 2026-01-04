import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHero = location.pathname === "/";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "GitHub", href: "https://github.com", external: true },
  ];

  return (
    <nav className={`w-full py-4 ${isHero ? "hero-section" : "bg-background border-b"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Memory Forensics Library" className="h-10 w-10 rounded" />
          <span className={`text-lg font-semibold ${isHero ? "text-hero-foreground" : "text-foreground"}`}>
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
                className={isHero ? "nav-link-hero" : "nav-link"}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={isHero ? "nav-link-hero" : "nav-link"}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isHero ? "text-hero-foreground" : "text-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden border-t ${isHero ? "border-primary-foreground/20" : "border-border"}`}>
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isHero ? "nav-link-hero" : "nav-link"}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={isHero ? "nav-link-hero" : "nav-link"}
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
