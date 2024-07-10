'use client'
import React from 'react';
import Image from 'next/image';
import EmblaCarousel from '../Carousel';
import { ExtendedEmblaOptionsType } from '@/app/[lng]/page';
import { TransformedProduct } from '@/utils/strapi/types';

interface RecommendedProductsProps {
  products: TransformedProduct[];
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