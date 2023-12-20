'use client'

import { ExtendedEmblaOptionsType } from "@/app/[lng]/page";
import EmblaCarousel from "../Carousel";
import { galleryTab } from "../LightBox";
import { useTranslation } from "@/app/i18n/client";

interface IPopProductsBlock {
  lng: string;
}

const OPTIONS: ExtendedEmblaOptionsType = {
  dragFree: true,
  loop: true,
  autoplay: true
};

const PopProductsBlock = ({ lng }: IPopProductsBlock) => {
  const { t } = useTranslation(lng, 'mainPage')

  return (
    <>
      <div className="w-full pl-6 text-5xl font-normal leading-none tracking-normal text-left">
        {t('популярное').toUpperCase()}
      </div>
      <EmblaCarousel
        slides={galleryTab}
        options={OPTIONS}
        lng={lng}
      />
    </>
  )

}

export default PopProductsBlock;