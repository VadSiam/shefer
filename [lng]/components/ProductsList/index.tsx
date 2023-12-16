'use client'
import { useMainContext } from "@/utils/context/main.context";

const ProductsList = () => {
  const { products } = useMainContext();
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