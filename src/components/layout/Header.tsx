import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Forside", path: "/" },
    { name: "Om os", path: "/om-os" },
    { name: "Services", path: "/services" },
    { name: "Priser", path: "/priser" },
    { name: "Guide", path: "/guides/saadan-bestaar-du-dit-flyttesyn" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="/logo.webp" alt="Rendetalje Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2",
                (link.path === "/" && location.pathname === "/") ||
                  isActive(link.path)
                  ? "text-green-600"
                  : "text-slate-600",
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            <Phone size={16} />
            {company.phone.replace("+45 ", "")}
          </a>
          <Link
            to="/kontakt"
            className="inline-flex h-10 items-center justify-center rounded-full bg-green-600 px-6 text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            Få et tilbud
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-lg"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2",
                  (link.path === "/" && location.pathname === "/") ||
                    isActive(link.path)
                    ? "text-green-600"
                    : "text-slate-600",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/kontakt"
                className="flex w-full h-12 items-center justify-center rounded-full bg-green-600 px-6 text-base font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Få et tilbud
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
