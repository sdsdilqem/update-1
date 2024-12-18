import React from 'react';
import { Users, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPrompt() {
  const { setShowAuthSheet } = useAuth();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Users className="w-8 h-8 text-blue-500" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        İzlədiklərinizi görün
      </h3>
      
      <p className="text-gray-600 mb-6">
        İzlədiyiniz satıcıların elanlarını görmək üçün daxil olun
      </p>
      
      <button
        onClick={() => setShowAuthSheet({ isOpen: true, defaultTab: 'login' })}
        className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
      >
        Daxil ol
      </button>
    </div>
  );
}