import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const user = null; // Force user to null to hide auth UI

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Study Abroad', href: '/study-abroad' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020A2E]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center bg-transparent smooth-transition">
            <img 
              src={logo} 
              alt="Aspra Overseas Logo" 
              className="block h-14 w-auto object-contain scale-110" 
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <motion.a
                  whileHover={{ y: -1, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative px-2 py-1 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </motion.a>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#020A2E]"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.href;

              return (
                <Link key={item.href} href={item.href}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      }`}
                    />
                  </motion.a>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
