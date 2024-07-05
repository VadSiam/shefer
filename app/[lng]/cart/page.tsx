'use client'
import CartItem from '@/[lng]/components/Cart/CartItem';
import CartSummary from '@/[lng]/components/Cart/CartSummary';
import RecommendedProducts from '@/[lng]/components/Cart/RecomendedProducts';
import { useTranslation } from '@/app/i18n/client';
import { useMainContext } from '@/utils/context/main.context';
import React, { useMemo } from 'react';

const CartPage: React.FC<{ params: { lng: string } }> = ({ params: { lng } }) => {
  const { cartItems, products } = useMainContext();
  const { t } = useTranslation(lng, 'cartPage');

  const recommendedProducts = useMemo(() => (products?.slice(0, 4) ?? []), [products]);

  const total = cartItems.reduce((acc, item) => acc + (+item.item.price ?? 0) * item.count, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t('Корзина товара', { itemsCount: cartItems?.length }).toUpperCase()}</h1>
      <div className="flex flex-row">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item.item} count={item.count} lng={lng} />
        ))}
      </div>
      <CartSummary total={total} />
      <RecommendedProducts products={recommendedProducts} lng={lng} />
    </div>
  );
};

export default CartPage;