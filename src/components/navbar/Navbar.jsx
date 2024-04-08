import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import HeroSection from '../hero/HeroSection';
import AboutUsSection from '../about/AboutUsSection'; // Import the AboutUsSection component
import LocationSection from '../location/LocationSection';
import ReservationsForm from '../reservations/ReservationsForm';
import PrivateEventsForm from '../reservations/PrivateEventsForm';
import Dishes from '../menuItems/Dishes'; // Import the Dishes component
import Drinks from '../menuItems/Drinks'; // Import the Drinks component
import Alcohol from '../menuItems/Alcohol'; // Import the Alcohol component
import AdminLogin from '../admin/AdminLogin';
import '../../styles/Navbar.css'
const NavbarWithMegaMenu = ({ onNavItemClick, theme }) => {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null); // State to manage dropdown visibility
  const [hoveredItem, setHoveredItem] = useState(null); // State to manage the currently hovered item
//console.log(theme);
  const handleNav = () => {
    setNav(!nav); // Toggle mobile menu visibility
  };

  const handleNavItemClick = (item) => {
    if (item.dropdownItems) {
      // Show dropdown if the clicked item has dropdown items
      setShowDropdown(showDropdown === item.id ? null : item.id);
    } else {
      // Close mobile menu if the clicked item doesn't have dropdown items
      setNav(false);
      setShowDropdown(null);
      onNavItemClick(item.section);
    }
  };

  const handleDropdownItemClick = (dropdownItem) => {
    // Close mobile menu and render the corresponding component for the clicked dropdown item
    setNav(false);
    setShowDropdown(null);

    switch (dropdownItem) {
      case 'Dishes':
        onNavItemClick(<Dishes theme={theme}/>);
        break;
      case 'Drinks':
        onNavItemClick(<Drinks theme={theme}/>);
        break;

      case 'Alcohol':
        onNavItemClick(<Alcohol theme={theme}/>);
        break;
      default:
        break;
    }
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const navItems = [
    { id: 1, text: 'Home', section: <HeroSection theme={theme}/> },
    { id: 2, text: 'Menu', dropdownItems: ['Dishes', 'Drinks', 'Alcohol'] },
    { id: 3, text: 'About Us', section: <AboutUsSection theme={theme}/> },
    { id: 4, text: 'Location & Hours', section: <LocationSection theme={theme}/> },
    { id: 5, text: 'Reservations', section: <ReservationsForm theme={theme}/> },
    { id: 6, text: 'Private Events', section: <PrivateEventsForm theme={theme}/> },
    {id:7, text:'Admin Login', section: <AdminLogin theme={theme}/>}
  ];
 
  return (
    <div className={`  flex justify-between items-center h-24 mx-auto px-4  relative ${theme === 'light' ? 'light-navbar' : 'dark-navbar'}`} >
      <h1 className='w-full text-3xl font-bold '>Flavor Voyage.</h1>
      <ul className='hidden md:flex w-auto'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2   rounded-xl m-2 cursor-pointer duration-300  relative'
            onClick={() => handleNavItemClick(item)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {item.text}
            {item.dropdownItems && hoveredItem === item.id && (
              <ul className='absolute -left-2 mt-5  p-2 rounded-md'>
                {item.dropdownItems.map((dropdownItem, index) => (
                  <li
                    key={index}
                    className='cursor-pointer  py-2  rounded-xl'
                    onClick={() => handleDropdownItemClick(dropdownItem)}
                  >
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden z-50'>
        {nav ? <AiOutlineClose size={40} className='z-11' /> : <AiOutlineMenu size={40} className='z-11' />}
      </div>
      {/* Mobile Navigation Menu */}
        {/* Mobile Logo */}
        <ul className={`${
           theme === 'light' ? 'light-menu-icon' : 'dark-menu-icon'
            } ${nav ? 'fixed md:hidden text-center left-0 top-0 w-full h-full  ease-in-out duration-500 z-10' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10'}`}>

        <h1 className='w-full text-3xl font-bold  m-4'>Flavor Voyage.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl  duration-300  cursor-pointer  relative 	'
            onClick={() => handleNavItemClick(item)} // Toggle dropdown on click
          >
            {item.text}
            {/* Show dropdown items as navbar items */}
            {item.dropdownItems && showDropdown === item.id && (
              <div className={` rounded-xl ${theme === 'light' ? 'light-menu-dropdown' : 'dark-menu-dropdown'}`}>
              {item.dropdownItems.map((dropdownItem, index) => (
                  <div
                    key={index}
                    className='cursor-pointer  py-1 px-2 rounded-xl'
                    onClick={() => handleDropdownItemClick(dropdownItem)}
                  >
                    {dropdownItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarWithMegaMenu;
