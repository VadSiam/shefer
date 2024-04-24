'use client'

import dynamic from "next/dynamic";
import { IPageElementProps } from "../page";
import ProductsListFilter, { filterTypes } from "@/[lng]/components/ProductsList/Filter";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";
import Container from "@/[lng]/components/Container";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false })


const CatalogPage: React.FC<{ params: IPageElementProps }> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, 'Catalog')
  const [filter, setFilter] = useState<filterTypes>('all');

  return (
    <>
      <h2 className="w-full text-5xl text-left p-6">
        {t('Каталог').toUpperCase()}
      </h2>
      <Container>
        <ProductsListFilter lng={lng} setFilter={setFilter} />
        <ProductsListLazy lng={lng} filter={filter} />
      </Container>
    </>
  )
}

export default CatalogPage;