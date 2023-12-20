'use client'

import { useTranslation } from '@/app/i18n/client';
import Image from 'next/image';

const Hero = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'mainPage')

  return (
    <div className="relative h-screen w-full flex items-center justify-start mb-14">
      <Image
        src="/img/hero.png"
        alt="Permanent Makeup Products"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute left-7 text-left">
        <h1 className="text-4xl font-bold">
          <div className="">{t('Пигменты и оборудование').toUpperCase()}</div>
          <div className="">{t('для перманентного макияжа').toUpperCase()}</div>
        </h1>

        <button
          onClick={() => { }}
          className="mt-20 font-bold py-4 px-24 border dark:border-background-white border-foreground-dark-gray rounded-full"
        >
          {t('Каталог').toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Hero;
