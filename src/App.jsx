import React, { useState, useEffect } from 'react';
import NavbarWithMegaMenu from "./components/navbar/Navbar";
import HeroSection from './components/hero/HeroSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(<HeroSection />);
  const [theme, setTheme] = useState(getInitialTheme());

  // Function to get initial theme based on system preference
  function getInitialTheme() {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return preferredTheme;
  }

  // Effect to listen for changes in system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    // Add listener for changes in system theme preference
    mediaQuery.addEventListener('change', handleChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <NavbarWithMegaMenu onNavItemClick={handleNavItemClick} toggleTheme={toggleTheme} theme={theme} />
      {React.cloneElement(activeSection, { theme })}
    </div>
  );
}
