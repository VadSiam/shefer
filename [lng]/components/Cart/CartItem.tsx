'use client'
import React, { useState, useEffect, memo, useCallback } from 'react';
import ProductCard from './ProductCard';
import { TransformedProduct } from '@/utils/strapi/types';
import { useMainContext } from '@/utils/context/main.context';

interface CartItemProps {
  item: TransformedProduct
  count: number;
  lng: string;
}

const CartItem: React.FC<CartItemProps> = memo(({ item, count, lng }) => {
  const { getProductById, cartItems, setCartItemsWithCookies } = useMainContext();
  const product: TransformedProduct | undefined = getProductById(`${item.id}`);

  const [countCurrent, setCount] = useState(count);

  const changeBasket = useCallback(() => {
    const existingItem = cartItems.find(item => item.item?.id === product?.id);

    const getFinallyItems = () => {
      if (existingItem) {
        const updatedItems = cartItems.map((item) => {
          if (item.item.id === existingItem.item.id) {
            return { ...item, count: countCurrent };
          }
          return item;
        });

        // Check if this is the last item in the cart
        const totalItems = updatedItems.reduce((sum, item) => sum + item.count, 0);
        if (totalItems === 0) {
          return []; // Return empty array if removing last item
        }

        return updatedItems;
      } else {
        return [...cartItems, { item: product!, count: countCurrent }];
      }
    }
    const finallyItems = getFinallyItems()

    setCartItemsWithCookies(finallyItems);
    // setToastShow(true);
  }, [cartItems, countCurrent, product, setCartItemsWithCookies]);

  useEffect(() => {
    changeBasket();
  }, [changeBasket]);

  const addItem = useCallback(() => {
    setCount(state => state + 1);
  }, []);

  const removeItem = useCallback(() => {
    setCount(state => (state > 1 ? state - 1 : 1));
  }, []);

  return (
    <div className="flex flex-row items-center justify-between py-2 md:flex-col">
      <div className="flex items-center">
        <ProductCard item={item} lng={lng} />
      </div>
      <div className="flex items-center mt-2 md:mt-0">
        <button
          onClick={removeItem}
          className="px-2">-</button>
        <span className="px-4">{countCurrent}</span>
        <button
          onClick={addItem}
          className="px-2">+</button>
      </div>
    </div>
  );
});

CartItem.displayName = 'CartItem';

export default CartItem;
