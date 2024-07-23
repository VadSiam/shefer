'use client'
import CartItem from '@/[lng]/components/Cart/CartItem';
import CartSummary from '@/[lng]/components/Cart/CartSummary';
// import RecommendedProducts from '@/[lng]/components/Cart/RecommendedProducts';
import { useTranslation } from '@/app/i18n/client';
import { useMainContext } from '@/utils/context/main.context';
import React from 'react';

const CartPage: React.FC<{ params: { lng: string } }> = ({ params: { lng } }) => {
  const { cartItems } = useMainContext();
  const { t } = useTranslation(lng, 'cartPage');

  // const recommendedProducts = useMemo(() => (products?.slice(0, 4) ?? []), [products]); // TODO add recommended products in future

  const total = (cartItems.reduce((acc, item) => acc + (+item.item.price ?? 0) * item.count, 0) || 0).toFixed(2);
  const itemsCount = cartItems?.map(item => item.count).reduce((acc, count) => acc + count, 0) ?? 0;

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">{t(itemsCount === 1 ? 'Корзина товара' : 'Корзина товаров', { itemsCount }).toUpperCase()}</h1>
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