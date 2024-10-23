import React from 'react';
import { Plus } from 'lucide-react';
import type { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
          <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <button
          onClick={() => onAddToCart(item)}
          className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
}