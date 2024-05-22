'use client'
import React from 'react';
import Image from 'next/image';
import { ProductCardProps } from '../Carousel/types';
import EmblaCarousel from '../Carousel';
import { ExtendedEmblaOptionsType } from '@/app/[lng]/page';

interface RecommendedProductsProps {
  products: ProductCardProps[];
  lng: string;
}

const OPTIONS: ExtendedEmblaOptionsType = {
  dragFree: true,
  loop: true,
  autoplay: false
};

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products, lng }) => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold">Добавить к заказу</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <EmblaCarousel
          slides={products}
          options={OPTIONS}
          lng={lng}
        />
      </div>
    </div>
  );
};

export default RecommendedProducts;