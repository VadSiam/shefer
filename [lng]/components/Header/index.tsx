'use client'
import { usePathname } from "next/navigation";
import AuthButton from "../AuthButton";
import ThemeSwitcher from "../ThemeSwitcher";
import LogoImage from "./LogoImage";
import { useState } from "react";
// import LangSwitcher from "../LangSwitcher";
// import { useTranslation } from "@/app/i18n";
import { TFunction } from "i18next/typescript/t";
import { useTranslation } from "@/app/i18n/client";
import LangSwitcher from "../LangSwitcher";

const activePassiveNameStyles = (pathname: string, name: string): string => {
  return pathname.includes(name)
    ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
    : ' text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
}


const Header: React.FC<{ lng: string }> = ({ lng }) => {

  const { t } = useTranslation(lng, 'header')
  const pathname = usePathname();
  console.log('🚀 ~ file: index.tsx:24 ~ pathname:', pathname)

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuVisible(prevState => !prevState);
  };


  if (pathname.includes('/admin')) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <LogoImage />
        </a>
        <div className="flex md:order-2">
          <AuthButton lng={lng} />
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuVisible ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex w-screen absolute left-0 -top-4 h-screen md:static md:h-auto md:w-auto flex-col p-4 md:p-0 mt-4 font-medium bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-gray-900 dark:border-gray-700">
            <li
              className="md:hidden flex flex-col justify-center items-end mb-2"
              onClick={toggleMenu}
            >
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="var(--svg-stroke-color)" strokeWidth="1.5" />
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="var(--svg-stroke-color)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </li>
            <li className="flex flex-col justify-center">
              <a
                href={`/${lng}/catalog`}
                className={`block py-2 pl-3 pr-4 ${activePassiveNameStyles(pathname, 'catalog')}`}
                aria-current="page"
              >
                {t('Каталог')}
              </a>
            </li>
            <li className="flex flex-col justify-center">
              <a
                href={`/${lng}/about`}
                className={`block py-2 pl-3 pr-4 ${activePassiveNameStyles(pathname, 'about')}`}
              >
                {t('О нас')}
              </a>
            </li>
            <li className="flex flex-col justify-center">
              <a
                href={`/${lng}/contacts`}
                className={`block py-2 pl-3 pr-4 ${activePassiveNameStyles(pathname, 'contacts')}`}
              >
                {t('Контакты')}
              </a>
            </li>
            <li className="flex flex-col justify-center">
              <a
                href={`/${lng}/account`}
                className={`block py-2 pl-3 pr-4 ${activePassiveNameStyles(pathname, 'account')}`}
              >
                {t('Аккаунт')}
              </a>
            </li>
            <li className="flex pl-3 py-2">
              <ThemeSwitcher />
            </li>
            <li className="flex pl-3 py-2">
              <LangSwitcher lng={lng} t={t} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
