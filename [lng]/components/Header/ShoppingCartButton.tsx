import { FC } from 'react';

interface IShoppingCartButton {
  count: number;
}

const ShoppingCartButton: FC<IShoppingCartButton> = ({ count }) => {
  return (
    <button className="relative rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8" // TailwindCSS classes for size 44x44
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7h18v13a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7V5a4 4 0 00-8 0v2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 7h14"
        />
      </svg>
      {!!count && <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-sh-azure rounded-full">
        {count}
      </span>}
    </button>
  );
};

export default ShoppingCartButton;
