'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
// import { isMobile } from 'react-device-detect';
import { useTranslation } from '@/app/i18n/client';
import { ProductCardProps } from './types';
// import StyledButton from '../ThemesComponents/StyledButton';


interface ProductCartProps {
  item: ProductCardProps;
  lng: string;
}

const ProductCard = ({ item, lng }: ProductCartProps) => {
  console.log('🚀 ~ item:', item)
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage')
  const isRus = lng === 'ru';
  const { id, type, color, images, name, nameEn, price } = item;

  const goingProduct = useCallback(() => {
    router.push(`/${lng}/catalog/:${id}`)
  }, [id, lng, router]);

  return (
    <div className="embla__slide">
      <div
        onClick={goingProduct}
        className="mt-5 hover:shadow-custom-light dark:hover:shadow-custom-dark dark:border-gray-400 active-card scale-80 hover:scale-110 hover:z-[-250px] relative rounded-lg transition-transform duration-400 ease-in-out w-full max-w-sm"
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
          className="p-6 embla__slide__img"
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
