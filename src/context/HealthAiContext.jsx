// ButtonContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context with default values
const ButtonContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

// Create a Provider component
export const ButtonProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ButtonContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Create a custom hook for using the context
export const useButtonContext = () => useContext(ButtonContext);
