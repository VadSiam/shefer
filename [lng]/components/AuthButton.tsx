'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useMainContext } from '@/utils/context/main.context'
import StyledLink from './ThemesComponents/StyledLink'
import { IPageElementProps } from '@/app/[lng]/page'
import { useTranslation } from '@/app/i18n/client'
import { getRandomNumber } from '@/utils/helpers'

const AuthButton: React.FC<IPageElementProps> = React.memo(({ lng }) => {
  const { userData } = useMainContext();
  const { t } = useTranslation(lng, 'header')
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = useCallback(
    () => setDropdownOpen((state) => !state), []
  );

  const randomNumber = useMemo(() => getRandomNumber(1, 16), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef?.current && (buttonRef.current as HTMLElement).contains(event.target as Node)) {
        return;
      }
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {userData ? (
        <div className="items-center hidden gap-4 md:flex">
          <div className="items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              ref={buttonRef}
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className="w-8 h-8 rounded-full"
                src={`/avatars/${randomNumber}.png`}
                width={32}
                height={32}
                alt="user photo"
              />
            </button>
            <div className='relative' ref={dropdownRef}>
              <div className={`absolute right-0 top-2 z-50 ${dropdownOpen ? '' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{userData?.email}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href={`/${lng}/account`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {t('Аккаунт')}
                    </a>
                  </li>
                  <LogoutButton lng={lng} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StyledLink
          text={t('ВОЙТИ')}
          href={`/${lng}/login`}
          textButton
        />
      )}
    </>
  )
});

AuthButton.displayName = 'AuthButton';

export default AuthButton;

interface ILogout extends IPageElementProps {
  action?: () => void
}

export const LogoutButton: React.FC<ILogout> = React.memo(({ lng, action }) => {
  const { resetUserData } = useMainContext();
  const { t } = useTranslation(lng, 'header')

  const signOut = useCallback(async () => {
    action?.()
    resetUserData()
  }, [action, resetUserData]);

  return (
    <div
      onClick={signOut}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
      {t('ВЫЙТИ')}
    </div>
  )
});

LogoutButton.displayName = 'LogoutButton';
