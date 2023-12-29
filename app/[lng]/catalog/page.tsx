'use client'

import dynamic from "next/dynamic";
import { IPageElementProps } from "../page";
import ProductsListFilter from "@/[lng]/components/ProductsList/Filter";
import { useTranslation } from "@/app/i18n/client";
import { useState } from "react";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false })


const CatalogPage: React.FC<{ params: IPageElementProps }> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, 'Catalog')
  const [filter, setFilter] = useState<string>('all');
  console.log('🚀 ~ file: page.tsx:15 ~ filter:', filter)

  return (
    <>
      <h2 className="w-full text-5xl text-left p-6">
        {t('Каталог').toUpperCase()}
      </h2>
      <ProductsListFilter lng={lng} setFilter={setFilter} />
      <ProductsListLazy lng={lng} />
    </>
  )
}

export default CatalogPage;