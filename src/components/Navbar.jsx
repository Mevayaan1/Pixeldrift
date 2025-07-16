import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Directors', path: '/directors' },
    { name: 'Products', path: '/products' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-[#000]/80 backdrop-blur-md border-b border-[#000000]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0055FF] to-[#00F0FF]">
              YL
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className="px-4 py-2 text-[#f5f5f5] hover:text-[#00F0FF] text-sm font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#f5f5f5] hover:text-[#00F0FF] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileOpen ? 1 : 0,
          height: mobileOpen ? 'auto' : 0
        }}
        className="md:hidden overflow-hidden bg-[#111111] border-t border-[#333333]"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#f5f5f5] hover:text-[#00F0FF] hover:bg-[#333333]"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;