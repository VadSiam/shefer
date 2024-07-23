'use client'
import React from 'react';
import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';
import { useMainContext } from '@/utils/context/main.context';
import { useTranslation } from '@/app/i18n/client';
import ArrowBack from '@/[lng]/components/Breadcrumbs/ArrowBack';

const OrderPage: React.FC<{ params: { lng: string } }> = ({ params: { lng } }) => {
  const { cartItems } = useMainContext();
  const { t } = useTranslation(lng, 'orderPage');

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex flex-col w-full md:mt-10 md:max-w-full">
        <h1 className="mb-4 text-2xl uppercase md:max-w-full md:text-4xl">
          {t('Оформление заказа')}
        </h1>
        <ArrowBack />
        <div className="mt-4 md:mt-10 md:max-w-full">
          <div className="flex flex-col gap-5 md:flex-row md:gap-0">
            <OrderForm t={t} lng={lng} />
            <OrderSummary cartItems={cartItems} t={t} lng={lng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
