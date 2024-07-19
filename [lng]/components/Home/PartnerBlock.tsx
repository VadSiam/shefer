'use client'

import { useTranslation } from '@/app/i18n/client';
import React from 'react';
import StyledButton from '../ThemesComponents/StyledButton';

interface IPartner {
  lng: string;
}

const PartnerBlock: React.FC<IPartner> = ({ lng }) => {
  const { t } = useTranslation(lng, 'mainPage')

  return (
    <div className="flex flex-col items-center justify-center bg-inherit my-36">
      <div className="p-8 bg-inherit">
        <h2 className="mb-6 text-5xl font-bold text-center">{t('хотите стать нашим партнером?').toUpperCase()}</h2>
        <p className="mb-8 text-center">{t('Оставьте свои контакты и мы обязательно с вами свяжемся.')}</p>
        <div className="space-y-4 text-center">
          <div>
            <input
              type="text"
              id="name"
              placeholder={t('имя').toUpperCase()}
              className="bg-inherit border-b border-foreground-black dark:border-foreground-white focus:outline-none dark:focus:border-sh-azure focus:border-sh-azure focus:border-b-2 w-full md:w-2/3 p-2.5"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder={t('эл. почта').toUpperCase()}
              className="bg-inherit border-b border-foreground-black dark:border-foreground-white focus:outline-none dark:focus:border-sh-azure focus:border-sh-azure focus:border-b-2 w-full md:w-2/3 p-2.5"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              placeholder={t('телефон').toUpperCase()}
              className="bg-inherit border-b border-foreground-black dark:border-foreground-white focus:outline-none dark:focus:border-sh-azure focus:border-sh-azure focus:border-b-2 w-full md:w-2/3 p-2.5"
              required
            />
          </div>
          <div
            className='text-xs'
          >{t('Нажимая «отправить», вы принимаете условия публичной оферты.')}</div>
          <StyledButton
            text={t('отправить').toUpperCase()}
            onClick={() => { }}
            alternative
          />
        </div>
      </div>
    </div>
  );
}

export default PartnerBlock;
