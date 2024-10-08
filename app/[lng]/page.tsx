import HeroBlock from "@/[lng]/components/Home/HeroBlock";
import { EmblaOptionsType } from 'embla-carousel-react'
import PopProductsBlock from "@/[lng]/components/Home/PopProductsBlock";
import StatisticsBlock from "@/[lng]/components/Home/StatisticsBlock";
import TattooMachineBlock from "@/[lng]/components/Home/TattooMachineBlock";
import PartnerBlock from "@/[lng]/components/Home/PartnerBlock";

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
      <StatisticsBlock lng={lng} />
      <TattooMachineBlock lng={lng} />
      <PartnerBlock lng={lng} />
    </div>
  );
}

