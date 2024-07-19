import React from 'react';

const OrderForm: React.FC = () => {
  return (
    <form className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-base grow text-zinc-400 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-xl text-neutral-950 max-md:max-w-full">Укажите ваш город</h2>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d119243cd1c419011aa7a8743382eeece833a40a34dc0e2e2b74c7dfb5595654?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&" alt="" className="mt-12 aspect-square w-[35px] max-md:mt-10" />
        <div className="shrink-0 mt-2.5 h-px border border-solid bg-neutral-950 border-neutral-950 max-md:max-w-full" />
        <h2 className="mt-12 text-xl text-neutral-950 max-md:mt-10 max-md:max-w-full">адрес доставки</h2>
        <label htmlFor="street" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">улица*</label>
        <input type="text" id="street" className="sr-only" required />
        <label htmlFor="house" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">дом*</label>
        <input type="text" id="house" className="sr-only" required />
        <label htmlFor="apartment" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">квартира*</label>
        <input type="text" id="apartment" className="sr-only" required />
        <label htmlFor="comment" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">комментарий*</label>
        <textarea id="comment" className="sr-only" required></textarea>
        <div className="mt-2.5 text-xs max-md:max-w-full">код домофона, подъезд, этаж.</div>
        <div className="mt-8 text-xl text-cyan-700 max-md:max-w-full">сдэк доставка до 15.07</div>
        <h2 className="mt-12 text-xl text-neutral-950 max-md:mt-10 max-md:max-w-full">заберет заказ</h2>
        <label htmlFor="name" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">имя*</label>
        <input type="text" id="name" className="sr-only" required />
        <label htmlFor="email" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">email*</label>
        <input type="email" id="email" className="sr-only" required />
        <label htmlFor="phone" className="px-1.5 pb-2.5 mt-8 uppercase whitespace-nowrap max-md:max-w-full">телефон*</label>
        <input type="tel" id="phone" className="sr-only" required />
        <h2 className="mt-12 text-xl text-neutral-950 max-md:mt-10 max-md:max-w-full">способ оплаты</h2>
        <label htmlFor="card" className="px-1.5 pb-2.5 mt-8 uppercase max-md:max-w-full">номер карты*</label>
        <input type="text" id="card" className="sr-only" required />
        <div className="flex justify-center gap-5 mt-8 uppercase whitespace-nowrap max-md:flex-wrap">
          <div className="flex-1 px-1.5 pb-2.5">
            <label htmlFor="cvv" className="sr-only">cvv/cvc</label>
            <input type="text" id="cvv" className="sr-only" required />
          </div>
          <div className="flex-1 px-1.5 pb-2.5">
            <label htmlFor="expiry" className="sr-only">месяц/год</label>
            <input type="text" id="expiry" className="sr-only" required />
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;