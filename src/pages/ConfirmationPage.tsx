import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function ConfirmationPage() {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="text-green-500" size={64} />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your order. Your order number is:
            <br />
            <span className="font-mono font-bold text-xl text-gray-900">
              #{orderNumber}
            </span>
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              We'll start preparing your order right away.
              You'll receive an email with your order details.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Return to Menu
            <ArrowRight size={20} />
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Redirecting to menu in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
}