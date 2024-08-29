'use client'

import dynamic from "next/dynamic";
import { IPageElementProps } from "../page";
import ProductsListFilter, { filterTypes } from "@/[lng]/components/ProductsList/Filter";
import { useTranslation } from "@/app/i18n/client";
import { memo, useState } from "react";
import Container from "@/[lng]/components/Container";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false });

interface CatalogPageProps {
  params: IPageElementProps;
}

const CatalogPage: React.FC<CatalogPageProps> = memo(({ params: { lng } }) => {
  const { t } = useTranslation(lng, 'Catalog');
  const [filter, setFilter] = useState<filterTypes>('all');
  console.log('🚀 ~ filter:', filter)

  return (
    <>
      <h1 className="w-full p-6 text-5xl text-left">
        {/* {t('Каталог').toUpperCase()} */}
      </h1>
      <Container>
        {/* <ProductsListFilter lng={lng} setFilter={setFilter} /> */}
        {/* <ProductsListLazy lng={lng} filter={filter} /> */}
      </Container>
    </>
  );
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;
