'use client'

import { useTranslation } from '@/app/i18n/client'
import LogoImage from '../Header/LogoImage'
import { useMemo } from 'react'

const Footer: React.FC<{ lng: string }> = ({lng}) => {
  const { t } = useTranslation(lng, 'footer')

  const getCurrentYear = useMemo((): number => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="w-full bg-inherit shadow mt-8 border-t border-foreground-black dark:border-foreground-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <LogoImage />
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href={`/${lng}/catalog`} className="hover:underline me-4 md:me-6">{t('Каталог')}</a>
            </li>
            <li>
              <a href={`/${lng}/about`} className="hover:underline me-4 md:me-6">{t('О нас')}</a>
            </li>
            <li>
              <a href={`/${lng}/contacts`} className="hover:underline me-4 md:me-6">{t('Контакты')}</a>
            </li>
            <li>
              <a href={`/${lng}/account`} className="hover:underline">{t('Аккаунт')}</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-left dark:text-gray-400">© {getCurrentYear} <span className="hover:underline">Shefer™</span>. {t('Все права защищены')}.</span>
      </div>
    </footer>
  )
}

export default Footer