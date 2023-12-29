'use client'

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

const ThemeSwitcher = ({ action }: { action?: () => void }) => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const isDarkTheme = theme === 'system' ? (systemTheme === 'dark') : (theme === 'dark');

  const toggleTheme = useCallback(() => {
    setTheme(isDarkTheme ? "light" : "dark")
    action?.();
  }, [action, isDarkTheme, setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <label
      htmlFor="AcceptConditions"
      className="self-center relative h-8 w-14 my-2 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
        onClick={toggleTheme}
        onChange={() => { }}
        checked={isDarkTheme}
      />

      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"
      >
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <g id="sunlight" transform="translate(-2 -2)">
            <circle id="secondary" fill="#bcbc2c" cx="5" cy="5" r="5" transform="translate(7 7)" />
            <path id="primary" d="M12,7V3m3.54,5.46,2.82-2.82M17,12h4m-5.46,3.54,2.82,2.82M12,17v4M8.46,15.54,5.64,18.36M7,12H3M8.46,8.46,5.64,5.64M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <g id="moon-alt" transform="translate(-2.25 -2)">
            <path id="secondary" fill="currentColor" d="M21,12A9,9,0,0,1,3.25,14.13,6.9,6.9,0,0,0,8,16,7,7,0,0,0,11.61,3H12a9,9,0,0,1,9,9Z" />
            <path id="primary" d="M21,12A9,9,0,0,1,3.25,14.13,6.9,6.9,0,0,0,8,16,7,7,0,0,0,11.61,3H12a9,9,0,0,1,9,9Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </span>

      <span
        className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
      ></span>
    </label>
  );
};

export default ThemeSwitcher;
