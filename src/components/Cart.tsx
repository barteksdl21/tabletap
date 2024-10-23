import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg">
        <ShoppingCart size={24} />
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Your Order</h2>
      <div className="max-h-96 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-2 border-b">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-100 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}