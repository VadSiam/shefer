'use client'
import { useProductsContext } from "@/utils/context/product.context";

const ProductsList = () => {
  const { products } = useProductsContext();
  console.log('🚀 ~ file: index.tsx:6 ~ products:', products)
  return (
    <div>
      {products?.map((product) => (
        <div key={product.id} className="flex justify-between">
          <div className="m-1">{product.name}</div>
          <div className="m-1">{product.price}</div>
          <div className="m-1">{product.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;