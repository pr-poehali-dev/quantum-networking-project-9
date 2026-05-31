import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { label: "Коллекции", href: "/collections" },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contacts" },
    { label: "Доставка", href: "/delivery" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dk-bg/95 backdrop-blur-sm border-b border-dk-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M16 2L4 8v8c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V8L16 2z" fill="#E85D04" opacity="0.2"/>
                  <path d="M16 2L4 8v8c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V8L16 2z" stroke="#E85D04" strokeWidth="1.5"/>
                  <path d="M10 14l4 3 2-5 2 5 4-3" stroke="#FFB703" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="11" r="2" fill="#E85D04"/>
                </svg>
              </div>
              <span className="font-display text-xl md:text-2xl text-white tracking-widest group-hover:text-dk-accent transition-colors">
                DRAGON KINGDOM
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-dk-muted hover:text-white font-heading font-semibold text-sm tracking-widest uppercase transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dk-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-dk-muted hover:text-white transition-colors"
              >
                <Icon name="Search" size={20} />
              </button>
              <Link to="/profile" className="text-dk-muted hover:text-white transition-colors hidden md:block">
                <Icon name="User" size={20} />
              </Link>
              <Link to="/cart" className="text-dk-muted hover:text-white transition-colors relative">
                <Icon name="ShoppingBag" size={20} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-dk-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
              <button
                className="md:hidden text-dk-muted hover:text-white transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск товаров..."
                  className="flex-1 bg-dk-block border border-dk-border text-white placeholder-dk-muted px-4 py-2.5 text-sm focus:outline-none focus:border-dk-accent transition-colors"
                />
                <button type="submit" className="btn-primary px-4 py-2.5">
                  <Icon name="Search" size={18} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-dk-block border-t border-dk-border">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-dk-muted hover:text-white hover:bg-dk-bg font-heading font-semibold text-sm tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-dk-muted hover:text-white hover:bg-dk-bg font-heading font-semibold text-sm tracking-widest uppercase transition-colors"
              >
                Профиль
              </Link>
            </nav>
          </div>
        )}
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}