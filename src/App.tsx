import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { PaymentPage } from './pages/PaymentPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;