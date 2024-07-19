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

  const total = (cartItems.reduce((acc, item) => acc + (+item.item.price ?? 0) * item.count, 0) || 0).toFixed(2);
  const itemsCount = cartItems?.length;

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">{t('Корзина товара', { itemsCount }).toUpperCase()}</h1>
      <div className="flex flex-col md:flex-row">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item.item} count={item.count} lng={lng} />
        ))}
      </div>
      <CartSummary total={total} t={t} itemsCount={itemsCount} />
      {/* <RecommendedProducts products={recommendedProducts} lng={lng} /> */}
    </div>
  );
};

export default CartPage;