import React, { useState } from 'react';
import NavbarWithMegaMenu from "./components/navbar/Navbar";
import HeroSection from './components/hero/HeroSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(<HeroSection/>);
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div>
      <NavbarWithMegaMenu onNavItemClick={handleNavItemClick} toggleTheme={toggleTheme} theme={theme}/>
      {React.cloneElement(activeSection, { theme })}
    </div>
  );
}