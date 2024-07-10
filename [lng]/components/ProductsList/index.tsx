'use client'
import { useMainContext } from "@/utils/context/main.context";
import ProductCard from "../Carousel/ProductCard";
import { filterTypes } from "./Filter";
import { useMemo } from "react";

const ProductsList: React.FC<{ lng: string, filter: filterTypes }> = ({
  lng,
  filter,
}) => {

  const { products } = useMainContext();
  const filteredProducts = useMemo(() => products?.filter(product => {
    if (filter === 'all') {
      return true;
    } else {
      return product.type === filter;
    }
  }), [products, filter]);

  return (
    <div
      className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4"
    >
      {filteredProducts?.map((product, index) => (
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