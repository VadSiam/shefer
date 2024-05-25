'use client'
import React from 'react';

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold">Итого</h2>
      <p className="text-lg">{total} Р</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Перейти к оформлению</button>
    </div>
  );
};

export default CartSummary;