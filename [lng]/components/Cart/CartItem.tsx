'use client'
import React from 'react';
import Image from 'next/image';
import { ProductCardProps } from '../Carousel/types';
import ProductCard from './ProductCard';

interface CartItemProps {
  item: ProductCardProps
  count: number;
  lng: string;
}

const CartItem: React.FC<CartItemProps> = ({ item, count, lng }) => {
  console.log('🚀 ~ item:', item)
  const image = item?.images.find(image => image.order === 1);
  return (
    <div className="flex md:flex-col flex-row justify-between items-center py-2">
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