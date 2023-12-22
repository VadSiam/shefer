'use client'
import { usePathname } from "next/navigation";
import AuthButton, { LogoutButton } from "../AuthButton";
import ThemeSwitcher from "../ThemeSwitcher";
import LogoImage from "./LogoImage";
import { useCallback, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import LangSwitcher from "../LangSwitcher";
import AdminButton from "../AdminButton";
import { useMainContext } from "@/utils/context/main.context";
import CartButton from "../CartButton";

const activePassiveNameStyles = (pathname: string, name: string): string => {
  return pathname.includes(name)
    ? ' text-white bg-sh-azure rounded md:bg-transparent md:text-sh-azure md:p-0 md:dark:text-sh-azure'
    : ' text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
}


const Header: React.FC<{ lng: string }> = ({ lng }) => {

  const { t } = useTranslation(lng, 'header')
  const pathname = usePathname();
  const { userData } = useMainContext();

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuVisible(prevState => !prevState);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuVisible(false);
  }, []);


  if (pathname.includes('/admin')) {
    return null;
  }

  return (
    <nav className="h-22 fixed w-full z-20 top-0 left-0 border-b border-foreground-black dark:border-foreground-white">
      <div className="uppercase max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="/" className="flex items-center">
          <LogoImage />
        </a>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuVisible ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex w-screen absolute left-0 -top-4 h-screen md:static md:h-auto md:w-auto flex-col p-4 md:p-0 mt-4 font-medium bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-background dark:bg-black md:dark:bg-background dark:border-gray-700">
            <li
              className="md:hidden flex flex-col justify-center items-end mb-2"
              onClick={toggleMenu}
            >
              <svg width="44" height="31" viewBox="0 0 44 31" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.1665 17H42.1665" stroke="var(--svg-stroke-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.1665 7H42.1665" stroke="var(--svg-stroke-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.1665 27H42.1665" stroke="var(--svg-stroke-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
            {userData && <li className="flex md:hidden flex-col justify-center">
              <a
                href={`/${lng}/account`}
                className={`block py-2 pl-3 pr-4 ${activePassiveNameStyles(pathname, 'account')}`}
              >
                {t('Аккаунт')}
              </a>
            </li>}
            <li className="flex pl-3">
              <LangSwitcher lng={lng} />
            </li>
            <li className="flex pl-3">
              <ThemeSwitcher action={closeMenu} />
            </li>
            {userData && <div className="flex md:hidden">
              <LogoutButton lng={lng} action={closeMenu} />
            </div>}
          </ul>
        </div>
        <div className="flex md:order-2">
          <AdminButton lng={lng} />
          <AuthButton lng={lng} />
          {!isMobileMenuVisible && userData && (
            <CartButton lng={lng} />
          )}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="ml-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Header;
