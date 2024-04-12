import * as React from "react";

interface ProductProps {
  imageUrl: string;
  price: number;
  volume: string;
  description: string;
  ingredients: string;
}

const Product: React.FC<ProductProps> = ({ imageUrl, price, volume, description, ingredients }) => {
  return (
    <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-col justify-center max-md:max-w-full">
        <div className="flex flex-col items-center px-16 pb-14 max-md:px-5 max-md:max-w-full">
          <img src={imageUrl} alt="Product" className="max-w-full aspect-[0.42] w-[157px]" />
        </div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c968b37ed26cb47c8010e5bb04a4282011f204d314a7b946b459a5ed0bcb6dc3?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&" alt="Product Variant 1" className="shrink-0 max-w-full aspect-square w-[149px] max-md:mt-5" />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f3803be556b429bb2ff5471c73b954a1bcfd6fb6d47d0aac61c23c4d923419?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&" alt="Product Variant 2" className="shrink-0 max-w-full aspect-square w-[149px] max-md:mt-5" />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08d7281ff4412d5794011c50449a3eeb5104fbe02baeace3745c18471123bec?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&" alt="Product Variant 3" className="shrink-0 max-w-full aspect-square w-[149px] max-md:mt-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col grow self-stretch pb-20 text-neutral-950 max-md:mt-5">
        <div className="flex flex-col justify-center text-3xl w-[70px]">
          <div className="justify-center self-stretch w-[100px]">{price}р</div>
        </div>
        <div className="flex flex-col mt-12 text-base uppercase max-md:mt-10">
          <div className="text-zinc-400">{volume}</div>
          <div className="mt-8">
            <p>{description}</p>
          </div>
          <div className="mt-8 underline">Состав</div>
          <div className="justify-center px-12 py-6 mt-8 text-xl text-cyan-700 border border-cyan-700 border-solid rounded-[5000px] max-md:px-5">
            Добавить в корзину
          </div>
        </div>
      </div>
    </div>
  );
};

interface PairProductProps {
  imageUrl: string;
  name: string;
  type: string;
  price: number;
}

const PairProduct: React.FC<PairProductProps> = ({ imageUrl, name, type, price }) => {
  return (
    <div className="flex flex-col grow max-md:mt-5">
      <div className="flex flex-col items-start px-14 pb-5 max-md:px-5">
        <img src={imageUrl} alt={name} className="aspect-[0.43] w-[51px] max-sm:mx-auto max-sm:w-full max-sm:max-w-[46px]" />
      </div>
      <div className="flex flex-col mt-5 text-neutral-950">
        <div className="flex flex-col px-11 text-center max-md:px-5">
          <div className="text-xl">{name}</div>
          <div className="self-center mt-2.5 text-sm">{type}</div>
        </div>
        <div className="flex flex-col justify-center px-16 mt-2.5 text-xl max-md:px-5">
          <div className="self-center">{price}р</div>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcd9b6003cd6dbaddc87db8f8bb08bdccfcae98c35aaaace5a50433006a81fc2?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&" alt="Add to Cart" className="self-center mt-5 aspect-square w-[35px]" />
    </div>
  );
};

const pairProducts = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e1da607608b5f8d0ac94bca5fcb1c6ccb2e604f2800c2408b4c75110d99c54c?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&",
    name: "Морозный беж",
    type: "губы",
    price: 1300,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e1da607608b5f8d0ac94bca5fcb1c6ccb2e604f2800c2408b4c75110d99c54c?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&",
    name: "королевский красный",
    type: "губы",
    price: 1300,
  },
];

function Page() {
  return (
    <div className="mt-12 bg-zinc-100 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
          <div className="grow self-stretch max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                <Product
                  imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cc023d50125778c7e2c9c66049e12541b59d85bcbd13cc8c267c5ea0e8f7c282?apiKey=2fbb07f07d034bf4bcd098d0ff179fa1&"
                  price={1300}
                  volume="10мл"
                  description="Прохладный, мелкодисперсный, укрывистый При легком нанесении может выступать в роли тинта. Бесподобный оттенок, похожий на здоровую слизистую кожу губ. На холодную кожу губ без тёплой подложки использовать не рекомендуется. Можно использовать в паре с Королевским Красным для создания сочности. Великолепно сочетается с Морозным бежем."
                  ingredients="Состав"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow self-stretch pb-20 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl text-neutral-950 max-md:max-w-full">идеально в паре</div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {pairProducts.map((product, index) => (
                  <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <PairProduct {...product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;