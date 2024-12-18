import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import CreatePostSheet from './CreatePostSheet';

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white to-blue-50/50 rounded-2xl shadow-sm p-4 mb-6 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-4 group"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
        </div>
        
        <div className="flex-1 text-left">
          <p className="text-gray-900 font-medium mb-0.5">Nə satırsınız?</p>
          <p className="text-sm text-gray-500">Məhsul paylaş</p>
        </div>
      </button>

      <CreatePostSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}