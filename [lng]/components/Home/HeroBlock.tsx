'use client'

import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';
import StyledButton from '../ThemesComponents/StyledButton';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Hero = ({ lng }: { lng: string }) => {
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage')
  const goingProduct = useCallback(() => {
    router.push(`/${lng}/catalog`)
  }, [lng, router]);

  return (
    <div className="relative h-screen w-full flex items-center justify-start mb-14">
      <Image
        src="/img/hero.png"
        alt="Permanent Makeup Products"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute left-7 text-left text-foreground-white">
        <h1 className="text-4xl font-bold">
          <div className="">{t('Пигменты и оборудование').toUpperCase()}</div>
          <div className="">{t('для перманентного макияжа').toUpperCase()}</div>
        </h1>

        <button
          onClick={goingProduct}
          className="mt-20 font-bold py-4 px-24 border border-background-white rounded-full hover:bg-sh-azure"
        >
          {t('Каталог').toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Hero;
