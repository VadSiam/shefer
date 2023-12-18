import Hero from "@/[lng]/components/Home/Hero";

export interface IPageElementProps {
  lng: string
}

export interface IPageProps {
  params: IPageElementProps
}

export default async function MainPage({ params: { lng } }: { params: IPageElementProps }) {

  return (
    <Hero lng={lng} />
  );
}

