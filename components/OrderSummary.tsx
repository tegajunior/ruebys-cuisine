import React from 'react';

interface OrderSummaryProps {
  items: { name: string; quantity: number; price: number }[];
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, totalPrice }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-2">
        <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default OrderSummary;