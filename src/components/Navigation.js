import React from 'react';
import { useMenu } from './context/MenuContext';
const Navigation = () => {
  const { selectedMenuItem, setSelectedMenuItem } = useMenu();

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 flex flex-col">
      <ul>
        <li
          className={`p-4 cursor-pointer ${selectedMenuItem === 'home' ? 'bg-gray-700' : ''}`}
          onClick={() => handleMenuItemClick('home')}
        >
          Home
        </li>
        <li
          className={`p-4 cursor-pointer ${selectedMenuItem === 'about' ? 'bg-gray-700' : ''}`}
          onClick={() => handleMenuItemClick('about')}
        >
          About
        </li>
        <li
          className={`p-4 cursor-pointer ${selectedMenuItem === 'contact' ? 'bg-gray-700' : ''}`}
          onClick={() => handleMenuItemClick('contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
