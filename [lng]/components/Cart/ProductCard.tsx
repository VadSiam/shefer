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
        className="relative w-full max-w-sm mt-5 rounded-lg dark:border-gray-400 active-card"
      >
        {color && <Image
          alt="Shefer pigments"
          src={color.url}
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
