import dynamic from "next/dynamic";

const ProductsListLazy = dynamic(() => import('@/[lng]/components/ProductsList'), { ssr: false })


const CatalogPage = () => {
  return (
    <ProductsListLazy />
  )
}

export default CatalogPage;