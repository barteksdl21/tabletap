import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuCard } from '../components/MenuCard';
import { Cart } from '../components/Cart';
import { CategoryTabs } from '../components/CategoryTabs';
import { menuItems, categories } from '../data/menuItems';
import { UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  const { cartItems, addToCart, updateQuantity, removeItem } = useCart();

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-black" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Fine Dining</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <Cart
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onCheckout={handleCheckout}
        />
      </main>
    </div>
  );
}