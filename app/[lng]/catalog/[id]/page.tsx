'use client'

import NavigationBreadcrumbs from "@/[lng]/components/Breadcrumbs";
import Image from 'next/image';
import Container from "@/[lng]/components/Container";
import StyledButton from "@/[lng]/components/ThemesComponents/StyledButton";
import { useTranslation } from "@/app/i18n/client";
import { useMainContext } from "@/utils/context/main.context";
import { cleanupId } from "@/utils/helpers";
import dynamic from "next/dynamic";
import * as React from "react";

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
  console.log('🚀 ~ type:', type, price)

  // TODO: Add real breadcrumbs
  const breadcrumbItems = [
    { title: "главная", link: "/" },
    { title: "пигменты", link: "/pigments" },
    { title: "губы", link: "/lips" },
    { title: "пигмент страсть", link: "/passion-pigment" },
  ];

  return (
    <Container>
      <NavigationBreadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full p-5">
        <div className="w-full md:w-1/2 p-4 mx-auto">
          <SwiperElementLazy images={images} />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
          <div className="text-lg mb-3">{t("unitPrice", { price })}</div>
          <div className="mb-5">{t(isRussian ? description : descriptionEn)}</div>
          <StyledButton
            text={t('добавить в корзину').toUpperCase()}
            onClick={() => { }}
            alternative
          />
        </div>
      </div>
    </Container>
  )
}


export default ItemPage
