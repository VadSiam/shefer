import dynamic from "next/dynamic";
import { IPageElementProps } from "../page";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false })


const CatalogPage: React.FC<{ params: IPageElementProps }> = ({ params: { lng } }) => {
  return (
    <ProductsListLazy lng={lng} />
  )
}

export default CatalogPage;