'use client'
import { useMainContext } from "@/utils/context/main.context";
import ProductCard from "../Carousel/ProductCard";

const ProductsList: React.FC<{ lng: string }> = ({ lng }) => {
  const { products } = useMainContext();
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          lng={lng}
          item={product}
        />
      ))}
    </div>
  );
}

export default ProductsList;