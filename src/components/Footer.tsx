import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Bottom Bar */}
      <div className="container-wide py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SphereAlly" className="h-8 w-auto brightness-0 invert" />
            <span className="text-lg font-semibold">SphereAlly</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            {['Home', 'About', 'Courses', 'Testimonials', 'Careers', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SphereAlly
          </p>
        </div>
      </div>
    </footer>
  );
}
