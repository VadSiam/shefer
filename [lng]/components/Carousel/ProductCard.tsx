'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { TransformedProduct } from '@/utils/strapi/types';

interface ProductCardProps {
  item: TransformedProduct;
  lng: string;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ item, lng }) => {
  console.log('🚀 ~ item:', item)
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage');
  const isRus = lng === 'ru';
  const { id, type, color, images, name, nameEn, price } = item;

  const goToProduct = useCallback(() => {
    router.push(`/${lng}/catalog/:${id}`);
  }, [id, lng, router]);

  return (
    <div className="embla__slide">
      <div
        onClick={goToProduct}
        className="mt-5 hover:shadow-custom-light dark:hover:shadow-custom-dark dark:border-gray-400 active-card scale-80 hover:scale-110 hover:z-[-250px] relative rounded-lg transition-transform duration-400 ease-in-out w-full max-w-sm cursor-pointer"
      >
        {color && (
          <Image
            alt="Shefer pigments"
            src={color}
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            style={{
              objectFit: 'contain',
              scale: 1.5,
            }}
            className='-z-10'
          />
        )}
        <Image
          className="p-6 embla__slide__img"
          src={images?.[0]?.url}
          alt="Product"
          width={200}
          height={100}
          priority={true}
        />
        <div className="flex flex-col justify-center px-5 pb-5 text-center align-middle">
          <h3 className="mb-2 text-xl font-semibold tracking-tight">
            {t(isRus ? name : nameEn)}
          </h3>
          <p className="mb-2 font-semibold tracking-tight text-l">
            {t(type)}
          </p>
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
