'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
// import { isMobile } from 'react-device-detect';
import { useTranslation } from '@/app/i18n/client';
import { ProductCardProps } from '../Carousel/types';
// import StyledButton from '../ThemesComponents/StyledButton';


interface ProductCartProps {
  item: ProductCardProps;
  lng: string;
}

const ProductCard = ({ item, lng }: ProductCartProps) => {
  const { t } = useTranslation(lng, 'mainPage')
  const isRus = lng === 'ru';
  const { id, type, color, images, name, nameEn, price } = item;

  return (
    <div className="">
      <div
        className="mt-5 dark:border-gray-400 active-card relative rounded-lg w-full max-w-sm"
      >
        {color && <Image
          alt="Shefer pigments"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${color.url}`}
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{
            objectFit: 'contain',
            scale: 1.5,
          }}
          className=' -z-10'
        />}
        <Image
          className="p-6"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${images?.[0]?.url}`}
          alt="Product"
          width={200}
          height={100}
          priority={true}
        />
        <div className="flex flex-col justify-center align-middle text-center px-5 pb-5">
          <div className="text-xl font-semibold tracking-tight mb-2">
            {t(isRus ? name : nameEn)}
          </div>
          <div className="text-l font-semibold tracking-tight mb-2">
            {t(type)}
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold">
              {price}
            </span>
            {/* {isMobile  && <StyledButton
              text={t('смотреть').toUpperCase()}
              onClick={goingProduct}
              alternative
            />} */}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
