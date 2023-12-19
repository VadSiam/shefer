import Image from 'next/image';

export interface IProductCard {
  imageUrl: string;
  type: string;
  title: string;
  price: string;
}

const ProductCard = ({ item }: { item: IProductCard }) => {

  return (
    <div className="embla__slide">
      <div className="dark:border-gray-400 active-card scale-80 hover:scale-110 hover:shadow-2xl hover:z-[-250px] relative rounded-lg transition-transform duration-400 ease-in-out w-full max-w-sm">
        <a href="#">
          <Image
            className="embla__slide__img p-6"
            src={item.imageUrl}
            alt="Product"
            width={200}
            height={100}
            objectFit="cover"
          />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.type}
          </h6>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {item.price}
            </span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
