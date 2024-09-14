import React, { useState, useEffect, useRef } from 'react';

const DropdownButton = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort By');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left p-2 z-10" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-black border-2 border-white w-36 text-white px-4 py-1 rounded-full hover:bg-gray-900 focus:outline-none"
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownButton; 