'use client'

import NavigationBreadcrumbs from "@/[lng]/components/Breadcrumbs";
import Container from "@/[lng]/components/Container";
import StyledButton from "@/[lng]/components/ThemesComponents/StyledButton";
import { useTranslation } from "@/app/i18n/client";
import { useMainContext } from "@/utils/context/main.context";
import { cleanupId } from "@/utils/helpers";
import dynamic from "next/dynamic";
import * as React from "react";
import { ProductCardProps } from "@/[lng]/components/Carousel/types";
import Specs from "./Specs";
import ProductCard from "@/[lng]/components/Carousel/ProductCard";
import { useState } from "react";

const SwiperElementLazy = dynamic(() => import('@/[lng]/components/SwiperElement'), { ssr: false });


const ItemPage: React.FC<{ params: { lng: string, id: string } }> = ({ params: {
  lng,
  id,
} }) => {
  const { getProductById, products, cartItems, setCartItemsWithCookies } = useMainContext();
  const isRus = lng === 'ru';
  const { t } = useTranslation(lng, 'mainPage')
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(state => state + 1);
  }

  const removeItem = () => {
    setCount(state => (state > 1 ? state - 1 : 1))
  }

  const cleanedId = cleanupId(id);
  const product: ProductCardProps | undefined = getProductById(cleanedId);

  if (!cleanedId || !product) {
    return <div>No such product</div>
  }

  const { id: productId, images, name, nameEn, price, descriptionEn, description, spec, specEn } = product;

  // TODO: Add real breadcrumbs
  const breadcrumbItems = [
    { title: "главная", link: "/" },
    { title: "пигменты", link: "/catalog" },
    { title: "губы", link: "/catalog" },
    { title: "пигмент страсть", link: "/catalog" },
  ];

  const addToBasket = () => {
    const existingItem = cartItems.find(item => item.item?.id === productId);

    const finallyItems = () => {
      if (existingItem) {
        return cartItems.map((item) => {
          if (item.item.id === existingItem.item.id) {
            return { ...item, count };
          }
          return item;
        });
      } else {
        return [...cartItems, { item: product, count }];
      }
    }
    setCartItemsWithCookies(finallyItems());
  };

  return (
    <Container>
      <NavigationBreadcrumbs items={breadcrumbItems} />
      <h2 className="w-full text-5xl text-left p-6">{isRus ? name.toUpperCase() : nameEn.toUpperCase()}</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full p-0 md:p-5">
        <div className="w-full md:w-1/2 p-0 md:p-2 mx-auto">
          <SwiperElementLazy images={images} />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
          <div className="text-lg mb-3">{t("unitPrice", { price })}</div>
          <div className="mb-3">{t(isRus ? description : descriptionEn)}</div>
          <Specs
            spec={isRus ? spec : specEn}
            t={t}
          />
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <button
                className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs p-2 rounded-l shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 dark:bg-gray-600 dark:text-gray-300"
                type="button"
                onClick={removeItem}
              >
                -
              </button>
              <input
                readOnly
                type="text"
                className="w-10 text-center bg-gray-300 text-gray-800 font-semibold py-2 rounded shadow inner:border-none dark:bg-gray-600 dark:text-gray-300"
                value={count}
              />
              <button
                className="bg-gray-300 text-gray-800 active:bg-gray-400 font-bold uppercase text-xs p-2 rounded-r shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 dark:bg-gray-600 dark:text-gray-300"
                type="button"
                onClick={addItem}
              >
                +
              </button>
            </div>
            <StyledButton
              text={t('добавить в корзину').toUpperCase()}
              onClick={addToBasket}
              alternative
            />
          </div>
        </div>
      </div>
      <h2 className="w-full text-5xl text-left p-6">{t('рекомендации для вас').toUpperCase()}</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full p-0 md:p-5">
        {products?.slice(0, 4)?.map((product, index) => (
          <ProductCard
            key={index}
            lng={lng}
            item={product}
          />
        ))}
      </div>
    </Container>
  )
}


export default ItemPage
