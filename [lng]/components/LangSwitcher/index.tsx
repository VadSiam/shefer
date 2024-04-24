'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

const LangSwitcher = ({ lng }: { lng: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isRuLanguage = lng === 'ru';

  const toggleLang = useCallback(() => {
    const newLang = isRuLanguage ? 'en' : 'ru';
    const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${newLang}$1`);
    router.push(newPath);
  }, [isRuLanguage, pathname, router]);

  return (
    <button
      onClick={toggleLang}
      className="flex items-center py-2 md:p-2 cursor-pointer"
    >
      <span className={`font-semibold mr-1 ${isRuLanguage ? 'text-gray-900 dark:text-gray-400' : 'text-gray-400 dark:text-gray-700'}`}>
        RUS
      </span>
      /
      <span className={`font-semibold ml-1 ${!isRuLanguage ? 'text-gray-900 dark:text-gray-400' : 'text-gray-400 dark:text-gray-700'}`}>
        ENG
      </span>
    </button>
  );
};

export default LangSwitcher;
