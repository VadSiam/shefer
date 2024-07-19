'use client'
import React from 'react';
import StyledButton from '../ThemesComponents/StyledButton';
import { TFunction } from 'i18next';
import { useRouter } from 'next/navigation';

interface CartSummaryProps {
  total: string;
  t: TFunction<string, string>
  itemsCount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, t, itemsCount }) => {
  const router = useRouter();
  const goingToOrder = () => {
    router.push('/order');
  }

  return (
    <>
      <div className="flex gap-5 justify-between px-12 mt-24 w-full text-7xl uppercase leading-[normal] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <h2 className="text-xl font-bold">Товаров в заказе</h2>
        <p className="text-lg">{itemsCount}</p>
      </div>
      <div className="flex gap-5 justify-between px-12 mt-16 w-full text-7xl uppercase leading-[normal] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <h2 className="text-xl font-bold">Итого</h2>
        <p className="text-lg">{total} Р</p>
      </div>
      {/* <StyledButton className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Перейти к оформлению</StyledButton> */}
      <div className="flex justify-center w-full mt-5">
        <StyledButton
          text={t('Перейти к оформлению').toUpperCase()}
          onClick={goingToOrder}
          alternative
        />
      </div>
    </>
  );
};

export default CartSummary;
