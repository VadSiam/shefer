'use client'

import Image from 'next/image';
import StyledButton from '../ThemesComponents/StyledButton';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { ProductCardProps } from './types';


interface ProductCartProps {
  item: ProductCardProps;
  lng: string;
}

const ProductCard = ({ item, lng }: ProductCartProps) => {
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage')
  const isRussian = lng === 'ru';

  const goingProduct = useCallback(() => {
    router.push(`/${lng}/catalog/:${item.id}`)
  }, [item.id, lng, router]);

  return (
    <div className="embla__slide">
      <div className="mt-5 hover:shadow-custom-light dark:hover:shadow-custom-dark dark:border-gray-400 active-card scale-80 hover:scale-110 hover:z-[-250px] relative rounded-lg transition-transform duration-400 ease-in-out w-full max-w-sm">
        <Image
          alt="Shefer pigments"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${item.color?.url}`}
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{
            objectFit: 'contain',
          }}
          className=' -z-10'
        />
        <Image
          className="embla__slide__img p-6"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${item.images?.[0]?.url}`}
          alt="Product"
          width={200}
          height={100}
          priority={true}
        />
        <div className="flex flex-col justify-center align-middle text-center px-5 pb-5">
          <div className="text-xl font-semibold tracking-tight">
            {t(isRussian ? item.name : item.nameEn)}
          </div>
          <div className="text-l font-semibold tracking-tight">
            {t(item.type)}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">
              {item.price}
            </span>
            <StyledButton
              text={t('смотреть').toUpperCase()}
              onClick={goingProduct}
              alternative
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
