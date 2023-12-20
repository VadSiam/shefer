import HeroBlock from "@/[lng]/components/Home/HeroBlock";
import { EmblaOptionsType } from 'embla-carousel-react'
import PopProductsBlock from "@/[lng]/components/Home/PopProductsBlock";

export interface IPageElementProps {
  lng: string
}

export interface IPageProps {
  params: IPageElementProps
}

export interface ExtendedEmblaOptionsType extends EmblaOptionsType {
  autoplay?: boolean; // Extending the type to add autoplay
}


export default async function MainPage({ params: { lng } }: { params: IPageElementProps }) {

  return (
    <div className="w-full">
      <HeroBlock lng={lng} />
      <PopProductsBlock lng={lng} />
    </div>
  );
}

