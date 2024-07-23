'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { TransformedProduct } from '@/utils/strapi/types';
import { ICartItem } from '@/utils/context/main.context';


interface ProductCartProps {
  item: ICartItem;
  lng: string;
}

const ProductCard = ({ item, lng }: ProductCartProps) => {
  const { t } = useTranslation(lng, 'mainPage')
  const isRus = lng === 'ru';
  const { id, type, color, images, name, nameEn, price } = item?.item as TransformedProduct || {};
  console.log('🚀 ~ item:', item)

  return (
    <div className="">
      <div
        className="relative w-full max-w-sm mt-5 rounded-lg dark:border-gray-400 active-card"
      >
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
          <div className="mb-2 text-xl tracking-tight">
            {item.count} {t('шт.')}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
