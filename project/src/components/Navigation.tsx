import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu as MenuIcon, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Our Story' },
    { href: '#menu', label: 'Menu' },
    { href: '#roastery', label: 'Skyview Roastery' },
    { href: '#atmosphere', label: 'The Vibe' },
    { href: '#visit', label: 'Visit' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cafe-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <Logo size={36} />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-display text-sm tracking-widest uppercase transition-colors duration-300 hover:text-cafe-green ${
                  scrolled ? 'text-cafe-charcoal' : 'text-cafe-charcoal/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cafe-charcoal p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cafe-cream/98 backdrop-blur-md px-6 pb-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-sm tracking-widest uppercase text-cafe-charcoal hover:text-cafe-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
