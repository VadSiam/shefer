'use client'

import NavigationBreadcrumbs from "@/[lng]/components/Breadcrumbs";
import Container from "@/[lng]/components/Container";
import StyledButton from "@/[lng]/components/ThemesComponents/StyledButton";
import { useTranslation } from "@/app/i18n/client";
import { useMainContext } from "@/utils/context/main.context";
import { cleanupId } from "@/utils/helpers";
import dynamic from "next/dynamic";
import * as React from "react";
import { ProductCardProps } from "@/[lng]/components/Carousel/types";
import Specs from "./Specs";

const SwiperElementLazy = dynamic(() => import('@/[lng]/components/SwiperElement'), { ssr: false });


const ItemPage: React.FC<{ params: { lng: string, id: string } }> = ({ params: {
  lng,
  id,
} }) => {
  const { getProductById } = useMainContext();
  const isRus = lng === 'ru';
  const { t } = useTranslation(lng, 'mainPage')

  const cleanedId = cleanupId(id);
  const product: ProductCardProps | undefined = getProductById(cleanedId);

  if (!cleanedId || !product) {
    return <div>No such product</div>
  }

  const { id: productId, images, name, nameEn, price, descriptionEn, description, spec, specEn } = product;

  // TODO: Add real breadcrumbs
  const breadcrumbItems = [
    { title: "главная", link: "/" },
    { title: "пигменты", link: "/pigments" },
    { title: "губы", link: "/lips" },
    { title: "пигмент страсть", link: "/passion-pigment" },
  ];

  const addToBasket = () => {
    console.log('🚀 ~ addToBasket', productId)
  }

  return (
    <Container>
      <NavigationBreadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full p-0 md:p-5">
        <div className="w-full md:w-1/2 p-0 md:p-4 mx-auto">
          <SwiperElementLazy images={images} />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
          <div className="text-base mb-3">{isRus ? name : nameEn}</div>
          <div className="text-lg mb-3">{t("unitPrice", { price })}</div>
          <div className="mb-3">{t(isRus ? description : descriptionEn)}</div>
          <Specs
            spec={isRus ? spec : specEn}
            t={t}
          />
          <StyledButton
            text={t('добавить в корзину').toUpperCase()}
            onClick={addToBasket}
            alternative
          />
        </div>
      </div>
    </Container>
  )
}


export default ItemPage
