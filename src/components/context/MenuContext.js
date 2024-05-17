import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');

  return (
    <MenuContext.Provider value={{ selectedMenuItem, setSelectedMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
