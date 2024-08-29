'use client'

import Image from 'next/image';
import { memo } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { TransformedProduct } from '@/utils/strapi/types';

interface ProductCartProps {
  item: TransformedProduct;
  lng: string;
}

const ProductCard = memo(({ item, lng }: ProductCartProps) => {
  const { t } = useTranslation(lng, 'mainPage')
  const isRus = lng === 'ru';
  const { id, type, color, images, name, nameEn, price } = item;

  return (
    <div className="">
      <div
        className="relative w-full max-w-sm mt-5 rounded-lg dark:border-gray-400 active-card"
      >
        {color && <Image
          alt="Shefer pigments"
          src={color}
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{
            objectFit: 'contain',
            scale: 1.01,
          }}
          className=' -z-10'
        />}
        <Image
          className="p-6"
          src={images?.[0]?.url}
          alt="Product"
          width={200}
          height={100}
          priority={true}
        />
        <div className="flex flex-col justify-center px-5 pb-5 text-center align-middle">
          <div className="mb-2 text-xl font-semibold tracking-tight">
            {t(isRus ? name : nameEn)}
          </div>
          <div className="mb-2 font-semibold tracking-tight text-l">
            {t(type)}
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
