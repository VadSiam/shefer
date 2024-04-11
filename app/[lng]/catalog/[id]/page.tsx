'use client'

import Image from 'next/image';
import { useMainContext } from "@/utils/context/main.context";
import { useTranslation } from '@/app/i18n/client';
import StyledButton from '@/[lng]/components/ThemesComponents/StyledButton';
import SwiperElement from '@/[lng]/components/SwiperElement';
import dynamic from 'next/dynamic';
import NavigationBreadcrumbs from '@/[lng]/components/Breadcrumbs';

const SwiperElementLazy = dynamic(() => import('@/[lng]/components/SwiperElement'), { ssr: false });

const ItemPage: React.FC<{ params: { lng: string, id: string } }> = ({ params: {
  lng,
  id,
} }) => {
  const { getProductById } = useMainContext();
  const isRussian = lng === 'ru';
  const { t } = useTranslation(lng, 'mainPage')

  const cleanedId = cleanupId(id);
  const product = getProductById(cleanedId);

  if (!cleanedId || !product) {
    return <div>No such product</div>
  }

  const { id: productId, type, color, images, name, nameEn, price, descriptionEn, description } = product;

  console.log('🚀 ~ file: page.tsx:16 ~ product:', product)
  // TODO: Add real breadcrumbs
  const breadcrumbItems = [
    { title: "главная", link: "/" },
    { title: "пигменты", link: "/pigments" },
    { title: "губы", link: "/lips" },
    { title: "пигмент страсть", link: "/passion-pigment" },
  ];

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 w-full p-5">
      <NavigationBreadcrumbs items={breadcrumbItems} />
      <div className="flex-1 p-4 max-w-1/3">
        <SwiperElementLazy images={images} />
        {/* {color && <Image
          alt="Shefer pigments"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${color.url}`}
          quality={100}
          fill
          // sizes="(max-width: 768px)"
          style={{
            objectFit: 'contain',
            // scale: 1.5,
          }}
          className=' -z-10'
        />}
        <Image
          className="embla__slide__img p-6"
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${images?.[0]?.url}`}
          alt="Product"
          width={200}
          height={100}
          priority={true}
        /> */}
      </div>
      <div className="flex-1 p-4 max-w-1/3 flex-col items-start">
        <div>{price}</div>
        <div>{type}</div>
        <div>{t(isRussian ? description : descriptionEn)}</div>
        <StyledButton
          text={t('добавить в корзину').toUpperCase()}
          onClick={() => { }}
          alternative
        />
      </div>
      <div className="flex-1 p-4 max-w-1/3">
        <div className='text-3xl font-bold'>{t('идеально в паре').toUpperCase()}</div>
      </div>
    </div>
  )
}


export default ItemPage

const cleanupId = (dirtyId: string): string => {
  // Decode URI component and then remove the leading colon if present
  return decodeURIComponent(dirtyId).replace(/^:/, '');
};