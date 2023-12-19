import LightBox, { galleryTab } from "@/[lng]/components/LightBox";
import Hero from "@/[lng]/components/Home/Hero";
import EmblaCarousel from "@/[lng]/components/Carousel";
import { EmblaOptionsType } from 'embla-carousel-react'

export interface IPageElementProps {
  lng: string
}

export interface IPageProps {
  params: IPageElementProps
}

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

export default async function MainPage({ params: { lng } }: { params: IPageElementProps }) {

  return (
    <>
      {/* <Hero lng={lng} /> */}
      {/* <LightBox /> */}
      <EmblaCarousel slides={galleryTab} options={OPTIONS} />
      <div className='active-card w-full h-10' />

    </>
  );
}

