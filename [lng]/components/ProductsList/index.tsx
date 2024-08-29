'use client'

import { useMainContext } from "@/utils/context/main.context";
import ProductCard from "../Carousel/ProductCard";
import { filterTypes } from "./Filter";
import { memo, useMemo } from "react";
import { TransformedProduct } from "@/utils/strapi/types";

interface ProductsListProps {
  lng: string;
  filter: filterTypes;
}

const ProductsList: React.FC<ProductsListProps> = memo(({ lng, filter }) => {
  const { products } = useMainContext();

  const filteredProducts = useMemo(() =>
    products?.filter((product: TransformedProduct) =>
      filter === 'all' || product.type === filter
    ),
    [products, filter]
  );

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div className="p-4 text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product: TransformedProduct) => (
        <ProductCard
          key={product.id}
          lng={lng}
          item={product}
        />
      ))}
    </div>
  );
});

ProductsList.displayName = 'ProductsList';

export default ProductsList;
