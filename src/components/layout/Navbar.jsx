import { useState, useEffect } from 'react';
import Container from '../ui/Container';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-800' 
        : 'bg-transparent'}`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Mustafa
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {['Services', 'Process', 'About', 'Technologies', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-dark-100 hover:text-primary-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 
                     text-white font-medium hover:from-primary-700 hover:to-primary-800 
                     transition-all duration-300 shadow-lg shadow-primary-600/20
                     hover:shadow-primary-700/30"
          >
            Let's Talk
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;