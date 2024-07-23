import { ICartItem } from '@/utils/context/main.context';
import { formatDate } from '@/utils/helpers';
import { TFunction } from 'i18next';
import React from 'react';
import ProductCard from './ProductCard';
import StyledButton from '@/[lng]/components/ThemesComponents/StyledButton';


interface OrderSummaryProps {
  cartItems: ICartItem[]
  t: TFunction<string, string>
  lng: string
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  t,
  lng,
}) => {
  const total = (cartItems.reduce((acc, item) => acc + (+item.item.price ?? 0) * item.count, 0) || 0).toFixed(2);
  const itemsCount = cartItems?.map(item => item.count).reduce((acc, count) => acc + count, 0) ?? 0;

  const delivery = 500;
  const mainTotal = (+total + delivery).toFixed(2);

  return (
    <aside className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-8 py-12 w-full shadow-sm bg-zinc-100 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl text-neutral-950 max-md:max-w-full">{t('ваш заказ')}</h2>
        <div className="grid grid-cols-2 gap-5 mt-12 text-base uppercase max-md:mt-10">
          {cartItems.map((item, index) => (
            <ProductCard item={item} lng={lng} key={index} />
          ))}
        </div>

        <div className="h-px mt-12 border border-solid shrink-0 bg-neutral-950 border-neutral-950 max-md:mt-10 max-md:max-w-full" />
        <div className="mt-12 text-xl text-cyan-700 max-md:mt-10 max-md:max-w-full">{t('доставка до', { data: formatDate(new Date()) })}</div>
        <div className="flex gap-5 justify-between mt-2.5 text-xl max-md:flex-wrap max-md:max-w-full">
          <div className="text-neutral-950">{t('Товаров в заказе')}</div>
          <div className="text-zinc-400">{itemsCount}</div>
        </div>
        <div className="flex gap-5 justify-between mt-2.5 whitespace-nowrap text-neutral-950 max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-xl">{t('сумма товаров')}</div>
          <div className="text-3xl">{`${total}р`}</div>
        </div>
        <div className="flex gap-5 justify-between mt-2.5 whitespace-nowrap text-neutral-950 max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-xl">{t('доставка')}</div>
          <div className="text-3xl">{`${delivery}р`}</div>
        </div>
        <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-950 border-neutral-950 max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-2.5 text-neutral-950 max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto text-xl">{t('итого')}</div>
          <div className="text-3xl">{`${mainTotal}р`}</div>
        </div>
        <StyledButton
          customClassName="mt-8"
          text={t('оплатить').toUpperCase()}
          onClick={() => { }}
          alternative
        />
      </div>
    </aside>
  );
};

export default OrderSummary;