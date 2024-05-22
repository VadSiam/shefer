'use client'

import { ExtendedEmblaOptionsType } from "@/app/[lng]/page";
import EmblaCarousel from "../Carousel";
import { useTranslation } from "@/app/i18n/client";
import { useMainContext } from "@/utils/context/main.context";

interface IPopProductsBlock {
  lng: string;
}

export const OPTIONS: ExtendedEmblaOptionsType = {
  dragFree: true,
  loop: true,
  autoplay: true
};

const PopProductsBlock = ({ lng }: IPopProductsBlock) => {
  const { t } = useTranslation(lng, 'mainPage')
  const { products } = useMainContext();
  if (!products?.length) {
    return null;
  }


  return (
    <>
      <div className="w-full pl-6 text-5xl font-normal leading-none tracking-normal text-left">
        {t('популярное').toUpperCase()}
      </div>
      <EmblaCarousel
        slides={products}
        options={OPTIONS}
        lng={lng}
      />
    </>
  )

}

export default PopProductsBlock;