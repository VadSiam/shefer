import React, { useState, useRef, useEffect } from 'react';

export interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  buttonText: string;
  items: DropdownItem[];
  onSelect: (_value: DropdownItem) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: DropdownItem) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent border-2 rounded-full text-sh-azure border-sh-azure hover:bg-sh-azure hover:text-white focus:outline-none focus:ring-2 focus:ring-sh-azure focus:ring-opacity-50 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-sh-azure"
        type="button"
      >
        {buttonText}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 cursor-pointer text-sh-azure hover:bg-sh-azure hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-sh-azure"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
