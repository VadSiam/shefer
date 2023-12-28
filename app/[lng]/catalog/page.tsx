'use client'

import dynamic from "next/dynamic";
import { IPageElementProps } from "../page";
import ProductsListFilter from "@/[lng]/components/ProductsList/Filter";
import { useTranslation } from "@/app/i18n/client";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false })


const CatalogPage: React.FC<{ params: IPageElementProps }> = ({ params: { lng } }) => {
  const {t} = useTranslation(lng, 'Catalog')

  return (
    <>
    <div className="w-full text-5xl text-left pl-6">
      {t('Каталог').toUpperCase()}
    </div>
      <ProductsListFilter />
      <ProductsListLazy lng={lng} />
    </>
  )
}

export default CatalogPage;