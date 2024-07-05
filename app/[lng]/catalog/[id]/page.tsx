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
      <h2 className="w-full p-6 text-5xl text-left">{isRus ? name.toUpperCase() : nameEn.toUpperCase()}</h2>
      <div className="flex flex-col w-full p-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:p-5">
        <div className="w-full p-0 mx-auto md:w-1/2 md:p-2">
          <SwiperElementLazy images={images} />
        </div>
        <div className="flex flex-col items-start w-full p-4 md:w-1/2">
          <div className="mb-3 text-lg">{t("unitPrice", { price })}</div>
          <div className="mb-3">{t(isRus ? description : descriptionEn)}</div>
          <Specs
            spec={isRus ? spec : specEn}
            t={t}
          />
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <button
                className="p-2 text-xs font-bold text-gray-800 uppercase transition-all duration-150 ease-linear bg-gray-300 rounded-l shadow outline-none active:bg-gray-400 hover:shadow-lg focus:outline-none dark:bg-gray-600 dark:text-gray-300"
                type="button"
                onClick={removeItem}
              >
                -
              </button>
              <input
                readOnly
                type="text"
                className="w-10 py-2 font-semibold text-center text-gray-800 bg-gray-300 rounded shadow inner:border-none dark:bg-gray-600 dark:text-gray-300"
                value={count}
              />
              <button
                className="p-2 text-xs font-bold text-gray-800 uppercase transition-all duration-150 ease-linear bg-gray-300 rounded-r shadow outline-none active:bg-gray-400 hover:shadow-lg focus:outline-none dark:bg-gray-600 dark:text-gray-300"
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
      <h2 className="w-full p-6 text-5xl text-left">{t('рекомендации для вас').toUpperCase()}</h2>
      <div className="flex flex-col w-full p-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:p-5">
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            lng={lng}
            item={product}
          />
        )
        )}
      </div>
    </Container>
  )
}


export default ItemPage
