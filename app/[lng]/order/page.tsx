'use client'
import React from 'react';
import OrderForm from './OrderForm';
import OrderSummary from './OrderSummary';
import { useMainContext } from '@/utils/context/main.context';
import { useTranslation } from '@/app/i18n/client';

const OrderPage: React.FC<{ params: { lng: string } }> = ({ params: { lng } }) => {
  const { cartItems, products } = useMainContext();
  const { t } = useTranslation(lng, 'orderPage');
  const total = (cartItems.reduce((acc, item) => acc + (+item.item.price ?? 0) * item.count, 0) || 0).toFixed(2);
  const itemsCount = cartItems?.length;

  return (
    <div className="flex flex-col w-full p-4">
      <div className="mt-5 w-full border border-solid min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-col w-full px-12 mt-24 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="uppercase text-7xl max-md:max-w-full max-md:text-4xl">
          {t('Оформление заказа')}
        </h1>
        {/* <img
          loading="lazy"
          src="#img-representation-1"
          alt=""
          className="mt-12 aspect-square w-[35px] max-md:mt-10"
        /> */}
        {/* <p className="mt-12 text-xl max-md:mt-10 max-md:max-w-full">
          <span className="underline">Авторизуйтесь</span>,{" "}
          <span className="uppercase">
            чтобы увидеть персональные условия доставки и отслеживать заказы.
          </span>
        </p> */}
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <OrderForm />
            <OrderSummary cartItems={cartItems} t={t} lng={lng} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
