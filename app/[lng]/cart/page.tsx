'use client'
import React, { memo, useMemo } from 'react';
import CartItem from '@/[lng]/components/Cart/CartItem';
import CartSummary from '@/[lng]/components/Cart/CartSummary';
import { useTranslation } from '@/app/i18n/client';
import { useMainContext } from '@/utils/context/main.context';
import StyledButton from '@/[lng]/components/ThemesComponents/StyledButton';

interface CartPageProps {
  params: { lng: string }
}

const CartPage: React.FC<CartPageProps> = memo(({ params: { lng } }) => {
  const { cartItems, isLoading, resetCart } = useMainContext();
  const { t } = useTranslation(lng, 'cartPage');

  const { total, itemsCount } = useMemo(() => {
    const itemsCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    const total = cartItems.reduce((acc, item) => acc + (+item?.item?.price ?? 0) * item.count, 0).toFixed(2);
    return { total, itemsCount };
  }, [cartItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          {t(itemsCount === 1 ? 'Корзина товара' : 'Корзина товаров', { itemsCount }).toUpperCase()}
        </h1>
        <StyledButton
          text={t('Сбросить корзину').toUpperCase()}
          onClick={resetCart}
          warning
        />
      </div>
      <div className="flex flex-col md:flex-row">
        {cartItems.map((item) => (
          <CartItem key={item.item.id} item={item.item} count={item.count} lng={lng} />
        ))}
      </div>
      <CartSummary total={total} t={t} itemsCount={itemsCount} />
    </div>
  );
});

CartPage.displayName = 'CartPage';

export default CartPage;
