'use client'
import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { TransformedProduct } from '@/utils/strapi/types';

interface CartItemProps {
  item: TransformedProduct
  count: number;
  lng: string;
}

const CartItem: React.FC<CartItemProps> = ({ item, count, lng }) => {
  const image = item?.images.find(image => image.order === 1);
  return (
    <div className="flex flex-row items-center justify-between py-2 md:flex-col">
      <div className="flex items-center">
        <ProductCard item={item} lng={lng} />
      </div>
      <div className="flex items-center mt-2 md:mt-0">
        <button className="px-2">-</button>
        <span className="px-4">{count}</span>
        <button className="px-2">+</button>
      </div>
    </div>
  );
};

export default CartItem;