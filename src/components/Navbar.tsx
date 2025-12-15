import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 md:h-24">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="SphereAlly" 
              className={`h-10 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </div>
          <span className={`text-xl font-semibold transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
            SphereAlly
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                scrolled 
                  ? 'text-muted-foreground hover:text-primary' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-primary' : 'bg-primary-foreground'
              }`} />
            </a>
          ))}
          <a
            href="https://wa.me/919744978305?text=Hi%20SphereAlly,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 hover:scale-105 ${
              scrolled 
                ? 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25' 
                : 'bg-primary-foreground text-primary hover:shadow-lg hover:shadow-background/25'
            }`}
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-20 md:top-24 left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-wide py-8 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border/50 last:border-0"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+917592947230?text=Hi%20SphereAlly,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-4 bg-primary text-primary-foreground rounded-full text-center font-semibold text-lg hover:bg-sphere-navy-dark transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
